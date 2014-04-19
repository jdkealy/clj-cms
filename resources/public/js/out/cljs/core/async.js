// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11386 = (function (f,fn_handler,meta11387){
this.f = f;
this.fn_handler = fn_handler;
this.meta11387 = meta11387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11386.cljs$lang$type = true;
cljs.core.async.t11386.cljs$lang$ctorStr = "cljs.core.async/t11386";
cljs.core.async.t11386.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11386");
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11388){var self__ = this;
var _11388__$1 = this;return self__.meta11387;
});
cljs.core.async.t11386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11388,meta11387__$1){var self__ = this;
var _11388__$1 = this;return (new cljs.core.async.t11386(self__.f,self__.fn_handler,meta11387__$1));
});
cljs.core.async.__GT_t11386 = (function __GT_t11386(f__$1,fn_handler__$1,meta11387){return (new cljs.core.async.t11386(f__$1,fn_handler__$1,meta11387));
});
}
return (new cljs.core.async.t11386(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11390 = buff;if(G__11390)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__11390.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11390);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11391 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11391);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11391);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___11392 = n;var x_11393 = 0;while(true){
if((x_11393 < n__4289__auto___11392))
{(a[x_11393] = 0);
{
var G__11394 = (x_11393 + 1);
x_11393 = G__11394;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11395 = (i + 1);
i = G__11395;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11399 = (function (flag,alt_flag,meta11400){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11400 = meta11400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11399.cljs$lang$type = true;
cljs.core.async.t11399.cljs$lang$ctorStr = "cljs.core.async/t11399";
cljs.core.async.t11399.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11399");
});
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11401){var self__ = this;
var _11401__$1 = this;return self__.meta11400;
});
cljs.core.async.t11399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11401,meta11400__$1){var self__ = this;
var _11401__$1 = this;return (new cljs.core.async.t11399(self__.flag,self__.alt_flag,meta11400__$1));
});
cljs.core.async.__GT_t11399 = (function __GT_t11399(flag__$1,alt_flag__$1,meta11400){return (new cljs.core.async.t11399(flag__$1,alt_flag__$1,meta11400));
});
}
return (new cljs.core.async.t11399(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11405 = (function (cb,flag,alt_handler,meta11406){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11406 = meta11406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11405.cljs$lang$type = true;
cljs.core.async.t11405.cljs$lang$ctorStr = "cljs.core.async/t11405";
cljs.core.async.t11405.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11405");
});
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11407){var self__ = this;
var _11407__$1 = this;return self__.meta11406;
});
cljs.core.async.t11405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11407,meta11406__$1){var self__ = this;
var _11407__$1 = this;return (new cljs.core.async.t11405(self__.cb,self__.flag,self__.alt_handler,meta11406__$1));
});
cljs.core.async.__GT_t11405 = (function __GT_t11405(cb__$1,flag__$1,alt_handler__$1,meta11406){return (new cljs.core.async.t11405(cb__$1,flag__$1,alt_handler__$1,meta11406));
});
}
return (new cljs.core.async.t11405(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11408_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11408_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11409_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11409_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11410 = (i + 1);
i = G__11410;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11411){var map__11413 = p__11411;var map__11413__$1 = ((cljs.core.seq_QMARK_.call(null,map__11413))?cljs.core.apply.call(null,cljs.core.hash_map,map__11413):map__11413);var opts = map__11413__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11411 = null;if (arguments.length > 1) {
  p__11411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11411);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11414){
var ports = cljs.core.first(arglist__11414);
var p__11411 = cljs.core.rest(arglist__11414);
return alts_BANG___delegate(ports,p__11411);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11422 = (function (ch,f,map_LT_,meta11423){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11423 = meta11423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11422.cljs$lang$type = true;
cljs.core.async.t11422.cljs$lang$ctorStr = "cljs.core.async/t11422";
cljs.core.async.t11422.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11422");
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11425 = (function (fn1,_,meta11423,ch,f,map_LT_,meta11426){
this.fn1 = fn1;
this._ = _;
this.meta11423 = meta11423;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11426 = meta11426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11425.cljs$lang$type = true;
cljs.core.async.t11425.cljs$lang$ctorStr = "cljs.core.async/t11425";
cljs.core.async.t11425.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11425");
});
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11415_SHARP_){return f1.call(null,(((p1__11415_SHARP_ == null))?null:self__.f.call(null,p1__11415_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11427){var self__ = this;
var _11427__$1 = this;return self__.meta11426;
});
cljs.core.async.t11425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11427,meta11426__$1){var self__ = this;
var _11427__$1 = this;return (new cljs.core.async.t11425(self__.fn1,self__._,self__.meta11423,self__.ch,self__.f,self__.map_LT_,meta11426__$1));
});
cljs.core.async.__GT_t11425 = (function __GT_t11425(fn1__$1,___$2,meta11423__$1,ch__$2,f__$2,map_LT___$2,meta11426){return (new cljs.core.async.t11425(fn1__$1,___$2,meta11423__$1,ch__$2,f__$2,map_LT___$2,meta11426));
});
}
return (new cljs.core.async.t11425(fn1,___$1,self__.meta11423,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11424){var self__ = this;
var _11424__$1 = this;return self__.meta11423;
});
cljs.core.async.t11422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11424,meta11423__$1){var self__ = this;
var _11424__$1 = this;return (new cljs.core.async.t11422(self__.ch,self__.f,self__.map_LT_,meta11423__$1));
});
cljs.core.async.__GT_t11422 = (function __GT_t11422(ch__$1,f__$1,map_LT___$1,meta11423){return (new cljs.core.async.t11422(ch__$1,f__$1,map_LT___$1,meta11423));
});
}
return (new cljs.core.async.t11422(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11431 = (function (ch,f,map_GT_,meta11432){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11432 = meta11432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11431.cljs$lang$type = true;
cljs.core.async.t11431.cljs$lang$ctorStr = "cljs.core.async/t11431";
cljs.core.async.t11431.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11431");
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11433){var self__ = this;
var _11433__$1 = this;return self__.meta11432;
});
cljs.core.async.t11431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11433,meta11432__$1){var self__ = this;
var _11433__$1 = this;return (new cljs.core.async.t11431(self__.ch,self__.f,self__.map_GT_,meta11432__$1));
});
cljs.core.async.__GT_t11431 = (function __GT_t11431(ch__$1,f__$1,map_GT___$1,meta11432){return (new cljs.core.async.t11431(ch__$1,f__$1,map_GT___$1,meta11432));
});
}
return (new cljs.core.async.t11431(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11437 = (function (ch,p,filter_GT_,meta11438){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11438 = meta11438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11437.cljs$lang$type = true;
cljs.core.async.t11437.cljs$lang$ctorStr = "cljs.core.async/t11437";
cljs.core.async.t11437.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t11437");
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11439){var self__ = this;
var _11439__$1 = this;return self__.meta11438;
});
cljs.core.async.t11437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11439,meta11438__$1){var self__ = this;
var _11439__$1 = this;return (new cljs.core.async.t11437(self__.ch,self__.p,self__.filter_GT_,meta11438__$1));
});
cljs.core.async.__GT_t11437 = (function __GT_t11437(ch__$1,p__$1,filter_GT___$1,meta11438){return (new cljs.core.async.t11437(ch__$1,p__$1,filter_GT___$1,meta11438));
});
}
return (new cljs.core.async.t11437(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___11522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_11501){var state_val_11502 = (state_11501[1]);if((state_val_11502 === 1))
{var state_11501__$1 = state_11501;var statearr_11503_11523 = state_11501__$1;(statearr_11503_11523[2] = null);
(statearr_11503_11523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 2))
{var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11501__$1,4,ch);
} else
{if((state_val_11502 === 3))
{var inst_11499 = (state_11501[2]);var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11501__$1,inst_11499);
} else
{if((state_val_11502 === 4))
{var inst_11483 = (state_11501[7]);var inst_11483__$1 = (state_11501[2]);var inst_11484 = (inst_11483__$1 == null);var state_11501__$1 = (function (){var statearr_11504 = state_11501;(statearr_11504[7] = inst_11483__$1);
return statearr_11504;
})();if(cljs.core.truth_(inst_11484))
{var statearr_11505_11524 = state_11501__$1;(statearr_11505_11524[1] = 5);
} else
{var statearr_11506_11525 = state_11501__$1;(statearr_11506_11525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 5))
{var inst_11486 = cljs.core.async.close_BANG_.call(null,out);var state_11501__$1 = state_11501;var statearr_11507_11526 = state_11501__$1;(statearr_11507_11526[2] = inst_11486);
(statearr_11507_11526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 6))
{var inst_11483 = (state_11501[7]);var inst_11488 = p.call(null,inst_11483);var state_11501__$1 = state_11501;if(cljs.core.truth_(inst_11488))
{var statearr_11508_11527 = state_11501__$1;(statearr_11508_11527[1] = 8);
} else
{var statearr_11509_11528 = state_11501__$1;(statearr_11509_11528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 7))
{var inst_11497 = (state_11501[2]);var state_11501__$1 = state_11501;var statearr_11510_11529 = state_11501__$1;(statearr_11510_11529[2] = inst_11497);
(statearr_11510_11529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 8))
{var inst_11483 = (state_11501[7]);var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11501__$1,11,out,inst_11483);
} else
{if((state_val_11502 === 9))
{var state_11501__$1 = state_11501;var statearr_11511_11530 = state_11501__$1;(statearr_11511_11530[2] = null);
(statearr_11511_11530[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 10))
{var inst_11494 = (state_11501[2]);var state_11501__$1 = (function (){var statearr_11512 = state_11501;(statearr_11512[8] = inst_11494);
return statearr_11512;
})();var statearr_11513_11531 = state_11501__$1;(statearr_11513_11531[2] = null);
(statearr_11513_11531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11502 === 11))
{var inst_11491 = (state_11501[2]);var state_11501__$1 = state_11501;var statearr_11514_11532 = state_11501__$1;(statearr_11514_11532[2] = inst_11491);
(statearr_11514_11532[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_11518 = [null,null,null,null,null,null,null,null,null];(statearr_11518[0] = state_machine__6210__auto__);
(statearr_11518[1] = 1);
return statearr_11518;
});
var state_machine__6210__auto____1 = (function (state_11501){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_11501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object))
{var ex__6213__auto__ = e11519;var statearr_11520_11533 = state_11501;(statearr_11520_11533[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11534 = state_11501;
state_11501 = G__11534;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_11501){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_11501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_11521 = f__6225__auto__.call(null);(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___11522);
return statearr_11521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_11700){var state_val_11701 = (state_11700[1]);if((state_val_11701 === 1))
{var state_11700__$1 = state_11700;var statearr_11702_11743 = state_11700__$1;(statearr_11702_11743[2] = null);
(statearr_11702_11743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 2))
{var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11700__$1,4,in$);
} else
{if((state_val_11701 === 3))
{var inst_11698 = (state_11700[2]);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11700__$1,inst_11698);
} else
{if((state_val_11701 === 4))
{var inst_11641 = (state_11700[7]);var inst_11641__$1 = (state_11700[2]);var inst_11642 = (inst_11641__$1 == null);var state_11700__$1 = (function (){var statearr_11703 = state_11700;(statearr_11703[7] = inst_11641__$1);
return statearr_11703;
})();if(cljs.core.truth_(inst_11642))
{var statearr_11704_11744 = state_11700__$1;(statearr_11704_11744[1] = 5);
} else
{var statearr_11705_11745 = state_11700__$1;(statearr_11705_11745[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 5))
{var inst_11644 = cljs.core.async.close_BANG_.call(null,out);var state_11700__$1 = state_11700;var statearr_11706_11746 = state_11700__$1;(statearr_11706_11746[2] = inst_11644);
(statearr_11706_11746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 6))
{var inst_11641 = (state_11700[7]);var inst_11650 = f.call(null,inst_11641);var inst_11651 = cljs.core.seq.call(null,inst_11650);var inst_11652 = inst_11651;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11707 = state_11700;(statearr_11707[8] = inst_11654);
(statearr_11707[9] = inst_11655);
(statearr_11707[10] = inst_11653);
(statearr_11707[11] = inst_11652);
return statearr_11707;
})();var statearr_11708_11747 = state_11700__$1;(statearr_11708_11747[2] = null);
(statearr_11708_11747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 7))
{var inst_11696 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11709_11748 = state_11700__$1;(statearr_11709_11748[2] = inst_11696);
(statearr_11709_11748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 8))
{var inst_11654 = (state_11700[8]);var inst_11655 = (state_11700[9]);var inst_11657 = (inst_11655 < inst_11654);var inst_11658 = inst_11657;var state_11700__$1 = state_11700;if(cljs.core.truth_(inst_11658))
{var statearr_11710_11749 = state_11700__$1;(statearr_11710_11749[1] = 10);
} else
{var statearr_11711_11750 = state_11700__$1;(statearr_11711_11750[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 9))
{var inst_11688 = (state_11700[2]);var inst_11689 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11700__$1 = (function (){var statearr_11712 = state_11700;(statearr_11712[12] = inst_11688);
return statearr_11712;
})();if(cljs.core.truth_(inst_11689))
{var statearr_11713_11751 = state_11700__$1;(statearr_11713_11751[1] = 21);
} else
{var statearr_11714_11752 = state_11700__$1;(statearr_11714_11752[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 10))
{var inst_11655 = (state_11700[9]);var inst_11653 = (state_11700[10]);var inst_11660 = cljs.core._nth.call(null,inst_11653,inst_11655);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11700__$1,13,out,inst_11660);
} else
{if((state_val_11701 === 11))
{var inst_11652 = (state_11700[11]);var inst_11666 = (state_11700[13]);var inst_11666__$1 = cljs.core.seq.call(null,inst_11652);var state_11700__$1 = (function (){var statearr_11718 = state_11700;(statearr_11718[13] = inst_11666__$1);
return statearr_11718;
})();if(inst_11666__$1)
{var statearr_11719_11753 = state_11700__$1;(statearr_11719_11753[1] = 14);
} else
{var statearr_11720_11754 = state_11700__$1;(statearr_11720_11754[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 12))
{var inst_11686 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11721_11755 = state_11700__$1;(statearr_11721_11755[2] = inst_11686);
(statearr_11721_11755[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 13))
{var inst_11654 = (state_11700[8]);var inst_11655 = (state_11700[9]);var inst_11653 = (state_11700[10]);var inst_11652 = (state_11700[11]);var inst_11662 = (state_11700[2]);var inst_11663 = (inst_11655 + 1);var tmp11715 = inst_11654;var tmp11716 = inst_11653;var tmp11717 = inst_11652;var inst_11652__$1 = tmp11717;var inst_11653__$1 = tmp11716;var inst_11654__$1 = tmp11715;var inst_11655__$1 = inst_11663;var state_11700__$1 = (function (){var statearr_11722 = state_11700;(statearr_11722[8] = inst_11654__$1);
(statearr_11722[9] = inst_11655__$1);
(statearr_11722[14] = inst_11662);
(statearr_11722[10] = inst_11653__$1);
(statearr_11722[11] = inst_11652__$1);
return statearr_11722;
})();var statearr_11723_11756 = state_11700__$1;(statearr_11723_11756[2] = null);
(statearr_11723_11756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 14))
{var inst_11666 = (state_11700[13]);var inst_11668 = cljs.core.chunked_seq_QMARK_.call(null,inst_11666);var state_11700__$1 = state_11700;if(inst_11668)
{var statearr_11724_11757 = state_11700__$1;(statearr_11724_11757[1] = 17);
} else
{var statearr_11725_11758 = state_11700__$1;(statearr_11725_11758[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 15))
{var state_11700__$1 = state_11700;var statearr_11726_11759 = state_11700__$1;(statearr_11726_11759[2] = null);
(statearr_11726_11759[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 16))
{var inst_11684 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11727_11760 = state_11700__$1;(statearr_11727_11760[2] = inst_11684);
(statearr_11727_11760[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 17))
{var inst_11666 = (state_11700[13]);var inst_11670 = cljs.core.chunk_first.call(null,inst_11666);var inst_11671 = cljs.core.chunk_rest.call(null,inst_11666);var inst_11672 = cljs.core.count.call(null,inst_11670);var inst_11652 = inst_11671;var inst_11653 = inst_11670;var inst_11654 = inst_11672;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11728 = state_11700;(statearr_11728[8] = inst_11654);
(statearr_11728[9] = inst_11655);
(statearr_11728[10] = inst_11653);
(statearr_11728[11] = inst_11652);
return statearr_11728;
})();var statearr_11729_11761 = state_11700__$1;(statearr_11729_11761[2] = null);
(statearr_11729_11761[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 18))
{var inst_11666 = (state_11700[13]);var inst_11675 = cljs.core.first.call(null,inst_11666);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11700__$1,20,out,inst_11675);
} else
{if((state_val_11701 === 19))
{var inst_11681 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11730_11762 = state_11700__$1;(statearr_11730_11762[2] = inst_11681);
(statearr_11730_11762[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 20))
{var inst_11666 = (state_11700[13]);var inst_11677 = (state_11700[2]);var inst_11678 = cljs.core.next.call(null,inst_11666);var inst_11652 = inst_11678;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11731 = state_11700;(statearr_11731[8] = inst_11654);
(statearr_11731[9] = inst_11655);
(statearr_11731[10] = inst_11653);
(statearr_11731[11] = inst_11652);
(statearr_11731[15] = inst_11677);
return statearr_11731;
})();var statearr_11732_11763 = state_11700__$1;(statearr_11732_11763[2] = null);
(statearr_11732_11763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 21))
{var state_11700__$1 = state_11700;var statearr_11733_11764 = state_11700__$1;(statearr_11733_11764[2] = null);
(statearr_11733_11764[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 22))
{var state_11700__$1 = state_11700;var statearr_11734_11765 = state_11700__$1;(statearr_11734_11765[2] = null);
(statearr_11734_11765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 23))
{var inst_11694 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11735_11766 = state_11700__$1;(statearr_11735_11766[2] = inst_11694);
(statearr_11735_11766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_11739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11739[0] = state_machine__6210__auto__);
(statearr_11739[1] = 1);
return statearr_11739;
});
var state_machine__6210__auto____1 = (function (state_11700){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_11700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e11740){if((e11740 instanceof Object))
{var ex__6213__auto__ = e11740;var statearr_11741_11767 = state_11700;(statearr_11741_11767[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11768 = state_11700;
state_11700 = G__11768;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_11700){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_11700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_11742 = f__6225__auto__.call(null);(statearr_11742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_11742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6224__auto___11863 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_11839){var state_val_11840 = (state_11839[1]);if((state_val_11840 === 1))
{var state_11839__$1 = state_11839;var statearr_11841_11864 = state_11839__$1;(statearr_11841_11864[2] = null);
(statearr_11841_11864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 2))
{var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11839__$1,4,from);
} else
{if((state_val_11840 === 3))
{var inst_11837 = (state_11839[2]);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11839__$1,inst_11837);
} else
{if((state_val_11840 === 4))
{var inst_11818 = (state_11839[7]);var inst_11818__$1 = (state_11839[2]);var inst_11819 = (inst_11818__$1 == null);var state_11839__$1 = (function (){var statearr_11842 = state_11839;(statearr_11842[7] = inst_11818__$1);
return statearr_11842;
})();if(cljs.core.truth_(inst_11819))
{var statearr_11843_11865 = state_11839__$1;(statearr_11843_11865[1] = 5);
} else
{var statearr_11844_11866 = state_11839__$1;(statearr_11844_11866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 5))
{var state_11839__$1 = state_11839;if(cljs.core.truth_(close_QMARK_))
{var statearr_11845_11867 = state_11839__$1;(statearr_11845_11867[1] = 8);
} else
{var statearr_11846_11868 = state_11839__$1;(statearr_11846_11868[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 6))
{var inst_11818 = (state_11839[7]);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11839__$1,11,to,inst_11818);
} else
{if((state_val_11840 === 7))
{var inst_11835 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11847_11869 = state_11839__$1;(statearr_11847_11869[2] = inst_11835);
(statearr_11847_11869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 8))
{var inst_11822 = cljs.core.async.close_BANG_.call(null,to);var state_11839__$1 = state_11839;var statearr_11848_11870 = state_11839__$1;(statearr_11848_11870[2] = inst_11822);
(statearr_11848_11870[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 9))
{var state_11839__$1 = state_11839;var statearr_11849_11871 = state_11839__$1;(statearr_11849_11871[2] = null);
(statearr_11849_11871[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 10))
{var inst_11825 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11850_11872 = state_11839__$1;(statearr_11850_11872[2] = inst_11825);
(statearr_11850_11872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 11))
{var inst_11828 = (state_11839[2]);var state_11839__$1 = state_11839;if(cljs.core.truth_(inst_11828))
{var statearr_11851_11873 = state_11839__$1;(statearr_11851_11873[1] = 12);
} else
{var statearr_11852_11874 = state_11839__$1;(statearr_11852_11874[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 12))
{var state_11839__$1 = state_11839;var statearr_11853_11875 = state_11839__$1;(statearr_11853_11875[2] = null);
(statearr_11853_11875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 13))
{var state_11839__$1 = state_11839;var statearr_11854_11876 = state_11839__$1;(statearr_11854_11876[2] = null);
(statearr_11854_11876[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 14))
{var inst_11833 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11855_11877 = state_11839__$1;(statearr_11855_11877[2] = inst_11833);
(statearr_11855_11877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_11859 = [null,null,null,null,null,null,null,null];(statearr_11859[0] = state_machine__6210__auto__);
(statearr_11859[1] = 1);
return statearr_11859;
});
var state_machine__6210__auto____1 = (function (state_11839){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_11839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e11860){if((e11860 instanceof Object))
{var ex__6213__auto__ = e11860;var statearr_11861_11878 = state_11839;(statearr_11861_11878[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11879 = state_11839;
state_11839 = G__11879;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_11839){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_11839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_11862 = f__6225__auto__.call(null);(statearr_11862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___11863);
return statearr_11862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6224__auto___11980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_11955){var state_val_11956 = (state_11955[1]);if((state_val_11956 === 1))
{var state_11955__$1 = state_11955;var statearr_11957_11981 = state_11955__$1;(statearr_11957_11981[2] = null);
(statearr_11957_11981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 2))
{var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,4,ch);
} else
{if((state_val_11956 === 3))
{var inst_11953 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else
{if((state_val_11956 === 4))
{var inst_11932 = (state_11955[7]);var inst_11932__$1 = (state_11955[2]);var inst_11933 = (inst_11932__$1 == null);var state_11955__$1 = (function (){var statearr_11958 = state_11955;(statearr_11958[7] = inst_11932__$1);
return statearr_11958;
})();if(cljs.core.truth_(inst_11933))
{var statearr_11959_11982 = state_11955__$1;(statearr_11959_11982[1] = 5);
} else
{var statearr_11960_11983 = state_11955__$1;(statearr_11960_11983[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 5))
{var inst_11935 = cljs.core.async.close_BANG_.call(null,tc);var inst_11936 = cljs.core.async.close_BANG_.call(null,fc);var state_11955__$1 = (function (){var statearr_11961 = state_11955;(statearr_11961[8] = inst_11935);
return statearr_11961;
})();var statearr_11962_11984 = state_11955__$1;(statearr_11962_11984[2] = inst_11936);
(statearr_11962_11984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 6))
{var inst_11932 = (state_11955[7]);var inst_11938 = p.call(null,inst_11932);var state_11955__$1 = state_11955;if(cljs.core.truth_(inst_11938))
{var statearr_11963_11985 = state_11955__$1;(statearr_11963_11985[1] = 9);
} else
{var statearr_11964_11986 = state_11955__$1;(statearr_11964_11986[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 7))
{var inst_11951 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11965_11987 = state_11955__$1;(statearr_11965_11987[2] = inst_11951);
(statearr_11965_11987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 8))
{var inst_11944 = (state_11955[2]);var state_11955__$1 = state_11955;if(cljs.core.truth_(inst_11944))
{var statearr_11966_11988 = state_11955__$1;(statearr_11966_11988[1] = 12);
} else
{var statearr_11967_11989 = state_11955__$1;(statearr_11967_11989[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 9))
{var state_11955__$1 = state_11955;var statearr_11968_11990 = state_11955__$1;(statearr_11968_11990[2] = tc);
(statearr_11968_11990[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 10))
{var state_11955__$1 = state_11955;var statearr_11969_11991 = state_11955__$1;(statearr_11969_11991[2] = fc);
(statearr_11969_11991[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 11))
{var inst_11932 = (state_11955[7]);var inst_11942 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11955__$1,8,inst_11942,inst_11932);
} else
{if((state_val_11956 === 12))
{var state_11955__$1 = state_11955;var statearr_11970_11992 = state_11955__$1;(statearr_11970_11992[2] = null);
(statearr_11970_11992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 13))
{var state_11955__$1 = state_11955;var statearr_11971_11993 = state_11955__$1;(statearr_11971_11993[2] = null);
(statearr_11971_11993[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 14))
{var inst_11949 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11972_11994 = state_11955__$1;(statearr_11972_11994[2] = inst_11949);
(statearr_11972_11994[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_11976 = [null,null,null,null,null,null,null,null,null];(statearr_11976[0] = state_machine__6210__auto__);
(statearr_11976[1] = 1);
return statearr_11976;
});
var state_machine__6210__auto____1 = (function (state_11955){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_11955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e11977){if((e11977 instanceof Object))
{var ex__6213__auto__ = e11977;var statearr_11978_11995 = state_11955;(statearr_11978_11995[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11996 = state_11955;
state_11955 = G__11996;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_11979 = f__6225__auto__.call(null);(statearr_11979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___11980);
return statearr_11979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_12043){var state_val_12044 = (state_12043[1]);if((state_val_12044 === 7))
{var inst_12039 = (state_12043[2]);var state_12043__$1 = state_12043;var statearr_12045_12061 = state_12043__$1;(statearr_12045_12061[2] = inst_12039);
(statearr_12045_12061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 6))
{var inst_12029 = (state_12043[7]);var inst_12032 = (state_12043[8]);var inst_12036 = f.call(null,inst_12029,inst_12032);var inst_12029__$1 = inst_12036;var state_12043__$1 = (function (){var statearr_12046 = state_12043;(statearr_12046[7] = inst_12029__$1);
return statearr_12046;
})();var statearr_12047_12062 = state_12043__$1;(statearr_12047_12062[2] = null);
(statearr_12047_12062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 5))
{var inst_12029 = (state_12043[7]);var state_12043__$1 = state_12043;var statearr_12048_12063 = state_12043__$1;(statearr_12048_12063[2] = inst_12029);
(statearr_12048_12063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 4))
{var inst_12032 = (state_12043[8]);var inst_12032__$1 = (state_12043[2]);var inst_12033 = (inst_12032__$1 == null);var state_12043__$1 = (function (){var statearr_12049 = state_12043;(statearr_12049[8] = inst_12032__$1);
return statearr_12049;
})();if(cljs.core.truth_(inst_12033))
{var statearr_12050_12064 = state_12043__$1;(statearr_12050_12064[1] = 5);
} else
{var statearr_12051_12065 = state_12043__$1;(statearr_12051_12065[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 3))
{var inst_12041 = (state_12043[2]);var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12043__$1,inst_12041);
} else
{if((state_val_12044 === 2))
{var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12043__$1,4,ch);
} else
{if((state_val_12044 === 1))
{var inst_12029 = init;var state_12043__$1 = (function (){var statearr_12052 = state_12043;(statearr_12052[7] = inst_12029);
return statearr_12052;
})();var statearr_12053_12066 = state_12043__$1;(statearr_12053_12066[2] = null);
(statearr_12053_12066[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_12057 = [null,null,null,null,null,null,null,null,null];(statearr_12057[0] = state_machine__6210__auto__);
(statearr_12057[1] = 1);
return statearr_12057;
});
var state_machine__6210__auto____1 = (function (state_12043){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_12043);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e12058){if((e12058 instanceof Object))
{var ex__6213__auto__ = e12058;var statearr_12059_12067 = state_12043;(statearr_12059_12067[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12068 = state_12043;
state_12043 = G__12068;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_12060 = f__6225__auto__.call(null);(statearr_12060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_12060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_12142){var state_val_12143 = (state_12142[1]);if((state_val_12143 === 1))
{var inst_12118 = cljs.core.seq.call(null,coll);var inst_12119 = inst_12118;var state_12142__$1 = (function (){var statearr_12144 = state_12142;(statearr_12144[7] = inst_12119);
return statearr_12144;
})();var statearr_12145_12167 = state_12142__$1;(statearr_12145_12167[2] = null);
(statearr_12145_12167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 2))
{var inst_12119 = (state_12142[7]);var state_12142__$1 = state_12142;if(cljs.core.truth_(inst_12119))
{var statearr_12146_12168 = state_12142__$1;(statearr_12146_12168[1] = 4);
} else
{var statearr_12147_12169 = state_12142__$1;(statearr_12147_12169[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 3))
{var inst_12140 = (state_12142[2]);var state_12142__$1 = state_12142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12142__$1,inst_12140);
} else
{if((state_val_12143 === 4))
{var inst_12119 = (state_12142[7]);var inst_12122 = cljs.core.first.call(null,inst_12119);var state_12142__$1 = state_12142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12142__$1,7,ch,inst_12122);
} else
{if((state_val_12143 === 5))
{var inst_12119 = (state_12142[7]);var state_12142__$1 = state_12142;var statearr_12148_12170 = state_12142__$1;(statearr_12148_12170[2] = inst_12119);
(statearr_12148_12170[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 6))
{var inst_12127 = (state_12142[2]);var state_12142__$1 = state_12142;if(cljs.core.truth_(inst_12127))
{var statearr_12149_12171 = state_12142__$1;(statearr_12149_12171[1] = 8);
} else
{var statearr_12150_12172 = state_12142__$1;(statearr_12150_12172[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 7))
{var inst_12124 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12151_12173 = state_12142__$1;(statearr_12151_12173[2] = inst_12124);
(statearr_12151_12173[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 8))
{var inst_12119 = (state_12142[7]);var inst_12129 = cljs.core.next.call(null,inst_12119);var inst_12119__$1 = inst_12129;var state_12142__$1 = (function (){var statearr_12152 = state_12142;(statearr_12152[7] = inst_12119__$1);
return statearr_12152;
})();var statearr_12153_12174 = state_12142__$1;(statearr_12153_12174[2] = null);
(statearr_12153_12174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 9))
{var state_12142__$1 = state_12142;if(cljs.core.truth_(close_QMARK_))
{var statearr_12154_12175 = state_12142__$1;(statearr_12154_12175[1] = 11);
} else
{var statearr_12155_12176 = state_12142__$1;(statearr_12155_12176[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 10))
{var inst_12138 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12156_12177 = state_12142__$1;(statearr_12156_12177[2] = inst_12138);
(statearr_12156_12177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 11))
{var inst_12133 = cljs.core.async.close_BANG_.call(null,ch);var state_12142__$1 = state_12142;var statearr_12157_12178 = state_12142__$1;(statearr_12157_12178[2] = inst_12133);
(statearr_12157_12178[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 12))
{var state_12142__$1 = state_12142;var statearr_12158_12179 = state_12142__$1;(statearr_12158_12179[2] = null);
(statearr_12158_12179[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12143 === 13))
{var inst_12136 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12159_12180 = state_12142__$1;(statearr_12159_12180[2] = inst_12136);
(statearr_12159_12180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_12163 = [null,null,null,null,null,null,null,null];(statearr_12163[0] = state_machine__6210__auto__);
(statearr_12163[1] = 1);
return statearr_12163;
});
var state_machine__6210__auto____1 = (function (state_12142){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_12142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e12164){if((e12164 instanceof Object))
{var ex__6213__auto__ = e12164;var statearr_12165_12181 = state_12142;(statearr_12165_12181[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12182 = state_12142;
state_12142 = G__12182;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_12142){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_12142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_12166 = f__6225__auto__.call(null);(statearr_12166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto__);
return statearr_12166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return c__6224__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12184 = {};return obj12184;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12186 = {};return obj12186;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12408 = (function (cs,ch,mult,meta12409){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12409 = meta12409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12408.cljs$lang$type = true;
cljs.core.async.t12408.cljs$lang$ctorStr = "cljs.core.async/t12408";
cljs.core.async.t12408.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t12408");
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12410){var self__ = this;
var _12410__$1 = this;return self__.meta12409;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12410,meta12409__$1){var self__ = this;
var _12410__$1 = this;return (new cljs.core.async.t12408(self__.cs,self__.ch,self__.mult,meta12409__$1));
});})(cs))
;
cljs.core.async.__GT_t12408 = ((function (cs){
return (function __GT_t12408(cs__$1,ch__$1,mult__$1,meta12409){return (new cljs.core.async.t12408(cs__$1,ch__$1,mult__$1,meta12409));
});})(cs))
;
}
return (new cljs.core.async.t12408(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6224__auto___12629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_12541){var state_val_12542 = (state_12541[1]);if((state_val_12542 === 32))
{var inst_12484 = (state_12541[7]);var inst_12482 = (state_12541[8]);var inst_12483 = (state_12541[9]);var inst_12481 = (state_12541[10]);var inst_12496 = (state_12541[2]);var inst_12497 = (inst_12484 + 1);var tmp12543 = inst_12482;var tmp12544 = inst_12483;var tmp12545 = inst_12481;var inst_12481__$1 = tmp12545;var inst_12482__$1 = tmp12543;var inst_12483__$1 = tmp12544;var inst_12484__$1 = inst_12497;var state_12541__$1 = (function (){var statearr_12546 = state_12541;(statearr_12546[7] = inst_12484__$1);
(statearr_12546[8] = inst_12482__$1);
(statearr_12546[9] = inst_12483__$1);
(statearr_12546[10] = inst_12481__$1);
(statearr_12546[11] = inst_12496);
return statearr_12546;
})();var statearr_12547_12630 = state_12541__$1;(statearr_12547_12630[2] = null);
(statearr_12547_12630[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 1))
{var state_12541__$1 = state_12541;var statearr_12548_12631 = state_12541__$1;(statearr_12548_12631[2] = null);
(statearr_12548_12631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 33))
{var inst_12500 = (state_12541[12]);var inst_12502 = cljs.core.chunked_seq_QMARK_.call(null,inst_12500);var state_12541__$1 = state_12541;if(inst_12502)
{var statearr_12549_12632 = state_12541__$1;(statearr_12549_12632[1] = 36);
} else
{var statearr_12550_12633 = state_12541__$1;(statearr_12550_12633[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 2))
{var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12541__$1,4,ch);
} else
{if((state_val_12542 === 34))
{var state_12541__$1 = state_12541;var statearr_12551_12634 = state_12541__$1;(statearr_12551_12634[2] = null);
(statearr_12551_12634[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 3))
{var inst_12539 = (state_12541[2]);var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12541__$1,inst_12539);
} else
{if((state_val_12542 === 35))
{var inst_12523 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12552_12635 = state_12541__$1;(statearr_12552_12635[2] = inst_12523);
(statearr_12552_12635[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 4))
{var inst_12413 = (state_12541[13]);var inst_12413__$1 = (state_12541[2]);var inst_12414 = (inst_12413__$1 == null);var state_12541__$1 = (function (){var statearr_12553 = state_12541;(statearr_12553[13] = inst_12413__$1);
return statearr_12553;
})();if(cljs.core.truth_(inst_12414))
{var statearr_12554_12636 = state_12541__$1;(statearr_12554_12636[1] = 5);
} else
{var statearr_12555_12637 = state_12541__$1;(statearr_12555_12637[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 36))
{var inst_12500 = (state_12541[12]);var inst_12504 = cljs.core.chunk_first.call(null,inst_12500);var inst_12505 = cljs.core.chunk_rest.call(null,inst_12500);var inst_12506 = cljs.core.count.call(null,inst_12504);var inst_12481 = inst_12505;var inst_12482 = inst_12504;var inst_12483 = inst_12506;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12556 = state_12541;(statearr_12556[7] = inst_12484);
(statearr_12556[8] = inst_12482);
(statearr_12556[9] = inst_12483);
(statearr_12556[10] = inst_12481);
return statearr_12556;
})();var statearr_12557_12638 = state_12541__$1;(statearr_12557_12638[2] = null);
(statearr_12557_12638[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 5))
{var inst_12420 = cljs.core.deref.call(null,cs);var inst_12421 = cljs.core.seq.call(null,inst_12420);var inst_12422 = inst_12421;var inst_12423 = null;var inst_12424 = 0;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12558 = state_12541;(statearr_12558[14] = inst_12424);
(statearr_12558[15] = inst_12425);
(statearr_12558[16] = inst_12423);
(statearr_12558[17] = inst_12422);
return statearr_12558;
})();var statearr_12559_12639 = state_12541__$1;(statearr_12559_12639[2] = null);
(statearr_12559_12639[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 37))
{var inst_12413 = (state_12541[13]);var inst_12500 = (state_12541[12]);var inst_12509 = (state_12541[18]);var inst_12509__$1 = cljs.core.first.call(null,inst_12500);var inst_12510 = cljs.core.async.put_BANG_.call(null,inst_12509__$1,inst_12413,done);var state_12541__$1 = (function (){var statearr_12560 = state_12541;(statearr_12560[18] = inst_12509__$1);
return statearr_12560;
})();if(cljs.core.truth_(inst_12510))
{var statearr_12561_12640 = state_12541__$1;(statearr_12561_12640[1] = 39);
} else
{var statearr_12562_12641 = state_12541__$1;(statearr_12562_12641[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 6))
{var inst_12473 = (state_12541[19]);var inst_12472 = cljs.core.deref.call(null,cs);var inst_12473__$1 = cljs.core.keys.call(null,inst_12472);var inst_12474 = cljs.core.count.call(null,inst_12473__$1);var inst_12475 = cljs.core.reset_BANG_.call(null,dctr,inst_12474);var inst_12480 = cljs.core.seq.call(null,inst_12473__$1);var inst_12481 = inst_12480;var inst_12482 = null;var inst_12483 = 0;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12563 = state_12541;(statearr_12563[20] = inst_12475);
(statearr_12563[19] = inst_12473__$1);
(statearr_12563[7] = inst_12484);
(statearr_12563[8] = inst_12482);
(statearr_12563[9] = inst_12483);
(statearr_12563[10] = inst_12481);
return statearr_12563;
})();var statearr_12564_12642 = state_12541__$1;(statearr_12564_12642[2] = null);
(statearr_12564_12642[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 38))
{var inst_12520 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12565_12643 = state_12541__$1;(statearr_12565_12643[2] = inst_12520);
(statearr_12565_12643[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 7))
{var inst_12537 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12566_12644 = state_12541__$1;(statearr_12566_12644[2] = inst_12537);
(statearr_12566_12644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 39))
{var state_12541__$1 = state_12541;var statearr_12567_12645 = state_12541__$1;(statearr_12567_12645[2] = null);
(statearr_12567_12645[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 8))
{var inst_12424 = (state_12541[14]);var inst_12425 = (state_12541[15]);var inst_12427 = (inst_12425 < inst_12424);var inst_12428 = inst_12427;var state_12541__$1 = state_12541;if(cljs.core.truth_(inst_12428))
{var statearr_12568_12646 = state_12541__$1;(statearr_12568_12646[1] = 10);
} else
{var statearr_12569_12647 = state_12541__$1;(statearr_12569_12647[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 40))
{var inst_12509 = (state_12541[18]);var inst_12513 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12514 = cljs.core.async.untap_STAR_.call(null,m,inst_12509);var state_12541__$1 = (function (){var statearr_12570 = state_12541;(statearr_12570[21] = inst_12513);
return statearr_12570;
})();var statearr_12571_12648 = state_12541__$1;(statearr_12571_12648[2] = inst_12514);
(statearr_12571_12648[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 9))
{var inst_12470 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12572_12649 = state_12541__$1;(statearr_12572_12649[2] = inst_12470);
(statearr_12572_12649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 41))
{var inst_12500 = (state_12541[12]);var inst_12516 = (state_12541[2]);var inst_12517 = cljs.core.next.call(null,inst_12500);var inst_12481 = inst_12517;var inst_12482 = null;var inst_12483 = 0;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12573 = state_12541;(statearr_12573[22] = inst_12516);
(statearr_12573[7] = inst_12484);
(statearr_12573[8] = inst_12482);
(statearr_12573[9] = inst_12483);
(statearr_12573[10] = inst_12481);
return statearr_12573;
})();var statearr_12574_12650 = state_12541__$1;(statearr_12574_12650[2] = null);
(statearr_12574_12650[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 10))
{var inst_12425 = (state_12541[15]);var inst_12423 = (state_12541[16]);var inst_12431 = cljs.core._nth.call(null,inst_12423,inst_12425);var inst_12432 = cljs.core.nth.call(null,inst_12431,0,null);var inst_12433 = cljs.core.nth.call(null,inst_12431,1,null);var state_12541__$1 = (function (){var statearr_12575 = state_12541;(statearr_12575[23] = inst_12432);
return statearr_12575;
})();if(cljs.core.truth_(inst_12433))
{var statearr_12576_12651 = state_12541__$1;(statearr_12576_12651[1] = 13);
} else
{var statearr_12577_12652 = state_12541__$1;(statearr_12577_12652[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 42))
{var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12541__$1,45,dchan);
} else
{if((state_val_12542 === 11))
{var inst_12422 = (state_12541[17]);var inst_12442 = (state_12541[24]);var inst_12442__$1 = cljs.core.seq.call(null,inst_12422);var state_12541__$1 = (function (){var statearr_12578 = state_12541;(statearr_12578[24] = inst_12442__$1);
return statearr_12578;
})();if(inst_12442__$1)
{var statearr_12579_12653 = state_12541__$1;(statearr_12579_12653[1] = 16);
} else
{var statearr_12580_12654 = state_12541__$1;(statearr_12580_12654[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 43))
{var state_12541__$1 = state_12541;var statearr_12581_12655 = state_12541__$1;(statearr_12581_12655[2] = null);
(statearr_12581_12655[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 12))
{var inst_12468 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12582_12656 = state_12541__$1;(statearr_12582_12656[2] = inst_12468);
(statearr_12582_12656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 44))
{var inst_12534 = (state_12541[2]);var state_12541__$1 = (function (){var statearr_12583 = state_12541;(statearr_12583[25] = inst_12534);
return statearr_12583;
})();var statearr_12584_12657 = state_12541__$1;(statearr_12584_12657[2] = null);
(statearr_12584_12657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 13))
{var inst_12432 = (state_12541[23]);var inst_12435 = cljs.core.async.close_BANG_.call(null,inst_12432);var state_12541__$1 = state_12541;var statearr_12585_12658 = state_12541__$1;(statearr_12585_12658[2] = inst_12435);
(statearr_12585_12658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 45))
{var inst_12531 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12589_12659 = state_12541__$1;(statearr_12589_12659[2] = inst_12531);
(statearr_12589_12659[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 14))
{var state_12541__$1 = state_12541;var statearr_12590_12660 = state_12541__$1;(statearr_12590_12660[2] = null);
(statearr_12590_12660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 15))
{var inst_12424 = (state_12541[14]);var inst_12425 = (state_12541[15]);var inst_12423 = (state_12541[16]);var inst_12422 = (state_12541[17]);var inst_12438 = (state_12541[2]);var inst_12439 = (inst_12425 + 1);var tmp12586 = inst_12424;var tmp12587 = inst_12423;var tmp12588 = inst_12422;var inst_12422__$1 = tmp12588;var inst_12423__$1 = tmp12587;var inst_12424__$1 = tmp12586;var inst_12425__$1 = inst_12439;var state_12541__$1 = (function (){var statearr_12591 = state_12541;(statearr_12591[14] = inst_12424__$1);
(statearr_12591[15] = inst_12425__$1);
(statearr_12591[16] = inst_12423__$1);
(statearr_12591[17] = inst_12422__$1);
(statearr_12591[26] = inst_12438);
return statearr_12591;
})();var statearr_12592_12661 = state_12541__$1;(statearr_12592_12661[2] = null);
(statearr_12592_12661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 16))
{var inst_12442 = (state_12541[24]);var inst_12444 = cljs.core.chunked_seq_QMARK_.call(null,inst_12442);var state_12541__$1 = state_12541;if(inst_12444)
{var statearr_12593_12662 = state_12541__$1;(statearr_12593_12662[1] = 19);
} else
{var statearr_12594_12663 = state_12541__$1;(statearr_12594_12663[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 17))
{var state_12541__$1 = state_12541;var statearr_12595_12664 = state_12541__$1;(statearr_12595_12664[2] = null);
(statearr_12595_12664[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 18))
{var inst_12466 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12596_12665 = state_12541__$1;(statearr_12596_12665[2] = inst_12466);
(statearr_12596_12665[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 19))
{var inst_12442 = (state_12541[24]);var inst_12446 = cljs.core.chunk_first.call(null,inst_12442);var inst_12447 = cljs.core.chunk_rest.call(null,inst_12442);var inst_12448 = cljs.core.count.call(null,inst_12446);var inst_12422 = inst_12447;var inst_12423 = inst_12446;var inst_12424 = inst_12448;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12597 = state_12541;(statearr_12597[14] = inst_12424);
(statearr_12597[15] = inst_12425);
(statearr_12597[16] = inst_12423);
(statearr_12597[17] = inst_12422);
return statearr_12597;
})();var statearr_12598_12666 = state_12541__$1;(statearr_12598_12666[2] = null);
(statearr_12598_12666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 20))
{var inst_12442 = (state_12541[24]);var inst_12452 = cljs.core.first.call(null,inst_12442);var inst_12453 = cljs.core.nth.call(null,inst_12452,0,null);var inst_12454 = cljs.core.nth.call(null,inst_12452,1,null);var state_12541__$1 = (function (){var statearr_12599 = state_12541;(statearr_12599[27] = inst_12453);
return statearr_12599;
})();if(cljs.core.truth_(inst_12454))
{var statearr_12600_12667 = state_12541__$1;(statearr_12600_12667[1] = 22);
} else
{var statearr_12601_12668 = state_12541__$1;(statearr_12601_12668[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 21))
{var inst_12463 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12602_12669 = state_12541__$1;(statearr_12602_12669[2] = inst_12463);
(statearr_12602_12669[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 22))
{var inst_12453 = (state_12541[27]);var inst_12456 = cljs.core.async.close_BANG_.call(null,inst_12453);var state_12541__$1 = state_12541;var statearr_12603_12670 = state_12541__$1;(statearr_12603_12670[2] = inst_12456);
(statearr_12603_12670[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 23))
{var state_12541__$1 = state_12541;var statearr_12604_12671 = state_12541__$1;(statearr_12604_12671[2] = null);
(statearr_12604_12671[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 24))
{var inst_12442 = (state_12541[24]);var inst_12459 = (state_12541[2]);var inst_12460 = cljs.core.next.call(null,inst_12442);var inst_12422 = inst_12460;var inst_12423 = null;var inst_12424 = 0;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12605 = state_12541;(statearr_12605[14] = inst_12424);
(statearr_12605[15] = inst_12425);
(statearr_12605[16] = inst_12423);
(statearr_12605[17] = inst_12422);
(statearr_12605[28] = inst_12459);
return statearr_12605;
})();var statearr_12606_12672 = state_12541__$1;(statearr_12606_12672[2] = null);
(statearr_12606_12672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 25))
{var inst_12484 = (state_12541[7]);var inst_12483 = (state_12541[9]);var inst_12486 = (inst_12484 < inst_12483);var inst_12487 = inst_12486;var state_12541__$1 = state_12541;if(cljs.core.truth_(inst_12487))
{var statearr_12607_12673 = state_12541__$1;(statearr_12607_12673[1] = 27);
} else
{var statearr_12608_12674 = state_12541__$1;(statearr_12608_12674[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 26))
{var inst_12473 = (state_12541[19]);var inst_12527 = (state_12541[2]);var inst_12528 = cljs.core.seq.call(null,inst_12473);var state_12541__$1 = (function (){var statearr_12609 = state_12541;(statearr_12609[29] = inst_12527);
return statearr_12609;
})();if(inst_12528)
{var statearr_12610_12675 = state_12541__$1;(statearr_12610_12675[1] = 42);
} else
{var statearr_12611_12676 = state_12541__$1;(statearr_12611_12676[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 27))
{var inst_12413 = (state_12541[13]);var inst_12484 = (state_12541[7]);var inst_12482 = (state_12541[8]);var inst_12489 = (state_12541[30]);var inst_12489__$1 = cljs.core._nth.call(null,inst_12482,inst_12484);var inst_12490 = cljs.core.async.put_BANG_.call(null,inst_12489__$1,inst_12413,done);var state_12541__$1 = (function (){var statearr_12612 = state_12541;(statearr_12612[30] = inst_12489__$1);
return statearr_12612;
})();if(cljs.core.truth_(inst_12490))
{var statearr_12613_12677 = state_12541__$1;(statearr_12613_12677[1] = 30);
} else
{var statearr_12614_12678 = state_12541__$1;(statearr_12614_12678[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 28))
{var inst_12500 = (state_12541[12]);var inst_12481 = (state_12541[10]);var inst_12500__$1 = cljs.core.seq.call(null,inst_12481);var state_12541__$1 = (function (){var statearr_12615 = state_12541;(statearr_12615[12] = inst_12500__$1);
return statearr_12615;
})();if(inst_12500__$1)
{var statearr_12616_12679 = state_12541__$1;(statearr_12616_12679[1] = 33);
} else
{var statearr_12617_12680 = state_12541__$1;(statearr_12617_12680[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 29))
{var inst_12525 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12618_12681 = state_12541__$1;(statearr_12618_12681[2] = inst_12525);
(statearr_12618_12681[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 30))
{var state_12541__$1 = state_12541;var statearr_12619_12682 = state_12541__$1;(statearr_12619_12682[2] = null);
(statearr_12619_12682[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12542 === 31))
{var inst_12489 = (state_12541[30]);var inst_12493 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12494 = cljs.core.async.untap_STAR_.call(null,m,inst_12489);var state_12541__$1 = (function (){var statearr_12620 = state_12541;(statearr_12620[31] = inst_12493);
return statearr_12620;
})();var statearr_12621_12683 = state_12541__$1;(statearr_12621_12683[2] = inst_12494);
(statearr_12621_12683[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_12625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12625[0] = state_machine__6210__auto__);
(statearr_12625[1] = 1);
return statearr_12625;
});
var state_machine__6210__auto____1 = (function (state_12541){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_12541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e12626){if((e12626 instanceof Object))
{var ex__6213__auto__ = e12626;var statearr_12627_12684 = state_12541;(statearr_12627_12684[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12685 = state_12541;
state_12541 = G__12685;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_12628 = f__6225__auto__.call(null);(statearr_12628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___12629);
return statearr_12628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12687 = {};return obj12687;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12807 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12807 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12808){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12808 = meta12808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12807.cljs$lang$type = true;
cljs.core.async.t12807.cljs$lang$ctorStr = "cljs.core.async/t12807";
cljs.core.async.t12807.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t12807");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12809){var self__ = this;
var _12809__$1 = this;return self__.meta12808;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12809,meta12808__$1){var self__ = this;
var _12809__$1 = this;return (new cljs.core.async.t12807(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12808__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12807 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12807(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12808){return (new cljs.core.async.t12807(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12808));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12807(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6224__auto___12926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_12879){var state_val_12880 = (state_12879[1]);if((state_val_12880 === 1))
{var inst_12813 = (state_12879[7]);var inst_12813__$1 = calc_state.call(null);var inst_12814 = cljs.core.seq_QMARK_.call(null,inst_12813__$1);var state_12879__$1 = (function (){var statearr_12881 = state_12879;(statearr_12881[7] = inst_12813__$1);
return statearr_12881;
})();if(inst_12814)
{var statearr_12882_12927 = state_12879__$1;(statearr_12882_12927[1] = 2);
} else
{var statearr_12883_12928 = state_12879__$1;(statearr_12883_12928[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 2))
{var inst_12813 = (state_12879[7]);var inst_12816 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12813);var state_12879__$1 = state_12879;var statearr_12884_12929 = state_12879__$1;(statearr_12884_12929[2] = inst_12816);
(statearr_12884_12929[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 3))
{var inst_12813 = (state_12879[7]);var state_12879__$1 = state_12879;var statearr_12885_12930 = state_12879__$1;(statearr_12885_12930[2] = inst_12813);
(statearr_12885_12930[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 4))
{var inst_12813 = (state_12879[7]);var inst_12819 = (state_12879[2]);var inst_12820 = cljs.core.get.call(null,inst_12819,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12821 = cljs.core.get.call(null,inst_12819,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12822 = cljs.core.get.call(null,inst_12819,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12823 = inst_12813;var state_12879__$1 = (function (){var statearr_12886 = state_12879;(statearr_12886[8] = inst_12820);
(statearr_12886[9] = inst_12821);
(statearr_12886[10] = inst_12822);
(statearr_12886[11] = inst_12823);
return statearr_12886;
})();var statearr_12887_12931 = state_12879__$1;(statearr_12887_12931[2] = null);
(statearr_12887_12931[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 5))
{var inst_12823 = (state_12879[11]);var inst_12826 = cljs.core.seq_QMARK_.call(null,inst_12823);var state_12879__$1 = state_12879;if(inst_12826)
{var statearr_12888_12932 = state_12879__$1;(statearr_12888_12932[1] = 7);
} else
{var statearr_12889_12933 = state_12879__$1;(statearr_12889_12933[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 6))
{var inst_12877 = (state_12879[2]);var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12879__$1,inst_12877);
} else
{if((state_val_12880 === 7))
{var inst_12823 = (state_12879[11]);var inst_12828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12823);var state_12879__$1 = state_12879;var statearr_12890_12934 = state_12879__$1;(statearr_12890_12934[2] = inst_12828);
(statearr_12890_12934[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 8))
{var inst_12823 = (state_12879[11]);var state_12879__$1 = state_12879;var statearr_12891_12935 = state_12879__$1;(statearr_12891_12935[2] = inst_12823);
(statearr_12891_12935[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 9))
{var inst_12831 = (state_12879[12]);var inst_12831__$1 = (state_12879[2]);var inst_12832 = cljs.core.get.call(null,inst_12831__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12833 = cljs.core.get.call(null,inst_12831__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12834 = cljs.core.get.call(null,inst_12831__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12879__$1 = (function (){var statearr_12892 = state_12879;(statearr_12892[12] = inst_12831__$1);
(statearr_12892[13] = inst_12833);
(statearr_12892[14] = inst_12834);
return statearr_12892;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12879__$1,10,inst_12832);
} else
{if((state_val_12880 === 10))
{var inst_12838 = (state_12879[15]);var inst_12839 = (state_12879[16]);var inst_12837 = (state_12879[2]);var inst_12838__$1 = cljs.core.nth.call(null,inst_12837,0,null);var inst_12839__$1 = cljs.core.nth.call(null,inst_12837,1,null);var inst_12840 = (inst_12838__$1 == null);var inst_12841 = cljs.core._EQ_.call(null,inst_12839__$1,change);var inst_12842 = (inst_12840) || (inst_12841);var state_12879__$1 = (function (){var statearr_12893 = state_12879;(statearr_12893[15] = inst_12838__$1);
(statearr_12893[16] = inst_12839__$1);
return statearr_12893;
})();if(cljs.core.truth_(inst_12842))
{var statearr_12894_12936 = state_12879__$1;(statearr_12894_12936[1] = 11);
} else
{var statearr_12895_12937 = state_12879__$1;(statearr_12895_12937[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 11))
{var inst_12838 = (state_12879[15]);var inst_12844 = (inst_12838 == null);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12844))
{var statearr_12896_12938 = state_12879__$1;(statearr_12896_12938[1] = 14);
} else
{var statearr_12897_12939 = state_12879__$1;(statearr_12897_12939[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 12))
{var inst_12839 = (state_12879[16]);var inst_12853 = (state_12879[17]);var inst_12834 = (state_12879[14]);var inst_12853__$1 = inst_12834.call(null,inst_12839);var state_12879__$1 = (function (){var statearr_12898 = state_12879;(statearr_12898[17] = inst_12853__$1);
return statearr_12898;
})();if(cljs.core.truth_(inst_12853__$1))
{var statearr_12899_12940 = state_12879__$1;(statearr_12899_12940[1] = 17);
} else
{var statearr_12900_12941 = state_12879__$1;(statearr_12900_12941[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 13))
{var inst_12875 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12901_12942 = state_12879__$1;(statearr_12901_12942[2] = inst_12875);
(statearr_12901_12942[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 14))
{var inst_12839 = (state_12879[16]);var inst_12846 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12839);var state_12879__$1 = state_12879;var statearr_12902_12943 = state_12879__$1;(statearr_12902_12943[2] = inst_12846);
(statearr_12902_12943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 15))
{var state_12879__$1 = state_12879;var statearr_12903_12944 = state_12879__$1;(statearr_12903_12944[2] = null);
(statearr_12903_12944[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 16))
{var inst_12849 = (state_12879[2]);var inst_12850 = calc_state.call(null);var inst_12823 = inst_12850;var state_12879__$1 = (function (){var statearr_12904 = state_12879;(statearr_12904[11] = inst_12823);
(statearr_12904[18] = inst_12849);
return statearr_12904;
})();var statearr_12905_12945 = state_12879__$1;(statearr_12905_12945[2] = null);
(statearr_12905_12945[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 17))
{var inst_12853 = (state_12879[17]);var state_12879__$1 = state_12879;var statearr_12906_12946 = state_12879__$1;(statearr_12906_12946[2] = inst_12853);
(statearr_12906_12946[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 18))
{var inst_12839 = (state_12879[16]);var inst_12833 = (state_12879[13]);var inst_12834 = (state_12879[14]);var inst_12856 = cljs.core.empty_QMARK_.call(null,inst_12834);var inst_12857 = inst_12833.call(null,inst_12839);var inst_12858 = cljs.core.not.call(null,inst_12857);var inst_12859 = (inst_12856) && (inst_12858);var state_12879__$1 = state_12879;var statearr_12907_12947 = state_12879__$1;(statearr_12907_12947[2] = inst_12859);
(statearr_12907_12947[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 19))
{var inst_12861 = (state_12879[2]);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12861))
{var statearr_12908_12948 = state_12879__$1;(statearr_12908_12948[1] = 20);
} else
{var statearr_12909_12949 = state_12879__$1;(statearr_12909_12949[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 20))
{var inst_12838 = (state_12879[15]);var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12879__$1,23,out,inst_12838);
} else
{if((state_val_12880 === 21))
{var inst_12831 = (state_12879[12]);var inst_12823 = inst_12831;var state_12879__$1 = (function (){var statearr_12910 = state_12879;(statearr_12910[11] = inst_12823);
return statearr_12910;
})();var statearr_12911_12950 = state_12879__$1;(statearr_12911_12950[2] = null);
(statearr_12911_12950[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 22))
{var inst_12873 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12912_12951 = state_12879__$1;(statearr_12912_12951[2] = inst_12873);
(statearr_12912_12951[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 23))
{var inst_12864 = (state_12879[2]);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12864))
{var statearr_12913_12952 = state_12879__$1;(statearr_12913_12952[1] = 24);
} else
{var statearr_12914_12953 = state_12879__$1;(statearr_12914_12953[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 24))
{var inst_12831 = (state_12879[12]);var inst_12823 = inst_12831;var state_12879__$1 = (function (){var statearr_12915 = state_12879;(statearr_12915[11] = inst_12823);
return statearr_12915;
})();var statearr_12916_12954 = state_12879__$1;(statearr_12916_12954[2] = null);
(statearr_12916_12954[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 25))
{var state_12879__$1 = state_12879;var statearr_12917_12955 = state_12879__$1;(statearr_12917_12955[2] = null);
(statearr_12917_12955[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12880 === 26))
{var inst_12869 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12918_12956 = state_12879__$1;(statearr_12918_12956[2] = inst_12869);
(statearr_12918_12956[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12922[0] = state_machine__6210__auto__);
(statearr_12922[1] = 1);
return statearr_12922;
});
var state_machine__6210__auto____1 = (function (state_12879){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_12879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e12923){if((e12923 instanceof Object))
{var ex__6213__auto__ = e12923;var statearr_12924_12957 = state_12879;(statearr_12924_12957[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12958 = state_12879;
state_12879 = G__12958;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_12879){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_12879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_12925 = f__6225__auto__.call(null);(statearr_12925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___12926);
return statearr_12925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12960 = {};return obj12960;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__12961_SHARP_){if(cljs.core.truth_(p1__12961_SHARP_.call(null,topic)))
{return p1__12961_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12961_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13076 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13076 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13077){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13077 = meta13077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13076.cljs$lang$type = true;
cljs.core.async.t13076.cljs$lang$ctorStr = "cljs.core.async/t13076";
cljs.core.async.t13076.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t13076");
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13076.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13078){var self__ = this;
var _13078__$1 = this;return self__.meta13077;
});})(mults,ensure_mult))
;
cljs.core.async.t13076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13078,meta13077__$1){var self__ = this;
var _13078__$1 = this;return (new cljs.core.async.t13076(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13077__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13076 = ((function (mults,ensure_mult){
return (function __GT_t13076(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13077){return (new cljs.core.async.t13076(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13077));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13076(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6224__auto___13190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13146){var state_val_13147 = (state_13146[1]);if((state_val_13147 === 1))
{var state_13146__$1 = state_13146;var statearr_13148_13191 = state_13146__$1;(statearr_13148_13191[2] = null);
(statearr_13148_13191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 2))
{var state_13146__$1 = state_13146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13146__$1,4,ch);
} else
{if((state_val_13147 === 3))
{var inst_13144 = (state_13146[2]);var state_13146__$1 = state_13146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13146__$1,inst_13144);
} else
{if((state_val_13147 === 4))
{var inst_13081 = (state_13146[7]);var inst_13081__$1 = (state_13146[2]);var inst_13082 = (inst_13081__$1 == null);var state_13146__$1 = (function (){var statearr_13149 = state_13146;(statearr_13149[7] = inst_13081__$1);
return statearr_13149;
})();if(cljs.core.truth_(inst_13082))
{var statearr_13150_13192 = state_13146__$1;(statearr_13150_13192[1] = 5);
} else
{var statearr_13151_13193 = state_13146__$1;(statearr_13151_13193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 5))
{var inst_13088 = cljs.core.deref.call(null,mults);var inst_13089 = cljs.core.vals.call(null,inst_13088);var inst_13090 = cljs.core.seq.call(null,inst_13089);var inst_13091 = inst_13090;var inst_13092 = null;var inst_13093 = 0;var inst_13094 = 0;var state_13146__$1 = (function (){var statearr_13152 = state_13146;(statearr_13152[8] = inst_13091);
(statearr_13152[9] = inst_13092);
(statearr_13152[10] = inst_13093);
(statearr_13152[11] = inst_13094);
return statearr_13152;
})();var statearr_13153_13194 = state_13146__$1;(statearr_13153_13194[2] = null);
(statearr_13153_13194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 6))
{var inst_13081 = (state_13146[7]);var inst_13129 = (state_13146[12]);var inst_13129__$1 = topic_fn.call(null,inst_13081);var inst_13130 = cljs.core.deref.call(null,mults);var inst_13131 = cljs.core.get.call(null,inst_13130,inst_13129__$1);var inst_13132 = cljs.core.async.muxch_STAR_.call(null,inst_13131);var state_13146__$1 = (function (){var statearr_13154 = state_13146;(statearr_13154[12] = inst_13129__$1);
return statearr_13154;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13146__$1,19,inst_13132,inst_13081);
} else
{if((state_val_13147 === 7))
{var inst_13142 = (state_13146[2]);var state_13146__$1 = state_13146;var statearr_13155_13195 = state_13146__$1;(statearr_13155_13195[2] = inst_13142);
(statearr_13155_13195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 8))
{var inst_13093 = (state_13146[10]);var inst_13094 = (state_13146[11]);var inst_13096 = (inst_13094 < inst_13093);var inst_13097 = inst_13096;var state_13146__$1 = state_13146;if(cljs.core.truth_(inst_13097))
{var statearr_13159_13196 = state_13146__$1;(statearr_13159_13196[1] = 10);
} else
{var statearr_13160_13197 = state_13146__$1;(statearr_13160_13197[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 9))
{var inst_13127 = (state_13146[2]);var state_13146__$1 = state_13146;var statearr_13161_13198 = state_13146__$1;(statearr_13161_13198[2] = inst_13127);
(statearr_13161_13198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 10))
{var inst_13091 = (state_13146[8]);var inst_13092 = (state_13146[9]);var inst_13093 = (state_13146[10]);var inst_13094 = (state_13146[11]);var inst_13099 = cljs.core._nth.call(null,inst_13092,inst_13094);var inst_13100 = cljs.core.async.muxch_STAR_.call(null,inst_13099);var inst_13101 = cljs.core.async.close_BANG_.call(null,inst_13100);var inst_13102 = (inst_13094 + 1);var tmp13156 = inst_13091;var tmp13157 = inst_13092;var tmp13158 = inst_13093;var inst_13091__$1 = tmp13156;var inst_13092__$1 = tmp13157;var inst_13093__$1 = tmp13158;var inst_13094__$1 = inst_13102;var state_13146__$1 = (function (){var statearr_13162 = state_13146;(statearr_13162[8] = inst_13091__$1);
(statearr_13162[9] = inst_13092__$1);
(statearr_13162[10] = inst_13093__$1);
(statearr_13162[11] = inst_13094__$1);
(statearr_13162[13] = inst_13101);
return statearr_13162;
})();var statearr_13163_13199 = state_13146__$1;(statearr_13163_13199[2] = null);
(statearr_13163_13199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 11))
{var inst_13091 = (state_13146[8]);var inst_13105 = (state_13146[14]);var inst_13105__$1 = cljs.core.seq.call(null,inst_13091);var state_13146__$1 = (function (){var statearr_13164 = state_13146;(statearr_13164[14] = inst_13105__$1);
return statearr_13164;
})();if(inst_13105__$1)
{var statearr_13165_13200 = state_13146__$1;(statearr_13165_13200[1] = 13);
} else
{var statearr_13166_13201 = state_13146__$1;(statearr_13166_13201[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 12))
{var inst_13125 = (state_13146[2]);var state_13146__$1 = state_13146;var statearr_13167_13202 = state_13146__$1;(statearr_13167_13202[2] = inst_13125);
(statearr_13167_13202[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 13))
{var inst_13105 = (state_13146[14]);var inst_13107 = cljs.core.chunked_seq_QMARK_.call(null,inst_13105);var state_13146__$1 = state_13146;if(inst_13107)
{var statearr_13168_13203 = state_13146__$1;(statearr_13168_13203[1] = 16);
} else
{var statearr_13169_13204 = state_13146__$1;(statearr_13169_13204[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 14))
{var state_13146__$1 = state_13146;var statearr_13170_13205 = state_13146__$1;(statearr_13170_13205[2] = null);
(statearr_13170_13205[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 15))
{var inst_13123 = (state_13146[2]);var state_13146__$1 = state_13146;var statearr_13171_13206 = state_13146__$1;(statearr_13171_13206[2] = inst_13123);
(statearr_13171_13206[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 16))
{var inst_13105 = (state_13146[14]);var inst_13109 = cljs.core.chunk_first.call(null,inst_13105);var inst_13110 = cljs.core.chunk_rest.call(null,inst_13105);var inst_13111 = cljs.core.count.call(null,inst_13109);var inst_13091 = inst_13110;var inst_13092 = inst_13109;var inst_13093 = inst_13111;var inst_13094 = 0;var state_13146__$1 = (function (){var statearr_13172 = state_13146;(statearr_13172[8] = inst_13091);
(statearr_13172[9] = inst_13092);
(statearr_13172[10] = inst_13093);
(statearr_13172[11] = inst_13094);
return statearr_13172;
})();var statearr_13173_13207 = state_13146__$1;(statearr_13173_13207[2] = null);
(statearr_13173_13207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 17))
{var inst_13105 = (state_13146[14]);var inst_13114 = cljs.core.first.call(null,inst_13105);var inst_13115 = cljs.core.async.muxch_STAR_.call(null,inst_13114);var inst_13116 = cljs.core.async.close_BANG_.call(null,inst_13115);var inst_13117 = cljs.core.next.call(null,inst_13105);var inst_13091 = inst_13117;var inst_13092 = null;var inst_13093 = 0;var inst_13094 = 0;var state_13146__$1 = (function (){var statearr_13174 = state_13146;(statearr_13174[8] = inst_13091);
(statearr_13174[9] = inst_13092);
(statearr_13174[10] = inst_13093);
(statearr_13174[15] = inst_13116);
(statearr_13174[11] = inst_13094);
return statearr_13174;
})();var statearr_13175_13208 = state_13146__$1;(statearr_13175_13208[2] = null);
(statearr_13175_13208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 18))
{var inst_13120 = (state_13146[2]);var state_13146__$1 = state_13146;var statearr_13176_13209 = state_13146__$1;(statearr_13176_13209[2] = inst_13120);
(statearr_13176_13209[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 19))
{var inst_13134 = (state_13146[2]);var state_13146__$1 = state_13146;if(cljs.core.truth_(inst_13134))
{var statearr_13177_13210 = state_13146__$1;(statearr_13177_13210[1] = 20);
} else
{var statearr_13178_13211 = state_13146__$1;(statearr_13178_13211[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 20))
{var state_13146__$1 = state_13146;var statearr_13179_13212 = state_13146__$1;(statearr_13179_13212[2] = null);
(statearr_13179_13212[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 21))
{var inst_13129 = (state_13146[12]);var inst_13137 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13129);var state_13146__$1 = state_13146;var statearr_13180_13213 = state_13146__$1;(statearr_13180_13213[2] = inst_13137);
(statearr_13180_13213[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13147 === 22))
{var inst_13139 = (state_13146[2]);var state_13146__$1 = (function (){var statearr_13181 = state_13146;(statearr_13181[16] = inst_13139);
return statearr_13181;
})();var statearr_13182_13214 = state_13146__$1;(statearr_13182_13214[2] = null);
(statearr_13182_13214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13186[0] = state_machine__6210__auto__);
(statearr_13186[1] = 1);
return statearr_13186;
});
var state_machine__6210__auto____1 = (function (state_13146){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13146);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13187){if((e13187 instanceof Object))
{var ex__6213__auto__ = e13187;var statearr_13188_13215 = state_13146;(statearr_13188_13215[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13216 = state_13146;
state_13146 = G__13216;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13146){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13189 = f__6225__auto__.call(null);(statearr_13189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13190);
return statearr_13189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6224__auto___13353 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13323){var state_val_13324 = (state_13323[1]);if((state_val_13324 === 1))
{var state_13323__$1 = state_13323;var statearr_13325_13354 = state_13323__$1;(statearr_13325_13354[2] = null);
(statearr_13325_13354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 2))
{var inst_13286 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13287 = 0;var state_13323__$1 = (function (){var statearr_13326 = state_13323;(statearr_13326[7] = inst_13287);
(statearr_13326[8] = inst_13286);
return statearr_13326;
})();var statearr_13327_13355 = state_13323__$1;(statearr_13327_13355[2] = null);
(statearr_13327_13355[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 3))
{var inst_13321 = (state_13323[2]);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13323__$1,inst_13321);
} else
{if((state_val_13324 === 4))
{var inst_13287 = (state_13323[7]);var inst_13289 = (inst_13287 < cnt);var state_13323__$1 = state_13323;if(cljs.core.truth_(inst_13289))
{var statearr_13328_13356 = state_13323__$1;(statearr_13328_13356[1] = 6);
} else
{var statearr_13329_13357 = state_13323__$1;(statearr_13329_13357[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 5))
{var inst_13307 = (state_13323[2]);var state_13323__$1 = (function (){var statearr_13330 = state_13323;(statearr_13330[9] = inst_13307);
return statearr_13330;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13323__$1,12,dchan);
} else
{if((state_val_13324 === 6))
{var state_13323__$1 = state_13323;var statearr_13331_13358 = state_13323__$1;(statearr_13331_13358[2] = null);
(statearr_13331_13358[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 7))
{var state_13323__$1 = state_13323;var statearr_13332_13359 = state_13323__$1;(statearr_13332_13359[2] = null);
(statearr_13332_13359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 8))
{var inst_13305 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13333_13360 = state_13323__$1;(statearr_13333_13360[2] = inst_13305);
(statearr_13333_13360[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 9))
{var inst_13287 = (state_13323[7]);var inst_13300 = (state_13323[2]);var inst_13301 = (inst_13287 + 1);var inst_13287__$1 = inst_13301;var state_13323__$1 = (function (){var statearr_13334 = state_13323;(statearr_13334[7] = inst_13287__$1);
(statearr_13334[10] = inst_13300);
return statearr_13334;
})();var statearr_13335_13361 = state_13323__$1;(statearr_13335_13361[2] = null);
(statearr_13335_13361[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 10))
{var inst_13291 = (state_13323[2]);var inst_13292 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13323__$1 = (function (){var statearr_13336 = state_13323;(statearr_13336[11] = inst_13291);
return statearr_13336;
})();var statearr_13337_13362 = state_13323__$1;(statearr_13337_13362[2] = inst_13292);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 11))
{var inst_13287 = (state_13323[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13323,10,Object,null,9);var inst_13296 = chs__$1.call(null,inst_13287);var inst_13297 = done.call(null,inst_13287);var inst_13298 = cljs.core.async.take_BANG_.call(null,inst_13296,inst_13297);var state_13323__$1 = state_13323;var statearr_13338_13363 = state_13323__$1;(statearr_13338_13363[2] = inst_13298);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 12))
{var inst_13309 = (state_13323[12]);var inst_13309__$1 = (state_13323[2]);var inst_13310 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13309__$1);var state_13323__$1 = (function (){var statearr_13339 = state_13323;(statearr_13339[12] = inst_13309__$1);
return statearr_13339;
})();if(cljs.core.truth_(inst_13310))
{var statearr_13340_13364 = state_13323__$1;(statearr_13340_13364[1] = 13);
} else
{var statearr_13341_13365 = state_13323__$1;(statearr_13341_13365[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 13))
{var inst_13312 = cljs.core.async.close_BANG_.call(null,out);var state_13323__$1 = state_13323;var statearr_13342_13366 = state_13323__$1;(statearr_13342_13366[2] = inst_13312);
(statearr_13342_13366[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 14))
{var inst_13309 = (state_13323[12]);var inst_13314 = cljs.core.apply.call(null,f,inst_13309);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13323__$1,16,out,inst_13314);
} else
{if((state_val_13324 === 15))
{var inst_13319 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13343_13367 = state_13323__$1;(statearr_13343_13367[2] = inst_13319);
(statearr_13343_13367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 16))
{var inst_13316 = (state_13323[2]);var state_13323__$1 = (function (){var statearr_13344 = state_13323;(statearr_13344[13] = inst_13316);
return statearr_13344;
})();var statearr_13345_13368 = state_13323__$1;(statearr_13345_13368[2] = null);
(statearr_13345_13368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13349[0] = state_machine__6210__auto__);
(statearr_13349[1] = 1);
return statearr_13349;
});
var state_machine__6210__auto____1 = (function (state_13323){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13350){if((e13350 instanceof Object))
{var ex__6213__auto__ = e13350;var statearr_13351_13369 = state_13323;(statearr_13351_13369[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13370 = state_13323;
state_13323 = G__13370;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13323){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13352 = f__6225__auto__.call(null);(statearr_13352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13353);
return statearr_13352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___13478 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13454){var state_val_13455 = (state_13454[1]);if((state_val_13455 === 1))
{var inst_13425 = cljs.core.vec.call(null,chs);var inst_13426 = inst_13425;var state_13454__$1 = (function (){var statearr_13456 = state_13454;(statearr_13456[7] = inst_13426);
return statearr_13456;
})();var statearr_13457_13479 = state_13454__$1;(statearr_13457_13479[2] = null);
(statearr_13457_13479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 2))
{var inst_13426 = (state_13454[7]);var inst_13428 = cljs.core.count.call(null,inst_13426);var inst_13429 = (inst_13428 > 0);var state_13454__$1 = state_13454;if(cljs.core.truth_(inst_13429))
{var statearr_13458_13480 = state_13454__$1;(statearr_13458_13480[1] = 4);
} else
{var statearr_13459_13481 = state_13454__$1;(statearr_13459_13481[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 3))
{var inst_13452 = (state_13454[2]);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13454__$1,inst_13452);
} else
{if((state_val_13455 === 4))
{var inst_13426 = (state_13454[7]);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13454__$1,7,inst_13426);
} else
{if((state_val_13455 === 5))
{var inst_13448 = cljs.core.async.close_BANG_.call(null,out);var state_13454__$1 = state_13454;var statearr_13460_13482 = state_13454__$1;(statearr_13460_13482[2] = inst_13448);
(statearr_13460_13482[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 6))
{var inst_13450 = (state_13454[2]);var state_13454__$1 = state_13454;var statearr_13461_13483 = state_13454__$1;(statearr_13461_13483[2] = inst_13450);
(statearr_13461_13483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 7))
{var inst_13434 = (state_13454[8]);var inst_13433 = (state_13454[9]);var inst_13433__$1 = (state_13454[2]);var inst_13434__$1 = cljs.core.nth.call(null,inst_13433__$1,0,null);var inst_13435 = cljs.core.nth.call(null,inst_13433__$1,1,null);var inst_13436 = (inst_13434__$1 == null);var state_13454__$1 = (function (){var statearr_13462 = state_13454;(statearr_13462[10] = inst_13435);
(statearr_13462[8] = inst_13434__$1);
(statearr_13462[9] = inst_13433__$1);
return statearr_13462;
})();if(cljs.core.truth_(inst_13436))
{var statearr_13463_13484 = state_13454__$1;(statearr_13463_13484[1] = 8);
} else
{var statearr_13464_13485 = state_13454__$1;(statearr_13464_13485[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 8))
{var inst_13435 = (state_13454[10]);var inst_13434 = (state_13454[8]);var inst_13426 = (state_13454[7]);var inst_13433 = (state_13454[9]);var inst_13438 = (function (){var c = inst_13435;var v = inst_13434;var vec__13431 = inst_13433;var cs = inst_13426;return ((function (c,v,vec__13431,cs,inst_13435,inst_13434,inst_13426,inst_13433,state_val_13455){
return (function (p1__13371_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13371_SHARP_);
});
;})(c,v,vec__13431,cs,inst_13435,inst_13434,inst_13426,inst_13433,state_val_13455))
})();var inst_13439 = cljs.core.filterv.call(null,inst_13438,inst_13426);var inst_13426__$1 = inst_13439;var state_13454__$1 = (function (){var statearr_13465 = state_13454;(statearr_13465[7] = inst_13426__$1);
return statearr_13465;
})();var statearr_13466_13486 = state_13454__$1;(statearr_13466_13486[2] = null);
(statearr_13466_13486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 9))
{var inst_13434 = (state_13454[8]);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13454__$1,11,out,inst_13434);
} else
{if((state_val_13455 === 10))
{var inst_13446 = (state_13454[2]);var state_13454__$1 = state_13454;var statearr_13468_13487 = state_13454__$1;(statearr_13468_13487[2] = inst_13446);
(statearr_13468_13487[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13455 === 11))
{var inst_13426 = (state_13454[7]);var inst_13443 = (state_13454[2]);var tmp13467 = inst_13426;var inst_13426__$1 = tmp13467;var state_13454__$1 = (function (){var statearr_13469 = state_13454;(statearr_13469[11] = inst_13443);
(statearr_13469[7] = inst_13426__$1);
return statearr_13469;
})();var statearr_13470_13488 = state_13454__$1;(statearr_13470_13488[2] = null);
(statearr_13470_13488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13474 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13474[0] = state_machine__6210__auto__);
(statearr_13474[1] = 1);
return statearr_13474;
});
var state_machine__6210__auto____1 = (function (state_13454){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13475){if((e13475 instanceof Object))
{var ex__6213__auto__ = e13475;var statearr_13476_13489 = state_13454;(statearr_13476_13489[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13454);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13490 = state_13454;
state_13454 = G__13490;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13454){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13477 = f__6225__auto__.call(null);(statearr_13477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13478);
return statearr_13477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___13583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13560){var state_val_13561 = (state_13560[1]);if((state_val_13561 === 1))
{var inst_13537 = 0;var state_13560__$1 = (function (){var statearr_13562 = state_13560;(statearr_13562[7] = inst_13537);
return statearr_13562;
})();var statearr_13563_13584 = state_13560__$1;(statearr_13563_13584[2] = null);
(statearr_13563_13584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 2))
{var inst_13537 = (state_13560[7]);var inst_13539 = (inst_13537 < n);var state_13560__$1 = state_13560;if(cljs.core.truth_(inst_13539))
{var statearr_13564_13585 = state_13560__$1;(statearr_13564_13585[1] = 4);
} else
{var statearr_13565_13586 = state_13560__$1;(statearr_13565_13586[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 3))
{var inst_13557 = (state_13560[2]);var inst_13558 = cljs.core.async.close_BANG_.call(null,out);var state_13560__$1 = (function (){var statearr_13566 = state_13560;(statearr_13566[8] = inst_13557);
return statearr_13566;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13560__$1,inst_13558);
} else
{if((state_val_13561 === 4))
{var state_13560__$1 = state_13560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13560__$1,7,ch);
} else
{if((state_val_13561 === 5))
{var state_13560__$1 = state_13560;var statearr_13567_13587 = state_13560__$1;(statearr_13567_13587[2] = null);
(statearr_13567_13587[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 6))
{var inst_13555 = (state_13560[2]);var state_13560__$1 = state_13560;var statearr_13568_13588 = state_13560__$1;(statearr_13568_13588[2] = inst_13555);
(statearr_13568_13588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 7))
{var inst_13542 = (state_13560[9]);var inst_13542__$1 = (state_13560[2]);var inst_13543 = (inst_13542__$1 == null);var inst_13544 = cljs.core.not.call(null,inst_13543);var state_13560__$1 = (function (){var statearr_13569 = state_13560;(statearr_13569[9] = inst_13542__$1);
return statearr_13569;
})();if(inst_13544)
{var statearr_13570_13589 = state_13560__$1;(statearr_13570_13589[1] = 8);
} else
{var statearr_13571_13590 = state_13560__$1;(statearr_13571_13590[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 8))
{var inst_13542 = (state_13560[9]);var state_13560__$1 = state_13560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13560__$1,11,out,inst_13542);
} else
{if((state_val_13561 === 9))
{var state_13560__$1 = state_13560;var statearr_13572_13591 = state_13560__$1;(statearr_13572_13591[2] = null);
(statearr_13572_13591[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 10))
{var inst_13552 = (state_13560[2]);var state_13560__$1 = state_13560;var statearr_13573_13592 = state_13560__$1;(statearr_13573_13592[2] = inst_13552);
(statearr_13573_13592[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13561 === 11))
{var inst_13537 = (state_13560[7]);var inst_13547 = (state_13560[2]);var inst_13548 = (inst_13537 + 1);var inst_13537__$1 = inst_13548;var state_13560__$1 = (function (){var statearr_13574 = state_13560;(statearr_13574[10] = inst_13547);
(statearr_13574[7] = inst_13537__$1);
return statearr_13574;
})();var statearr_13575_13593 = state_13560__$1;(statearr_13575_13593[2] = null);
(statearr_13575_13593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13579 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13579[0] = state_machine__6210__auto__);
(statearr_13579[1] = 1);
return statearr_13579;
});
var state_machine__6210__auto____1 = (function (state_13560){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13560);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13580){if((e13580 instanceof Object))
{var ex__6213__auto__ = e13580;var statearr_13581_13594 = state_13560;(statearr_13581_13594[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13595 = state_13560;
state_13560 = G__13595;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13560){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13582 = f__6225__auto__.call(null);(statearr_13582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13583);
return statearr_13582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___13692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13667){var state_val_13668 = (state_13667[1]);if((state_val_13668 === 1))
{var inst_13644 = null;var state_13667__$1 = (function (){var statearr_13669 = state_13667;(statearr_13669[7] = inst_13644);
return statearr_13669;
})();var statearr_13670_13693 = state_13667__$1;(statearr_13670_13693[2] = null);
(statearr_13670_13693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 2))
{var state_13667__$1 = state_13667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13667__$1,4,ch);
} else
{if((state_val_13668 === 3))
{var inst_13664 = (state_13667[2]);var inst_13665 = cljs.core.async.close_BANG_.call(null,out);var state_13667__$1 = (function (){var statearr_13671 = state_13667;(statearr_13671[8] = inst_13664);
return statearr_13671;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13667__$1,inst_13665);
} else
{if((state_val_13668 === 4))
{var inst_13647 = (state_13667[9]);var inst_13647__$1 = (state_13667[2]);var inst_13648 = (inst_13647__$1 == null);var inst_13649 = cljs.core.not.call(null,inst_13648);var state_13667__$1 = (function (){var statearr_13672 = state_13667;(statearr_13672[9] = inst_13647__$1);
return statearr_13672;
})();if(inst_13649)
{var statearr_13673_13694 = state_13667__$1;(statearr_13673_13694[1] = 5);
} else
{var statearr_13674_13695 = state_13667__$1;(statearr_13674_13695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 5))
{var inst_13644 = (state_13667[7]);var inst_13647 = (state_13667[9]);var inst_13651 = cljs.core._EQ_.call(null,inst_13647,inst_13644);var state_13667__$1 = state_13667;if(inst_13651)
{var statearr_13675_13696 = state_13667__$1;(statearr_13675_13696[1] = 8);
} else
{var statearr_13676_13697 = state_13667__$1;(statearr_13676_13697[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 6))
{var state_13667__$1 = state_13667;var statearr_13678_13698 = state_13667__$1;(statearr_13678_13698[2] = null);
(statearr_13678_13698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 7))
{var inst_13662 = (state_13667[2]);var state_13667__$1 = state_13667;var statearr_13679_13699 = state_13667__$1;(statearr_13679_13699[2] = inst_13662);
(statearr_13679_13699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 8))
{var inst_13644 = (state_13667[7]);var tmp13677 = inst_13644;var inst_13644__$1 = tmp13677;var state_13667__$1 = (function (){var statearr_13680 = state_13667;(statearr_13680[7] = inst_13644__$1);
return statearr_13680;
})();var statearr_13681_13700 = state_13667__$1;(statearr_13681_13700[2] = null);
(statearr_13681_13700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 9))
{var inst_13647 = (state_13667[9]);var state_13667__$1 = state_13667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13667__$1,11,out,inst_13647);
} else
{if((state_val_13668 === 10))
{var inst_13659 = (state_13667[2]);var state_13667__$1 = state_13667;var statearr_13682_13701 = state_13667__$1;(statearr_13682_13701[2] = inst_13659);
(statearr_13682_13701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13668 === 11))
{var inst_13647 = (state_13667[9]);var inst_13656 = (state_13667[2]);var inst_13644 = inst_13647;var state_13667__$1 = (function (){var statearr_13683 = state_13667;(statearr_13683[7] = inst_13644);
(statearr_13683[10] = inst_13656);
return statearr_13683;
})();var statearr_13684_13702 = state_13667__$1;(statearr_13684_13702[2] = null);
(statearr_13684_13702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13688[0] = state_machine__6210__auto__);
(statearr_13688[1] = 1);
return statearr_13688;
});
var state_machine__6210__auto____1 = (function (state_13667){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13689){if((e13689 instanceof Object))
{var ex__6213__auto__ = e13689;var statearr_13690_13703 = state_13667;(statearr_13690_13703[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13704 = state_13667;
state_13667 = G__13704;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13667){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13691 = f__6225__auto__.call(null);(statearr_13691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13692);
return statearr_13691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___13839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13809){var state_val_13810 = (state_13809[1]);if((state_val_13810 === 1))
{var inst_13772 = (new Array(n));var inst_13773 = inst_13772;var inst_13774 = 0;var state_13809__$1 = (function (){var statearr_13811 = state_13809;(statearr_13811[7] = inst_13774);
(statearr_13811[8] = inst_13773);
return statearr_13811;
})();var statearr_13812_13840 = state_13809__$1;(statearr_13812_13840[2] = null);
(statearr_13812_13840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 2))
{var state_13809__$1 = state_13809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13809__$1,4,ch);
} else
{if((state_val_13810 === 3))
{var inst_13807 = (state_13809[2]);var state_13809__$1 = state_13809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13809__$1,inst_13807);
} else
{if((state_val_13810 === 4))
{var inst_13777 = (state_13809[9]);var inst_13777__$1 = (state_13809[2]);var inst_13778 = (inst_13777__$1 == null);var inst_13779 = cljs.core.not.call(null,inst_13778);var state_13809__$1 = (function (){var statearr_13813 = state_13809;(statearr_13813[9] = inst_13777__$1);
return statearr_13813;
})();if(inst_13779)
{var statearr_13814_13841 = state_13809__$1;(statearr_13814_13841[1] = 5);
} else
{var statearr_13815_13842 = state_13809__$1;(statearr_13815_13842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 5))
{var inst_13777 = (state_13809[9]);var inst_13782 = (state_13809[10]);var inst_13774 = (state_13809[7]);var inst_13773 = (state_13809[8]);var inst_13781 = (inst_13773[inst_13774] = inst_13777);var inst_13782__$1 = (inst_13774 + 1);var inst_13783 = (inst_13782__$1 < n);var state_13809__$1 = (function (){var statearr_13816 = state_13809;(statearr_13816[10] = inst_13782__$1);
(statearr_13816[11] = inst_13781);
return statearr_13816;
})();if(cljs.core.truth_(inst_13783))
{var statearr_13817_13843 = state_13809__$1;(statearr_13817_13843[1] = 8);
} else
{var statearr_13818_13844 = state_13809__$1;(statearr_13818_13844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 6))
{var inst_13774 = (state_13809[7]);var inst_13795 = (inst_13774 > 0);var state_13809__$1 = state_13809;if(cljs.core.truth_(inst_13795))
{var statearr_13820_13845 = state_13809__$1;(statearr_13820_13845[1] = 12);
} else
{var statearr_13821_13846 = state_13809__$1;(statearr_13821_13846[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 7))
{var inst_13805 = (state_13809[2]);var state_13809__$1 = state_13809;var statearr_13822_13847 = state_13809__$1;(statearr_13822_13847[2] = inst_13805);
(statearr_13822_13847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 8))
{var inst_13782 = (state_13809[10]);var inst_13773 = (state_13809[8]);var tmp13819 = inst_13773;var inst_13773__$1 = tmp13819;var inst_13774 = inst_13782;var state_13809__$1 = (function (){var statearr_13823 = state_13809;(statearr_13823[7] = inst_13774);
(statearr_13823[8] = inst_13773__$1);
return statearr_13823;
})();var statearr_13824_13848 = state_13809__$1;(statearr_13824_13848[2] = null);
(statearr_13824_13848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 9))
{var inst_13773 = (state_13809[8]);var inst_13787 = cljs.core.vec.call(null,inst_13773);var state_13809__$1 = state_13809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,11,out,inst_13787);
} else
{if((state_val_13810 === 10))
{var inst_13793 = (state_13809[2]);var state_13809__$1 = state_13809;var statearr_13825_13849 = state_13809__$1;(statearr_13825_13849[2] = inst_13793);
(statearr_13825_13849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 11))
{var inst_13789 = (state_13809[2]);var inst_13790 = (new Array(n));var inst_13773 = inst_13790;var inst_13774 = 0;var state_13809__$1 = (function (){var statearr_13826 = state_13809;(statearr_13826[12] = inst_13789);
(statearr_13826[7] = inst_13774);
(statearr_13826[8] = inst_13773);
return statearr_13826;
})();var statearr_13827_13850 = state_13809__$1;(statearr_13827_13850[2] = null);
(statearr_13827_13850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 12))
{var inst_13773 = (state_13809[8]);var inst_13797 = cljs.core.vec.call(null,inst_13773);var state_13809__$1 = state_13809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,15,out,inst_13797);
} else
{if((state_val_13810 === 13))
{var state_13809__$1 = state_13809;var statearr_13828_13851 = state_13809__$1;(statearr_13828_13851[2] = null);
(statearr_13828_13851[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 14))
{var inst_13802 = (state_13809[2]);var inst_13803 = cljs.core.async.close_BANG_.call(null,out);var state_13809__$1 = (function (){var statearr_13829 = state_13809;(statearr_13829[13] = inst_13802);
return statearr_13829;
})();var statearr_13830_13852 = state_13809__$1;(statearr_13830_13852[2] = inst_13803);
(statearr_13830_13852[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13810 === 15))
{var inst_13799 = (state_13809[2]);var state_13809__$1 = state_13809;var statearr_13831_13853 = state_13809__$1;(statearr_13831_13853[2] = inst_13799);
(statearr_13831_13853[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13835[0] = state_machine__6210__auto__);
(statearr_13835[1] = 1);
return statearr_13835;
});
var state_machine__6210__auto____1 = (function (state_13809){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13809);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13836){if((e13836 instanceof Object))
{var ex__6213__auto__ = e13836;var statearr_13837_13854 = state_13809;(statearr_13837_13854[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13855 = state_13809;
state_13809 = G__13855;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13838 = f__6225__auto__.call(null);(statearr_13838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13839);
return statearr_13838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6224__auto___13998 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6225__auto__ = (function (){var switch__6209__auto__ = (function (state_13968){var state_val_13969 = (state_13968[1]);if((state_val_13969 === 1))
{var inst_13927 = [];var inst_13928 = inst_13927;var inst_13929 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13968__$1 = (function (){var statearr_13970 = state_13968;(statearr_13970[7] = inst_13928);
(statearr_13970[8] = inst_13929);
return statearr_13970;
})();var statearr_13971_13999 = state_13968__$1;(statearr_13971_13999[2] = null);
(statearr_13971_13999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 2))
{var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13968__$1,4,ch);
} else
{if((state_val_13969 === 3))
{var inst_13966 = (state_13968[2]);var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13968__$1,inst_13966);
} else
{if((state_val_13969 === 4))
{var inst_13932 = (state_13968[9]);var inst_13932__$1 = (state_13968[2]);var inst_13933 = (inst_13932__$1 == null);var inst_13934 = cljs.core.not.call(null,inst_13933);var state_13968__$1 = (function (){var statearr_13972 = state_13968;(statearr_13972[9] = inst_13932__$1);
return statearr_13972;
})();if(inst_13934)
{var statearr_13973_14000 = state_13968__$1;(statearr_13973_14000[1] = 5);
} else
{var statearr_13974_14001 = state_13968__$1;(statearr_13974_14001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 5))
{var inst_13929 = (state_13968[8]);var inst_13936 = (state_13968[10]);var inst_13932 = (state_13968[9]);var inst_13936__$1 = f.call(null,inst_13932);var inst_13937 = cljs.core._EQ_.call(null,inst_13936__$1,inst_13929);var inst_13938 = cljs.core.keyword_identical_QMARK_.call(null,inst_13929,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13939 = (inst_13937) || (inst_13938);var state_13968__$1 = (function (){var statearr_13975 = state_13968;(statearr_13975[10] = inst_13936__$1);
return statearr_13975;
})();if(cljs.core.truth_(inst_13939))
{var statearr_13976_14002 = state_13968__$1;(statearr_13976_14002[1] = 8);
} else
{var statearr_13977_14003 = state_13968__$1;(statearr_13977_14003[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 6))
{var inst_13928 = (state_13968[7]);var inst_13953 = inst_13928.length;var inst_13954 = (inst_13953 > 0);var state_13968__$1 = state_13968;if(cljs.core.truth_(inst_13954))
{var statearr_13979_14004 = state_13968__$1;(statearr_13979_14004[1] = 12);
} else
{var statearr_13980_14005 = state_13968__$1;(statearr_13980_14005[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 7))
{var inst_13964 = (state_13968[2]);var state_13968__$1 = state_13968;var statearr_13981_14006 = state_13968__$1;(statearr_13981_14006[2] = inst_13964);
(statearr_13981_14006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 8))
{var inst_13928 = (state_13968[7]);var inst_13936 = (state_13968[10]);var inst_13932 = (state_13968[9]);var inst_13941 = inst_13928.push(inst_13932);var tmp13978 = inst_13928;var inst_13928__$1 = tmp13978;var inst_13929 = inst_13936;var state_13968__$1 = (function (){var statearr_13982 = state_13968;(statearr_13982[7] = inst_13928__$1);
(statearr_13982[8] = inst_13929);
(statearr_13982[11] = inst_13941);
return statearr_13982;
})();var statearr_13983_14007 = state_13968__$1;(statearr_13983_14007[2] = null);
(statearr_13983_14007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 9))
{var inst_13928 = (state_13968[7]);var inst_13944 = cljs.core.vec.call(null,inst_13928);var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13968__$1,11,out,inst_13944);
} else
{if((state_val_13969 === 10))
{var inst_13951 = (state_13968[2]);var state_13968__$1 = state_13968;var statearr_13984_14008 = state_13968__$1;(statearr_13984_14008[2] = inst_13951);
(statearr_13984_14008[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 11))
{var inst_13936 = (state_13968[10]);var inst_13932 = (state_13968[9]);var inst_13946 = (state_13968[2]);var inst_13947 = [];var inst_13948 = inst_13947.push(inst_13932);var inst_13928 = inst_13947;var inst_13929 = inst_13936;var state_13968__$1 = (function (){var statearr_13985 = state_13968;(statearr_13985[7] = inst_13928);
(statearr_13985[8] = inst_13929);
(statearr_13985[12] = inst_13946);
(statearr_13985[13] = inst_13948);
return statearr_13985;
})();var statearr_13986_14009 = state_13968__$1;(statearr_13986_14009[2] = null);
(statearr_13986_14009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 12))
{var inst_13928 = (state_13968[7]);var inst_13956 = cljs.core.vec.call(null,inst_13928);var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13968__$1,15,out,inst_13956);
} else
{if((state_val_13969 === 13))
{var state_13968__$1 = state_13968;var statearr_13987_14010 = state_13968__$1;(statearr_13987_14010[2] = null);
(statearr_13987_14010[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 14))
{var inst_13961 = (state_13968[2]);var inst_13962 = cljs.core.async.close_BANG_.call(null,out);var state_13968__$1 = (function (){var statearr_13988 = state_13968;(statearr_13988[14] = inst_13961);
return statearr_13988;
})();var statearr_13989_14011 = state_13968__$1;(statearr_13989_14011[2] = inst_13962);
(statearr_13989_14011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 15))
{var inst_13958 = (state_13968[2]);var state_13968__$1 = state_13968;var statearr_13990_14012 = state_13968__$1;(statearr_13990_14012[2] = inst_13958);
(statearr_13990_14012[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6209__auto__){
return (function() {
var state_machine__6210__auto__ = null;
var state_machine__6210__auto____0 = (function (){var statearr_13994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13994[0] = state_machine__6210__auto__);
(statearr_13994[1] = 1);
return statearr_13994;
});
var state_machine__6210__auto____1 = (function (state_13968){while(true){
var ret_value__6211__auto__ = (function (){try{while(true){
var result__6212__auto__ = switch__6209__auto__.call(null,state_13968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6212__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6212__auto__;
}
break;
}
}catch (e13995){if((e13995 instanceof Object))
{var ex__6213__auto__ = e13995;var statearr_13996_14013 = state_13968;(statearr_13996_14013[5] = ex__6213__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6211__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14014 = state_13968;
state_13968 = G__14014;
continue;
}
} else
{return ret_value__6211__auto__;
}
break;
}
});
state_machine__6210__auto__ = function(state_13968){
switch(arguments.length){
case 0:
return state_machine__6210__auto____0.call(this);
case 1:
return state_machine__6210__auto____1.call(this,state_13968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6210__auto____0;
state_machine__6210__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6210__auto____1;
return state_machine__6210__auto__;
})()
;})(switch__6209__auto__))
})();var state__6226__auto__ = (function (){var statearr_13997 = f__6225__auto__.call(null);(statearr_13997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6224__auto___13998);
return statearr_13997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6226__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map