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

Handlebars.registerHelper("counter", function (index){
    return index + 1;
});

Handlebars.registerHelper('flagIconLink',function(country){
    if(country) {
        country = country.trim();
        country= country.indexOf(',')>0 ? country.substring(0, country.indexOf(',')) : country;
        return new Handlebars.SafeString('<img class="flagicon" src="img/flags/' + country.replace(/\s+/g, '-').toLowerCase() + '.png" />');
    }else{ return '';}
})