(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['showFullStats'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "                        <tr>\r\n                            <!--<td>"
    + alias2((helpers.counter || (depth0 && depth0.counter) || alias1).call(depth0,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + ". "
    + alias2(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp; "
    + alias2(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</td>-->\r\n                            <td class=\"flag-align\"> "
    + alias2(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "</td>\r\n                            <td> "
    + alias2(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n                            <td align=\"right\">"
    + alias2(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                        </tr>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hostname : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                        <tr>\r\n                            <td>"
    + alias1(((helper = (helper = helpers.hostname || (depth0 != null ? depth0.hostname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"hostname","hash":{},"data":data}) : helper)))
    + "</td>\r\n                            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                        </tr>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                        <tr>\r\n                            <td>"
    + alias1(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;"
    + alias1(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</td>\r\n                            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n                        </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<h2>Summary Statistics</h2>\r\n<div class=\"datagrid\">\r\n    <table>\r\n        <thead>\r\n        <tr>\r\n            <th colspan=\"3\" align=\"center\">For the Period <br>\r\n                "
    + alias1(((helper = (helper = helpers.perioddescription || (depth0 != null ? depth0.perioddescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"perioddescription","hash":{},"data":data}) : helper)))
    + "</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n            <td>Site Visitors</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Evangelism Responses</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Discipleship Connections</td>\r\n            <td>&nbsp;</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Salvations</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.salvations : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Recommitments</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.recommitments : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Questions Asked</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Prayer Needs</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.prayerrequests : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Subscriptions</td>\r\n            <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.subscriptions : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n<div data-role=\"collapsible-set\">\r\n    <div data-role=\"collapsible\">\r\n        <h2>Visitor Nations</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-visits-countries\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>&nbsp;</th>\r\n                <th>Country</th>\r\n                <th>Visitors</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.visitscountries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\">\r\n        <h2>Visitor Sites</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-visits-sites\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>Website</th>\r\n                <th>Visits</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.visitssites : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\">\r\n        <h2>Evangelism Response Nations</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-response-countries\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>&nbsp;</th>\r\n                <th>Nation</th>\r\n                <th>Responses</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsecountries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\">\r\n        <h2>Evangelism Response Sites</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-response-sites\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>Website</th>\r\n                <th>Responses</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsesites : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\">\r\n        <h2>Discipleship Connection Nations</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-inquirer-countries\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>Nation</th>\r\n                <th>Connections</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inquirercountries : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div data-role=\"collapsible\">\r\n        <h2>Dicipleship Connections Sites</h2>\r\n\r\n        <div class=\"datagrid\">\r\n            <table id=\"full-inquirer-sites\" class=\"tablesorter\">\r\n                <thead>\r\n                <th>Website</th>\r\n                <th>Inquirers</th>\r\n                </thead>\r\n                <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inquirersites : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['showHome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "\r\n<div id=\"hometotalsarea\">\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th colspan=\"2\" align=\"center\">Targeting 100 Million</th>\r\n            </tr >\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td >Site Visitors</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.visits : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td >Evangelism Responses</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.responses : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td >Discipleship Connections</td>\r\n                <td align=\"right\">"
    + alias1(helpers.formatCurrency.call(depth0,(depth0 != null ? depth0.inquirers : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <p class=\"home-time\">As of "
    + alias1(helpers.mediumDate.call(depth0,(depth0 != null ? depth0.time : depth0),{"name":"mediumDate","hash":{},"data":data}))
    + "</p>\r\n</div>\r\n\r\n";
},"useData":true});
templates['showInquirers'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "     <li>"
    + alias1(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;<span style=\"text-transform:capitalize;font-weight:bold;\"> "
    + alias1(((helper = (helper = helpers.decision || (depth0 != null ? depth0.decision : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"decision","hash":{},"data":data}) : helper)))
    + "</span> from a "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " in <strong>"
    + alias1(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</strong>&nbsp;on  "
    + alias1(helpers.mediumDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"mediumDate","hash":{},"data":data}))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Recent Discipleship Connections</h1>\r\n<ul class=\"inquirer-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['showLiveData'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias1(helpers.flagIconLink.call(depth0,(data && data.key),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;"
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
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr>\r\n                    <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\r\n                    <td align=\"right\">"
    + alias1(this.lambda(depth0, depth0))
    + "</td>\r\n                </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"center\">\r\n    <div class=\"bignumber\">\r\n        "
    + this.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <p class=\"visitors\">Visitors on All Sites</p>\r\n\r\n    <img style=\"width:450px;display:block;clear:both;float:none;margin:0 auto;\" src=\"http://rest.net211.com/imgcache/livedata.jpg\">\r\n</div>\r\n<!--<a href=\"#\" onclick=\"refreshLiveStats()\" data-role=\"button\">Refresh</a>-->\r\n<div data-role=\"collapsible-set\">\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Visitor Nations</h3>\r\n\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Country</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n\r\n        </table>\r\n\r\n    </div>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Visitor Websites</h3>\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Website</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sites : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div data-role=\"collapsible\" class=\"ui-collapsible ui-collapsible-inset ui-collapsible-collapsed\">\r\n    <h3>Pages Being Viewed</h3>\r\n\r\n    <div class=\"datagrid\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th>Pages</th>\r\n                <th>Visitors</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
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
templates['showOptions'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"setoptions\">\r\n    <h2>Set options</h2>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"numberofresponses\">Number of Recent Evangelism Responses to Request</label>\r\n        <input name=\"numberofresponses\" data-multiplier=3600  id=\"numberofresponses\" min=\"5\" max=\"50\" step=\"1\" value=\"15\" type=\"range\"/>\r\n    </div>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"numberofinquirers\">Number of Discipleship Connections to Request</label>\r\n        <input name=\"numberofinquirers\" data-multiplier=3600  id=\"numberofinquirers\" min=\"5\" max=\"50\" step=\"1\" value=\"15\" type=\"range\"/>\r\n    </div>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"numberoftestimonies\">Number of Testimonies to Request</label>\r\n        <input name=\"numberoftestimonies\" data-multiplier=3600  id=\"numberoftestimonies\" min=\"5\" max=\"30\" step=\"1\" value=\"10\" type=\"range\"/>\r\n    </div>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"numberofprayerrequests\">Number of Prayer Needs to Request</label>\r\n        <input name=\"numberofprayerrequests\" data-multiplier=3600  id=\"numberofprayerrequests\" min=\"5\" max=\"30\" step=\"1\" value=\"10\" type=\"range\"/>\r\n    </div>\r\n\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"liveDataCacheTime\">Live Data Cache Time (seconds)</label>\r\n        <input name=\"liveDataCacheTime\" data-multiplier=1 id=\"liveDataCacheTime\" min=\"60\" max=\"1200\" step=\"30\" value=\"60\" type=\"range\"/>\r\n    </div>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"fullStatsCacheTime\">Project100Million Stats Cache Time (seconds)</label>\r\n        <input name=\"fullStatsCacheTime\" data-multiplier=1  id=\"fullStatsCacheTime\" min=\"60\" max=\"1200\" step=\"30\" value=\"90\" type=\"range\"/>\r\n    </div>\r\n    <div data-role=\"rangeslider\">\r\n        <label for=\"prayerTestimoniesCacheTime\">Prayer Request and Testimonies Cache Time (hours)</label>\r\n        <input name=\"prayerTestimoniesCacheTime\" data-multiplier=3600  id=\"prayerTestimoniesCacheTime\" min=\"5\" max=\"168\" step=\"5\" value=\"72\" type=\"range\"/>\r\n    </div>\r\n\r\n    <!--<div data-role=\"rangeslider\">-->\r\n        <!--<label for=\"liveDataCacheTime\">Live Data Cache Time</label>-->\r\n        <!--<input name=\"liveDataCacheTime\" id=\"liveDataCacheTime\" min=\"60\" max=\"1200\" step=\"30\" value=\"60\" type=\"range\"/>-->\r\n    <!--</div>-->\r\n</div>\r\n<button onclick=\"clearCachePlain();\">Clear Local Cache</button>\r\n<div id=\"cacheKb\"></div>\r\n";
},"useData":true});
templates['showPrayerNeeds'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\" >\r\n            <h3>\r\n                "
    + alias1(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.userlocation : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;A "
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

  return "<h1>Prayer Needs</h1>\r\n<p>These prayer needs are refreshed once a week on Tuesday</p>\r\n<div data-role=\"collapsible-set\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['showResponses'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "        <li>"
    + alias1(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;From <strong>"
    + alias1(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</strong>&nbsp;on  "
    + alias1(((helper = (helper = helpers.visitdate || (depth0 != null ? depth0.visitdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"visitdate","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Recent Evangelism Responses</h1>\r\n\r\n<ul class=\"response-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['showTestimonies'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "    <div data-role=\"collapsible\">\r\n      <h3>"
    + alias1(helpers.flagIconLink.call(depth0,(depth0 != null ? depth0.userlocation : depth0),{"name":"flagIconLink","hash":{},"data":data}))
    + "&nbsp;A "
    + alias1(helpers.genderToPerson.call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"genderToPerson","hash":{},"data":data}))
    + " from "
    + alias1(((helper = (helper = helpers.userlocation || (depth0 != null ? depth0.userlocation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"userlocation","hash":{},"data":data}) : helper)))
    + "shared a testimony on  "
    + alias1(helpers.shortenedDate.call(depth0,(depth0 != null ? depth0.datesubmitted : depth0),{"name":"shortenedDate","hash":{},"data":data}))
    + "</h3>\r\n      <p>"
    + alias1(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Testimonies</h1>\r\n<p>These testimonies are refreshed once a week on Tuesday</p>\r\n<div data-role=\"collapsible-set\">\r\n"
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