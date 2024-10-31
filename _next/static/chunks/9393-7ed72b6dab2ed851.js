"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9393],{79393:function(e,n,t){t.d(n,{Z:function(){return N}});var o=t(23950),r=t(22988),a=t(2265),i=t(51581),l=t(76990),s=t(82338),c=t(63811),u=t(45590),d=t(80317),g=t(48024),p=t(22960),h=t(95885),f=t(12272),m=t(37040),v=t(44839),Z=t(10317),b=t(34990),k=t(72296),w=t(70587);function x(e){return(0,w.ZP)("MuiSnackbarContent",e)}(0,k.Z)("MuiSnackbarContent",["root","message","action"]);var C=t(57437);let y=["action","className","message","role"],E=e=>{let{classes:n}=e;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},x,n)},O=(0,g.ZP)(b.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(e=>{let{theme:n}=e,t="light"===n.palette.mode?.8:.98,o=(0,Z._4)(n.palette.background.default,t);return(0,r.Z)({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),S=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),M=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),P=a.forwardRef(function(e,n){let t=(0,h.i)({props:e,name:"MuiSnackbarContent"}),{action:a,className:i,message:l,role:s="alert"}=t,c=(0,o.Z)(t,y),u=E(t);return(0,C.jsxs)(O,(0,r.Z)({role:s,square:!0,elevation:6,className:(0,v.Z)(u.root,i),ownerState:t,ref:n},c,{children:[(0,C.jsx)(S,{className:u.message,ownerState:t,children:l}),a?(0,C.jsx)(M,{className:u.action,ownerState:t,children:a}):null]}))});function L(e){return(0,w.ZP)("MuiSnackbar",e)}(0,k.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let R=["onEnter","onExited"],j=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],z=e=>{let{classes:n,anchorOrigin:t}=e,o={root:["root","anchorOrigin".concat((0,f.Z)(t.vertical)).concat((0,f.Z)(t.horizontal))]};return(0,l.Z)(o,L,n)},T=(0,g.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n["anchorOrigin".concat((0,f.Z)(t.anchorOrigin.vertical)).concat((0,f.Z)(t.anchorOrigin.horizontal))]]}})(e=>{let{theme:n,ownerState:t}=e;return(0,r.Z)({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:(0,r.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})})});var N=a.forwardRef(function(e,n){let t=(0,h.i)({props:e,name:"MuiSnackbar"}),l=(0,p.Z)(),g={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:v,horizontal:Z}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:k,className:w,ClickAwayListenerProps:x,ContentProps:y,disableWindowBlurListener:E=!1,message:O,open:S,TransitionComponent:M=m.Z,transitionDuration:L=g,TransitionProps:{onEnter:N,onExited:B}={}}=t,_=(0,o.Z)(t.TransitionProps,R),I=(0,o.Z)(t,j),A=(0,r.Z)({},t,{anchorOrigin:{vertical:v,horizontal:Z},autoHideDuration:b,disableWindowBlurListener:E,TransitionComponent:M,transitionDuration:L}),D=z(A),{getRootProps:F,onClickAway:W}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{autoHideDuration:n=null,disableWindowBlurListener:t=!1,onClose:o,open:i,resumeHideDuration:l}=e,s=(0,c.Z)();a.useEffect(()=>{if(i)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==o||o(e,"escapeKeyDown")}},[i,o]);let g=(0,u.Z)((e,n)=>{null==o||o(e,n)}),p=(0,u.Z)(e=>{o&&null!=e&&s.start(e,()=>{g(null,"timeout")})});a.useEffect(()=>(i&&p(n),s.clear),[i,n,p,s]);let h=s.clear,f=a.useCallback(()=>{null!=n&&p(null!=l?l:.5*n)},[n,l,p]),m=e=>n=>{let t=e.onBlur;null==t||t(n),f()},v=e=>n=>{let t=e.onFocus;null==t||t(n),h()},Z=e=>n=>{let t=e.onMouseEnter;null==t||t(n),h()},b=e=>n=>{let t=e.onMouseLeave;null==t||t(n),f()};return a.useEffect(()=>{if(!t&&i)return window.addEventListener("focus",f),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",h)}},[t,i,f,h]),{getRootProps:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.Z)({},(0,d._)(e),(0,d._)(n));return(0,r.Z)({role:"presentation"},n,t,{onBlur:m(t),onFocus:v(t),onMouseEnter:Z(t),onMouseLeave:b(t)})},onClickAway:e=>{null==o||o(e,"clickaway")}}}((0,r.Z)({},A)),[G,H]=a.useState(!0),q=(0,i.y)({elementType:T,getSlotProps:F,externalForwardedProps:I,ownerState:A,additionalProps:{ref:n},className:[D.root,w]});return!S&&G?null:(0,C.jsx)(s.d,(0,r.Z)({onClickAway:W},x,{children:(0,C.jsx)(T,(0,r.Z)({},q,{children:(0,C.jsx)(M,(0,r.Z)({appear:!0,in:S,timeout:L,direction:"top"===v?"down":"up",onEnter:(e,n)=>{H(!1),N&&N(e,n)},onExited:e=>{H(!0),B&&B(e)}},_,{children:k||(0,C.jsx)(P,(0,r.Z)({message:O,action:f},y))}))}))}))})}}]);