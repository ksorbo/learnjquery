/**
 * Created by ksorbo on 4/2/2015.
 */
var rootDomain = 'http://rest.net211.com/';
var appVersion = '0.9.8';
var options = {
    'home':{
        'cachetime': 120
    },
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
        'count': 15,
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

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var element = document.getElementById('aboutversioninfo');
    element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
    'Device Cordova: '  + device.cordova  + '<br />' +
    'Device Platform: ' + device.platform + '<br />' +
    'Device UUID: '     + device.uuid     + '<br />' +
    'Device Version: '  + device.version  + '<br />';
}

$(document).ready(function () {

    loadOptions();
    //var devicePlatform = device.cordova;
    //var deviceVersion = device.version;
    //$('#aboutversioninfo').html('<p>Version: '+ appVersion + '<br>'+' Device Info: '+ devicePlatform+':'+deviceVersion+'</p>' );
    //alert('Device: '+devicePlatform+ "-"+deviceVersion);
    $('#button-bars').css('margin-top', '23px');
    showHome();

    $(document).on('pageshow', '#home', function(){
        //showHome();
        options.home.timer = setInterval(showHome, options.home.cachetime * 1000);
        //options.home.clock = setInterval(function(){
        //    var d = new Date();
        //    $('#home-tmp').html(d.getHours() + ':' + d.getMinutes()+':'+d.getSeconds());
        //},
        //1000);
    });
    $(document).on('pagehide','#home',function(){
        if(options.home.timer){
            clearInterval(options.home.timer);
        }
    });
    $(document).on('pagebeforeshow', '#debug', showLocalStorage);
    $(document).on('pagebeforeshow', '#prayerneeds', showPrayerNeeds);
    $(document).on('pagebeforeshow', '#news', showNews);
    $(document).on('pagebeforeshow', '#inquirers', showInquirers);
    $(document).on('pagebeforeshow', '#responses', showResponses);
    $(document).on('pagebeforeshow', '#testimonies', showTestimonies);

    $(document).on('pageshow', '#fullstats', function () {
        showFullStats('all');
    });

    //OPTIONS
    $(document).on('pagebeforeshow', '#options', showOptions);
    $(document).on('pagehide', '#options', saveOptions);

    //LIVE DATA
    $(document).on('pageshow', '#livedata', function () {
        showLiveDataTotal();
        options.livedata.timer = setInterval(showLiveDataTotal, options.livedata.cachetime * 1000);
    });
    $(document).on('pagehide', '#livedata', function () {
        if (options.livedata.timer) {
            clearInterval(options.livedata.timer);
        }
    });
    $('#prayertaskforcesignup').submit(function(e){
        sendprayersignup();
        e.preventDefault();
    });
});


// add parser through the tablesorter addParser method
$.tablesorter.addParser({
    // set a unique id
    id: 'removecomma',
    is: function(s) {
        // return false so this parser is not auto detected
        return false;
    },
    format: function(s) {
        // format your data for normalization
        return s.replace(/,/g,'');
    },
    // set type, either numeric or text
    type: 'numeric'
});