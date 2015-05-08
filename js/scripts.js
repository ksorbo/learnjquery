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
    $('#cacheKb').html((localStorageConsumed()/1056).toFixed(2) + ' Kb local storage used by device.');
    loadOptions();
    $('#fullStatsCacheTime').val(options.fullstats.cachetime);
    $('#liveDataCacheTime').val(options.livedata.cachetime);
    $('#prayerTestimoniesCacheTime').val(options.testimonies.cachetime / 3600);
    $('#numberoftestimonies').val(options.testimonies.count);
    $('#numberofinquirers').val(options.inquirers.count).trigger('create');
    $('#numberofresponses').val(options.responses.count).trigger('create');
    $('#numberofprayerrequests').val(options.prayerneeds.count);
    //$('#optionList').trigger('create');
}
function loadOptions() {
    if (localStorage.getItem('options') !== null) {
        var restored = JSON.parse(localStorage.getItem('options'));
        options.livedata.cachetime = restored.liveDataCacheTime;
        options.testimonies.cachetime = restored.prayerTestimoniesCacheTime;
        options.prayerneeds.cachetime = restored.prayerTestimoniesCacheTime;
        options.fullstats.cachetime = restored.fullStatsCacheTime;
        options.testimonies.count = restored.numberoftestimonies;
        options.inquirers.count = restored.numberofinquirers;
        options.responses.count = restored.numberofresponses;
        options.prayerneeds.count = restored.numberofprayerrequests;
    }
}
function saveOptions() {
    var fullStats = $('#fullStatsCacheTime').val();
    var liveStats = $('#liveDataCacheTime').val();
    var prayerTestimonies = $('#prayerTestimoniesCacheTime').val() * 3600;
    var numberOfTestimonies = $('#numberoftestimonies').val();
    var numberOfInquirers = $('#numberofinquirers').val();
    var numberOfResponses = $('#numberofresponses').val();
    var numberOfPrayerNeeds = $('#numberofprayerrequests').val();
    var options = {
        'fullStatsCacheTime': fullStats,
        'liveDataCacheTime': liveStats,
        'prayerTestimoniesCacheTime': prayerTestimonies,
        'numberoftestimonies': numberOfTestimonies,
        'numberofresponses': numberOfResponses,
        'numberofinquirers': numberOfInquirers,
        'numberofprayerrequests':numberOfPrayerNeeds
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
function clearCachePlain() {
    var options = localStorage.getItem('options');
    localStorage.clear();
    localStorage.setItem('options', options);
}
function showHome() {
    var data = fetchItems(options.totals);
    var h = Handlebars.templates.showHome(data);
    $('#homepage-data').html(h).trigger('create');
    console.log('Loaded home page: '+Date());
    //$('#homecontent').trigger('create');
}
function sendprayersignup(){
    //alert('submitting');
    var theData = $('#prayertaskforcesignup').serialize();
    $.ajax({
        url : 'http://rest.net211.com/prayersignup',
        type: 'get',
        dataType: 'json',
        data: theData,
        complete: function(data){
            var message = '<div class="signup-response ui-corner-all">' + JSON.parse(data.responseText)[0]+'</div>';
            $('#prayertaskforceresponse').html(message).trigger('create');
            $('#prayertaskforceresponse').delay(5000).fadeOut();
            //alert(data[0]);
        },
        failure: function(){}
    });

}
function showFullStats(param) {
    ajaxindicatorstart('Loading Project100Million Stats');
    options.fullstats.params = param;
    var data = fetchItems(options.fullstats);
    var h = Handlebars.templates.showFullStats(data);
    h += buildYearPicker(param);
    $('#fullstatsDiv').html(h).trigger('create');
    ajaxindicatorstop();
    $('#full-inquirer-countries').tablesorter({headers: {2: {sorter: 'removecomma'}}});
    $('#full-inquirer-sites').tablesorter({headers: {1: {sorter: 'removecomma'}}});
    $('#full-response-countries').tablesorter({headers: {2: {sorter: 'removecomma'}}});
    $('#full-response-sites').tablesorter({headers: {1: {sorter: 'removecomma'}}});
    $('#full-visits-countries').tablesorter({headers: {2: {sorter: 'removecomma'}}});
    $('#full-visits-sites').tablesorter({headers: {1: {sorter: 'removecomma'}}});
    $('#select-stats-period').change(function () {
        var param = $('#select-stats-period option:selected').val();
        $('#fullstatsDiv').html(loadingScreen()).trigger('create');
        showFullStats(param);
    });
    console.log('Reloaded full stats page: '+Date());
}
function loadingScreen(){
    return "<h1>Retrieving up-to-date statistics...</h1>";
}

function buildYearPicker(select) {
    var ret = '<form><div class="ui-field-contain"><label for="select-stats-period">Select Period to View</label><br>';
    var selected = (select=='all') ? ' selected="selected" ': '';
        ret +='<select name="select-stats-period" id="select-stats-period"><option value="all" '+ selected+'>All Data</option>';
    var dteNow = new Date();
    var intYear = dteNow.getFullYear();
    var i,theYear;
    for (i = intYear; i > 2007; i--) {
        theYear = i + '-01-01/' + i + '-12-31';
        selected = (select==theYear) ? ' selected="selected" ': '';
        ret += '<option value="' + theYear+'"' + selected + '>'+i+'</option>';
    }
    ret += '</select></div></form>';
    return ret;
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
        output += '</li>';
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
    var h = Handlebars.templates.showLiveData(data) + '<br><span class="notation">' + data.time + '</span>';
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
