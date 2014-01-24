function animate(elm,props, duration, fps,easing) {
﻿  duration = (duration) ? parseFloat(duration) : 1000;
﻿  fps      = (fps)      ? parseFloat(fps)      : 20;
﻿  easing   = (easing)   ? easing               : linearEase;

﻿  var interval    = Math.ceil(1000/fps);
﻿  var totalframes = Math.ceil(duration/interval);

﻿  for(i=1;i <= totalframes;i++) {
﻿  (function(){
﻿  ﻿  var frame=i;
﻿  ﻿  interpolate=function() {
﻿  ﻿  ﻿  for(var prop in props){
﻿  ﻿  ﻿  ﻿  if(!/olor/.test(prop)) {
﻿  ﻿  ﻿  ﻿  ﻿  var begin = props[prop].start*100;
﻿  ﻿  ﻿  ﻿  ﻿  var end   = props[prop].end*100;
﻿  ﻿  ﻿  ﻿  ﻿  setStyle(elm,prop,easing(frame, begin, end-begin, totalframes)/100);
﻿  ﻿  ﻿  ﻿  } 
﻿  ﻿  ﻿  ﻿  else {
﻿  ﻿  ﻿  ﻿  ﻿  var b = hexStr2rgbArray(props[prop].start);
﻿  ﻿  ﻿  ﻿  ﻿  var e = hexStr2rgbArray(props[prop].end);
﻿  ﻿  ﻿  ﻿  ﻿  var rgb=[];
﻿  ﻿  ﻿  ﻿  ﻿  for(j=0;j<3;j++) 
﻿  ﻿  ﻿  ﻿  ﻿  ﻿  rgb.push(parseInt(easing(frame, b[j], e[j]-b[j], totalframes)));
﻿  ﻿  ﻿  ﻿  ﻿  setStyle(elm,prop,'rgb('+rgb.join(',')+')');  
﻿  ﻿  ﻿  ﻿  }
﻿  ﻿  ﻿  }
﻿  ﻿  }
﻿  ﻿  timer = setTimeout(interpolate,interval*frame);
﻿  })();   
﻿  }
}

function d2h(dec){ 
﻿  return dec.toString(16);
}

function h2d(hex){ 
﻿  return parseInt(hex,16);
}

function rgb2h(r,g,b){ 
﻿  return [d2h(r),d2h(g),d2h(b)];
}

function h2rgb(h,e,x){  
﻿  return [h2d(h),h2d(e),h2d(x)];
}

function cssColor2rgb(color){
﻿  if(color.indexOf('rgb')<=-1){
﻿  ﻿  return hexStr2rgbArray(color);
﻿  }
﻿  return rgbStr2rgbArray(color);
}

function hexStr2rgbArray(color){
﻿  return h2rgb(color.substring(1,3),color.substring(3,5),color.substring(5,7));
}

function rgbStr2rgbArray(color){
﻿  return color.substring(4,color.length-1).split(',');
}

function camelize(val){
﻿  return val.replace(/-(.)/g, function(m, l){return l.toUpperCase()});
}

function setOpacity(elm,val){
﻿  elm.style.zoom = 1;
﻿  elm.style.filter = "alpha(opacity=" + parseFloat(val*100) + ")";
﻿  elm.style.opacity  = parseFloat(val); 
﻿  return elm;
}

function setStyle(elm,prop,val){
﻿  if(prop=='opacity') 
﻿  return setOpacity(elm,parseFloat(val));
﻿  if(prop=='float')   
﻿  prop = (window.attachEvent)? 'styleFloat' : 'cssFloat';
﻿  prop = camelize(prop);
﻿  unit=(prop=='zIndex'||prop=='zoom') ? '':'px';
﻿  elm.style[prop] = (typeof val=='string') ? val : val+unit;
﻿  return elm;
}

function linearEase(frame,begin,change,duration,amplitude,period){
﻿  return change*(frame/duration)+begin;
}

