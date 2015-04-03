(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['showFullStats'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                    <tr>\r\n                        <td>"
    + alias1(helpers.counter.call(depth0,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + ". "
    + alias1(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                    </tr>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                    <tr>\r\n                        <td>"
    + alias1(helpers.counter.call(depth0,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + ". "
    + alias1(((helper = (helper = helpers.hostname || (depth0 != null ? depth0.hostname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"hostname","hash":{},"data":data}) : helper)))
    + "</td>\r\n                        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<h2>Summary Statistics</h2>\r\n<div class=\"datagrid\">\r\n    <table>\r\n        <thead>\r\n        <tr>\r\n            <th colspan=\"3\" align=\"center\">For the Period <br>\r\n                "
    + alias1(((helper = (helper = helpers.perioddescription || (depth0 != null ? depth0.perioddescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"perioddescription","hash":{},"data":data}) : helper)))
    + "</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n            <td>Site Visitors</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Evangelism Responses</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Salvations</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.salvations : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Recommitments</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.recommitments : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Questions Asked</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Prayer Needs</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.prayerrequests : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Subscriptions</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.subscriptions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Inquirers</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n<div data-role=\"collapsible-set\">\r\n    <div data-role=\"collapsible\" >\r\n        <h2>Inquirer Countries</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table>\r\n                <thead>\r\n                <th>Country</th>\r\n                <th>Inquirers</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inquirercountries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\" >\r\n        <h2>Sites the Inquires Came From</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table>\r\n                <thead>\r\n                <th>Website</th>\r\n                <th>Inquirers</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inquirersites : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\" >\r\n        <h2>Countries Responses Came From</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table>\r\n                <thead>\r\n                <th>Country</th>\r\n                <th>Responses</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsecountries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\" >\r\n        <h2>Sites the Responses Came From</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table>\r\n                <thead>\r\n                <th>Country</th>\r\n                <th>Responses</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsesites : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['showHome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#inquirers\">Inquirers</a>\r\n<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#responses\">Responses</a>\r\n<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#testimonies\">Testimonies</a>\r\n\r\n<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#prayerneeds\">Prayer Needs</a>\r\n\r\n<a data-role=\"button\" data-theme=\"d\" class=\"ui-btn ui-corners \" href=\"#livedata\">Live Site Report</a>\r\n<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#news\">News</a>\r\n\r\n<a data-role=\"button\" data-theme=\"c\" class=\"ui-btn ui-corners \" href=\"#debug\">Debug</a>\r\n\r\n<div id=\"totalsarea\">\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th colspan=\"3\" align=\"center\">For the Period <br>\r\n                    "
    + alias1(((helper = (helper = helpers.perioddescription || (depth0 != null ? depth0.perioddescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"perioddescription","hash":{},"data":data}) : helper)))
    + "</th>\r\n            </tr >\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td >Site Visitors</td>\r\n                <td>&nbsp;</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td >Evangelism Responses</td>\r\n                <td>&nbsp;</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>Salvations</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.salvations : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>Recommitments</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.recommitments : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Questions Asked</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Prayer Needs</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.prayerrequests : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Subscriptions</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.subscriptions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td >Inquirers</td>\r\n                <td>&nbsp;</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<form>\r\n    <div class=\"ui-field-contain\"><label for=\"select-period\">Select Period to View</label>\r\n        <select name=\"select-period\" id=\"select-period\" onchange=\"options.totals.params='boo'\">\r\n            <option value=\"all\" selected=\"selected\">All Data</option>\r\n            <option value=\"2015-01-01/2015-12-31\">2015</option>\r\n            <option value=\"2014-01-01/2014-12-31\">2014</option>\r\n            <option value=\"2013-01-01/2013-12-31\">2013</option>\r\n            <option value=\"2012-01-01/2012-12-31\">2012</option>\r\n            <option value=\"2011-01-01/2011-12-31\">2011</option>\r\n            <option value=\"2010-01-01/2010-12-31\">2010</option>\r\n            <option value=\"2009-01-01/2009-12-31\">2009</option>\r\n      </select>\r\n    </div>\r\n</form>";
},"useData":true});
templates['showInquirers'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "     <li><span style=\"text-transform:capitalize;font-weight:bold;\">"
    + alias3(((helper = (helper = helpers.decision || (depth0 != null ? depth0.decision : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"decision","hash":{},"data":data}) : helper)))
    + "</span> from a "
    + alias3(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " in <strong>"
    + alias3(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</strong> on  "
    + alias3(helpers.shortenedDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "</li>\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Recent Inquiries</h1>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['showLiveData'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\r\n                    <td align=\"right\">"
    + alias1(this.lambda(depth0, depth0))
    + "</td>\r\n                </tr>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\r\n                    <td align=\"right\" valign=\"top\">"
    + alias1(this.lambda(depth0, depth0))
    + "</td>\r\n                </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"center\">\r\n    <div class=\"bignumber\">\r\n        "
    + this.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <p class=\"visitors\">Visitors on All Sites</p>\r\n</div>\r\n\r\n<div data-role=\"collapsible-set\">\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Countries Visitors are From</h3>\r\n\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Country</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Websites Being Visited</h3>\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Website</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sites : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Pages Being Viewed</h3>\r\n\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Pages</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>";
},"useData":true});
templates['showNewsArticles'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div data-role=\"collapsible\" >\r\n            <h3> "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.newsdate || (depth0 != null ? depth0.newsdate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"newsdate","hash":{},"data":data}) : helper)))
    + ")</h3>\r\n            <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!--title,date,content-->\r\n\r\n\r\n<div data-role=\"collapsible-set\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});
templates['showPrayerNeeds'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\" >\r\n            <h3>\r\n                A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a prayer request\r\n                on  "
    + alias1(helpers.shortenedDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "\r\n            </h3>\r\n            <p>\r\n                "
    + alias1(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "\r\n            </p>\r\n       </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Prayer Needs</h1>\r\n<div data-role=\"collapsible-set\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['showResponses'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li>From <strong>"
    + alias3(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</strong>&nbsp;on  "
    + alias3(((helper = (helper = helpers.visitdate || (depth0 != null ? depth0.visitdate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"visitdate","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Recent Responses</h1>\r\n\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['showTestimonies'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\">\r\n      <h3> A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a testimony on  "
    + alias1(helpers.shortenedDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
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

  return "<div class=\"datagrid\">\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th colspan=\"3\" align=\"center\">For the Period <br>\r\n            "
    + alias1(((helper = (helper = helpers.perioddescription || (depth0 != null ? depth0.perioddescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"perioddescription","hash":{},"data":data}) : helper)))
    + "</th>\r\n    </tr >\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td >Site Visitors</td>\r\n        <td>&nbsp;</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td >Evangelism Responses</td>\r\n        <td>&nbsp;</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Salvations</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.salvations : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Recommitments</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.recommitments : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Questions Asked</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Prayer Needs</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.prayerrequests : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Subscriptions</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.subscriptions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <tr>\r\n        <td >Inquirers</td>\r\n        <td>&nbsp;</td>\r\n        <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n</div>";
},"useData":true});
})();