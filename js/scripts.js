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
    $('#totalsarea2').html(Handlebars.templates.showTotals(data)).trigger('create');
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
    var h = Handlebars.templates.showLiveData(data)+'<br><span class="notation">'+data.time+'</span>';
    $('#livedatatotal').html(h).trigger('create');
}
function showTestimonies() {
    var data = fetchItems(options.testimonies);
    $('#testimoniesList2').html(Handlebars.templates.showTestimonies(data)).trigger('create');
}

/**
 * assumes already loaded in cache
 */
function showPrayerNeeds() {

    var data = fetchItems(options.prayerneeds);
    $('#prayerneedsList').html(Handlebars.templates.showPrayerNeeds(data)).trigger('create');
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
