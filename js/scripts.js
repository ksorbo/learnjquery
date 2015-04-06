/**
 * Created by keith on 3/28/2015.
 */

function loadPage(option) {
    var data = fetchItems(option);
    var content = Handlebars.templates[option.template](data);
    $('#' + option.datadiv).html(content).trigger('create');
}
function showOptions() {
    var data = null;
    $('#optionsList').html(Handlebars.templates.showOptions(data)).trigger('create');
    loadOptions();
    $('#fullStatsCacheTime').val(options.fullstats.cachetime);
    $('#liveDataCacheTime').val(options.livedata.cachetime);
    $('#prayerTestimoniesCacheTime').val(options.testimonies.cachetime / 3600);
    $('#numberofresponses').val(options.responses.count);
    $('#numberofinquirers').val(options.inquirers.count);
    $('#numberoftestimonies').val(options.testimonies.count);
    $('#numberofprayerneeds').val(options.prayerneeds.count);

}
function loadOptions() {
    if (localStorage.getItem('options') !== null) {
        var restored = JSON.parse(localStorage.getItem('options'));
        options.livedata.cachetime = restored.liveDataCacheTime;
        options.testimonies.cachetime = restored.prayerTestimoniesCacheTime;
        options.prayerneeds.cachetime = restored.prayerTestimoniesCacheTime;
        options.fullstats.cachetime = restored.fullStatsCacheTime;
        options.responses.count = restored.numberofresponses;
        options.inquirers.count = restored.numberofinquirers;
        options.testimonies.count = restored.numberoftestimonies;
        options.prayerneeds.count = restored.numberofprayerneeds;
    }
}
function saveOptions() {
    var fullStats = $('#fullStatsCacheTime').val()
    var liveStats = $('#liveDataCacheTime').val();
    var prayerTestimonies = $('#prayerTestimoniesCacheTime').val() * 3600;
    var numberofresponses = $('#numberofresponses').val();
    var numberofinquirers = $('#numberofinquirers').val();
    var numberoftestimonies = $('#numberoftestimonies').val();
    var numberofprayerneeds = $('#numberofprayerneeds').val();

    var options = {
        'fullStatsCacheTime': fullStats,
        'liveDataCacheTime': liveStats,
        'prayerTestimoniesCacheTime': prayerTestimonies,
        'numberofresponses': numberofresponses,
        'numberofinquirers': numberofinquirers,
        'numberoftestimonies': numberoftestimonies,
        'numberofprayerneeds': numberofprayerneeds
    };
    localStorage.setItem('options', JSON.stringify(options));
    loadOptions();
}
function showInquirers() {
    ajaxindicatorstart('Loading latest inquirers');
    var data = fetchItems(options.inquirers);
    $('#inquirersList').html(Handlebars.templates.showInquirers(data)).trigger('create');
    ajaxindicatorstop();
}
function showResponses() {
    var data = fetchItems(options.responses);
    $('#responsesList').html(Handlebars.templates.showResponses(data)).trigger('create');
}
function clearCache() {
    var options = localStorage.getItem('options');
    localStorage.clear();
    localStorage.setItem('options', options);
    //showTestimonies(15, 'desc', 'thisyear');
    $.mobile.navigate('#debug');
}
function showHome() {
    //var data = fetchItems(options.totals);
    //$('#totalsarea').html(Handlebars.templates.showTotals(data)).trigger('create');
    $('#homecontent').trigger('create');
}
function showFullStats(param) {
    ajaxindicatorstart('Loading Project100Million Stats')
    options.fullstats.params = param;
    var data = fetchItems(options.fullstats);
    var h = Handlebars.templates.showFullStats(data);
    $('#fullstatsDiv').html(h).trigger('create');
    ajaxindicatorstop();
}
function showTotals() {
    //var output = '';
    var data = fetchItems(options.totals);
    $('#totalsarea').html(Handlebars.templates.showTotals(data)).trigger('create');
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
function refreshLiveStats() {
    clearCacheItem(options.livedata.url);
    showLiveDataTotal();
}
function showLiveDataTotal() {
    ajaxindicatorstart('Loading Live Statistics..');
    var data = fetchItems(options.livedata);
    var h = Handlebars.templates.showLiveData(data) + '<br><div class="notation">' + data.time;
    h += ' (Reloads every ' + options.livedata.cachetime + ' seconds)</div>';
    $('#livedataList').html(h).trigger('create');
    ajaxindicatorstop();
}
function showTestimonies() {
    var data = fetchItems(options.testimonies);
    $('#testimoniesList').html(Handlebars.templates.showTestimonies(data)).trigger('create');
}
/**
 * assumes already loaded in cache
 */
function showPrayerNeeds() {

    var data = fetchItems(options.prayerneeds);
    $('#prayerneedsList').html(Handlebars.templates.showPrayerNeeds(data)).trigger('create');
}
function showNews() {
    options.news.params = 10;
    var data = fetchItems(options.news);
    $('#newsList').html(Handlebars.templates.showNewsArticles(data)).trigger('create');
}
function fetchItems(option) {

    var myUrl = option.url;
    if (option.params) {
        myUrl += '/' + option.params;
    }
    if (option.order) {
        myUrl += '/' + option.order;
    }
    if (option.count) {
        myUrl += '/' + option.count;
    }
    if (option.period) {
        myUrl += '/' + option.period;
    }
    var cacheKey = myUrl;

    //if (option.type == 'totals') {
    //    if (option.params) {
    //        localStorage.removeItem(cacheKey);
    //    }
    //}
    //$.mobile.loading('show');
    var retVal = getCache(cacheKey, option.cachetime);
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
                    putCache(cacheKey, data);
                    console.log('Fetched data for ' + cacheKey);
                    retVal = data;
                }
            });
    } else {
        console.log('Got cache for ' + cacheKey);
    }
    //$.mobile.loading('hide');
    return retVal;
}
