var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#666666'],[1,'#cccccc']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-tr'])
Z([[7],[3,'isCheck']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'activeColor']])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem']]]]]]]]])
Z([[7],[3,'styleType']])
Z([[7],[3,'items']])
Z([3,'1'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productList']])
Z(z[9])
Z([3,'uni-product'])
Z([[7],[3,'renderImage']])
Z([[6],[[7],[3,'product']],[3,'favourPrice']])
Z([[2,'!'],[[6],[[7],[3,'product']],[3,'favourPrice']]])
Z(z[9])
Z(z[10])
Z([[7],[3,'foodList']])
Z(z[9])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'is_login']])
Z([[2,'!'],[[7],[3,'is_login']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z([3,'text'])
Z([[7],[3,'email']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入手机号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码(6-16位)'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'name']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入姓名'])
Z(z[5])
Z([[7],[3,'name']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'key'])
Z([3,'value'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'uni-list-cell-navigate uni-navigate-right uni-media-list '])
Z([[7],[3,'showImg']])
Z([[2,'!'],[[6],[[7],[3,'value']],[3,'qiandao']]])
Z([[6],[[7],[3,'value']],[3,'qiandao']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'2']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'2']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'2']])
Z(z[4])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tableList']])
Z([3,'id'])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'7-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'7-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'9-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'7-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'10-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'7-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'11-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'7-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[20])
Z([3,'items'])
Z([[7],[3,'food']])
Z(z[20])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'12-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'13-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'12-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'14-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'12-'],[[7],[3,'index']]]])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'15'],[1,',']],[1,'1']])
Z(z[4])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'16'],[1,',']],[1,'15']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/m-icon/m-icon.wxml','./components/m-input.wxml','./components/t-table/t-table.wxml','./components/t-table/t-td.wxml','./components/t-table/t-th.wxml','./components/t-table/t-tr.wxml','./components/uni-segmented-control/uni-segmented-control.wxml','./pages/daka/daka.wxml','./pages/food_menu/food_menu.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/pwd/pwd.wxml','./pages/reg/reg.wxml','./pages/san_wei/san_wei.wxml','./pages/tuser/tuser.wxml','./pages/tuser_detail/tuser_detail.wxml','./pages/tuser_weight/tuser_weight.wxml','./pages/user/user.wxml','./pages/yuding_gl/yuding_gl.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
var cF=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oD,cF)
}
var fE=_v()
_(xC,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
var hG=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(fE,hG)
}
oD.wxXCkey=1
oD.wxXCkey=3
fE.wxXCkey=1
fE.wxXCkey=3
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cI=_n('slot')
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_n('slot')
_(r,lK)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var tM=_n('slot')
_(r,tM)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,1,e,s,gg)){oP.wxVkey=1
}
var xQ=_n('slot')
_(bO,xQ)
oP.wxXCkey=1
_(r,bO)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hU=_n('view')
_rz(z,hU,'class',0,e,s,gg)
var oV=_mz(z,'uni-segmented-control',['activeColor',1,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'styleType',5,'values',6,'vueId',7],[],e,s,gg)
_(hU,oV)
var cW=_v()
_(hU,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_n('view')
_rz(z,b3,'class',13,aZ,lY,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,14,aZ,lY,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,15,aZ,lY,gg)){x5.wxVkey=1
}
var o6=_v()
_(b3,o6)
if(_oz(z,16,aZ,lY,gg)){o6.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(t1,b3)
return t1
}
cW.wxXCkey=2
_2z(z,11,oX,e,s,gg,cW,'product','index','index')
var f7=_v()
_(hU,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
if(_oz(z,21,o0,h9,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
return cAB
}
f7.wxXCkey=2
_2z(z,19,c8,e,s,gg,f7,'product','index','index')
_(r,hU)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tEB=_n('view')
_rz(z,tEB,'class',0,e,s,gg)
var bGB=_n('view')
_rz(z,bGB,'class',1,e,s,gg)
var oHB=_mz(z,'m-input',['clearable',-1,'bind:__l',2,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(bGB,oHB)
var xIB=_mz(z,'m-input',['displayable',-1,'bind:__l',10,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(bGB,xIB)
_(tEB,bGB)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,17,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
_(r,tEB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,1,e,s,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,2,e,s,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(r,fKB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cOB=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',0,'bind:input',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(r,cOB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(lQB,aRB)
var tSB=_mz(z,'m-input',['displayable',-1,'bind:__l',8,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(lQB,tSB)
var eTB=_mz(z,'m-input',['clearable',-1,'bind:__l',15,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(lQB,eTB)
_(r,lQB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var xWB=_v()
_(r,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_n('view')
_rz(z,c3B,'class',4,cZB,fYB,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,5,cZB,fYB,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,6,cZB,fYB,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(c3B,a6B)
if(_oz(z,7,cZB,fYB,gg)){a6B.wxVkey=1
}
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
_(h1B,c3B)
return h1B
}
xWB.wxXCkey=2
_2z(z,2,oXB,e,s,gg,xWB,'value','key','key')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xAC=_mz(z,'t-table',['bind:__l',0,'bind:change',1,'data-event-opts',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oBC=_mz(z,'t-tr',['bind:__l',5,'vueId',1,'vueSlots',2],[],e,s,gg)
var fCC=_mz(z,'t-th',['bind:__l',8,'vueId',1,'vueSlots',2],[],e,s,gg)
_(oBC,fCC)
var cDC=_mz(z,'t-th',['bind:__l',11,'vueId',1,'vueSlots',2],[],e,s,gg)
_(oBC,cDC)
var hEC=_mz(z,'t-th',['bind:__l',14,'vueId',1,'vueSlots',2],[],e,s,gg)
_(oBC,hEC)
var oFC=_mz(z,'t-th',['bind:__l',17,'vueId',1,'vueSlots',2],[],e,s,gg)
_(oBC,oFC)
_(xAC,oBC)
var cGC=_v()
_(xAC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_mz(z,'t-tr',['bind:__l',24,'vueId',1,'vueSlots',2],[],aJC,lIC,gg)
var oNC=_mz(z,'t-td',['bind:__l',27,'vueId',1,'vueSlots',2],[],aJC,lIC,gg)
_(bMC,oNC)
var xOC=_mz(z,'t-td',['bind:__l',30,'vueId',1,'vueSlots',2],[],aJC,lIC,gg)
_(bMC,xOC)
var oPC=_mz(z,'t-td',['bind:__l',33,'vueId',1,'vueSlots',2],[],aJC,lIC,gg)
_(bMC,oPC)
var fQC=_mz(z,'t-td',['bind:__l',36,'vueId',1,'vueSlots',2],[],aJC,lIC,gg)
_(bMC,fQC)
_(tKC,bMC)
return tKC
}
cGC.wxXCkey=4
_2z(z,22,oHC,e,s,gg,cGC,'item','index','id')
var cRC=_v()
_(xAC,cRC)
var hSC=function(cUC,oTC,oVC,gg){
var aXC=_mz(z,'t-tr',['bind:__l',43,'vueId',1,'vueSlots',2],[],cUC,oTC,gg)
var tYC=_mz(z,'t-td',['bind:__l',46,'vueId',1,'vueSlots',2],[],cUC,oTC,gg)
_(aXC,tYC)
var eZC=_mz(z,'t-td',['bind:__l',49,'vueId',1,'vueSlots',2],[],cUC,oTC,gg)
_(aXC,eZC)
_(oVC,aXC)
return oVC
}
cRC.wxXCkey=4
_2z(z,41,hSC,e,s,gg,cRC,'items','index','index')
var b1C=_mz(z,'t-tr',['bind:__l',52,'vueId',1,'vueSlots',2],[],e,s,gg)
var o2C=_mz(z,'t-td',['bind:__l',55,'vueId',1,'vueSlots',2],[],e,s,gg)
_(b1C,o2C)
_(xAC,b1C)
_(r,xAC)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/main/main","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/daka/daka","pages/tuser/tuser","pages/tuser_detail/tuser_detail","pages/tuser_weight/tuser_weight","pages/food_menu/food_menu","pages/yuding_gl/yuding_gl","pages/san_wei/san_wei"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ygjs_jlb","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['components/t-table/t-table.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/t-table/t-table.wxml']=$gwx('./components/t-table/t-table.wxml');

__wxAppCode__['components/t-table/t-td.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/t-table/t-td.wxml']=$gwx('./components/t-table/t-td.wxml');

__wxAppCode__['components/t-table/t-th.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/t-table/t-th.wxml']=$gwx('./components/t-table/t-th.wxml');

__wxAppCode__['components/t-table/t-tr.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/t-table/t-tr.wxml']=$gwx('./components/t-table/t-tr.wxml');

__wxAppCode__['components/uni-segmented-control/uni-segmented-control.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-segmented-control/uni-segmented-control.wxml']=$gwx('./components/uni-segmented-control/uni-segmented-control.wxml');

__wxAppCode__['pages/daka/daka.json']={"usingComponents":{}};
__wxAppCode__['pages/daka/daka.wxml']=$gwx('./pages/daka/daka.wxml');

__wxAppCode__['pages/food_menu/food_menu.json']={"usingComponents":{"uni-segmented-control":"/components/uni-segmented-control/uni-segmented-control"}};
__wxAppCode__['pages/food_menu/food_menu.wxml']=$gwx('./pages/food_menu/food_menu.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"教练端-登录","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"找回密码","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"注册","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/san_wei/san_wei.json']={"usingComponents":{}};
__wxAppCode__['pages/san_wei/san_wei.wxml']=$gwx('./pages/san_wei/san_wei.wxml');

__wxAppCode__['pages/tuser_detail/tuser_detail.json']={"usingComponents":{}};
__wxAppCode__['pages/tuser_detail/tuser_detail.wxml']=$gwx('./pages/tuser_detail/tuser_detail.wxml');

__wxAppCode__['pages/tuser_weight/tuser_weight.json']={"usingComponents":{}};
__wxAppCode__['pages/tuser_weight/tuser_weight.wxml']=$gwx('./pages/tuser_weight/tuser_weight.wxml');

__wxAppCode__['pages/tuser/tuser.json']={"usingComponents":{}};
__wxAppCode__['pages/tuser/tuser.wxml']=$gwx('./pages/tuser/tuser.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/yuding_gl/yuding_gl.json']={"usingComponents":{"t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"}};
__wxAppCode__['pages/yuding_gl/yuding_gl.wxml']=$gwx('./pages/yuding_gl/yuding_gl.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"97c9":function(t,e,n){},a51a:function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");var e=u(n("66fd")),o=u(n("f4df")),a=u(n("7e5f"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$store=a.default,o.default.mpType="app";var c=new e.default(i({store:a.default},o.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},b312:function(t,e,n){"use strict";n.r(e);var o=n("b84e"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},b503:function(t,e,n){"use strict";var o=n("97c9"),a=n.n(o);a.a},b84e:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){var e=plus.runtime.version;t.request({url:"https://ygjs.mfmeat.top/index.php/api/main/checkUpdate",method:"POST",dataType:"json",success:function(o){e<o.data.version&&t.showModal({title:"版本更新",content:"有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？",confirmText:"立即更新",showCancel:!1,success:function(e){if(e.confirm){t.showToast({icon:"none",mask:!0,title:"有新的版本发布，程序已启动自动更新。新版本下载完成后将自动弹出安装程序",duration:5e3}),t.showLoading({title:"下载中，请稍后..."});var o="https://ygjs.mfmeat.top/index.php/api/main/update",a=plus.downloader.createDownload(o,{},function(e,n){200==n?(t.hideLoading(),plus.runtime.install(plus.io.convertLocalFileSystemURL(e.filename),{},{},function(e){t.showToast({title:"安装失败",duration:1500})})):t.showToast({title:"更新失败",duration:1500})});a.start()}else e.cancel&&console.log(n("稍后更新"," at App.vue:51"))}})}})},onShow:function(){console.log(n("App Show"," at App.vue:60"))},onHide:function(){console.log(n("App Hide"," at App.vue:63"))}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},f4df:function(t,e,n){"use strict";n.r(e);var o=n("b312");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("b503");var u,i,r=n("2877"),c=Object(r["a"])(o["default"],u,i,!1,null,null,null);e["default"]=c.exports}},[["a51a","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, l = t[0], u = t[1], i = t[2], s = 0, m = []; s < l.length; s++) {
      r = l[s], a[r] && m.push(a[r][0]), a[r] = 0;
    }

    for (o in u) {
      Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    }

    p && p(t);

    while (m.length) {
      m.shift()();
    }

    return c.push.apply(c, i || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, r = 1; r < n.length; r++) {
        var l = n[r];
        0 !== a[l] && (o = !1);
      }

      o && (c.splice(t--, 1), e = u(u.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      c = [];

  function l(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
  }

  u.e = function (e) {
    var t = [],
        n = {
      "components/m-input": 1,
      "components/uni-segmented-control/uni-segmented-control": 1,
      "components/t-table/t-table": 1,
      "components/t-table/t-td": 1,
      "components/t-table/t-th": 1,
      "components/t-table/t-tr": 1,
      "components/m-icon/m-icon": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/m-input": "components/m-input",
        "components/uni-segmented-control/uni-segmented-control": "components/uni-segmented-control/uni-segmented-control",
        "components/t-table/t-table": "components/t-table/t-table",
        "components/t-table/t-td": "components/t-table/t-td",
        "components/t-table/t-th": "components/t-table/t-th",
        "components/t-table/t-tr": "components/t-table/t-tr",
        "components/m-icon/m-icon": "components/m-icon/m-icon"
      }[e] || e) + ".wxss", a = u.p + o, c = document.getElementsByTagName("link"), l = 0; l < c.length; l++) {
        var i = c[l],
            s = i.getAttribute("data-href") || i.getAttribute("href");
        if ("stylesheet" === i.rel && (s === o || s === a)) return t();
      }

      var m = document.getElementsByTagName("style");

      for (l = 0; l < m.length; l++) {
        i = m[l], s = i.getAttribute("data-href");
        if (s === o || s === a) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var o = t && t.target && t.target.src || a,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], p.parentNode.removeChild(p), n(c);
      }, p.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(p);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var c = new Promise(function (t, n) {
        o = a[e] = [t, n];
      });
      t.push(o[2] = c);
      var i,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, u.nc && s.setAttribute("nonce", u.nc), s.src = l(e), i = function i(t) {
        s.onerror = s.onload = null, clearTimeout(m);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, n[1](c);
          }

          a[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        i({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = i, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, u.m = e, u.c = o, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      u.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = i.push.bind(i);
  i.push = t, i = i.slice();

  for (var m = 0; m < i.length; m++) {
    t(i[m]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"1cbe":function(t,e,n){},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return R}),n.d(e,"mapMutations",function(){return D}),n.d(e,"mapGetters",function(){return E}),n.d(e,"mapActions",function(){return M}),n.d(e,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;f(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new c(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=i,x(this,r,[],this._modules.root),_(this,r),n.forEach(function(t){return t(e)}),p.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;x(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:o}),p.config.silent=s,t.strict&&T(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),p.nextTick(function(){return i.$destroy()}))}function x(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=P(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){p.set(s,l,i.state)})}var c=i.context=m(t,a,n);i.forEachMutation(function(e,n){var i=a+n;S(t,i,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;A(t,i,r,c)}),i.forEachGetter(function(e,n){var i=a+n;w(t,i,e,c)}),i.forEachChild(function(i,o){x(t,e,n.concat(o),i,r)})}function m(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=k(n,i,r),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,r){var o=k(n,i,r),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return P(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function S(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function A(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function w(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function T(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function P(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){p&&t===p||(p=t,i(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,r=k(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=k(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=P(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var R=F(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=L(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),D=F(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=L(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),E=F(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||L(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),M=F(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=L(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),C=function(t){return{mapState:R.bind(null,t),mapGetters:E.bind(null,t),mapMutations:D.bind(null,t),mapActions:M.bind(null,t)}};function $(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function L(t,e,n){var i=t._modulesNamespaceMap[n];return i}var I={Store:d,install:O,version:"3.0.1",mapState:R,mapMutations:D,mapGetters:E,mapActions:M,createNamespacedHelpers:C};e["default"]=I},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"494c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USERS_KEY",i=function(){var e="";return e=t.getStorageSync(n),e||(e="[]"),JSON.parse(e)},r=function(e){var r=i();r.push({account:e.account,password:e.password}),t.setStorageSync(n,JSON.stringify(r))},o={getUsers:i,addUser:r};e.default=o}).call(this,n("6e42")["default"])},"4dcb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/login/login":{navigationBarTitleText:"教练端-登录"},"pages/main/main":{navigationBarTitleText:"首页"},"pages/reg/reg":{navigationBarTitleText:"注册"},"pages/pwd/pwd":{navigationBarTitleText:"找回密码"},"pages/user/user":{navigationBarTitleText:"我的"},"pages/daka/daka":{},"pages/tuser/tuser":{},"pages/tuser_detail/tuser_detail":{},"pages/tuser_weight/tuser_weight":{},"pages/food_menu/food_menu":{},"pages/yuding_gl/yuding_gl":{},"pages/san_wei/san_wei":{}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}};e.default=i},"5a5e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__57FC3FF"};e.default=i},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var x=Object.prototype.hasOwnProperty;function m(t,e){return x.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,A=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var R=Function.prototype.bind?O:k;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function E(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function C(t,e,n){}var $=function(t,e,n){return!1},F=function(t){return t};function L(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return L(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var H=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:C,parsePlatformTagName:F,mustUseProp:$,async:!0,_lifecycleHooks:N},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+z.source+".$_\\d]");function q(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,G="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===X&&(X=!J&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),X},ot=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=C,ut=0,ht=function(){this.id=ut++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function pt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){_(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function _t(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,mt=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];U(mt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(mt),At=!0;function wt(t){At=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?kt(t,mt,St):Pt(t,mt):kt(t,mt,St),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];U(t,o,e[o])}}function Ot(t,e){var n;if(l(t)&&!(t instanceof dt))return m(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:At&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Ot(e),o.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Rt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Ct=B.optionMergeStrategies;function $t(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&$t(i,r):Dt(t,n,r));return t}function Ft(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?$t(i,r):r}:e?t?function(){return $t("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function jt(t,e,n,i){var r=Object.create(t||null);return e?E(r,e):r}Ct.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},N.forEach(function(t){Ct[t]=Lt}),H.forEach(function(t){Ct[t+"s"]=jt}),Ct.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in E(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return E(r,t),e&&E(r,e),r},Ct.provide=Ft;var Ht=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=A(r),a[o]={type:null})}else if(u(n))for(var s in n)r=n[s],o=A(s),a[o]=u(r)?r:{type:r};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var o in n){var a=n[o];i[o]=u(a)?E({from:o},a):{from:a}}else 0}}function zt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),zt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Wt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)m(t,o)||s(o);function s(i){var r=Ct[i]||Ht;a[i]=r(t[i],e[i],n,i)}return a}function Ut(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var o=A(n);if(m(r,o))return r[o];var a=w(o);if(m(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Vt(t,e,n,i){var r=e[t],o=!m(n,t),a=n[t],s=Jt(Boolean,r.type);if(s>-1)if(o&&!m(r,"default"))a=!1;else if(""===a||a===P(t)){var l=Jt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=qt(i,r,t);var c=At;wt(!0),Ot(a),wt(c)}return a}function qt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Xt(e.type)?i.call(t):i}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Xt(t)===Xt(e)}function Jt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Gt(e[n],t))return n;return-1}function Yt(t,e,n){ft();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(er){Zt(er,i,"errorCaptured hook")}}}Zt(t,e,n)}finally{pt()}}function Kt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(t){return Yt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(er){Yt(er,i,r)}return o}function Zt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Qt(er,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!J&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,ae=new MutationObserver(ie),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Yt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function pe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Kt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Kt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,a,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=fe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=pe(c,s)),o(h.once)&&(c=t[l]=a(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=fe(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var c in o){var u=P(c);ge(a,l,c,u,!0)||ge(a,s,c,u,!1)}return a}}function ge(t,e,n,i,o){if(r(e)){if(m(e,n))return t[n]=e[n],o||delete e[n],!0;if(m(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?me(t):void 0}function xe(t){return r(t)&&r(t.text)&&a(t.isComment)}function me(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=me(a,(e||"")+"_"+n),xe(a[0])&&xe(c)&&(u[l]=yt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?xe(c)?u[l]=yt(c.text+a):""!==a&&u.push(yt(a)):xe(a)&&xe(c)?u[l]=yt(c.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Ae(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){Rt(t,n,e[n])}),wt(!0))}function Ae(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&m(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function we(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(Te)&&delete n[c];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=ke(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",a),U(r,"$key",s),U(r,"$hasNormal",o),r}function ke(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Oe(t,e){return function(){return t[e]}}function Re(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=E(E({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Ee(t){return Ut(this.$options,"filters",t,!0)||F}function Me(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,n,i,r){var o=B.keyCodes[e]||n;return r&&i&&!B.keyCodes[e]?Me(r,i):o?Me(o,t):i?P(i)!==e:void 0}function $e(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=M(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||B.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=A(a),c=P(a);if(!(l in o)&&!(c in o)&&(o[a]=n[a],r)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(i,"__static__"+t,!1),i)}function Le(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&je(t[i],e+"_"+i,n);else je(t,e,n)}function je(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function He(t,e){if(e)if(u(e)){var n=t.on=t.on?E({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ne(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function ze(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=Le,t._n=v,t._s=d,t._l=Re,t._t=De,t._q=L,t._i=I,t._m=Fe,t._f=Ee,t._k=Ce,t._b=$e,t._v=yt,t._e=gt,t._u=Ne,t._g=He,t._d=Be,t._p=ze}function Ue(t,e,i,r,a){var s,l=this,c=a.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Ae(c.inject,r),this.slots=function(){return l.$slots||Pe(t.scopedSlots,l.$slots=we(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var o=rn(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,h)}}function Ve(t,e,i,o,a){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Xe(l,i.attrs),r(i.props)&&Xe(l,i.props);var h=new Ue(i,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof dt)return qe(f,i,h.parent,s,h);if(Array.isArray(f)){for(var p=_e(f)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=qe(p[v],i,h.parent,s,h);return d}}function qe(t,e,n,i,r){var o=_t(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Xe(t,e){for(var n in e)t[A(n)]=e[n]}We(Ue.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ge.prepatch(n,n)}else{var i=t.componentInstance=Ke(t,An);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;kn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Rn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Je=Object.keys(Ge);function Ye(t,e,n,a,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=dn(u,c),void 0===t))return pn(u,e,n,a,s);e=e||{},fi(t),r(e.model)&&tn(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return Ve(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},u);return v}}}function Ke(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var i=Je[n],r=e[i],o=Ge[i];r===o||r&&r._merged||(e[i]=r?Qe(o,r):o)}}function Qe(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=nn),on(t,e,n,i,r)}function on(t,e,n,i,o){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===nn?i=_e(i):o===en&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),a=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ut(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Ye(l,n,t,i,e)):a=Ye(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&an(a,s),r(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&an(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=we(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var o=i&&i.data;Rt(t,"$attrs",o&&o.attrs||n,null,!0),Rt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){We(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Pe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{un=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Yt(er,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=r,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,i,r){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function dn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=un;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return _(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=j(function(n){t.resolved=fn(n,e),s?a.length=0:h(!0)}),d=j(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),v=t(f,d);return l(v)&&(p(v)?i(t.resolved)&&v.then(f,d):p(v.component)&&(v.component.then(f,d),r(v.error)&&(t.errorComp=fn(v.error,e)),r(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function _n(t,e){cn.$on(t,e)}function xn(t,e){cn.$off(t,e)}function mn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,de(e,n||{},_n,xn,mn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Kt(n[o],e,i,e,r)}return e}}var An=null;function wn(t){var e=An;return An=t,function(){An=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=wn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){En(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),En(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){wt(!1);for(var u=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var p=h[f],d=t.$options.props;u[p]=Vt(p,d,e,t)}wt(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,v),c&&(t.$slots=we(o,r.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);En(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);En(t,"deactivated")}}function En(t,e){ft();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Kt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Mn=[],Cn=[],$n={},Fn=!1,Ln=!1,In=0;function jn(){In=Mn.length=Cn.length=0,$n={},Fn=Ln=!1}var Hn=Date.now;if(J&&!Q){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&Hn()>document.createEvent("Event").timeStamp&&(Hn=function(){return Nn.now()})}function Bn(){var t,e;for(Hn(),Ln=!0,Mn.sort(function(t,e){return t.id-e.id}),In=0;In<Mn.length;In++)t=Mn[In],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Cn.slice(),i=Mn.slice();jn(),Un(n),zn(i),ot&&B.devtools&&ot.emit("flush")}function zn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&En(i,"updated")}}function Wn(t){t._inactive=!1,Cn.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rn(t[e],!0)}function Vn(t){var e=t.id;if(null==$n[e]){if($n[e]=!0,Ln){var n=Mn.length-1;while(n>In&&Mn[n].id>t.id)n--;Mn.splice(n+1,0,t)}else Mn.push(t);Fn||(Fn=!0,le(Bn))}}var qn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Yt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),pt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vn(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Yt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gn={enumerable:!0,configurable:!0,get:C,set:C};function Jn(t,e,n){Gn.get=function(){return this[e][n]},Gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Gn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Kn(t,e.props),e.methods&&oi(t,e.methods),e.data?Zn(t):Ot(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&ai(t,e.watch)}function Kn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||wt(!1);var a=function(o){r.push(o);var a=Vt(o,e,n,t);Rt(i,o,a),o in t||Jn(t,"_props",o)};for(var s in e)a(s);wt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&m(i,o)||W(o)||Jn(t,"_data",o)}Ot(e,!0)}function Qn(t,e){ft();try{return t.call(e,e)}catch(er){return Yt(er,e,"data()"),{}}finally{pt()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Xn(t,a||C,C,ti)),r in t||ni(t,r,o)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(Gn.get=i?ii(e):ri(n),Gn.set=C):(Gn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):C,Gn.set=n.set||C),Object.defineProperty(t,e,Gn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:R(e[n],t)}function ai(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Yt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function ui(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Wt(fi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),ln(e),En(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Yn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&En(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fi(t){var e=t.options;if(t.super){var n=fi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&E(t.extendOptions,r),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function di(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gi(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Wt(n.options,t),a["super"]=n,a.options.props&&_i(a),a.options.computed&&xi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,H.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),r[i]=a,a}}function _i(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function xi(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function mi(t){H.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Ai(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&wi(n,o,i,r)}}}function wi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,_(n,e)}ui(di),li(di),Sn(di),Pn(di),hn(di);var Ti=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Ti,exclude:Ti,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)wi(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Ai(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){Ai(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Si(o,i))||a&&i&&Si(a,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,_(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&wi(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},ki={KeepAlive:Pi};function Oi(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:E,mergeOptions:Wt,defineReactive:Rt},t.set=Dt,t.delete=Et,t.nextTick=le,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),H.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,ki),vi(t),gi(t),yi(t),mi(t)}Oi(di),Object.defineProperty(di.prototype,"$isServer",{get:rt}),Object.defineProperty(di.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(di,"FunctionalRenderContext",{value:Ue}),di.version="2.6.10";var Ri="[object Array]",Di="[object Object]";function Ei(t,e){var n={};return Mi(t,e),Ci(t,e,"",n),n}function Mi(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==Di&&i==Di){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Mi(o,e[r])}}else n==Ri&&i==Ri&&t.length>=e.length&&e.forEach(function(e,n){Mi(t[n],e)})}}function Ci(t,e,n,i){if(t!==e){var r=Fi(t),o=Fi(e);if(r==Di)if(o!=Di||Object.keys(t).length<Object.keys(e).length)$i(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Fi(o),l=Fi(a);if(s!=Ri&&s!=Di)o!=e[r]&&$i(i,(""==n?"":n+".")+r,o);else if(s==Ri)l!=Ri?$i(i,(""==n?"":n+".")+r,o):o.length<a.length?$i(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ci(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Di)if(l!=Di||Object.keys(o).length<Object.keys(a).length)$i(i,(""==n?"":n+".")+r,o);else for(var c in o)Ci(o[c],a[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)a(s)}else r==Ri?o!=Ri?$i(i,n,t):t.length<e.length?$i(i,n,t):t.forEach(function(t,r){Ci(t,e[r],n+"["+r+"]",i)}):$i(i,n,t)}}function $i(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function Li(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ii(t){return Mn.find(function(e){return t._watcher===e})}function ji(t,e){if(!t.__next_tick_pending&&!Ii(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Yt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Hi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Hi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Ei(r,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Li(n)})):Li(this)}};function Bi(){}function zi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bi),t.$options.render||(t.$options.render=Bi),"mp-toutiao"!==t.mpHost&&En(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,C,{before:function(){t._isMounted&&!t._isDestroyed&&En(t,"beforeUpdate")}},!0),n=!1,t}function Wi(t,e){return r(t)||r(e)?Ui(t,Vi(e)):""}function Ui(t,e){return t?e?t+" "+e:t:e||""}function Vi(t){return Array.isArray(t)?qi(t):l(t)?Xi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Vi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Gi=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ji(t){return Array.isArray(t)?M(t):"string"===typeof t?Gi(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ki(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ki(t[i],n.slice(1).join("."))}function Zi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return ji(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;ft();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Kt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ki(e||this,t)},t.prototype.__get_class=function(t,e){return Wi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ji(t),i=e?E(e,n):n;return Object.keys(i).map(function(t){return P(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var Qi=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qi.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Qi.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Qi}di.prototype.__patch__=Ni,di.prototype.$mount=function(t,e){return zi(this,t,e)},tr(di),Zi(di),e["default"]=di}.call(this,n("c8ba"))},"6b75":function(t,e,n){"use strict";(function(e,n){var i,r={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};i=Object.assign?Object.assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n};var o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function a(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),a=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],o=0;o<t.length;o++){for(var a={data:[],name:e[o],color:n[o]},s=0,l=i.length;s<l;s++)if(s<t[o])a.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=i[s-u][1];a.data.push(+(c/t[o]).toFixed(3))}r.push(a)}return r}function c(t,e,n,i){var r=i.width-i.area[1]-i.area[3],o=e.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),a=t;return t>=0?a=0:Math.abs(t)>=o-r&&(a=r-o),a}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,o=i+(n-r-i)/Math.sqrt(2);o*=-1;var a=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:o,transY:a}}function f(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,o=null,a=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(o=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:l}}}function p(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.fontSize;t=String(t);t=t.split("");for(var n=0,i=0;i<t.length;i++){var o=t[i];/[a-zA-Z]/.test(o)?n+=7:/[0-9]/.test(o)?n+=5.5:/\./.test(o)?n+=2.7:/-/.test(o)?n+=3.25:/[\u4e00-\u9fa5]/.test(o)?n+=10:/\(|\)/.test(o)?n+=3.73:/\s/.test(o)?n+=2.5:/%/.test(o)?n+=8:n+=10}return n*e/10}function _(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function m(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function b(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var o={};o.color=r.color,o.type=r.type,o.style=r.style,o.pointShape=r.pointShape,o.disableLegend=r.disableLegend,o.name=r.name,o.show=r.show,o.data=r.format?r.format(r.data[e]):r.data[e],n.push(o)}}return n}function S(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function A(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function w(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function T(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});o=o.filter(function(t){if(!0!==t.disableLegend)return t});for(var a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function P(t,e,n,i,r,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,l=[a,a,s,a],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=a),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},o={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,o,u)});for(var h=[],f={x:0,y:0},p=0;p<n.length;p++){var d=n[p];"undefined"!==typeof d[i]&&null!==d[i]&&h.push(d[i])}return f.x=Math.round(h[0][0].x),{textList:c,offset:f}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function O(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1,a=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(a=n.chartData.eachSpacing/2),E(t,n,i)&&e.forEach(function(e,n){t.x+r+a>e&&(o=n)}),o}function R(t,e,n){var i=-1;if(D(t,e.area)){for(var r=e.points,o=-1,a=0,s=r.length;a<s;a++)for(var l=r[a],c=0;c<l.length;c++){o+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=o;break}}return i}return i}function D(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function E(t,e,n){return t.x<e.width-e.area[1]+10&&t.x>e.area[3]-10&&t.y>e.area[0]&&t.y<e.height-e.area[2]}function M(t,e,n){var i=2*Math.PI/n,r=-1;if(I(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-i/2),s=o(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(r=e)})}return r}function C(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var o=e.series[i];if(t.x>o.funnelArea[0]&&t.x<o.funnelArea[2]&&t.y>o.funnelArea[1]&&t.y<o.funnelArea[3]){n=i;break}}return n}function $(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var o=e[i];if(t.x>o.area[0]&&t.x<o.area[2]&&t.y>o.area[1]&&t.y<o.area[3]){n=i;break}}return n}function F(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,o=jt(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),a=[o.x,o.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(Nt(a,c)){n=s;break}}return n}function L(t,e){var n=-1;if(I(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,o=e.series.length;r<o;r++){var a=e.series[r];if(u(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=r;break}}}return n}function I(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function j(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function H(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var o=e.legend.padding,a=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],f=0,p=[],d=[],v=0;v<t.length;v++){var g=t[v],_=l+c+y(g.name||"undefined",s)+e.legend.itemGap;f+_>e.width-e.padding[1]-e.padding[3]?(h.push(d),p.push(f-e.legend.itemGap),f=_,d=[g]):(f+=_,d.push(g))}if(d.length){h.push(d),p.push(f-e.legend.itemGap),r.widthArr=p;var x=Math.max.apply(null,p);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*o;break;case"right":r.area.start.x=e.width-e.padding[1]-x-2*o,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-x)/2-o,r.area.end.x=(e.width+x)/2+o}r.area.width=x+2*o,r.area.wholeWidth=x+2*o,r.area.height=h.length*u+2*o,r.area.wholeHeight=h.length*u+2*o+2*a,r.points=h}}else{var m=t.length,b=e.height-e.padding[0]-e.padding[2]-2*a-2*o,S=Math.min(Math.floor(b/u),m);switch(r.area.height=S*u+2*o,r.area.wholeHeight=S*u+2*o,e.legend.float){case"top":r.area.start.y=e.padding[0]+a,r.area.end.y=e.padding[0]+a+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-a-r.area.height,r.area.end.y=e.height-e.padding[2]-a;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var A=m%S===0?m/S:Math.floor(m/S+1),w=[],T=0;T<A;T++){var P=t.slice(T*S,T*S+S);w.push(P)}if(r.points=w,w.length){for(var k=0;k<w.length;k++){for(var O=w[k],R=0,D=0;D<O.length;D++){var E=l+c+y(O[D].name||"undefined",s)+e.legend.itemGap;E>R&&(R=E)}r.widthArr.push(R),r.heightArr.push(O.length*u+2*o)}for(var M=0,C=0;C<r.widthArr.length;C++)M+=r.widthArr[C];r.area.width=M-e.legend.itemGap+2*o,r.area.wholeWidth=r.area.width+o}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+a,r.area.end.y=e.padding[0]+a+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-a,r.area.end.y=e.height-e.padding[2]-a;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function N(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},o=t.map(function(t){return y(t)}),a=Math.max.apply(this,o);return 1==e.xAxis.rotateLabel&&a+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+a*Math.sin(r.angle)),r}function B(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=r.extra.radar||{};a.max=a.max||0;for(var s=Math.max(a.max,Math.max.apply(null,_(i))),l=[],c=function(r){var a=i[r],c={};c.color=a.color,c.data=[],a.data.forEach(function(i,r){var a={};a.angle=t[r],a.proportion=i/s,a.position=p(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),c.data.push(a)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function z(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,o=0;o<t.length;o++){var a=t[o];a.data=null===a.data?0:a.data,i+=a.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function U(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0,a=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,o+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),f=i-n,p=0;p<t.length;p++){var d=t[p];d.data=null===d.data?0:d.data,0===o||"area"==e?(d._proportion_=d.data/o*r,d._rose_proportion_=1/t.length*r):(d._proportion_=d.data/o*r,d._rose_proportion_=d.data/o*r),d._radius_=n+f*((d.data-u)/(h-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=a,a+=2*g._rose_proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var o=void 0;o="default"==e.type?e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle:2,r._proportion_=o*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function q(t,e,n){for(var i=e-n+1,r=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=r,t[o]._endAngle_=i*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),r=t[o]._endAngle_;return t}function X(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var o=t[r];if(o.data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o.data>=n.oldData?o._proportion_=(o._endAngle_-o._oldAngle_)*i+n.oldAngle:o._proportion_=o._oldAngle_-(o._oldAngle_-o._endAngle_)*i,o._proportion_>=2&&(o._proportion_=o._proportion_%2)}return t}function G(t){t=z(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):o.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function J(t,e,n,i,r,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function Y(t,e,n,i,r,o,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),i>0&&(t.width-=2*a),t)})}function K(t,e,n,i,r,o,a){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),o.extra.column&&o.extra.column.width&&+o.extra.column.width>0&&(t.width=Math.min(t.width,+o.extra.column.width)),t)})}function Z(t,e,n){n.yAxisWidth,n.yAxisTitleWidth;var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var o=i/r,a=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){a.push(s+e*o)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?a.push(s+t.length*o):a.push(l)),{xAxisPoints:a,startX:s,endX:l,eachSpacing:o}}function Q(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=i[a]+Math.round(r/2);var f=t.value||t,p=c*(f-e)/(n-e);p*=s,h.y=o.height-Math.round(p)-o.area[2],u.push(h)}),l.push(u)}}),l}function tt(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=o.type&&"area"!=o.type||(l=o.xAxis.boundaryGap);var c=[],u=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)c.push(null);else{var h={};h.color=t.color,h.x=i[a],"center"==l&&(h.x+=Math.round(r/2));var f=t;"object"===typeof t&&null!==t&&(f=t.value);var p=u*(f-e)/(n-e);p*=s,h.y=o.height-Math.round(p)-o.area[2],c.push(h)}}),c}function et(t,e,n,i,r,o,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=o.height-o.area[0]-o.area[2];return t.forEach(function(t,a){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=i[a]+Math.round(r/2),s>0){for(var p=0,d=0;d<=s;d++)p+=l[d].data[a];var v=p-t,g=h*(p-e)/(n-e),y=h*(v-e)/(n-e)}else p=t,g=h*(p-e)/(n-e),y=0;var _=y;g*=c,_*=c,f.y=o.height-Math.round(g)-o.area[2],f.y0=o.height-Math.round(_)-o.area[2],u.push(f)}}),u}function nt(t,e,n,i){var r;r="stack"==i?x(t,e.categories.length):_(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var a=0,s=0;if(o.length>0&&(a=Math.min.apply(this,o),s=Math.max.apply(this,o)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var l=s||10;s+=l}for(var c=g(a,s),u=c.minRange,h=c.maxRange,f=[],p=(h-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)f.push(u+p*d);return f.reverse()}function it(t,e,n){var r=i({},{type:""},e.extra.column),a=nt(t,e,n,r.type),s=n.yAxisWidth,l=e.yAxis.fontSize||n.fontSize,c=a.map(function(t){return t=o.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,y(t,l)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:c,ranges:a,yAxisWidth:s}}function rt(t,e,n,i,r){var o=nt(e,n,i),a=n.height-n.area[0]-n.area[2],s=o[0],l=o[o.length-1],c=n.padding[3],u=n.padding[1]+a,h=s-(s-l)*(t-c)/(u-c);return h=n.yAxis.format?n.yAxis.format(Number(h)):h,h}function ot(t,e,n,i){for(var r=i.height-i.area[0]-i.area[2],o=0;o<n.length;o++){var a=r*(n[o].value-t)/(e-t);n[o].y=i.height-Math.round(a)-i.area[2]}return n}function at(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function st(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function lt(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,o=t.subtitle.fontSize||e.subtitleFontSize,a=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=a?r:0,h=s?o:0,f=5;if(s){var p=y(s,o),d=i.x-p/2+(t.subtitle.offsetX||0),v=i.y+o/2+(t.subtitle.offsetY||0);a&&(v+=(u+f)/2),n.beginPath(),n.setFontSize(o),n.setFillStyle(c),n.fillText(s,d,v),n.closePath(),n.stroke()}if(a){var g=y(a,r),_=i.x-g/2+(t.title.offsetX||0),x=i.y+r/2+(t.title.offsetY||0);s&&(x-=(h+f)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(a,_,x),n.closePath(),n.stroke()}}function ct(t,e,n,i){var r=e.data;t.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var a=r[o];"object"===typeof r[o]&&null!==r[o]&&(a=r[o].value);var s=e.format?e.format(a):a;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-2),i.closePath(),i.stroke()}})}function ut(t,e,n,i,r,o){e-=t.width/2+r.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,f=0;f<t.splitLine.splitNumber+1;f++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;p.x+=n.x-y(d)/2,p.y+=n.y;var v=p.x,g=p.y;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(d,v,g+r.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ht(t,e,n,i,r,a){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=p(c.x,c.y,n),h=u.x,f=u.y;o.approximatelyEqual(c.x,0)?h-=y(i.categories[l]||"")/2:c.x<0&&(h-=y(i.categories[l]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[l]||"",h,f+r.fontSize/2),a.closePath(),a.stroke()})}function ft(t,e,n,i,r,a){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var f=u[h],v=Math.cos(f.arc)*(f.radius+s),g=Math.sin(f.arc)*(f.radius+s),_=Math.cos(f.arc)*f.radius,x=Math.sin(f.arc)*f.radius,m=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,b=g,S=y(f.text),A=b;c&&o.isSameXCoordinateArea(c.start,{x:m})&&(A=m>0?Math.min(b,c.start.y):v<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),m<0&&(m-=S);var w={lineStart:{x:_,y:x},lineEnd:{x:v,y:g},start:{x:m,y:A},width:S,height:n.fontSize,text:f.text,color:f.color,textColor:f.textColor,textSize:f.textSize};c=d(w,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=p(P.lineStart.x,P.lineStart.y,a),O=p(P.lineEnd.x,P.lineEnd.y,a),R=p(P.start.x,P.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(P.color),i.setFillStyle(P.color),i.moveTo(k.x,k.y);var D=P.start.x<0?R.x+P.width:R.x,E=P.start.x<0?R.x-5:R.x+5;i.quadraticCurveTo(O.x,O.y,D,R.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(R.x+P.width,R.y),i.arc(D,R.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(P.textSize||n.fontSize),i.setFillStyle(P.textColor||"#666666"),i.fillText(P.text,E,R.y+3),i.closePath(),i.stroke(),i.closePath()}}function pt(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var o=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,o),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;i.beginPath(),i.setFillStyle(a(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function dt(t,e,n,r,o){for(var s=i({},{type:"solid",dashLength:4,data:[]},n.extra.markLine),l=n.area[3],c=n.width-n.padding[1],u=ot(t,e,s.data,n),h=0;h<u.length;h++){var f=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[h]);if("dash"==s.type&&o.setLineDash([s.dashLength,s.dashLength]),o.setStrokeStyle(f.lineColor),o.setLineWidth(1*n.pixelRatio),o.beginPath(),o.moveTo(l,f.y),o.lineTo(c,f.y),o.stroke(),o.setLineDash([]),f.showLabel){var p=n.yAxis.format?n.yAxis.format(Number(f.value)):f.value;o.setFontSize(r.fontSize);var d=y(p,r.fontSize),v=n.padding[3]+r.yAxisTitleWidth-r.toolTipPadding,g=Math.max(n.area[3],d+2*r.toolTipPadding),_=g-v,x=v+(_-d)/2,m=f.y;o.setFillStyle(a(f.labelBgColor,f.labelBgOpacity)),o.setStrokeStyle(f.labelBgColor),o.setLineWidth(1*n.pixelRatio),o.beginPath(),o.rect(v,m-.5*r.fontSize-r.toolTipPadding,_,r.fontSize+2*r.toolTipPadding),o.closePath(),o.stroke(),o.fill(),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(f.labelFontColor),o.fillText(String(p),x,m+.5*r.fontSize),o.stroke()}}}function vt(t,e,n,r,o){var s=i({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.padding[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel){var u=rt(t.tooltip.offset.y,t.series,t,e,r);n.setFontSize(e.fontSize);var h=y(u,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,p=Math.max(t.area[3],h+2*e.toolTipPadding),d=p-f,v=f+(d-h)/2,g=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(a(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(f,g-.5*e.fontSize-e.toolTipPadding,d,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u,v,g+.5*e.fontSize),n.closePath(),n.stroke()}}function gt(t,e,n,r,o){var s=i({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];r.beginPath(),r.setFillStyle(a(s.activeBgColor,s.activeBgOpacity)),r.rect(t-o/2,l,o,c-l),r.closePath(),r.fill()}function yt(t,e,n,r,o,s,l){var c=i({},{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,f=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||pt(n.tooltip.offset.x,n,r,o),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,r.fontSize)}),v=u+h+4*r.toolTipPadding+Math.max.apply(null,d),g=2*r.toolTipPadding+t.length*r.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+f+v>n.width&&(p=!0),g+e.y>n.height&&(e.y=n.height-g),o.beginPath(),o.setFillStyle(a(c.bgColor||r.toolTipBackground,c.bgOpacity||r.toolTipOpacity)),p?(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x-f,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x-f,e.y),o.lineTo(e.x-f-Math.round(v),e.y),o.lineTo(e.x-f-Math.round(v),e.y+g),o.lineTo(e.x-f,e.y+g),o.lineTo(e.x-f,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)):(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x+f,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x+f,e.y),o.lineTo(e.x+f+Math.round(v),e.y),o.lineTo(e.x+f+Math.round(v),e.y+g),o.lineTo(e.x+f,e.y+g),o.lineTo(e.x+f,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)),o.closePath(),o.fill(),t.forEach(function(t,n){if(null!==t.color){o.beginPath(),o.setFillStyle(t.color);var i=e.x+f+2*r.toolTipPadding,a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;p&&(i=e.x-v-f+2*r.toolTipPadding),o.fillRect(i,a,u,r.fontSize),o.closePath()}}),t.forEach(function(t,n){var i=e.x+f+2*r.toolTipPadding+u+h;p&&(i=e.x-v-f+2*r.toolTipPadding+ +u+h);var a=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(c.fontColor),o.fillText(t.text,i,a+r.fontSize),o.closePath(),o.stroke()})}function _t(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-y(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,e.padding[3]+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function xt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=i({},{type:"group",width:c/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),h=a.pop(),f=a.shift(),p=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&gt(e.tooltip.offset.x,e,n,r,c),t.forEach(function(i,a){var s=i.data;switch(u.type){case"group":var d=tt(s,h,f,l,c,e,n,o),v=et(s,h,f,l,c,e,n,a,t,o);p.push(v),d=J(d,c,t.length,a,n,e),d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setStrokeStyle(t.color||i.color),r.setLineWidth(1),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2;e.height,t.y,e.area[2];r.moveTo(o-1,t.y),r.lineTo(o+t.width-2,t.y),r.lineTo(o+t.width-2,e.height-e.area[2]),r.lineTo(o,e.height-e.area[2]),r.lineTo(o,t.y),r.closePath(),r.stroke(),r.fill()}});break;case"stack":d=et(s,h,f,l,c,e,n,a,t,o);p.push(d),d=K(d,c,t.length,a,n,e,t),d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2+1,s=e.height-t.y-e.area[2],l=e.height-t.y0-e.area[2];a>0&&(s-=l),r.moveTo(o,t.y),r.fillRect(o,t.y,t.width-2,s),r.closePath(),r.fill()}});break;case"meter":d=tt(s,h,f,l,c,e,n,o);p.push(d),d=Y(d,c,t.length,a,n,e,u.meter.border),0==a?d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(u.meter.fillColor);var o=t.x-t.width/2,a=e.height-t.y-e.area[2];r.moveTo(o,t.y),r.fillRect(o,t.y,t.width,a),r.closePath(),r.fill(),u.meter.border>0&&(r.beginPath(),r.setStrokeStyle(i.color),r.setLineWidth(u.meter.border*e.pixelRatio),r.moveTo(o+.5*u.meter.border,t.y+a),r.lineTo(o+.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(o+t.width-.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(o+t.width-.5*u.meter.border,t.y+a),r.stroke())}}):d.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var o=t.x-t.width/2,a=e.height-t.y-e.area[2];r.moveTo(o,t.y),r.fillRect(o,t.y,t.width,a),r.closePath(),r.fill()}});break}}),!1!==e.dataLabel&&1===o&&t.forEach(function(i,a){var s=i.data;switch(u.type){case"group":var p=tt(s,h,f,l,c,e,n,o);p=J(p,c,t.length,a,n,e),ct(p,i,n,r);break;case"stack":p=et(s,h,f,l,c,e,n,a,t,o);ct(p,i,n,r);break;case"meter":p=tt(s,h,f,l,c,e,n,o);ct(p,i,n,r);break}}),r.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:c,minRange:h,maxRange:f}}function mt(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{color:{},average:{}},n.extra.candle);s.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=i({},{show:!1,name:[],day:[],color:r.colors},s.average),n.extra.candle=s;var l=[].concat(n.chartData.yAxisData.ranges),c=n.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,p=l.pop(),d=l.shift(),v=[];return o.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&o.translate(n._scrollDistance_,0),s.average.show&&e.forEach(function(t,e){var i=t.data,s=tt(i,p,d,u,h,n,r,a),l=j(s);l.forEach(function(e,n){o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(1),1===e.length?(o.moveTo(e[0].x,e[0].y),o.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(o.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var i=f(e,n-1);o.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}),o.moveTo(e[0].x,e[0].y)),o.closePath(),o.stroke()})}),t.forEach(function(t,e){var i=t.data,l=Q(i,p,d,u,h,n,r,a);v.push(l);var c=j(l);c=c[0],c.forEach(function(t,e){o.beginPath(),i[e][1]-i[e][0]>0?(o.setStrokeStyle(s.color.upLine),o.setFillStyle(s.color.upFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x-h/4,t[1].y),o.lineTo(t[0].x-h/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x+h/4,t[0].y),o.lineTo(t[1].x+h/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.moveTo(t[3].x,t[3].y)):(o.setStrokeStyle(s.color.downLine),o.setFillStyle(s.color.downFill),o.setLineWidth(1*n.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x-h/4,t[0].y),o.lineTo(t[1].x-h/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x+h/4,t[1].y),o.lineTo(t[0].x+h/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.moveTo(t[3].x,t[3].y)),o.closePath(),o.fill(),o.stroke()})}),o.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:h,minRange:p,maxRange:d}}function bt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"straight",opacity:.2,addLine:!1,width:2},e.extra.area),l=[].concat(e.chartData.yAxisData.ranges),c=e.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,p=l.pop(),d=l.shift(),v=e.height-e.area[2],g=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),t.forEach(function(t,i){var l=t.data,c=tt(l,p,d,u,h,e,n,o);g.push(c);for(var y=j(c),_=function(n){var i=y[n];if(r.beginPath(),r.setStrokeStyle(a(t.color,s.opacity)),r.setFillStyle(a(t.color,s.opacity)),r.setLineWidth(s.width*e.pixelRatio),i.length>1){var o=i[0],l=i[i.length-1];r.moveTo(o.x,o.y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=f(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.lineTo(l.x,v),r.lineTo(o.x,v),r.lineTo(o.x,o.y)}else{var c=i[0];r.moveTo(c.x-h/2,c.y),r.lineTo(c.x+h/2,c.y),r.lineTo(c.x+h/2,v),r.lineTo(c.x-h/2,v),r.moveTo(c.x-h/2,c.y)}r.closePath(),r.fill(),s.addLine&&(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(s.width*e.pixelRatio),1===i.length?(r.moveTo(i[0].x,i[0].y),r.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(r.moveTo(i[0].x,i[0].y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=f(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.moveTo(i[0].x,i[0].y)),r.closePath(),r.stroke())},x=0;x<y.length;x++)_(x);if(!1!==e.dataPointShape){var m=n.dataPointShape[i%n.dataPointShape.length];st(c,t.color,m,r,e)}}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,i){var a=t.data,s=tt(a,p,d,u,h,e,n,o);ct(s,t,n,r)}),r.restore(),{xAxisPoints:u,calPoints:g,eachSpacing:h,minRange:p,maxRange:d}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.line||{type:"straight",width:2};o.type=o.type?o.type:"straight",o.width=o.width?o.width:2;var a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=a.pop(),h=a.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,d=tt(s,u,h,l,c,e,n,r);p.push(d);var v=j(d);if(v.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===o.type?n.forEach(function(t,e){if(e>0){var r=f(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var g=n.dataPointShape[a%n.dataPointShape.length];st(d,t.color,g,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=tt(a,u,h,l,c,e,n,r);ct(s,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:c,minRange:u,maxRange:h}}function At(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=o.pop(),h=o.shift(),p=e.height-e.area[2],d=[],v=0,g=0;if(t.forEach(function(t,e){"column"==t.type&&(g+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,o){var s=t.data,y=tt(s,u,h,l,c,e,n,r);if(d.push(y),"column"==t.type&&(y=J(y,c,g,v,n,e),y.forEach(function(n,r){if(null!==n){i.beginPath(),i.setStrokeStyle(n.color||t.color),i.setLineWidth(1),i.setFillStyle(n.color||t.color);var o=n.x-n.width/2;e.height,n.y,e.area[2];i.moveTo(o,n.y),i.moveTo(o-1,n.y),i.lineTo(o+n.width-2,n.y),i.lineTo(o+n.width-2,e.height-e.area[2]),i.lineTo(o,e.height-e.area[2]),i.lineTo(o,n.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}),v+=1),"area"==t.type)for(var _=j(y),x=function(n){var r=_[n];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(a(t.color,.2)),i.setLineWidth(2*e.pixelRatio),r.length>1){b=r[0];var o=r[r.length-1];i.moveTo(b.x,b.y),"curve"===t.style?r.forEach(function(t,e){if(e>0){var n=f(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(o.x,p),i.lineTo(b.x,p),i.lineTo(b.x,b.y)}else{var s=r[0];i.moveTo(s.x-c/2,s.y),i.lineTo(s.x+c/2,s.y),i.lineTo(s.x+c/2,p),i.lineTo(s.x-c/2,p),i.moveTo(s.x-c/2,s.y)}i.closePath(),i.fill()},m=0;m<_.length;m++){var b;x(m)}if("line"==t.type){var S=j(y);S.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=f(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type&&y.forEach(function(n,r){n&&(i.beginPath(),i.setFillStyle(t.color),i.setStrokeStyle("#FFFFFF"),i.setLineWidth(1*e.pixelRatio),i.moveTo(n.x+3.5*e.pixelRatio,n.y),i.arc(n.x,n.y,4*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke())}),1==t.addPoint&&"column"!==t.type){var A=n.dataPointShape[o%n.dataPointShape.length];st(y,t.color,A,i,e)}}),!1!==e.dataLabel&&1===r){v=0;t.forEach(function(t,o){var a=t.data,s=tt(a,u,h,l,c,e,n,r);"column"!==t.type?ct(s,t,n,i):(s=J(s,c,g,v,n,e),ct(s,t,n,i),v+=1)})}return i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:c,minRange:u,maxRange:h}}function wt(t,e,n,i,r,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&vt(t,e,n,r,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&yt(t.tooltip.textList,t.tooltip.offset,t,e,n,r,o),n.restore()}function Tt(t,e,n,i){var r=e.chartData.xAxisData,o=r.xAxisPoints,a=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],f=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var p=e.height-e.area[2]+n.xAxisHeight,d=s-a,v=l*(o.length-1),g=d*d/v,_=0;e._scrollDistance_&&(_=-e._scrollDistance_*d/v),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,p),i.lineTo(s,p),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+_,p),i.lineTo(a+_+g,p),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),"calibration"===e.xAxis.type?o.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+4*e.pixelRatio),i.closePath(),i.stroke())}):(e.xAxis.gridEval=e.xAxis.gridEval||1,o.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,f),i.stroke())})),i.setLineDash([])),!0!==e.xAxis.disabled){e.width,e.padding[1],e.padding[3],n.yAxisWidth,n.yAxisTitleWidth;var x=t.length;e.xAxis.labelCount&&(x=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,x-=1);for(var m=Math.ceil(t.length/x),b=[],S=t.length,A=0;A<S;A++)A%m!==0?b.push(""):b.push(t[A]);b[S-1]=t[S-1];var w=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,r){var a=-y(t,w)/2;"center"==c&&(a+=l/2),i.beginPath(),i.setFontSize(w),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,o[r]+a,u+w+(n.xAxisHeight-w)/2),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(w),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=y(t),s=-a;"center"==c&&(s+=l/2);var f=h(o[r]+l/2,u+w/2+5,e.height),p=f.transX,d=f.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(p,d),i.fillText(t,o[r]+s,u+w+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function Pt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],o=r/n.yAxisSplit,a=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=a+c,h=[],f=0;f<n.yAxisSplit+1;f++)h.push(e.height-e.area[2]-o*f);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){i.beginPath(),i.moveTo(a,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function kt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.chartData.yAxisData.rangesFormat,o=e.height-e.area[0]-e.area[2],a=Math.floor(o/n.yAxisSplit),s=e.area[3],l=e.width-e.area[1],c=e.height-e.area[2],u=c+n.xAxisHeight;e.xAxis.scrollShow&&(u-=3*e.pixelRatio),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,s,u),1==e.enableScroll&&i.fillRect(l,0,e.width,u),i.closePath(),i.stroke();for(var h=[],f=0;f<=n.yAxisSplit;f++)h.push(e.area[0]+a*f);var p=e.yAxis.fontSize||n.fontSize;r.forEach(function(t,r){var o=h[r]?h[r]:c;i.beginPath(),i.setFontSize(p),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(String(t),e.area[3]-n.yAxisWidth,o+p/2),i.closePath(),i.stroke()}),e.yAxis.title&&_t(e.yAxis.title,e,n,i)}}function Ot(t,e,n,i,r){if(!1!==e.legend.show){var o=r.legendData,a=o.points,s=o.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=e.legend.itemGap,p=Math.max(e.legend.lineHeight*e.pixelRatio,c);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),a.forEach(function(t,r){var a=0,d=0;a=o.widthArr[r],d=o.heightArr[r];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-a)/2,g=s.start.y+l+r*p):(a=0==r?0:o.widthArr[r-1],v=s.start.x+l+a,g=s.start.y+l+(s.height-d)/2),i.setFontSize(n.fontSize);for(var _=0;_<t.length;_++){var x=t[_];switch(x.area=[0,0,0,0],x.area[0]=v,x.area[1]=g,x.area[3]=g+p,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(x.show?x.color:e.legend.hiddenColor),i.setFillStyle(x.show?x.color:e.legend.hiddenColor),x.legendShape){case"line":i.moveTo(v,g+.5*p-2*e.pixelRatio),i.fillRect(v,g+.5*p-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"diamond":i.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*p),i.lineTo(v+7.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*p),i.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"circle":i.moveTo(v+7.5*e.pixelRatio,g+.5*p),i.arc(v+7.5*e.pixelRatio,g+.5*p,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(v,g+.5*p-5*e.pixelRatio),i.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(v,g+.5*p-5*e.pixelRatio),i.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),v+=u+h;var m=.5*p+.5*c-2;i.beginPath(),i.setFontSize(c),i.setFillStyle(x.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(x.name,v,g+m),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(x.name,c)+f,x.area[2]=v):(x.area[2]=v+y(x.name,c)+f,v-=u+h,g+=p)}})}}function Rt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=z(t,c,o);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,e.extra.pie.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h,0,2*Math.PI),r.closePath(),r.fill()}if(!1!==e.dataLabel&&1===o){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ft(t,e,n,r,c,l)}return 1===o&&"ring"===e.type&&lt(e,n,r,l),{center:l,radius:c,series:t}}function Dt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=U(t,s.type,u,c,o);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(a(t.color,s.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),!1!==e.dataLabel&&1===o){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ft(t,e,n,r,c,l)}return{center:l,radius:c,series:t}}function Et(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio},e.extra.arcbar);t=V(t,a,o);var s={x:e.width/2,y:e.height/2},l=Math.min(s.x,s.y);l-=5*e.pixelRatio,l-=a.width/2,r.setLineWidth(a.width),r.setStrokeStyle(a.backgroundColor||"#E9E9E9"),r.setLineCap("round"),r.beginPath(),"default"==a.type?r.arc(s.x,s.y,l,a.startAngle*Math.PI,a.endAngle*Math.PI,!1):r.arc(s.x,s.y,l,0,2*Math.PI,!1),r.stroke();for(var c=0;c<t.length;c++){var u=t[c];r.setLineWidth(a.width),r.setStrokeStyle(u.color),r.setLineCap("round"),r.beginPath(),r.arc(s.x,s.y,l,a.startAngle*Math.PI,u._proportion_*Math.PI,!1),r.stroke()}return lt(e,n,r,s),{center:s,radius:l,series:t}}function Mt(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==s.oldAngle&&(s.oldAngle=s.startAngle),void 0==s.oldData&&(s.oldData=0),t=q(t,s.startAngle,s.endAngle);var l={x:n.width/2,y:n.height/2},c=Math.min(l.x,l.y);c-=5*n.pixelRatio,c-=s.width/2;var u=c-s.width;o.setLineWidth(s.width),o.setLineCap("butt");for(var h=0;h<t.length;h++){var f=t[h];o.beginPath(),o.setStrokeStyle(f.color),o.arc(l.x,l.y,c,f._startAngle_*Math.PI,f._endAngle_*Math.PI,!1),o.stroke()}o.save();var p=s.startAngle-s.endAngle+1,d=p/s.splitLine.splitNumber,v=p/s.splitLine.splitNumber/s.splitLine.childNumber,g=-c-.5*s.width-s.splitLine.fixRadius,y=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.width,_=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.childWidth;o.translate(l.x,l.y),o.rotate((s.startAngle-1)*Math.PI);for(var x=0;x<s.splitLine.splitNumber+1;x++)o.beginPath(),o.setStrokeStyle(s.splitLine.color),o.setLineWidth(2*n.pixelRatio),o.moveTo(g,0),o.lineTo(y,0),o.stroke(),o.rotate(d*Math.PI);o.restore(),o.save(),o.translate(l.x,l.y),o.rotate((s.startAngle-1)*Math.PI);for(var m=0;m<s.splitLine.splitNumber*s.splitLine.childNumber+1;m++)o.beginPath(),o.setStrokeStyle(s.splitLine.color),o.setLineWidth(1*n.pixelRatio),o.moveTo(g,0),o.lineTo(_,0),o.stroke(),o.rotate(v*Math.PI);o.restore(),e=X(e,t,s,a);for(var b=0;b<e.length;b++){var S=e[b];o.save(),o.translate(l.x,l.y),o.rotate((S._proportion_-1)*Math.PI),o.beginPath(),o.setFillStyle(S.color),o.moveTo(s.pointer.width,0),o.lineTo(0,-s.pointer.width/2),o.lineTo(-u,0),o.lineTo(0,s.pointer.width/2),o.lineTo(s.pointer.width,0),o.closePath(),o.fill(),o.beginPath(),o.setFillStyle("#FFFFFF"),o.arc(0,0,s.pointer.width/6,0,2*Math.PI,!1),o.fill(),o.restore()}return!1!==n.dataLabel&&ut(s,c,l,n,r,o),lt(n,r,o,l),1===a&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:l,radius:c,innerRadius:u,categories:t,totalAngle:p}}function Ct(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2},e.extra.radar),l=A(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(S(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=p(u*Math.cos(t),u*Math.sin(t),c);r.moveTo(c.x,c.y),r.lineTo(e.x,e.y)}),r.stroke(),r.closePath();for(var h=function(t){var i={};r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(e,o){var a=p(u/n.radarGridCount*t*Math.cos(e),u/n.radarGridCount*t*Math.sin(e),c);0===o?(i=a,r.moveTo(a.x,a.y)):r.lineTo(a.x,a.y)}),r.lineTo(i.x,i.y),r.stroke(),r.closePath()},f=1;f<=n.radarGridCount;f++)h(f);var d=B(l,c,u,t,e,o);return d.forEach(function(t,i){if(r.beginPath(),r.setFillStyle(a(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?r.moveTo(t.position.x,t.position.y):r.lineTo(t.position.x,t.position.y)}),r.closePath(),r.fill(),!1!==e.dataPointShape){var o=n.dataPointShape[i%n.dataPointShape.length],l=t.data.map(function(t){return t.position});st(l,t.color,o,r,e)}}),ht(l,u,c,e,n,r),{center:c,radius:u,angleList:l}}function $t(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function Ft(t,e,n,i){for(var r=!1,o=0;o<e.length;o++)if(e[o].area){if(!(t[3]<e[o].area[1]||t[0]>e[o].area[2]||t[1]>e[o].area[3]||t[2]<e[o].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function Lt(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,o=0;o<r.length;o++){e=r[o],1==e.length&&(e=e[0]);for(var a=0;a<e.length;a++){var s=e[a][0],l=e[a][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function It(t,e,n,i,r,o){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+o}}function jt(t,e,n,i,r,o){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-o)/i}}function Ht(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function Nt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var o=0;o<r.length-1;o++){var a=r[o],s=r[o+1];Ht(t,a,s)&&(n+=1)}}return n%2==1}function Bt(t,e,n,r){var o,s,l=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=Lt(c),h=e.width/Math.abs(u.xMax-u.xMin),f=e.height/Math.abs(u.yMax-u.yMin),p=h<f?h:f,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*p,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*p;r.beginPath(),r.clearRect(0,0,e.width,e.height),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill();for(var g=0;g<c.length;g++){r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.setStrokeStyle(l.borderColor),r.setFillStyle(a(t[g].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(r.setStrokeStyle(l.activeBorderColor),r.setFillStyle(a(l.activeFillColor,l.activeFillOpacity)));for(var _=c[g].geometry.coordinates,x=0;x<_.length;x++){o=_[x],1==o.length&&(o=o[0]);for(var m=0;m<o.length;m++)s=It(o[m][1],o[m][0],u,p,d,v),0===m?(r.beginPath(),r.moveTo(s.x,s.y)):r.lineTo(s.x,s.y);r.fill(),1==l.border&&r.stroke()}if(1==e.dataLabel){var b=c[g].properties.centroid;if(b){s=It(b[1],b[0],u,p,d,v);var S=c[g].textSize||n.fontSize,A=c[g].properties.name;r.beginPath(),r.setFontSize(S),r.setFillStyle(c[g].textColor||"#666666"),r.fillText(A,s.x-y(A,S)/2,s.y+S/2),r.closePath(),r.stroke()}}}e.chartData.mapData={bounds:u,scale:p,xoffset:d,yoffset:v},wt(e,n,r,1),r.draw()}function zt(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,o=n[i].textSize,a=y(r,o),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=$t(-t.width/2,t.width/2,5)-a/2,l=$t(-t.height/2,t.height/2,5)+o/2,c=[s-5+t.width/2,l-5-o+t.height/2,s+a+5+t.width/2,l+5+t.height/2];var h=Ft(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[i].area=c}break;case"vertical":for(var f=function(){return Math.random()>.7},p=0;p<n.length;p++){var d=n[p].name,v=n[p].textSize,g=y(d,v),_=f(),x=void 0,m=void 0,b=void 0,S=void 0,A=0;while(1){A++;var w=void 0;if(_?(x=$t(-t.width/2,t.width/2,5)-g/2,m=$t(-t.height/2,t.height/2,5)+v/2,b=[m-5-g+t.width/2,-x-5+t.height/2,m+5+t.width/2,-x+v+5+t.height/2],S=[t.width-(t.width/2-t.height/2)-(-x+v+5+t.height/2)-5,t.height/2-t.width/2+(m-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-x+v+5+t.height/2)+v,t.height/2-t.width/2+(m-5-g+t.width/2)+g+5],w=Ft(S,n,t.height,t.width)):(x=$t(-t.width/2,t.width/2,5)-g/2,m=$t(-t.height/2,t.height/2,5)+v/2,b=[x-5+t.width/2,m-5-v+t.height/2,x+g+5+t.width/2,m+5+t.height/2],w=Ft(b,n,t.width,t.height)),!w)break;if(1e3==A){b=[-1e3,-1e3,-1e3,-1e3];break}}_?(n[p].area=S,n[p].areav=b):n[p].area=b,n[p].rotate=_}break}return n}function Wt(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},e.extra.word);r.beginPath(),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill(),r.save();var a=e.chartData.wordCloudData;r.translate(e.width/2,e.height/2);for(var s=0;s<a.length;s++){r.save(),a[s].rotate&&r.rotate(90*Math.PI/180);var l=a[s].name,c=a[s].textSize,u=y(l,c);r.beginPath(),r.setStrokeStyle(a[s].color),r.setFillStyle(a[s].color),r.setFontSize(c),a[s].rotate?a[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].areav[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].areav[1]+5+c-e.height/2)*o)):a[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o):r.fillText(l,(a[s].area[0]+5-e.width/2)*o-u*(1-o)/2,(a[s].area[1]+5+c-e.height/2)*o)),r.stroke(),r.restore()}r.restore()}function Ut(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=W(t,h,o),r.save(),r.translate(c.x,c.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(a(t[f].color,s.activeOpacity)),r.moveTo(-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(u,0),r.lineTo(-u,0),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l,c.x+t[f].radius,c.y],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()):(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(a(t[f].color,s.activeOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(t[f-1].radius+u,0),r.lineTo(0,0),r.closePath(),r.fill(),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l*(f+1),c.x+t[f].radius,c.y-l*f],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(a(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(t[f-1].radius,0),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()),r.translate(0,-l);return r.restore(),!1!==e.dataLabel&&1===o&&Vt(t,e,r,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Vt(t,e,n,i,r,a,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,f=void 0,p=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):o.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*a,f=c.funnelArea[1]+i/2,p=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h+5,f+p/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*a,f=c.funnelArea[1]+i/2,p=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h-5-y(d),f+p/2-2),n.closePath(),n.stroke(),n.closePath())}}function qt(t,e){e.draw()}var Xt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Gt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var a=(n-r)/t.duration,s=Xt[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),i(o,e)}function Jt(t,e,n,r){var o=this,a=e.series,s=e.categories;a=v(a,e,n);var c=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var h=i({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,a[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):a}else u=a;e._series_=a=k(a),e.area=new Array(4);for(var f=0;f<4;f++)e.area[f]=e.padding[f];var p=H(u,e,n,e.chartData),d=p.area.wholeHeight,g=p.area.wholeWidth;switch(n.legendHeight=d,e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},_=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type?(y=it(a,e,n),_=y.yAxisWidth,n.yAxisWidth=_,e.area[3]+=_):n.yAxisWidth=_,e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=Z(e.categories,e,n);var x=N(e.categories,e,n,e.chartData.xAxisData.eachSpacing),m=x.xAxisHeight,b=x.angle;n.xAxisHeight=m,n._xAxisTextAngle_=b,e.area[2]+=m,e.chartData.categoriesData=x}if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var S=0,A=e.chartData.xAxisData.xAxisPoints,w=e.chartData.xAxisData.startX,T=e.chartData.xAxisData.endX,P=e.chartData.xAxisData.eachSpacing,O=P*(A.length-1),R=T-w;S=R-O,o.scrollOption={currentOffset:S,startTouchX:S,distance:0,lastMoveTime:0},e._scrollDistance_=S}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:G(u)),t){case"word":var D=i({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=zt(e,D.type)),this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Wt(a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"map":r.clearRect(0,0,e.width,e.height),Bt(a,e,n,r);break;case"funnel":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.funnelData=Ut(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=St(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=At(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=xt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=bt(a,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(u,h,e,n,r),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=Rt(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.pieData=Dt(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.radarData=Ct(a,e,n,r,t),Ot(e.series,e,n,r,e.chartData),wt(e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.arcbarData=Et(a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Gt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),e.chartData.gaugeData=Mt(s,a,e,n,r,t),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Gt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&at(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=mt(a,u,e,n,r,t),o=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,h=i.minRange,f=i.maxRange;e.chartData.xAxisPoints=o,e.chartData.calPoints=l,e.chartData.eachSpacing=c,kt(a,e,n,r),!1!==e.enableMarkLine&&1===t&&dt(h,f,e,n,r),Ot(u||e.series,e,n,r,e.chartData),wt(e,n,r,t,c,o),qt(e,r)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function Yt(){this.events={}}Gt.prototype.stop=function(){this.isStop=!0},Yt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Yt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],o=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,o)}catch(n){console.error(e(n," at components\\u-charts\\u-charts.js:4518"))}})};var Kt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=i({},t.title),t.subtitle=i({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=i({},{gridType:"solid",dashLength:4*t.pixelRatio},t.yAxis),t.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4*t.pixelRatio,scrollAlign:"left",boundaryGap:"center"},t.xAxis),t.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=i({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation;var e=JSON.parse(JSON.stringify(r));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:r.yAxisSplit,e.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=r.yAxisWidth*t.pixelRatio,e.xAxisHeight=r.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=r.xAxisLineHeight*t.pixelRatio,e.legendHeight=r.legendHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=r.titleFontSize*t.pixelRatio,e.subtitleFontSize=r.subtitleFontSize*t.pixelRatio,e.toolTipPadding=r.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=r.toolTipLineHeight*t.pixelRatio,e.columePadding=r.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Yt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Jt.call(this,t.type,t,e,this.context)};Kt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=it(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=Z(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*(s.length-1),f=c-l;o=f-h,this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o;break}Jt.call(this,this.opts.type,this.opts,this.config,this.context)},Kt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=it(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=Z(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*n,f=c-l,p=f-u*(s.length-1);o=f/2-h,o>0&&(o=0),o<p&&(o=p),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Jt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:4679"))},Kt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Kt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Kt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?M({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?C({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:n.x,y:n.y},this.opts):"word"===this.opts.type?$({x:n.x,y:n.y},this.opts.chartData.wordCloudData):O({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Kt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return R({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Kt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){m(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,Jt.call(this,this.opts.type,this.opts,this.config,this.context))}},Kt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null;r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r||console.log(e("touchError"," at components\\u-charts\\u-charts.js:4815"));var o=m(r,this.opts,t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=w(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,f=u.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var p=T(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=p.textList,f=p.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,f=u.offset;f.y=o.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}Jt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}s.updateData=!1,Jt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),f={x:o.x,y:o.y};s.tooltip={textList:h,offset:f,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}},Kt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=i({},this.opts,{_scrollDistance_:t,animation:!1});Jt.call(this,this.opts.type,e,this.config,this.context)},Kt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=m(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Kt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),r=n-this.scrollOption.lastMoveTime;if(!(r<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var o=null;if(o=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],o&&!0===this.opts.enableScroll){var a,s=m(o,this.opts,t);a=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(l+a,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=a=u-l;var h=i({},this.opts,{_scrollDistance_:l+a,animation:!1});return Jt.call(this,h.type,h,this.config,this.context),l+a}}},Kt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Kt)}).call(this,n("0de9")["default"],n("6e42")["default"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=we,e.createPage=Ae,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function x(t,e){return v.call(t,e)}function m(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,A=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function R(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&g(e[n])&&(t[n]=k(t[n],e[n]))})}function E(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&g(e[n])&&R(t[n],e[n])})}function M(t,e){"string"===typeof t&&_(e)?D(P[t]||(P[t]={}),e):_(t)&&D(T,t)}function C(t,e){"string"===typeof t?_(e)?E(P[t],e):delete P[t]:_(t)&&E(T,t)}function $(t){return function(e){return t(e)||e}}function F(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function L(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then($(r));else{var o=r(e);if(F(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){L(t[n],e).then(function(t){return g(i)&&i(t)||t})}}}),e}function j(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,u(T.returnValue));var i=P[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function H(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=P[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=H(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=L(a.invoke,n);return s.then(function(t){return e.apply(void 0,[I(a,t)].concat(r))})}return e.apply(void 0,[I(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var B={returnValue:function(t){return F(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},z=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,U=/^on/;function V(t){return W.test(t)}function q(t){return z.test(t)}function X(t){return U.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||q(t)||X(t))}function Y(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?j(t,N.apply(void 0,[t,e,n].concat(r))):j(t,G(new Promise(function(i,o){N.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:B},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:M,removeInterceptor:C}),at={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(ft(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var o=!0===r?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(x(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:_(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ut(t,e[a],i):r||(o[a]=e[a]);return o}return g(e)&&(e=ut(t,e,i)),e}function ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function pt(t,e){if(x(at,t)){var n=at[t];return n?function(e,i){var r=n;g(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return q(t)?ft(t,a,r.returnValue,V(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(i)&&i(r)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function xt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function mt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var At=Object.freeze({$on:xt,$off:mt,$once:bt,$emit:St});function wt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;wt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({getSubNVueById:Pt,requireNativePlugin:wt}),Ot=Page,Rt=Component,Dt=/:/g,Et=b(function(t){return A(t.replace(Dt,"-"))});function Mt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Et(n)].concat(r))}}}function Ct(t,e){var n=e[t];e[t]=n?function(){Mt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Mt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),Rt(t)};var $t=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){x(n,e)&&(t[e]=n[e])})}function Lt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Lt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Lt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function jt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ht(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return _(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||x(n,t)||(n[t]=i[t])}),n}var zt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(i)&&i.props&&a.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){_(t)&&t.props&&a.push(e({properties:qt(t.props,!0)}))}),a}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Wt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(_(i)){var r=i["default"];g(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==zt.indexOf(i.type)?i.type:null,value:r,observer:Wt(e)}}else{var o=Vt(e,i);n[e]={type:-1!==zt.indexOf(o)?o:null,observer:Wt(e)}}}),n}function Xt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=m,t.preventDefault=m,t.target=t.target||{},x(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Gt(t,e)}),i}function Yt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Yt(t)):"string"===typeof t&&x(s,t)?l.push(s[t]):l.push(t)}),l}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Xt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var l=i.charAt(0)===Zt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var a=r[i];if(!g(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,Kt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Ft(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},It(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ce})}var fe=["onUniNViewMessage"];function pe(t){var e=he(t);return It(e,fe),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=jt(i.default,t),s=o(a,2),l=s[0],c=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Bt(c,i.default.prototype),behaviors:Ut(c,ae),properties:qt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Ht(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),n?u:[u,l]}function ge(t){return ve(t,{isPage:se,initRelation:le})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function xe(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function me(t){return xe(t,{isPage:se,initRelation:le})}_e.push.apply(_e,$t);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=me(t);return It(e.methods,be),e}function Ae(t){return Component(Se(t))}function we(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Te={};Object.keys(ot).forEach(function(t){Te[t]=ot[t]}),Object.keys(At).forEach(function(t){Te[t]=At[t]}),Object.keys(kt).forEach(function(t){Te[t]=Y(t,kt[t])}),Object.keys(wx).forEach(function(t){(x(wx,t)||x(at,t))&&(Te[t]=Y(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=At),wx.createApp=de,wx.createPage=Ae,wx.createComponent=we;var Pe=Te,ke=Pe;e.default=ke}).call(this,n("c8ba"))},"7e5f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("66fd")),r=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var a=new r.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(t,e){t.userName=e||"新用户",t.hasLogin=!0},logout:function(t){t.userName="",t.hasLogin=!1}}}),s=a;e.default=s},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",_="__DC_UUID_VALUE";function x(){var e="";if("n"===A()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,_)}}return e}var m=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var o in n)i[n[o]]=t[n[o]],r+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==A()&&"qq"!==A()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===A()?plus.runtime.version:""},P=function(){var t=A(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=A(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},O="First__Visit__Time",R="Last__Visit__Time",D=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=S(),t.setStorageSync(O,n),t.removeStorageSync(R)),n},E=function(){var e=t.getStorageSync(R),n=0;return n=e||"",t.setStorageSync(R,S()),n},M="__page__residence__time",C=0,$=0,F=function(){return C=S(),"n"===A()&&t.setStorageSync(M,S()),C},L=function(){return $=S(),"n"===A()&&(C=t.getStorageSync(M)),$-C},I="Total__Visit__Count",j=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},H=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,B=0,z=function(){var t=(new Date).getTime();return N=t,B=0,t},W=function(){var t=(new Date).getTime();return B=t,t},U=function(t){var e=0;if(0!==N&&(e=B-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===A()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===A()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},X=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("4dcb").default,Y=n("5a5e").default||n("5a5e"),K=t.getSystemInfoSync(),Z=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:A(),mpn:w(),ak:Y.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){W();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,W();var n=U();z();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return z(),this.__licationShow=!1,void(this._lastPageRoute=t);W(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}z()}},{key:"_pageHide",value:function(){if(!this.__licationHide){W();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=k(t.scene),this.statData.fvts=D(),this.statData.lvts=E(),this.statData.tvc=j(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=S(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===A()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===A()&&t.setStorageSync("__UNI__STAT__DATA",a),!(L()<g)||n){var s=this._reportingRequestData;"n"===A()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var l=[],c=[],u=[],f=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var p in s)f(p);l.push.apply(l,c.concat(u));var d={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===A()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=m(H(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return l(this,n),e=i(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,X(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,X(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return i.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=n(o(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),r="/"===a(t,-1);return t=n(o(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&r&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),o=i(n.split("/")),a=Math.min(r.length,o.length),s=a,l=0;l<a;l++)if(r[l]!==o[l]){s=l;break}var c=[];for(l=s;l<r.length;l++)c.push("..");return c=c.concat(o.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),n=e[0],i=e[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},e.basename=function(t,e){var n=r(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return r(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},f888:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var i,r,o=0,a=t.length,s=this.blocks,l=this.buffer8;while(o<a){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),e)if(ARRAY_BUFFER)for(r=this.start;o<a&&r<64;++o)l[r++]=t[o];else for(r=this.start;o<a&&r<64;++o)s[r>>2]|=t[o]<<SHIFT[3&r++];else if(ARRAY_BUFFER)for(r=this.start;o<a&&r<64;++o)i=t.charCodeAt(o),i<128?l[r++]=i:i<2048?(l[r++]=192|i>>6,l[r++]=128|63&i):i<55296||i>=57344?(l[r++]=224|i>>12,l[r++]=128|i>>6&63,l[r++]=128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++o)),l[r++]=240|i>>18,l[r++]=128|i>>12&63,l[r++]=128|i>>6&63,l[r++]=128|63&i);else for(r=this.start;o<a&&r<64;++o)i=t.charCodeAt(o),i<128?s[r>>2]|=i<<SHIFT[3&r++]:i<2048?(s[r>>2]|=(192|i>>6)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]):i<55296||i>=57344?(s[r>>2]|=(224|i>>12)<<SHIFT[3&r++],s[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++o)),s[r>>2]|=(240|i>>18)<<SHIFT[3&r++],s[r>>2]|=(128|i>>12&63)<<SHIFT[3&r++],s[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],s[r>>2]|=(128|63&i)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,i,r,o,a=this.blocks;this.first?(t=a[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,i=(-1732584194^2004318071&t)+a[1]-117830708,i=(i<<12|i>>>20)+t<<0,n=(-271733879^i&(-271733879^t))+a[2]-1126478375,n=(n<<17|n>>>15)+i<<0,e=(t^n&(i^t))+a[3]-1316259209,e=(e<<22|e>>>10)+n<<0):(t=this.h0,e=this.h1,n=this.h2,i=this.h3,t+=(i^e&(n^i))+a[0]-680876936,t=(t<<7|t>>>25)+e<<0,i+=(n^t&(e^n))+a[1]-389564586,i=(i<<12|i>>>20)+t<<0,n+=(e^i&(t^e))+a[2]+606105819,n=(n<<17|n>>>15)+i<<0,e+=(t^n&(i^t))+a[3]-1044525330,e=(e<<22|e>>>10)+n<<0),t+=(i^e&(n^i))+a[4]-176418897,t=(t<<7|t>>>25)+e<<0,i+=(n^t&(e^n))+a[5]+1200080426,i=(i<<12|i>>>20)+t<<0,n+=(e^i&(t^e))+a[6]-1473231341,n=(n<<17|n>>>15)+i<<0,e+=(t^n&(i^t))+a[7]-45705983,e=(e<<22|e>>>10)+n<<0,t+=(i^e&(n^i))+a[8]+1770035416,t=(t<<7|t>>>25)+e<<0,i+=(n^t&(e^n))+a[9]-1958414417,i=(i<<12|i>>>20)+t<<0,n+=(e^i&(t^e))+a[10]-42063,n=(n<<17|n>>>15)+i<<0,e+=(t^n&(i^t))+a[11]-1990404162,e=(e<<22|e>>>10)+n<<0,t+=(i^e&(n^i))+a[12]+1804603682,t=(t<<7|t>>>25)+e<<0,i+=(n^t&(e^n))+a[13]-40341101,i=(i<<12|i>>>20)+t<<0,n+=(e^i&(t^e))+a[14]-1502002290,n=(n<<17|n>>>15)+i<<0,e+=(t^n&(i^t))+a[15]+1236535329,e=(e<<22|e>>>10)+n<<0,t+=(n^i&(e^n))+a[1]-165796510,t=(t<<5|t>>>27)+e<<0,i+=(e^n&(t^e))+a[6]-1069501632,i=(i<<9|i>>>23)+t<<0,n+=(t^e&(i^t))+a[11]+643717713,n=(n<<14|n>>>18)+i<<0,e+=(i^t&(n^i))+a[0]-373897302,e=(e<<20|e>>>12)+n<<0,t+=(n^i&(e^n))+a[5]-701558691,t=(t<<5|t>>>27)+e<<0,i+=(e^n&(t^e))+a[10]+38016083,i=(i<<9|i>>>23)+t<<0,n+=(t^e&(i^t))+a[15]-660478335,n=(n<<14|n>>>18)+i<<0,e+=(i^t&(n^i))+a[4]-405537848,e=(e<<20|e>>>12)+n<<0,t+=(n^i&(e^n))+a[9]+568446438,t=(t<<5|t>>>27)+e<<0,i+=(e^n&(t^e))+a[14]-1019803690,i=(i<<9|i>>>23)+t<<0,n+=(t^e&(i^t))+a[3]-187363961,n=(n<<14|n>>>18)+i<<0,e+=(i^t&(n^i))+a[8]+1163531501,e=(e<<20|e>>>12)+n<<0,t+=(n^i&(e^n))+a[13]-1444681467,t=(t<<5|t>>>27)+e<<0,i+=(e^n&(t^e))+a[2]-51403784,i=(i<<9|i>>>23)+t<<0,n+=(t^e&(i^t))+a[7]+1735328473,n=(n<<14|n>>>18)+i<<0,e+=(i^t&(n^i))+a[12]-1926607734,e=(e<<20|e>>>12)+n<<0,r=e^n,t+=(r^i)+a[5]-378558,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[8]-2022574463,i=(i<<11|i>>>21)+t<<0,o=i^t,n+=(o^e)+a[11]+1839030562,n=(n<<16|n>>>16)+i<<0,e+=(o^n)+a[14]-35309556,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^i)+a[1]-1530992060,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[4]+1272893353,i=(i<<11|i>>>21)+t<<0,o=i^t,n+=(o^e)+a[7]-155497632,n=(n<<16|n>>>16)+i<<0,e+=(o^n)+a[10]-1094730640,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^i)+a[13]+681279174,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[0]-358537222,i=(i<<11|i>>>21)+t<<0,o=i^t,n+=(o^e)+a[3]-722521979,n=(n<<16|n>>>16)+i<<0,e+=(o^n)+a[6]+76029189,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^i)+a[9]-640364487,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[12]-421815835,i=(i<<11|i>>>21)+t<<0,o=i^t,n+=(o^e)+a[15]+530742520,n=(n<<16|n>>>16)+i<<0,e+=(o^n)+a[2]-995338651,e=(e<<23|e>>>9)+n<<0,t+=(n^(e|~i))+a[0]-198630844,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~n))+a[7]+1126891415,i=(i<<10|i>>>22)+t<<0,n+=(t^(i|~e))+a[14]-1416354905,n=(n<<15|n>>>17)+i<<0,e+=(i^(n|~t))+a[5]-57434055,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~i))+a[12]+1700485571,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~n))+a[3]-1894986606,i=(i<<10|i>>>22)+t<<0,n+=(t^(i|~e))+a[10]-1051523,n=(n<<15|n>>>17)+i<<0,e+=(i^(n|~t))+a[1]-2054922799,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~i))+a[8]+1873313359,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~n))+a[15]-30611744,i=(i<<10|i>>>22)+t<<0,n+=(t^(i|~e))+a[6]-1560198380,n=(n<<15|n>>>17)+i<<0,e+=(i^(n|~t))+a[13]+1309151649,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~i))+a[4]-145523070,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~n))+a[11]-1120210379,i=(i<<10|i>>>22)+t<<0,n+=(t^(i|~e))+a[2]+718787259,n=(n<<15|n>>>17)+i<<0,e+=(i^(n|~t))+a[9]-343485551,e=(e<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+i<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,i=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,i="",r=this.array(),o=0;o<15;)t=r[o++],e=r[o++],n=r[o++],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=r[o],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",i};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "6b2d": function b2d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("fb50"),
        r = e("e370");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("b960");
    var o = e("2877"),
        c = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  b960: function b960(t, n, e) {
    "use strict";

    var u = e("d9f4"),
        r = e.n(u);
    r.a;
  },
  d9f4: function d9f4(t, n, e) {},
  e370: function e370(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e592"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = r.a;
  },
  e592: function e592(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  fb50: function fb50(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6b2d"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  6661: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "6b2d"));
    },
        i = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.$emit("input", "");
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = i;
  },
  7234: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "8be7": function be7(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6661"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  "902f": function f(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("7234"),
        i = e("8be7");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("eefb");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "94ad": function ad(t, n, e) {},
  eefb: function eefb(t, n, e) {
    "use strict";

    var u = e("94ad"),
        i = e.n(u);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("902f"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'components/t-table/t-table';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/t-table/t-table.js';

define('components/t-table/t-table.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/t-table/t-table"], {
  "7be6": function be6(e, t, n) {
    "use strict";

    n.r(t);
    var c = n("fcd2"),
        a = n("e565");

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    n("becf");
    var o = n("2877"),
        u = Object(o["a"])(a["default"], c["a"], c["b"], !1, null, "23b47817", null);
    t["default"] = u.exports;
  },
  becf: function becf(e, t, n) {
    "use strict";

    var c = n("db6b"),
        a = n.n(c);
    a.a;
  },
  da87: function da87(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        props: {
          border: {
            type: String,
            default: "1"
          },
          borderColor: {
            type: String,
            default: "#d0dee5"
          },
          isCheck: {
            type: Boolean,
            default: !1
          }
        },
        provide: function provide() {
          return {
            table: this
          };
        },
        data: function data() {
          return {};
        },
        created: function created() {
          this.childrens = [], this.index = 0;
        },
        methods: {
          fire: function fire(t, n, c) {
            var a = this.childrens;
            if (console.log(e(a, " at components\\t-table\\t-table.vue:38")), 0 === n) a.map(function (e, n) {
              return e.checkboxData.checked = t, e;
            });else {
              var r = a.find(function (e, t) {
                return 0 !== t && !e.checkboxData.checked;
              });
              a[0].checkboxData.checked = !r;
            }

            for (var o = [], u = 0; u < a.length; u++) {
              a[u].checkboxData.checked && 0 !== u && o.push(a[u].checkboxData.value - 1);
            }

            this.$emit("change", {
              detail: o
            });
          }
        }
      };
      t.default = n;
    }).call(this, n("0de9")["default"]);
  },
  db6b: function db6b(e, t, n) {},
  e565: function e565(e, t, n) {
    "use strict";

    n.r(t);
    var c = n("da87"),
        a = n.n(c);

    for (var r in c) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return c[e];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  fcd2: function fcd2(e, t, n) {
    "use strict";

    var c = function c() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return c;
    }), n.d(t, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/t-table/t-table-create-component', {
  'components/t-table/t-table-create-component': function componentsTTableTTableCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7be6"));
  }
}, [['components/t-table/t-table-create-component']]]);
});
require('components/t-table/t-table.js');
__wxRoute = 'components/t-table/t-td';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/t-table/t-td.js';

define('components/t-table/t-td.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/t-table/t-td"], {
  "2e6f": function e6f(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = {
      props: {
        align: String
      },
      data: function data() {
        return {
          thBorder: "1",
          borderColor: "#d0dee5",
          fontSize: "14",
          color: "#555c60",
          tdAlign: "center"
        };
      },
      inject: ["table", "tr"],
      created: function created() {
        this.thBorder = this.table.border, this.borderColor = this.table.borderColor, this.fontSize = this.tr.fontSize, this.color = this.tr.color, this.align ? this.tdAlign = this.align : this.tdAlign = this.tr.align;
      },
      computed: {
        tdAlignCpd: function tdAlignCpd() {
          var t = "";

          switch (this.tdAlign) {
            case "left":
              t = "flex-start";
              break;

            case "center":
              t = "center";
              break;

            case "right":
              t = "flex-end";
              break;

            default:
              t = "center";
              break;
          }

          return t;
        }
      }
    };
    e.default = r;
  },
  "2f9f": function f9f(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "33b9": function b9(t, e, n) {
    "use strict";

    var r = n("4e5b"),
        i = n.n(r);
    i.a;
  },
  "4e5b": function e5b(t, e, n) {},
  c287: function c287(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("2e6f"),
        i = n.n(r);

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    e["default"] = i.a;
  },
  f816: function f816(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("2f9f"),
        i = n("c287");

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    n("33b9");
    var a = n("2877"),
        c = Object(a["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/t-table/t-td-create-component', {
  'components/t-table/t-td-create-component': function componentsTTableTTdCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f816"));
  }
}, [['components/t-table/t-td-create-component']]]);
});
require('components/t-table/t-td.js');
__wxRoute = 'components/t-table/t-th';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/t-table/t-th.js';

define('components/t-table/t-th.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/t-table/t-th"], {
  "1c2f": function c2f(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = {
      props: {
        align: String
      },
      data: function data() {
        return {
          thBorder: "1",
          borderColor: "#d0dee5",
          fontSize: "15",
          color: "#3b4246",
          thAlign: "center"
        };
      },
      inject: ["table", "tr"],
      created: function created() {
        this.thBorder = this.table.border, this.borderColor = this.table.borderColor, this.fontSize = this.tr.fontSize, this.color = this.tr.color, this.align ? this.thAlign = this.align : this.thAlign = this.tr.align;
      },
      computed: {
        thAlignCpd: function thAlignCpd() {
          var t = "";

          switch (this.thAlign) {
            case "left":
              t = "flex-start";
              break;

            case "center":
              t = "center";
              break;

            case "right":
              t = "flex-end";
              break;

            default:
              t = "center";
              break;
          }

          return t;
        }
      }
    };
    e.default = r;
  },
  "49cb": function cb(t, e, n) {},
  "4cbf": function cbf(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("1c2f"),
        i = n.n(r);

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    e["default"] = i.a;
  },
  "72c5": function c5(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("c180"),
        i = n("4cbf");

    for (var c in i) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(c);
    }

    n("bb74");
    var o = n("2877"),
        a = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  bb74: function bb74(t, e, n) {
    "use strict";

    var r = n("49cb"),
        i = n.n(r);
    i.a;
  },
  c180: function c180(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/t-table/t-th-create-component', {
  'components/t-table/t-th-create-component': function componentsTTableTThCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("72c5"));
  }
}, [['components/t-table/t-th-create-component']]]);
});
require('components/t-table/t-th.js');
__wxRoute = 'components/t-table/t-tr';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/t-table/t-tr.js';

define('components/t-table/t-tr.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/t-table/t-tr"], {
  "08b0": function b0(t, e, c) {},
  2958: function _(t, e, c) {
    "use strict";

    c.r(e);
    var n = c("8cd9"),
        a = c("9cdc");

    for (var i in a) {
      "default" !== i && function (t) {
        c.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    c("57b4");
    var r = c("2877"),
        o = Object(r["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = o.exports;
  },
  "57b4": function b4(t, e, c) {
    "use strict";

    var n = c("08b0"),
        a = c.n(n);
    a.a;
  },
  "8cd9": function cd9(t, e, c) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    c.d(e, "a", function () {
      return n;
    }), c.d(e, "b", function () {
      return a;
    });
  },
  "9cdc": function cdc(t, e, c) {
    "use strict";

    c.r(e);
    var n = c("a20e"),
        a = c.n(n);

    for (var i in n) {
      "default" !== i && function (t) {
        c.d(e, t, function () {
          return n[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  a20e: function a20e(t, e, c) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = {
      props: {
        fontSize: String,
        color: String,
        align: String
      },
      inject: ["table"],
      provide: function provide() {
        return {
          tr: this
        };
      },
      data: function data() {
        return {
          isCheck: !1,
          checkboxData: {
            value: 0,
            checked: !1
          },
          checked: !1,
          thBorder: "1",
          borderColor: "#d0dee5"
        };
      },
      created: function created() {
        this.thBorder = this.table.border, this.borderColor = this.table.borderColor, this.table.childrens.push(this), this.checkboxData.value = this.table.index++, this.isCheck = this.table.isCheck;
      },
      methods: {
        checkboxChange: function checkboxChange(t) {
          this.checkboxData.checked = !this.checkboxData.checked, this.table.childrens[this.checkboxData.value] = this, this.table.fire(!!t.detail.value[0], this.checkboxData.value, this.table.index);
        }
      }
    };
    e.default = n;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/t-table/t-tr-create-component', {
  'components/t-table/t-tr-create-component': function componentsTTableTTrCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2958"));
  }
}, [['components/t-table/t-tr-create-component']]]);
});
require('components/t-table/t-tr.js');
__wxRoute = 'components/uni-segmented-control/uni-segmented-control';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-segmented-control/uni-segmented-control.js';

define('components/uni-segmented-control/uni-segmented-control.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-segmented-control/uni-segmented-control"], {
  "3bc2": function bc2(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "58c3": function c3(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      name: "UniSegmentedControl",
      props: {
        current: {
          type: Number,
          default: 0
        },
        values: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        activeColor: {
          type: String,
          default: "#007aff"
        },
        styleType: {
          type: String,
          default: "button"
        }
      },
      data: function data() {
        return {
          currentIndex: 0
        };
      },
      watch: {
        current: function current(t) {
          t !== this.currentIndex && (this.currentIndex = t);
        }
      },
      created: function created() {
        this.currentIndex = this.current;
      },
      methods: {
        _onClick: function _onClick(t) {
          this.currentIndex !== t && (this.currentIndex = t, this.$emit("clickItem", t));
        }
      }
    };
    n.default = r;
  },
  6784: function _(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("3bc2"),
        u = e("ab79");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("c32f");
    var a = e("2877"),
        i = Object(a["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  a42d: function a42d(t, n, e) {},
  ab79: function ab79(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("58c3"),
        u = e.n(r);

    for (var c in r) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  c32f: function c32f(t, n, e) {
    "use strict";

    var r = e("a42d"),
        u = e.n(r);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-segmented-control/uni-segmented-control-create-component', {
  'components/uni-segmented-control/uni-segmented-control-create-component': function componentsUniSegmentedControlUniSegmentedControlCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6784"));
  }
}, [['components/uni-segmented-control/uni-segmented-control-create-component']]]);
});
require('components/uni-segmented-control/uni-segmented-control.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0c4c":function(n,t,o){"use strict";o.r(t);var e=o("9bb4"),i=o("fc6f");for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);o("72d9");var s=o("2877"),c=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=c.exports},3712:function(n,t,o){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(o("494c"));function i(n){return n&&n.__esModule?n:{default:n}}var a=function(){return o.e("components/m-input").then(o.bind(null,"902f"))},s={components:{mInput:a},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},onLoad:function(){var t=this;n.showLoading({title:"正在启动..."}),n.getStorage({key:"tuser_id",success:function(n){t.toMain()},fail:function(){n.showToast({icon:"none",title:"登录失效，请重登",duration:5e3})},complete:function(){n.hideLoading()}})},methods:{initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){var t=this;if(this.account.length<11)n.showToast({icon:"none",title:"账号最短为 11 个字符"});else if(this.password.length<6)n.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password.length>16)n.showToast({icon:"none",title:"密码最长为 16 个字符"});else{var o={account:this.account,password:this.password};n.request({url:"https://ygjs.mfmeat.top/index.php/api/login/login_jld",data:{account:o.account,password:o.password},method:"POST",dataType:"json",success:function(o){1==o.data.code?(n.setStorageSync("tuser_id",o.data.id),n.setStorageSync("tuser",o.data),t.toMain(o.data.username)):n.showToast({icon:"none",title:"用户账号或密码不正确"})},fail:function(){n.showToast({icon:"none",title:"登录失败"})}})}},oauth:function(t){var o=this;n.login({provider:t,success:function(e){n.getUserInfo({provider:t,success:function(n){o.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(e("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:146"))}})},toMain:function(t){n.reLaunch({url:"../main/main"})}},onReady:function(){this.initPosition()}};t.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},"6b39":function(n,t,o){"use strict";(function(n){o("1cbe"),o("921b");e(o("66fd"));var t=e(o("0c4c"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("6e42")["createPage"])},"72d9":function(n,t,o){"use strict";var e=o("7f42"),i=o.n(e);i.a},"7f42":function(n,t,o){},"9bb4":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})},fc6f:function(n,t,o){"use strict";o.r(t);var e=o("3712"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=i.a}},[["6b39","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"02a5":function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");u(n("66fd"));var e=u(n("e6a7"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2e17":function(t,e,n){"use strict";var u=n("481f"),a=n.n(u);a.a},3637:function(t,e,n){"use strict";n.r(e);var u=n("ab57"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},"481f":function(t,e,n){},ab57:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{is_login:!1,tuser:null,tuser_id:null}},onLoad:function(){t.getStorageSync("tuser_id")||t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){t.reLaunch({url:"../login/login"})}}),this.tuser_id=t.getStorageSync("tuser_id"),this.tuser=t.getStorageSync("tuser"),console.log(n(this.tuser," at pages\\main\\main.vue:58")),this.is_login=!0,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},methods:{to:function(e){"weight"==e&&t.navigateTo({url:"../tuser_weight/tuser_weight"}),"tuser"==e?t.navigateTo({url:"../tuser/tuser"}):e&&t.navigateTo({url:"../"+e+"/"+e})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},ce90:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},e6a7:function(t,e,n){"use strict";n.r(e);var u=n("ce90"),a=n("3637");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2e17");var r=n("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports}},[["02a5","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{1203:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("494c"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/m-input").then(n.bind(null,"902f"))},s={components:{mInput:a},data:function(){return{account:"",password:"",name:"",sex:"男"}},methods:{getSexValue:function(t){var e=t.detail.value;this.sex=0==e?"男":"女"},register:function(){if(11==this.account.length)if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password.length>16)t.showToast({icon:"none",title:"密码最长为 16 个字符"});else{var e={account:this.account,password:this.password,name:this.name,sex:this.sex};t.request({url:"https://ygjs.mfmeat.top/index.php/api/user/register",data:e,dataType:"json",method:"POST",success:function(e){1==e.data.code?t.showToast({title:"注册成功",duration:3e3}):t.showModal({content:e.data.message})},fail:function(){t.showToast({title:"网络异常！",icon:"none"})}})}else t.showToast({icon:"none",title:"账号是手机号"})}}};e.default=s}).call(this,n("6e42")["default"])},"49f9":function(t,e,n){"use strict";n.r(e);var o=n("1203"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"85d3":function(t,e,n){},9960:function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");o(n("66fd"));var e=o(n("a66d"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a66d:function(t,e,n){"use strict";n.r(e);var o=n("d226"),a=n("49f9");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("bccd");var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},bccd:function(t,e,n){"use strict";var o=n("85d3"),a=n.n(o);a.a},d226:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["9960","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{1399:function(n,t,e){"use strict";e.r(t);var u=e("6344"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"461a":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},6344:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("494c"));function u(n){return n&&n.__esModule?n:{default:n}}var o=function(){return e.e("components/m-input").then(e.bind(null,"902f"))},a={components:{mInput:o},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?n.showToast({icon:"none",title:"邮箱地址不合法"}):n.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};t.default=a}).call(this,e("6e42")["default"])},"6c33":function(n,t,e){"use strict";(function(n){e("1cbe"),e("921b");u(e("66fd"));var t=u(e("a504"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},a504:function(n,t,e){"use strict";e.r(t);var u=e("461a"),o=e("1399");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports}},[["6c33","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"244c":function(n,t,e){"use strict";e.r(t);var u=e("ac3a"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"6aa8":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},ac3a:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={methods:{bindLogin:function(){n.navigateTo({url:"../login/login"})},bindLogout:function(){n.clearStorageSync(),n.reLaunch({url:"../login/login"})}}};t.default=e}).call(this,e("6e42")["default"])},d16f:function(n,t,e){"use strict";(function(n){e("1cbe"),e("921b");u(e("66fd"));var t=u(e("dacd"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},dacd:function(n,t,e){"use strict";e.r(t);var u=e("6aa8"),a=e("244c");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);var o=e("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports}},[["d16f","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/daka/daka';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daka/daka.js';

define('pages/daka/daka.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daka/daka"],{"17c4":function(t,e,n){"use strict";n.r(e);var u=n("e89c"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"33d0":function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");u(n("66fd"));var e=u(n("68de"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"68de":function(t,e,n){"use strict";n.r(e);var u=n("a3fd"),a=n("17c4");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var c=n("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},a3fd:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},e89c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{}},methods:{}};e.default=u}},[["33d0","common/runtime","common/vendor"]]]);
});
require('pages/daka/daka.js');
__wxRoute = 'pages/tuser/tuser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tuser/tuser.js';

define('pages/tuser/tuser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuser/tuser"],{"3b51":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f888"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r={data:function(){return{showImg:!0,token:null,list:[],array:[],array2:[.1,.2,.3,.4,.5,.6,.7,.8,.9],allarray:[],multiIndex:[35,2]}},methods:{daka:function(t){e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/didi",data:{token:this.token,tuser_id:t.id,tuser_name:t.name,admin_id:e.getStorageSync("tuser_id")},method:"POST",dataType:"json",success:function(a){if(1==a.data.code)for(var n=0;n<a.data.message.length;n++)t.qiandao=!0;else e.showToast({icon:"none",title:"网络异常"})}})},add:function(){e.showToast({title:"暂无"})},delet:function(){e.showToast({title:"暂无"})},detail:function(t){e.navigateTo({url:"../tuser_detail/tuser_detail?id="+t.id})},before_weight:function(e){var t=e.currentTarget.dataset.id,a=this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]],n=10;this.weight_to(t,a,n),this.list[e.currentTarget.dataset.index].before_sp=a},after_weight:function(e){var t=e.currentTarget.dataset.id,a=this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]],n=11;this.weight_to(t,a,n),this.list[e.currentTarget.dataset.index].after_sp=a},weight_to:function(t,a,n){e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/weightin",data:{token:this.token,tuser_id:t,weight:a,status:n},dataType:"json",method:"POST",success:function(t){1==t.data.code||e.showModal({title:"出错了"})},fail:function(){e.showModal({title:"网络异常，请检查网络"})}})},weight:function(){for(var e=70;e<200;e++)this.array.push(e)}},onLoad:function(){var t=this;this.token=(0,n.default)("allDetailpmf"),e.request({url:"https://ygjs.mfmeat.top/index.php/api/user/alldetail",data:{token:this.token},method:"POST",dataType:"json",success:function(a){if(1==a.data.code)for(var n=0;n<a.data.message.length;n++){var i,r=(i={id:a.data.message[n].Id,name:a.data.message[n].name,phone:a.data.message[n].phone,img:a.data.message[n].image,qiandao:a.data.message[n].qiandao},s(i,"id",a.data.message[n].Id),s(i,"before_sp",a.data.message[n].before_weight),s(i,"after_sp",a.data.message[n].after_weight),s(i,"before_value",a.data.message[n].before_weight-70),s(i,"after_value",a.data.message[n].after_weight-70),i);a.data.message[n].before_weight||(r.before_value=35,r.before_sp=null),a.data.message[n].after_weight||(r.after_value=33,r.after_sp=null),t.list.push(r)}else e.showModal({content:a.data.message,showCancel:!1})}})},onReady:function(){this.weight(),this.allarray=[this.array,this.array2]}};t.default=r}).call(this,a("6e42")["default"])},4641:function(e,t,a){"use strict";(function(e){a("1cbe"),a("921b");n(a("66fd"));var t=n(a("723d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},4967:function(e,t,a){"use strict";a.r(t);var n=a("3b51"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},"723d":function(e,t,a){"use strict";a.r(t);var n=a("aab4"),i=a("4967");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("9b5a");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},"963a":function(e,t,a){},"9b5a":function(e,t,a){"use strict";var n=a("963a"),i=a.n(n);i.a},aab4:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})}},[["4641","common/runtime","common/vendor"]]]);
});
require('pages/tuser/tuser.js');
__wxRoute = 'pages/tuser_detail/tuser_detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tuser_detail/tuser_detail.js';

define('pages/tuser_detail/tuser_detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuser_detail/tuser_detail"],{"21e5":function(t,e,n){"use strict";n.r(e);var u=n("2864"),a=n("695c");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},2864:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"695c":function(t,e,n){"use strict";n.r(e);var u=n("7b1d"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"7b1d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tuser:{name:""}}},methods:{},onLoad:function(e){var n=this;t.request({url:"https://ygjs.mfmeat.top/index.php/api/user/detail",data:{tuser_id:e.id},method:"POST",dataType:"json",success:function(t){n.tuser=t.data.message},fail:function(){t.showToast({title:"网络异常!"})}})}};e.default=n}).call(this,n("6e42")["default"])},c08d:function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");u(n("66fd"));var e=u(n("21e5"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["c08d","common/runtime","common/vendor"]]]);
});
require('pages/tuser_detail/tuser_detail.js');
__wxRoute = 'pages/tuser_weight/tuser_weight';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tuser_weight/tuser_weight.js';

define('pages/tuser_weight/tuser_weight.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuser_weight/tuser_weight"],{"42e9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"44f3":function(t,e,a){"use strict";a.r(e);var i=a("42e9"),n=a("a8f6");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var u=a("2877"),c=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"6dc9":function(t,e,a){"use strict";(function(t){function a(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(a,"-").concat(i,"-").concat(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"],["北京","上海","广州"],["北京","上海","广州"],["北京","上海","广州"],["北京","上海","广州"]],multiIndex:[0,0,0],date:a({format:!0}),startDate:a("start"),endDate:a("end"),time:"12:01"}},methods:{bindPickerChange:function(e){console.log(t("picker发送选择改变，携带值为："+e.target.value," at pages\\tuser_weight\\tuser_weight.vue:64")),this.index=e.target.value},bindMultiPickerColumnChange:function(e){switch(console.log(t("修改的列为："+e.detail.column+"，值为："+e.detail.value," at pages\\tuser_weight\\tuser_weight.vue:68")),this.multiIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value}}};e.default=i}).call(this,a("0de9")["default"])},a8f6:function(t,e,a){"use strict";a.r(e);var i=a("6dc9"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},a934:function(t,e,a){"use strict";(function(t){a("1cbe"),a("921b");i(a("66fd"));var e=i(a("44f3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["a934","common/runtime","common/vendor"]]]);
});
require('pages/tuser_weight/tuser_weight.js');
__wxRoute = 'pages/food_menu/food_menu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/food_menu/food_menu.js';

define('pages/food_menu/food_menu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/food_menu/food_menu"],{"3ddc":function(t,o,n){"use strict";n.r(o);var e=n("532b"),a=n("df72");for(var d in a)"default"!==d&&function(t){n.d(o,t,function(){return a[t]})}(d);n("507d");var i=n("2877"),s=Object(i["a"])(a["default"],e["a"],e["b"],!1,null,null,null);o["default"]=s.exports},"507d":function(t,o,n){"use strict";var e=n("fb85"),a=n.n(e);a.a},"50fc":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=a(n("f888"));function a(t){return t&&t.__esModule?t:{default:t}}var d=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"6784"))},i={components:{uniSegmentedControl:d},data:function(){return{items:["菜谱","明日特供"],styleType:"button",activeColor:"#007aff",current:0,productList:[],foodList:[],renderImage:!1,tuser_id:t.getStorageSync("tuser_id")}},methods:{onClickItem:function(t){this.current!==t&&(this.current=t)},yuding:function(o){var n=this;t.showModal({content:"预订此餐，明日会有管家为您送上。确定要预订吗？",confirmColor:"#FF3333",confirmText:"预订",success:function(e){e.confirm?t.request({url:"https://ygjs.mfmeat.top/index.php/api/food/yuding",data:{tuser:n.tuser_id,foodId:o.Id},method:"POST",dataType:"json",success:function(o){t.showLoading({mask:!0,title:"预定中..."}),1==o.data.code?t.showModal({content:"预订成功",showCancel:!1}):2==o.data.code?t.showModal({content:"您已预订该餐品,请勿重复预定",showCancel:!1}):t.showModal({content:"预订失败",showCancel:!1})},complete:function(o){t.hideLoading()}}):e.cancel&&t.showToast({icon:"none",title:"您已取消预订"})}})},loadData:function(){var o=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";t.request({url:"https://ygjs.mfmeat.top/index.php/api/food/menu",dataType:"json",success:function(t){t.data.productList.forEach(function(t){o.productList.push(t)}),t.data.foodList.forEach(function(t){o.foodList.push(t)})}}),"refresh"===n&&(this.productList=[])},food_on:function(o){var n=this;t.request({url:"https://ygjs.mfmeat.top/index.php/api/food/foodon",data:{id:o.Id,token:(0,e.default)("foodon_pmf")},dataType:"json",method:"POST",success:function(e){1==e.data.code?(t.showToast({title:"上架成功"}),n.foodList.push(o)):"-1"==e.data.code?t.showToast({title:"该商品已上架",icon:"none"}):t.showToast({title:"上架出错",icon:"none"})},fail:function(){t.showModal({content:"网络异常！"})}})},food_off:function(o){var n=this;t.request({url:"https://ygjs.mfmeat.top/index.php/api/food/foodoff",data:{id:o.Id,token:(0,e.default)("foodoff_pmf")},dataType:"json",method:"POST",success:function(e){1==e.data.code?(t.showToast({title:"已下架"}),n.foodList.splice(n.foodList.indexOf(o),1)):t.showToast({title:"下架出错",icon:"none"})},fail:function(){t.showModal({content:"网络异常！"})}})}},onLoad:function(){var t=this;this.loadData(),setTimeout(function(){t.renderImage=!0},300)}};o.default=i}).call(this,n("6e42")["default"])},"532b":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},a=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return a})},dc74:function(t,o,n){"use strict";(function(t){n("1cbe"),n("921b");e(n("66fd"));var o=e(n("3ddc"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},df72:function(t,o,n){"use strict";n.r(o);var e=n("50fc"),a=n.n(e);for(var d in e)"default"!==d&&function(t){n.d(o,t,function(){return e[t]})}(d);o["default"]=a.a},fb85:function(t,o,n){}},[["dc74","common/runtime","common/vendor"]]]);
});
require('pages/food_menu/food_menu.js');
__wxRoute = 'pages/yuding_gl/yuding_gl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/yuding_gl/yuding_gl.js';

define('pages/yuding_gl/yuding_gl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yuding_gl/yuding_gl"],{2240:function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");a(n("66fd"));var e=a(n("dec9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"32ac":function(t,e,n){"use strict";n.r(e);var a=n("ce0d"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"6bf5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"9bc9":function(t,e,n){},b886:function(t,e,n){"use strict";var a=n("9bc9"),o=n.n(a);o.a},ce0d:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("6b75")),i=u(n("f888"));function u(t){return t&&t.__esModule?t:{default:t}}var s,d=function(){return n.e("components/t-table/t-table").then(n.bind(null,"7be6"))},l=function(){return n.e("components/t-table/t-th").then(n.bind(null,"72c5"))},r=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"2958"))},c=function(){return n.e("components/t-table/t-td").then(n.bind(null,"f816"))},f=null,h={components:{tTable:d,tTh:l,tTr:r,tTd:c},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,serverData:"",tuser_id:t.getStorageSync("tuser_id"),url:"https://ygjs.mfmeat.top/index.php/api/main/getBodyDate",tableList:[],food:[],total:0}},onLoad:function(){s=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData(),this.getTableData()},methods:{getServerData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.url;arguments.length>1&&arguments[1];t.request({url:e,data:{tuser_id:this.tuser_id},method:"POST",dataType:"json",success:function(t){s.serverData=t.data.data;var e={categories:[],series:[]};e.categories=t.data.data.Column.categories,e.series=t.data.data.Column.series,s.showColumn("canvasColumn",e)},fail:function(){s.tips="网络错误，小程序端请检查合法域名"}})},showColumn:function(t,e){f=new o.default({$this:s,canvasId:t,type:"column",legend:{show:!0},fontSize:11,background:"#FFFFFF",pixelRatio:s.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:s.cWidth*s.pixelRatio,height:s.cHeight*s.pixelRatio,extra:{column:{type:"group",width:s.cWidth*s.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){f.showToolTip(t,{format:function(t,e){return"object"===typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},change:function(t){console.log(a(t.detail," at pages\\yuding_gl\\yuding_gl.vue:166"))},edit:function(e){t.showToast({title:e.name,icon:"none"})},getTableData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://ygjs.mfmeat.top/index.php/api/food/yudinglist";this.food=[],this.tableList=[],t.request({url:n,data:{token:(0,i.default)("yudinglist_pmf")},dataType:"json",method:"POST",success:function(t){e.total=t.data.message.length;for(var n=0;n<t.data.message.length;n++){var a=t.data.message[n].name,o=t.data.message[n].sendfood_time,i=t.data.message[n].food_name,u={name:a,time:o,food:i};e.tableList.push(u);for(var s=-1,d=null,l=0;l<e.food.length;l++)i==e.food[l].food_name&&(s=1,d=l);s>-1?e.food[d].nub+=1:e.food.push({food_name:i,nub:1})}},fail:function(){t.showToast({title:"网络错误",icon:"none"})}})},getTmorData:function(){this.food=[],this.tableList=[],this.getTableData("https://ygjs.mfmeat.top/index.php/api/food/yudinglisttmo")}}};e.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},dec9:function(t,e,n){"use strict";n.r(e);var a=n("6bf5"),o=n("32ac");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("b886");var u=n("2877"),s=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports}},[["2240","common/runtime","common/vendor"]]]);
});
require('pages/yuding_gl/yuding_gl.js');
__wxRoute = 'pages/san_wei/san_wei';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/san_wei/san_wei.js';

define('pages/san_wei/san_wei.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/san_wei/san_wei"],{"0e04":function(t,e,n){},"23dd":function(t,e,n){"use strict";n.r(e);var a=n("8f57"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},"7d12":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"8b71":function(t,e,n){"use strict";var a=n("0e04"),u=n.n(a);u.a},"8d86":function(t,e,n){"use strict";n.r(e);var a=n("7d12"),u=n("23dd");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("8b71");var o=n("2877"),s=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"8f57":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{inputValue:"",inputId:"",piack_name:[]}},methods:{formSubmit:function(e){var a=e.detail.value;console.log(t(a," at pages\\san_wei\\san_wei.vue:92")),n.request({url:"https://ygjs.mfmeat.top/index.php/api/user/sanweiInsert",data:a,dataType:"json",method:"POST",success:function(t){1!=t.data.code?n.showModal({content:t.data.message}):n.showToast({title:"数据添加成功",icon:"none"})},fail:function(){n.showToast({title:"网络异常,稍后重试",icon:"none"})}})},formReset:function(e){console.log(t("清空数据"," at pages\\san_wei\\san_wei.vue:120"))},set_name:function(t){var e=t.detail.value;this.inputValue=this.piack_name[e].name,this.inputId=this.piack_name[e].id},get_name:function(){var t=this;n.request({url:"https://ygjs.mfmeat.top/index.php/api/user/users",dataType:"json",success:function(e){for(var n=0;n<e.data.length;n++)t.piack_name.push(e.data[n])}})}},onLoad:function(){this.get_name()}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},e5ff:function(t,e,n){"use strict";(function(t){n("1cbe"),n("921b");a(n("66fd"));var e=a(n("8d86"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e5ff","common/runtime","common/vendor"]]]);
});
require('pages/san_wei/san_wei.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

