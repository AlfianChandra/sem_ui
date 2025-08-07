import{s as c}from"./index-CazcwA3G.js";import{b as x,g as $,s as y,a as P}from"./index-BSplotit.js";import{B as S,j as u,o as m,k as h,m as g,g as V,S as b,t as B,I as C,r as v,J as L,i as t,h as l,M as s,f as w,F as z,V as E}from"./index-DpgJrGwA.js";import{s as N}from"./index-DDIb1Wz6.js";import{a as U}from"./index-t--hEgTQ.js";import{L as F}from"./sem_logo-ByZ97FJX.js";var M=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,T={root:function(a){var r=a.instance;return["p-progressbar p-component",{"p-progressbar-determinate":r.determinate,"p-progressbar-indeterminate":r.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},j=S.extend({name:"progressbar",style:M,classes:T}),A={name:"BaseProgressBar",extends:x,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:j,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},k={name:"ProgressBar",extends:A,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return $({determinate:this.determinate,indeterminate:this.indeterminate})}}},I=["aria-valuenow","data-p"],J=["data-p"],D=["data-p"],q=["data-p"];function G(e,a,r,d,p,i){return m(),u("div",g({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root"),{"data-p":i.dataP}),[i.determinate?(m(),u("div",g({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value"),{"data-p":i.dataP}),[e.value!=null&&e.value!==0&&e.showValue?(m(),u("div",g({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":i.dataP}),[V(e.$slots,"default",{},function(){return[b(B(e.value+"%"),1)]})],16,D)):h("",!0)],16,J)):i.indeterminate?(m(),u("div",g({key:1,class:e.cx("value")},e.ptm("value"),{"data-p":i.dataP}),null,16,q)):h("",!0)],16,I)}k.render=G;const H={class:"login"},K=["src"],O={style:{display:"flex","flex-flow":"row wrap",gap:"10px"}},Q={style:{display:"flex","flex-flow":"row wrap",gap:"10px"}},R={style:{display:"flex","flex-flow":"row nowrap","justify-content":"right"}},ne=C({__name:"Login",setup(e){const a=v(!1),r=L(),d=v(""),p=v(""),i=async()=>{if(d.value===""||p.value===""){r.add({severity:"error",summary:"Error",detail:"Please fill in all fields",life:3e3});return}a.value=!0;const f={username:d.value,password:p.value};await U.post(E.baseEnd+"/Auth/login",f).then(n=>{n.status==200&&(localStorage.setItem("authToken",n.data.auth.token),r.add({severity:"success",summary:"Success",detail:n.data.message,life:3e3}),a.value=!1,setTimeout(()=>{window.location.href="/"},2e3))}).catch(n=>{r.add({severity:"error",summary:"Failed",detail:n.response.data.message,life:3e3}),a.value=!1})};return(f,n)=>(m(),u(z,null,[t("div",H,[t("div",null,[t("img",{src:s(F),style:{width:"200px"}},null,8,K)]),t("div",null,[n[4]||(n[4]=t("div",null,[t("h1",{style:{margin:"0",padding:"0"}},"SEM Login"),t("p",{style:{margin:"0",padding:"0"}},"Please login to continue to the app")],-1)),t("div",O,[l(s(c),{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=o=>d.value=o),style:{width:"350px",padding:"12px"},placeholder:"E-Mail / Username"},null,8,["modelValue"])]),t("div",Q,[l(s(c),{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=o=>p.value=o),style:{width:"350px",padding:"12px"},type:"password",placeholder:"Password",minlength:"8"},null,8,["modelValue"])]),l(s(y),{label:"Login",onClick:i,style:{width:"200px"}})])]),n[7]||(n[7]=t("p",{style:{color:"#888","text-align":"center","font-size":"12px"}},[b("Copyright © 2025 SEM by "),t("b",null,"Production - Field Jambi"),b(" all rights reserved")],-1)),l(s(N),{position:"bottom-right"}),l(s(P),{closable:!1,visible:a.value,"onUpdate:visible":n[3]||(n[3]=o=>a.value=o),modal:"",header:"Please wait",style:{width:"25rem"}},{default:w(()=>[n[6]||(n[6]=t("p",{style:{padding:"0","margin-top":"0px"}},"Authorizing...",-1)),l(s(k),{mode:"indeterminate",style:{height:"6px"}}),t("div",R,[l(s(y),{onClick:n[2]||(n[2]=o=>a.value=!1),style:{"margin-top":"1rem"}},{default:w(()=>n[5]||(n[5]=[b("Cancel")])),_:1})])]),_:1},8,["visible"])],64))}});export{ne as default};
