/**
 * Created by ksorbo on 4/2/2015.
 */
var rootDomain = 'http://rest.net211.com/';
var options = {
    'testimonies': {
        'type': 'testimonies',
        'count': 10,
        'order': 'desc',
        'period': 'thisyear',  // @todo doesn't like all
        'url': rootDomain + 'items/testimonies',
        'cachetime': 86400,
        'template': 'testimoniesList',
        'datadiv':'show'
    },
    'prayerneeds': {
        'type': 'prayerneeds',
        'count': 15,
        'order': 'desc',
        'period': 'thisyear',
        'cachetime': 86400,
        'url': rootDomain + 'items/prayerneeds',
        'template': 'showPrayerNeeds',
        'datadiv':'prayerneedsList'
    },
    'inquirers': {
        'type': 'inquirers',
        'url': rootDomain + 'items/inquirers',
        'count': 20,
        'order': 'desc',
        'period': 'thisyear',
        'template':'showInquirers',
        'cachetime':300,
        'datadiv':'inquirersList'
    },

    'responses': {
        'type': 'responses',
        'url': rootDomain + 'items/responses',
        'count': 20,
        'order': 'desc',
        'period': 'thisyear',
        'template':'showResponses',
        'cachetime':300,
        'datadiv':'responsesList'
    },

    'totals': {
        'type': 'totals',
        'cachetime': 120,
        'url': rootDomain + 'totals',
        'template': 'showTotals',
        'datadiv':'totalsarea'
    },
    'livedata': {
        'type': 'livedata',
        'cachetime': 120,
        'url': rootDomain + 'livedata',
        'template': 'showLiveData',
        'datadiv':'livedatatotal'
    },
    'news': {
        'type': 'news',
        'cachetime': 86400,
        'url': rootDomain + 'news',
        'template': 'showNews',
        'datadiv':'newsList'
    }
};

$(document).ready(function () {
    options.totals.params = 'all';
//            fetchItems(options.testimonies);
//            fetchItems(options.prayerneeds);
    showHome();
    $('#select-period').change(function () {
        options.totals.params= $('#select-period option:selected').val();
        showHome();
    });
    $(document).on('pagebeforeshow', '#home', showHome);
    $(document).on('pagebeforeshow', '#debug', showLocalStorage);
    $(document).on('pagebeforeshow', '#prayerneeds', function () {
        loadPage(options.prayerneeds);
    });
    $(document).on('pagebeforeshow', '#news', showNews);
    $(document).on('pagebeforeshow', '#inquirers', function () {
        loadPage(options.inquirers);
    });
    $(document).on('pagebeforeshow', '#responses', function () {
        loadPage(options.responses);
    });

    $(document).on('pagebeforeshow', '#testimonies', function () {
        var data = fetchItems(options.testimonies);
        $('[data-role="content"]').html(Handlebars.templates.showTestimonies(data))
            .trigger('create');
    });
    $(document).on('pagebeforeshow', '#livedata', function () {
        var data = fetchItems(options.livedata);
        var h = Handlebars.templates.showLiveData(data);
        $('[data-role="content"]').html(h).trigger('create');
        options.livedata.timer = setInterval(showLiveDataTotal, options.livedata.cachetime * 1000);
    });
    $(document).on('pagehide', '#livedata', function () {
        if (options.livedata.timer) {
            clearInterval(options.livedata.timer);
        }
    });
    $(document).on('pagebeforeshow', '#home', function () {
        showTotals();
        setInterval(showHome, options.totals.cachetime * 1000);
    });
});