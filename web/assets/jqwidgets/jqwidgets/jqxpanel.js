/*
jQWidgets v4.5.4 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxPanel","",{}),a.extend(a.jqx._jqxPanel.prototype,{defineInstance:function(){var b={width:null,height:null,disabled:!1,scrollBarSize:a.jqx.utilities.scrollBarSize,sizeMode:"fixed",autoUpdate:!1,autoUpdateInterval:500,touchMode:"auto",horizontalScrollBarMax:null,verticalScrollBarMax:null,touchModeStyle:"auto",rtl:!1,events:["layout"]};return this===a.jqx._jqxPanel.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(a){this.render()},render:function(){15!=a.jqx.utilities.scrollBarSize&&(this.scrollBarSize=a.jqx.utilities.scrollBarSize),this.host.addClass(this.toThemeProperty("jqx-panel")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this.host.addClass(this.toThemeProperty("jqx-rc-all"));var b=a("<div id='panelWrapper' style='overflow: hidden; width: 100%; height: 100%; background-color: transparent; -webkit-appearance: none; outline: none; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelContent' style='-webkit-appearance: none; -moz-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%; outline: none; border: none; padding: 0px; position: absolute; margin: 0px; align:left; valign:top; left: 0px; top: 0px;'/><div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/></div>");if(!this.host.jqxButton)throw new Error("jqxPanel: Missing reference to jqxbuttons.js.");if(!this.host.jqxScrollBar)throw new Error("jqxPanel: Missing reference to jqxscrollbar.js.");var c=this.host.children();this._rtl=!1,c.length>0&&"rtl"==c.css("direction")&&(this.rtl=!0,this._rtl=!0),this.host.wrapInner(b);var d=this.host.find("#verticalScrollBar");d[0].id=this.element.id+"verticalScrollBar",this.vScrollBar=d.jqxScrollBar({vertical:!0,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme});var e=this.host.find("#horizontalScrollBar");e[0].id=this.element.id+"horizontalScrollBar",this.hScrollBar=e.jqxScrollBar({vertical:!1,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme}),this.content=this.host.find("#panelContent"),this.wrapper=this.host.find("#panelWrapper"),this.content.addClass(this.toThemeProperty("jqx-widget-content")),this.wrapper[0].id=this.wrapper[0].id+this.element.id,this.content[0].id=this.content[0].id+this.element.id,this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-panel-bottomright")).addClass(this.toThemeProperty("jqx-scrollbar-state-normal")),this.bottomRight[0].id="bottomRight"+this.element.id,this.vScrollBar.css("visibility","inherit"),this.hScrollBar.css("visibility","inherit"),this.vScrollInstance=a.data(this.vScrollBar[0],"jqxScrollBar").instance,this.hScrollInstance=a.data(this.hScrollBar[0],"jqxScrollBar").instance;var f=this;this.propertyChangeMap.disabled=function(a,b,c,d){f.vScrollBar.jqxScrollBar({disabled:f.disabled}),f.hScrollBar.jqxScrollBar({disabled:f.disabled})},this.vScrollBar.jqxScrollBar({disabled:this.disabled}),this.hScrollBar.jqxScrollBar({disabled:this.disabled}),this._addHandlers(),null==this.width&&(this.width=this.content.width()),null==this.height&&(this.height=this.content.height()),this._arrange(),this.contentWidth=f.content[0].scrollWidth,this.contentHeight=f.content[0].scrollHeight,this.autoUpdate&&f._autoUpdate(),this.propertyChangeMap.autoUpdate=function(a,b,c,d){f.autoUpdate?f._autoUpdate():(clearInterval(f.autoUpdateId),f.autoUpdateId=null)},this.addHandler(a(window),"unload",function(){null!=f.autoUpdateId&&(clearInterval(f.autoUpdateId),f.autoUpdateId=null,f.destroy())}),this._updateTouchScrolling(),this._render()},hiddenParent:function(){return a.jqx.isHidden(this.host)},_updateTouchScrolling:function(){var b=this;1==this.touchMode&&a.jqx.mobile.setMobileSimulator(this.element),this.isTouchDevice()&&(a.jqx.mobile.touchScroll(this.element,b.vScrollInstance.max,function(a,c){if("hidden"!=b.vScrollBar.css("visibility")){var d=b.vScrollInstance.value;b.vScrollInstance.setPosition(d+c)}if("hidden"!=b.hScrollBar.css("visibility")){var d=b.hScrollInstance.value;b.hScrollInstance.setPosition(d+a)}},this.element.id,this.hScrollBar,this.vScrollBar),this._arrange()),this.vScrollBar.jqxScrollBar({touchMode:this.touchMode}),this.hScrollBar.jqxScrollBar({touchMode:this.touchMode})},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();return 1==this.touchMode?b=!0:0==this.touchMode&&(b=!1),b&&0!=this.touchModeStyle&&(this.scrollBarSize=a.jqx.utilities.touchScrollBarSize),b},append:function(a){null!=a&&(this.content.append(a),this._arrange())},setcontent:function(a){this.content[0].innerHTML=a,this._arrange();var b=this;setTimeout(function(){b._arrange()},100)},prepend:function(a){null!=a&&(this.content.prepend(a),this._arrange())},clearcontent:function(){this.content.text(""),this.content.children().remove(),this._arrange()},remove:function(b){null!=b&&(a(b).remove(),this._arrange())},_autoUpdate:function(){var a=this;this.autoUpdateId=setInterval(function(){var b=a.content[0].scrollWidth,c=a.content[0].scrollHeight,d=!1;a.contentWidth!=b&&(a.contentWidth=b,d=!0),a.contentHeight!=c&&(a.contentHeight=c,d=!0),d&&a._arrange()},this.autoUpdateInterval)},_addHandlers:function(){var b=this;this.addHandler(this.vScrollBar,"valueChanged",function(a){b._render(b)}),this.addHandler(this.hScrollBar,"valueChanged",function(a){b._render(b)}),this.addHandler(this.host,"mousewheel",function(a){b.wheel(a,b)}),this.addHandler(this.wrapper,"scroll",function(a){0!=b.wrapper[0].scrollTop&&(b.wrapper[0].scrollTop=0),0!=b.wrapper[0].scrollLeft&&(b.wrapper[0].scrollLeft=0)}),this.addHandler(this.host,"mouseleave",function(a){b.focused=!1}),this.addHandler(this.host,"focus",function(a){b.focused=!0}),this.addHandler(this.host,"blur",function(a){b.focused=!1}),this.addHandler(this.host,"mouseenter",function(a){b.focused=!0}),a.jqx.utilities.resize(this.host,function(){a.jqx.isHidden(b.host)||b._arrange(!1)})},resize:function(a,b){this.width=a,this.height=b,this._arrange(!1)},_removeHandlers:function(){this.removeHandler(this.vScrollBar,"valueChanged"),this.removeHandler(this.hScrollBar,"valueChanged"),this.removeHandler(this.host,"mousewheel"),this.removeHandler(this.host,"mouseleave"),this.removeHandler(this.host,"focus"),this.removeHandler(this.host,"blur"),this.removeHandler(this.host,"mouseenter"),this.removeHandler(this.wrapper,"scroll"),this.removeHandler(a(window),"resize."+this.element.id)},wheel:function(b,c){var d=0;if(b.originalEvent&&a.jqx.browser.msie&&b.originalEvent.wheelDelta&&(d=b.originalEvent.wheelDelta/120),b||(b=window.event),b.wheelDelta?d=b.wheelDelta/120:b.detail&&(d=-b.detail/3),d){var e=c._handleDelta(d);return e||b.preventDefault&&b.preventDefault(),!e&&e}b.preventDefault&&b.preventDefault(),b.returnValue=!1},scrollDown:function(){if("hidden"==this.vScrollBar.css("visibility"))return!1;var a=this.vScrollInstance;return a.value+a.largestep<=a.max?(a.setPosition(a.value+a.largestep),!0):a.value+a.largestep!=a.max&&(a.setPosition(a.max),!0)},scrollUp:function(){if("hidden"==this.vScrollBar.css("visibility"))return!1;var a=this.vScrollInstance;return a.value-a.largestep>=a.min?(a.setPosition(a.value-a.largestep),!0):a.value-a.largestep!=a.min&&(a.setPosition(a.min),!0)},_handleDelta:function(a){if(this.focused){var b=this.vScrollInstance.value;a<0?this.scrollDown():this.scrollUp();if(b!=this.vScrollInstance.value)return!1}return!0},_render:function(a){void 0==a&&(a=this);var b=a.vScrollInstance.value,c=a.hScrollInstance.value;this.rtl&&"hidden"!=this.hScrollBar[0].style.visibility&&(c=0==this._rtl?a.hScrollInstance.max-c:-a.hScrollInstance.value),a.content.css({left:-c+"px",top:-b+"px"})},scrollTo:function(a,b){void 0!=a&&void 0!=b&&(this.vScrollInstance.setPosition(b),this.hScrollInstance.setPosition(a))},getScrollHeight:function(){return this.vScrollInstance.max},getVScrollPosition:function(){return this.vScrollInstance.value},getScrollWidth:function(){return this.hScrollInstance.max},getHScrollPosition:function(){return this.hScrollInstance.value},_getScrollSize:function(){var b=this.scrollBarSize;return isNaN(b)&&(b=parseInt(b),isNaN(b)?b="17px":b+="px"),this.isTouchDevice()&&(b=a.jqx.utilities.touchScrollBarSize),b=parseInt(b)},_getScrollArea:function(){var b=0;this.content.css("margin-right","0px"),this.content.css("max-width","9999999px"),a.jqx.browser.msie&&a.jqx.browser.version<10&&(b=parseInt(this.content.css("left")),this.content.css("left",0)),this.content.css("overflow","auto"),this.rtl&&this.content.css("direction","rtl");var c=parseInt(this.content[0].scrollWidth);a.each(this.content.children(),function(){c=Math.max(c,this.scrollWidth),c=Math.max(c,a(this).outerWidth())}),a.jqx.browser.msie&&a.jqx.browser.version<10&&this.content.css("left",b);var d=parseInt(this.content[0].scrollHeight);if(this.content.css("overflow","visible"),a.jqx.browser.msie&&a.jqx.browser.version<9){var d=parseInt(this.content[0].scrollHeight);switch(this.sizeMode){case"wrap":var d=parseInt(this.content[0].scrollHeight),c=parseInt(this.content[0].scrollWidth);break;case"horizontalWrap":case"horizontalwrap":break;case"verticalWrap":case"verticalwrap":var d=parseInt(this.content[0].scrollHeight)}}return this.rtl&&this.content.css("direction","ltr"),{width:c,height:d}},_arrange:function(b){!1!==b&&(null!=this.width&&this.host.width(this.width),null!=this.height&&this.host.height(this.height));var c=this._getScrollSize(),d=this.host.width(),e=this.host.height(),f=this._getScrollArea(),g=f.width,h=f.height,i=h-parseInt(Math.round(this.host.height())),j=g-parseInt(Math.round(this.host.width()));void 0!=this.horizontalScrollBarMax&&(j=this.horizontalScrollBarMax),void 0!=this.verticalScrollBarMax&&(i=this.verticalScrollBarMax);var k=function(a,b){b>5?(a.vScrollBar.jqxScrollBar({max:b}),a.vScrollBar.css("visibility","inherit")):(a.vScrollBar.jqxScrollBar("setPosition",0),a.vScrollBar.css("visibility","hidden"))},l=function(b,d){d>0?a.jqx.browser.msie&&a.jqx.browser.version<8&&d-10<=c?(b.hScrollBar.css("visibility","hidden"),b.hScrollBar.jqxScrollBar("setPosition",0)):(b.hScrollBar.jqxScrollBar({max:d+4}),b.hScrollBar.css("visibility","inherit")):(b.hScrollBar.css("visibility","hidden"),b.hScrollBar.jqxScrollBar("setPosition",0))};switch(this.sizeMode){case"wrap":return this.host.width(g),this.host.height(h),this.vScrollBar.css("visibility","hidden"),void this.hScrollBar.css("visibility","hidden");case"horizontalWrap":case"horizontalwrap":return this.host.width(g),this.hScrollBar.css("visibility","hidden"),k(this,i),void this._arrangeScrollbars(c,g,e);case"verticalWrap":case"verticalwrap":return this.host.height(h),this.vScrollBar.css("visibility","hidden"),l(this,j),void this._arrangeScrollbars(c,d,e)}k(this,i);"hidden"!=this.vScrollBar.css("visibility")&&void 0==this.horizontalScrollBarMax&&(!this.isTouchDevice()&&j>0||j>0)&&(j+=c+2),l(this,j),"hidden"!=this.hScrollBar.css("visibility")&&this.vScrollBar.jqxScrollBar({max:i+c+2}),this._arrangeScrollbars(c,d,e)},_arrangeScrollbars:function(b,c,d){var e="hidden"!=this.vScrollBar[0].style.visibility;this.hScrollBar[0].style.visibility;if(this.hScrollBar.height(b),this.hScrollBar.css({top:d-b-2-2+"px",left:"0px"}),this.hScrollBar.width(c-2+"px"),this.vScrollBar.width(b),this.vScrollBar.height(parseInt(d)-2+"px"),this.vScrollBar.css({left:parseInt(c)-parseInt(b)-2-2+"px",top:"0px"}),this.rtl){this.vScrollBar.css({left:"0px"});var f=e?parseInt(b)+"px":0;if("rtl"!=this.content.children().css("direction")){var g=!1;a.jqx.browser.msie&&a.jqx.browser.version<8&&(g=!0),g||this.content.css("padding-left",f)}}else"hidden"!=this.vScrollBar.css("visibility")&&this.content.css("max-width",this.host.width()-this.vScrollBar.outerWidth());"hidden"!=this.vScrollBar.css("visibility")&&"hidden"!=this.hScrollBar.css("visibility")?(this.bottomRight.css("visibility","inherit"),this.bottomRight.css({left:1+parseInt(this.vScrollBar.css("left")),top:1+parseInt(this.hScrollBar.css("top"))}),this.bottomRight.width(parseInt(b)+3),this.bottomRight.height(parseInt(b)+3),this.rtl&&(this.bottomRight.css({left:"0px"}),this.hScrollBar.css({left:b+2+"px"})),this.hScrollBar.width(c-1*b-2-2+"px"),this.vScrollBar.height(parseInt(d)-2-b-2+"px")):this.bottomRight.css("visibility","hidden"),this.hScrollInstance.refresh(),this.vScrollInstance.refresh()},destroy:function(){clearInterval(this.autoUpdateId),this.autoUpdateId=null,this.autoUpdate=!1,a.jqx.utilities.resize(this.host,null,!0),this._removeHandlers(),this.removeHandler(a(window),"unload"),this.vScrollBar.jqxScrollBar("destroy"),this.hScrollBar.jqxScrollBar("destroy"),this.host.remove()},_raiseevent:function(b,c,d){if(void 0!=this.isInitialized&&1==this.isInitialized){var e=this.events[b],f=new a.Event(e);f.previousValue=c,f.currentValue=d,f.owner=this;return this.host.trigger(f)}},beginUpdateLayout:function(){this.updating=!0},resumeUpdateLayout:function(){this.updating=!1,this.vScrollInstance.value=0,this.hScrollInstance.value=0,this._arrange(),this._render()},propertyChangedHandler:function(a,b,c,d){a.isInitialized&&("rtl"==b&&(this.vScrollBar.jqxScrollBar({rtl:d}),this.hScrollBar.jqxScrollBar({rtl:d}),a._arrange()),a.updating||"scrollBarSize"!=b&&"width"!=b&&"height"!=b||c!=d&&a._arrange(),"touchMode"==b&&"auto"!=d&&a._updateTouchScrolling(),"theme"==b&&(a.host.removeClass(),a.host.addClass(this.toThemeProperty("jqx-panel")),a.host.addClass(this.toThemeProperty("jqx-widget")),a.host.addClass(this.toThemeProperty("jqx-widget-content")),a.host.addClass(this.toThemeProperty("jqx-rc-all")),a.vScrollBar.jqxScrollBar({theme:this.theme}),a.hScrollBar.jqxScrollBar({theme:this.theme}),a.bottomRight.removeClass(),a.bottomRight.addClass(this.toThemeProperty("jqx-panel-bottomright")),a.bottomRight.addClass(this.toThemeProperty("jqx-scrollbar-state-normal")),a.content.removeClass(),a.content.addClass(this.toThemeProperty("jqx-widget-content"))))},invalidate:function(){a.jqx.isHidden(this.host)||this.refresh()},refresh:function(a){this._arrange()}})}(jqxBaseFramework);

