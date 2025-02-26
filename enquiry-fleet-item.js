"use strict";(()=>{var at=(i,e="text",t="value")=>S(i)===!1?i.map(r=>({[e]:r,[t]:r})):[],Ne=i=>Array.isArray(i)?i.every(e=>typeof e=="string")?"Array of strings":i.every(e=>typeof e=="object"&&e!==null&&!Array.isArray(e))?"Array of objects":"Mixed array or unknown type":"Not an array",W=(i,e,t,a)=>{$(".select-wrapper--"+e).remove();var r=document.createElement("div");r.classList.add("select-wrapper","select-wrapper--"+e),a&&r.classList.add(...a.split(" "));var n=document.createElement("select");n.id=e,n.name=e,n.classList.add("form-select","w-select");let s;Ne(i)==="Array of strings"?s=at(i):Ne(i)==="Array of objects"&&(s=i);for(let c=0;c<s.length;c++){var l=document.createElement("option");l.text=s[c].text,l.value=s[c].value,n.add(l)}var o=document.createElement("div");o.classList.add("select-icon"),$(r).prepend(n).append(o).insertAfter("#"+t)};var S=i=>!Array.isArray(i)||!i.length,A=i=>i instanceof Date&&Object.prototype.toString.call(i)==="[object Date]"&&!isNaN(i.getTime()),R=i=>(i<10&&(i="0"+i),i);var O=(i,e)=>{var t=new Date(i),a=t.getFullYear(),r=R(t.getMonth()+1),n=t.getDate();return e?a+"-"+r+"-"+n:a+""+r+n},ve=i=>{if(A(i))return i.toLocaleString("en-GB",{day:"numeric",month:"numeric",year:"numeric"});var e=new Date(i);return e.toLocaleString("en-GB",{day:"numeric",month:"numeric",year:"numeric"})};var Oe=i=>{var e=JSON.parse(localStorage.getItem("enquiry"));if(S(e)===!1){for(var a=[],r=0;r<e.length;r++){var n=e[r],s={};for(var l in n)if(n.hasOwnProperty(l)){if(l==="billing"||l==="name"||l==="variant"||l==="qty")s[l]=n[l];else if(l==="selectedDates"){if(i===!0){var o=JSON.parse(localStorage.getItem("selectedDates"));S(o)===!1&&$.each(o,function(h,p){var u=new Date(p);if(A(u)){var d=u.getFullYear(),g=R(u.getMonth()+1),f=R(u.getDate());h===0?s.hireStart=f+"-"+g+"-"+d:s.hireEnd=f+"-"+g+"-"+d}})}else if(!S(n[l])){var o=n[l];$.each(o,function(h,p){var u=new Date(p);if(A(u)){var d=u.getFullYear(),g=R(u.getMonth()+1),f=R(u.getDate());h===0?s.hireStart=f+"-"+g+"-"+d:s.hireEnd=f+"-"+g+"-"+d}})}}}a.push(s)}$("#enquiry_data").val(JSON.stringify(a))}else $("#enquiry_data").val("")};var Pe=()=>{let i=JSON.parse(localStorage.getItem("enquiry"));if(S(i)===!0){$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry"),$('[data-enquiry="get-a-quote"] .get-a-quote').show().siblings().hide();return}let t=i.reduce((n,s)=>n+parseInt(s.qty,10),0);$('[data-enquiry="total"]').text(t);let a=i.some(n=>n.billing==="hire"),r=i.some(n=>n.billing!=="hire");a&&r?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireSalesQuote"):a?$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewHireQuote"):$('[data-enquiry="get-a-quote"]').attr("href","/complete-your-enquiry?reason=NewSalesQuote"),$('[data-enquiry="get-a-quote"] .complete-enquiry').show().siblings().hide()},_=i=>{var e='<div class="datepicker-container"><div class="datepicker-title">'+i+'</div><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>';return e};var Ye=i=>i.closest(".modal").length?(console.log("in a modal"),!0):!1;$=$&&$.hasOwnProperty("default")?$.default:$;function it(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Fe(i,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function rt(i,e,t){return e&&Fe(i.prototype,e),t&&Fe(i,t),i}var Le={autoShow:!1,autoHide:!1,autoPick:!1,inline:!1,container:null,trigger:null,language:"",format:"mm/dd/yyyy",date:null,startDate:null,endDate:null,startView:0,weekStart:0,yearFirst:!1,yearSuffix:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],itemTag:"li",mutedClass:"muted",pickedClass:"picked",disabledClass:"disabled",highlightedClass:"highlighted",template:'<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',offset:10,zIndex:1e3,filter:null,show:null,hide:null,pick:null},Ge=typeof window!="undefined",Ue=Ge?window:{},Ve=Ge?"ontouchstart"in Ue.document.documentElement:!1,D="datepicker",E="click.".concat(D),He="focus.".concat(D),ge="hide.".concat(D),ae="keyup.".concat(D),me="pick.".concat(D),Be="resize.".concat(D),Je="scroll.".concat(D),ye="show.".concat(D),Re="touchstart.".concat(D),x="".concat(D,"-hide"),we={},q={DAYS:0,MONTHS:1,YEARS:2},nt=Object.prototype.toString;function st(i){return nt.call(i).slice(8,-1).toLowerCase()}function G(i){return typeof i=="string"}var De=Number.isNaN||Ue.isNaN;function We(i){return typeof i=="number"&&!De(i)}function ee(i){return typeof i=="undefined"}function V(i){return st(i)==="date"&&!De(i.getTime())}function X(i,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];return function(){for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return i.apply(e,a.concat(s))}}function b(i){return'[data-view="'.concat(i,'"]')}function ot(i){return i%4===0&&i%100!==0||i%400===0}function $e(i,e){return[31,ot(i)?29:28,31,30,31,30,31,31,30,31,30,31][e]}function P(i,e,t){return Math.min(t,$e(i,e))}var lt=/(y|m|d)+/g;function ct(i){var e=String(i).toLowerCase(),t=e.match(lt);if(!t||t.length===0)throw new Error("Invalid date format.");return i={source:e,parts:t},$.each(t,function(a,r){switch(r){case"dd":case"d":i.hasDay=!0;break;case"mm":case"m":i.hasMonth=!0;break;case"yyyy":case"yy":i.hasYear=!0;break}}),i}function ut(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=$(i),a=t.css("position"),r=a==="absolute",n=e?/auto|scroll|hidden/:/auto|scroll/,s=t.parents().filter(function(l,o){var c=$(o);return r&&c.css("position")==="static"?!1:n.test(c.css("overflow")+c.css("overflow-y")+c.css("overflow-x"))}).eq(0);return a==="fixed"||!s.length?$(i.ownerDocument||document):s}function pe(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=String(Math.abs(i)),a=t.length,r="";for(i<0&&(r+="-");a<e;)a+=1,r+="0";return r+t}var dt=/\d+/g,ht={show:function(){this.built||this.build(),!this.shown&&(this.trigger(ye).isDefaultPrevented()||(this.shown=!0,this.$picker.removeClass(x).on(E,$.proxy(this.click,this)),this.showView(this.options.startView),this.inline||(this.$scrollParent.on(Je,$.proxy(this.place,this)),$(window).on(Be,this.onResize=X(this.place,this)),$(document).on(E,this.onGlobalClick=X(this.globalClick,this)),$(document).on(ae,this.onGlobalKeyup=X(this.globalKeyup,this)),Ve&&$(document).on(Re,this.onTouchStart=X(this.touchstart,this)),this.place())))},hide:function(){!this.shown||this.trigger(ge).isDefaultPrevented()||(this.shown=!1,this.$picker.addClass(x).off(E,this.click),this.inline||(this.$scrollParent.off(Je,this.place),$(window).off(Be,this.onResize),$(document).off(E,this.onGlobalClick),$(document).off(ae,this.onGlobalKeyup),Ve&&$(document).off(Re,this.onTouchStart)))},toggle:function(){this.shown?this.hide():this.show()},update:function(){var e=this.getValue();e!==this.oldValue&&(this.setDate(e,!0),this.oldValue=e)},pick:function(e){var t=this.$element,a=this.date;this.trigger(me,{view:e||"",date:a}).isDefaultPrevented()||(a=this.formatDate(this.date),this.setValue(a),this.isInput&&(t.trigger("input"),t.trigger("change")))},reset:function(){this.setDate(this.initialDate,!0),this.setValue(this.initialValue),this.shown&&this.showView(this.options.startView)},getMonthName:function(e,t){var a=this.options,r=a.monthsShort,n=a.months;return $.isNumeric(e)?e=Number(e):ee(t)&&(t=e),t===!0&&(n=r),n[We(e)?e:this.date.getMonth()]},getDayName:function(e,t,a){var r=this.options,n=r.days;return $.isNumeric(e)?e=Number(e):(ee(a)&&(a=t),ee(t)&&(t=e)),a?n=r.daysMin:t&&(n=r.daysShort),n[We(e)?e:this.date.getDay()]},getDate:function(e){var t=this.date;return e?this.formatDate(t):new Date(t)},setDate:function(e,t){var a=this.options.filter;if(V(e)||G(e)){if(e=this.parseDate(e),$.isFunction(a)&&a.call(this.$element,e,"day")===!1)return;this.date=e,this.viewDate=new Date(e),t||this.pick(),this.built&&this.render()}},setStartDate:function(e){V(e)||G(e)?this.startDate=this.parseDate(e):this.startDate=null,this.built&&this.render()},setEndDate:function(e){V(e)||G(e)?this.endDate=this.parseDate(e):this.endDate=null,this.built&&this.render()},parseDate:function(e){var t=this.format,a=[];return V(e)||(G(e)&&(a=e.match(dt)||[]),e=e?new Date(e):new Date,V(e)||(e=new Date),a.length===t.parts.length&&($.each(a,function(r,n){var s=parseInt(n,10);switch(t.parts[r]){case"yy":e.setFullYear(2e3+s);break;case"yyyy":e.setFullYear(n.length===2?2e3+s:s);break;case"mm":case"m":e.setMonth(s-1);break}}),$.each(a,function(r,n){var s=parseInt(n,10);switch(t.parts[r]){case"dd":case"d":e.setDate(s);break}}))),new Date(e.getFullYear(),e.getMonth(),e.getDate())},formatDate:function(e){var t=this.format,a="";if(V(e)){var r=e.getFullYear(),n=e.getMonth(),s=e.getDate(),l={d:s,dd:pe(s,2),m:n+1,mm:pe(n+1,2),yy:String(r).substring(2),yyyy:pe(r,4)};a=t.source,$.each(t.parts,function(o,c){a=a.replace(c,l[c])})}return a},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(D)}},ft={click:function(e){var t=$(e.target),a=this.options,r=this.date,n=this.viewDate,s=this.format;if(e.stopPropagation(),e.preventDefault(),!t.hasClass("disabled")){var l=t.data("view"),o=n.getFullYear(),c=n.getMonth(),h=n.getDate();switch(l){case"years prev":case"years next":{o=l==="years prev"?o-10:o+10,n.setFullYear(o),n.setDate(P(o,c,h)),this.renderYears();break}case"year prev":case"year next":o=l==="year prev"?o-1:o+1,n.setFullYear(o),n.setDate(P(o,c,h)),this.renderMonths();break;case"year current":s.hasYear&&this.showView(q.YEARS);break;case"year picked":s.hasMonth?this.showView(q.MONTHS):(t.siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view","year"),this.hideView()),this.pick("year");break;case"year":o=parseInt(t.text(),10),r.setDate(P(o,c,h)),r.setFullYear(o),n.setDate(P(o,c,h)),n.setFullYear(o),s.hasMonth?this.showView(q.MONTHS):(t.addClass(a.pickedClass).data("view","year picked").siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view","year"),this.hideView()),this.pick("year");break;case"month prev":case"month next":c=l==="month prev"?c-1:c+1,c<0?(o-=1,c+=12):c>11&&(o+=1,c-=12),n.setFullYear(o),n.setDate(P(o,c,h)),n.setMonth(c),this.renderDays();break;case"month current":s.hasMonth&&this.showView(q.MONTHS);break;case"month picked":s.hasDay?this.showView(q.DAYS):(t.siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view","month"),this.hideView()),this.pick("month");break;case"month":c=$.inArray(t.text(),a.monthsShort),r.setFullYear(o),r.setDate(P(o,c,h)),r.setMonth(c),n.setFullYear(o),n.setDate(P(o,c,h)),n.setMonth(c),s.hasDay?this.showView(q.DAYS):(t.addClass(a.pickedClass).data("view","month picked").siblings(".".concat(a.pickedClass)).removeClass(a.pickedClass).data("view","month"),this.hideView()),this.pick("month");break;case"day prev":case"day next":case"day":l==="day prev"?c-=1:l==="day next"&&(c+=1),h=parseInt(t.text(),10),r.setDate(1),r.setFullYear(o),r.setMonth(c),r.setDate(h),n.setDate(1),n.setFullYear(o),n.setMonth(c),n.setDate(h),this.renderDays(),l==="day"&&this.hideView(),this.pick("day");break;case"day picked":this.hideView(),this.pick("day");break}}},globalClick:function(e){for(var t=e.target,a=this.element,r=this.$trigger,n=r[0],s=!0;t!==document;){if(t===n||t===a){s=!1;break}t=t.parentNode}s&&this.hide()},keyup:function(){this.update()},globalKeyup:function(e){var t=e.target,a=e.key,r=e.keyCode;this.isInput&&t!==this.element&&this.shown&&(a==="Tab"||r===9)&&this.hide()},touchstart:function(e){var t=e.target;this.isInput&&t!==this.element&&!$.contains(this.$picker[0],t)&&(this.hide(),this.element.blur())}},vt={render:function(){this.renderYears(),this.renderMonths(),this.renderDays()},renderWeek:function(){var e=this,t=[],a=this.options,r=a.weekStart,n=a.daysMin;r=parseInt(r,10)%7,n=n.slice(r).concat(n.slice(0,r)),$.each(n,function(s,l){t.push(e.createItem({text:l}))}),this.$week.html(t.join(""))},renderYears:function(){var e=this.options,t=this.startDate,a=this.endDate,r=e.disabledClass,n=e.filter,s=e.yearSuffix,l=this.viewDate.getFullYear(),o=new Date,c=o.getFullYear(),h=this.date.getFullYear(),p=-5,u=6,d=[],g=!1,f=!1,m;for(m=p;m<=u;m+=1){var y=new Date(l+m,1,1),v=!1;t&&(v=y.getFullYear()<t.getFullYear(),m===p&&(g=v)),!v&&a&&(v=y.getFullYear()>a.getFullYear(),m===u&&(f=v)),!v&&n&&(v=n.call(this.$element,y,"year")===!1);var k=l+m===h,I=k?"year picked":"year";d.push(this.createItem({picked:k,disabled:v,text:l+m,view:v?"year disabled":I,highlighted:y.getFullYear()===c}))}this.$yearsPrev.toggleClass(r,g),this.$yearsNext.toggleClass(r,f),this.$yearsCurrent.toggleClass(r,!0).html("".concat(l+p+s," - ").concat(l+u).concat(s)),this.$years.html(d.join(""))},renderMonths:function(){var e=this.options,t=this.startDate,a=this.endDate,r=this.viewDate,n=e.disabledClass||"",s=e.monthsShort,l=$.isFunction(e.filter)&&e.filter,o=r.getFullYear(),c=new Date,h=c.getFullYear(),p=c.getMonth(),u=this.date.getFullYear(),d=this.date.getMonth(),g=[],f=!1,m=!1,y;for(y=0;y<=11;y+=1){var v=new Date(o,y,1),k=!1;t&&(f=v.getFullYear()===t.getFullYear(),k=f&&v.getMonth()<t.getMonth()),!k&&a&&(m=v.getFullYear()===a.getFullYear(),k=m&&v.getMonth()>a.getMonth()),!k&&l&&(k=l.call(this.$element,v,"month")===!1);var I=o===u&&y===d,C=I?"month picked":"month";g.push(this.createItem({disabled:k,picked:I,highlighted:o===h&&v.getMonth()===p,index:y,text:s[y],view:k?"month disabled":C}))}this.$yearPrev.toggleClass(n,f),this.$yearNext.toggleClass(n,m),this.$yearCurrent.toggleClass(n,f&&m).html(o+e.yearSuffix||""),this.$months.html(g.join(""))},renderDays:function(){var e=this.$element,t=this.options,a=this.startDate,r=this.endDate,n=this.viewDate,s=this.date,l=t.disabledClass,o=t.filter,c=t.months,h=t.weekStart,p=t.yearSuffix,u=n.getFullYear(),d=n.getMonth(),g=new Date,f=g.getFullYear(),m=g.getMonth(),y=g.getDate(),v=s.getFullYear(),k=s.getMonth(),I=s.getDate(),C,w,T,ce=[],B=u,L=d,ue=!1;d===0?(B-=1,L=11):L-=1,C=$e(B,L);var Te=new Date(u,d,1);for(T=Te.getDay()-parseInt(h,10)%7,T<=0&&(T+=7),a&&(ue=Te.getTime()<=a.getTime()),w=C-(T-1);w<=C;w+=1){var de=new Date(B,L,w),K=!1;a&&(K=de.getTime()<a.getTime()),!K&&o&&(K=o.call(e,de,"day")===!1),ce.push(this.createItem({disabled:K,highlighted:B===f&&L===m&&de.getDate()===y,muted:!0,picked:B===v&&L===k&&w===I,text:w,view:"day prev"}))}var Ae=[],z=u,J=d,he=!1;d===11?(z+=1,J=0):J+=1,C=$e(u,d),T=42-(ce.length+C);var Xe=new Date(u,d,C);for(r&&(he=Xe.getTime()>=r.getTime()),w=1;w<=T;w+=1){var fe=new Date(z,J,w),et=z===v&&J===k&&w===I,Q=!1;r&&(Q=fe.getTime()>r.getTime()),!Q&&o&&(Q=o.call(e,fe,"day")===!1),Ae.push(this.createItem({disabled:Q,picked:et,highlighted:z===f&&J===m&&fe.getDate()===y,muted:!0,text:w,view:"day next"}))}var Ee=[];for(w=1;w<=C;w+=1){var Z=new Date(u,d,w),N=!1;a&&(N=Z.getTime()<a.getTime()),!N&&r&&(N=Z.getTime()>r.getTime()),!N&&o&&(N=o.call(e,Z,"day")===!1);var Me=u===v&&d===k&&w===I,tt=Me?"day picked":"day";Ee.push(this.createItem({disabled:N,picked:Me,highlighted:u===f&&d===m&&Z.getDate()===y,text:w,view:N?"day disabled":tt}))}this.$monthPrev.toggleClass(l,ue),this.$monthNext.toggleClass(l,he),this.$monthCurrent.toggleClass(l,ue&&he).html(t.yearFirst?"".concat(u+p," ").concat(c[d]):"".concat(c[d]," ").concat(u).concat(p)),this.$days.html(ce.join("")+Ee.join("")+Ae.join(""))}},je="".concat(D,"-top-left"),pt="".concat(D,"-top-right"),Ke="".concat(D,"-bottom-left"),gt="".concat(D,"-bottom-right"),mt=[je,pt,Ke,gt].join(" "),te=function(){function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};it(this,i),this.$element=$(e),this.element=e,this.options=$.extend({},Le,we[t.language],$.isPlainObject(t)&&t),this.$scrollParent=ut(e,!0),this.built=!1,this.shown=!1,this.isInput=!1,this.inline=!1,this.initialValue="",this.initialDate=null,this.startDate=null,this.endDate=null,this.init()}return rt(i,[{key:"init",value:function(){var t=this.$element,a=this.options,r=a.startDate,n=a.endDate,s=a.date;this.$trigger=$(a.trigger),this.isInput=t.is("input")||t.is("textarea"),this.inline=a.inline&&(a.container||!this.isInput),this.format=ct(a.format);var l=this.getValue();this.initialValue=l,this.oldValue=l,s=this.parseDate(s||l),r&&(r=this.parseDate(r),s.getTime()<r.getTime()&&(s=new Date(r)),this.startDate=r),n&&(n=this.parseDate(n),r&&n.getTime()<r.getTime()&&(n=new Date(r)),s.getTime()>n.getTime()&&(s=new Date(n)),this.endDate=n),this.date=s,this.viewDate=new Date(s),this.initialDate=new Date(this.date),this.bind(),(a.autoShow||this.inline)&&this.show(),a.autoPick&&this.pick()}},{key:"build",value:function(){if(!this.built){this.built=!0;var t=this.$element,a=this.options,r=$(a.template);this.$picker=r,this.$week=r.find(b("week")),this.$yearsPicker=r.find(b("years picker")),this.$yearsPrev=r.find(b("years prev")),this.$yearsNext=r.find(b("years next")),this.$yearsCurrent=r.find(b("years current")),this.$years=r.find(b("years")),this.$monthsPicker=r.find(b("months picker")),this.$yearPrev=r.find(b("year prev")),this.$yearNext=r.find(b("year next")),this.$yearCurrent=r.find(b("year current")),this.$months=r.find(b("months")),this.$daysPicker=r.find(b("days picker")),this.$monthPrev=r.find(b("month prev")),this.$monthNext=r.find(b("month next")),this.$monthCurrent=r.find(b("month current")),this.$days=r.find(b("days")),this.inline?$(a.container||t).append(r.addClass("".concat(D,"-inline"))):($(document.body).append(r.addClass("".concat(D,"-dropdown"))),r.addClass(x).css({zIndex:parseInt(a.zIndex,10)})),this.renderWeek()}}},{key:"unbuild",value:function(){!this.built||(this.built=!1,this.$picker.remove())}},{key:"bind",value:function(){var t=this.options,a=this.$element;$.isFunction(t.show)&&a.on(ye,t.show),$.isFunction(t.hide)&&a.on(ge,t.hide),$.isFunction(t.pick)&&a.on(me,t.pick),this.isInput&&a.on(ae,$.proxy(this.keyup,this)),this.inline||(t.trigger?this.$trigger.on(E,$.proxy(this.toggle,this)):this.isInput?a.on(He,$.proxy(this.show,this)):a.on(E,$.proxy(this.show,this)))}},{key:"unbind",value:function(){var t=this.$element,a=this.options;$.isFunction(a.show)&&t.off(ye,a.show),$.isFunction(a.hide)&&t.off(ge,a.hide),$.isFunction(a.pick)&&t.off(me,a.pick),this.isInput&&t.off(ae,this.keyup),this.inline||(a.trigger?this.$trigger.off(E,this.toggle):this.isInput?t.off(He,this.show):t.off(E,this.show))}},{key:"showView",value:function(t){var a=this.$yearsPicker,r=this.$monthsPicker,n=this.$daysPicker,s=this.format;if(s.hasYear||s.hasMonth||s.hasDay)switch(Number(t)){case q.YEARS:r.addClass(x),n.addClass(x),s.hasYear?(this.renderYears(),a.removeClass(x),this.place()):this.showView(q.DAYS);break;case q.MONTHS:a.addClass(x),n.addClass(x),s.hasMonth?(this.renderMonths(),r.removeClass(x),this.place()):this.showView(q.YEARS);break;default:a.addClass(x),r.addClass(x),s.hasDay?(this.renderDays(),n.removeClass(x),this.place()):this.showView(q.MONTHS)}}},{key:"hideView",value:function(){!this.inline&&this.options.autoHide&&this.hide()}},{key:"place",value:function(){if(!this.inline){var t=this.$element,a=this.options,r=this.$picker,n=$(document).outerWidth(),s=Ye(t)===!0?t.closest(".modal").outerHeight():$(document).outerHeight(),l=t.outerWidth(),o=t.outerHeight(),c=r.width(),h=r.height(),p=t.offset(),u=p.left,d=p.top,g=parseFloat(a.offset),f=je;De(g)&&(g=10),d>h&&d+o+h>s?(d-=h+g,f=Ke):d+=o+g,u+c>n&&(u+=l-c,f=f.replace("left","right")),r.removeClass(mt).addClass(f).css({top:d,left:u})}}},{key:"trigger",value:function(t,a){var r=$.Event(t,a);return this.$element.trigger(r),r}},{key:"createItem",value:function(t){var a=this.options,r=a.itemTag,n={text:"",view:"",muted:!1,picked:!1,disabled:!1,highlighted:!1},s=[];return $.extend(n,t),n.muted&&s.push(a.mutedClass),n.highlighted&&s.push(a.highlightedClass),n.picked&&s.push(a.pickedClass),n.disabled&&s.push(a.disabledClass),"<".concat(r,' class="').concat(s.join(" "),'" data-view="').concat(n.view,'">').concat(n.text,"</").concat(r,">")}},{key:"getValue",value:function(){var t=this.$element;return this.isInput?t.val():t.text()}},{key:"setValue",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=this.$element;this.isInput?a.val(t):(!this.inline||this.options.container)&&a.text(t)}}],[{key:"setDefaults",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$.extend(Le,we[t.language],$.isPlainObject(t)&&t)}}]),i}();$.extend&&$.extend(te.prototype,vt,ft,ht);$.fn&&(_e=$.fn.datepicker,$.fn.datepicker=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n;return this.each(function(s,l){var o=$(l),c=e==="destroy",h=o.data(D);if(!h){if(c)return;var p=$.extend({},o.data(),$.isPlainObject(e)&&e);h=new te(l,p),o.data(D,h)}if(G(e)){var u=h[e];$.isFunction(u)&&(n=u.apply(h,a),c&&o.removeData(D))}}),ee(n)?this:n},$.fn.datepicker.Constructor=te,$.fn.datepicker.languages=we,$.fn.datepicker.setDefaults=te.setDefaults,$.fn.datepicker.noConflict=function(){return $.fn.datepicker=_e,this});var _e;var M=[];localStorage.getItem("selectedDates")&&(ke=JSON.parse(localStorage.getItem("selectedDates")),S(ke)===!1&&(M=ke));var ke;function ie(i,e){M=[i,e],localStorage.setItem("selectedDates",JSON.stringify(M)),$("#enquiry_data").length&&Oe(!0)}$.fn.datepicker.setDefaults({format:"dd-mm-yyyy",language:"en-GB",autoHide:!0,startDate:new Date,pick:function(i){if(i.view==="day"){var e=$(this),t=e.attr("id");if(t==="hire-start"){var a=i.date,r=i.date.getTime(),n=new Date(r+864e5*28),s=$("#hire-end"),l=s.datepicker("getDate");s.datepicker("setStartDate",n),A(l)?a>=new Date(l.getTime()-864e5*28)?(s.datepicker("setDate",n),s.datepicker("show"),ie(a,n)):ie(a,l):(s.datepicker("setDate",n),s.datepicker("show"),ie(a,n))}else if(t==="hire-end"){var o=$("#hire-start");if(o.val()!==""){var l=i.date,a=o.datepicker("getDate");if(l<a){i.preventDefault(),alert("End date cannot be before the start date");return}if(l===a){i.preventDefault(),alert("Minimum hire period is 1 day");return}ie(a,l)}else o.datepicker("show")}}}});var yt=S(M)===!1;yt?($("#hire-start").datepicker({date:new Date(M[0]),template:_("Select a start date")}).val(ve(M[0])).attr("readonly",""),$("#hire-end").datepicker({date:new Date(M[1]),template:_("Select an end date")}).val(ve(M[1])).attr("readonly","")):($("#hire-start").datepicker({template:_("Select a start date")}).attr("readonly",""),$("#hire-end").datepicker({startDate:new Date(new Date().getTime()+864e5*28),template:_("Select an end date")}).attr("readonly",""));function wt(i){if(Array.isArray(i)){for(var e=0,t=Array(i.length);e<i.length;e++)t[e]=i[e];return t}else return Array.from(i)}var xe=!1;typeof window!="undefined"&&(Ce={get passive(){xe=!0}},window.addEventListener("testPassive",null,Ce),window.removeEventListener("testPassive",null,Ce));var Ce,re=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),F=[],ne=!1,ze=-1,U=void 0,Y=void 0,j=void 0,Qe=function(e){return F.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},se=function(e){var t=e||window.event;return Qe(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},$t=function(e){if(j===void 0){var t=!!e&&e.reserveScrollBarGap===!0,a=window.innerWidth-document.documentElement.clientWidth;if(t&&a>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);j=document.body.style.paddingRight,document.body.style.paddingRight=r+a+"px"}}U===void 0&&(U=document.body.style.overflow,document.body.style.overflow="hidden")},Dt=function(){j!==void 0&&(document.body.style.paddingRight=j,j=void 0),U!==void 0&&(document.body.style.overflow=U,U=void 0)},kt=function(){return window.requestAnimationFrame(function(){if(Y===void 0){Y={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,a=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-a,setTimeout(function(){return window.requestAnimationFrame(function(){var n=r-window.innerHeight;n&&t>=r&&(document.body.style.top=-(t+n))})},300)}})},bt=function(){if(Y!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=Y.position,document.body.style.top=Y.top,document.body.style.left=Y.left,window.scrollTo(t,e),Y=void 0}},St=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Ct=function(e,t){var a=e.targetTouches[0].clientY-ze;return Qe(e.target)?!1:t&&t.scrollTop===0&&a>0||St(t)&&a<0?se(e):(e.stopPropagation(),!0)},qe=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!F.some(function(r){return r.targetElement===e})){var a={targetElement:e,options:t||{}};F=[].concat(wt(F),[a]),re?kt():$t(t),re&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(ze=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&Ct(r,e)},ne||(document.addEventListener("touchmove",se,xe?{passive:!1}:void 0),ne=!0))}};var Ie=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}F=F.filter(function(t){return t.targetElement!==e}),re&&(e.ontouchstart=null,e.ontouchmove=null,ne&&F.length===0&&(document.removeEventListener("touchmove",se,xe?{passive:!1}:void 0),ne=!1)),re?bt():Dt()};var xt=$(".modal").length<1;$(document).on("change","#billing",function(){var i=$(this).val().toLowerCase();i==="hire"?$("#date-picker").removeClass("hidden"):$("#date-picker").addClass("hidden"),$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>')});$('.increase[data-for="enquiry-ribbon"]').on("click",function(i){i.preventDefault();var e=$(this),t=e.parent(),a=t.siblings(".counter"),r=a.val();if(r>=1&&t.siblings(".interaction-button-wrapper").find(".decrease").prop("disabled",!1).removeAttr("disabled"),r<99){var n=+r+1;a.val(n).trigger("change")}});$('.decrease[data-for="enquiry-ribbon"]').on("click",function(i){i.preventDefault();var e=$(this),t=e.parent(),a=t.siblings(".counter"),r=a.val();if(r>1){r===2&&e.prop("disabled",!0).attr("disabled","");var n=+r-1;a.val(n).trigger("change")}});localStorage.getItem("enquiry")?le=JSON.parse(localStorage.getItem("enquiry")):(le=[],localStorage.setItem("enquiry",JSON.stringify(le)));var le;$(document).on("click",'[data-enquiry="add-to-enquiry-modal"]',function(i){i.preventDefault(),$("#variant-select").addClass("hidden"),$("#date-picker").addClass("hidden"),$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>');var e=$(this),t=e.closest(".content_card"),a=t.find(".product_singular_name")&&t.find(".product_singular_name").text()!==""?t.find(".product_singular_name").text():t.find(".content_card_title").text(),r=t.find('[data-node-type="commerce-add-to-cart-option-select"]').children(),n=t.find(".content_card-image").attr("src"),s=[];$.each(r,function(c){this.value!==""&&s.push(this.text)}),$('[data-enquiry="img"]').html(n),$('[data-enquiry="singular-name"]').html(a),S(s)===!1&&(W(s,"variant","variant-label"),$("#variant-select").removeClass("hidden")),$("#qty").val(1),$('.decrease[data-for="enquiry-ribbon"]').prop("disabled",!0).attr("disabled","");var l=[],o=t.find('[data-enquiry="billing"]');o.each(function(){l.push($(this).text())}),W(l,"billing","billing-label"),l[0]==="Hire"&&$("#date-picker").removeClass("hidden"),qt("add-to-enquiry")});function qt(i){if(document.getElementById(i)){var e=document.getElementById(i);qe(e,{reserveScrollBarGap:!0}),e.scroll(0,0);var t=$("#"+i);t.removeClass("closed").addClass("opening").css("display","flex");let a=t.find(".modal-background");a.fadeIn(350),setTimeout(function(){t.removeClass("opening").addClass("open"),$(".loading").removeClass("loading"),a.on("click",function(){H(i)})},350)}}function H(i){if(document.getElementById(i)){var e=$("#"+i);e.removeClass("open").addClass("closing"),e.find(".modal-background").fadeOut(200),setTimeout(function(){e.removeClass("closing").hide().addClass("closed");var t=document.getElementById(i);Ie(t)},200)}}$(".close-modal").each(function(){$(this).on("click",function(i){i.preventDefault();var e=$(i.target).closest(".modal").attr("id");H(e)})});$(".add-to-enquiry .form-select, .add-to-enquiry .input.counter, .add-to-enquiry .calendar-field").each(function(){$(this).on("change",function(){$('[data-enquiry="add-to-enquiry"] .icon-check').length&&$('[data-enquiry="add-to-enquiry"]').html('<span class="button-text icon-add">Add to Enquiry</span>')})});$('[data-enquiry="add-to-enquiry"]').on("click",function(i){i.preventDefault();var e=!0,t=JSON.parse(localStorage.getItem("enquiry")),a="",r="",n="",s="",l="",o=[],c="";if(a=$('[data-enquiry="singular-name"]').length&&$('[data-enquiry="singular-name"]').text()!==""?$('[data-enquiry="singular-name"]').text():$('[data-enquiry="name"]').text(),r=$("#variant").length&&!$("#variant-select").hasClass("hidden")?$("#variant"):$('.product-sidebar [data-node-type="commerce-add-to-cart-option-select"]').length?$('[data-node-type="commerce-add-to-cart-option-select"]'):null,n=r!==null?n.id==="variant"?r.val():r.children('[value="'+r.val()+'"]').text():"n/a",s=$(".counter").val()>0?$(".counter").val():"1",l=$("#billing").val().toLowerCase(),c=xt?$('[data-enquiry="img"]').eq(0).attr("src"):$('[data-enquiry="img"]').text(),o=A($("#hire-start").datepicker("getDate"))&&A($("#hire-end").datepicker("getDate"))?[$("#hire-start").datepicker("getDate"),$("#hire-end").datepicker("getDate")]:[],localStorage.setItem("selectedDates",JSON.stringify(o)),r!==null){if(n===""||n.indexOf("Select")>-1){e=!1,r.siblings(".form-error").length||$('<div class="form-error">Please select a product to add</div>').insertAfter(r),r.trigger("focus");return}r.siblings(".form-error").remove()}if(S(t)===!1){var p=!1;for(let k=0;k<t.length&&!p;k++)if(t[k].billing===l){var u=t[k];for(var d in u)if(u.hasOwnProperty(d)&&d==="id"){var g=u[d],f;if(l==="hire"?f=o[0]&&o[1]?a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"startdate"+O(o[0])+"enddate"+O(o[1]):a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates":f=a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,""),g===f)if(l==="hire"){var m=u.selectedDates;let I=S(m)===!1,C=S(m)===!0,w=S(o)===!1,T=S(o)===!0;if((I&&w||C&&T)&&(C&&T||m[0]===o[0].toISOString()&&m[1]===o[1].toISOString())){p=!0;var y=(parseInt(u.qty,10)+parseInt(s,10)).toString();u.qty=y,localStorage.setItem("enquiry",JSON.stringify(t)),H("add-to-enquiry"),oe({name:a,img:c,variant:n})}}else{p=!0;var y=(parseInt(u.qty,10)+parseInt(s,10)).toString();u.qty=y,localStorage.setItem("enquiry",JSON.stringify(t)),H("add-to-enquiry"),oe({name:a,img:c,variant:n})}}}if(!p){if(l==="hire")var v={billing:l,id:o[0]&&o[1]?a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"startdate"+O(o[0])+"enddate"+O(o[1]):a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates",name:a,img:c,variant:n,qty:s,selectedDates:o[0]&&o[1]?o:[]};else var v={billing:l,id:a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,""),name:a,img:c,variant:n,qty:s};t.push(v),localStorage.setItem("enquiry",JSON.stringify(t)),H("add-to-enquiry"),oe({name:a,img:c,variant:n})}}else{if(l==="hire")var v={billing:l,id:o[0]&&o[1]?a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"startdate"+O(o[0])+"enddate"+O(o[1]):a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,"")+"noselecteddates",name:a,img:c,variant:n,qty:s,selectedDates:o[0]&&o[1]?o:[]};else var v={billing:l,id:a.toLowerCase().replace(/[^\w]/g,"")+n.toLowerCase().replace(/[^\w]/g,""),name:a,img:c,variant:n,qty:s};t.push(v),localStorage.setItem("enquiry",JSON.stringify(t)),H("add-to-enquiry"),oe({name:a,img:c,variant:n})}$(this).html('<span class="button-text icon-check">Added</span>'),Pe()});function oe(i){var e=$($("#product-added").eq(0).html()),t=e.find(".product-added-image"),a=e.find(".product-added-title"),r=i.variant!=="n/a"?i.variant+" "+i.name:i.name;a.html(r),t.attr("src",i.img),$("#complete-enquiry").append(e),setTimeout(function(){e.removeClass("hidden")},50),setTimeout(function(){e.addClass("hidden"),setTimeout(function(){e.remove()},350)},5e3)}$("#filter-fleet-list").on("click",function(i){i.preventDefault(),$("#filter-column").fadeIn(200);var e=document.querySelector("#filter-column");qe(e),e.scroll(0,0)});$("#filter-column-close").on("click",function(i){i.preventDefault(),$("#filter-column").fadeOut(200),setTimeout(function(){var e=document.querySelector("#filter-column");Ie(e)},200)});var Ze=[],It=$('[data-enquiry="billing"] > div');It.each(function(){Ze.push($(this).text())});W(Ze,"billing","billing-label");var Tt=$("#billing").val().toLowerCase();Tt==="hire"&&$("#date-picker").removeClass("hidden");$(".add-to-enquiry .loading").removeClass("loading");$(".lightbox-main-link").on("click",function(i){i.preventDefault(),$(".lightbox-gallery-item").eq(0).find(".w-lightbox").trigger("click")});})();
/*!
 * Datepicker v1.0.10
 * https://fengyuanchen.github.io/datepicker
 *
 * Copyright 2014-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-09-29T14:46:10.983Z
 */
/*!
 * NOTE
 * This is a modified version of datepicker to remove the jquery dependency as it is included with Webflow
 * Edited by Carl Burden
 */
