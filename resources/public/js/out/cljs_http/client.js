// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.Uri');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3429__auto__ = v;if(cljs.core.truth_(and__3429__auto__))
{return (v > 0);
} else
{return and__3429__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__10692_SHARP_,p2__10691_SHARP_){var vec__10694 = clojure.string.split.call(null,p2__10691_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__10694,0,null);var v = cljs.core.nth.call(null,vec__10694,1,null);return cljs.core.assoc.call(null,p1__10692_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [200,null,201,null,202,null,203,null,204,null,300,null,205,null,301,null,206,null,302,null,207,null,303,null,307,null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10697){var vec__10698 = p__10697;var k = cljs.core.nth.call(null,vec__10698,0,null);var v = cljs.core.nth.call(null,vec__10698,1,null);return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''))))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",1007197398).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",1007197398)),new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6224__auto___10733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_10723){var state_val_10724 = (state_10723[1]);if((state_val_10724 === 2))
{var inst_10718 = (state_10723[2]);var inst_10719 = cljs_http.client.decode_body.call(null,inst_10718,cljs.reader.read_string,"application/edn");var inst_10720 = cljs.core.async.put_BANG_.call(null,channel,inst_10719);var inst_10721 = cljs.core.async.close_BANG_.call(null,channel);var state_10723__$1 = (function (){var statearr_10725 = state_10723;(statearr_10725[7] = inst_10720);
return statearr_10725;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10723__$1,inst_10721);
} else
{if((state_val_10724 === 1))
{var inst_10716 = client.call(null,request);var state_10723__$1 = state_10723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10723__$1,2,inst_10716);
} else
{return null;
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_10729 = [null,null,null,null,null,null,null,null];(statearr_10729[0] = state_machine__6210__auto__);
(statearr_10729[1] = 1);
return statearr_10729;
});
var state_machine__6210__auto____1 = (function (state_10723){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_10723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e10730){if((e10730 instanceof Object))
{var ex__6213__auto__ = e10730;var statearr_10731_10734 = state_10723;(statearr_10731_10734[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10735 = state_10723;
state_10723 = G__10735;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_10723){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_10723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_10732 = f__6225__auto__.call(null);(statearr_10732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___10733);
return statearr_10732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__10736){var vec__10738 = p__10736;var accept = cljs.core.nth.call(null,vec__10738,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3441__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var accept__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_accept = function (client,var_args){
var p__10736 = null;if (arguments.length > 1) {
  p__10736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__10736);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__10739){
var client = cljs.core.first(arglist__10739);
var p__10736 = cljs.core.rest(arglist__10739);
return wrap_accept__delegate(client,p__10736);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__10740){var vec__10742 = p__10740;var content_type = cljs.core.nth.call(null,vec__10742,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3441__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var content_type__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_content_type = function (client,var_args){
var p__10740 = null;if (arguments.length > 1) {
  p__10740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__10740);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__10743){
var client = cljs.core.first(arglist__10743);
var p__10740 = cljs.core.rest(arglist__10743);
return wrap_content_type__delegate(client,p__10740);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"json-params","json-params",2645529981).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",2645529981)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6224__auto___10778 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_10768){var state_val_10769 = (state_10768[1]);if((state_val_10769 === 2))
{var inst_10763 = (state_10768[2]);var inst_10764 = cljs_http.client.decode_body.call(null,inst_10763,cljs_http.util.json_decode,"application/json");var inst_10765 = cljs.core.async.put_BANG_.call(null,channel,inst_10764);var inst_10766 = cljs.core.async.close_BANG_.call(null,channel);var state_10768__$1 = (function (){var statearr_10770 = state_10768;(statearr_10770[7] = inst_10765);
return statearr_10770;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10768__$1,inst_10766);
} else
{if((state_val_10769 === 1))
{var inst_10761 = client.call(null,request);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10768__$1,2,inst_10761);
} else
{return null;
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_10774 = [null,null,null,null,null,null,null,null];(statearr_10774[0] = state_machine__6210__auto__);
(statearr_10774[1] = 1);
return statearr_10774;
});
var state_machine__6210__auto____1 = (function (state_10768){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_10768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e10775){if((e10775 instanceof Object))
{var ex__6213__auto__ = e10775;var statearr_10776_10779 = state_10768;(statearr_10776_10779[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10780 = state_10768;
state_10768 = G__10780;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_10768){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_10768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_10777 = f__6225__auto__.call(null);(statearr_10777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___10778);
return statearr_10777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__10783){var map__10784 = p__10783;var map__10784__$1 = ((cljs.core.seq_QMARK_.call(null,map__10784))?cljs.core.apply.call(null,cljs.core.hash_map,map__10784):map__10784);var req = map__10784__$1;var query_params = cljs.core.get.call(null,map__10784__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"android","android",4447480289)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var m = temp__4090__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",4231316563)),new cljs.core.Keyword(null,"request-method","request-method",1993477457),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__10785_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__10785_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__10789){var map__10790 = p__10789;var map__10790__$1 = ((cljs.core.seq_QMARK_.call(null,map__10790))?cljs.core.apply.call(null,cljs.core.hash_map,map__10790):map__10790);var req = map__10790__$1;var query_params = cljs.core.get.call(null,map__10790__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4090__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4090__auto__))
{var spec = temp__4090__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),(function (p1__10786_SHARP_){return cljs.core.merge.call(null,p1__10786_SHARP_,query_params);
})));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__10791){var vec__10793 = p__10791;var credentials = cljs.core.nth.call(null,vec__10793,0,null);return (function (req){var credentials__$1 = (function (){var or__3441__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
};
var wrap_basic_auth = function (client,var_args){
var p__10791 = null;if (arguments.length > 1) {
  p__10791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__10791);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__10794){
var client = cljs.core.first(arglist__10794);
var p__10791 = cljs.core.rest(arglist__10794);
return wrap_basic_auth__delegate(client,p__10791);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var oauth_token = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a battaries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,request))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__10795){var vec__10797 = p__10795;var req = cljs.core.nth.call(null,vec__10797,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__10795 = null;if (arguments.length > 1) {
  p__10795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__10795);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__10798){
var url = cljs.core.first(arglist__10798);
var p__10795 = cljs.core.rest(arglist__10798);
return delete$__delegate(url,p__10795);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__10799){var vec__10801 = p__10799;var req = cljs.core.nth.call(null,vec__10801,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__10799 = null;if (arguments.length > 1) {
  p__10799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__10799);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10802){
var url = cljs.core.first(arglist__10802);
var p__10799 = cljs.core.rest(arglist__10802);
return get__delegate(url,p__10799);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__10803){var vec__10805 = p__10803;var req = cljs.core.nth.call(null,vec__10805,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__10803 = null;if (arguments.length > 1) {
  p__10803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__10803);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__10806){
var url = cljs.core.first(arglist__10806);
var p__10803 = cljs.core.rest(arglist__10806);
return head__delegate(url,p__10803);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__10807){var vec__10809 = p__10807;var req = cljs.core.nth.call(null,vec__10809,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__10807 = null;if (arguments.length > 1) {
  p__10807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__10807);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__10810){
var url = cljs.core.first(arglist__10810);
var p__10807 = cljs.core.rest(arglist__10810);
return move__delegate(url,p__10807);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__10811){var vec__10813 = p__10811;var req = cljs.core.nth.call(null,vec__10813,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__10811 = null;if (arguments.length > 1) {
  p__10811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__10811);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__10814){
var url = cljs.core.first(arglist__10814);
var p__10811 = cljs.core.rest(arglist__10814);
return options__delegate(url,p__10811);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__10815){var vec__10817 = p__10815;var req = cljs.core.nth.call(null,vec__10817,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__10815 = null;if (arguments.length > 1) {
  p__10815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__10815);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__10818){
var url = cljs.core.first(arglist__10818);
var p__10815 = cljs.core.rest(arglist__10818);
return patch__delegate(url,p__10815);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__10819){var vec__10821 = p__10819;var req = cljs.core.nth.call(null,vec__10821,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__10819 = null;if (arguments.length > 1) {
  p__10819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__10819);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__10822){
var url = cljs.core.first(arglist__10822);
var p__10819 = cljs.core.rest(arglist__10822);
return post__delegate(url,p__10819);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__10823){var vec__10825 = p__10823;var req = cljs.core.nth.call(null,vec__10825,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__10823 = null;if (arguments.length > 1) {
  p__10823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__10823);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__10826){
var url = cljs.core.first(arglist__10826);
var p__10823 = cljs.core.rest(arglist__10826);
return put__delegate(url,p__10823);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map