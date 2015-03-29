/**
 * Created by keith on 3/29/2015.
 */

function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

/**
 * saves the object data to localStorage with a save time included
 * @param keyName
 * @param data
 * @returns {boolean}
 */
function putCache(keyName, data) {
    var d = new Date;
    var saveTime = d.getTime() / 1000;
    var cache = {"saveTime": saveTime, 'data': data};
    localStorage.setItem(keyName, JSON.stringify(cache));
    return true;
}
/**
 * Look for the keyname in the localStorage. if it is older than age seconds return null
 * @param keyName
 * @param age
 */
function getCache(keyName, age) {
    var d = new Date;
    var nw = d.getTime() / 1000;
    var cache, saveTime;
    if (localStorage.getItem(keyName) !== null) {
        cache = JSON.parse(localStorage.getItem(keyName));
        saveTime = cache.saveTime;
        if (saveTime + age < nw) {
            return null;
        }
        return cache.data;
    }
    return null;
}