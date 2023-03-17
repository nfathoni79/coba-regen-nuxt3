import{o,b as l,c as m,r as _,e,t as g,j as a,k as f,l as h,D as k,H as w,U as y,m as v,a as C,p as c,F as b,q as I,u as S,s as j,f as B,w as U,h as D}from"./entry.f73d694e.js";const L=["href"],$={__name:"ContactItem",props:{icon:Function,label:String,link:String,bgClasses:String},setup(t){return(s,r)=>(o(),l("div",{class:a(["flex flex-row md:flex-col items-center justify-center","gap-4 px-4 py-12",t.bgClasses])},[(o(),m(_(t.icon),{class:"h-24 w-24 text-blue-50"})),e("a",{href:t.link,class:"text-xl font-semibold text-blue-50 text-center uppercase underline"},g(t.label),9,L)],2))}},F={},H={class:"inline-flex items-center justify-center rounded-full border-2 border-white bg-teal-500 hover:bg-teal-600 px-8 py-2 font-semibold text-teal-50"};function q(t,s){return o(),l("button",H,[h(t.$slots,"default")])}const N=f(F,[["render",q]]),R=[{icon:k,label:"Register your project",link:"#"},{icon:w,label:"Register as a supporter",link:"#"},{icon:y,label:"Register as an expert",link:"#"},{icon:v,label:"Join our team",link:"#"}],V=e("section",{class:"bg-[url('/img/sky.jpg')] bg-fixed bg-center bg-cover"},[e("div",{class:"bg-black/20 pt-32 md:pt-40 pb-8 md:pb-16 px-8 md:px-16 text-center"},[e("h1",{class:"mx-auto max-w-2xl text-4xl md:text-6xl font-medium text-white"}," Contact Us "),e("p",{class:"mx-auto max-w-2xl mt-6 md:mt-12 text-xl text-white leading-loose"}," We are eager to get to know you. Let us know what is your drive to reach us, whether to register your project, be a supporter, be an expert, or even joining our team! ")])],-1),W={class:"flex flex-col md:flex-row"},E={class:"mx-auto max-w-2xl px-8 py-16"},T=e("div",{class:"text-center space-y-6"},[e("h4",{class:"text-3xl font-semibold text-teal-600"}," Have any other questions? "),e("p",{class:"text-sm text-gray-700"}," Let us know what are your inquiries and we will contact you back as soon as possible. ")],-1),z=e("span",{class:"font-semibold text-teal-600"},"First name",-1),G=e("span",{class:"font-semibold text-teal-600"},"Last name",-1),J=e("span",{class:"font-semibold text-teal-600"},"Email",-1),M=e("span",{class:"font-semibold text-teal-600"},"Write a message",-1),K={__name:"contact",setup(t){C({title:"Contact Us",meta:[{name:"description",content:"We are eager to get to know you. Let us know what is your drive to reach us."}]});const s=c`
  block w-full
  border-0 border-b hover:border-b-2
  border-gray-200 hover:border-black
  focus:ring-0 focus:border-black
`,r=i=>i%4<2?c`bg-blue-900`:c`bg-blue-500`;return(i,u)=>{const p=$,x=N;return o(),l(b,null,[V,e("section",null,[e("div",W,[(o(!0),l(b,null,I(S(R),(n,d)=>(o(),m(p,{key:d,icon:n.icon,label:n.label,link:n.link,bgClasses:r(d),class:"flex-1"},null,8,["icon","label","link","bgClasses"]))),128))])]),e("section",null,[e("div",E,[T,e("form",{onSubmit:u[0]||(u[0]=j(()=>{},["prevent"])),action:"",class:"mt-16 grid grid-cols-4 gap-6"},[e("label",{class:"block col-span-4 md:col-span-2"},[z,e("input",{type:"text",placeholder:"",class:a(s)})]),e("label",{class:"block col-span-4 md:col-span-2"},[G,e("input",{type:"text",placeholder:"",class:a(s)})]),e("label",{class:"block col-span-4"},[J,e("input",{type:"email",placeholder:"",class:a(s)})]),e("label",{class:"block col-span-4"},[M,e("textarea",{rows:"3",class:a(s)})]),B(x,{class:"col-span-4 col-start-1 md:col-span-2 md:col-start-2"},{default:U(()=>[D(" Submit ")]),_:1})],32)])])],64)}}};export{K as default};