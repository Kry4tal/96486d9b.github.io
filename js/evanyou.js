"use strict";var q,c=document.getElementById("evanyou"),x=c.getContext("2d"),pr=window.devicePixelRatio||1,w=window.innerWidth,h=window.innerHeight,f=90,m=Math,r=0,u=2*m.PI,v=m.cos,z=m.random;function evanyou(){for(x.clearRect(0,0,w,h),q=[{x:0,y:.7*h+f},{x:0,y:.7*h-f}];q[1].x<w+f;)d(q[0],q[1])}function d(e,n){x.beginPath(),x.moveTo(e.x,e.y),x.lineTo(n.x,n.y);var t=n.x+(2*z()-.25)*f,i=y(n.y);x.lineTo(t,i),x.closePath(),r-=u/-50,x.fillStyle="#"+(127*v(r)+128<<16|127*v(r+u/3)+128<<8|127*v(r+u/3*2)+128).toString(16),x.fill(),q[0]=q[1],q[1]={x:t,y:i}}function y(e){var n=e+(2*z()-1.1)*f;return h<n||n<0?y(e):n}c.width=w*pr,c.height=h*pr,x.scale(pr,pr),x.globalAlpha=.6,evanyou();