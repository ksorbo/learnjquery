/**
 * Created by ksorbo on 4/1/2015.
 */

Handlebars.registerHelper('formatCurrency', function (value) {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});

Handlebars.registerHelper('genderToPerson',function(gender){
    return (gender.trim()==='male')? 'man':'woman';
});
Handlebars.registerHelper('shortenedDate',function(longdate){
   return longdate.substring(0,10);
});

Handlebars.registerHelper('mediumDate',function(longdate){
    return longdate.substring(0,16);
});

Handlebars.registerHelper("counter", function (index){
    return index + 1;
});

Handlebars.registerHelper('flagIconLink',function(country){
    if(country) {
        country = country.trim();
        //var theMap ={"ô": "o","d’": "d'","é":"e","ã":"a","í":"i","ç":"c"};
        var theMap ={"\u00f4": "o","\u2019": "'","\u00e9":"e","\u00e2":"a","\u00ed":"i","\u00e7":"c","\u00c5":"a","\u00e3":"a","\u00e5":"a"};
        country = country.replace(/[^A-Za-z0-9\[\] ]/g,function(x) { return theMap[x] || x; });
        country= country.indexOf(',')>0 ? country.substring(0, country.indexOf(',')) : country;
        return new Handlebars.SafeString('<img class="flagicon" src="img/flags/' + country.replace(/\s+/g, '-').toLowerCase() + '.png" />');
    }else{ return '';}
});