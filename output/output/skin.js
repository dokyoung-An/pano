// Garden Gnome Software - Skin
// Pano2VR 7.0 beta6/19829
// Filename: wedding_skin.ggsk
// Generated 2022-11-28T14:18:19

function pano2vrSkin(player,base) {
	player.addVariable('gallery_show_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('gallery_pictures', 1, 0, { ignoreInState: 0  });
	player.addVariable('volume_1', 1, 2, { ignoreInState: 0  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._snow_effect=document.createElement('div');
		el.ggId="snow_effect";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._snow_effect.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._snow_effect.ggUpdatePosition=function (useTransition) {
		}
		el=me._snowflake=document.createElement('div');
		els=me._snowflake__img=document.createElement('img');
		els.className='ggskin ggskin_snowflake';
		hs=basePath + 'images/snowflake.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="snowflake";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._snowflake.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._snowflake.ggUpdatePosition=function (useTransition) {
		}
		me._snow_effect.appendChild(me._snowflake);
		el=me._glmatrix_code=document.createElement('div');
		els=me._glmatrix_code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="glmatrix_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.0.0-0

Copyright (c) 2015-2018, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports):"function"==typeof define&&define.amd?define(["exports"],a):a(t.glMatrix={})}(this,function(t){"use strict";var a=1e-6,n="undefined"!=typeof Float32Array?Float32Array:Array,r=Math.random;var u=Math.PI/180;var e=Object.freeze({EPSILON:a,get ARRAY_TYPE(){return n},RANDOM:r,setMatrixArrayType:function(t){n=t},toRadian:function(t){return t*u},equals:function(t,n){return Math.abs(t-n)<=a*Math.max(1,Math.abs(t),Math.abs(n))}});function o(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*M+e*c,t[3]=u*M+o*c,t}function i(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t}var h=o,M=i,c=Object.freeze({create:function(){var t=new n(4);return n!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,a,r,u){var e=new n(4);return e[0]=t,e[1]=a,e[2]=r,e[3]=u,e},set:function(t,a,n,r,u){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t},transpose:function(t,a){if(t===a){var n=a[1];t[1]=a[2],t[2]=n}else t[0]=a[0],t[1]=a[2],t[2]=a[1],t[3]=a[3];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=n*o,t):null},adjoint:function(t,a){var n=a[0];return t[0]=a[3],t[1]=-a[1],t[2]=-a[2],t[3]=n,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:o,rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t},scale:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},LDU:function(t,a,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,a,n]},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t},subtract:i,exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=n[0],h=n[1],M=n[2],c=n[3];return Math.abs(r-i)<=a*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=a*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-M)<=a*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-c)<=a*Math.max(1,Math.abs(o),Math.abs(c))},multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},mul:h,sub:M});function s(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return t[0]=r*M+e*c,t[1]=u*M+o*c,t[2]=r*s+e*f,t[3]=u*s+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function f(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}var l=s,v=f,b=Object.freeze({create:function(){var t=new n(6);return n!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,a,r,u,e,o){var i=new n(6);return i[0]=t,i[1]=a,i[2]=r,i[3]=u,i[4]=e,i[5]=o,i},set:function(t,a,n,r,u,e,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=n*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=n*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-n*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:s,rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=Math.sin(n),c=Math.cos(n);return t[0]=r*c+e*M,t[1]=u*c+o*M,t[2]=r*-M+e*c,t[3]=u*-M+o*c,t[4]=i,t[5]=h,t},scale:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1];return t[0]=r*M,t[1]=u*M,t[2]=e*c,t[3]=o*c,t[4]=i,t[5]=h,t},translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=n[0],c=n[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*M+e*c+i,t[5]=u*M+o*c+h,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t},subtract:f,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(r-M)<=a*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(u-c)<=a*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-s)<=a*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-f)<=a*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(h-v)<=a*Math.max(1,Math.abs(h),Math.abs(v))},mul:l,sub:v});function m(){var t=new n(9);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function d(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],p=n[6],x=n[7],q=n[8];return t[0]=f*r+l*o+v*M,t[1]=f*u+l*i+v*c,t[2]=f*e+l*h+v*s,t[3]=b*r+m*o+d*M,t[4]=b*u+m*i+d*c,t[5]=b*e+m*h+d*s,t[6]=p*r+x*o+q*M,t[7]=p*u+x*i+q*c,t[8]=p*e+x*h+q*s,t}function p(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t}var x=d,q=p,w=Object.freeze({create:m,fromMat4:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},clone:function(t){var a=new n(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},fromValues:function(t,a,r,u,e,o,i,h,M){var c=new n(9);return c[0]=t,c[1]=a,c[2]=r,c[3]=u,c[4]=e,c[5]=o,c[6]=i,c[7]=h,c[8]=M,c},set:function(t,a,n,r,u,e,o,i,h,M){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=M,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,a){if(t===a){var n=a[1],r=a[2],u=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=u}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=c*o-i*M,f=-c*e+i*h,l=M*e-o*h,v=n*s+r*f+u*l;return v?(v=1/v,t[0]=s*v,t[1]=(-c*r+u*M)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(c*n-u*h)*v,t[5]=(-i*n+u*e)*v,t[6]=l*v,t[7]=(-M*n+r*h)*v,t[8]=(o*n-r*e)*v,t):null},adjoint:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8];return t[0]=o*c-i*M,t[1]=u*M-r*c,t[2]=r*i-u*o,t[3]=i*h-e*c,t[4]=n*c-u*h,t[5]=u*e-n*i,t[6]=e*M-o*h,t[7]=r*h-n*M,t[8]=n*o-r*e,t},determinant:function(t){var a=t[0],n=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],M=t[8];return a*(M*e-o*h)+n*(-M*u+o*i)+r*(h*u-e*i)},multiply:d,translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=n[0],l=n[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+M,t[7]=f*u+l*i+c,t[8]=f*e+l*h+s,t},rotate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=Math.sin(n),l=Math.cos(n);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=M,t[7]=c,t[8]=s,t},scale:function(t,a,n){var r=n[0],u=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=u*a[3],t[4]=u*a[4],t[5]=u*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},fromRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},fromQuat:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n+n,i=r+r,h=u+u,M=n*o,c=r*o,s=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-s-v,t[3]=c-d,t[6]=f+m,t[1]=c+d,t[4]=1-M-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-M-s,t},normalFromMat4:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15],p=n*i-r*o,x=n*h-u*o,q=n*M-e*o,w=r*h-u*i,y=r*M-e*i,g=u*M-e*h,A=c*b-s*v,R=c*m-f*v,P=c*d-l*v,j=s*m-f*b,z=s*d-l*b,I=f*d-l*m,S=p*I-x*z+q*j+w*P-y*R+g*A;return S?(S=1/S,t[0]=(i*I-h*z+M*j)*S,t[1]=(h*P-o*I-M*R)*S,t[2]=(o*z-i*P+M*A)*S,t[3]=(u*z-r*I-e*j)*S,t[4]=(n*I-u*P+e*R)*S,t[5]=(r*P-n*z-e*A)*S,t[6]=(b*g-m*y+d*w)*S,t[7]=(m*q-v*g-d*x)*S,t[8]=(v*y-b*q+d*p)*S,t):null},projection:function(t,a,n){return t[0]=2/a,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t},subtract:p,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],p=n[6],x=n[7],q=n[8];return Math.abs(r-f)<=a*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=a*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=a*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=a*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=a*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=a*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(M-p)<=a*Math.max(1,Math.abs(M),Math.abs(p))&&Math.abs(c-x)<=a*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(s-q)<=a*Math.max(1,Math.abs(s),Math.abs(q))},mul:x,sub:q});function y(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function g(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=a[9],l=a[10],v=a[11],b=a[12],m=a[13],d=a[14],p=a[15],x=n[0],q=n[1],w=n[2],y=n[3];return t[0]=x*r+q*i+w*s+y*b,t[1]=x*u+q*h+w*f+y*m,t[2]=x*e+q*M+w*l+y*d,t[3]=x*o+q*c+w*v+y*p,x=n[4],q=n[5],w=n[6],y=n[7],t[4]=x*r+q*i+w*s+y*b,t[5]=x*u+q*h+w*f+y*m,t[6]=x*e+q*M+w*l+y*d,t[7]=x*o+q*c+w*v+y*p,x=n[8],q=n[9],w=n[10],y=n[11],t[8]=x*r+q*i+w*s+y*b,t[9]=x*u+q*h+w*f+y*m,t[10]=x*e+q*M+w*l+y*d,t[11]=x*o+q*c+w*v+y*p,x=n[12],q=n[13],w=n[14],y=n[15],t[12]=x*r+q*i+w*s+y*b,t[13]=x*u+q*h+w*f+y*m,t[14]=x*e+q*M+w*l+y*d,t[15]=x*o+q*c+w*v+y*p,t}function A(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=r+r,h=u+u,M=e+e,c=r*i,s=r*h,f=r*M,l=u*h,v=u*M,b=e*M,m=o*i,d=o*h,p=o*M;return t[0]=1-(l+b),t[1]=s+p,t[2]=f-d,t[3]=0,t[4]=s-p,t[5]=1-(c+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(c+l),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function R(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function P(t,a){var n=a[0]+a[5]+a[10],r=0;return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(a[6]-a[9])/r,t[1]=(a[8]-a[2])/r,t[2]=(a[1]-a[4])/r):a[0]>a[5]&&a[0]>a[10]?(r=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/r,t[0]=.25*r,t[1]=(a[1]+a[4])/r,t[2]=(a[8]+a[2])/r):a[5]>a[10]?(r=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/r,t[0]=(a[1]+a[4])/r,t[1]=.25*r,t[2]=(a[6]+a[9])/r):(r=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/r,t[0]=(a[8]+a[2])/r,t[1]=(a[6]+a[9])/r,t[2]=.25*r),t}function j(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t}var z=g,I=j,S=Object.freeze({create:function(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var a=new n(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},fromValues:function(t,a,r,u,e,o,i,h,M,c,s,f,l,v,b,m){var d=new n(16);return d[0]=t,d[1]=a,d[2]=r,d[3]=u,d[4]=e,d[5]=o,d[6]=i,d[7]=h,d[8]=M,d[9]=c,d[10]=s,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,a,n,r,u,e,o,i,h,M,c,s,f,l,v,b,m){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=M,t[9]=c,t[10]=s,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:y,transpose:function(t,a){if(t===a){var n=a[1],r=a[2],u=a[3],e=a[6],o=a[7],i=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=r,t[9]=e,t[11]=a[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15],p=n*i-r*o,x=n*h-u*o,q=n*M-e*o,w=r*h-u*i,y=r*M-e*i,g=u*M-e*h,A=c*b-s*v,R=c*m-f*v,P=c*d-l*v,j=s*m-f*b,z=s*d-l*b,I=f*d-l*m,S=p*I-x*z+q*j+w*P-y*R+g*A;return S?(S=1/S,t[0]=(i*I-h*z+M*j)*S,t[1]=(u*z-r*I-e*j)*S,t[2]=(b*g-m*y+d*w)*S,t[3]=(f*y-s*g-l*w)*S,t[4]=(h*P-o*I-M*R)*S,t[5]=(n*I-u*P+e*R)*S,t[6]=(m*q-v*g-d*x)*S,t[7]=(c*g-f*q+l*x)*S,t[8]=(o*z-i*P+M*A)*S,t[9]=(r*P-n*z-e*A)*S,t[10]=(v*y-b*q+d*p)*S,t[11]=(s*q-c*y-l*p)*S,t[12]=(i*R-o*j-h*A)*S,t[13]=(n*j-r*R+u*A)*S,t[14]=(b*x-v*w-m*p)*S,t[15]=(c*w-s*x+f*p)*S,t):null},adjoint:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],h=a[6],M=a[7],c=a[8],s=a[9],f=a[10],l=a[11],v=a[12],b=a[13],m=a[14],d=a[15];return t[0]=i*(f*d-l*m)-s*(h*d-M*m)+b*(h*l-M*f),t[1]=-(r*(f*d-l*m)-s*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-M*m)-i*(u*d-e*m)+b*(u*M-e*h),t[3]=-(r*(h*l-M*f)-i*(u*l-e*f)+s*(u*M-e*h)),t[4]=-(o*(f*d-l*m)-c*(h*d-M*m)+v*(h*l-M*f)),t[5]=n*(f*d-l*m)-c*(u*d-e*m)+v*(u*l-e*f),t[6]=-(n*(h*d-M*m)-o*(u*d-e*m)+v*(u*M-e*h)),t[7]=n*(h*l-M*f)-o*(u*l-e*f)+c*(u*M-e*h),t[8]=o*(s*d-l*b)-c*(i*d-M*b)+v*(i*l-M*s),t[9]=-(n*(s*d-l*b)-c*(r*d-e*b)+v*(r*l-e*s)),t[10]=n*(i*d-M*b)-o*(r*d-e*b)+v*(r*M-e*i),t[11]=-(n*(i*l-M*s)-o*(r*l-e*s)+c*(r*M-e*i)),t[12]=-(o*(s*m-f*b)-c*(i*m-h*b)+v*(i*f-h*s)),t[13]=n*(s*m-f*b)-c*(r*m-u*b)+v*(r*f-u*s),t[14]=-(n*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=n*(i*f-h*s)-o*(r*f-u*s)+c*(r*h-u*i),t},determinant:function(t){var a=t[0],n=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],M=t[8],c=t[9],s=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(a*o-n*e)*(s*m-f*b)-(a*i-r*e)*(c*m-f*v)+(a*h-u*e)*(c*b-s*v)+(n*i-r*o)*(M*m-f*l)-(n*h-u*o)*(M*b-s*l)+(r*h-u*i)*(M*v-c*l)},multiply:g,translate:function(t,a,n){var r,u,e,o,i,h,M,c,s,f,l,v,b=n[0],m=n[1],d=n[2];return a===t?(t[12]=a[0]*b+a[4]*m+a[8]*d+a[12],t[13]=a[1]*b+a[5]*m+a[9]*d+a[13],t[14]=a[2]*b+a[6]*m+a[10]*d+a[14],t[15]=a[3]*b+a[7]*m+a[11]*d+a[15]):(r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=a[8],f=a[9],l=a[10],v=a[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=M,t[7]=c,t[8]=s,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+s*d+a[12],t[13]=u*b+h*m+f*d+a[13],t[14]=e*b+M*m+l*d+a[14],t[15]=o*b+c*m+v*d+a[15]),t},scale:function(t,a,n){var r=n[0],u=n[1],e=n[2];return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*u,t[5]=a[5]*u,t[6]=a[6]*u,t[7]=a[7]*u,t[8]=a[8]*e,t[9]=a[9]*e,t[10]=a[10]*e,t[11]=a[11]*e,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},rotate:function(t,n,r,u){var e,o,i,h,M,c,s,f,l,v,b,m,d,p,x,q,w,y,g,A,R,P,j,z,I=u[0],S=u[1],E=u[2],O=Math.sqrt(I*I+S*S+E*E);return O<a?null:(I*=O=1/O,S*=O,E*=O,e=Math.sin(r),i=1-(o=Math.cos(r)),h=n[0],M=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],p=n[10],x=n[11],q=I*I*i+o,w=S*I*i+E*e,y=E*I*i-S*e,g=I*S*i-E*e,A=S*S*i+o,R=E*S*i+I*e,P=I*E*i+S*e,j=S*E*i-I*e,z=E*E*i+o,t[0]=h*q+f*w+m*y,t[1]=M*q+l*w+d*y,t[2]=c*q+v*w+p*y,t[3]=s*q+b*w+x*y,t[4]=h*g+f*A+m*R,t[5]=M*g+l*A+d*R,t[6]=c*g+v*A+p*R,t[7]=s*g+b*A+x*R,t[8]=h*P+f*j+m*z,t[9]=M*P+l*j+d*z,t[10]=c*P+v*j+p*z,t[11]=s*P+b*j+x*z,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},rotateX:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[4],o=a[5],i=a[6],h=a[7],M=a[8],c=a[9],s=a[10],f=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=e*u+M*r,t[5]=o*u+c*r,t[6]=i*u+s*r,t[7]=h*u+f*r,t[8]=M*u-e*r,t[9]=c*u-o*r,t[10]=s*u-i*r,t[11]=f*u-h*r,t},rotateY:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[0],o=a[1],i=a[2],h=a[3],M=a[8],c=a[9],s=a[10],f=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=e*u-M*r,t[1]=o*u-c*r,t[2]=i*u-s*r,t[3]=h*u-f*r,t[8]=e*r+M*u,t[9]=o*r+c*u,t[10]=i*r+s*u,t[11]=h*r+f*u,t},rotateZ:function(t,a,n){var r=Math.sin(n),u=Math.cos(n),e=a[0],o=a[1],i=a[2],h=a[3],M=a[4],c=a[5],s=a[6],f=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=e*u+M*r,t[1]=o*u+c*r,t[2]=i*u+s*r,t[3]=h*u+f*r,t[4]=M*u-e*r,t[5]=c*u-o*r,t[6]=s*u-i*r,t[7]=f*u-h*r,t},fromTranslation:function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromScaling:function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,n,r){var u,e,o,i=r[0],h=r[1],M=r[2],c=Math.sqrt(i*i+h*h+M*M);return c<a?null:(i*=c=1/c,h*=c,M*=c,u=Math.sin(n),o=1-(e=Math.cos(n)),t[0]=i*i*o+e,t[1]=h*i*o+M*u,t[2]=M*i*o-h*u,t[3]=0,t[4]=i*h*o-M*u,t[5]=h*h*o+e,t[6]=M*h*o+i*u,t[7]=0,t[8]=i*M*o+h*u,t[9]=h*M*o-i*u,t[10]=M*M*o+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:A,fromQuat2:function(t,a){var r=new n(3),u=-a[0],e=-a[1],o=-a[2],i=a[3],h=a[4],M=a[5],c=a[6],s=a[7],f=u*u+e*e+o*o+i*i;return f>0?(r[0]=2*(h*i+s*u+M*o-c*e)/f,r[1]=2*(M*i+s*e+c*u-h*o)/f,r[2]=2*(c*i+s*o+h*e-M*u)/f):(r[0]=2*(h*i+s*u+M*o-c*e),r[1]=2*(M*i+s*e+c*u-h*o),r[2]=2*(c*i+s*o+h*e-M*u)),A(t,a,r),t},getTranslation:R,getScaling:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[4],o=a[5],i=a[6],h=a[8],M=a[9],c=a[10];return t[0]=Math.sqrt(n*n+r*r+u*u),t[1]=Math.sqrt(e*e+o*o+i*i),t[2]=Math.sqrt(h*h+M*M+c*c),t},getRotation:P,fromRotationTranslationScale:function(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=a[3],h=u+u,M=e+e,c=o+o,s=u*h,f=u*M,l=u*c,v=e*M,b=e*c,m=o*c,d=i*h,p=i*M,x=i*c,q=r[0],w=r[1],y=r[2];return t[0]=(1-(v+m))*q,t[1]=(f+x)*q,t[2]=(l-p)*q,t[3]=0,t[4]=(f-x)*w,t[5]=(1-(s+m))*w,t[6]=(b+d)*w,t[7]=0,t[8]=(l+p)*y,t[9]=(b-d)*y,t[10]=(1-(s+v))*y,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,a,n,r,u){var e=a[0],o=a[1],i=a[2],h=a[3],M=e+e,c=o+o,s=i+i,f=e*M,l=e*c,v=e*s,b=o*c,m=o*s,d=i*s,p=h*M,x=h*c,q=h*s,w=r[0],y=r[1],g=r[2],A=u[0],R=u[1],P=u[2],j=(1-(b+d))*w,z=(l+q)*w,I=(v-x)*w,S=(l-q)*y,E=(1-(f+d))*y,O=(m+p)*y,T=(v+x)*g,D=(m-p)*g,F=(1-(f+b))*g;return t[0]=j,t[1]=z,t[2]=I,t[3]=0,t[4]=S,t[5]=E,t[6]=O,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=n[0]+A-(j*A+S*R+T*P),t[13]=n[1]+R-(z*A+E*R+D*P),t[14]=n[2]+P-(I*A+O*R+F*P),t[15]=1,t},fromQuat:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n+n,i=r+r,h=u+u,M=n*o,c=r*o,s=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-s-v,t[1]=c+d,t[2]=f-m,t[3]=0,t[4]=c-d,t[5]=1-M-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-M-s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,a,n,r,u,e,o){var i=1/(n-a),h=1/(u-r),M=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(n+a)*i,t[9]=(u+r)*h,t[10]=(o+e)*M,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*M,t[15]=0,t},perspective:function(t,a,n,r,u){var e,o=1/Math.tan(a/2);return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,a,n,r){var u=Math.tan(a.upDegrees*Math.PI/180),e=Math.tan(a.downDegrees*Math.PI/180),o=Math.tan(a.leftDegrees*Math.PI/180),i=Math.tan(a.rightDegrees*Math.PI/180),h=2/(o+i),M=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=M,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*M*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},ortho:function(t,a,n,r,u,e,o){var i=1/(a-n),h=1/(r-u),M=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*M,t[11]=0,t[12]=(a+n)*i,t[13]=(u+r)*h,t[14]=(o+e)*M,t[15]=1,t},lookAt:function(t,n,r,u){var e,o,i,h,M,c,s,f,l,v,b=n[0],m=n[1],d=n[2],p=u[0],x=u[1],q=u[2],w=r[0],g=r[1],A=r[2];return Math.abs(b-w)<a&&Math.abs(m-g)<a&&Math.abs(d-A)<a?y(t):(s=b-w,f=m-g,l=d-A,e=x*(l*=v=1/Math.sqrt(s*s+f*f+l*l))-q*(f*=v),o=q*(s*=v)-p*l,i=p*f-x*s,(v=Math.sqrt(e*e+o*o+i*i))?(e*=v=1/v,o*=v,i*=v):(e=0,o=0,i=0),h=f*i-l*o,M=l*e-s*i,c=s*o-f*e,(v=Math.sqrt(h*h+M*M+c*c))?(h*=v=1/v,M*=v,c*=v):(h=0,M=0,c=0),t[0]=e,t[1]=h,t[2]=s,t[3]=0,t[4]=o,t[5]=M,t[6]=f,t[7]=0,t[8]=i,t[9]=c,t[10]=l,t[11]=0,t[12]=-(e*b+o*m+i*d),t[13]=-(h*b+M*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)},targetTo:function(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=r[0],h=r[1],M=r[2],c=u-n[0],s=e-n[1],f=o-n[2],l=c*c+s*s+f*f;l>0&&(c*=l=1/Math.sqrt(l),s*=l,f*=l);var v=h*f-M*s,b=M*c-i*f,m=i*s-h*c;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=s*m-f*b,t[5]=f*v-c*m,t[6]=c*b-s*v,t[7]=0,t[8]=c,t[9]=s,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t},subtract:j,multiplyScalar:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t},multiplyScalarAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t[9]=a[9]+n[9]*r,t[10]=a[10]+n[10]*r,t[11]=a[11]+n[11]*r,t[12]=a[12]+n[12]*r,t[13]=a[13]+n[13]*r,t[14]=a[14]+n[14]*r,t[15]=a[15]+n[15]*r,t},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],p=t[15],x=n[0],q=n[1],w=n[2],y=n[3],g=n[4],A=n[5],R=n[6],P=n[7],j=n[8],z=n[9],I=n[10],S=n[11],E=n[12],O=n[13],T=n[14],D=n[15];return Math.abs(r-x)<=a*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(u-q)<=a*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=a*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-y)<=a*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(i-g)<=a*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(h-A)<=a*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(M-R)<=a*Math.max(1,Math.abs(M),Math.abs(R))&&Math.abs(c-P)<=a*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(s-j)<=a*Math.max(1,Math.abs(s),Math.abs(j))&&Math.abs(f-z)<=a*Math.max(1,Math.abs(f),Math.abs(z))&&Math.abs(l-I)<=a*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-S)<=a*Math.max(1,Math.abs(v),Math.abs(S))&&Math.abs(b-E)<=a*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(m-O)<=a*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(d-T)<=a*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(p-D)<=a*Math.max(1,Math.abs(p),Math.abs(D))},mul:z,sub:I});function E(){var t=new n(3);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function O(t){var a=t[0],n=t[1],r=t[2];return Math.sqrt(a*a+n*n+r*r)}function T(t,a,r){var u=new n(3);return u[0]=t,u[1]=a,u[2]=r,u}function D(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t}function F(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t}function L(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t}function V(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2];return Math.sqrt(n*n+r*r+u*u)}function Q(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2];return n*n+r*r+u*u}function Y(t){var a=t[0],n=t[1],r=t[2];return a*a+n*n+r*r}function X(t,a){var n=a[0],r=a[1],u=a[2],e=n*n+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t}function Z(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]}function _(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[0],i=n[1],h=n[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}var B,N=D,k=F,U=L,W=V,C=Q,G=O,H=Y,J=(B=E(),function(t,a,n,r,u,e){var o,i;for(a||(a=3),n||(n=0),i=r?Math.min(r*a+n,t.length):t.length,o=n;o<i;o+=a)B[0]=t[o],B[1]=t[o+1],B[2]=t[o+2],u(B,B,e),t[o]=B[0],t[o+1]=B[1],t[o+2]=B[2];return t}),K=Object.freeze({create:E,clone:function(t){var a=new n(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},length:O,fromValues:T,copy:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t},set:function(t,a,n,r){return t[0]=a,t[1]=n,t[2]=r,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},subtract:D,multiply:F,divide:L,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t},scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t},scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t},distance:V,squaredDistance:Q,squaredLength:Y,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t},normalize:X,dot:Z,cross:_,lerp:function(t,a,n,r){var u=a[0],e=a[1],o=a[2];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t[2]=o+r*(n[2]-o),t},hermite:function(t,a,n,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,M=o*(e-1),c=o*(3-2*e);return t[0]=a[0]*i+n[0]*h+r[0]*M+u[0]*c,t[1]=a[1]*i+n[1]*h+r[1]*M+u[1]*c,t[2]=a[2]*i+n[2]*h+r[2]*M+u[2]*c,t},bezier:function(t,a,n,r,u,e){var o=1-e,i=o*o,h=e*e,M=i*o,c=3*e*i,s=3*h*o,f=h*e;return t[0]=a[0]*M+n[0]*c+r[0]*s+u[0]*f,t[1]=a[1]*M+n[1]*c+r[1]*s+u[1]*f,t[2]=a[2]*M+n[2]*c+r[2]*s+u[2]*f,t},random:function(t,a){a=a||1;var n=2*r()*Math.PI,u=2*r()-1,e=Math.sqrt(1-u*u)*a;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t[2]=u*a,t},transformMat4:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[3]*r+n[7]*u+n[11]*e+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*u+n[8]*e+n[12])/o,t[1]=(n[1]*r+n[5]*u+n[9]*e+n[13])/o,t[2]=(n[2]*r+n[6]*u+n[10]*e+n[14])/o,t},transformMat3:function(t,a,n){var r=a[0],u=a[1],e=a[2];return t[0]=r*n[0]+u*n[3]+e*n[6],t[1]=r*n[1]+u*n[4]+e*n[7],t[2]=r*n[2]+u*n[5]+e*n[8],t},transformQuat:function(t,a,n){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],M=a[2],c=u*M-e*h,s=e*i-r*M,f=r*h-u*i,l=u*f-e*s,v=e*c-r*f,b=r*s-u*c,m=2*o;return c*=m,s*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+c+l,t[1]=h+s+v,t[2]=M+f+b,t},rotateX:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},rotateY:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},rotateZ:function(t,a,n,r){var u=[],e=[];return u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},angle:function(t,a){var n=T(t[0],t[1],t[2]),r=T(a[0],a[1],a[2]);X(n,n),X(r,r);var u=Z(n,r);return u>1?0:u<-1?Math.PI:Math.acos(u)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=n[0],i=n[1],h=n[2];return Math.abs(r-o)<=a*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=a*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-h)<=a*Math.max(1,Math.abs(e),Math.abs(h))},sub:N,mul:k,div:U,dist:W,sqrDist:C,len:G,sqrLen:H,forEach:J});function $(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function tt(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function at(t,a,r,u){var e=new n(4);return e[0]=t,e[1]=a,e[2]=r,e[3]=u,e}function nt(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t}function rt(t,a,n,r,u){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t}function ut(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t}function et(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t}function ot(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t[3]=a[3]*n[3],t}function it(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t[3]=a[3]/n[3],t}function ht(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t}function Mt(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2],e=a[3]-t[3];return Math.sqrt(n*n+r*r+u*u+e*e)}function ct(t,a){var n=a[0]-t[0],r=a[1]-t[1],u=a[2]-t[2],e=a[3]-t[3];return n*n+r*r+u*u+e*e}function st(t){var a=t[0],n=t[1],r=t[2],u=t[3];return Math.sqrt(a*a+n*n+r*r+u*u)}function ft(t){var a=t[0],n=t[1],r=t[2],u=t[3];return a*a+n*n+r*r+u*u}function lt(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*n+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function vt(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]+t[3]*a[3]}function bt(t,a,n,r){var u=a[0],e=a[1],o=a[2],i=a[3];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t[2]=o+r*(n[2]-o),t[3]=i+r*(n[3]-i),t}function mt(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]}function dt(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=n[0],h=n[1],M=n[2],c=n[3];return Math.abs(r-i)<=a*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=a*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-M)<=a*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-c)<=a*Math.max(1,Math.abs(o),Math.abs(c))}var pt=et,xt=ot,qt=it,wt=Mt,yt=ct,gt=st,At=ft,Rt=function(){var t=$();return function(a,n,r,u,e,o){var i,h;for(n||(n=4),r||(r=0),h=u?Math.min(u*n+r,a.length):a.length,i=r;i<h;i+=n)t[0]=a[i],t[1]=a[i+1],t[2]=a[i+2],t[3]=a[i+3],e(t,t,o),a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3];return a}}(),Pt=Object.freeze({create:$,clone:tt,fromValues:at,copy:nt,set:rt,add:ut,subtract:et,multiply:ot,divide:it,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t[3]=Math.ceil(a[3]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t[3]=Math.floor(a[3]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t[3]=Math.min(a[3],n[3]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t[3]=Math.max(a[3],n[3]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t[3]=Math.round(a[3]),t},scale:ht,scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},distance:Mt,squaredDistance:ct,length:st,squaredLength:ft,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=-a[3],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t[3]=1/a[3],t},normalize:lt,dot:vt,lerp:bt,random:function(t,a){var n,u,e,o,i,h;a=a||1;do{i=(n=2*r()-1)*n+(u=2*r()-1)*u}while(i>=1);do{h=(e=2*r()-1)*e+(o=2*r()-1)*o}while(h>=1);var M=Math.sqrt((1-i)/h);return t[0]=a*n,t[1]=a*u,t[2]=a*e*M,t[3]=a*o*M,t},transformMat4:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3];return t[0]=n[0]*r+n[4]*u+n[8]*e+n[12]*o,t[1]=n[1]*r+n[5]*u+n[9]*e+n[13]*o,t[2]=n[2]*r+n[6]*u+n[10]*e+n[14]*o,t[3]=n[3]*r+n[7]*u+n[11]*e+n[15]*o,t},transformQuat:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=n[0],i=n[1],h=n[2],M=n[3],c=M*r+i*e-h*u,s=M*u+h*r-o*e,f=M*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=c*M+l*-o+s*-h-f*-i,t[1]=s*M+l*-i+f*-o-c*-h,t[2]=f*M+l*-h+c*-i-s*-o,t[3]=a[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:mt,equals:dt,sub:pt,mul:xt,div:qt,dist:wt,sqrDist:yt,len:gt,sqrLen:At,forEach:Rt});function jt(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function zt(t,a,n){n*=.5;var r=Math.sin(n);return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=Math.cos(n),t}function It(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*c+o*i+u*M-e*h,t[1]=u*c+o*h+e*i-r*M,t[2]=e*c+o*M+r*h-u*i,t[3]=o*c-r*i-u*h-e*M,t}function St(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Et(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Ot(t,a,n){n*=.5;var r=a[0],u=a[1],e=a[2],o=a[3],i=Math.sin(n),h=Math.cos(n);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Tt(t,n,r,u){var e,o,i,h,M,c=n[0],s=n[1],f=n[2],l=n[3],v=r[0],b=r[1],m=r[2],d=r[3];return(o=c*v+s*b+f*m+l*d)<0&&(o=-o,v=-v,b=-b,m=-m,d=-d),1-o>a?(e=Math.acos(o),i=Math.sin(e),h=Math.sin((1-u)*e)/i,M=Math.sin(u*e)/i):(h=1-u,M=u),t[0]=h*c+M*v,t[1]=h*s+M*b,t[2]=h*f+M*m,t[3]=h*l+M*d,t}function Dt(t,a){var n,r=a[0]+a[4]+a[8];if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(a[5]-a[7])*n,t[1]=(a[6]-a[2])*n,t[2]=(a[1]-a[3])*n;else{var u=0;a[4]>a[0]&&(u=1),a[8]>a[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;n=Math.sqrt(a[3*u+u]-a[3*e+e]-a[3*o+o]+1),t[u]=.5*n,n=.5/n,t[3]=(a[3*e+o]-a[3*o+e])*n,t[e]=(a[3*e+u]+a[3*u+e])*n,t[o]=(a[3*o+u]+a[3*u+o])*n}return t}var Ft,Lt,Vt,Qt,Yt,Xt,Zt=tt,_t=at,Bt=nt,Nt=rt,kt=ut,Ut=It,Wt=ht,Ct=vt,Gt=bt,Ht=st,Jt=Ht,Kt=ft,$t=Kt,ta=lt,aa=mt,na=dt,ra=(Ft=E(),Lt=T(1,0,0),Vt=T(0,1,0),function(t,a,n){var r=Z(a,n);return r<-.999999?(_(Ft,Lt,a),G(Ft)<1e-6&&_(Ft,Vt,a),X(Ft,Ft),zt(t,Ft,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(_(Ft,a,n),t[0]=Ft[0],t[1]=Ft[1],t[2]=Ft[2],t[3]=1+r,ta(t,t))}),ua=(Qt=jt(),Yt=jt(),function(t,a,n,r,u,e){return Tt(Qt,a,u,e),Tt(Yt,n,r,e),Tt(t,Qt,Yt,2*e*(1-e)),t}),ea=(Xt=m(),function(t,a,n,r){return Xt[0]=n[0],Xt[3]=n[1],Xt[6]=n[2],Xt[1]=r[0],Xt[4]=r[1],Xt[7]=r[2],Xt[2]=-a[0],Xt[5]=-a[1],Xt[8]=-a[2],ta(t,Dt(t,Xt))}),oa=Object.freeze({create:jt,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:zt,getAxisAngle:function(t,n){var r=2*Math.acos(n[3]),u=Math.sin(r/2);return u>a?(t[0]=n[0]/u,t[1]=n[1]/u,t[2]=n[2]/u):(t[0]=1,t[1]=0,t[2]=0),r},multiply:It,rotateX:St,rotateY:Et,rotateZ:Ot,calculateW:function(t,a){var n=a[0],r=a[1],u=a[2];return t[0]=n,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-u*u)),t},slerp:Tt,random:function(t){var a=r(),n=r(),u=r(),e=Math.sqrt(1-a),o=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=o*Math.sin(2*Math.PI*u),t[3]=o*Math.cos(2*Math.PI*u),t},invert:function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=n*n+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-n*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t},conjugate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t},fromMat3:Dt,fromEuler:function(t,a,n,r){var u=.5*Math.PI/180;a*=u,n*=u,r*=u;var e=Math.sin(a),o=Math.cos(a),i=Math.sin(n),h=Math.cos(n),M=Math.sin(r),c=Math.cos(r);return t[0]=e*h*c-o*i*M,t[1]=o*i*c+e*h*M,t[2]=o*h*M-e*i*c,t[3]=o*h*c+e*i*M,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Zt,fromValues:_t,copy:Bt,set:Nt,add:kt,mul:Ut,scale:Wt,dot:Ct,lerp:Gt,length:Ht,len:Jt,squaredLength:Kt,sqrLen:$t,normalize:ta,exactEquals:aa,equals:na,rotationTo:ra,sqlerp:ua,setAxes:ea});function ia(t,a,n){var r=.5*n[0],u=.5*n[1],e=.5*n[2],o=a[0],i=a[1],h=a[2],M=a[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=M,t[4]=r*M+u*h-e*i,t[5]=u*M+e*o-r*h,t[6]=e*M+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function ha(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t}var Ma=Bt;var ca=Bt;function sa(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[4],h=n[5],M=n[6],c=n[7],s=a[4],f=a[5],l=a[6],v=a[7],b=n[0],m=n[1],d=n[2],p=n[3];return t[0]=r*p+o*b+u*d-e*m,t[1]=u*p+o*m+e*b-r*d,t[2]=e*p+o*d+r*m-u*b,t[3]=o*p-r*b-u*m-e*d,t[4]=r*c+o*i+u*M-e*h+s*p+v*b+f*d-l*m,t[5]=u*c+o*h+e*i-r*M+f*p+v*m+l*b-s*d,t[6]=e*c+o*M+r*h-u*i+l*p+v*d+s*m-f*b,t[7]=o*c-r*i-u*h-e*M+v*p-s*b-f*m-l*d,t}var fa=sa;var la=Ct;var va=Ht,ba=va,ma=Kt,da=ma;var pa=Object.freeze({create:function(){var t=new n(8);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var a=new n(8);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a},fromValues:function(t,a,r,u,e,o,i,h){var M=new n(8);return M[0]=t,M[1]=a,M[2]=r,M[3]=u,M[4]=e,M[5]=o,M[6]=i,M[7]=h,M},fromRotationTranslationValues:function(t,a,r,u,e,o,i){var h=new n(8);h[0]=t,h[1]=a,h[2]=r,h[3]=u;var M=.5*e,c=.5*o,s=.5*i;return h[4]=M*u+c*r-s*a,h[5]=c*u+s*t-M*r,h[6]=s*u+M*a-c*t,h[7]=-M*t-c*a-s*r,h},fromRotationTranslation:ia,fromTranslation:function(t,a){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*a[0],t[5]=.5*a[1],t[6]=.5*a[2],t[7]=0,t},fromRotation:function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,a){var r=jt();P(r,a);var u=new n(3);return R(u,a),ia(t,r,u),t},copy:ha,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,a,n,r,u,e,o,i,h){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t},getReal:Ma,getDual:function(t,a){return t[0]=a[4],t[1]=a[5],t[2]=a[6],t[3]=a[7],t},setReal:ca,setDual:function(t,a){return t[4]=a[0],t[5]=a[1],t[6]=a[2],t[7]=a[3],t},getTranslation:function(t,a){var n=a[4],r=a[5],u=a[6],e=a[7],o=-a[0],i=-a[1],h=-a[2],M=a[3];return t[0]=2*(n*M+e*o+r*h-u*i),t[1]=2*(r*M+e*i+u*o-n*h),t[2]=2*(u*M+e*h+n*i-r*o),t},translate:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=.5*n[0],h=.5*n[1],M=.5*n[2],c=a[4],s=a[5],f=a[6],l=a[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*M-e*h+c,t[5]=o*h+e*i-r*M+s,t[6]=o*M+r*h-u*i+f,t[7]=-r*i-u*h-e*M+l,t},rotateX:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return St(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateY:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return Et(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateZ:function(t,a,n){var r=-a[0],u=-a[1],e=-a[2],o=a[3],i=a[4],h=a[5],M=a[6],c=a[7],s=i*o+c*r+h*e-M*u,f=h*o+c*u+M*r-i*e,l=M*o+c*e+i*u-h*r,v=c*o-i*r-h*u-M*e;return Ot(t,a,n),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=s*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-s*e,t[6]=l*o+v*e+s*u-f*r,t[7]=v*o-s*r-f*u-l*e,t},rotateByQuatAppend:function(t,a,n){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],M=a[2],c=a[3];return t[0]=i*o+c*r+h*e-M*u,t[1]=h*o+c*u+M*r-i*e,t[2]=M*o+c*e+i*u-h*r,t[3]=c*o-i*r-h*u-M*e,i=a[4],h=a[5],M=a[6],c=a[7],t[4]=i*o+c*r+h*e-M*u,t[5]=h*o+c*u+M*r-i*e,t[6]=M*o+c*e+i*u-h*r,t[7]=c*o-i*r-h*u-M*e,t},rotateByQuatPrepend:function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],M=n[2],c=n[3];return t[0]=r*c+o*i+u*M-e*h,t[1]=u*c+o*h+e*i-r*M,t[2]=e*c+o*M+r*h-u*i,t[3]=o*c-r*i-u*h-e*M,i=n[4],h=n[5],M=n[6],c=n[7],t[4]=r*c+o*i+u*M-e*h,t[5]=u*c+o*h+e*i-r*M,t[6]=e*c+o*M+r*h-u*i,t[7]=o*c-r*i-u*h-e*M,t},rotateAroundAxis:function(t,n,r,u){if(Math.abs(u)<a)return ha(t,n);var e=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);u*=.5;var o=Math.sin(u),i=o*r[0]/e,h=o*r[1]/e,M=o*r[2]/e,c=Math.cos(u),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*i+f*M-l*h,t[1]=f*c+v*h+l*i-s*M,t[2]=l*c+v*M+s*h-f*i,t[3]=v*c-s*i-f*h-l*M;var b=n[4],m=n[5],d=n[6],p=n[7];return t[4]=b*c+p*i+m*M-d*h,t[5]=m*c+p*h+d*i-b*M,t[6]=d*c+p*M+b*h-m*i,t[7]=p*c-b*i-m*h-d*M,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t},multiply:sa,mul:fa,scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t},dot:la,lerp:function(t,a,n,r){var u=1-r;return la(a,n)<0&&(r=-r),t[0]=a[0]*u+n[0]*r,t[1]=a[1]*u+n[1]*r,t[2]=a[2]*u+n[2]*r,t[3]=a[3]*u+n[3]*r,t[4]=a[4]*u+n[4]*r,t[5]=a[5]*u+n[5]*r,t[6]=a[6]*u+n[6]*r,t[7]=a[7]*u+n[7]*r,t},invert:function(t,a){var n=ma(a);return t[0]=-a[0]/n,t[1]=-a[1]/n,t[2]=-a[2]/n,t[3]=a[3]/n,t[4]=-a[4]/n,t[5]=-a[5]/n,t[6]=-a[6]/n,t[7]=a[7]/n,t},conjugate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t[4]=-a[4],t[5]=-a[5],t[6]=-a[6],t[7]=a[7],t},length:va,len:ba,squaredLength:ma,sqrLen:da,normalize:function(t,a){var n=ma(a);if(n>0){n=Math.sqrt(n);var r=a[0]/n,u=a[1]/n,e=a[2]/n,o=a[3]/n,i=a[4],h=a[5],M=a[6],c=a[7],s=r*i+u*h+e*M+o*c;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*s)/n,t[5]=(h-u*s)/n,t[6]=(M-e*s)/n,t[7]=(c-o*s)/n}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],M=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],p=n[7];return Math.abs(r-s)<=a*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(u-f)<=a*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(e-l)<=a*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(o-v)<=a*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=a*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=a*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(M-d)<=a*Math.max(1,Math.abs(M),Math.abs(d))&&Math.abs(c-p)<=a*Math.max(1,Math.abs(c),Math.abs(p))}});function xa(){var t=new n(2);return n!=Float32Array&&(t[0]=0,t[1]=0),t}function qa(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t}function wa(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t}function ya(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t}function ga(t,a){var n=a[0]-t[0],r=a[1]-t[1];return Math.sqrt(n*n+r*r)}function Aa(t,a){var n=a[0]-t[0],r=a[1]-t[1];return n*n+r*r}function Ra(t){var a=t[0],n=t[1];return Math.sqrt(a*a+n*n)}function Pa(t){var a=t[0],n=t[1];return a*a+n*n}var ja=Ra,za=qa,Ia=wa,Sa=ya,Ea=ga,Oa=Aa,Ta=Pa,Da=function(){var t=xa();return function(a,n,r,u,e,o){var i,h;for(n||(n=2),r||(r=0),h=u?Math.min(u*n+r,a.length):a.length,i=r;i<h;i+=n)t[0]=a[i],t[1]=a[i+1],e(t,t,o),a[i]=t[0],a[i+1]=t[1];return a}}(),Fa=Object.freeze({create:xa,clone:function(t){var a=new n(2);return a[0]=t[0],a[1]=t[1],a},fromValues:function(t,a){var r=new n(2);return r[0]=t,r[1]=a,r},copy:function(t,a){return t[0]=a[0],t[1]=a[1],t},set:function(t,a,n){return t[0]=a,t[1]=n,t},add:function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t},subtract:qa,multiply:wa,divide:ya,ceil:function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t},floor:function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t},min:function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t},max:function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t},round:function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t},scale:function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t},scaleAndAdd:function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t},distance:ga,squaredDistance:Aa,length:Ra,squaredLength:Pa,negate:function(t,a){return t[0]=-a[0],t[1]=-a[1],t},inverse:function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t},normalize:function(t,a){var n=a[0],r=a[1],u=n*n+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=a[0]*u,t[1]=a[1]*u,t},dot:function(t,a){return t[0]*a[0]+t[1]*a[1]},cross:function(t,a,n){var r=a[0]*n[1]-a[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,a,n,r){var u=a[0],e=a[1];return t[0]=u+r*(n[0]-u),t[1]=e+r*(n[1]-e),t},random:function(t,a){a=a||1;var n=2*r()*Math.PI;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t},transformMat2:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[2]*u,t[1]=n[1]*r+n[3]*u,t},transformMat2d:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[2]*u+n[4],t[1]=n[1]*r+n[3]*u+n[5],t},transformMat3:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[3]*u+n[6],t[1]=n[1]*r+n[4]*u+n[7],t},transformMat4:function(t,a,n){var r=a[0],u=a[1];return t[0]=n[0]*r+n[4]*u+n[12],t[1]=n[1]*r+n[5]*u+n[13],t},rotate:function(t,a,n,r){var u=a[0]-n[0],e=a[1]-n[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+n[0],t[1]=u*o+e*i+n[1],t},angle:function(t,a){var n=t[0],r=t[1],u=a[0],e=a[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(n*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,a){return t[0]===a[0]&&t[1]===a[1]},equals:function(t,n){var r=t[0],u=t[1],e=n[0],o=n[1];return Math.abs(r-e)<=a*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-o)<=a*Math.max(1,Math.abs(u),Math.abs(o))},len:ja,sub:za,mul:Ia,div:Sa,dist:Ea,sqrDist:Oa,sqrLen:Ta,forEach:Da});t.glMatrix=e,t.mat2=c,t.mat2d=b,t.mat3=w,t.mat4=S,t.quat=oa,t.quat2=pa,t.vec2=Fa,t.vec3=K,t.vec4=Pt,Object.defineProperty(t,"__esModule",{value:!0})});
		el.appendChild(els);
		me._glmatrix_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._glmatrix_code.ggUpdatePosition=function (useTransition) {
		}
		me._snow_effect.appendChild(me._glmatrix_code);
		el=me._snow_code=document.createElement('div');
		els=me._snow_code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="snow_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
