(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t.n(n),o=t(14);const i=[new o.c,new o.e,new o.a],r={};a()(function(){a()("#compose.message-composition").each(function(){const e=a()("#compose"),s=e.find(".modal-message"),t=e.find("#compose-form"),n=a()("#alerts-container"),o=t.find("textarea#compose-message"),i=t.find("input#compose-recipients"),r=t.find(".modal-recipients .recipient-container"),c=t.find("button#modal-send-btn"),d=t.find("button#modal-close-btn"),l=t.find(".modal-user-groups");let p=!1;const m=function(){t.find("button,input,textarea").removeAttr("disabled")},u=function(){const i=o.val(),r=h();0!==r.length?""!==i.trim()?i.trim().length>500?s.show().html('<span class="text-danger">Your message cannot be longer than 500 characters</span>'):(t.find("button,input,textarea").attr("disabled","disabled"),s.show().html('<i class="fa fa-cog fa-spin"></i> Sending message ...'),p=!0,a.a.ajax({type:"post",url:"/profile/messages/send",data:{recipients:r,message:i}}).always(()=>p=!1).fail(e=>s.show().html(`<span class="text-danger">${e.status}: ${e.statusText}</span>`)).done(t=>{!0===t.success?(n.show().html('<div class="alert alert-info"><strong>Sent!</strong> Your message has been sent.</div>'),window.setTimeout(()=>n.hide(),3e3),e.modal("hide")):(s.show().html(`<span class="text-danger">${t.message}</span>`),m())})):s.show().html('<span class="text-danger">Message required</span>'):s.show().html('<span class="text-danger">Recipients required</span>')},f=function(e){return e.split(" ").filter(e=>0===e.search(/^[A-Z0-9_]{3,20}$/i))},g=function(e,s){const t=e.toLowerCase();s=["recipient",s],r.find('.recipient[data-recipient="'+t+'"]').get(0)||r.append(`<span class="${s.join(" ")}" data-recipient="${t}">`+`<span class="recipient-name">${e}</span>`+'<i class="glyphicon glyphicon-remove remove-recipient" title="Remove"></i></span>')},h=function(){return r.find(".recipient").get().map(e=>a()(e).data("recipient"))};e.on("keydown",()=>s.hide()),e.on("shown.bs.modal",e=>a()(e.currentTarget).find("input#compose-recipients").focus()),e.on("hidden.bs.modal",()=>{p||(o.val(""),i.val(""),r.empty(),s.hide(),m())}),e.on("click",".remove-recipient",e=>a()(e.currentTarget).closest(".recipient").remove()),e.on("change","input#compose-recipients",function(){f(a()(this).val()).forEach(g),i.val("")}),e.on("keypress","input#compose-recipients",function(e){const s=e.which;(32===s||13===s||/[;:,']/i.test(String.fromCharCode(s)))&&(f(a()(this).val()).forEach(g),i.val(""),e.preventDefault(),e.stopPropagation()),i.focus()}),d.on("click",()=>e.modal("hide")),c.on("click",u),o.on("keydown",function(e){e.ctrlKey&&13===e.keyCode&&(u(),e.preventDefault(),e.stopPropagation())}),l.on("click",".groups a",e=>g(a()(e.currentTarget).text(),"group")),a()("#message-reply").on("click",s=>{e.unbind("shown.bs.modal").on("shown.bs.modal",e=>a()(e.currentTarget).find("textarea").focus()),e.find("#composeLabel").text("Reply ..."),e.find(".modal-recipients,.modal-settings,.modal-user-groups").hide(),i.val(""),r.empty(),g(a()(s.currentTarget).data("replyto"))})})}),a()(function(){const e=a()("table#inbox");if(e.length>0){const s=function(){a()(this).find("i").attr("class","fa fa-dot-circle-o"),a()(this).addClass("active")},t=function(){a()(this).find("i").attr("class","fa fa-circle-o"),a()(this).removeClass("active")},n=function(e){const n=a()(this);e.preventDefault(),e.stopPropagation(),n.hasClass("active")?t.apply(n):s.apply(n)},o=function(e){const s=a()(this).data("id");void 0!==s&&(e.preventDefault(),e.stopPropagation(),window.location.href="/profile/messages/"+encodeURIComponent(s))},c=function(){a()(this).addClass("pressed")},d=function(){a()(this).removeClass("pressed")};e.each(function(e,s){a()(s).on("click","tbody tr",o).on("click","tbody td.selector",n).on("mousedown","tbody tr",c).on("mouseup","tbody tr",d)}),a()("#mark-all").on("click",function(){return a.a.ajax({url:"/api/messages/open"}).always(()=>window.location.reload()),!1});let l=0;const p=a()("#inbox-show-more"),m=a()("#inbox-empty"),u=a()("#inbox-loading"),f=function(s){l+=25,u.fadeOut();const t=e.find("tbody"),n=(s.length?s:[]).map(e=>{let s=e.message.trim();return i.forEach(e=>s=e.format(r,s)),`<tr data-id="${e.userid}" data-username="${e.user}" class="${e.unread<=0?"read":"unread"}">`+'<td class="from">'+`<a href="/profile/messages/${e.userid}">${e.user}</a> `+`<span class="count">(${e.unread>0?e.unread:parseInt(e.read)+parseInt(e.unread)})</span>`+"</td>"+`<td class="message"><span>${s}</span></td>`+`<td class="timestamp">${e.timestamp}</td>`+"</tr>"});t.append(n.join("")+(n.length?"<hr />":"")),p.toggle(n.length>20),e.toggle(n.length>0),m.toggle(0===n.length)},g=function(){return u.fadeIn(),a.a.ajax({url:"/api/messages/inbox",data:{s:l}}).done(f).fail(console.error)};p.on("click",g),g()}}),a()(function(){const e=a()("#message-list"),s=e.data("userid"),t=e.data("username"),n=e.find("#message-container"),o=e.find("#message-list-loading"),c=e.find("#message-list-more");if(e.length>0){let e=0;const d=function(t){e+=10,o.fadeOut(),c.show(),c.attr("disabled",t&&0!==t.length?null:"disabled");const a=(t.length?t:[]).reverse().map(e=>{let t=e.message.trim();i.forEach(e=>t=e.format(r,t));const n=parseInt(s)!==parseInt(e.userid),a=[];return a.push("message-active"),a.push("message-"+(n?"me":"notme")),a.push(1===e.isread?"message-read":"message-unread"),`<div id="${e.id}" class="message ${a.join(" ")} content">`+'<div class="message-from">'+`<div class="message-date pull-right"><i class="fa message-list-item-status pull-right ${n?"read":"unread"}"></i>  ${e.timestamp}</div>`+`<span title="${e.from}">${e.from}</span>`+'</div><div class="message-content">'+`<div class="message-txt">${t}</div>`+"</div></div>"});n.prepend(a.join("")+(a.length?"<hr />":""))},l=function(){return o.fadeIn(),a.a.ajax({url:`/api/messages/usr/${encodeURIComponent(t.toLowerCase())}/inbox`,data:{s:e}}).always(d)};c.on("click",()=>l().done(()=>window.scrollTo(0,0))),l().done(()=>window.scrollTo(0,document.body.scrollHeight))}})}},[[185,1,0,2]]]);