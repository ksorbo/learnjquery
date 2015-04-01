(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['showTestimonies'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "        <li>\r\n          A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a testimony on  "
    + alias1(helpers.shortenedDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "\r\n        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"testimonies\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</ul>";
},"useData":true});
templates['showTotals'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<table>\r\n    <tr>\r\n        <td>Visitors</td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.visits || (depth0 != null ? depth0.visits : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"visits","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Responses</td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.responses || (depth0 != null ? depth0.responses : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"responses","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Inquirers</td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.inquirers || (depth0 != null ? depth0.inquirers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inquirers","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Salvations</td>\r\n        <td>"
    + alias3(((helper = (helper = helpers.salvations || (depth0 != null ? depth0.salvations : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salvations","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n    <tr><td>Recommitments</td><td>"
    + alias3(((helper = (helper = helpers.recommitments || (depth0 != null ? depth0.recommitments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"recommitments","hash":{},"data":data}) : helper)))
    + "</td></tr>\r\n</table>\r\n";
},"useData":true});
})();