// Compiled by ClojureScript 0.0-2173
goog.provide('contacts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('ajax.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
contacts.core.fetch_items = (function fetch_items(app){var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_18175){var state_val_18176 = (state_18175[1]);if((state_val_18176 === 2))
{var inst_18169 = (state_18175[2]);var inst_18170 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_18169);var inst_18171 = cljs.core.print.call(null,inst_18170);var inst_18172 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_18169);var inst_18173 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"list","list",1017226256),inst_18172);var state_18175__$1 = (function (){var statearr_18177 = state_18175;(statearr_18177[7] = inst_18171);
return statearr_18177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18175__$1,inst_18173);
} else
{if((state_val_18176 === 1))
{var inst_18167 = cljs_http.client.get.call(null,"/todos.json");var state_18175__$1 = state_18175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18175__$1,2,inst_18167);
} else
{return null;
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_18181 = [null,null,null,null,null,null,null,null];(statearr_18181[0] = state_machine__6210__auto__);
(statearr_18181[1] = 1);
return statearr_18181;
});
var state_machine__6210__auto____1 = (function (state_18175){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_18175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e18182){if((e18182 instanceof Object))
{var ex__6213__auto__ = e18182;var statearr_18183_18185 = state_18175;(statearr_18183_18185[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18186 = state_18175;
state_18175 = G__18186;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_18175){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_18175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_18184 = f__6225__auto__.call(null);(statearr_18184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_18184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
});
contacts.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",1017226256),cljs.core.PersistentVector.EMPTY], null));
contacts.core.delete_item = (function delete_item(app,id){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"list","list",1017226256),(function (items){return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__18187_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__18187_SHARP_),id);
}),items));
}));
});
contacts.core.item_view = (function item_view(p__18188,owner,opts){var map__18223 = p__18188;var map__18223__$1 = ((cljs.core.seq_QMARK_.call(null,map__18223))?cljs.core.apply.call(null,cljs.core.hash_map,map__18223):map__18223);var item = map__18223__$1;var title = cljs.core.get.call(null,map__18223__$1,new cljs.core.Keyword(null,"title","title",1124275658));var id = cljs.core.get.call(null,map__18223__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof contacts.core.t18224 !== 'undefined')
{} else
{
/**
* @constructor
*/
contacts.core.t18224 = (function (id,title,item,map__18223,opts,owner,p__18188,item_view,meta18225){
this.id = id;
this.title = title;
this.item = item;
this.map__18223 = map__18223;
this.opts = opts;
this.owner = owner;
this.p__18188 = p__18188;
this.item_view = item_view;
this.meta18225 = meta18225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
contacts.core.t18224.cljs$lang$type = true;
contacts.core.t18224.cljs$lang$ctorStr = "contacts.core/t18224";
contacts.core.t18224.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"contacts.core/t18224");
});
contacts.core.t18224.prototype.om$core$IRender$ = true;
contacts.core.t18224.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"onClick": (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_18233){var state_val_18234 = (state_18233[1]);if((state_val_18234 === 2))
{var inst_18229 = (state_18233[2]);var inst_18230 = new cljs.core.Keyword(null,"on-delete","on-delete",633031883).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_18231 = inst_18230.call(null,self__.id);var state_18233__$1 = (function (){var statearr_18235 = state_18233;(statearr_18235[7] = inst_18229);
return statearr_18235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18233__$1,inst_18231);
} else
{if((state_val_18234 === 1))
{var inst_18227 = cljs_http.client.delete$.call(null,"/todos.json/1");var state_18233__$1 = state_18233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18233__$1,2,inst_18227);
} else
{return null;
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_18239 = [null,null,null,null,null,null,null,null];(statearr_18239[0] = state_machine__6210__auto__);
(statearr_18239[1] = 1);
return statearr_18239;
});
var state_machine__6210__auto____1 = (function (state_18233){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_18233);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e18240){if((e18240 instanceof Object))
{var ex__6213__auto__ = e18240;var statearr_18241_18257 = state_18233;(statearr_18241_18257[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18258 = state_18233;
state_18233 = G__18258;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_18233){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_18233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_18242 = f__6225__auto__.call(null);(statearr_18242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_18242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
} else
{var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_18247){var state_val_18248 = (state_18247[1]);if((state_val_18248 === 1))
{var inst_18243 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);var inst_18244 = (function (){return ((function (inst_18243,state_val_18248){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
});
;})(inst_18243,state_val_18248))
})();var inst_18245 = window.setTimeout(inst_18244,10000);var state_18247__$1 = (function (){var statearr_18249 = state_18247;(statearr_18249[7] = inst_18243);
return statearr_18249;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18247__$1,inst_18245);
} else
{return null;
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_18253 = [null,null,null,null,null,null,null,null];(statearr_18253[0] = state_machine__6210__auto__);
(statearr_18253[1] = 1);
return statearr_18253;
});
var state_machine__6210__auto____1 = (function (state_18247){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_18247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e18254){if((e18254 instanceof Object))
{var ex__6213__auto__ = e18254;var statearr_18255_18259 = state_18247;(statearr_18255_18259[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18260 = state_18247;
state_18247 = G__18260;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_18247){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_18247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_18256 = f__6225__auto__.call(null);(statearr_18256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_18256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
}
}), "className": [cljs.core.str("item"),cljs.core.str((cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786)))?" editing":""))].join('')},React.DOM.h2(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(self__.item)),React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.item)));
});
contacts.core.t18224.prototype.om$core$IInitState$ = true;
contacts.core.t18224.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
contacts.core.t18224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18226){var self__ = this;
var _18226__$1 = this;return self__.meta18225;
});
contacts.core.t18224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18226,meta18225__$1){var self__ = this;
var _18226__$1 = this;return (new contacts.core.t18224(self__.id,self__.title,self__.item,self__.map__18223,self__.opts,self__.owner,self__.p__18188,self__.item_view,meta18225__$1));
});
contacts.core.__GT_t18224 = (function __GT_t18224(id__$1,title__$1,item__$1,map__18223__$2,opts__$1,owner__$1,p__18188__$1,item_view__$1,meta18225){return (new contacts.core.t18224(id__$1,title__$1,item__$1,map__18223__$2,opts__$1,owner__$1,p__18188__$1,item_view__$1,meta18225));
});
}
return (new contacts.core.t18224(id,title,item,map__18223__$1,opts,owner,p__18188,item_view,null));
});
contacts.core.add_item_view = (function add_item_view(owner){if(typeof contacts.core.t18264 !== 'undefined')
{} else
{
/**
* @constructor
*/
contacts.core.t18264 = (function (owner,add_item_view,meta18265){
this.owner = owner;
this.add_item_view = add_item_view;
this.meta18265 = meta18265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
contacts.core.t18264.cljs$lang$type = true;
contacts.core.t18264.cljs$lang$ctorStr = "contacts.core/t18264";
contacts.core.t18264.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"contacts.core/t18264");
});
contacts.core.t18264.prototype.om$core$IRender$ = true;
contacts.core.t18264.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form(null,om.dom.input.call(null,null),React.DOM.button(null,"CLICK ME"));
});
contacts.core.t18264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18266){var self__ = this;
var _18266__$1 = this;return self__.meta18265;
});
contacts.core.t18264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18266,meta18265__$1){var self__ = this;
var _18266__$1 = this;return (new contacts.core.t18264(self__.owner,self__.add_item_view,meta18265__$1));
});
contacts.core.__GT_t18264 = (function __GT_t18264(owner__$1,add_item_view__$1,meta18265){return (new contacts.core.t18264(owner__$1,add_item_view__$1,meta18265));
});
}
return (new contacts.core.t18264(owner,add_item_view,null));
});
contacts.core.app_view = (function app_view(app,owner){if(typeof contacts.core.t18271 !== 'undefined')
{} else
{
/**
* @constructor
*/
contacts.core.t18271 = (function (owner,app,app_view,meta18272){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta18272 = meta18272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
contacts.core.t18271.cljs$lang$type = true;
contacts.core.t18271.cljs$lang$ctorStr = "contacts.core/t18271";
contacts.core.t18271.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"contacts.core/t18271");
});
contacts.core.t18271.prototype.om$core$IRender$ = true;
contacts.core.t18271.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om.core.build.call(null,contacts.core.add_item_view,self__.app),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (item){return om.core.build.call(null,contacts.core.item_view,item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",4184082563),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",633031883),(function (p1__18267_SHARP_){return contacts.core.delete_item.call(null,self__.app,p1__18267_SHARP_);
})], null)], null));
}),new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
contacts.core.t18271.prototype.om$core$IWillMount$ = true;
contacts.core.t18271.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return contacts.core.fetch_items.call(null,self__.app);
});
contacts.core.t18271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18273){var self__ = this;
var _18273__$1 = this;return self__.meta18272;
});
contacts.core.t18271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18273,meta18272__$1){var self__ = this;
var _18273__$1 = this;return (new contacts.core.t18271(self__.owner,self__.app,self__.app_view,meta18272__$1));
});
contacts.core.__GT_t18271 = (function __GT_t18271(owner__$1,app__$1,app_view__$1,meta18272){return (new contacts.core.t18271(owner__$1,app__$1,app_view__$1,meta18272));
});
}
return (new contacts.core.t18271(owner,app,app_view,null));
});
om.core.root.call(null,contacts.core.app_view,contacts.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map