// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('om.tempid');
goog.require('cljs.core');

/**
* @constructor
 * @implements {om.tempid.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
om.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$], 0));
});

om.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof om.tempid.TempId)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.id,other.id));
});

om.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
self__.__hash = cljs.core.hash(self__.id);
} else {
}

return self__.__hash;
});

om.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#om/id[\"",self__.id,"\"]"], 0));
});

om.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

om.tempid.TempId.cljs$lang$type = true;

om.tempid.TempId.cljs$lang$ctorStr = "om.tempid/TempId";

om.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"om.tempid/TempId");
});

om.tempid.__GT_TempId = (function om$tempid$__GT_TempId(id,__hash){
return (new om.tempid.TempId(id,__hash));
});

om.tempid.tempid = (function om$tempid$tempid(var_args){
var args49020 = [];
var len__7296__auto___49023 = arguments.length;
var i__7297__auto___49024 = (0);
while(true){
if((i__7297__auto___49024 < len__7296__auto___49023)){
args49020.push((arguments[i__7297__auto___49024]));

var G__49025 = (i__7297__auto___49024 + (1));
i__7297__auto___49024 = G__49025;
continue;
} else {
}
break;
}

var G__49022 = args49020.length;
switch (G__49022) {
case 0:
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49020.length)].join('')));

}
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new om.tempid.TempId(id,null));
});

om.tempid.tempid.cljs$lang$maxFixedArity = 1;

om.tempid.tempid_QMARK_ = (function om$tempid$tempid_QMARK_(x){
return (x instanceof om.tempid.TempId);
});