(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt=function(e,t){return function(){return e.apply(t,arguments)}};A=function(){return"visible"===document.visibilityState||null!=C.tests},P=function(){var e;return e=[],"undefined"!=typeof document&&null!==document&&document.addEventListener("visibilitychange",function(){var t,n,r,i;for(i=[],n=0,r=e.length;r>n;n++)t=e[n],i.push(t(A()));return i}),function(t){return e.push(t)}}(),S=function(e){var t,n,r;n={};for(t in e)r=e[t],n[t]=r;return n},w=function(e){var t;return t={},function(){var n,r,i,s,o;for(r="",s=0,o=arguments.length;o>s;s++)n=arguments[s],r+=n.toString()+",";return i=t[r],i||(t[r]=i=e.apply(this,arguments)),i}},D=function(e){return function(t){var n,r,i;return t instanceof Array||t instanceof NodeList||t instanceof HTMLCollection?i=function(){var i,s,o;for(o=[],r=i=0,s=t.length;s>=0?s>i:i>s;r=s>=0?++i:--i)n=Array.prototype.slice.call(arguments,1),n.splice(0,0,t[r]),o.push(e.apply(this,n));return o}.apply(this,arguments):e.apply(this,arguments)}},m=function(e,t){var n,r,i;i=[];for(n in t)r=t[n],i.push(null!=e[n]?e[n]:e[n]=r);return i},g=function(e,t){var n,r,i;if(null!=e.style)return y(e,t);i=[];for(n in t)r=t[n],i.push(e[n]=r.format());return i},y=function(e,t){var n,r,i,s,o;t=H(t),s=[],n=O(e);for(r in t)o=t[r],et.contains(r)?s.push([r,o]):(null!=o.format&&(o=o.format()),"number"==typeof o&&(o=""+o+nt(r,o)),n&&K.contains(r)?e.setAttribute(r,o):e.style[j(r)]=o);return s.length>0?n?(i=new f,i.applyProperties(s),e.setAttribute("transform",i.decompose().format())):(o=s.map(function(e){return tt(e[0],e[1])}).join(" "),e.style[j("transform")]=o):void 0},O=function(e){var t,n;return"undefined"!=typeof SVGElement&&null!==SVGElement&&"undefined"!=typeof SVGSVGElement&&null!==SVGSVGElement?e instanceof SVGElement&&!(e instanceof SVGSVGElement):null!=(t=null!=(n=C.tests)&&"function"==typeof n.isSVG?n.isSVG(e):void 0)?t:!1},q=function(e,t){var n;return n=Math.pow(10,t),Math.round(e*n)/n},l=function(){function e(e){var t,n,r;for(this.obj={},n=0,r=e.length;r>n;n++)t=e[n],this.obj[t]=1}return e.prototype.contains=function(e){return 1===this.obj[e]},e}(),Z=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})},F=new l("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")),N=new l("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")),et=new l("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")),K=new l("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")),nt=function(e,t){return"number"!=typeof t?"":F.contains(e)?"px":N.contains(e)?"deg":""},tt=function(e,t){var n,r;return n=(""+t).match(/^([0-9.-]*)([^0-9]*)$/),null!=n?(t=n[1],r=n[2]):t=parseFloat(t),t=q(parseFloat(t),10),(null==r||""===r)&&(r=nt(e,t)),""+e+"("+t+r+")"},H=function(e){var t,n,r,i,s,o,u,a;r={};for(i in e)if(s=e[i],et.contains(i))if(n=i.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/),n&&n[2].length>0)r[i]=s;else for(a=["X","Y","Z"],o=0,u=a.length;u>o;o++)t=a[o],r[n[1]+t]=s;else r[i]=s;return r},T=function(e){var t;return t="opacity"===e?1:0,""+t+nt(e,t)},k=function(e,t){var n,r,i,s,o,u,l,c,h,p,d;if(s={},n=O(e),null!=e.style)for(o=window.getComputedStyle(e,null),l=0,h=t.length;h>l;l++)r=t[l],et.contains(r)?null==s.transform&&(i=n?new f(null!=(d=e.transform.baseVal.consolidate())?d.matrix:void 0):a.fromTransform(o[j("transform")]),s.transform=i.decompose()):(u=o[r],null==u&&K.contains(r)&&(u=e.getAttribute(r)),(""===u||null==u)&&(u=T(r)),s[r]=x(u));else for(c=0,p=t.length;p>c;c++)r=t[c],s[r]=x(e[r]);return s},x=function(e){var t,n,i,a,f;for(i=[r,o,s,u],a=0,f=i.length;f>a;a++)if(n=i[a],t=n.create(e),null!=t)return t;return null},u=function(){function e(e){this.parts=e,this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this)}return e.prototype.interpolate=function(t,n){var r,i,s,o,u,a;for(o=this.parts,r=t.parts,s=[],i=u=0,a=Math.min(o.length,r.length);a>=0?a>u:u>a;i=a>=0?++u:--u)s.push(null!=o[i].interpolate?o[i].interpolate(r[i],n):o[i]);return new e(s)},e.prototype.format=function(){var e;return e=this.parts.map(function(e){return null!=e.format?e.format():e}),e.join("")},e.create=function(t){var n,r,o,u,a,f,l,c,h,p,d;for(t=""+t,o=[],l=[{re:/(#[a-f\d]{3,6})/gi,klass:i,parse:function(e){return e}},{re:/(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi,klass:i,parse:function(e){return e}},{re:/([-+]?[\d.]+)/gi,klass:s,parse:parseFloat}],c=0,p=l.length;p>c;c++)for(f=l[c],a=f.re;r=a.exec(t);)o.push({index:r.index,length:r[1].length,interpolable:f.klass.create(f.parse(r[1]))});for(o=o.sort(function(e,t){return e.index>t.index}),u=[],n=0,h=0,d=o.length;d>h;h++)r=o[h],r.index<n||(r.index>n&&u.push(t.substring(n,r.index)),u.push(r.interpolable),n=r.index+r.length);return n<t.length&&u.push(t.substring(n)),new e(u)},e}(),o=function(){function e(e){this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this),this.obj=e}return e.prototype.interpolate=function(t,n){var r,i,s,o,u;o=this.obj,r=t.obj,s={};for(i in o)u=o[i],s[i]=null!=u.interpolate?u.interpolate(r[i],n):u;return new e(s)},e.prototype.format=function(){return this.obj},e.create=function(t){var n,r,i;if(t instanceof Object){r={};for(n in t)i=t[n],r[n]=x(i);return new e(r)}return null},e}(),s=function(){function e(e){this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this),this.value=parseFloat(e)}return e.prototype.interpolate=function(t,n){var r,i;return i=this.value,r=t.value,new e((r-i)*n+i)},e.prototype.format=function(){return q(this.value,5)},e.create=function(t){return"number"==typeof t?new e(t):null},e}(),r=function(){function e(e){this.values=e,this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this)}return e.prototype.interpolate=function(t,n){var r,i,s,o,u,a;for(o=this.values,r=t.values,s=[],i=u=0,a=Math.min(o.length,r.length);a>=0?a>u:u>a;i=a>=0?++u:--u)s.push(null!=o[i].interpolate?o[i].interpolate(r[i],n):o[i]);return new e(s)},e.prototype.format=function(){return this.values.map(function(e){return null!=e.format?e.format():e})},e.createFromArray=function(t){var n;return n=t.map(function(e){return x(e)||e}),n=n.filter(function(e){return null!=e}),new e(n)},e.create=function(t){return t instanceof Array?e.createFromArray(t):null},e}(),e=function(){function e(e,t){this.rgb=null!=e?e:{},this.format=t,this.toRgba=rt(this.toRgba,this),this.toRgb=rt(this.toRgb,this),this.toHex=rt(this.toHex,this)}return e.fromHex=function(t){var n,r;return n=t.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i),null!=n&&(t="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),r=t.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),null!=r?new e({r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16),a:1},"hex"):null},e.fromRgb=function(t){var n,r;return n=t.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/),null!=n?new e({r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(null!=(r=n[4])?r:1)},null!=n[4]?"rgba":"rgb"):null},e.componentToHex=function(e){var t;return t=e.toString(16),1===t.length?"0"+t:t},e.prototype.toHex=function(){return"#"+e.componentToHex(this.rgb.r)+e.componentToHex(this.rgb.g)+e.componentToHex(this.rgb.b)},e.prototype.toRgb=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},e.prototype.toRgba=function(){return"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", "+this.rgb.a+")"},e}(),i=function(){function t(e){this.color=e,this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this)}return t.prototype.interpolate=function(n,r){var i,s,o,u,a,f,l,c;for(u=this.color,i=n.color,o={},c=["r","g","b"],f=0,l=c.length;l>f;f++)s=c[f],a=Math.round((i.rgb[s]-u.rgb[s])*r+u.rgb[s]),o[s]=Math.min(255,Math.max(0,a));return s="a",a=q((i.rgb[s]-u.rgb[s])*r+u.rgb[s],5),o[s]=Math.min(1,Math.max(0,a)),new t(new e(o,i.format))},t.prototype.format=function(){return"hex"===this.color.format?this.color.toHex():"rgb"===this.color.format?this.color.toRgb():"rgba"===this.color.format?this.color.toRgba():void 0},t.create=function(n){var r;if("string"==typeof n)return r=e.fromHex(n)||e.fromRgb(n),null!=r?new t(r):null},t}(),n=function(){function e(e){this.props=e,this.applyRotateCenter=rt(this.applyRotateCenter,this),this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this)}return e.prototype.interpolate=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d;for(s={},h=["translate","scale","rotate"],o=0,l=h.length;l>o;o++)for(i=h[o],s[i]=[],r=u=0,p=this.props[i].length;p>=0?p>u:u>p;r=p>=0?++u:--u)s[i][r]=(t.props[i][r]-this.props[i][r])*n+this.props[i][r];for(r=a=1;2>=a;r=++a)s.rotate[r]=t.props.rotate[r];for(d=["skew"],f=0,c=d.length;c>f;f++)i=d[f],s[i]=(t.props[i]-this.props[i])*n+this.props[i];return new e(s)},e.prototype.format=function(){return"translate("+this.props.translate.join(",")+") rotate("+this.props.rotate.join(",")+") skewX("+this.props.skew+") scale("+this.props.scale.join(",")+")"},e.prototype.applyRotateCenter=function(e){var t,n,r,i,s,o;for(n=b.createSVGMatrix(),n=n.translate(e[0],e[1]),n=n.rotate(this.props.rotate[0]),n=n.translate(-e[0],-e[1]),r=new f(n),i=r.decompose().props.translate,o=[],t=s=0;1>=s;t=++s)o.push(this.props.translate[t]-=i[t]);return o},e}(),b="undefined"!=typeof document&&null!==document?document.createElementNS("http://www.w3.org/2000/svg","svg"):void 0,f=function(){function e(e){this.m=e,this.applyProperties=rt(this.applyProperties,this),this.decompose=rt(this.decompose,this),this.m||(this.m=b.createSVGMatrix())}return e.prototype.decompose=function(){var e,t,r,i,s;return i=new c([this.m.a,this.m.b]),s=new c([this.m.c,this.m.d]),e=i.length(),r=i.dot(s),i=i.normalize(),t=s.combine(i,1,-r).length(),new n({translate:[this.m.e,this.m.f],rotate:[180*Math.atan2(this.m.b,this.m.a)/Math.PI,this.rotateCX,this.rotateCY],scale:[e,t],skew:r/t*180/Math.PI})},e.prototype.applyProperties=function(e){var t,n,r,i,s,o,u,a;for(t={},s=0,o=e.length;o>s;s++)r=e[s],t[r[0]]=r[1];for(n in t)i=t[n],"translateX"===n?this.m=this.m.translate(i,0):"translateY"===n?this.m=this.m.translate(0,i):"scaleX"===n?this.m=this.m.scale(i,1):"scaleY"===n?this.m=this.m.scale(1,i):"rotateZ"===n?this.m=this.m.rotate(i):"skewX"===n?this.m=this.m.skewX(i):"skewY"===n&&(this.m=this.m.skewY(i));return this.rotateCX=null!=(u=t.rotateCX)?u:0,this.rotateCY=null!=(a=t.rotateCY)?a:0},e}(),c=function(){function e(e){this.els=e,this.combine=rt(this.combine,this),this.normalize=rt(this.normalize,this),this.length=rt(this.length,this),this.cross=rt(this.cross,this),this.dot=rt(this.dot,this),this.e=rt(this.e,this)}return e.prototype.e=function(e){return 1>e||e>this.els.length?null:this.els[e-1]},e.prototype.dot=function(e){var t,n,r;if(t=e.els||e,r=0,n=this.els.length,n!==t.length)return null;for(n+=1;--n;)r+=this.els[n-1]*t[n-1];return r},e.prototype.cross=function(t){var n,r;return r=t.els||t,3!==this.els.length||3!==r.length?null:(n=this.els,new e([n[1]*r[2]-n[2]*r[1],n[2]*r[0]-n[0]*r[2],n[0]*r[1]-n[1]*r[0]]))},e.prototype.length=function(){var e,t,n,r,i;for(e=0,i=this.els,n=0,r=i.length;r>n;n++)t=i[n],e+=Math.pow(t,2);return Math.sqrt(e)},e.prototype.normalize=function(){var t,n,r,i,s;r=this.length(),i=[],s=this.els;for(n in s)t=s[n],i[n]=t/r;return new e(i)},e.prototype.combine=function(t,n,r){var i,s,o,u;for(s=[],i=o=0,u=this.els.length;u>=0?u>o:o>u;i=u>=0?++o:--o)s[i]=n*this.els[i]+r*t.els[i];return new e(s)},e}(),t=function(){function e(){this.toMatrix=rt(this.toMatrix,this),this.format=rt(this.format,this),this.interpolate=rt(this.interpolate,this)}return e.prototype.interpolate=function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E;for(null==r&&(r=null),o=this,s=new e,w=["translate","scale","skew","perspective"],v=0,b=w.length;b>v;v++)for(l=w[v],s[l]=[],u=m=0,E=o[l].length-1;E>=0?E>=m:m>=E;u=E>=0?++m:--m)s[l][u]=null==r||r.indexOf(l)>-1||r.indexOf(""+l+["x","y","z"][u])>-1?(t[l][u]-o[l][u])*n+o[l][u]:o[l][u];if(null==r||-1!==r.indexOf("rotate")){if(c=o.quaternion,h=t.quaternion,i=c[0]*h[0]+c[1]*h[1]+c[2]*h[2]+c[3]*h[3],0>i){for(u=g=0;3>=g;u=++g)c[u]=-c[u];i=-i}for(i+1>.05?1-i>=.05?(d=Math.acos(i),f=1/Math.sin(d),p=Math.sin(d*(1-n))*f,a=Math.sin(d*n)*f):(p=1-n,a=n):(h[0]=-c[1],h[1]=c[0],h[2]=-c[3],h[3]=c[2],p=Math.sin(piDouble*(.5-n)),a=Math.sin(piDouble*n)),s.quaternion=[],u=y=0;3>=y;u=++y)s.quaternion[u]=c[u]*p+h[u]*a}else s.quaternion=o.quaternion;return s},e.prototype.format=function(){return this.toMatrix().toString()},e.prototype.toMatrix=function(){var e,t,n,r,i,s,o,u,f,l,c,h,p,d,v,m;for(e=this,i=a.I(4),t=p=0;3>=p;t=++p)i.els[t][3]=e.perspective[t];for(s=e.quaternion,l=s[0],c=s[1],h=s[2],f=s[3],o=e.skew,r=[[1,0],[2,0],[2,1]],t=d=2;d>=0;t=--d)o[t]&&(u=a.I(4),u.els[r[t][0]][r[t][1]]=o[t],i=i.multiply(u));for(i=i.multiply(new a([[1-2*(c*c+h*h),2*(l*c-h*f),2*(l*h+c*f),0],[2*(l*c+h*f),1-2*(l*l+h*h),2*(c*h-l*f),0],[2*(l*h-c*f),2*(c*h+l*f),1-2*(l*l+c*c),0],[0,0,0,1]])),t=v=0;2>=v;t=++v){for(n=m=0;2>=m;n=++m)i.els[t][n]*=e.scale[t];i.els[3][t]=e.translate[t]}return i},e}(),a=function(){function e(e){this.els=e,this.toString=rt(this.toString,this),this.decompose=rt(this.decompose,this),this.inverse=rt(this.inverse,this),this.augment=rt(this.augment,this),this.toRightTriangular=rt(this.toRightTriangular,this),this.transpose=rt(this.transpose,this),this.multiply=rt(this.multiply,this),this.dup=rt(this.dup,this),this.e=rt(this.e,this)}return e.prototype.e=function(e,t){return 1>e||e>this.els.length||1>t||t>this.els[0].length?null:this.els[e-1][t-1]},e.prototype.dup=function(){return new e(this.els)},e.prototype.multiply=function(t){var n,r,i,s,o,u,a,f,l,c,h,p,d;for(p=t.modulus?!0:!1,n=t.els||t,"undefined"==typeof n[0][0]&&(n=(new e(n)).els),c=this.els.length,a=c,f=n[0].length,i=this.els[0].length,s=[],c+=1;--c;)for(o=a-c,s[o]=[],h=f,h+=1;--h;){for(u=f-h,d=0,l=i,l+=1;--l;)r=i-l,d+=this.els[o][r]*n[r][u];s[o][u]=d}return n=new e(s),p?n.col(1):n},e.prototype.transpose=function(){var t,n,r,i,s,o,u;for(u=this.els.length,t=this.els[0].length,n=[],s=t,s+=1;--s;)for(r=t-s,n[r]=[],o=u,o+=1;--o;)i=u-o,n[r][i]=this.els[i][r];return new e(n)},e.prototype.toRightTriangular=function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p;for(e=this.dup(),u=this.els.length,i=u,s=this.els[0].length;--u;){if(n=i-u,0===e.els[n][n])for(r=l=h=n+1;i>=h?i>l:l>i;r=i>=h?++l:--l)if(0!==e.els[r][n]){for(t=[],a=s,a+=1;--a;)f=s-a,t.push(e.els[n][f]+e.els[r][f]);e.els[n]=t;break}if(0!==e.els[n][n])for(r=c=p=n+1;i>=p?i>c:c>i;r=i>=p?++c:--c){for(o=e.els[r][n]/e.els[n][n],t=[],a=s,a+=1;--a;)f=s-a,t.push(n>=f?0:e.els[r][f]-e.els[n][f]*o);e.els[r]=t}}return e},e.prototype.augment=function(t){var n,r,i,s,o,u,a,f,l;if(n=t.els||t,"undefined"==typeof n[0][0]&&(n=(new e(n)).els),r=this.dup(),i=r.els[0].length,f=r.els.length,u=f,a=n[0].length,f!==n.length)return null;for(f+=1;--f;)for(s=u-f,l=a,l+=1;--l;)o=a-l,r.els[s][i+o]=n[s][o];return r},e.prototype.inverse=function(){var t,n,r,i,s,o,u,a,f,l,c,h,p;for(l=this.els.length,u=l,t=this.augment(e.I(l)).toRightTriangular(),a=t.els[0].length,s=[],l+=1;--l;){for(i=l-1,r=[],c=a,s[i]=[],n=t.els[i][i],c+=1;--c;)h=a-c,f=t.els[i][h]/n,r.push(f),h>=u&&s[i].push(f);for(t.els[i]=r,o=p=0;i>=0?i>p:p>i;o=i>=0?++p:--p){for(r=[],c=a,c+=1;--c;)h=a-c,r.push(t.els[o][h]-t.els[i][h]*t.els[o][i]);t.els[o]=r}}return new e(s)},e.I=function(t){var n,r,i,s,o;for(n=[],s=t,t+=1;--t;)for(r=s-t,n[r]=[],o=s,o+=1;--o;)i=s-o,n[r][i]=r===i?1:0;return new e(n)},e.prototype.decompose=function(){var e,n,r,i,s,o,u,a,f,l,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I;for(o=this,E=[],y=[],b=[],l=[],a=[],e=[],n=O=0;3>=O;n=++O)for(e[n]=[],i=M=0;3>=M;i=++M)e[n][i]=o.els[n][i];if(0===e[3][3])return!1;for(n=_=0;3>=_;n=++_)for(i=D=0;3>=D;i=++D)e[n][i]/=e[3][3];for(f=o.dup(),n=P=0;2>=P;n=++P)f.els[n][3]=0;if(f.els[3][3]=1,0!==e[0][3]||0!==e[1][3]||0!==e[2][3]){for(p=new c(e.slice(0,4)[3]),r=f.inverse(),S=r.transpose(),a=S.multiply(p).els,n=H=0;2>=H;n=++H)e[n][3]=0;e[3][3]=1}else a=[0,0,0,1];for(n=B=0;2>=B;n=++B)E[n]=e[3][n],e[3][n]=0;for(v=[],n=j=0;2>=j;n=++j)v[n]=new c(e[n].slice(0,3));if(y[0]=v[0].length(),v[0]=v[0].normalize(),b[0]=v[0].dot(v[1]),v[1]=v[1].combine(v[0],1,-b[0]),y[1]=v[1].length(),v[1]=v[1].normalize(),b[0]/=y[1],b[1]=v[0].dot(v[2]),v[2]=v[2].combine(v[0],1,-b[1]),b[2]=v[1].dot(v[2]),v[2]=v[2].combine(v[1],1,-b[2]),y[2]=v[2].length(),v[2]=v[2].normalize(),b[1]/=y[2],b[2]/=y[2],u=v[1].cross(v[2]),v[0].dot(u)<0)for(n=F=0;2>=F;n=++F)for(y[n]*=-1,i=I=0;2>=I;i=++I)v[n].els[i]*=-1;m=function(e,t){return v[e].els[t]},d=[],d[1]=Math.asin(-m(0,2)),0!==Math.cos(d[1])?(d[0]=Math.atan2(m(1,2),m(2,2)),d[2]=Math.atan2(m(0,1),m(0,0))):(d[0]=Math.atan2(-m(2,0),m(1,1)),d[1]=0),w=m(0,0)+m(1,1)+m(2,2)+1,w>1e-4?(g=.5/Math.sqrt(w),C=.25/g,k=(m(2,1)-m(1,2))*g,L=(m(0,2)-m(2,0))*g,A=(m(1,0)-m(0,1))*g):m(0,0)>m(1,1)&&m(0,0)>m(2,2)?(g=2*Math.sqrt(1+m(0,0)-m(1,1)-m(2,2)),k=.25*g,L=(m(0,1)+m(1,0))/g,A=(m(0,2)+m(2,0))/g,C=(m(2,1)-m(1,2))/g):m(1,1)>m(2,2)?(g=2*Math.sqrt(1+m(1,1)-m(0,0)-m(2,2)),k=(m(0,1)+m(1,0))/g,L=.25*g,A=(m(1,2)+m(2,1))/g,C=(m(0,2)-m(2,0))/g):(g=2*Math.sqrt(1+m(2,2)-m(0,0)-m(1,1)),k=(m(0,2)+m(2,0))/g,L=(m(1,2)+m(2,1))/g,A=.25*g,C=(m(1,0)-m(0,1))/g),l=[k,L,A,C],h=new t,h.translate=E,h.scale=y,h.skew=b,h.quaternion=l,h.perspective=a,h.rotate=d;for(T in h){x=h[T];for(s in x)N=x[s],isNaN(N)&&(x[s]=0)}return h},e.prototype.toString=function(){var e,t,n,r,i;for(n="matrix3d(",e=r=0;3>=r;e=++r)for(t=i=0;3>=i;t=++i)n+=q(this.els[e][t],10),(3!==e||3!==t)&&(n+=",");return n+=")"},e.matrixForTransform=w(function(e){var t,n,r,i,s,o;return t=document.createElement("div"),t.style.position="absolute",t.style.visibility="hidden",t.style[j("transform")]=e,document.body.appendChild(t),r=window.getComputedStyle(t,null),n=null!=(i=null!=(s=r.transform)?s:r[j("transform")])?i:null!=(o=C.tests)?o.matrixForTransform(e):void 0,document.body.removeChild(t),n}),e.fromTransform=function(t){var n,r,i,s,o,u;for(s=null!=t?t.match(/matrix3?d?\(([-0-9,e \.]*)\)/):void 0,s?(n=s[1].split(","),n=n.map(parseFloat),r=6===n.length?[n[0],n[1],0,0,n[2],n[3],0,0,0,0,1,0,n[4],n[5],0,1]:n):r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=[],i=u=0;3>=u;i=++u)o.push(r.slice(4*i,4*i+4));return new e(o)},e}(),B=w(function(e){var t,n,r,i,s,o,u,a,f,l;if(void 0!==document.body.style[e])return"";for(i=e.split("-"),s="",o=0,a=i.length;a>o;o++)r=i[o],s+=r.substring(0,1).toUpperCase()+r.substring(1);for(l=["Webkit","Moz","ms"],u=0,f=l.length;f>u;u++)if(n=l[u],t=n+s,void 0!==document.body.style[t])return n;return""}),j=w(function(e){var t;return t=B(e),"Moz"===t?""+t+(e.substring(0,1).toUpperCase()+e.substring(1)):""!==t?"-"+t.toLowerCase()+"-"+Z(e):Z(e)}),I="undefined"!=typeof window&&null!==window?window.requestAnimationFrame:void 0,d=[],v=[],X=!1,V=1,"undefined"!=typeof window&&null!==window&&window.addEventListener("keyup",function(e){return 68===e.keyCode&&e.shiftKey&&e.ctrlKey?C.toggleSlow():void 0}),null==I&&(M=0,I=function(e){var t,n,r;return t=Date.now(),r=Math.max(0,16-(t-M)),n=window.setTimeout(function(){return e(t+r)},r),M=t+r,n}),U=!1,R=!1,J=function(){return U?void 0:(U=!0,I(z))},z=function(e){var t,n,r,i;if(R)return void I(z);for(n=[],r=0,i=d.length;i>r;r++)t=d[r],p(e,t)||n.push(t);return d=d.filter(function(e){return-1===n.indexOf(e)}),0===d.length?U=!1:I(z)},p=function(e,t){var n,r,i,s,o,u,a,f;if(null==t.tStart&&(t.tStart=e),s=(e-t.tStart)/t.options.duration,o=t.curve(s),r={},s>=1)r=t.curve.returnsToSelf?t.properties.start:t.properties.end;else{f=t.properties.start;for(n in f)i=f[n],r[n]=L(i,t.properties.end[n],o)}return g(t.el,r),"function"==typeof (u=t.options).change&&u.change(t.el),s>=1&&"function"==typeof (a=t.options).complete&&a.complete(t.el),1>s},L=function(e,t,n){return null!=e&&null!=e.interpolate?e.interpolate(t,n):null},$=function(e,t,n,r){var i,o,l,c,h,p,m,g;if(null!=r&&(v=v.filter(function(e){return e.id!==r})),C.stop(e,{timeout:!1}),!n.animated)return C.css(e,t),void ("function"==typeof n.complete&&n.complete(this));t=H(t),p=k(e,Object.keys(t)),i={},m=[];for(c in t)g=t[c],null!=e.style&&et.contains(c)?m.push([c,g]):(o=x(g),o instanceof s&&null!=e.style&&(o=new u([o,nt(c,0)])),i[c]=o);return m.length>0&&(l=O(e),l?(h=new f,h.applyProperties(m)):(g=m.map(function(e){return tt(e[0],e[1])}).join(" "),h=a.fromTransform(a.matrixForTransform(g))),i.transform=h.decompose(),l&&p.transform.applyRotateCenter([i.transform.props.rotate[1],i.transform.props.rotate[2]])),d.push({el:e,properties:{start:p,end:i},options:n,curve:n.type.call(n.type,n)}),J()},Y=[],G=0,W=function(e){return A()?e.realTimeoutId=setTimeout(function(){return e.fn(),E(e.id)},e.delay):void 0},h=function(e,t){var n;return G+=1,n={id:G,tStart:Date.now(),fn:e,delay:t,originalDelay:t},W(n),Y.push(n),G},E=function(e){return Y=Y.filter(function(t){return t.id===e&&clearTimeout(t.realTimeoutId),t.id!==e})},_=function(e,t){var n;return null!=e?(n=e-t.tStart,t.originalDelay-n):t.originalDelay},"undefined"!=typeof window&&null!==window&&window.addEventListener("unload",function(){}),Q=null,P(function(e){var t,n,r,i,s,o,u,a,f,l;if(R=!e,e){if(U)for(n=Date.now()-Q,s=0,a=d.length;a>s;s++)t=d[s],null!=t.tStart&&(t.tStart+=n);for(o=0,f=Y.length;f>o;o++)r=Y[o],r.delay=_(Q,r),W(r);return Q=null}for(Q=Date.now(),l=[],i=0,u=Y.length;u>i;i++)r=Y[i],l.push(clearTimeout(r.realTimeoutId));return l}),C={},C.linear=function(){return function(e){return e}},C.spring=function(e){var t,n,r,i,s,o;return null==e&&(e={}),m(e,C.spring.defaults),i=Math.max(1,e.frequency/20),s=Math.pow(20,e.friction/100),o=e.anticipationSize/1e3,r=Math.max(0,o),t=function(t){var n,r,i,s,u;return n=.8,s=o/(1-o),u=0,i=(s-n*u)/(s-u),r=(n-i)/s,r*t*e.anticipationStrength/100+i},n=function(e){return Math.pow(s/10,-e)*(1-e)},function(e){var r,s,u,a,f,l,c,h;return l=e/(1-o)-o/(1-o),o>e?(h=o/(1-o)-o/(1-o),c=0/(1-o)-o/(1-o),f=Math.acos(1/t(h)),u=(Math.acos(1/t(c))-f)/(i*-o),r=t):(r=n,f=0,u=1),s=r(l),a=i*(e-o)*u+f,1-s*Math.cos(a)}},C.bounce=function(e){var t,n,r,i;return null==e&&(e={}),m(e,C.bounce.defaults),r=Math.max(1,e.frequency/20),i=Math.pow(20,e.friction/100),t=function(e){return Math.pow(i/10,-e)*(1-e)},n=function(e){var n,i,s,o;return o=-1.57,i=1,n=t(e),s=r*e*i+o,n*Math.cos(s)},n.returnsToSelf=!0,n},C.gravity=function(e){var t,n,r,i,s,o,u;return null==e&&(e={}),m(e,C.gravity.defaults),n=Math.min(e.bounciness/1250,.8),i=e.elasticity/1e3,u=100,r=[],t=function(){var r,i;for(r=Math.sqrt(2/u),i={a:-r,b:r,H:1},e.returnsToSelf&&(i.a=0,i.b=2*i.b);i.H>.001;)t=i.b-i.a,i={a:i.b,b:i.b+t*n,H:i.H*n*n};return i.b}(),o=function(n,r,i,s){var o,u;return t=r-n,u=2/t*s-1-2*n/t,o=u*u*i-i+1,e.returnsToSelf&&(o=1-o),o},function(){var s,o,a,f;for(o=Math.sqrt(2/(u*t*t)),a={a:-o,b:o,H:1},e.returnsToSelf&&(a.a=0,a.b=2*a.b),r.push(a),s=t,f=[];a.b<1&&a.H>.001;)s=a.b-a.a,a={a:a.b,b:a.b+s*n,H:a.H*i},f.push(r.push(a));return f}(),s=function(t){var n,i,s;for(i=0,n=r[i];!(t>=n.a&&t<=n.b)&&(i+=1,n=r[i]););return s=n?o(n.a,n.b,n.H,t):e.returnsToSelf?0:1},s.returnsToSelf=e.returnsToSelf,s},C.forceWithGravity=function(e){return null==e&&(e={}),m(e,C.forceWithGravity.defaults),e.returnsToSelf=!0,C.gravity(e)},C.bezier=function(){var e,t,n;return t=function(e,t,n,r,i){return Math.pow(1-e,3)*t+3*Math.pow(1-e,2)*e*n+3*(1-e)*Math.pow(e,2)*r+Math.pow(e,3)*i},e=function(e,n,r,i,s){return{x:t(e,n.x,r.x,i.x,s.x),y:t(e,n.y,r.y,i.y,s.y)}},n=function(e,t,n){var r,i,s,o,u,a,f,l,c,h;for(r=null,c=0,h=t.length;h>c&&(i=t[c],e>=i(0).x&&e<=i(1).x&&(r=i),null===r);c++);if(!r)return n?0:1;for(l=1e-4,o=0,a=1,u=(a+o)/2,f=r(u).x,s=0;Math.abs(e-f)>l&&100>s;)e>f?o=u:a=u,u=(a+o)/2,f=r(u).x,s+=1;return r(u).y},function(t){var r,i,s;return null==t&&(t={}),s=t.points,r=function(){var t,n,i;r=[],i=function(t,n){var i;return i=function(r){return e(r,t,t.cp[t.cp.length-1],n.cp[0],n)},r.push(i)};for(t in s){if(n=parseInt(t),n>=s.length-1)break;i(s[n],s[n+1])}return r}(),i=function(e){return 0===e?0:1===e?1:n(e,r,this.returnsToSelf)},i.returnsToSelf=0===s[s.length-1].y,i}}(),C.easeInOut=function(e){var t,n;return null==e&&(e={}),t=null!=(n=e.friction)?n:C.easeInOut.defaults.friction,C.bezier({points:[{x:0,y:0,cp:[{x:.92-t/1e3,y:0}]},{x:1,y:1,cp:[{x:.08+t/1e3,y:1}]}]})},C.easeIn=function(e){var t,n;return null==e&&(e={}),t=null!=(n=e.friction)?n:C.easeIn.defaults.friction,C.bezier({points:[{x:0,y:0,cp:[{x:.92-t/1e3,y:0}]},{x:1,y:1,cp:[{x:1,y:1}]}]})},C.easeOut=function(e){var t,n;return null==e&&(e={}),t=null!=(n=e.friction)?n:C.easeOut.defaults.friction,C.bezier({points:[{x:0,y:0,cp:[{x:0,y:0}]},{x:1,y:1,cp:[{x:.08+t/1e3,y:1}]}]})},C.spring.defaults={frequency:300,friction:200,anticipationSize:0,anticipationStrength:0},C.bounce.defaults={frequency:300,friction:200},C.forceWithGravity.defaults=C.gravity.defaults={bounciness:400,elasticity:200},C.easeInOut.defaults=C.easeIn.defaults=C.easeOut.defaults={friction:500},C.css=D(function(e,t){return y(e,t,!0)}),C.animate=D(function(e,t,n){var r;return null==n&&(n={}),n=S(n),m(n,{type:C.easeInOut,duration:1e3,delay:0,animated:!0}),n.duration=Math.max(0,n.duration*V),n.delay=Math.max(0,n.delay),0===n.delay?$(e,t,n):(r=C.setTimeout(function(){return $(e,t,n,r)},n.delay),v.push({id:r,el:e}))}),C.stop=D(function(e,t){return null==t&&(t={}),null==t.timeout&&(t.timeout=!0),t.timeout&&(v=v.filter(function(n){return n.el!==e||null!=t.filter&&!t.filter(n)?!0:(C.clearTimeout(n.id),!1)})),d=d.filter(function(t){return t.el!==e})}),C.setTimeout=function(e,t){return h(e,t*V)},C.clearTimeout=function(e){return E(e)},C.toggleSlow=function(){return X=!X,V=X?3:1,"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log("dynamics.js: slow animations "+(X?"enabled":"disabled")):void 0},"object"==typeof module&&"object"==typeof module.exports?module.exports=C:"function"==typeof define?define("dynamics",function(){return C}):window.dynamics=C}).call(this);