/**
 * Created by keith on 3/28/2015.
 */

function clearCache() {
    localStorage.clear();
    showTestimonies(15, 'desc', 'thisyear');
}

function showTotals() {
    var output = '';
    var data = fetchItems(options.totals);
    output += '<table style="width:50%" data-role="table" class="ui-responsive ui-shadow">';
    output += '<tr><td>Site Visitors</td><td align="right">' + numberWithCommas(data.visits) + '</td></tr>';
    output += '<tr><td>Responses</td><td align="right">' + numberWithCommas(data.responses) + '</td></tr>';
    output += '<tr><td>Total Inquirers</td><td align="right">' + numberWithCommas(data.inquirers) + '</td></tr>';
    output += '<tr><td>Salvations</td><td align="right">' + numberWithCommas(data.salvations) + '</td></tr>';
    output += '<tr><td>Recommitments</td><td align="right">' + numberWithCommas(data.recommitments) + '</td></tr>';
    output += '<tr><td>Questions</td><td align="right">' + numberWithCommas(data.questions) + '</td></tr>';
    output += '<tr><td>Prayer Requests</td><td align="right">' + numberWithCommas(data.prayerrequests  ) + '</td></tr>';
    output += '<tr><td>Subscriptions</td><td align="right">' + numberWithCommas(data.subscriptions) + '</td></tr>';
    output += '</table>';
    $('#totalsarea').html(output);
}
function showLocalStorage() {
    var output = '<ul>';
    var i, data;
    var saveTime;
    for (i = 0; i < localStorage.length; i++) {
        output += '<li>Key: <strong>' + localStorage.key(i) + '</strong>, ' + localStorage.getItem(localStorage.key(i)).length + ' bytes, Saved at:';
        data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        saveTime = new Date(data.saveTime).toString();
        output += saveTime;
        output += '</li>'
    }
    output += '</ul>';
    $('#debugcontent').html(output);
}
function showLiveDataTotal() {
    var data = fetchItems(options.livedata);
    var output = '';
    output += '<div class="center">';
    output += '<span class="bignumber">' + data.total + '</span>';
    output += '<p>' + data.time + '</p>';
    output += '</div>';
    //console.log(output);
    $('#livedatatotal').html(output);
}
function showTestimonies() {

    var data = fetchItems(options.testimonies);
    var output = '', person;
    output += '<h1>Testimonies</h1>';
    //output += '<form><input id="filter-for-testimonies" data-type="search" placeholder="type to filter..."></form>';
    output += '<ul data-role="listview" data-inset="true" data-filter="true" data-input="#filter-for-testimonies">';
    //output += '<li data-role="list-divider" data-theme="a">Testimonies</li>';
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        output += '<li>';
        person = (data[i].gender.trim() == 'female') ? 'woman' : 'man';
        output += 'On ' + data[i].datesubmitted.substring(0, 10) + ' A ' + person + ' from ' + data[i].userlocation.trim();
        //output += data[i].comments;
        output += '</li>';
    }
    output += '</ul>';
    $('#testimoniesList').html(output);
}
/**
 * assumes already loaded in cache
 */
function showPrayerNeeds() {

    var data = fetchItems(options.prayerneeds);
    var output = '';
    var person;
    output += '<h1>Prayer Needs</h1>';
    //output += '<form><input id="filter-for-testimonies" data-type="search" placeholder="type to filter..."></form>';
    output += '<ul data-role="listview" data-inset="true" data-filter="true" data-input="#filter-for-testimonies">';
    //output += '<li data-role="list-divider" data-theme="a">Testimonies</li>';
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        output += '<li data-role="collapseable" data-iconpos="right">';
        person = (data[i].gender.trim() == 'female') ? 'woman' : 'man';
        output += '<h3>On ' + data[i].datesubmitted.substring(0, 10) + ' a prayer request from a ' + person + ' in ' + data[i].userlocation + '</h3>';
        output += '<p>' + data[i].comments + '</p>';
        //output += data[i].comments;
        output += '</li>';
    }
    $('#prayerneedsList').html(output);
}
function fetchItems(option) {

    var keyName = option.type;//+ order + period + paddy(count, 3, '0');
    var myUrl = option.url + option.type + '/' + option.order + '/' + option.count + '/' + option.period;
    if (option.type == 'livedata') {
        myUrl = option.url;
    }
    if (option.type == 'totals') {
        myUrl = option.url;
        if (options.totals.params){
            myUrl += '/'+options.totals.params;
            localStorage.removeItem('totals');
        }
    }
    var retVal = getCache(keyName, option.cachetime);
    if (retVal === null) {
        $.ajax(
            {
                method: "GET",
                url: myUrl,
                cache: false,
                async: false,
                success: function (data) {
                    if (typeof(data) === 'string') {
                        data = JSON.parse(data);
                    }
                    putCache(keyName, data);
                    console.log('Fetched data for '+ keyName);
                    retVal = data;
                }
            });
    }
    return retVal;
}
