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