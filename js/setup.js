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
        'datadiv': 'show'
    },
    'prayerneeds': {
        'type': 'prayerneeds',
        'count': 10,
        'order': 'desc',
        'period': 'thisyear',
        'cachetime': 86400,
        'url': rootDomain + 'items/prayerneeds',
        'template': 'showPrayerNeeds',
        'datadiv': 'prayerneedsList'
    },
    'inquirers': {
        'type': 'inquirers',
        'url': rootDomain + 'items/inquirers',
        'count': 20,
        'order': 'desc',
        'period': 'thisyear',
        'template': 'showInquirers',
        'cachetime': 300,
        'datadiv': 'inquirersList'
    },

    'responses': {
        'type': 'responses',
        'url': rootDomain + 'items/responses',
        'count': 20,
        'order': 'desc',
        'period': 'thisyear',
        'template': 'showResponses',
        'cachetime': 300,
        'datadiv': 'responsesList'
    },
    'fullstats': {
        'type': 'fullstats',
        'url': rootDomain + 'fullstats',
        'params': 'all',
        'cachetime': 3600,
        'template': 'showFullStats',
        'datadiv': 'fullstatsDiv'
    },
    'totals': {
        'type': 'totals',
        'cachetime': 120,
        'url': rootDomain + 'totals',
        'template': 'showTotals',
        'datadiv': 'totalsarea'
    },
    'livedata': {
        'type': 'livedata',
        'cachetime': 120,
        'url': rootDomain + 'livedata',
        'template': 'showLiveData',
        'datadiv': 'livedataList'
    },
    'news': {
        'type': 'news',
        'cachetime': 86400,
        'url': rootDomain + 'news',
        'template': 'showNews',
        'datadiv': 'newsList'
    }
};

$(document).ready(function () {

    loadOptions();
    $('#button-bars').css('margin-top', '3px');
    $('#select-stats-period').change(function () {
        var param = $('#select-stats-period option:selected').val();
        showFullStats(param);
    });

    $(document).on('pagebeforeshow', '#home', showHome);
    $(document).on('pagebeforeshow', '#debug', showLocalStorage);
    $(document).on('pagebeforeshow', '#prayerneeds', showPrayerNeeds);
    $(document).on('pagebeforeshow', '#news', showNews);
    $(document).on('pagebeforeshow', '#inquirers', showInquirers);
    $(document).on('pagebeforeshow', '#responses', showResponses);
    $(document).on('pagebeforeshow', '#testimonies', showTestimonies);

    $(document).on('pagebeforeshow', '#fullstats', function () {
        showFullStats('all');
    });
    //OPTIONS
    $(document).on('pagebeforeshow', '#options', showOptions);
    $(document).on('pagehide', '#options', saveOptions);

    //LIVE DATA
    $(document).on('pagebeforeshow', '#livedata', function () {
        showLiveDataTotal();
        options.livedata.timer = setInterval(showLiveDataTotal, options.livedata.cachetime * 1000);
    });
    $(document).on('pagehide', '#livedata', function () {
        if (options.livedata.timer) {
            clearInterval(options.livedata.timer);
        }
    });
    //$(document).ajaxStart(function () {
    //    //show ajax indicator
    //    ajaxindicatorstart('loading data.. please wait..');
    //}).ajaxStop(function () {
    //    //hide ajax indicator
    //    ajaxindicatorstop();
    //});
});