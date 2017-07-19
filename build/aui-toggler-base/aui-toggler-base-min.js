YUI.add("aui-toggler-base",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isObject,s=n.isString,o=n.isUndefined,u=n.toInt,a="cubic-bezier(0, 0.1, 0, 1.0)",f=e.getClassName,l=f("toggler","content"),c=f("toggler","content","collapsed"),h=f("toggler","content","expanded"),p=f("toggler","content","wrapper"),d=f("toggler","header"),v=f("toggler","header","collapsed"),m=f("toggler","header","expanded"),g={"false":c,"true":h},y={"false":v,"true":m},b='<div class="'+p+'"></div>',w=e.Component.create({NAME:"toggler",ATTRS:{animated:{validator:r,value:!1,writeOnce:!0},animating:{validator:r,value:!1},bindDOMEvents:{validator:r,value:!0,writeOnce:!0},content:{setter:e.one},expanded:{validator:r,value:!0},header:{setter:e.one},toggleEvent:{validator:s,value:"tap",writeOnce:!0},transition:{validator:i,value:{duration:.4,easing:a}}},EXTENDS:e.Base,headerEventHandler:function(e,t){if(e.type===t.get("toggleEvent")||e.isKey("enter")||e.isKey("space"))return t.toggle();if(e.isKey("down")||e.isKey("right")||e.isKey("num_plus"))return t.expand();if(e.isKey("up")||e.isKey("left")||e.isKey("esc")||e.isKey("num_minus"))return t.collapse()},prototype:{initializer:function(){var e=this;e.bindUI(),e.syncUI(),e._uiSetExpanded(e.get("expanded"))},bindUI:function(){var t=this,n=t.get("header");n.setData("toggler",t);var r=[t.on("expandedChange",e.bind(t._onExpandedChange,t))];t.get("bindDOMEvents")&&r.push(n.on([t.get("toggleEvent"),"keydown"],e.rbind(w.headerEventHandler,null,t))),t._eventHandles=r},syncUI:function(){var e=this;e.get("content").addClass(l),e.get("header").addClass(d)},destructor:function(){var t=this,n,r;t.get("header").setData("toggler",null),t.wrapped&&(n=t.get("content"),r=n.get("parentNode"),r.insert(n,"before"),r.remove()),(new e.EventHandle(t._eventHandles)).detach()},animate:function(t,n){var r=this;r._uiSetExpanded(!0);var i=e.merge(t,r.get("transition"));r.get("content").transition(i,e.bind(n,r))},collapse:function(e){var t=this;return t.toggle(!1,e)},expand:function(e){var t=this;return t.toggle(!0,e)},getContentHeight:function(){var e=this,t=e.get("content"),n=e.get("expanded"),r;n||e._uiSetExpanded(!0);if(t.hasMethod("getBoundingClientRect")){var i=t.invoke("getBoundingClientRect");i&&(r=i.bottom-i.top)}else r=t.get("offsetHeight");return n||e._uiSetExpanded(!1),r},toggle:function(e,t){var n=this,r=n.get("header"),i;if(!r.test(":visible"))return;i=n.get("expanded"),o(e)&&(e=!i);if(e!==i)if(n.get("animated")){if(n.get("animating"))return e;n._animation(e,t)}else n.set("expanded",e,t);return e},_animation:function(e,t){var n=this,r=n.get("content"),i=n.contentGutter,s=n.getContentHeight();o(i)&&(i=n.contentGutter=u(r.getStyle("marginTop"))),n.wrapped||(n._uiSetExpandedContent(),e&&r.setStyle("marginTop",-(s+i))),n.set("animating",!0),n.animate({marginTop:(e?i:-(s+i))+"px"},function(){n.set("animating",!1),n.set("expanded",e,t)})},_onExpandedChange:function(e){var t=this;t._uiSetExpanded(e.newVal)},_uiSetExpanded:function(e){var t=this,n=t.get("expanded");n&&!t.wrapped&&t._uiSetExpandedContent(),t.get("content").replaceClass(g[!e],g[e]),t.get("header").replaceClass(y[!e],y[e])},_uiSetExpandedContent:function(){var e=this;e.get("content").wrap(b),e.wrapped=!0}}});e.Toggler=w},"3.1.0-deprecated.18",{requires:["transition","aui-selector","aui-event-base","aui-node","aui-component","event-tap"],skinnable:!0});
