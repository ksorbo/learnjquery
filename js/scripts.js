/**
 * Created by keith on 3/28/2015.
 */

function showTestimonies(count, order, period) {

    //console.log(data);
    var refreshPeriod = 60 * 60 * 24; // 1 day;
    var data = fetchItems('testimonies',refreshPeriod, count, order, period);
    var output = '';
    var person;
    output += '<h1>Testimonies</h1>';
    //output += '<form><input id="filter-for-testimonies" data-type="search" placeholder="type to filter..."></form>';
    output += '<ul data-role="listview" data-inset="true" data-filter="true" data-input="#filter-for-testimonies">';
    //output += '<li data-role="list-divider" data-theme="a">Testimonies</li>';
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        output += '<li>';
        person = (data[i].gender.trim() == 'female') ? 'woman' : 'man';
        output += 'On ' + data[i].datesubmitted.substring(0, 10) + ' A ' + person + ' from ' + data[i].userlocation;
        //output += data[i].comments;
        output += '</li>';
    }
    $('#testimoniesList').html(output);
}
function showPrayerNeeds(count, order, period) {

    //console.log(data);
    var refreshPeriod = 60 * 60 * 24; // 1 day;
    var data = fetchItems('prayerneeds',refreshPeriod, count, order, period);
    var output = '';
    var person;
    output += '<h1>Prayer Needs</h1>';
    //output += '<form><input id="filter-for-testimonies" data-type="search" placeholder="type to filter..."></form>';
    output += '<ul data-role="listview" data-inset="true" data-filter="true" data-input="#filter-for-testimonies">';
    //output += '<li data-role="list-divider" data-theme="a">Testimonies</li>';
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        output += '<li>';
        person = (data[i].gender.trim() == 'female') ? 'woman' : 'man';
        output += 'On ' + data[i].datesubmitted.substring(0, 10) + ' A ' + person + ' from ' + data[i].userlocation;
        //output += data[i].comments;
        output += '</li>';
    }
    $('#testimoniesList').html(output);
}
function fetchItems(itemType,refreshPeriod, count, order, period) {
    if (refreshPeriod == null) {
        refreshPeriod = 60 * 60 * 5;
    } // seconds
    if (count == null) {
        count = 10;
    }
    if (order == null) {
        order = 'desc';
    }
    if (period == null) {
        period = 'thisyear';
    }
    var keyName = itemType + order + period + paddy(count, 3, '0');
    var myUrl = 'http://rest.net211.com/items/'+itemType+'/' + order + '/' + count + '/' + period;
    var retVal = getCache(keyName, refreshPeriod);
    if (retVal === null) {
        $.ajax(
            {
                method: "GET",
                url: myUrl,
                cache: false,
                async: false,
                success: function (data) {
                    data = JSON.parse(data);
                    putCache(keyName, data);
                    retVal = data;
                }
            });
    }
    return retVal;
}
