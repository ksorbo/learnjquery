/**
 * Created by keith on 3/28/2015.
 */

function loadPage(option) {
    var data = fetchItems(option);
    var content = Handlebars.templates[option.template](data);
    $('#'+option.datadiv).html(content).trigger('create');

}
function showInquirers(){
    var data = fetchItems(options.inquirers);
    $('#inquirersList').html(Handlebars.templates.showInquirers(data)).trigger('create');
}
function showResponses(){
    var data = fetchItems(options.responses);
    $('#inquirersList').html(Handlebars.templates.showResponses(data)).trigger('create');
}
function clearCache() {
    localStorage.clear();
    //showTestimonies(15, 'desc', 'thisyear');
}
function showHome(){
    var data = fetchItems(options.totals);
    $('#totalsarea').html(Handlebars.templates.showTotals(data)).trigger('create');
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
function showLiveDataTotal() {
    var data = fetchItems(options.livedata);
    var h = Handlebars.templates.showLiveData(data) + '<br><span class="notation">' + data.time + '</span>';
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
function showNews() {
    options.news.params = 3;
    var data = fetchItems(options.news);
    $('#newsList').html(Handlebars.templates.showNews(data)).trigger('create');
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
