/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.icons.js";var __meta__={id:"pager",name:"Pager",category:"framework",depends:["data","icons"],advanced:!0};!function(e,t){var a=window.kendo,n=a.ui,i=n.Widget,s=a.keys,l=a.template,r="caret-alt-to-left",o="caret-alt-to-right",p="caret-alt-left",d="caret-alt-right",u="k-pager-mobile-md k-pager-mobile-sm",g=":kendoFocusable:not([tabindex='-1'])",m="change",c=".kendoPager",f="click",h=Number.MAX_VALUE,b=!1;function k(e){return e.template({idx:e.idx,text:e.text,ns:a.ns,numeric:e.numeric,size:e.size,title:e.title||"",tabindex:e.navigatable?0:-1,navigatable:e.navigatable})}function _(e,t,a,n){return e({idx:t,text:a||t,selected:n||!1})}function v(e,t,n,i,s){return(({text:e,wrapClassName:t,className:n,size:i})=>`<button role="button" title="${e}" aria-label="${e}" class="k-pager-nav k-button k-button-flat k-button-flat-base k-icon-button ${t} ${i}">${a.ui.icon(n)}</button>`)({className:e,text:t,wrapClassName:n||"",id:i||"",size:s})}function S(e,t,n,i){e.find(`[class*="-i-${t}"]`).parent().attr(a.attr("page"),n).attr("tabindex",i?-1:0).attr("aria-disabled",i).toggleClass("k-disabled",i)}function x(e,t){S(e,r,1,t<=1)}function z(e,t){S(e,p,Math.max(1,t-1),t<=1)}function C(e,t,a){S(e,d,Math.min(a,t+1),t>=a)}function w(e,t,a){S(e,o,a,t>=a)}var T=i.extend({init:function(t,n){var s,l,u,g=this,h="",k="";if(i.fn.init.call(g,t,n),n=g.options,g._createDataSource(n),g.linkTemplate=a.template(g.options.linkTemplate),g.selectTemplate=a.template(g.options.selectTemplate),g.numericSelectItemTemplate=a.template(g.options.numericSelectItemTemplate),s=g.page(),l=g.totalPages(),g._refreshHandler=g.refresh.bind(g),g.dataSource.bind(m,g._refreshHandler),g.downEvent=a.applyEventMap("down",a.guid()),b=a.support.isRtl(t),n.size&&(h=a.getValidCssClass("k-button-","size",n.size),k="k-rounded-md "+a.getValidCssClass("k-picker-","size",n.size)),n.navigatable&&(g._id=g.element.attr("id")||a.guid()),g._template(),n.previousNext&&(g.element.find("[class*='-i-"+r+"']").length||(g.element.append(v(r,n.messages.first,"k-pager-first",g._id,h)),x(g.element,s)),g.element.find("[class*='-i-"+p+"']").length||(g.element.append(v(p,n.messages.previous,null,g._id,h)),z(g.element,s))),n.numeric&&(g._numericWrap||(g._numericWrap=g.element.find(".k-pager-numbers-wrap"),0===g._numericWrap.length&&(g._numericWrap=e("<div class='k-pager-numbers-wrap' />").appendTo(g.element))),g._numericSelect||(g._numericSelect=g._numericWrap.find(".k-dropdown"),0===g._numericSelect.length&&(g._numericSelect=e("<select aria-label='"+g.options.messages.numbersSelectLabel+"' class='k-dropdown k-picker k-dropdown-list "+k+"' />").appendTo(g._numericWrap))),g.list||(g.list=g._numericWrap.find(".k-pager-numbers"),0===g.list.length&&(g.list=e('<div class="k-pager-numbers" />').appendTo(g._numericWrap))),n.dataSource&&!n.dataSource.total()&&(g._numericSelect.empty().append("<option value='0' />"),g.list.empty().append(g.selectTemplate({text:0,tabindex:n.navigatalbe?0:-1,navigatable:n.navigatable,title:a.format(n.messages.pageButtonLabel,0)})))),n.input&&(g.element.find(".k-pager-input").length||g.element.append('<span class="k-pager-input k-label">'+n.messages.page+'<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" /></span>'+a.format(n.messages.of,l)+"</span>"),g.element.on("keydown"+c,".k-pager-input input",g._keydown.bind(g))),n.previousNext&&(g.element.find("[class*='-i-"+d+"']").length||(g.element.append(v(d,n.messages.next,null,g._id,h)),C(g.element,s,l)),g.element.find("[class*='-i-"+o+"']").length||(g.element.append(v(o,n.messages.last,"k-pager-last",g._id,h)),w(g.element,s,l))),n.pageSizes){if(!g.element.find(".k-pager-sizes").length){var _=n.pageSizes.length?n.pageSizes:["all",5,10,20],S=e.map(_,(function(e){return e.toLowerCase&&"all"===e.toLowerCase()?"<option value='all'>"+n.messages.allPages+"</option>":"<option>"+e+"</option>"}));e('<span class="k-pager-sizes k-label"><select></select>'+n.messages.itemsPerPage+"</span>").appendTo(g.element).find("select").html(S.join("")).end().appendTo(g.element)}g.element.find(".k-pager-sizes select").val(g.pageSize()),a.ui.DropDownList&&g.element.find(".k-pager-sizes select").show().attr("aria-label",n.messages.pageSizeDropDownLabel).kendoDropDownList({size:n.size}),g.element.on(m+c,".k-pager-sizes select",g._change.bind(g))}n.refresh&&(g.element.find(".k-pager-refresh").length||g.element.append('<button role="button" href="#" class="k-pager-refresh k-button '+h+' k-button-flat k-button-flat-base k-icon-button" title="'+n.messages.refresh+'" aria-label="'+n.messages.refresh+'">'+a.ui.icon("arrow-rotate-cw")+"</button>"),g.element.on(f+c,".k-pager-refresh",g._refreshClick.bind(g))),n.info&&(g.element.find(".k-pager-info").length||g.element.append('<span class="k-pager-info k-label" />')),g.element.on(f+c,"button",g._click.bind(g)).on(m+c,"select.k-dropdown",g._numericSelectChange.bind(g)).addClass("k-pager"),n.autoBind&&g.refresh(),g._resizeHandler=g.resize.bind(g,!0),e(window).on("resize"+c,g._resizeHandler),(u=g._getWidthSizeClass(g.element.outerWidth()))&&g.element.addClass(u),n.size&&g.element.addClass(a.getValidCssClass("k-pager-","size",n.size)),g._navigatable(),a.notify(g)},destroy:function(){var t=this;i.fn.destroy.call(t),t.element.off(c),t.dataSource.unbind(m,t._refreshHandler),t._refreshHandler=null,e(window).off("resize"+c,this._resizeHandler),a.destroy(t.element),t.element=t.list=null},events:[m],options:{name:"Pager",ARIATemplate:({page:e,totalPages:t})=>`Page navigation, page ${e} of ${t}`,selectTemplate:({text:e,title:t,tabindex:a,size:n})=>`<button role="button" aria-current="page" tabindex="${a}" aria-label="${t}" class="k-button ${n} k-button-flat k-button-flat-primary k-selected">${e}</span>`,linkTemplate:({ns:e,idx:t,text:a,title:n,tabindex:i,size:s})=>`<button class="k-button ${s} k-button-flat k-button-flat-primary" tabindex="${i}" href="#" data-${e}page="${t}" ${""!==n?`title="${n}"`:""}>${a}</button>`,numericSelectItemTemplate:({idx:e,selected:t,text:a})=>`<option value="${e}" ${t?'selected="selected"':""}>${a}</option>`,buttonCount:10,autoBind:!0,numeric:!0,info:!0,input:!1,previousNext:!0,pageSizes:!1,refresh:!1,responsive:!0,navigatable:!1,size:"medium",messages:{allPages:"All",display:"{0} - {1} of {2} items",empty:"No items to display",page:"Page",of:"of {0}",itemsPerPage:"items per page",pageButtonLabel:"Page {0}",pageSizeDropDownLabel:"Page sizes drop down",numbersSelectLabel:"Page select",first:"Go to the first page",previous:"Go to the previous page",next:"Go to the next page",last:"Go to the last page",refresh:"Refresh",morePages:"More pages"}},setDataSource:function(e){var t=this;t.dataSource.unbind(m,t._refreshHandler),t.dataSource=t.options.dataSource=e,e.bind(m,t._refreshHandler),t.options.autoBind&&e.fetch()},_aria:function(){this.element.attr({role:"application","aria-roledescription":"pager","aria-keyshortcuts":"Enter ArrowRight ArrowLeft"})},_resize:function(e){if(e.width){var t=this._getWidthSizeClass(e.width),a=this.element;t?a.hasClass(t)||(a.removeClass(u),a.addClass(t)):a.removeClass(u)}},_createDataSource:function(e){this.dataSource=a.data.DataSource.create(e.dataSource)},refresh:function(t){var n,i,s,l=this,r=1,o=l.page(),p="",d="",u=l.options,g=l.pageSize(),m=l._collapsedTotal(),c=l.dataSource._isGroupPaged()?l.dataSource.groupsTotal(!0):l.dataSource.total(),f=l.totalPages(),b=l.linkTemplate,v=u.navigatable,S=l.numericSelectItemTemplate,T=u.size?a.getValidCssClass("k-button-","size",u.size):"",y=u.buttonCount;if(!t||"itemchange"!=t.action){if(u.numeric){for(o>y&&(r=0===(s=o%y)?o-y+1:o-s+1),i=Math.min(r+y-1,f),r>1&&(p+=k({template:b,navigatable:v,size:T,idx:r-1,text:"...",numeric:!1,title:u.messages.morePages}),d+=_(S,r-1,u.messages.morePages)),n=r;n<=i;n++)p+=k({template:n==o?l.selectTemplate:b,navigatable:v,idx:n,text:n,size:T,numeric:!0,title:a.format(u.messages.pageButtonLabel,n)}),d+=_(S,n,n,n==o);i<f&&(p+=k({template:b,navigatable:v,idx:n,size:T,text:"...",numeric:S,title:u.messages.morePages}),d+=_(S,n,u.messages.morePages)),""===p&&(p=l.selectTemplate({text:0,size:T,tabindex:v?0:-1,navigatable:v,title:a.format(u.messages.pageButtonLabel,0)}),d=e("<option value='0' />")),l.list.html(p),l._numericSelect.html(d)}if(u.info&&(p=c>0?a.format(u.messages.display,l.dataSource.options.endless?1:Math.min((o-1)*(l.dataSource.pageSize()||0)+1,m),Math.min(o*g,m),c):u.messages.empty,l.element.find(".k-pager-info").html(p)),u.input&&l.element.find(".k-pager-input").html(l.options.messages.page+'<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" aria-label="'+l.options.messages.page+" "+o+'"></span>'+a.format(u.messages.of,f)).find("input").val(o).attr("disabled",c<1).attr("aria-disabled",c<1).toggleClass("k-disabled",c<1),u.previousNext&&(x(l.element,o),z(l.element,o),C(l.element,o,f),w(l.element,o,f)),u.pageSizes){var P=g;l.element.find(".k-pager-sizes option[value='all']").length>0&&(g===this.dataSource.total()||g==h)&&(g="all",P=u.messages.allPages),l.element.find(".k-pager-sizes select").val(g).filter("["+a.attr("role")+"=dropdownlist]").kendoDropDownList("value",g).kendoDropDownList("text",P)}l._restoreFocus(r,i,f),l._excludeChildrenFromTab(),l._updateAria()}},_excludeChildrenFromTab:function(){var t=a._activeElement();!this.options.navigatable||t!==this.element[0]&&e.contains(this.element[0],t)||this.element.find(g).attr("tabindex",-1)},_restoreFocus:function(e,t,a){var n=this;n.options.navigatable&&(n._focusSelected&&(n.element.find(".k-selected").trigger("focus"),n._focusSelected=null),null!==n._focusMore&&(t<a&&n._focusMore&&n.list.find("li").last().find("a").trigger("focus"),!n._focusMore&&e>1&&n.list.find("li").first().find("a").trigger("focus"),n._focusMore=null))},_restoreTabIndexes:function(){this.element.find("[tabindex='-1']:not(.k-disabled)").attr("tabindex",0)},_collapsedTotal:function(){return this.dataSource.total()},_keydown:function(e){if(e.keyCode===a.keys.ENTER){var t=this.element.find(".k-pager-input").find("input"),n=parseInt(t.val(),10);(isNaN(n)||n<1||n>this.totalPages())&&(n=this.page()),t.val(n),this.page(n)}},_refreshClick:function(e){e.preventDefault(),this.dataSource.read()},_change:function(e){var a=e.currentTarget.value,n=parseInt(a,10),i=this.dataSource;isNaN(n)?"all"==(a+"").toLowerCase()&&(i._pageSize=t,i._take=t,i._skip=0,i.fetch()):i.pageSize(n)},_template:function(){this._ariaTemplate=l(this.options.ARIATemplate).bind(this)},_updateAria:function(){this.options.navigatable&&this.element.attr("aria-label",this._ariaTemplate({page:this.page(),totalPages:this.totalPages()}))},_navigatable:function(){var e=this;e.options.navigatable&&(e._aria(),e.element.attr("id",e._id),e._template(),e._updateAria(),e._tabindex(e.element),e.element.on("keydown"+c,e,e._keyDown.bind(e)),e.element.on("focusout"+c,(function(){e.element.removeClass("k-focus")})),e.element.on("focusin"+c,(function(t){e.element.addClass("k-focus"),t.target===e.element[0]?e.element.find(g).attr("tabindex",-1):e.element.removeClass("k-focus")})))},_keyDown:function(t){var a,n,i=this,l=e(t.target),r=!1;l[0]===i.element[0]&&t.keyCode==s.ENTER&&(i._restoreTabIndexes(),i.element.find(g).first().trigger("focus"),r=!0),l[0]!==i.element[0]&&t.keyCode==s.ESC&&(i.element.trigger("focus"),r=!0),l[0]===i.element[0]&&t.keyCode==s.HOME&&(i.page(1),r=!0),l[0]===i.element[0]&&t.keyCode==s.END&&(i.page(i.totalPages()),r=!0),l[0]!==i.element[0]||t.keyCode!=(b?s.LEFT:s.RIGHT)&&t.keyCode!=s.PAGEDOWN||(i.page(i.page()+1),r=!0),l[0]!==i.element[0]||t.keyCode!=(b?s.RIGHT:s.LEFT)&&t.keyCode!=s.PAGEUP||(i.page(i.page()-1||1),r=!0),l[0]!==i.element[0]&&t.keyCode==s.TAB&&(n=(a=i.element.find(g)).index(l),t.shiftKey?n-1<0?a.last().trigger("focus"):a.eq(n-1).trigger("focus"):n+1<a.length?a.eq(n+1).trigger("focus"):a.first().trigger("focus"),r=!0),r&&(t.preventDefault(),t.stopPropagation())},_numericSelectChange:function(e){var t=e.currentTarget,a=t.value,n=parseInt(a,10);t.blur(),this.page(n)},_click:function(t){var n=e(t.currentTarget);t.preventDefault(),this.options.navigatable&&(n.attr("title")==this.options.messages.morePages?this._focusMore=n.parent().index():n.hasClass("k-pager-refresh")||n.hasClass("k-pager-nav")||(this._focusSelected=!0)),n.is(".k-disabled")||this.page(parseInt(n.attr(a.attr("page")),10))},totalPages:function(){return Math.ceil((this.dataSource.total()||0)/(this.pageSize()||1))},pageSize:function(){return this.dataSource.pageSize()||this.dataSource.total()},page:function(e){if(!e)return this.dataSource.total()>0?this.dataSource.page():0;this.trigger("pageChange",{index:e})||(this.dataSource.page(e),this.trigger(m,{index:e}))},_getWidthSizeClass:function(e){var t=u.split(" ");return this.options.responsive?e<=480?t[1]:e<=600?t[0]:null:null}});n.plugin(T)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.pager.js.map