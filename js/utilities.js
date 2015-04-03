/**
 * Created by keith on 3/29/2015.
 */
String.prototype.isNumber = function(){return /^\d+$/.test(this);};

//function paddy(n, p, c) {
//    var pad_char = typeof c !== 'undefined' ? c : '0';
//    var pad = new Array(1 + p).join(pad_char);
//    return (pad + n).slice(-pad.length);
//}
function clearCacheItem(keyName){
    if(localStorage.getItem(keyName)!==null){
        localStorage.removeItem(keyName);
    }
}
/**
 * saves the object data to localStorage with a save time included
 * @param keyName
 * @param data
 * @returns {boolean}
 */
function putCache(keyName, data) {
    var d = new Date;
    var saveTime = d.getTime() ;
    //console.log('Savetime = ' + saveTime);
    var cache = {"saveTime": saveTime, 'data': data};
    localStorage.setItem(keyName, JSON.stringify(cache));
    return true;
}
/**
 * Look for the keyname in the localStorage. if it is older than age seconds return null
 * @param keyName
 * @param age in seconds
 */
function getCache(keyName, age) {
    var d = new Date;
    var nw = d.getTime();
    var cache, saveTime;
    if (localStorage.getItem(keyName) !== null) {
        cache = JSON.parse(localStorage.getItem(keyName));
        saveTime = cache.saveTime;
        if (saveTime + (1000*age) < nw) {
            return null;
        }
        return cache.data;
    }
    return null;
}
function ajaxindicatorstart(text)
{
    if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
        jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="img/ajax-loader.gif"><div>'
        +text+'</div></div><div class="bg"></div></div>');
    }

    jQuery('#resultLoading').css({
        'width':'100%',
        'height':'100%',
        'position':'fixed',
        'z-index':'10000000',
        'top':'0',
        'left':'0',
        'right':'0',
        'bottom':'0',
        'margin':'auto'
    });

    jQuery('#resultLoading .bg').css({
        'background':'#000000',
        'opacity':'0.7',
        'width':'100%',
        'height':'100%',
        'position':'absolute',
        'top':'0'
    });

    jQuery('#resultLoading>div:first').css({
        'width': '250px',
        'height':'75px',
        'text-align': 'center',
        'position': 'fixed',
        'top':'0',
        'left':'0',
        'right':'0',
        'bottom':'0',
        'margin':'auto',
        'font-size':'16px',
        'z-index':'10',
        'color':'#ffffff'

    });

    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeIn(300);
    jQuery('body').css('cursor', 'wait');
}
function ajaxindicatorstop()
{
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeOut(300);
    jQuery('body').css('cursor', 'default');
}