// you can modify these...
var snowOnLoad = true;
var snowFlakeCount = 3000;
var snowFlakeSize = 0.006;
var snowFlakeSpeed = 0.0010;
var snowFlakeWindSpeed = 0.0;
var snowFlakeWindDirection = 0;
var snowFlakeYOffset = 0.5; // move the snowfield up to have a "floor"

// to start and stop the effect, you can use a 'Go to URL' action and put the following piece of code into the URL field: "javascript: startSnow();" or "javascript: stopSnow();"

var snowShaderProgram;
var snowFlakeTexture;
var snowInitialized = false;
var snowListenerAdded = false;
var snowAlpha=0;

function snowInitShader() {
    var gl = player.getWebGlContext();
    var hs;
    var snowVertexShader;
    var snowFragmentShader;
    
    snowVertexShader = gl.createShader(gl.VERTEX_SHADER);
    hs = 'precision mediump float;';
    hs += "attribute vec3 aVertexPosition;\n";
    hs += "attribute vec2 aCornerPosition;\n";
    hs += "uniform mat4 uMVMatrix;\n";
    hs += "uniform mat4 uPMatrix;\n";
    hs += "uniform vec2 uFlakeScale;\n";
    hs += "uniform vec3 uTime;\n";
    hs += "uniform vec3 uOffset;\n";
    hs += "uniform float uAlpha;\n";
    hs += "varying float vAlpha;\n";
    hs += "varying vec2 vTextureCoord;\n";
    hs += "void main(void) {\n";
    hs += " vec3 fPos=mod(aVertexPosition+uTime,1.0)*2.0-1.0;";
    hs += " vAlpha = uAlpha*min(1.0,10.0*(1.0-abs(fPos.y)));\n";
    hs += " gl_Position = uPMatrix * uMVMatrix * vec4((fPos+uOffset), 1.0);\n";
    hs += " gl_Position.xy += (aCornerPosition-0.5)*uFlakeScale;\n";
    hs += " vTextureCoord = aCornerPosition;\n";
    hs += "}\n";

    gl.shaderSource(snowVertexShader, hs);
    gl.compileShader(snowVertexShader);

    if (!gl.getShaderParameter(snowVertexShader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(snowVertexShader));
        snowVertexShader = null;
    }
    
    snowFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    hs = 'precision mediump float;';
    hs += "varying vec2 vTextureCoord;\n";
    hs += "uniform sampler2D uSampler;\n";
    hs += "varying float vAlpha;\n";
    hs += "void main(void) {\n";
    hs += " gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
    hs += " gl_FragColor.a*=vAlpha;\n";
    hs += "}\n";
    
    gl.shaderSource(snowFragmentShader, hs);
    gl.compileShader(snowFragmentShader);

    if (!gl.getShaderParameter(snowFragmentShader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(snowFragmentShader));
        snowFragmentShader = null;
    }
    
    snowShaderProgram = gl.createProgram();
    gl.attachShader(snowShaderProgram, snowVertexShader);
    gl.attachShader(snowShaderProgram, snowFragmentShader);
    gl.linkProgram(snowShaderProgram);
    if (!gl.getProgramParameter(snowShaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialize snow shaders!");
    }
    snowShaderProgram.vertexPositionAttribute = gl.getAttribLocation(snowShaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    snowShaderProgram.cornerPositionAttribute = gl.getAttribLocation(snowShaderProgram, "aCornerPosition");
    gl.enableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    snowShaderProgram.pMatrixUniform = gl.getUniformLocation(snowShaderProgram, "uPMatrix");
    snowShaderProgram.mvMatrixUniform = gl.getUniformLocation(snowShaderProgram, "uMVMatrix");
    snowShaderProgram.samplerUniform = gl.getUniformLocation(snowShaderProgram, "uSampler");
    snowShaderProgram.flakeScaleUniform = gl.getUniformLocation(snowShaderProgram, "uFlakeScale");
    snowShaderProgram.timeUniform = gl.getUniformLocation(snowShaderProgram, "uTime");
    snowShaderProgram.offsetUniform = gl.getUniformLocation(snowShaderProgram, "uOffset");
    snowShaderProgram.alphaUniform = gl.getUniformLocation(snowShaderProgram, "uAlpha");
}

var snowFlakeArray=[];
var snowFlakeBuffer;

function snowInitTexture() {
    var gl = player.getWebGlContext();
    snowFlakeTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, snowFlakeTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, skin._snowflake__img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

function initSnowFlakes() {
    // The corners are two byte packed into one short, they are unpacked and normalized in the attributes
    // This way one vertex is only 8 bytes
    var corners=[0xff00,0x0000,0xffff,0x0000,0x00ff,0xffff]; 
    for (i = 0; i < snowFlakeCount; i++) {
        var snowFlake = {x: Math.random(),
                         y: Math.random(),
                         z: Math.random()};
        var j=0;
        for(j=0;j<6;j++) {
            snowFlakeArray.push(Math.round((snowFlake.x)*0xffff));
            snowFlakeArray.push(Math.round((snowFlake.y)*0xffff));
            snowFlakeArray.push(Math.round((snowFlake.z)*0xffff));
            snowFlakeArray.push(corners[j]);
        }
    }
}

function snowInitWebGL() {
    var gl = player.getWebGlContext();

    snowFlakeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, snowFlakeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Uint16Array(snowFlakeArray), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    if (skin._snowflake__img.complete) {
        snowInitTexture();
    } else {
        skin._snowflake__img.onload = function() {
           snowInitTexture();
        }
    }
}

var mvMatrix = skin.glMatrix.mat4.create();
var mvPreMatrix = skin.glMatrix.mat4.create();
var pMatrix = skin.glMatrix.mat4.create();
var tick=0;

function paintSnow() {
    if (!player.getIsLoaded()) false;
    var mat4=skin.glMatrix.mat4;
    var gl = player.getWebGlContext();
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);

    gl.useProgram(snowShaderProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, snowFlakeBuffer);
    gl.enableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    gl.enableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    gl.vertexAttribPointer(snowShaderProgram.vertexPositionAttribute, 3, gl.UNSIGNED_SHORT, true, 8, 0);
    gl.vertexAttribPointer(snowShaderProgram.cornerPositionAttribute, 2, gl.UNSIGNED_BYTE, true, 8, 6);
	
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, snowFlakeTexture);

    var viewerSize = player.getViewerSize();
    var viewerAr = viewerSize['width'] / viewerSize['height'];
    var d2r = Math.PI/180;
    var pan = player.getPan() * d2r;
    var tilt = player.getTilt() * d2r;
    var fov =  Math.min(150.0, player.getVFov()) * d2r;
    mat4.identity(pMatrix);
    mat4.perspective(pMatrix, fov, viewerAr, 0.01, 100.0);
    gl.uniformMatrix4fv(snowShaderProgram.pMatrixUniform, false, pMatrix);

    mat4.identity(mvPreMatrix);
    mat4.rotateX(mvPreMatrix, mvPreMatrix, -tilt);
    mat4.rotateY(mvPreMatrix, mvPreMatrix, -pan);
    gl.uniformMatrix4fv(snowShaderProgram.mvMatrixUniform, false, mvPreMatrix);
    gl.uniform2f(snowShaderProgram.flakeScaleUniform,snowFlakeSize/(viewerAr*Math.tan(fov/2.0)),-snowFlakeSize/Math.tan(fov/2.0));
    gl.uniform3f(snowShaderProgram.offsetUniform,0,snowFlakeYOffset,0);
    snowAlpha=Math.min(1,snowAlpha+0.01);
    gl.uniform1f(snowShaderProgram.alphaUniform,snowAlpha);
    gl.uniform3f(snowShaderProgram.timeUniform,(1.0+tick*snowFlakeWindSpeed*Math.sin(d2r*snowFlakeWindDirection)) % 1.0,
    (1.0-tick*snowFlakeSpeed) % 1.0,
    (1.0+tick*snowFlakeWindSpeed*Math.cos(d2r*snowFlakeWindDirection)) % 1.0);
    tick++;
    // draw all flakes at once
    gl.drawArrays(gl.TRIANGLES, 0, 6*snowFlakeCount);
    
    gl.disable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
    gl.disableVertexAttribArray(snowShaderProgram.vertexPositionAttribute);
    gl.disableVertexAttribArray(snowShaderProgram.cornerPositionAttribute);
    player.requestRedraw();
}

function startSnow() {
    if (!player.getWebGlContext) return;
    if (!snowInitialized) {
        initSnowFlakes();
        snowInitShader();
        snowInitWebGL();
        snowInitialized = true;
    }
    if (!snowListenerAdded) {
        player.addListener('renderframe', paintSnow);
        snowListenerAdded = true;
    }
    player.requestRedraw();
}

function stopSnow() {
    if (!player.getWebGlContext) return;
    if (snowListenerAdded) {
        player.removeEventListener('renderframe', paintSnow);
        snowListenerAdded = false;
    }
}

if (snowOnLoad) {
    player.addListener("webglready", function() {
        startSnow();
    });
};
		el.appendChild(els);
		me._snow_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._snow_code.ggUpdatePosition=function (useTransition) {
		}
		me._snow_effect.appendChild(me._snow_code);
		me.divSkin.appendChild(me._snow_effect);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._gallery_close=document.createElement('div');
		els=me._gallery_close__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_close';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAfCAYAAABgfwTIAAACxElEQVRYhe3XX2iXVRjA8c/WpsLUvBqLMC+8Cc2BiBCYA0ELoqVhF6GbRo0mVpalktKCWpRCMUEFxaSoQHYpUohifyhiumThyilj0ARBhW4E/9GcXTxnOHL7/d7fu5Ve7Ll6z3nPe57v+/w9p+zS/jb3m5Tfa4CRZAIqq1SM9qK66c1avIy/8AXOj4O+KXgFtTh4+bOdx0uCwtt4DtMwE5twBbfHALUFGzEDczEiVCH3fYJj6bkBe1CTE2Y6PsBrCehnvDva4kKW6hbWuoFVWIlBvI++EoBqsB5voQrfoQW/5IGCP/GRcNlqNOIWtuNcBqBqvOqOVX4UFhsVKAsU/IEPMRn1eFG4/T30F/iuSlh6i/iRLmwrBpQVCs7iDTyAZ7AmKd2Ai8Ktw2Uydo'+
			'hMg1Noxm9ZlJVSpy6K2DiUxsuxV2TmcJkmkqQBlcJlzfg9q6JSoAYT2CZ8Laz8FHZhTlozU7j6JTwosvcdYaGBrIqyum+49LsT/I0izi6hHY8Ll8L3aEVHqQryQEFPUjgFz6IpAVYIi/wqLHQyz+Z5oaAXr+MmVmBqAvpJlIGevBuPtSHfSiBDrec2/haguWUsULPRhhdExhHZtgSfY8H/DfWoaBUNIq7aRcX/NIHViaq/KM/meWLqEWwVBXQAnQmmEyfwsIixpcKdLWn+P4Eqx0MJ4Pk014l1OJ3GfeJoUiEq/zJR3TemNZlqVSnum4V9opLDD6JSn/nXussi+w6ncR0OYD7KxhPqMewWf16Jo6IOdbv77wcT2GZ8lebmJbAnxgtqvjhDPY1J4jzUqnic9ONjfCka+Tzh+ieLKSwWU7UJqF7Un1PCQp3FNk7SI3rh'+
			'UOVfmPYrx5HRPipkqcXCZfVp3CWOIlmBhqRXNPFvcV30xzaszQN1DRfSc4e42eRtHRdEln6TxlcVuICUTVzbM8oEVFb5B1X7m4IpIywwAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_close.style.transition='';
				if (me._gallery_close.ggCurrentLogicStateVisible == 0) {
					me._gallery_close.style.visibility=(Number(me._gallery_close.style.opacity)>0||!me._gallery_close.style.opacity)?'inherit':'hidden';
					me._gallery_close.ggVisible=true;
				}
				else {
					me._gallery_close.style.visibility="hidden";
					me._gallery_close.ggVisible=false;
				}
			}
		}
		me._gallery_close.logicBlock_visible();
		me._gallery_close.onclick=function (e) {
			player.setVariableValue('gallery_show_hide', false);
			player.setVariableValue('gallery_pictures', Number("0"));
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			me._gallery_pause.style.transition='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style.transition='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
		}
		me._gallery_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._gallery_close);
		el=me._gallery_controler=document.createElement('div');
		el.ggId="gallery_controler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_controler.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_controler.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_controler.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_controler.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_controler.style.transition='';
				if (me._gallery_controler.ggCurrentLogicStateVisible == 0) {
					me._gallery_controler.style.visibility=(Number(me._gallery_controler.style.opacity)>0||!me._gallery_controler.style.opacity)?'inherit':'hidden';
					me._gallery_controler.ggVisible=true;
				}
				else {
					me._gallery_controler.style.visibility="hidden";
					me._gallery_controler.ggVisible=false;
				}
			}
		}
		me._gallery_controler.logicBlock_visible();
		me._gallery_controler.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_timer.ggIsActive=function() {
			return (me._gallery_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer.ggTimestamp) / me._gallery_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_timer.ggActivate=function () {
			me._gallery_forward.onclick.call(me._gallery_forward);
		}
		me._gallery_timer.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_timer);
		el=me._gallery_fx=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_fx";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_fx.ggIsActive=function() {
			return (me._gallery_fx.ggTimestamp + me._gallery_fx.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_fx.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style.transition='none';
			} else {
				me._gallery_picture.style.transition='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='0';
			me._gallery_picture.style.visibility='hidden';
			me._gallery_picture.ggSubElement.src='';
		}
		me._gallery_fx.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style.transition='none';
			} else {
				me._gallery_picture.style.transition='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='1';
			me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
			me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
		}
		me._gallery_fx.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_fx);
		el=me._gallery_picture_preload=document.createElement('div');
		els=me._gallery_picture_preload__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._gallery_picture_preload.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._gallery_picture_preload.ggSubElement.setAttribute('alt', player._(me._gallery_picture_preload.ggAltText));
			if (me._gallery_picture_preload.ggUpdateImageInternal) me._gallery_picture_preload.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._gallery_picture_preload.ggSubElement.style.width = '0px';
			me._gallery_picture_preload.ggSubElement.style.height = '0px';
			me._gallery_picture_preload.ggSubElement.src='';
			me._gallery_picture_preload.ggSubElement.src=me._gallery_picture_preload.ggText;
		}
		el.ggText=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="gallery_picture_preload";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._gallery_picture_preload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_picture_preload.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload.style.transition='';
				if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload.ggText="gallery/img_01.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload.ggText="gallery/img_02.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload.ggText="gallery/img_03.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload.ggText="gallery/img_04.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload.ggText="gallery/img_05.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload.ggText="gallery/img_06.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload.ggText="gallery/img_07.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload.ggText="gallery/img_08.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture_preload.ggText="gallery/img_09.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture_preload.ggText="gallery/img_10.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture_preload.ggText="gallery/img_11.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture_preload.ggText="gallery/img_12.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture_preload.ggText="gallery/img_13.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture_preload.ggText="gallery/img_14.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else {
					me._gallery_picture_preload.ggText="";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
			}
		}
		me._gallery_picture_preload.logicBlock_externalurl();
		me._gallery_picture_preload.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload.clientWidth;
			var parentHeight = me._gallery_picture_preload.clientHeight;
			var img = me._gallery_picture_preload__img;
			var aspectRatioDiv = me._gallery_picture_preload.clientWidth / me._gallery_picture_preload.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._gallery_picture_preload.ggScrollbars || currentWidth < me._gallery_picture_preload.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._gallery_picture_preload.ggScrollbars || currentHeight < me._gallery_picture_preload.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._gallery_controler.appendChild(me._gallery_picture_preload);
		el=me._gallery_pause=document.createElement('div');
		els=me._gallery_pause__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_pause';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB3UlEQVRIib2WPWsUYRDHf7eIxEONGrCwCMbGg4gcWmiRhNhZRST5QGIaP0HUoJ9ABbGxNi+SwkKwUFtfCgvNiWAMQn4WO0s26+3dbXKbgWF2np35/59n2WdmGip95DIwD8wALeAMIPAd+ACsAs+Adz1R1DKdVdcdXFbU6TK8botN9YG6EwA/1IfqLXUi3jfVC+ptdVntROxO5I70IxpTNyJpS72jnuhx6kxPqovqn8h9rY6WETVzJF/VawMQFPWq+ikwNvInywc9joAv6vg+SDIdV78F1lKR6EZ83619nqSo19XtwJzKE63FDu4NgSTTxcB8lRG1Y6GjnuqRmEmZX9RRd//GyQRYiCv1HOj0u70V5CfwJJ7nE2AqnBdDJMnkZdjpBLgYzpsaiN6GbT'+
			'XUv8ARYATY7pGUFcVGid9NjgO/gN9JbvFotc1Wk4S0CgOcqwH/bNjNhLTUA0zWQNQO+z4B1sKZq4HoZtjV/IXdrPHCXjqMErSSlaBiUW0PgeSKaW/6r6hi2ik17ScHbROfA+t+tp4POLTGhwdr5Xfd28pP52O6JTXVR+4dTpbUOfW8eixiJkwHlmXTP1YrDCd5nbX6uDVThtfQgQbIBdJ20gLG2B0gP5IOkE/pM0D+Az2OdbOX2biiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pause.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			me._gallery_pause.style.transition='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style.transition='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
		}
		me._gallery_pause.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_pause);
		el=me._gallery_play=document.createElement('div');
		els=me._gallery_play__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_play';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACsElEQVRIiaWW24tPURTHP7+fGeTeCJlhQi5jMnlwiXEdUZSahPAHyIvy5FK8kAehvMgt8qJ4UCh5UCgNuaZRHmikaFwe3JIYg4+HvX91OnN+lzGrdmefvdZe373WXpeNSpmxVD2i1sf/PwZ6qV5SN6tjy+mpojjVA63AEmAOcBF4DeQjfxJQB4wBZgI3gCvA3yxlWUCDgTXABmB1XOsEquP8EDAAGA5MBBYA84GNQAtwEnjWQ2uGmYPVjuieu+pudblak5Lrr05WN6lH1c9xz211UVpvMZ9uVw+qTRXcYWGsVx9GsPY0WFJwrdqo5nuhPD1mqzcj2AN1ahpocjT9ljqyD0CoM9XHEeyYOjQJdC5xitF9BEJtVd+p7+McDPnRpf5SZ6m5IpvP2zMgio'+
			'0qQ4ConlQnYIgqDdHSr8Rm1U51ZYVga9Sv6lN1Rx4YAjwHziaSsRjVAteA4zHfStET4DHQACxDrVUXq6NKuK1gUZI61OYy7jsTZd/05oKz6Ld6wJC8WXsOR7nuPNAcS8fAMq7Ion7ATuB0Ef7v+K1KnnRGL12XtGhAhnzOkEeqn/LA/Yg6PZ6wUnoJLAV2AV0Z/BpgLKGad+SBtshYUSGQwClCa2grIdcINAEfgHuoLWq3+kUdU8Z1b9VVFQROXt0Z91xSlxcYjwzJ2Fzini5YeWVoUNsMFWebmiswmhPW9KV6Y+hnJ6I11w0Fu0c/qjYk7/j/BByk7okg39WNBV5acJ76TX2hzjU7bIvdyVB1vyHkfxpqKMWAphi6419DgOyOLk1bl4tr1dFVs6ObVH+o+0wV6KzTjVAvR9NV76h1Cf44dZq6UN1qaJaFJ9hHdUuW'+
			'1aXcsc7wdturDkusp+mPIbrOGS8+a+TUUslZTXiS/Yzf7pjpOeAV0E5oG1eBd6UU/QO1GWEzlRP7cgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_play.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("2") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			me._gallery_play.style.transition='none';
			me._gallery_play.style.visibility='hidden';
			me._gallery_play.ggVisible=false;
			me._gallery_pause.style.transition='none';
			me._gallery_pause.style.visibility=(Number(me._gallery_pause.style.opacity)>0||!me._gallery_pause.style.opacity)?'inherit':'hidden';
			me._gallery_pause.ggVisible=true;
		}
		me._gallery_play.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_play);
		el=me._gallery_forward=document.createElement('div');
		els=me._gallery_forward__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_forward';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAA9klEQVQ4jYXTMS4FURQG4H+GWqulF4VSJBZAYgEoFHqxB7ECeZHniWAPKgpqK9ColDoN8j7Fm4kxGTN/coub3C/3nHNzg2AHd1io9r0r2MWXWZ6xOITKJJtJ5jPLWpKnJEvpCwqc+ps3rPSVV69jTBvwHetDKNhv9Acf2BpCwXZ1uM4n9oZQsFGVV2eKoyEUrFYDaeYExdBDLuOlBUdl73skr0keG/vvJPd9txQ4a93y0NdTF7jF3H+owKgFbmrQhQqct8B1E7RRgXELXLVBExW4aIHLLlCjEpMOUP4zpKSjpEkfqNGB3y8xrkod/O7BYTW1QYD8AJqfMUdibTYsAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_forward";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_forward.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_forward.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("1"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("10.00"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._gallery_forward.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_forward);
		el=me._gallery_back=document.createElement('div');
		els=me._gallery_back__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_back';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAA/klEQVQ4jY3TMUoDQRQA0L/Z1La2WtiJBxDxAgoeQFJY2eoh9AYSJURUvIMgaGHtDWysUqZLY8RnkV0Yh911P2zxmf9m/szsBKLHt4YnHCH6gHW8W8USx8Pojo2IeI6IrSofRsR+1wrbmPkblyjawC7mSfEPzuvxJnCARQKWGKU1ORjhKwELHOYTp8lZ1UYdc+w1tR8ocJFteIadtkMKjDPwgc02gBhExEtEfCd38xYRn523V+nXbLWrqu3W9gIlHjM4boNpUuKhD8xnKXGfwZscNvVc4i6DkxS2HWuJ2wxOMehCURVMm+B/D7AJTvq83KLaE6t/86QPquE1ThG/c2cxMlOxYgsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_back.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("9.00"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("10.00"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._gallery_back.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_back);
		el=me._gallery_counter_total=document.createElement('div');
		els=me._gallery_counter_total__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter_total";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gallery_counter_total.ggUpdateText=function() {
			var params = [];
			var hs = player._("\/ 10", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery_counter_total.ggUpdateText();
		el.appendChild(els);
		me._gallery_counter_total.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter_total.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_counter_total);
		el=me._gallery_counter=document.createElement('div');
		els=me._gallery_counter__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : -62px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gallery_counter.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery_counter.ggUpdateText();
		el.appendChild(els);
		me._gallery_counter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateText = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("14")))
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter.style.transition='';
				if (me._gallery_counter.ggCurrentLogicStateText == 0) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 1) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("2", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 2) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("3", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 3) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 4) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("5", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 5) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("6", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 6) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("7", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 7) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("8", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 8) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("9", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 9) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("10", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 10) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("11", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 11) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("12", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 12) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("13", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 13) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("14", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 14) {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("15", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else {
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._gallery_counter.ggUpdateText();
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
			}
		}
		me._gallery_counter.logicBlock_text();
		me._gallery_counter.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_counter);
		me.divSkin.appendChild(me._gallery_controler);
		el=me._gallery_picture=document.createElement('div');
		els=me._gallery_picture__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._gallery_picture.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._gallery_picture.ggSubElement.setAttribute('alt', player._(me._gallery_picture.ggAltText));
			if (me._gallery_picture.ggUpdateImageInternal) me._gallery_picture.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._gallery_picture.ggSubElement.style.width = '0px';
			me._gallery_picture.ggSubElement.style.height = '0px';
			me._gallery_picture.ggSubElement.src='';
			me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
		}
		el.ggText=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="gallery_picture";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 5.21%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_picture.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_picture.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_picture.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_picture.style.transition='';
				if (me._gallery_picture.ggCurrentLogicStateVisible == 0) {
					me._gallery_picture.style.visibility=(Number(me._gallery_picture.style.opacity)>0||!me._gallery_picture.style.opacity)?'inherit':'hidden';
					me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
					me._gallery_picture.ggVisible=true;
				}
				else {
					me._gallery_picture.style.visibility="hidden";
					me._gallery_picture.ggSubElement.src='';
					me._gallery_picture.ggVisible=false;
				}
			}
		}
		me._gallery_picture.logicBlock_visible();
		me._gallery_picture.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == Number("0")))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("1")))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("2")))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("3")))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("4")))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("5")))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("6")))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("7")))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("8")))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("9")))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("10")))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("11")))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("12")))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("13")))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == Number("14")))
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture.style.transition='';
				if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture.ggText="gallery/img_00.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture.ggText="gallery/img_01.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture.ggText="gallery/img_02.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture.ggText="gallery/img_03.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture.ggText="gallery/img_04.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture.ggText="gallery/img_05.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture.ggText="gallery/img_06.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture.ggText="gallery/img_07.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture.ggText="gallery/img_08.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture.ggText="gallery/img_09.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture.ggText="gallery/img_10.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture.ggText="gallery/img_11.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture.ggText="gallery/img_12.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture.ggText="gallery/img_13.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture.ggText="gallery/img_14.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else {
					me._gallery_picture.ggText="";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
			}
		}
		me._gallery_picture.logicBlock_externalurl();
		me._gallery_picture.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture.clientWidth;
			var parentHeight = me._gallery_picture.clientHeight;
			var img = me._gallery_picture__img;
			var aspectRatioDiv = me._gallery_picture.clientWidth / me._gallery_picture.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._gallery_picture.ggScrollbars || currentWidth < me._gallery_picture.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._gallery_picture.scrollLeft=currentWidth / 2 - me._gallery_picture.clientWidth / 2;
			}
			if (!me._gallery_picture.ggScrollbars || currentHeight < me._gallery_picture.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._gallery_picture.scrollTop=currentHeight / 2 - me._gallery_picture.clientHeight / 2;
			}
		}
		me.divSkin.appendChild(me._gallery_picture);
		el=me._sound_on_off=document.createElement('div');
		el.ggId="sound_on_off";
		el.ggDx=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((34px + 0px) / 2) + 143px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_off.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sound_on_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_sound_off';
		hs='data:image/png;base64,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'+
			'8EoMC0bRqBuV0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_off.onclick=function (e) {
			player.setVolume("_main",0);
			me._sound_off.style.transition='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
			me._sound_on.style.transition='none';
			me._sound_on.style.visibility=(Number(me._sound_on.style.opacity)>0||!me._sound_on.style.opacity)?'inherit':'hidden';
			me._sound_on.ggVisible=true;
		}
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on_off.appendChild(me._sound_off);
		el=me._sound_on=document.createElement('div');
		el.ggId="sound_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on.onclick=function (e) {
			me._sound_on.style.transition='none';
			me._sound_on.style.visibility='hidden';
			me._sound_on.ggVisible=false;
			me._sound_off.style.transition='none';
			me._sound_off.style.visibility=(Number(me._sound_off.style.opacity)>0||!me._sound_off.style.opacity)?'inherit':'hidden';
			me._sound_off.ggVisible=true;
		}
		me._sound_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_on_5=document.createElement('div');
		els=me._sound_on_5__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("5")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_5.style.transition='';
				if (me._sound_on_5.ggCurrentLogicStateVisible == 0) {
					me._sound_on_5.style.visibility=(Number(me._sound_on_5.style.opacity)>0||!me._sound_on_5.style.opacity)?'inherit':'hidden';
					me._sound_on_5.ggVisible=true;
				}
				else {
					me._sound_on_5.style.visibility="hidden";
					me._sound_on_5.ggVisible=false;
				}
			}
		}
		me._sound_on_5.logicBlock_visible();
		me._sound_on_5.onclick=function (e) {
			player.changeVolume("_main",1);
		}
		me._sound_on_5.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_5);
		el=me._sound_on_4=document.createElement('div');
		els=me._sound_on_4__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAQYElEQVR4nO3de/RlZV3H8fegC6EFCzG5yBhXIUUYsDENCCHBhFEyQkdwrYhLgNwabjVcLDatRMBK7spNsYgURGmBYgY0YiphEzSA3AkJLMTy0jIRyemP79n9juPvN3Muz97PPud5v9Y666zF/H7P/nL5fnj2fvZ+9ryVK1ciqUxr5S5AUj4GgFQwA0AqmAEgFcwAkApmAEgFMwCkghkAUsEMAKlgBoBUMANAKpgBIBXMAJAKZgBIBTMApIIZAFLBDACpYAaAVDADQCqYASAVzACQCmYASAUzAKSCGQBSwQwAqWAGgFQwA0AqmAEgFcwAkApmAEgFMwCkghkAUsEMAKlgBoBUMANAKpgBIBXMAJAKZgBIBTMApIIZAFLBDACpYAaAVDADQCrYi3MXoI'+
			'nxSmBbYDvgtcCOwL3A/cDDwCPAU9mq00jmrVy5MncN6q75wAG9z5sG+Pk7gBt6n6cbrEuJGACazSJmGn+DEX7/e8wEwecS1qXEDAD1WwCcDByccMzzgRMTjqeEDAABrE80/snAeg2Mfw+wB/D9BsbWGAwAHUI0/g4tHOv1wPIWjqMBGQDl2oNo/P1aPu68lo+n1fA+gPJsAVwILKP95ge4LMMxNQdnAGU5kfi//vzMdfwecFHmGoQBUIr9icbfLXchfXYE7stdROk8BZhuOwN/CXyabjU/wLtzFyBnANPqpcws662buZa5PEKsPDyfu5CSOQOYPocBXwbeR3ebH+K5AmcBmRkA0+PNwGeBq4DtM9cyKAMgM58GnHxbEVP9Y3MXMoIFuQsondcAJtc8Zs7zN81cyzg2Ab6Vu4hSOQOYTAcQjb9L7kIS+EUMgGy8BjBZ'+
			'FgLXAp9iOpofYoMRZWIATIaXAe8nru4flLkWgEeBKtFYr0w0jkZgAHTfEcBXgNOBl2SuBeAoYglPU8BrAN21N3Gev0/uQnouBo7PXYTSMgC651VE4783dyE9y4DfAZ7MXIcaYAB0x4uYWdbbOHMtAN8mGt89/aaYAdANi4nGf0PuQnpOBc7NXYSaZwDk9ctE43fllthriIuOz+UuRO0wAPLYiJnpfhf+HdxDTPdX5C5E7erCf3ylOYpo/C4spb1AbAr6V5nrUCYGQHveSjT+W3IX0nMOcFruIpSXAdC87YjGPzJ3IT03E7OQb+YuRPkZAM1Zm5nz/J/PXAvAE8ChxLq+BBgATTmQaPzX5y6k5zjgktxFqHsMgLR+hWj8d+YupOcjxBbcP85diLrJAEhjE2am+114wOofgKNx222tgQEwvmOIxt86dyHAd4HDiW3ApT'+
			'UyAEa3L9H4e+UupOd9xJ4B0sAMgOG9hmj8w3MX0vMJ4ATgmdyFaPIYAINbh5nz/A0z1wJxfn8M8KXchWhy5QqA9YFXAJvN8d1FGwCvy11EzxHAlbmL0ORrMwD2JM6b30HsBKvh/SmwFPhJ7kI0HZoMgC2Jpt8DeDvw8gaPNe0+D5wEPJC7EE2XJgJgS2AJcWFK43mKuIvvb3IXoumUMgDWIZp+CZP9ppquWAqcl7sITbdUAXAI0fg7JxqvZB8lmv/buQvR9Bs3AHYB/ojubF09ye4ETiFe/iG1YpwAOAL4M2JJT6P7AbHf/sdyF6LyjPrgygXA5dj84zoXWA+bX5mMMgO4DXhz6kIKcyNxnv9w7kJUtmED4Bm68dKKSfUQ8PvATbkLkWC4AHgcm38cpxDXTJTflsD2xHsZ7iaC+aGcBTVke+C1xBuY7wbuB57t/4FB'+
			'A+AqYKukpZXjCmK6/53chYh1iJefHDDLny0DzmI69kzcEziz972qC+i7SW+Qi4BHA4elqKowdxDLpEdi83fBAuCHzN78EM3y90TjTLIzib+PPef48yX0PTq+pgDYH7g0SVnleIa4MWoPYm1f3TDoS04rJjcEziTqX5ONgQth9acAuwB/PX5NRTkbOCN3EfoZ5wHzh/j5qvd9VvpSGjNo89eOB+6aKwDWBi4GXjJmUaW4gTjPfyx3IZrVu0b4nar3PQkhMGzz1xbNFQAnAL80cjnluI9o/EGnl2rfLxBX/UdR9b67HAKjNj/AwtkCYHPiQkEb7gduBb5OLDPWn5z2JC6iDOJ4puOq8TTbaMzfr3rfXQyBcZofYNPZAmAJsTVXU1YQy4p140tNuhf4EeOdzla97y6FwLjND/DVVQPgDTS3kcc3iOsKFwPPNXQMaVU/Bp'+
			'YDu445TtX77kIIpGh+gBWrLgMuoZk321wDvJHY087mV9s+mGicivxLhKma/wng0v5m3wd4T4KBV3Ux8Nu4b73yuRE4P9FYFflCIFXzQ8xknug/Bdg70cD93oZXyNUNJxL3AoyyJLiqqvfd5ulAyuavgKvhp6f7qQNgMTa/umUxcH2isSramwmkbv7/D646ABYAOyU6AMRGF6n+QUspTVoINNb8MBMAKff0Ww6cmnA8KbVJCYFGmx9mAmDfRAeB2CpM6rquh0DjzQ8RAOsy96ODw1qOAaDJ0dUQaKX5IQJg90QHAvh4wrGkNnQtBFprfogAGOYxyTW5MeFYUlu6EgKtNj9EAKS67/8W4N8SjSW1LXcItN78kDYA/iLROFIuuUIgS/ND2lOARxKNI+XUdghka35IOwNw40tNi7ZCIGvzQ9oZgAGgadJ0CGRvfnAGIK1O'+
			'UyHQieaH8V8PLk27xcB1pH2KsFrNzww73lhPJDax+Yc0bVLPBFKNM/bjyAaANJiUITCuikR7ERgA0uC6EAIVCTciMQCk4eQMgYrEuxAZANLwcoRARQNbkBkA0mjaDIGKhvYfNACk0bURAhUNbj5qAEjjaTIEKhreedgAkMbXRAhUtLDtuAEgFcwAkMaX6lbhfhUtvHfAAJDG00Tz1yoaDgEDQBpdk81fq2gwBAwAaTRtNH+toqEQMACk4bXZ/LWKBkLAAJCGk6P5axWJQ8AAkAaXs/lrFQlDwACQBtOF5q9VJAoBA0Bas5TNXyUcZ+wQMACk1Uvd/GfRoRBYC/hmklJgw0TjSF3RRPNDh0JgLeDpRIUYAJomTTV/rRMh4AxA+llNN38tewiknAFsnWgcKae2mr+WNQRSzgC6skQijart5q9lC4HUAfCKRGNJbcvV/L'+
			'UsIZDyFADgtxKOJbUld/PXWg+BtYA7Eh0Q4NCEY0lt6Erz11oNgbWA54DPJTrgQuDIRGNJTeta89daC4H6TsCbEh0MDABNhq42f62VEKgDYFmiA0HMAj6WcDwpta43f63xEKgD4EHgrkQHAjgEODvheFIqk9L8tUZDoP9hoNsTHaR2GrBX4jGlcUxa89caC4H+APhiogP0uxU4rIFxpWF9iMls/lrqEDgEfjoAPg9cm+gA/a4CLgE2aWBsaRC/CZyQaKyK9pu/ljIEzgS2XHU/gAuAnyQ6QL9jgH8ETgHWaWB8aXX+INE4Ffmav5YqBLYEjls1AO4Czk8w+Gy2AD5IBMEJwOsaOo7Ub21iZWpcFfmbv5YqBBa+eJa/eAFwILBZggPMZgFxPgbwMPAF4F7g8b6PlMoCIgTGUdGd5q/V9VRjjDFrADxJhMC5Yww8qO16'+
			'n0l1EbCUdHdSKr1/H/P3K7rX/LVxQ+DJufYEPB/45xEHLckOwGeBTwPbZq5Fs3saeGzE363obvPXxjkd+NpcAfA8ceHkhREHLs3+xOnMObkL0ay+MMLvVHS/+WujhsCXV7cr8G3ASSOVU66lwLN470PXHAN8Z4ifr5ic5q8NGwK3AVeuaVvwi4APj1pRoV5O3PvwFWD3zLVoxqIBf65i8pq/NmgIPArsDYO9F+AYmrlLcNrtQuy1cDURCsrrTmI14JI5/nwZ8GtMbvPXziL+PpbN8ecn0ne9at7KlSsHHfhbwEbjVFa4M5iuB6TOJM1adEX7TbcNsTy4APg6cH/ve9osAHYi7sJdAfwL8Ez/D8y2DDiXjYmrqe7+O5r3A4cT1wk+lbmW0j3W+3wmdyENW9H7zGnYV4NtA1w2cjnaGrieeO5ix8y1SCO9G/C9wFGpCy'+
			'nMW4lkvjB3ISrbqC8HvRzYj1jy0uiOB34AHJe7EJVpnLcD3wzsS0xnNbqfI5Zb7wHekrkWFWbc14MvJ0LgUOI/YI1uJ+KOtetw7wS1ZNwAqF1NrHufBvxHojFL9S7in+Gf5C5E0y9VAEC8X+AcIgia2lOgJGcQQXBw7kI0vVIGQO0J4m6jbYjVgusZ7j5szdgE+DhxR+HOmWvRFGoiAGqPE6sFi4GXEfdiX0Tch6zh7A7cDVxJs//OVJhh7gQc1y29D8D6xJuEN5vju4s2IP82ZoczczfheZlr0RRoMwD6/Xfv83Cm449iHeDk3mfDzLWcC/wusISZUJWG5nRycM8R9/PvRjzum9u2xFZkNwPzM9eiCWUADO8B4v++i4hNFXJ7G/AU8Oe5C9HkMQBGdwuxqcKxdGMn4xOB7xM3ZUkDMQDGdymwK/HOgyZeqjKM9YGP'+
			'Av9Emr3wNeUMgDSeITZR3Y1uPOu/kAiBaxl/T3xNMQMgrTuJW3kPIhowt4OAHwGn5y5E3WQANOMTxGzgdOA/M9cCsXrxFPD23IWoWwyA5jwPfIC4PnB55loglgpvAm4HNs9cizrCAGjew8QzEfsAf5e5FogdY7+BuxEJA6BNfwv8OrGl2iOZa4HYjegF4p4GFcoAaN9lxPWBc8n/6rUXAVcQW2K/MXMtysAAyONZ4FTi+sAnM9cC8BpiBeN6YN3MtahFBkBeXwMOBN4N3JW5FoB3Av8D/GHuQtQOA6AbriNmA0uJNzDl9sfAfwHvyF2ImmUAdMf/Es/47wZ8JHMtEI883wh8Cdgqcy1qiAHQPY8CRxNbhHdhy/VfJR52ujR3IUrPAOiuW4kt148EHspcC0QorSSWMTUlDIDuu4K4PnA2cV9/bh/GfR2nxjCvB1d+C4'+
			'ktyQ7KXUhChxLvlVAGzgAmy3LgPcRy3Vcz15LKg7kLKJkzgMk1j5lNSjfNXMs4NsaXzGZjAEy+rYgQODZ3ISN4ApcYs/IUYPL9K/F68b2IXYInyf25CyidATA9bid2CD6ceLhnEnThOYiieQownV7KzPWBrj7c8wiwA7FxijJxBjCdvks80LMrcE3mWubySWz+7JwBlGF/YjawW+5C+uwI3Je7iNI5AyjDZ4h7+k8Cns5cC0CFzd8JzgDKswUxGzg+0/GXEfsSqgMMgHLtQQTBfi0fd17Lx9NqeApQri8Cv0Hci9/WdHzXlo6jATkDEMQ7Betlw/UaGP8mYtuzHzYwtsZgAKjfAiIEDk445lJipyN1kAGg2SwCDuh9Nhjh978H3ND7TNrtyUUxALQ685kJgjcN8PN3MNP4XVhu1BoYABrU5sCriXcIvLr3ebD3eaD3'+
			'/WS26jQSA0AqmMuAUsEMAKlgBoBUMANAKpgBIBXMAJAKZgBIBTMApIIZAFLBDACpYAaAVDADQCqYASAVzACQCmYASAUzAKSCGQBSwQwAqWAGgFQwA0AqmAEgFcwAkApmAEgFMwCkghkAUsEMAKlgBoBUMANAKpgBIBXMAJAKZgBIBTMApIIZAFLBDACpYAaAVDADQCqYASAVzACQCmYASAUzAKSCGQBSwQwAqWAGgFSw/wMlIOKuuMM39wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("4")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_4.style.transition='';
				if (me._sound_on_4.ggCurrentLogicStateVisible == 0) {
					me._sound_on_4.style.visibility=(Number(me._sound_on_4.style.opacity)>0||!me._sound_on_4.style.opacity)?'inherit':'hidden';
					me._sound_on_4.ggVisible=true;
				}
				else {
					me._sound_on_4.style.visibility="hidden";
					me._sound_on_4.ggVisible=false;
				}
			}
		}
		me._sound_on_4.logicBlock_visible();
		me._sound_on_4.onclick=function (e) {
			player.changeVolume("_main",0.8);
		}
		me._sound_on_4.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_4);
		el=me._sound_on_3=document.createElement('div');
		els=me._sound_on_3__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_3.style.transition='';
				if (me._sound_on_3.ggCurrentLogicStateVisible == 0) {
					me._sound_on_3.style.visibility=(Number(me._sound_on_3.style.opacity)>0||!me._sound_on_3.style.opacity)?'inherit':'hidden';
					me._sound_on_3.ggVisible=true;
				}
				else {
					me._sound_on_3.style.visibility="hidden";
					me._sound_on_3.ggVisible=false;
				}
			}
		}
		me._sound_on_3.logicBlock_visible();
		me._sound_on_3.onclick=function (e) {
			player.changeVolume("_main",0.6);
		}
		me._sound_on_3.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_3);
		el=me._sound_on_2=document.createElement('div');
		els=me._sound_on_2__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_2.style.transition='';
				if (me._sound_on_2.ggCurrentLogicStateVisible == 0) {
					me._sound_on_2.style.visibility=(Number(me._sound_on_2.style.opacity)>0||!me._sound_on_2.style.opacity)?'inherit':'hidden';
					me._sound_on_2.ggVisible=true;
				}
				else {
					me._sound_on_2.style.visibility="hidden";
					me._sound_on_2.ggVisible=false;
				}
			}
		}
		me._sound_on_2.logicBlock_visible();
		me._sound_on_2.onclick=function (e) {
			player.changeVolume("_main",0.4);
		}
		me._sound_on_2.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_2);
		el=me._sound_on_1=document.createElement('div');
		els=me._sound_on_1__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_1.style.transition='';
				if (me._sound_on_1.ggCurrentLogicStateVisible == 0) {
					me._sound_on_1.style.visibility=(Number(me._sound_on_1.style.opacity)>0||!me._sound_on_1.style.opacity)?'inherit':'hidden';
					me._sound_on_1.ggVisible=true;
				}
				else {
					me._sound_on_1.style.visibility="hidden";
					me._sound_on_1.ggVisible=false;
				}
			}
		}
		me._sound_on_1.logicBlock_visible();
		me._sound_on_1.onclick=function (e) {
			player.setVolume("_main",0.2);
		}
		me._sound_on_1.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_1);
		el=me._sound_on_0=document.createElement('div');
		els=me._sound_on_0__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_on_0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_on_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_1') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on_0.style.transition='';
				if (me._sound_on_0.ggCurrentLogicStateVisible == 0) {
					me._sound_on_0.style.visibility=(Number(me._sound_on_0.style.opacity)>0||!me._sound_on_0.style.opacity)?'inherit':'hidden';
					me._sound_on_0.ggVisible=true;
				}
				else {
					me._sound_on_0.style.visibility="hidden";
					me._sound_on_0.ggVisible=false;
				}
			}
		}
		me._sound_on_0.logicBlock_visible();
		me._sound_on_0.onclick=function (e) {
			player.setVolume("_main",0);
		}
		me._sound_on_0.ggUpdatePosition=function (useTransition) {
		}
		me._sound_on.appendChild(me._sound_on_0);
		me._sound_on_off.appendChild(me._sound_on);
		me.divSkin.appendChild(me._sound_on_off);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAA9klEQVQ4jYXTMS4FURQG4H+GWqulF4VSJBZAYgEoFHqxB7ECeZHniWAPKgpqK9ColDoN8j7Fm4kxGTN/coub3C/3nHNzg2AHd1io9r0r2MWXWZ6xOITKJJtJ5jPLWpKnJEvpCwqc+ps3rPSVV69jTBvwHetDKNhv9Acf2BpCwXZ1uM4n9oZQsFGVV2eKoyEUrFYDaeYExdBDLuOlBUdl73skr0keG/vvJPd9txQ4a93y0NdTF7jF3H+owKgFbmrQhQqct8B1E7RRgXELXLVBExW4aIHLLlCjEpMOUP4zpKSjpEkfqNGB3y8xrkod/O7BYTW1QYD8AJqfMUdibTYsAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="right";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((14px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right.style.transition='';
				if (me._right.ggCurrentLogicStateVisible == 0) {
					me._right.style.visibility="hidden";
					me._right.ggVisible=false;
				}
				else {
					me._right.style.visibility=(Number(me._right.style.opacity)>0||!me._right.style.opacity)?'inherit':'hidden';
					me._right.ggVisible=true;
				}
			}
		}
		me._right.logicBlock_visible();
		me._right.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._right);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAA/klEQVQ4jY3TMUoDQRQA0L/Z1La2WtiJBxDxAgoeQFJY2eoh9AYSJURUvIMgaGHtDWysUqZLY8RnkV0Yh911P2zxmf9m/szsBKLHt4YnHCH6gHW8W8USx8Pojo2IeI6IrSofRsR+1wrbmPkblyjawC7mSfEPzuvxJnCARQKWGKU1ORjhKwELHOYTp8lZ1UYdc+w1tR8ocJFteIadtkMKjDPwgc02gBhExEtEfCd38xYRn523V+nXbLWrqu3W9gIlHjM4boNpUuKhD8xnKXGfwZscNvVc4i6DkxS2HWuJ2wxOMehCURVMm+B/D7AJTvq83KLaE6t/86QPquE1ThG/c2cxMlOxYgsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left";
		el.ggDx=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((14px + 0px) / 2) - 20px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left.style.transition='';
				if (me._left.ggCurrentLogicStateVisible == 0) {
					me._left.style.visibility="hidden";
					me._left.ggVisible=false;
				}
				else {
					me._left.style.visibility=(Number(me._left.style.opacity)>0||!me._left.style.opacity)?'inherit':'hidden';
					me._left.ggVisible=true;
				}
			}
		}
		me._left.logicBlock_visible();
		me._left.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._left);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_rotate';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACsElEQVRIiaWW24tPURTHP7+fGeTeCJlhQi5jMnlwiXEdUZSahPAHyIvy5FK8kAehvMgt8qJ4UCh5UCgNuaZRHmikaFwe3JIYg4+HvX91OnN+lzGrdmefvdZe373WXpeNSpmxVD2i1sf/PwZ6qV5SN6tjy+mpojjVA63AEmAOcBF4DeQjfxJQB4wBZgI3gCvA3yxlWUCDgTXABmB1XOsEquP8EDAAGA5MBBYA84GNQAtwEnjWQ2uGmYPVjuieu+pudblak5Lrr05WN6lH1c9xz211UVpvMZ9uVw+qTRXcYWGsVx9GsPY0WFJwrdqo5nuhPD1mqzcj2AN1ahpocjT9ljqyD0CoM9XHEeyYOjQJdC5xitF9BEJtVd+p7+McDPnRpf5SZ6m5IpvP2zMgio'+
			'0qQ4ConlQnYIgqDdHSr8Rm1U51ZYVga9Sv6lN1Rx4YAjwHziaSsRjVAteA4zHfStET4DHQACxDrVUXq6NKuK1gUZI61OYy7jsTZd/05oKz6Ld6wJC8WXsOR7nuPNAcS8fAMq7Ion7ATuB0Ef7v+K1KnnRGL12XtGhAhnzOkEeqn/LA/Yg6PZ6wUnoJLAV2AV0Z/BpgLKGad+SBtshYUSGQwClCa2grIdcINAEfgHuoLWq3+kUdU8Z1b9VVFQROXt0Z91xSlxcYjwzJ2Fzini5YeWVoUNsMFWebmiswmhPW9KV6Y+hnJ6I11w0Fu0c/qjYk7/j/BByk7okg39WNBV5acJ76TX2hzjU7bIvdyVB1vyHkfxpqKMWAphi6419DgOyOLk1bl4tr1dFVs6ObVH+o+0wV6KzTjVAvR9NV76h1Cf44dZq6UN1qaJaFJ9hHdUuW'+
			'1aXcsc7wdturDkusp+mPIbrOGS8+a+TUUslZTXiS/Yzf7pjpOeAV0E5oG1eBd6UU/QO1GWEzlRP7cgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate";
		el.ggDx=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rotate.style.transition='';
				if (me._rotate.ggCurrentLogicStateVisible == 0) {
					me._rotate.style.visibility="hidden";
					me._rotate.ggVisible=false;
				}
				else if (me._rotate.ggCurrentLogicStateVisible == 1) {
					me._rotate.style.visibility="hidden";
					me._rotate.ggVisible=false;
				}
				else {
					me._rotate.style.visibility=(Number(me._rotate.style.opacity)>0||!me._rotate.style.opacity)?'inherit':'hidden';
					me._rotate.ggVisible=true;
				}
			}
		}
		me._rotate.logicBlock_visible();
		me._rotate.onclick=function (e) {
			player.startAutorotate(0.06);
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rotate);
		el=me._stop=document.createElement('div');
		els=me._stop__img=document.createElement('img');
		els.className='ggskin ggskin_stop';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB3UlEQVRIib2WPWsUYRDHf7eIxEONGrCwCMbGg4gcWmiRhNhZRST5QGIaP0HUoJ9ABbGxNi+SwkKwUFtfCgvNiWAMQn4WO0s26+3dbXKbgWF2np35/59n2WdmGip95DIwD8wALeAMIPAd+ACsAs+Adz1R1DKdVdcdXFbU6TK8botN9YG6EwA/1IfqLXUi3jfVC+ptdVntROxO5I70IxpTNyJpS72jnuhx6kxPqovqn8h9rY6WETVzJF/VawMQFPWq+ikwNvInywc9joAv6vg+SDIdV78F1lKR6EZ83619nqSo19XtwJzKE63FDu4NgSTTxcB8lRG1Y6GjnuqRmEmZX9RRd//GyQRYiCv1HOj0u70V5CfwJJ7nE2AqnBdDJMnkZdjpBLgYzpsaiN6GbT'+
			'XUv8ARYATY7pGUFcVGid9NjgO/gN9JbvFotc1Wk4S0CgOcqwH/bNjNhLTUA0zWQNQO+z4B1sKZq4HoZtjV/IXdrPHCXjqMErSSlaBiUW0PgeSKaW/6r6hi2ik17ScHbROfA+t+tp4POLTGhwdr5Xfd28pP52O6JTXVR+4dTpbUOfW8eixiJkwHlmXTP1YrDCd5nbX6uDVThtfQgQbIBdJ20gLG2B0gP5IOkE/pM0D+Az2OdbOX2biiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="stop";
		el.ggDx=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._stop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop.style.transition='';
				if (me._stop.ggCurrentLogicStateVisible == 0) {
					me._stop.style.visibility=(Number(me._stop.style.opacity)>0||!me._stop.style.opacity)?'inherit':'hidden';
					me._stop.ggVisible=true;
				}
				else if (me._stop.ggCurrentLogicStateVisible == 1) {
					me._stop.style.visibility="hidden";
					me._stop.ggVisible=false;
				}
				else {
					me._stop.style.visibility="hidden";
					me._stop.ggVisible=false;
				}
			}
		}
		me._stop.logicBlock_visible();
		me._stop.onclick=function (e) {
			player.stopAutorotate();
		}
		me._stop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._stop);
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAVUlEQVRIiWP8////fwbCgBGHOEG9TEQYThGguQUsaHxcQYELEAy6oR9EoxYQBCwMpKccYgDczKEfRKMWEAQsDKhFLrVS1GhZNJIsQK/RcFXiI7jSBwAtAwo17GhJqwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud655\ub300";
		el.ggDx=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 100px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else if (me.__2.ggCurrentLogicStateVisible == 1) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.onclick=function (e) {
			player.enterFullscreen();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin__1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAATUlEQVRIiWP8//8/Aw6ALMFIrhomXKZTC4xaMPAWsDCgpgRKAFZzhkcQ4cpExACCeod+EI1aQBAQm9GIKa6xguERRGR7Hw2M1mgj1QIADuUKNSVb4zoAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucd95\uc18c";
		el.ggDx=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 100px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else if (me.__1.ggCurrentLogicStateVisible == 1) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.onclick=function (e) {
			player.exitFullscreen();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin__0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB3UlEQVRIib2WPWsUURSGnx1E4qJGDVhYBGPjQkQWLbRIQuysIpL8IDGNvyBq0F+ggthYmw9JYSGkiLZ+FBaaFcEYhDwWc4ZMxt3MTjKbA4cz995z3/fe4Z6PhkqJXAVmgSmgBZwDBL4DH4Bl4AWwvi+K2kun1VX7lyV1shdet8mm+kjdCYAf6mP1jjoW6031knpXXVQ74bsTe4fKiEbUtdi0pd5TT+1z60xPq/Pqn9j7Vh3uRdTMkXxVb/RBUNTr6qfAWMvfLO/0NBy+qKMHIMl0VP0WWAtFolvxf7cOeJOi3lS3A3MiT7QSJ3hQA0mm84H5JiNqx0RHPVMj0bC7r3E8AeYipF4CnbLorSA/gWfxPZsAEzF4VSNJJq/DTibA5Ri8GwDR+7CthvoXOA'+
			'YMAdsFx9JEWJBGYXwS+AX8TnKTxyuCVpKENAsDXOiy3qioRTkfdjMhTfUA43WcvCDtsBsJsBKDmQEQ3Q67nA/YzQEG7JWjSEFLWQoqJtV2DSTXTGvTf0kV00qpaT05bJn4HFgPs/m8w5EVPjxcKb/v3lJ+Nu/TbVNTfeLe5mRBnVEvqifCZ8y0YVk0fbFaoTnJ67TV262pXngN7auBnCMtJy1ghN0G8iNpA/mckgbyH4vCbMe4wxXmAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c8\uc774\ub108\uc2a4";
		el.ggDx=-60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) - 60px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
				else {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.onmousedown=function (e) {
			me.elementMouseDown['_0']=true;
		}
		me.__0.onmouseup=function (e) {
			me.elementMouseDown['_0']=false;
		}
		me.__0.onmouseout=function (e) {
			me.elementMouseDown['_0']=false;
		}
		me.__0.ggCurrentLogicStateVisible = -1;
		me.__0.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['_0']) {
				player.changeFovLog(1,true);
			}
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__0);
		el=me.__=document.createElement('div');
		els=me.____img=document.createElement('img');
		els.className='ggskin ggskin__';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB40lEQVRIib2WPWsUURSGnx1E4qJGDVhYBGPjQkQWLbRIQuysIpL8IDGNvyBq0F+ggthYmw9JYSGkiLZ+FBaaFcEYhDwWc4ZMxtnMbDabA4cz9973vu/cYe45p6FSYVeBWWAKaAHnAIHvwAdgGXgBrO/LonbzaXXV+rakTnbjK5tsqo/UnSD4oT5W76hjsd5UL6l31UW1E9id2DtUJTSirsWmLfWeemqfU2d+Wp1X/8Tet+pwN6FmTuSreqOGQNGvq5+CYy1/sjzoaQC+qKMHEMl8VP0WXAtFoVvxfbcOeJKi31S3g3MiL7QSb/CgBklmVbj5wL3JhNox0VHPHKLQsLt/43gCzMWVegl0qm5vD/YTeBbPswkwEYNXhyiS2euIkwlwOQbvBiD0PmKrof'+
			'4FjgFDwHYBWJkIC9YojE8Cv4DfSW7yeI+kPVlCmoUBLpSsN0q8zlpm5yNuJqSpHmC8v3cutXbEjQRYicHMAIRuR1zOX9jNAV7YK0eRgpayFFRMqu0aJFV+zbQ2/ZdUMa2UmtaTfsvE5+B6mM3nAUdW+LC/Un7fvaX8bB5TtqmpPnFvc7KgzqgX1ROBGTNtWBZN/1jtoTnJ+7S9t1tT3fgaWquBnCMtJy1ghN0G8iNpA/mcigbyH/YwdL2X2uCHAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud50c\ub7ec\uc2a4";
		el.ggDx=-100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) - 100px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.onmousedown=function (e) {
			me.elementMouseDown['_']=true;
		}
		me.__.onmouseup=function (e) {
			me.elementMouseDown['_']=false;
		}
		me.__.onmouseout=function (e) {
			me.elementMouseDown['_']=false;
		}
		me.__.ggCurrentLogicStateVisible = -1;
		me.__.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['_']) {
				player.changeFovLog(-1,true);
			}
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 1280))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_2.style.transition='';
				if (me._image_2.ggCurrentLogicStateVisible == 0) {
					me._image_2.style.visibility="hidden";
					me._image_2.ggVisible=false;
				}
				else {
					me._image_2.style.visibility=(Number(me._image_2.style.opacity)>0||!me._image_2.style.opacity)?'inherit':'hidden';
					me._image_2.ggVisible=true;
				}
			}
		}
		me._image_2.logicBlock_visible();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3.style.transition='';
				if (me._image_3.ggCurrentLogicStateVisible == 0) {
					me._image_3.style.visibility=(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity)?'inherit':'hidden';
					me._image_3.ggVisible=true;
				}
				else {
					me._image_3.style.visibility="hidden";
					me._image_3.ggVisible=false;
				}
			}
		}
		me._image_3.logicBlock_visible();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getViewerSize().width <= 1280))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_4.style.transition='';
				if (me._image_4.ggCurrentLogicStateVisible == 0) {
					me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
					me._image_4.ggVisible=true;
				}
				else {
					me._image_4.style.visibility="hidden";
					me._image_4.ggVisible=false;
				}
			}
		}
		me._image_4.logicBlock_visible();
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 540)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_5.style.transition='';
				if (me._image_5.ggCurrentLogicStateVisible == 0) {
					me._image_5.style.visibility=(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity)?'inherit':'hidden';
					me._image_5.ggVisible=true;
				}
				else {
					me._image_5.style.visibility="hidden";
					me._image_5.ggVisible=false;
				}
			}
		}
		me._image_5.logicBlock_visible();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_5);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 15%;';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 414))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width >= 540)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_1.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._button_1.ggCurrentLogicStatePosition == 0) {
					me._button_1.style.left = 'calc(50% - (200px / 2))';
					me._button_1.style.bottom='10%';
				}
				else if (me._button_1.ggCurrentLogicStatePosition == 1) {
					me._button_1.style.left = 'calc(50% - (200px / 2))';
					me._button_1.style.bottom='13%';
				}
				else {
					me._button_1.style.left='calc(50% - ((200px + 0px) / 2) + 0%)';
					me._button_1.style.bottom='15%';
				}
			}
		}
		me._button_1.logicBlock_position();
		me._button_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 414)) && 
				((player.getViewerSize().width > 375))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 375))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width > 414)) && 
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_1.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._button_1.ggCurrentLogicStateScaling == 0) {
					me._button_1.ggParameter.sx = 0.8;
					me._button_1.ggParameter.sy = 0.8;
					me._button_1.style.transform=parameterToTransform(me._button_1.ggParameter);
					skin.updateSize(me._button_1);
				}
				else if (me._button_1.ggCurrentLogicStateScaling == 1) {
					me._button_1.ggParameter.sx = 0.6;
					me._button_1.ggParameter.sy = 0.6;
					me._button_1.style.transform=parameterToTransform(me._button_1.ggParameter);
					skin.updateSize(me._button_1);
				}
				else if (me._button_1.ggCurrentLogicStateScaling == 2) {
					me._button_1.ggParameter.sx = 0.7;
					me._button_1.ggParameter.sy = 0.7;
					me._button_1.style.transform=parameterToTransform(me._button_1.ggParameter);
					skin.updateSize(me._button_1);
				}
				else if (me._button_1.ggCurrentLogicStateScaling == 3) {
					me._button_1.ggParameter.sx = 0.8;
					me._button_1.ggParameter.sy = 0.8;
					me._button_1.style.transform=parameterToTransform(me._button_1.ggParameter);
					skin.updateSize(me._button_1);
				}
				else {
					me._button_1.ggParameter.sx = 1;
					me._button_1.ggParameter.sy = 1;
					me._button_1.style.transform=parameterToTransform(me._button_1.ggParameter);
					skin.updateSize(me._button_1);
				}
			}
		}
		me._button_1.logicBlock_scaling();
		me._button_1.onclick=function (e) {
			me._button_1.style.transition='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
			me._image_2.style.transition='none';
			me._image_2.style.visibility='hidden';
			me._image_2.ggVisible=false;
			me._image_3.style.transition='none';
			me._image_3.style.visibility='hidden';
			me._image_3.ggVisible=false;
			me._image_4.style.transition='none';
			me._image_4.style.visibility='hidden';
			me._image_4.ggVisible=false;
			me._image_5.style.transition='none';
			me._image_5.style.visibility='hidden';
			me._image_5.ggVisible=false;
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_1);
		el=me._webscreentint=document.createElement('div');
		el.ggId="WebScreenTint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._webscreentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webscreentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webscreentint);
		el=me._webpageloading=document.createElement('div');
		els=me._webpageloading__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageLoading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._webpageloading.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>Please wait, page loading...<\/b>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._webpageloading.ggUpdateText();
		el.appendChild(els);
		me._webpageloading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageloading.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpageloading);
		el=me._webpagedisplay=document.createElement('div');
		els=me._webpagedisplay__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageDisplay";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 85%;';
		hs+='left : 4.84%;';
		hs+='position : absolute;';
		hs+='top : 6.58%;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._webpagedisplay.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._webpagedisplay.ggUpdateText();
		el.appendChild(els);
		me._webpagedisplay.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpagedisplay.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpagedisplay);
		el=me._webpageclose=document.createElement('div');
		els=me._webpageclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._webpageclose__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._webpageclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._webpageclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="WebPageClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 33%;';
		hs+='top : 6%;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._webpageclose.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageclose.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width >= 280)) && 
				((player.getViewerSize().width < 360))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width >= 360)) && 
				((player.getViewerSize().width < 375))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width >= 375)) && 
				((player.getViewerSize().width < 393))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getViewerSize().width >= 393)) && 
				((player.getViewerSize().width < 414))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getViewerSize().width >= 414)) && 
				((player.getViewerSize().width < 540))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getViewerSize().width >= 540)) && 
				((player.getViewerSize().width < 768))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getViewerSize().width >= 768)) && 
				((player.getViewerSize().width < 820))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getViewerSize().width >= 820)) && 
				((player.getViewerSize().width < 912))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getViewerSize().width >= 912)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getViewerSize().width >= 1280)) && 
				((player.getViewerSize().width < 1300))
			)
			{
				newLogicStatePosition = 10;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._webpageclose.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._webpageclose.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._webpageclose.style.transition='right 0s, top 0s';
				if (me._webpageclose.ggCurrentLogicStatePosition == 0) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='1%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 1) {
					me._webpageclose.style.right='2%';
					me._webpageclose.style.top='2%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 2) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='1%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 3) {
					me._webpageclose.style.right='2%';
					me._webpageclose.style.top='2%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 4) {
					me._webpageclose.style.right='2%';
					me._webpageclose.style.top='2%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 5) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='2%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 6) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='4%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 7) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='4%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 8) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='5%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 9) {
					me._webpageclose.style.right='1%';
					me._webpageclose.style.top='6%';
				}
				else if (me._webpageclose.ggCurrentLogicStatePosition == 10) {
					me._webpageclose.style.right='2%';
					me._webpageclose.style.top='6%';
				}
				else {
					me._webpageclose.style.right='33%';
					me._webpageclose.style.top='6%';
				}
			}
		}
		me._webpageclose.logicBlock_position();
		me._webpageclose.onclick=function (e) {
				me._webpagedisplay.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._webpagedisplay.ggUpdateText();
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style.transition='none';
			me._webpagedisplay.style.visibility='hidden';
			me._webpagedisplay.ggVisible=false;
			me._webscreentint.style.transition='none';
			me._webscreentint.style.visibility='hidden';
			me._webscreentint.ggVisible=false;
			me._webpageloading.style.transition='none';
			me._webpageloading.style.visibility='hidden';
			me._webpageloading.ggVisible=false;
			me._webpageclose.style.transition='none';
			me._webpageclose.style.visibility='hidden';
			me._webpageclose.ggVisible=false;
		}
		me._webpageclose.onmouseover=function (e) {
			me._webpageclose__img.style.visibility='hidden';
			me._webpageclose__imgo.style.visibility='inherit';
			me.elementMouseOver['webpageclose']=true;
		}
		me._webpageclose.onmouseout=function (e) {
			me._webpageclose__img.style.visibility='inherit';
			me._webpageclose__imgo.style.visibility='hidden';
			me.elementMouseOver['webpageclose']=false;
		}
		me._webpageclose.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpageclose);
		el=me._pdf_popup=document.createElement('div');
		el.ggId="pdf_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._pdf_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._pdf_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateSize == 0) {
					me._pdf_popup.style.width='calc(100% - 240px)';
					me._pdf_popup.style.height='calc(100% - 320px)';
					me._pdf_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._pdf_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._pdf_popup);}, 850);
				}
				else {
					me._pdf_popup.style.width='calc(100% - 240px)';
					me._pdf_popup.style.height='calc(100% - 240px)';
					me._pdf_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._pdf_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._pdf_popup);}, 850);
				}
			}
		}
		me._pdf_popup.logicBlock_size();
		me._pdf_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pdf_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pdf_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateAlpha == 0) {
					me._pdf_popup.style.visibility=me._pdf_popup.ggVisible?'inherit':'hidden';
					me._pdf_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._pdf_popup.style.opacity == 0.0) { me._pdf_popup.style.visibility="hidden"; } }, 505);
					me._pdf_popup.style.opacity=0;
				}
			}
		}
		me._pdf_popup.logicBlock_alpha();
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_bg=document.createElement('div');
		el.ggId="pdf_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_bg);
		el=me._popup_pdf=document.createElement('div');
		els=me._popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._popup_pdf__pdf.setAttribute('frameborder', '0');
		me._popup_pdf__pdf.setAttribute('width', '100%');
		me._popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._popup_pdf.ggPdfSource == file) return;
				me._popup_pdf.pdfNotLoaded = false;
				me._popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._popup_pdf.ggPdfSource.indexOf(':') != -1 || me._popup_pdf.ggPdfSource.startsWith('/') || me._popup_pdf.ggPdfSource.startsWith('./')) ? me._popup_pdf.ggPdfSource : '../../../' + me._popup_pdf.ggPdfSource;
				me._popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&tools=true&enablelinks=true#page=1');
				me._popup_pdf__pdf.style.display = 'block';
			} else {
				me._popup_pdf__pdf.setAttribute('src', '');
				me._popup_pdf__pdf.style.display = 'none';
				me._popup_pdf.pdfNotLoaded = true;
				me._popup_pdf.ggPdfSource = '';
			}
		}
		me._popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._popup_pdf.ggInitPdf('');
		el.ggId="popup_pdf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_pdf.style.transition='';
				if (me._popup_pdf.ggCurrentLogicStateVisible == 0) {
					me._popup_pdf.style.visibility=(Number(me._popup_pdf.style.opacity)>0||!me._popup_pdf.style.opacity)?'inherit':'hidden';
					if (me._popup_pdf.ggPdfNotLoaded) {
						me._popup_pdf.ggInitPdf(me._popup_pdf.ggPdfSource);
					}
					me._popup_pdf.ggVisible=true;
				}
				else {
					me._popup_pdf.style.visibility="hidden";
					if (me._popup_pdf.ggInitPdf) me._popup_pdf.ggInitPdf();
					me._popup_pdf.ggVisible=false;
				}
			}
		}
		me._popup_pdf.logicBlock_visible();
		me._popup_pdf.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
		}
		me._popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._popup_pdf);
		el=me._pdf_popup_title=document.createElement('div');
		els=me._pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_title);
		el=me._pdf_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="pdf_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_top.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
		}
		me._pdf_popup_top.onmouseover=function (e) {
			me.elementMouseOver['pdf_popup_top']=true;
			me._pdf_popup_close_btn.logicBlock_visible();
			me._pdf_popup_close_btn_active.logicBlock_visible();
		}
		me._pdf_popup_top.onmouseout=function (e) {
			me.elementMouseOver['pdf_popup_top']=false;
			me._pdf_popup_close_btn.logicBlock_visible();
			me._pdf_popup_close_btn_active.logicBlock_visible();
		}
		me._pdf_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_close_btn=document.createElement('div');
		els=me._pdf_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._pdf_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pdf_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pdf_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_close_btn.style.transition='';
				if (me._pdf_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_close_btn.style.visibility="hidden";
					me._pdf_popup_close_btn.ggVisible=false;
				}
				else {
					me._pdf_popup_close_btn.style.visibility=(Number(me._pdf_popup_close_btn.style.opacity)>0||!me._pdf_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._pdf_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._pdf_popup_close_btn.logicBlock_visible();
		me._pdf_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup_top.appendChild(me._pdf_popup_close_btn);
		el=me._pdf_popup_close_btn_active=document.createElement('div');
		els=me._pdf_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxsaW5lIHgyPSI5IiBzdH'+
			'Jva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjciIHkyPSIyNyIgeTE9IjkiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8bGluZSB4Mj0iMjciIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI5IiB5Mj0iMjciIHkxPSI5IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._pdf_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pdf_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pdf_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_close_btn_active.style.transition='';
				if (me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_close_btn_active.style.visibility=(Number(me._pdf_popup_close_btn_active.style.opacity)>0||!me._pdf_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._pdf_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._pdf_popup_close_btn_active.style.visibility="hidden";
					me._pdf_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._pdf_popup_close_btn_active.logicBlock_visible();
		me._pdf_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup_top.appendChild(me._pdf_popup_close_btn_active);
		me._pdf_popup.appendChild(me._pdf_popup_top);
		me.divSkin.appendChild(me._pdf_popup);
		el=me._video_popup=document.createElement('div');
		el.ggId="video_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._video_popup.ggCurrentLogicStateSize == 0) {
					me._video_popup.style.width='calc(100% - 240px)';
					me._video_popup.style.height='calc(100% - 320px)';
					me._video_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._video_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._video_popup);}, 850);
				}
				else {
					me._video_popup.style.width='calc(100% - 240px)';
					me._video_popup.style.height='calc(100% - 240px)';
					me._video_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._video_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._video_popup);}, 850);
				}
			}
		}
		me._video_popup.logicBlock_size();
		me._video_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_video_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._video_popup.ggCurrentLogicStateAlpha == 0) {
					me._video_popup.style.visibility=me._video_popup.ggVisible?'inherit':'hidden';
					me._video_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_popup.style.opacity == 0.0) { me._video_popup.style.visibility="hidden"; } }, 505);
					me._video_popup.style.opacity=0;
				}
			}
		}
		me._video_popup.logicBlock_alpha();
		me._video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_bg=document.createElement('div');
		el.ggId="video_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_bg);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true)) || 
				((player.getVariableValue('vis_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					document.onmousemove = document.ontouchmove = function(e) {
						let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					document.onmouseup = document.ontouchend = function(e) {
						let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
						document.onmousemove = document.ontouchmove = null;
						document.onmouseup = document.ontouchend = null;
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#3c3c3c';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-13px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(90,90,90,1) ' + currPos +'%, rgba(90,90,90,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar__playhead.onmousedown = me._video_controller_seekbar__playhead.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._video_popup.appendChild(me._video_controller);
		el=me._video_url_popup=document.createElement('div');
		me._video_url_popup.seekbars = [];
		me._video_url_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup.hasChildNodes()) {
				me._video_url_popup.removeChild(me._video_url_popup.lastChild);
			}
			if (me._video_url_popup__vid) {
				me._video_url_popup__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup.ggVideoNotLoaded == false && me._video_url_popup.ggDeactivate && player.isPlaying('video_url_popup')) { me._video_url_popup.ggDeactivate(); }
				me._video_url_popup.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup.ggVideoNotLoaded = false;
			me._video_url_popup__vid=document.createElement('video');
			me._video_url_popup__vid.className='ggskin ggskin_video';
			me._video_url_popup__vid.setAttribute('width', '100%');
			me._video_url_popup__vid.setAttribute('height', '100%');
			me._video_url_popup__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup__vid.setAttribute('autoplay', '');
			me._video_url_popup__source=document.createElement('source');
			me._video_url_popup__source.setAttribute('src', media);
			me._video_url_popup__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup__vid.setAttribute('style', ';');
			me._video_url_popup__vid.style.outline = 'none';
			me._video_url_popup__vid.appendChild(me._video_url_popup__source);
			me._video_url_popup.appendChild(me._video_url_popup__vid);
			var videoEl = player.registerVideoElement('video_url_popup', me._video_url_popup__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup', 0.0);
			notifySeekbars();
			if (me._video_url_popup.ggActivate) {
				me._video_url_popup__vid.addEventListener('play', me._video_url_popup.ggActivate);
			}
			if (me._video_url_popup.ggDeactivate) {
				me._video_url_popup__vid.addEventListener('ended', me._video_url_popup.ggDeactivate);
				me._video_url_popup__vid.addEventListener('pause', me._video_url_popup.ggDeactivate);
			}
			me._video_url_popup.ggVideoSource = media;
		}
		el.ggId="video_url_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 75px;';
		hs+='height : calc(100% - 160px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup.ggIsActive=function() {
			if (me._video_url_popup__vid != null) {
				return (me._video_url_popup__vid.paused == false && me._video_url_popup__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup.style.transition='';
				if (me._video_url_popup.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup.style.visibility=(Number(me._video_url_popup.style.opacity)>0||!me._video_url_popup.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup.ggVideoNotLoaded) {
						me._video_url_popup.ggInitMedia(me._video_url_popup.ggVideoSource);
					}
					me._video_url_popup.ggVisible=true;
				}
				else {
					me._video_url_popup.style.visibility="hidden";
					me._video_url_popup.ggInitMedia('');
					me._video_url_popup.ggVisible=false;
				}
			}
		}
		me._video_url_popup.logicBlock_visible();
		me._video_url_popup.onclick=function (e) {
			if (me._video_url_popup.ggApiPlayer) {
				if (me._video_url_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup.ggApiPlayer.play();
						} else {
							me._video_url_popup.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup","1");
			}
		}
		me._video_url_popup.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_play.style.transition='none';
			} else {
				me._video_url_popup_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_play.style.opacity='0';
			me._video_url_popup_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_popup_play.style.transition='none';
			} else {
				me._video_url_popup_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_play.ggParameter.sx=1.5;me._video_url_popup_play.ggParameter.sy=1.5;
			me._video_url_popup_play.style.transform=parameterToTransform(me._video_url_popup_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_url_popup_play);}, 350);
		}
		me._video_url_popup.ggDeactivate=function () {
			me._video_url_popup_play.style.transition='none';
			me._video_url_popup_play.ggParameter.sx=1;me._video_url_popup_play.ggParameter.sy=1;
			me._video_url_popup_play.style.transform=parameterToTransform(me._video_url_popup_play.ggParameter);
			skin.updateSize(me._video_url_popup_play);
			me._video_url_popup_play.style.transition='none';
			me._video_url_popup_play.style.opacity='1';
			me._video_url_popup_play.style.visibility=me._video_url_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_url_popup);
		el=me._video_url_popup_play=document.createElement('div');
		el.ggId="video_url_popup_play";
		el.ggDx=0;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 6px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_play.style.transition='';
				if (me._video_url_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_play.style.visibility=(Number(me._video_url_popup_play.style.opacity)>0||!me._video_url_popup_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_play.ggVisible=true;
				}
				else {
					me._video_url_popup_play.style.visibility="hidden";
					me._video_url_popup_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_play.logicBlock_visible();
		me._video_url_popup_play.onclick=function (e) {
			if (me._video_url_popup.ggApiPlayer) {
				if (me._video_url_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup.ggApiPlayerType == 'vimeo') {
					me._video_url_popup.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup","1");
			}
		}
		me._video_url_popup_play.onmouseover=function (e) {
			me.elementMouseOver['video_url_popup_play']=true;
			me._video_url_popup_play_icon_active.logicBlock_alpha();
			me._video_url_popup_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_play.onmouseout=function (e) {
			me.elementMouseOver['video_url_popup_play']=false;
			me._video_url_popup_play_icon_active.logicBlock_alpha();
			me._video_url_popup_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_popup_play_icon_active=document.createElement('div');
		els=me._video_url_popup_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_url_popup_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_url_popup_play_icon_active.style.visibility=me._video_url_popup_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_url_popup_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_url_popup_play_icon_active.style.opacity == 0.0) { me._video_url_popup_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_url_popup_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_url_popup_play_icon_active.logicBlock_alpha();
		me._video_url_popup_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_play.appendChild(me._video_url_popup_play_icon_active);
		el=me._video_url_popup_play_icon=document.createElement('div');
		els=me._video_url_popup_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_url_popup_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_url_popup_play_icon.style.opacity == 0.0) { me._video_url_popup_play_icon.style.visibility="hidden"; } }, 205);
					me._video_url_popup_play_icon.style.opacity=0;
				}
				else {
					me._video_url_popup_play_icon.style.visibility=me._video_url_popup_play_icon.ggVisible?'inherit':'hidden';
					me._video_url_popup_play_icon.style.opacity=1;
				}
			}
		}
		me._video_url_popup_play_icon.logicBlock_alpha();
		me._video_url_popup_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_play.appendChild(me._video_url_popup_play_icon);
		me._video_popup.appendChild(me._video_url_popup_play);
		el=me._video_file_popup=document.createElement('div');
		me._video_file_popup.seekbars = [];
		me._video_file_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup.hasChildNodes()) {
				me._video_file_popup.removeChild(me._video_file_popup.lastChild);
			}
			if (me._video_file_popup__vid) {
				me._video_file_popup__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup.ggVideoNotLoaded == false && me._video_file_popup.ggDeactivate && player.isPlaying('video_file_popup')) { me._video_file_popup.ggDeactivate(); }
				me._video_file_popup.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup.ggVideoNotLoaded = false;
			me._video_file_popup__vid=document.createElement('video');
			me._video_file_popup__vid.className='ggskin ggskin_video';
			me._video_file_popup__vid.setAttribute('width', '100%');
			me._video_file_popup__vid.setAttribute('height', '100%');
			me._video_file_popup__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup__vid.setAttribute('autoplay', '');
			me._video_file_popup__source=document.createElement('source');
			me._video_file_popup__source.setAttribute('src', media);
			me._video_file_popup__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup__vid.setAttribute('style', ';');
			me._video_file_popup__vid.style.outline = 'none';
			me._video_file_popup__vid.appendChild(me._video_file_popup__source);
			me._video_file_popup.appendChild(me._video_file_popup__vid);
			var videoEl = player.registerVideoElement('video_file_popup', me._video_file_popup__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup', 0.0);
			notifySeekbars();
			if (me._video_file_popup.ggActivate) {
				me._video_file_popup__vid.addEventListener('play', me._video_file_popup.ggActivate);
			}
			if (me._video_file_popup.ggDeactivate) {
				me._video_file_popup__vid.addEventListener('ended', me._video_file_popup.ggDeactivate);
				me._video_file_popup__vid.addEventListener('pause', me._video_file_popup.ggDeactivate);
			}
			me._video_file_popup.ggVideoSource = media;
		}
		el.ggId="video_file_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 75px;';
		hs+='height : calc(100% - 160px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup.ggIsActive=function() {
			if (me._video_file_popup__vid != null) {
				return (me._video_file_popup__vid.paused == false && me._video_file_popup__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup.style.transition='';
				if (me._video_file_popup.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup.style.visibility=(Number(me._video_file_popup.style.opacity)>0||!me._video_file_popup.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup.ggVideoNotLoaded) {
						me._video_file_popup.ggInitMedia(me._video_file_popup.ggVideoSource);
					}
					me._video_file_popup.ggVisible=true;
				}
				else {
					me._video_file_popup.style.visibility="hidden";
					me._video_file_popup.ggInitMedia('');
					me._video_file_popup.ggVisible=false;
				}
			}
		}
		me._video_file_popup.logicBlock_visible();
		me._video_file_popup.onclick=function (e) {
			if (me._video_file_popup.ggApiPlayer) {
				if (me._video_file_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup.ggApiPlayer.play();
						} else {
							me._video_file_popup.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup","1");
			}
		}
		me._video_file_popup.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_play.style.transition='none';
			} else {
				me._video_file_popup_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_play.style.opacity='0';
			me._video_file_popup_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_popup_play.style.transition='none';
			} else {
				me._video_file_popup_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_play.ggParameter.sx=1.5;me._video_file_popup_play.ggParameter.sy=1.5;
			me._video_file_popup_play.style.transform=parameterToTransform(me._video_file_popup_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_file_popup_play);}, 350);
		}
		me._video_file_popup.ggDeactivate=function () {
			me._video_file_popup_play.style.transition='none';
			me._video_file_popup_play.ggParameter.sx=1;me._video_file_popup_play.ggParameter.sy=1;
			me._video_file_popup_play.style.transform=parameterToTransform(me._video_file_popup_play.ggParameter);
			skin.updateSize(me._video_file_popup_play);
			me._video_file_popup_play.style.transition='none';
			me._video_file_popup_play.style.opacity='1';
			me._video_file_popup_play.style.visibility=me._video_file_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_file_popup);
		el=me._video_file_popup_play=document.createElement('div');
		el.ggId="video_file_popup_play";
		el.ggDx=0;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 6px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_play.style.transition='';
				if (me._video_file_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_play.style.visibility=(Number(me._video_file_popup_play.style.opacity)>0||!me._video_file_popup_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_play.ggVisible=true;
				}
				else {
					me._video_file_popup_play.style.visibility="hidden";
					me._video_file_popup_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_play.logicBlock_visible();
		me._video_file_popup_play.onclick=function (e) {
			if (me._video_file_popup.ggApiPlayer) {
				if (me._video_file_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup.ggApiPlayerType == 'vimeo') {
					me._video_file_popup.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup","1");
			}
		}
		me._video_file_popup_play.onmouseover=function (e) {
			me.elementMouseOver['video_file_popup_play']=true;
			me._video_file_popup_play_icon_active.logicBlock_alpha();
			me._video_file_popup_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_play.onmouseout=function (e) {
			me.elementMouseOver['video_file_popup_play']=false;
			me._video_file_popup_play_icon_active.logicBlock_alpha();
			me._video_file_popup_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_popup_play_icon_active=document.createElement('div');
		els=me._video_file_popup_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_file_popup_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_file_popup_play_icon_active.style.visibility=me._video_file_popup_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_file_popup_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_file_popup_play_icon_active.style.opacity == 0.0) { me._video_file_popup_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_file_popup_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_file_popup_play_icon_active.logicBlock_alpha();
		me._video_file_popup_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_play.appendChild(me._video_file_popup_play_icon_active);
		el=me._video_file_popup_play_icon=document.createElement('div');
		els=me._video_file_popup_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_file_popup_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_file_popup_play_icon.style.opacity == 0.0) { me._video_file_popup_play_icon.style.visibility="hidden"; } }, 205);
					me._video_file_popup_play_icon.style.opacity=0;
				}
				else {
					me._video_file_popup_play_icon.style.visibility=me._video_file_popup_play_icon.ggVisible?'inherit':'hidden';
					me._video_file_popup_play_icon.style.opacity=1;
				}
			}
		}
		me._video_file_popup_play_icon.logicBlock_alpha();
		me._video_file_popup_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_play.appendChild(me._video_file_popup_play_icon);
		me._video_popup.appendChild(me._video_file_popup_play);
		el=me._vimeo_popup=document.createElement('div');
		me._vimeo_popup.seekbars = [];
		me._vimeo_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup.hasChildNodes()) {
				me._vimeo_popup.removeChild(me._vimeo_popup.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup.ggVideoNotLoaded == false && me._vimeo_popup.ggDeactivate && player.isPlaying('vimeo_popup')) { me._vimeo_popup.ggDeactivate(); }
				me._vimeo_popup.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup.ggVideoNotLoaded = false;
			me._vimeo_popup__vid=document.createElement('iframe');
			me._vimeo_popup__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup__vid.setAttribute('width', '100%');
			me._vimeo_popup__vid.setAttribute('height', '100%');
			me._vimeo_popup__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup.appendChild(me._vimeo_popup__vid);
			me._vimeo_popup.ggVideoSource = media;
		}
		el.ggId="vimeo_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup.style.transition='';
				if (me._vimeo_popup.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup.style.visibility=(Number(me._vimeo_popup.style.opacity)>0||!me._vimeo_popup.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup.ggVideoNotLoaded) {
						me._vimeo_popup.ggInitMedia(me._vimeo_popup.ggVideoSource);
					}
					me._vimeo_popup.ggVisible=true;
				}
				else {
					me._vimeo_popup.style.visibility="hidden";
					me._vimeo_popup.ggInitMedia('');
					me._vimeo_popup.ggVisible=false;
				}
			}
		}
		me._vimeo_popup.logicBlock_visible();
		me._vimeo_popup.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._vimeo_popup);
		el=me._youtube_popup=document.createElement('div');
		me._youtube_popup.seekbars = [];
			me._youtube_popup.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup.hasChildNodes()) {
				me._youtube_popup.removeChild(me._youtube_popup.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup.ggVideoNotLoaded == false && me._youtube_popup.ggDeactivate && player.isPlaying('youtube_popup')) { me._youtube_popup.ggDeactivate(); }
				me._youtube_popup.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup.ggVideoNotLoaded = false;
			me._youtube_popup__vid=document.createElement('iframe');
			me._youtube_popup__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup__vid.setAttribute('width', '100%');
			me._youtube_popup__vid.setAttribute('height', '100%');
			me._youtube_popup__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup.appendChild(me._youtube_popup__vid);
			me._youtube_popup.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup.style.transition='';
				if (me._youtube_popup.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup.style.visibility=(Number(me._youtube_popup.style.opacity)>0||!me._youtube_popup.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup.ggVideoNotLoaded) {
						me._youtube_popup.ggInitMedia(me._youtube_popup.ggVideoSource);
					}
					me._youtube_popup.ggVisible=true;
				}
				else {
					me._youtube_popup.style.visibility="hidden";
					me._youtube_popup.ggInitMedia('');
					me._youtube_popup.ggVisible=false;
				}
			}
		}
		me._youtube_popup.logicBlock_visible();
		me._youtube_popup.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._youtube_popup);
		el=me._video_popup_title=document.createElement('div');
		els=me._video_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._video_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_popup_title.ggUpdateText();
		el.appendChild(els);
		me._video_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_title);
		el=me._video_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="video_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_top.onclick=function (e) {
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_video_youtube', false);
			player.setVariableValue('vis_video_vimeo', false);
			player.setVariableValue('vis_video_file', false);
			player.setVariableValue('vis_video_url', false);
		}
		me._video_popup_top.onmouseover=function (e) {
			me.elementMouseOver['video_popup_top']=true;
			me._video_popup_close_btn.logicBlock_visible();
			me._video_popup_close_btn_active.logicBlock_visible();
		}
		me._video_popup_top.onmouseout=function (e) {
			me.elementMouseOver['video_popup_top']=false;
			me._video_popup_close_btn.logicBlock_visible();
			me._video_popup_close_btn_active.logicBlock_visible();
		}
		me._video_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_close_btn=document.createElement('div');
		els=me._video_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._video_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['video_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_btn.style.transition='';
				if (me._video_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_btn.style.visibility="hidden";
					me._video_popup_close_btn.ggVisible=false;
				}
				else {
					me._video_popup_close_btn.style.visibility=(Number(me._video_popup_close_btn.style.opacity)>0||!me._video_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._video_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._video_popup_close_btn.logicBlock_visible();
		me._video_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_top.appendChild(me._video_popup_close_btn);
		el=me._video_popup_close_btn_active=document.createElement('div');
		els=me._video_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxsaW5lIHgyPSI5IiBzdH'+
			'Jva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjciIHkyPSIyNyIgeTE9IjkiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8bGluZSB4Mj0iMjciIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI5IiB5Mj0iMjciIHkxPSI5IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._video_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['video_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_btn_active.style.transition='';
				if (me._video_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_btn_active.style.visibility=(Number(me._video_popup_close_btn_active.style.opacity)>0||!me._video_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._video_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._video_popup_close_btn_active.style.visibility="hidden";
					me._video_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._video_popup_close_btn_active.logicBlock_visible();
		me._video_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_top.appendChild(me._video_popup_close_btn_active);
		me._video_popup.appendChild(me._video_popup_top);
		me.divSkin.appendChild(me._video_popup);
		el=me._info_popup=document.createElement('div');
		el.ggId="info_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(60% - 240px);';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(60% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_popup.style.transition='opacity 500ms ease 0ms';
				if (me._info_popup.ggCurrentLogicStateAlpha == 0) {
					me._info_popup.style.visibility=me._info_popup.ggVisible?'inherit':'hidden';
					me._info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_popup.style.opacity == 0.0) { me._info_popup.style.visibility="hidden"; } }, 505);
					me._info_popup.style.opacity=0;
				}
			}
		}
		me._info_popup.logicBlock_alpha();
		me._info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_bg=document.createElement('div');
		el.ggId="info_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_bg);
		el=me._info_popup_text=document.createElement('div');
		els=me._info_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_text);
		el=me._info_popup_title=document.createElement('div');
		els=me._info_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_title);
		el=me._info_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="info_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_top.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_info', false);
		}
		me._info_popup_top.onmouseover=function (e) {
			me.elementMouseOver['info_popup_top']=true;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.onmouseout=function (e) {
			me.elementMouseOver['info_popup_top']=false;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_close_btn=document.createElement('div');
		els=me._info_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._info_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn.style.transition='';
				if (me._info_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn.style.visibility="hidden";
					me._info_popup_close_btn.ggVisible=false;
				}
				else {
					me._info_popup_close_btn.style.visibility=(Number(me._info_popup_close_btn.style.opacity)>0||!me._info_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._info_popup_close_btn.logicBlock_visible();
		me._info_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn);
		el=me._info_popup_close_btn_active=document.createElement('div');
		els=me._info_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxsaW5lIHgyPSI5IiBzdH'+
			'Jva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjciIHkyPSIyNyIgeTE9IjkiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8bGluZSB4Mj0iMjciIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI5IiB5Mj0iMjciIHkxPSI5IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._info_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn_active.style.transition='';
				if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn_active.style.visibility=(Number(me._info_popup_close_btn_active.style.opacity)>0||!me._info_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._info_popup_close_btn_active.style.visibility="hidden";
					me._info_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._info_popup_close_btn_active.logicBlock_visible();
		me._info_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn_active);
		me._info_popup.appendChild(me._info_popup_top);
		me.divSkin.appendChild(me._info_popup);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._image_popup.ggCurrentLogicStateSize == 0) {
					me._image_popup.style.width='calc(100% - 240px)';
					me._image_popup.style.height='calc(100% - 320px)';
					me._image_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._image_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._image_popup);}, 850);
				}
				else {
					me._image_popup.style.width='calc(100% - 240px)';
					me._image_popup.style.height='calc(100% - 240px)';
					me._image_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._image_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._image_popup);}, 850);
				}
			}
		}
		me._image_popup.logicBlock_size();
		me._image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._image_popup.ggCurrentLogicStateAlpha == 0) {
					me._image_popup.style.visibility=me._image_popup.ggVisible?'inherit':'hidden';
					me._image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._image_popup.style.opacity == 0.0) { me._image_popup.style.visibility="hidden"; } }, 505);
					me._image_popup.style.opacity=0;
				}
			}
		}
		me._image_popup.logicBlock_alpha();
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_popup_bg=document.createElement('div');
		el.ggId="image_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_bg);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;z-index: 2;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			if (me._popup_image.ggUpdateImageInternal) me._popup_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggText=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuMTI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjI1'+
			'cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjYyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yID'+
			'AuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjg3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._popup_image.appendChild(me._loading_image);
		me._image_popup.appendChild(me._popup_image);
		el=me._image_popup_title=document.createElement('div');
		els=me._image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._image_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_popup_title.ggUpdateText();
		el.appendChild(els);
		me._image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_title);
		el=me._image_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="image_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_top.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_top.onmouseover=function (e) {
			me.elementMouseOver['image_popup_top']=true;
			me._image_popup_close_btn.logicBlock_visible();
			me._image_popup_close_btn_active.logicBlock_visible();
		}
		me._image_popup_top.onmouseout=function (e) {
			me.elementMouseOver['image_popup_top']=false;
			me._image_popup_close_btn.logicBlock_visible();
			me._image_popup_close_btn_active.logicBlock_visible();
		}
		me._image_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_popup_close_btn=document.createElement('div');
		els=me._image_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._image_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close_btn.style.transition='';
				if (me._image_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close_btn.style.visibility="hidden";
					me._image_popup_close_btn.ggVisible=false;
				}
				else {
					me._image_popup_close_btn.style.visibility=(Number(me._image_popup_close_btn.style.opacity)>0||!me._image_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._image_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._image_popup_close_btn.logicBlock_visible();
		me._image_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup_top.appendChild(me._image_popup_close_btn);
		el=me._image_popup_close_btn_active=document.createElement('div');
		els=me._image_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxsaW5lIHgyPSI5IiBzdH'+
			'Jva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjciIHkyPSIyNyIgeTE9IjkiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8bGluZSB4Mj0iMjciIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI5IiB5Mj0iMjciIHkxPSI5IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._image_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close_btn_active.style.transition='';
				if (me._image_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close_btn_active.style.visibility=(Number(me._image_popup_close_btn_active.style.opacity)>0||!me._image_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._image_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._image_popup_close_btn_active.style.visibility="hidden";
					me._image_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._image_popup_close_btn_active.logicBlock_visible();
		me._image_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup_top.appendChild(me._image_popup_close_btn_active);
		me._image_popup.appendChild(me._image_popup_top);
		me.divSkin.appendChild(me._image_popup);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.onmouseover=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseout=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4MT0iMjQiIHgyPSI4IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+CiA8bGluZSB4MT0iOCIgeDI9IjI0IiB5Mj0iMjQiIGNsYXNzPSJzdDAiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._screentint_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._screentint_phone.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			if (me._image_popup_phone.ggUpdateImageInternal) me._image_popup_phone.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggText=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._screentint_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : '../../../' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					document.onmousemove = document.ontouchmove = function(e) {
						let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					document.onmouseup = document.ontouchend = function(e) {
						let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
						document.onmousemove = document.ontouchmove = null;
						document.onmouseup = document.ontouchend = null;
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(90,90,90,0.392157) ' + currPos +'%, rgba(90,90,90,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone__playhead.onmousedown = me._video_controller_seekbar_phone__playhead.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._screentint_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.ggParameter.sx=1.5;me._video_file_popup_phone_play.ggParameter.sy=1.5;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_file_popup_phone_play);}, 350);
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.ggParameter.sx=1;me._video_file_popup_phone_play.ggParameter.sy=1;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			skin.updateSize(me._video_file_popup_phone_play);
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseover=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=true;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.onmouseout=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=false;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_file_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_file_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_file_popup_phone_play_icon_active.style.visibility=me._video_file_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_file_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_file_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon_active);
		el=me._video_file_popup_phone_play_icon=document.createElement('div');
		els=me._video_file_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon.style.opacity == 0.0) { me._video_file_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_file_popup_phone_play_icon.style.visibility=me._video_file_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_file_popup_phone_play_icon.logicBlock_alpha();
		me._video_file_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon);
		me._screentint_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.ggParameter.sx=1.5;me._video_url_popup_phone_play.ggParameter.sy=1.5;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_url_popup_phone_play);}, 350);
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.ggParameter.sx=1;me._video_url_popup_phone_play.ggParameter.sy=1;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			skin.updateSize(me._video_url_popup_phone_play);
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseover=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=true;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.onmouseout=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=false;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_url_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_url_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_url_popup_phone_play_icon_active.style.visibility=me._video_url_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_url_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_url_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon_active);
		el=me._video_url_popup_phone_play_icon=document.createElement('div');
		els=me._video_url_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon.style.opacity == 0.0) { me._video_url_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_url_popup_phone_play_icon.style.visibility=me._video_url_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_url_popup_phone_play_icon.logicBlock_alpha();
		me._video_url_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon);
		me._screentint_phone.appendChild(me._video_url_popup_phone_play);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._code_element_feather_orb_hotspot_component=document.createElement('div');
		el.ggId="code_element_feather_orb_hotspot_component";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code_element_feather_orb_hotspot_component.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_element_feather_orb_hotspot_component.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_element_feather_orb_hotspot_component);
		el=me._rectangle_2=document.createElement('div');

		el.addEventListener("click", () => {
            const copy = (text) => {
                // 임시의 textarea 생성
                const $textarea = document.createElement("textarea");
              
                // body 요소에 존재해야 복사가 진행됨
                document.body.appendChild($textarea);
                
                // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
                $textarea.value = text;
                $textarea.select();
                
                // 복사 후 textarea 지우기
                document.execCommand('copy');
                document.body.removeChild($textarea);
              }
              
              copy("7474747-12dfdsfdsf");

        })

		el.ggId="Rectangle 2";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='bottom : 101px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_2);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 100px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 150px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce74\uce74\uc624\ubc45\ud06c 705-5034-8512-11", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		me._screen_tint.logicBlock_visible();
		me._gallery_close.logicBlock_visible();
		me._gallery_controler.logicBlock_visible();
		me._gallery_picture_preload.logicBlock_externalurl();
		me._gallery_counter.logicBlock_text();
		me._gallery_picture.logicBlock_visible();
		me._gallery_picture.logicBlock_externalurl();
		me._sound_on_5.logicBlock_visible();
		me._sound_on_4.logicBlock_visible();
		me._sound_on_3.logicBlock_visible();
		me._sound_on_2.logicBlock_visible();
		me._sound_on_1.logicBlock_visible();
		me._sound_on_0.logicBlock_visible();
		me._right.logicBlock_visible();
		me._left.logicBlock_visible();
		me._rotate.logicBlock_visible();
		me._stop.logicBlock_visible();
		me.__2.logicBlock_visible();
		me.__1.logicBlock_visible();
		me.__0.logicBlock_visible();
		me.__.logicBlock_visible();
		me._image_2.logicBlock_visible();
		me._image_3.logicBlock_visible();
		me._image_4.logicBlock_visible();
		me._image_5.logicBlock_visible();
		me._button_1.logicBlock_position();
		me._button_1.logicBlock_scaling();
		me._webpageclose.logicBlock_position();
		me._pdf_popup.logicBlock_size();
		me._pdf_popup.logicBlock_alpha();
		me._popup_pdf.logicBlock_visible();
		me._pdf_popup_close_btn.logicBlock_visible();
		me._pdf_popup_close_btn_active.logicBlock_visible();
		me._video_popup.logicBlock_size();
		me._video_popup.logicBlock_alpha();
		me._video_controller.logicBlock_visible();
		me._video_url_popup.logicBlock_visible();
		me._video_url_popup.ggVideoSource = '';
		me._video_url_popup.ggVideoNotLoaded = true;
		me._video_url_popup_play.logicBlock_visible();
		me._video_url_popup_play_icon_active.logicBlock_alpha();
		me._video_url_popup_play_icon.logicBlock_alpha();
		me._video_file_popup.logicBlock_visible();
		me._video_file_popup.ggVideoSource = 'media/';
		me._video_file_popup.ggVideoNotLoaded = true;
		me._video_file_popup_play.logicBlock_visible();
		me._video_file_popup_play_icon_active.logicBlock_alpha();
		me._video_file_popup_play_icon.logicBlock_alpha();
		me._vimeo_popup.logicBlock_visible();
		me._vimeo_popup.ggVideoSource = '';
		me._vimeo_popup.ggVideoNotLoaded = true;
		me._youtube_popup.logicBlock_visible();
		me._youtube_popup.ggVideoSource = '';
		me._youtube_popup.ggVideoNotLoaded = true;
		me._video_popup_close_btn.logicBlock_visible();
		me._video_popup_close_btn_active.logicBlock_visible();
		me._info_popup.logicBlock_alpha();
		me._info_popup_close_btn.logicBlock_visible();
		me._info_popup_close_btn_active.logicBlock_visible();
		me._image_popup.logicBlock_size();
		me._image_popup.logicBlock_alpha();
		me._image_popup_close_btn.logicBlock_visible();
		me._image_popup_close_btn_active.logicBlock_visible();
		me._screentint_phone.logicBlock_alpha();
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_file_popup_phone_play_icon.logicBlock_alpha();
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_url_popup_phone_play_icon.logicBlock_alpha();
		el = me._code_element_feather_orb_hotspot_component;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('autorotatechanged', function(event) {
			me._rotate.logicBlock_visible();
			me._stop.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			me._screen_tint.logicBlock_visible();
			me._gallery_close.logicBlock_visible();
			me._gallery_controler.logicBlock_visible();
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
			me._gallery_picture.logicBlock_visible();
			me._gallery_picture.logicBlock_externalurl();
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
			me._right.logicBlock_visible();
			me._left.logicBlock_visible();
			me._rotate.logicBlock_visible();
			me._stop.logicBlock_visible();
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__0.logicBlock_visible();
			me.__.logicBlock_visible();
			me._pdf_popup.logicBlock_size();
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
			me._video_popup.logicBlock_size();
			me._video_popup.logicBlock_alpha();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._video_url_popup.logicBlock_visible();
			me._video_url_popup_play.logicBlock_visible();
			me._video_file_popup.logicBlock_visible();
			me._video_file_popup_play.logicBlock_visible();
			me._vimeo_popup.logicBlock_visible();
			me._youtube_popup.logicBlock_visible();
			me._info_popup.logicBlock_alpha();
			me._image_popup.logicBlock_size();
			me._image_popup.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			me._screen_tint.logicBlock_visible();
			me._gallery_close.logicBlock_visible();
			me._gallery_controler.logicBlock_visible();
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
			me._gallery_picture.logicBlock_visible();
			me._gallery_picture.logicBlock_externalurl();
			player.setVolume("_main",0.4);
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
			me._right.logicBlock_visible();
			me._left.logicBlock_visible();
			me._rotate.logicBlock_visible();
			me._stop.logicBlock_visible();
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__0.logicBlock_visible();
			me.__.logicBlock_visible();
			me._pdf_popup.logicBlock_size();
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
			me._video_popup.logicBlock_size();
			me._video_popup.logicBlock_alpha();
			me._video_controller.logicBlock_visible();
			me._video_url_popup.logicBlock_visible();
			me._video_url_popup_play.logicBlock_visible();
			me._video_file_popup.logicBlock_visible();
			me._video_file_popup_play.logicBlock_visible();
			me._vimeo_popup.logicBlock_visible();
			me._youtube_popup.logicBlock_visible();
			me._info_popup.logicBlock_alpha();
			me._image_popup.logicBlock_size();
			me._image_popup.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_sizechanged();
				}
			}
			me._variable_resp_phone.logicBlock();
			me._image_2.logicBlock_visible();
			me._image_3.logicBlock_visible();
			me._image_4.logicBlock_visible();
			me._image_5.logicBlock_visible();
			me._button_1.logicBlock_position();
			me._button_1.logicBlock_scaling();
			me._webpageclose.logicBlock_position();
		});
		player.addListener('varchanged_gallery_pictures', function(event) {
			me._gallery_picture_preload.logicBlock_externalurl();
			me._gallery_counter.logicBlock_text();
			me._gallery_picture.logicBlock_externalurl();
		});
		player.addListener('varchanged_gallery_show_hide', function(event) {
			me._screen_tint.logicBlock_visible();
			me._gallery_close.logicBlock_visible();
			me._gallery_controler.logicBlock_visible();
			me._gallery_picture.logicBlock_visible();
			me._right.logicBlock_visible();
			me._left.logicBlock_visible();
			me._rotate.logicBlock_visible();
			me._stop.logicBlock_visible();
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__0.logicBlock_visible();
			me.__.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._image_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_menu_center', function(event) {
			me._pdf_popup.logicBlock_size();
			me._video_popup.logicBlock_size();
			me._image_popup.logicBlock_size();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_file', function(event) {
			me._video_controller.logicBlock_visible();
			me._video_file_popup.logicBlock_visible();
			me._video_file_popup_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup', function(event) {
			me._video_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_video_url', function(event) {
			me._video_controller.logicBlock_visible();
			me._video_url_popup.logicBlock_visible();
			me._video_url_popup_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo', function(event) {
			me._vimeo_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube', function(event) {
			me._youtube_popup.logicBlock_visible();
		});
		player.addListener('varchanged_volume_1', function(event) {
			me._sound_on_5.logicBlock_visible();
			me._sound_on_4.logicBlock_visible();
			me._sound_on_3.logicBlock_visible();
			me._sound_on_2.logicBlock_visible();
			me._sound_on_1.logicBlock_visible();
			me._sound_on_0.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 122px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._lottie_2);
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 410px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
				skin._image_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_popup_title.ggUpdateText();
			skin._image_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_image.ggText = player.getBasePath()+""+player._(me.hotspot.url);
			skin._popup_image.ggUpdateImage();
			skin._image_popup_phone.ggText = player.getBasePath()+""+player._(me.hotspot.url);
			skin._image_popup_phone.ggUpdateImage();
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_custom_image=document.createElement('div');
		els=me._ht_image_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_image_custom_image.ggAltText));
			if (me._ht_image_custom_image.ggUpdateImageInternal) me._ht_image_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_image_custom_image.ggSubElement.style.width = '0px';
			me._ht_image_custom_image.ggSubElement.style.height = '0px';
			me._ht_image_custom_image.ggSubElement.src='';
			me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_custom_image.style.transition='';
				if (me._ht_image_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_custom_image.style.visibility=(Number(me._ht_image_custom_image.style.opacity)>0||!me._ht_image_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
					me._ht_image_custom_image.ggVisible=true;
				}
				else {
					me._ht_image_custom_image.style.visibility="hidden";
					me._ht_image_custom_image.ggSubElement.src='';
					me._ht_image_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_image_custom_image.logicBlock_visible();
		me._ht_image_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_custom_image.clientWidth;
			var parentHeight = me._ht_image_custom_image.clientHeight;
			var img = me._ht_image_custom_image__img;
			var aspectRatioDiv = me._ht_image_custom_image.clientWidth / me._ht_image_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentWidth < me._ht_image_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_custom_image.scrollLeft=currentWidth / 2 - me._ht_image_custom_image.clientWidth / 2;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentHeight < me._ht_image_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_custom_image.scrollTop=currentHeight / 2 - me._ht_image_custom_image.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_image_custom_image);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_image_bg.ggParameter.sx = 1.2;
					me._ht_image_bg.ggParameter.sy = 1.2;
					me._ht_image_bg.style.transform=parameterToTransform(me._ht_image_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 350);
				}
				else {
					me._ht_image_bg.ggParameter.sx = 1;
					me._ht_image_bg.ggParameter.sy = 1;
					me._ht_image_bg.style.transform=parameterToTransform(me._ht_image_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 350);
				}
			}
		}
		me._ht_image_bg.logicBlock_scaling();
		me._ht_image_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_image_bg.style.visibility="hidden";
					me._ht_image_bg.ggVisible=false;
				}
				else {
					me._ht_image_bg.style.visibility=(Number(me._ht_image_bg.style.opacity)>0||!me._ht_image_bg.style.opacity)?'inherit':'hidden';
					me._ht_image_bg.ggVisible=true;
				}
			}
		}
		me._ht_image_bg.logicBlock_visible();
		me._ht_image_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon_active=document.createElement('div');
		els=me._ht_image_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMzQuNSwyOC41YzAsMS43LTEuMywzLTMsM2gtMjdjLTEuNywwLTMtMS4zLTMtM1YxMmMwLTEuNywxLjMtMywzLTNoNmwzLTQuNWg5bDMsNC41aDZjMS43LDAsMywxLjMsMywzVjI4LjV6IiBjbGFzcz0ic3QwIi8+CiA8Y2lyY2xlIGN4PSIxOCIgY2xhc3M9InN0MCIgY3k9IjE5LjUiIHI9IjYiLz4KPC9zdmc+Cg==';
		me._ht_image_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon_active);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwYXRoIHN0cm9rZS1saW'+
			'5lam9pbj0icm91bmQiIGQ9Ik0zNC41LDI4LjUmI3hhOyYjeDk7YzAsMS43LTEuMywzLTMsM2gtMjdjLTEuNywwLTMtMS4zLTMtM1YxMmMwLTEuNywxLjMtMywzLTNoNmwzLTQuNWg5bDMsNC41aDZjMS43LDAsMywxLjMsMywzVjI4LjV6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE4IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgY3k9IjE5LjUiIGZpbGw9Im5vbmUiIHI9IjYi'+
			'Lz4KPC9zdmc+Cg==';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon.style.opacity == 0.0) { me._ht_image_icon.style.visibility="hidden"; } }, 205);
					me._ht_image_icon.style.opacity=0;
				}
				else {
					me._ht_image_icon.style.visibility=me._ht_image_icon.ggVisible?'inherit':'hidden';
					me._ht_image_icon.style.opacity=1;
				}
			}
		}
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_title.style.visibility=me._ht_image_title.ggVisible?'inherit':'hidden';
					me._ht_image_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_title.style.opacity == 0.0) { me._ht_image_title.style.visibility="hidden"; } }, 205);
					me._ht_image_title.style.opacity=0;
				}
			}
		}
		me._ht_image_title.logicBlock_alpha();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_title);
		me._ht_image.appendChild(me._ht_image_bg);
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_image_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_custom_image.logicBlock_visible();
		me._ht_image_bg.logicBlock_scaling();
		me._ht_image_bg.logicBlock_visible();
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_title.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_custom_image.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image_custom_image.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image_custom_image.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 554px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
				skin._info_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title.ggUpdateText();
			skin._info_popup_title.ggTextDiv.scrollTop = 0;
				skin._info_popup_text.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text.ggUpdateText();
			skin._info_popup_text.ggTextDiv.scrollTop = 0;
				skin._info_popup_title_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title_phone.ggUpdateText();
			skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
				skin._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text_phone.ggUpdateText();
			skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_info_bg.ggParameter.sx = 1.2;
					me._ht_info_bg.ggParameter.sy = 1.2;
					me._ht_info_bg.style.transform=parameterToTransform(me._ht_info_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 350);
				}
				else {
					me._ht_info_bg.ggParameter.sx = 1;
					me._ht_info_bg.ggParameter.sy = 1;
					me._ht_info_bg.style.transform=parameterToTransform(me._ht_info_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 350);
				}
			}
		}
		me._ht_info_bg.logicBlock_scaling();
		me._ht_info_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_info_bg.style.visibility="hidden";
					me._ht_info_bg.ggVisible=false;
				}
				else {
					me._ht_info_bg.style.visibility=(Number(me._ht_info_bg.style.opacity)>0||!me._ht_info_bg.style.opacity)?'inherit':'hidden';
					me._ht_info_bg.ggVisible=true;
				}
			}
		}
		me._ht_info_bg.logicBlock_visible();
		me._ht_info_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon_active=document.createElement('div');
		els=me._ht_info_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTM1LDE5LjJjMCwyLjItMC41LDQuNC0xLjUsNi4zYy0yLjQsNC44LTcuMyw3LjgtMTIuNyw3LjhjLTIuMiwwLTQuNC0wLjUtNi4zLTEuNUw1LDM1bDMuMi05LjUmI3hkOyYjeGE7JiN4OTtjLTEtMi0xLjUtNC4xLTEuNS02LjNjMC01LjQsMy0xMC4zLDcuOC0xMi43YzItMSw0LjEt'+
			'MS41LDYuMy0xLjVoMC44YzcuMiwwLjQsMTIuOSw2LjEsMTMuMywxMy4zVjE5LjJ6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_info_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon_active);
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTM1LDE5LjJjMCwyLjItMC41LDQuNC0xLjUsNi4zYy0yLjQsNC44LTcuMyw3LjgtMTIuNyw3LjhjLTIuMiwwLTQuNC0wLjUtNi4zLTEuNUw1LDM1bDMuMi05LjUmI3hkOyYjeGE7JiN4OTtjLTEtMi0xLjUtNC4xLTEuNS02LjNjMC01LjQsMy0xMC4zLDcuOC0xMi43YzItMSw0LjEt'+
			'MS41LDYuMy0xLjVoMC44YzcuMiwwLjQsMTIuOSw2LjEsMTMuMywxMy4zVjE5LjJ6IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_info_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon.style.opacity == 0.0) { me._ht_info_icon.style.visibility="hidden"; } }, 205);
					me._ht_info_icon.style.opacity=0;
				}
				else {
					me._ht_info_icon.style.visibility=me._ht_info_icon.ggVisible?'inherit':'hidden';
					me._ht_info_icon.style.opacity=1;
				}
			}
		}
		me._ht_info_icon.logicBlock_alpha();
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_info_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_title.style.visibility=me._ht_info_title.ggVisible?'inherit':'hidden';
					me._ht_info_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_title.style.opacity == 0.0) { me._ht_info_title.style.visibility="hidden"; } }, 205);
					me._ht_info_title.style.opacity=0;
				}
			}
		}
		me._ht_info_title.logicBlock_alpha();
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_title);
		me._ht_info.appendChild(me._ht_info_bg);
		el=me._ht_info_custom_image=document.createElement('div');
		els=me._ht_info_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_info_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_info_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_info_custom_image.ggAltText));
			if (me._ht_info_custom_image.ggUpdateImageInternal) me._ht_info_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_info_custom_image.ggSubElement.style.width = '0px';
			me._ht_info_custom_image.ggSubElement.style.height = '0px';
			me._ht_info_custom_image.ggSubElement.src='';
			me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_info_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_custom_image.style.transition='';
				if (me._ht_info_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_custom_image.style.visibility=(Number(me._ht_info_custom_image.style.opacity)>0||!me._ht_info_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
					me._ht_info_custom_image.ggVisible=true;
				}
				else {
					me._ht_info_custom_image.style.visibility="hidden";
					me._ht_info_custom_image.ggSubElement.src='';
					me._ht_info_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_info_custom_image.logicBlock_visible();
		me._ht_info_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_custom_image.clientWidth;
			var parentHeight = me._ht_info_custom_image.clientHeight;
			var img = me._ht_info_custom_image__img;
			var aspectRatioDiv = me._ht_info_custom_image.clientWidth / me._ht_info_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentWidth < me._ht_info_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_info_custom_image.scrollLeft=currentWidth / 2 - me._ht_info_custom_image.clientWidth / 2;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentHeight < me._ht_info_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_info_custom_image.scrollTop=currentHeight / 2 - me._ht_info_custom_image.clientHeight / 2;
			}
		}
		me._ht_info.appendChild(me._ht_info_custom_image);
		me._ht_info_bg.logicBlock_scaling();
		me._ht_info_bg.logicBlock_visible();
		me._ht_info_icon.logicBlock_alpha();
		me._ht_info_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_info_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_info_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_info_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_info_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_info_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 698px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.onclick=function (e) {
				skin._pdf_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._pdf_popup_title.ggUpdateText();
			skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			let pdfInterval_5 = setInterval(() => {
				if (skin._popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
					skin._popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
					clearInterval(pdfInterval_5);
				}
			}, 50);
			skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			let pdfInterval_6 = setInterval(() => {
				if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
					skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
					clearInterval(pdfInterval_6);
				}
			}, 50);
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_pdf_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_pdf_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_pdf_bg.ggParameter.sx = 1.2;
					me._ht_pdf_bg.ggParameter.sy = 1.2;
					me._ht_pdf_bg.style.transform=parameterToTransform(me._ht_pdf_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_pdf_bg);}, 350);
				}
				else {
					me._ht_pdf_bg.ggParameter.sx = 1;
					me._ht_pdf_bg.ggParameter.sy = 1;
					me._ht_pdf_bg.style.transform=parameterToTransform(me._ht_pdf_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_pdf_bg);}, 350);
				}
			}
		}
		me._ht_pdf_bg.logicBlock_scaling();
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon_active=document.createElement('div');
		els=me._ht_pdf_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIzLjMsMy4zSDEwYy0xLjgsMC0zLjMsMS41LTMuMywzLjN2MjYuN2MwLDEuOCwxLjUsMy4zLDMuMywzLjNoMjBjMS44LDAsMy4zLTEuNSwzLjMtMy4zdi0yMEwyMy4zLDMuM3oiIGNsYXNzPSJzdDAiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjIzLjMsMy4zIDIz'+
			'LjMsMTMuMyAzMy4zLDEzLjMgIi8+CiA8bGluZSB4MT0iMjYuNyIgeDI9IjEzLjMiIHkyPSIyMS43IiBjbGFzcz0ic3QwIiB5MT0iMjEuNyIvPgogPGxpbmUgeDE9IjI2LjciIHgyPSIxMy4zIiB5Mj0iMjguMyIgY2xhc3M9InN0MCIgeTE9IjI4LjMiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjcsMTUgMTUsMTUgMTMuMywxNSAiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon_active);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIzLjMsMy4zSDEwYy0xLjgsMC0zLjMsMS41LTMuMywzLjN2MjYuN2MwLDEuOCwxLjUsMy4zLDMuMywzLjNoMjBjMS44LDAsMy4zLTEuNSwzLjMtMy4zdi0yMEwyMy4zLDMuM3oiIGNsYXNzPSJzdDAiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjIzLjMsMy4zIDIz'+
			'LjMsMTMuMyAzMy4zLDEzLjMgIi8+CiA8bGluZSB4MT0iMjYuNyIgeDI9IjEzLjMiIHkyPSIyMS43IiBjbGFzcz0ic3QwIiB5MT0iMjEuNyIvPgogPGxpbmUgeDE9IjI2LjciIHgyPSIxMy4zIiB5Mj0iMjguMyIgY2xhc3M9InN0MCIgeTE9IjI4LjMiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjcsMTUgMTUsMTUgMTMuMywxNSAiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_pdf_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_pdf_icon.style.opacity == 0.0) { me._ht_pdf_icon.style.visibility="hidden"; } }, 205);
					me._ht_pdf_icon.style.opacity=0;
				}
				else {
					me._ht_pdf_icon.style.visibility=me._ht_pdf_icon.ggVisible?'inherit':'hidden';
					me._ht_pdf_icon.style.opacity=1;
				}
			}
		}
		me._ht_pdf_icon.logicBlock_alpha();
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_pdf_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_title.style.visibility=me._ht_pdf_title.ggVisible?'inherit':'hidden';
					me._ht_pdf_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_title.style.opacity == 0.0) { me._ht_pdf_title.style.visibility="hidden"; } }, 205);
					me._ht_pdf_title.style.opacity=0;
				}
			}
		}
		me._ht_pdf_title.logicBlock_alpha();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_title);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			if (me._ht_pdf_custom_image.ggUpdateImageInternal) me._ht_pdf_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf_bg.logicBlock_scaling();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_icon.logicBlock_alpha();
		me._ht_pdf_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 842px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
				skin._video_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._video_popup_title.ggUpdateText();
			skin._video_popup_title.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_file_popup.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_file_popup";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_file_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_file_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_file_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_video_file_bg.ggParameter.sx = 1.2;
					me._ht_video_file_bg.ggParameter.sy = 1.2;
					me._ht_video_file_bg.style.transform=parameterToTransform(me._ht_video_file_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_file_bg);}, 350);
				}
				else {
					me._ht_video_file_bg.ggParameter.sx = 1;
					me._ht_video_file_bg.ggParameter.sy = 1;
					me._ht_video_file_bg.style.transform=parameterToTransform(me._ht_video_file_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_file_bg);}, 350);
				}
			}
		}
		me._ht_video_file_bg.logicBlock_scaling();
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_file_bg']=true;
			me._ht_video_file_icon.logicBlock_alpha();
			me._ht_video_file_title.logicBlock_alpha();
			me._ht_video_file_bg.logicBlock_scaling();
		}
		me._ht_video_file_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_file_bg']=false;
			me._ht_video_file_icon.logicBlock_alpha();
			me._ht_video_file_title.logicBlock_alpha();
			me._ht_video_file_bg.logicBlock_scaling();
		}
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon_active=document.createElement('div');
		els=me._ht_video_file_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjUsMTAuNSAyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBkPSJNNC41LDcuNUgyMWMxLjcsMCwzLDEuMywzLDN2MTVjMCwxLjctMS4zLDMtMywzSDQuNWMtMS43LDAtMy0xLjMtMy0zdi0xNUMxLjUsOC44LDIuOCw3LjUsNC41LDcuNXoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._ht_video_file_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon_active);
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iMzQuNSwxMC41ICYjeGE7JiN4OTsyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC41LDcuNUgyMSYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzdjE1YzAsMS43LTEuMywzLTMsM0g0LjVjLTEuNywwLTMtMS4zLTMtM3YtMTVDMS41LDguOCwyLjgsNy41LDQuNSw3LjV6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tl'+
			'LXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_file_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file_icon.style.opacity == 0.0) { me._ht_video_file_icon.style.visibility="hidden"; } }, 205);
					me._ht_video_file_icon.style.opacity=0;
				}
				else {
					me._ht_video_file_icon.style.visibility=me._ht_video_file_icon.ggVisible?'inherit':'hidden';
					me._ht_video_file_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_file_icon.logicBlock_alpha();
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_file_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_title.style.visibility=me._ht_video_file_title.ggVisible?'inherit':'hidden';
					me._ht_video_file_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_title.style.opacity == 0.0) { me._ht_video_file_title.style.visibility="hidden"; } }, 205);
					me._ht_video_file_title.style.opacity=0;
				}
			}
		}
		me._ht_video_file_title.logicBlock_alpha();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_title);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			if (me._ht_video_file_custom_image.ggUpdateImageInternal) me._ht_video_file_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file_bg.logicBlock_scaling();
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_icon.logicBlock_alpha();
		me._ht_video_file_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 842px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.onclick=function (e) {
				skin._video_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._video_popup_title.ggUpdateText();
			skin._video_popup_title.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_url_popup.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_url_popup";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_url_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_url_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_video_url_bg.ggParameter.sx = 1.2;
					me._ht_video_url_bg.ggParameter.sy = 1.2;
					me._ht_video_url_bg.style.transform=parameterToTransform(me._ht_video_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_url_bg);}, 350);
				}
				else {
					me._ht_video_url_bg.ggParameter.sx = 1;
					me._ht_video_url_bg.ggParameter.sy = 1;
					me._ht_video_url_bg.style.transform=parameterToTransform(me._ht_video_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_url_bg);}, 350);
				}
			}
		}
		me._ht_video_url_bg.logicBlock_scaling();
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_url_bg']=true;
			me._ht_video_url_icon.logicBlock_alpha();
			me._ht_video_url_title.logicBlock_alpha();
			me._ht_video_url_bg.logicBlock_scaling();
		}
		me._ht_video_url_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_url_bg']=false;
			me._ht_video_url_icon.logicBlock_alpha();
			me._ht_video_url_title.logicBlock_alpha();
			me._ht_video_url_bg.logicBlock_scaling();
		}
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon_active=document.createElement('div');
		els=me._ht_video_url_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjUsMTAuNSAyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBkPSJNNC41LDcuNUgyMWMxLjcsMCwzLDEuMywzLDN2MTVjMCwxLjctMS4zLDMtMywzSDQuNWMtMS43LDAtMy0xLjMtMy0zdi0xNUMxLjUsOC44LDIuOCw3LjUsNC41LDcuNXoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._ht_video_url_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon_active);
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iMzQuNSwxMC41ICYjeGE7JiN4OTsyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC41LDcuNUgyMSYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzdjE1YzAsMS43LTEuMywzLTMsM0g0LjVjLTEuNywwLTMtMS4zLTMtM3YtMTVDMS41LDguOCwyLjgsNy41LDQuNSw3LjV6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tl'+
			'LXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_url_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url_icon.style.opacity == 0.0) { me._ht_video_url_icon.style.visibility="hidden"; } }, 205);
					me._ht_video_url_icon.style.opacity=0;
				}
				else {
					me._ht_video_url_icon.style.visibility=me._ht_video_url_icon.ggVisible?'inherit':'hidden';
					me._ht_video_url_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_url_icon.logicBlock_alpha();
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_url_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_title.style.visibility=me._ht_video_url_title.ggVisible?'inherit':'hidden';
					me._ht_video_url_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_title.style.opacity == 0.0) { me._ht_video_url_title.style.visibility="hidden"; } }, 205);
					me._ht_video_url_title.style.opacity=0;
				}
			}
		}
		me._ht_video_url_title.logicBlock_alpha();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_title);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			if (me._ht_video_url_custom_image.ggUpdateImageInternal) me._ht_video_url_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url_bg.logicBlock_scaling();
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_icon.logicBlock_alpha();
		me._ht_video_url_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 842px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.onclick=function (e) {
				skin._video_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._video_popup_title.ggUpdateText();
			skin._video_popup_title.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._vimeo_popup.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_vimeo_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_video_vimeo_bg.ggParameter.sx = 1.2;
					me._ht_video_vimeo_bg.ggParameter.sy = 1.2;
					me._ht_video_vimeo_bg.style.transform=parameterToTransform(me._ht_video_vimeo_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_bg);}, 350);
				}
				else {
					me._ht_video_vimeo_bg.ggParameter.sx = 1;
					me._ht_video_vimeo_bg.ggParameter.sy = 1;
					me._ht_video_vimeo_bg.style.transform=parameterToTransform(me._ht_video_vimeo_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_bg);}, 350);
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_scaling();
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=true;
			me._ht_video_vimeo_icon.logicBlock_alpha();
			me._ht_video_vimeo_title.logicBlock_alpha();
			me._ht_video_vimeo_bg.logicBlock_scaling();
		}
		me._ht_video_vimeo_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=false;
			me._ht_video_vimeo_icon.logicBlock_alpha();
			me._ht_video_vimeo_title.logicBlock_alpha();
			me._ht_video_vimeo_bg.logicBlock_scaling();
		}
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon_active=document.createElement('div');
		els=me._ht_video_vimeo_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjUsMTAuNSAyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBkPSJNNC41LDcuNUgyMWMxLjcsMCwzLDEuMywzLDN2MTVjMCwxLjctMS4zLDMtMywzSDQuNWMtMS43LDAtMy0xLjMtMy0zdi0xNUMxLjUsOC44LDIuOCw3LjUsNC41LDcuNXoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon_active);
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iMzQuNSwxMC41ICYjeGE7JiN4OTsyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC41LDcuNUgyMSYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzdjE1YzAsMS43LTEuMywzLTMsM0g0LjVjLTEuNywwLTMtMS4zLTMtM3YtMTVDMS41LDguOCwyLjgsNy41LDQuNSw3LjV6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tl'+
			'LXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo_icon.style.opacity == 0.0) { me._ht_video_vimeo_icon.style.visibility="hidden"; } }, 205);
					me._ht_video_vimeo_icon.style.opacity=0;
				}
				else {
					me._ht_video_vimeo_icon.style.visibility=me._ht_video_vimeo_icon.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo_icon.logicBlock_alpha();
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_title.style.visibility=me._ht_video_vimeo_title.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_title.style.opacity == 0.0) { me._ht_video_vimeo_title.style.visibility="hidden"; } }, 205);
					me._ht_video_vimeo_title.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_alpha();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_title);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			if (me._ht_video_vimeo_custom_image.ggUpdateImageInternal) me._ht_video_vimeo_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo_bg.logicBlock_scaling();
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_icon.logicBlock_alpha();
		me._ht_video_vimeo_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 842px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
				skin._video_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._video_popup_title.ggUpdateText();
			skin._video_popup_title.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._youtube_popup.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_youtube_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_youtube_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_video_youtube_bg.ggParameter.sx = 1.2;
					me._ht_video_youtube_bg.ggParameter.sy = 1.2;
					me._ht_video_youtube_bg.style.transform=parameterToTransform(me._ht_video_youtube_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_bg);}, 350);
				}
				else {
					me._ht_video_youtube_bg.ggParameter.sx = 1;
					me._ht_video_youtube_bg.ggParameter.sy = 1;
					me._ht_video_youtube_bg.style.transform=parameterToTransform(me._ht_video_youtube_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_bg);}, 350);
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_scaling();
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=true;
			me._ht_video_youtube_icon.logicBlock_alpha();
			me._ht_video_youtube_title.logicBlock_alpha();
			me._ht_video_youtube_bg.logicBlock_scaling();
		}
		me._ht_video_youtube_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=false;
			me._ht_video_youtube_icon.logicBlock_alpha();
			me._ht_video_youtube_title.logicBlock_alpha();
			me._ht_video_youtube_bg.logicBlock_scaling();
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon_active=document.createElement('div');
		els=me._ht_video_youtube_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjUsMTAuNSAyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBkPSJNNC41LDcuNUgyMWMxLjcsMCwzLDEuMywzLDN2MTVjMCwxLjctMS4zLDMtMywzSDQuNWMtMS43LDAtMy0xLjMtMy0zdi0xNUMxLjUsOC44LDIuOCw3LjUsNC41LDcuNXoiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon_active);
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHBvaW50cz0iMzQuNSwxMC41ICYjeGE7JiN4OTsyNCwxOCAzNC41LDI1LjUgIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC41LDcuNUgyMSYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzdjE1YzAsMS43LTEuMywzLTMsM0g0LjVjLTEuNywwLTMtMS4zLTMtM3YtMTVDMS41LDguOCwyLjgsNy41LDQuNSw3LjV6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tl'+
			'LXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_youtube_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube_icon.style.opacity == 0.0) { me._ht_video_youtube_icon.style.visibility="hidden"; } }, 205);
					me._ht_video_youtube_icon.style.opacity=0;
				}
				else {
					me._ht_video_youtube_icon.style.visibility=me._ht_video_youtube_icon.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube_icon.logicBlock_alpha();
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_youtube_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_title.style.visibility=me._ht_video_youtube_title.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_title.style.opacity == 0.0) { me._ht_video_youtube_title.style.visibility="hidden"; } }, 205);
					me._ht_video_youtube_title.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_alpha();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_title);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			if (me._ht_video_youtube_custom_image.ggUpdateImageInternal) me._ht_video_youtube_custom_image.ggUpdateImageInternal();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube_bg.logicBlock_scaling();
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_icon.logicBlock_alpha();
		me._ht_video_youtube_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + (hotspot.customimagewidth)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + (hotspot.customimageheight)/2 +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
				skin._webpagedisplay.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.url)));
					var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._webpagedisplay.ggUpdateText();
			skin._webpagedisplay.ggTextDiv.scrollTop = 0;
			skin._webpagedisplay.style.transition='none';
			skin._webpagedisplay.style.visibility=(Number(skin._webpagedisplay.style.opacity)>0||!skin._webpagedisplay.style.opacity)?'inherit':'hidden';
			skin._webpagedisplay.ggVisible=true;
			skin._webscreentint.style.transition='none';
			skin._webscreentint.style.visibility=(Number(skin._webscreentint.style.opacity)>0||!skin._webscreentint.style.opacity)?'inherit':'hidden';
			skin._webscreentint.ggVisible=true;
			skin._webpageclose.style.transition='none';
			skin._webpageclose.style.visibility=(Number(skin._webpageclose.style.opacity)>0||!skin._webpageclose.style.opacity)?'inherit':'hidden';
			skin._webpageclose.ggVisible=true;
			skin._webpageloading.style.transition='none';
			skin._webpageloading.style.visibility=(Number(skin._webpageloading.style.opacity)>0||!skin._webpageloading.style.opacity)?'inherit':'hidden';
			skin._webpageloading.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((266px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width >= 280)) && 
				((player.getViewerSize().width < 360))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width >= 360)) && 
				((player.getViewerSize().width < 375))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width >= 375)) && 
				((player.getViewerSize().width < 393))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width >= 393)) && 
				((player.getViewerSize().width < 414))
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				((player.getViewerSize().width >= 414)) && 
				((player.getViewerSize().width < 540))
			)
			{
				newLogicStateScaling = 4;
			}
			else if (
				((player.getViewerSize().width >= 540)) && 
				((player.getViewerSize().width < 768))
			)
			{
				newLogicStateScaling = 5;
			}
			else if (
				((player.getViewerSize().width >= 768)) && 
				((player.getViewerSize().width < 820))
			)
			{
				newLogicStateScaling = 6;
			}
			else if (
				((player.getViewerSize().width >= 820)) && 
				((player.getViewerSize().width < 912))
			)
			{
				newLogicStateScaling = 7;
			}
			else if (
				((player.getViewerSize().width >= 912)) && 
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 8;
			}
			else if (
				((player.getViewerSize().width >= 1024)) && 
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateScaling = 9;
			}
			else if (
				((player.getViewerSize().width >= 1280)) && 
				((player.getViewerSize().width < 1300))
			)
			{
				newLogicStateScaling = 10;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style.transition='transform 0s';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0.3;
					me._rectangle_1.ggParameter.sy = 0.3;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_1.ggParameter.sx = 0.4;
					me._rectangle_1.ggParameter.sy = 0.4;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 2) {
					me._rectangle_1.ggParameter.sx = 0.4;
					me._rectangle_1.ggParameter.sy = 0.4;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 3) {
					me._rectangle_1.ggParameter.sx = 0.45;
					me._rectangle_1.ggParameter.sy = 0.45;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 4) {
					me._rectangle_1.ggParameter.sx = 0.45;
					me._rectangle_1.ggParameter.sy = 0.45;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 5) {
					me._rectangle_1.ggParameter.sx = 0.4;
					me._rectangle_1.ggParameter.sy = 0.4;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 6) {
					me._rectangle_1.ggParameter.sx = 0.6;
					me._rectangle_1.ggParameter.sy = 0.6;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 7) {
					me._rectangle_1.ggParameter.sx = 0.7;
					me._rectangle_1.ggParameter.sy = 0.7;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 8) {
					me._rectangle_1.ggParameter.sx = 0.7;
					me._rectangle_1.ggParameter.sy = 0.7;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 9) {
					me._rectangle_1.ggParameter.sx = 0.6;
					me._rectangle_1.ggParameter.sy = 0.6;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else if (me._rectangle_1.ggCurrentLogicStateScaling == 10) {
					me._rectangle_1.ggParameter.sx = 0.8;
					me._rectangle_1.ggParameter.sy = 0.8;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
			}
		}
		me._rectangle_1.logicBlock_scaling();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._rectangle_1);
		me._rectangle_1.logicBlock_scaling();
			me.ggEvent_sizechanged=function() {
				me._rectangle_1.logicBlock_scaling();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_hotspot_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_2=document.createElement('div');
		el.ggId="Hotspot 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_2.onclick=function (e) {
			player.setVariableValue('gallery_show_hide', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1070px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_2.appendChild(me._rectangle_10);
			me.__div = me._hotspot_2;
	};
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 122px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_20=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_20.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_20.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._lottie_20.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_1.appendChild(me._lottie_20);
			me.__div = me._ht_node_1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node_1') {
				hotspot.skinid = 'ht_node_1';
				hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Hotspot 2') {
				hotspot.skinid = 'Hotspot 2';
				hsinst = new SkinHotspotClass_hotspot_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._gallery_timer.ggLastIsActive!=me._gallery_timer.ggIsActive()) {
			me._gallery_timer.ggLastIsActive=me._gallery_timer.ggIsActive();
			if (me._gallery_timer.ggLastIsActive) {
				me._gallery_forward.onclick.call(me._gallery_forward);
			} else {
			}
		}
		if (me._gallery_fx.ggLastIsActive!=me._gallery_fx.ggIsActive()) {
			me._gallery_fx.ggLastIsActive=me._gallery_fx.ggIsActive();
			if (me._gallery_fx.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._gallery_picture.style.transition='none';
				} else {
					me._gallery_picture.style.transition='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='0';
				me._gallery_picture.style.visibility='hidden';
				me._gallery_picture.ggSubElement.src='';
			} else {
				if (player.transitionsDisabled) {
					me._gallery_picture.style.transition='none';
				} else {
					me._gallery_picture.style.transition='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='1';
				me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
				me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
			}
		}
		me.__0.ggUpdateConditionTimer();
		me.__.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }.montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};