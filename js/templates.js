(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['showLiveData'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\r\n                    <td align=\"right\">"
    + alias1(this.lambda(depth0, depth0))
    + "</td>\r\n                </tr>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "            <tr>\r\n                <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\r\n                <td align=\"right\">"
    + alias1(this.lambda(depth0, depth0))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"center\">\r\n    <div class=\"bignumber\">\r\n        "
    + this.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <p class=\"visitors\">Visitors on All Sites</p>\r\n</div>\r\n\r\n\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Countries Visitors are From</h3>\r\n\r\n    <div>\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <td>Country</td>\r\n                <td>Visitors</td>\r\n            </tr>\r\n            </thead>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\r\n\r\n    </div>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Websites Being Visited</h3>\r\n\r\n    <table>\r\n        <thead>\r\n        <tr>\r\n            <td>Website</td>\r\n            <td>Visitors</td>\r\n        </tr>\r\n        </thead>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sites : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Pages Being Viewed</h3>\r\n\r\n    <table>\r\n        <thead>\r\n        <tr>\r\n            <td>Pages</td>\r\n            <td>Visitors</td>\r\n        </tr>\r\n        </thead>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n";
},"useData":true});
templates['showPrayerNeeds'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\" data-collapsed=\"false\">\r\n            <h3>\r\n                A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a prayer request\r\n                on  "
    + alias1((helpers.shortenedDate || (depth0 && depth0.shortenedDate) || alias2).call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "\r\n            </h3>\r\n            <p>\r\n                "
    + alias1(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "\r\n            </p>\r\n       </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Prayer Needs</h1>\r\n<div data-role=\"collapsible-set\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['showTestimonies'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\" data-collapsed=\"false\">\r\n      <h3> A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a testimony on  "
    + alias1((helpers.shortenedDate || (depth0 && depth0.shortenedDate) || alias2).call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "</h3>\r\n      <p>"
    + alias1(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Testimonies</h1>\r\n\r\n<div data-role=\"collapsible-set\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});
templates['showTotals'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "<table>\r\n    <tr>\r\n        <td colspan=\"2\" align=\"center\">For the Period <br> "
    + alias1(((helper = (helper = helpers.perioddescription || (depth0 != null ? depth0.perioddescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"perioddescription","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Visitors</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Responses</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Inquirers</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Salvations</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.salvations : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Recommitments</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.recommitments : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n</table>\r\n";
},"useData":true});
})();