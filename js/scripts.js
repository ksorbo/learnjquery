/**
 * Created by keith on 3/28/2015.
 */

function clearCache() {
    localStorage.clear();
    showTestimonies(15, 'desc', 'thisyear');
}

function showTotals() {
    //var output = '';
    var data = fetchItems(options.totals);
    var data2 = {};
    var h;
    Object.keys(data).forEach(function (key) {
        h = (data[key]);
        if(h.isNumber()) {
            data2[key] = numberWithCommas(h);
        }
    });

    $('#totalsarea2').html(Handlebars.templates.showTotals(data2));
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
    output += '<div class="bignumber">' + data.total + '</div>';
    output += '<p class="visitors">Visitors On All Sites</p>';
    //output += '<p class="visitors">' + data.time + '</p>';
    output += '</div>';
    //output += '<table><thead><tr><td>Site</td><td>Visitors</td></tr></thead>';
    //jQuery.each(data.sites,function(k,val){
    //    output += '<tr><td>'+ k + '</td><td>'+val+'</td></tr>';
    //});
    //output += '</table>';
    //output += '<table><thead><tr><td>Country</td><td>Visitors</td></tr></thead>';
    //$.each(data.countries,function(country,visits){
    //    output += '<tr><td>'+ country + '</td><td>'+visits+'</td></tr>';
    //});
    //output += '</table>';
    output += '<div id="countrychart" style="width:90%"></div>';
    $('#livedatatotal').html(output);
    var chartdata = [];
    $.each(data.countries, function (country, visits) {
        chartdata.push([country, visits]);
    });
    //$.jqplot('countrychart',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
    chartdata = [[['US', 5], ['China', 3], ['Indonesia', 4], ['Mexico', 5]]];
    $.jqplot('countrychart', chartdata, {
        seriesDefaults: {renderer: $.jqplot.PieRenderer},
        legend: {show: true}
    });
    //console.log(output);

}
function showTestimonies() {

    var data = fetchItems(options.testimonies);
    var h = Handlebars.templates.showTestimonies(data);
    $('#testimoniesList2').html(h);
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
        if (options.totals.params) {
            myUrl += '/' + options.totals.params;
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
                    console.log('Fetched data for ' + keyName);
                    retVal = data;
                }
            });
    }
    return retVal;
}