function easeInQuad(frame,begin,change,duration,amplitude,period){
﻿  return change*(frame/=duration)*frame + begin;
}
﻿  
function easeOutQuad(frame,begin,change,duration,amplitude,period) {
﻿  return -change *(frame/=duration)*(frame-2) + begin;
}
﻿  
function easeInOutQuad(frame,begin,change,duration,amplitude,period) {
﻿  if ((frame/=duration/2) < 1) return change/2*frame*frame + begin;
﻿  return -change/2 * ((--frame)*(frame-2) - 1) + begin;
}
﻿  
function easeInCubic(frame,begin,change,duration,amplitude,period) {
﻿  return change*(frame/=duration)*frame*frame + begin;
}
﻿  
function easeOutCubic(frame,begin,change,duration,amplitude,period) {
﻿  return change*((frame=frame/duration-1)*frame*frame + 1) + begin;
}
﻿  
function easeInOutCubic(frame,begin,change,duration,amplitude,period) {
﻿  if ((frame/=duration/2) < 1) return change/2*frame*frame*frame + begin;
﻿  return change/2*((frame-=2)*frame*frame + 2) + begin;
}
﻿  
function easeInQuart(frame,begin,change,duration,amplitude,period) {
﻿  return change*(frame/=duration)*frame*frame*frame + begin;
}
﻿  
function easeOutQuart(frame,begin,change,duration,amplitude,period) {
﻿  return -change * ((frame=frame/duration-1)*frame*frame*frame - 1) + begin;
}
﻿  
function easeInOutQuart(frame,begin,change,duration,amplitude,period) {
﻿  if ((frame/=duration/2) < 1) return change/2*frame*frame*frame*frame + begin;
﻿  return -change/2 * ((frame-=2)*frame*frame*frame - 2) + begin;
}
﻿  
function easeInQuint(frame,begin,change,duration,amplitude,period) {
﻿  return change*(frame/=duration)*frame*frame*frame*frame + begin;
}
﻿  
function easeOutQuint(frame,begin,change,duration,amplitude,period) {
﻿  return change*((frame=frame/duration-1)*frame*frame*frame*frame + 1) + begin;
}
﻿   
function easeInOutQuint(frame,begin,change,duration,amplitude,period) {
﻿  if ((frame/=duration/2) < 1) return change/2*frame*frame*frame*frame*frame + begin;
﻿  return change/2*((frame-=2)*frame*frame*frame*frame + 2) + begin;
}
﻿  
function easeInSine(frame,begin,change,duration,amplitude,period) {
﻿  return -change * Math.cos(frame/duration * (Math.PI/2)) + change + begin;
}
﻿  
function easeOutSine(frame,begin,change,duration,amplitude,period) {
﻿  return change * Math.sin(frame/duration * (Math.PI/2)) + begin;
}
﻿  
function easeInOutSine(frame,begin,change,duration,amplitude,period) {
﻿  return -change/2 * (Math.cos(Math.PI*frame/duration) - 1) + begin;
}
﻿  
function easeInExpo(frame,begin,change,duration,amplitude,period) {
﻿  return (frame==0) ? begin : change * Math.pow(2, 10 * (frame/duration - 1)) + begin;
}
﻿  
function easeOutExpo(frame,begin,change,duration,amplitude,period) {
﻿  return (frame==duration) ? begin+change : change * (-Math.pow(2, -10 * frame/duration) + 1) + begin;
}
﻿  
function easeInOutExpo(frame,begin,change,duration,amplitude,period) {
﻿  if (frame==0) return begin;
﻿  if (frame==duration) return begin+change;
﻿  if ((frame/=duration/2) < 1) return change/2 * Math.pow(2, 10 * (frame - 1)) + begin;
﻿  return change/2 * (-Math.pow(2, -10 * --frame) + 2) + begin;
}
﻿  
function easeInCirc(frame,begin,change,duration,amplitude,period) {
﻿  return -change * (Math.sqrt(1 - (frame/=duration)*frame) - 1) + begin;
}
﻿  
function easeOutCirc(frame,begin,change,duration,amplitude,period) {
﻿  return change * Math.sqrt(1 - (frame=frame/duration-1)*frame) + begin;
}
﻿  
function easeInOutCirc(frame,begin,change,duration,amplitude,period) {
﻿  if ((frame/=duration/2) < 1) return -change/2 * (Math.sqrt(1 - frame*frame) - 1) + begin;
﻿  return change/2 * (Math.sqrt(1 - (frame-=2)*frame) + 1) + begin;
}

