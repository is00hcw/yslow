"use strict";YUI({fetchCSS:false}).use("node","slider",function(b){var a,k=b.Array.each,i=/^(ynumreq|ycdn|yemptysrc|yexpires|ycompress|ycsstop|yjsbottom|yexpressions|yexternal|ydns|yminify|yredirects|ydupes|yetags|yxhr|yxhrmethod|ymindom|yno404|ymincookie|ycookiefree|ynofilter|yimgnoscale|yfavicon)$/i,o=/^(https?):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,e=b.config.win.location.search.slice(1).split("&"),g={},c=0,n=100,p=[{id:"ynumreq",link:"num_http",name:"Make fewer HTTP requests",weight:8},{id:"ycdn",link:"cdn",name:"Use a Content Delivery Network (CDN)",weight:6},{id:"yemptysrc",link:"emptysrc",name:"Avoid empty src or href",weight:30},{id:"yexpires",link:"expires",name:"Add expires headers",weight:10},{id:"ycompress",link:"gzip",name:"Compress components with gzip",weight:8},{id:"ycsstop",link:"css_top",name:"Put CSS at top",weight:4},{id:"yjsbottom",link:"js_bottom",name:"Put JavaScript at bottom",weight:4},{id:"yexpressions",link:"css_expressions",name:"Avoid CSS expressions",weight:3},{id:"yexternal",link:"external",name:"Make JavaScript and CSS external",weight:4},{id:"ydns",link:"dns_lookups",name:"Reduce DNS lookups",weight:3},{id:"yminify",link:"minify",name:"Minify JavaScript and CSS",weight:4},{id:"yredirects",link:"redirects",name:"Avoid URL redirects",weight:4},{id:"ydupes",link:"js_dupes",name:"Remove duplicate JavaScript and CSS",weight:4},{id:"yetags",link:"etags",name:"Configure entity tags (ETags)",weight:2},{id:"yxhr",link:"cacheajax",name:"Make AJAX cacheable",weight:4},{id:"yxhrmethod",link:"ajax_get",name:"Use GET for AJAX requests",weight:3},{id:"ymindom",link:"min_dom",name:"Reduce the number of DOM elements",weight:3},{id:"yno404",link:"no404",name:"Avoid HTTP 404 (Not Found) error",weight:4},{id:"ymincookie",link:"cookie_size",name:"Reduce cookie size",weight:3},{id:"ycookiefree",link:"cookie_free",name:"Use cookie-free domains",weight:3},{id:"ynofilter",link:"no_filters",name:"Avoid AlphaImageLoader filter",weight:4},{id:"yimgnoscale",link:"no_scale",name:"Do not scale images in HTML",weight:3},{id:"yfavicon",link:"favicon",name:"Make favicon small and cacheable",weight:2}],m=b.one("#rules tbody"),j=b.one("#overall"),d=j.one(".score"),f=j.one(".val"),h=function(s){var r="F";if(s>=90){r="A"}else{if(s>=80){r="B"}else{if(s>=70){r="C"}else{if(s>=60){r="D"}else{if(s>=50){r="E"}}}}}return r},q=function(w,r,s){var v,u,t;n-=w*s;n+=r*s;v=h(n);u=j.getData("grade");t="grade-"+v;f.setContent(Math.round(n));if(u!==t){j.removeClass(u).addClass(t).setData("grade",t);d.setContent(v)}},l=function(u){var y=u.newVal,r=this,t=r.getData("rule"),s=t.weight/c,x=h(y),w=r.getData("grade"),v="grade-"+x;r.one(".val").setContent(y);r.one(".score").setContent(x);if(w!==v){r.removeClass(w).addClass(v).setData("grade",v)}q(u.prevVal,y,s)};k(e,function(u){var s=u.split("="),r=s[0],t=parseInt(s[1],10);if((i.test(r)&&typeof t==="number"&&t>=0&&t<=100)){g[r]=t}else{if(r==="url"){a=decodeURIComponent(s[1]);a=o.test(a)?a:null}}});if(a){b.one("#url").append(b.Node.create("<a></a>").setContent(a).set("href",a))}k(p,function(r){c+=r.weight});k(p,function(u){var r,v,t,s=g[u.id];s=typeof s!=="undefined"?s:100;t=h(s);v=b.Node.create("<tr></tr>").append('<td class="score">'+t+"</td>").append('<td class="val">'+s+"</td>").append('<td class="rule"><a href="http://developer.yahoo.com/performance/rules.html#'+u.link+'" target="_blank">'+u.name+"</a></td>").append('<td class="weight">'+u.weight+"</td>").append('<td class="slider" id="slider-'+u.id+'"></td>').setData("rule",u).setData("grade","grade-"+t).addClass("grade-"+t).set("id",u.id);m.append(v);r=new b.Slider({value:s});r.after("valueChange",l,v);r.render("#slider-"+u.id);q(100,s,u.weight/c)})});