function easeInElastic(frame,begin,change,duration,amplitude,period) {
﻿  if (frame==0) { return begin; } 
﻿  if ((frame/=duration)==1) { return begin+change; }
﻿  if (!period) { period=duration*.3; }
﻿  if (amplitude < Math.abs(change)) {  amplitude=change; s=period/4; }
﻿  else { amplitude=Math.abs(change); s = period/(2*Math.PI) * Math.asin(change/amplitude);}
﻿  return -(amplitude*Math.pow(2,10*(frame-=1)) * Math.sin( (frame*duration-s)*(2*Math.PI)/period )) + begin;
}

function easeOutElastic (frame, begin, change, duration, amplitude, period) {
﻿  if (frame==0) return begin;  if ((frame/=duration)==1) return begin+change;  if (!period) period=duration*.3;
﻿  if (amplitude < Math.abs(change)) { amplitude=change; var s=period/4; }
﻿  else {   amplitude=Math.abs(change); var s = period/(2*Math.PI) * Math.asin (change/amplitude);}
﻿  return amplitude*Math.pow(2,-10*frame) * Math.sin( (frame*duration-s)*(2*Math.PI)/period ) + change + begin;
}

function easeInOutElastic(frame, begin, change, duration, amplitude, period) {
﻿  if (frame==0) return begin;  
﻿  if ((frame/=duration/2)==2) return begin+change;  
﻿  if (!period) period=duration*(.3*1.5);
﻿  if (amplitude < Math.abs(change)) { amplitude=change; var s=period/4; }
﻿  else {amplitude=Math.abs(change);var s = period/(2*Math.PI) * Math.asin (change/amplitude);}
﻿  if (frame < 1) {return -.5*(amplitude*Math.pow(2,10*(frame-=1)) * Math.sin( (frame*duration-s)*(2*Math.PI)/period )) + begin;}
﻿  return amplitude*Math.pow(2,-10*(frame-=1)) * Math.sin( (frame*duration-s)*(2*Math.PI)/period )*.5 + change + begin;
}

function easeInBack(frame, begin, change, duration, s) {
﻿  if (s == undefined) s = 1.70158;
﻿  return change*(frame/=duration)*frame*((s+1)*frame - s) + begin;
}

function easeOutBack(frame, begin, change, duration, s) {
﻿  if (s == undefined) s = 1.70158;
﻿  return change*((frame=frame/duration-1)*frame*((s+1)*frame + s) + 1) + begin;
}

function easeInOutBack(frame, begin, change, duration, s) {
﻿  if (s == undefined) s = 1.70158; 
﻿  if ((frame/=duration/2) < 1) return change/2*(frame*frame*(((s*=(1.525))+1)*frame - s)) + begin;
﻿  return change/2*((frame-=2)*frame*(((s*=(1.525))+1)*frame + s) + 2) + begin;
}

function easeInBounce(frame, begin, change, duration) {
﻿  return change - easeOutBounce (duration-frame, 0, change, duration) + begin;
}

function easeOutBounce(frame, begin, change, duration) {
﻿  if ((frame/=duration) < (1/2.75)) { return change*(7.5625*frame*frame) + begin;} 
﻿  else if (frame < (2/2.75)) { return change*(7.5625*(frame-=(1.5/2.75))*frame + .75) + begin;} 
﻿  else if (frame < (2.5/2.75)) { return change*(7.5625*(frame-=(2.25/2.75))*frame + .9375) + begin;}
﻿  else { return change*(7.5625*(frame-=(2.625/2.75))*frame + .984375) + begin; }
}

function easeInOutBounce(frame, begin, change, duration) {
﻿  if (frame < duration/2) return easeInBounce (frame*2, 0, change, duration) * .5 + begin;
﻿  return easeOutBounce (frame*2-duration, 0, change, duration) * .5 +  .5 + begin;
}
