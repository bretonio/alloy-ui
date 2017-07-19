if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-alert/aui-alert.js']) {
   __coverage__['build/aui-alert/aui-alert.js'] = {"path":"build/aui-alert/aui-alert.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":43,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":25}}},"3":{"name":"(anonymous_3)","line":53,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":23}}},"4":{"name":"(anonymous_4)","line":65,"loc":{"start":{"line":65,"column":25},"end":{"line":65,"column":41}}},"5":{"name":"(anonymous_5)","line":78,"loc":{"start":{"line":78,"column":25},"end":{"line":78,"column":41}}},"6":{"name":"(anonymous_6)","line":91,"loc":{"start":{"line":91,"column":24},"end":{"line":91,"column":40}}},"7":{"name":"(anonymous_7)","line":101,"loc":{"start":{"line":101,"column":21},"end":{"line":101,"column":35}}},"8":{"name":"(anonymous_8)","line":149,"loc":{"start":{"line":149,"column":21},"end":{"line":149,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":210,"column":3}},"2":{"start":{"line":9,"column":0},"end":{"line":12,"column":59}},"3":{"start":{"line":28,"column":0},"end":{"line":197,"column":3}},"4":{"start":{"line":44,"column":8},"end":{"line":44,"column":52}},"5":{"start":{"line":54,"column":8},"end":{"line":54,"column":60}},"6":{"start":{"line":55,"column":8},"end":{"line":55,"column":62}},"7":{"start":{"line":66,"column":8},"end":{"line":68,"column":9}},"8":{"start":{"line":67,"column":12},"end":{"line":67,"column":44}},"9":{"start":{"line":79,"column":8},"end":{"line":81,"column":9}},"10":{"start":{"line":80,"column":12},"end":{"line":80,"column":24}},"11":{"start":{"line":92,"column":8},"end":{"line":92,"column":43}},"12":{"start":{"line":102,"column":8},"end":{"line":103,"column":54}},"13":{"start":{"line":105,"column":8},"end":{"line":105,"column":54}},"14":{"start":{"line":107,"column":8},"end":{"line":107,"column":31}},"15":{"start":{"line":109,"column":8},"end":{"line":111,"column":9}},"16":{"start":{"line":110,"column":12},"end":{"line":110,"column":39}},"17":{"start":{"line":113,"column":8},"end":{"line":116,"column":9}},"18":{"start":{"line":114,"column":12},"end":{"line":114,"column":49}},"19":{"start":{"line":115,"column":12},"end":{"line":115,"column":88}},"20":{"start":{"line":150,"column":16},"end":{"line":150,"column":87}}},"branchMap":{"1":{"line":66,"type":"if","locations":[{"start":{"line":66,"column":8},"end":{"line":66,"column":8}},{"start":{"line":66,"column":8},"end":{"line":66,"column":8}}]},"2":{"line":66,"type":"binary-expr","locations":[{"start":{"line":66,"column":12},"end":{"line":66,"column":25}},{"start":{"line":66,"column":29},"end":{"line":66,"column":54}}]},"3":{"line":79,"type":"if","locations":[{"start":{"line":79,"column":8},"end":{"line":79,"column":8}},{"start":{"line":79,"column":8},"end":{"line":79,"column":8}}]},"4":{"line":109,"type":"if","locations":[{"start":{"line":109,"column":8},"end":{"line":109,"column":8}},{"start":{"line":109,"column":8},"end":{"line":109,"column":8}}]},"5":{"line":113,"type":"if","locations":[{"start":{"line":113,"column":8},"end":{"line":113,"column":8}},{"start":{"line":113,"column":8},"end":{"line":113,"column":8}}]}},"code":["(function () { YUI.add('aui-alert', function (A, NAME) {","","/**"," * The Alert Component"," *"," * @module aui-alert"," */","","var getClassName = A.getClassName,","    CSS_CLOSE = getClassName('close'),","    CSS_INFO = getClassName('alert', 'info'),","    CSS_DISMISSABLE = getClassName('alert', 'dismissable');","","/**"," * A base class for Alert."," *"," * Check the [live demo](http://alloyui.com/examples/alert/)."," *"," * @class A.Alert"," * @extends Widget"," * @uses A.WidgetCssClass, A.WidgetTransition"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," * @include http://alloyui.com/examples/alert/basic-markup.html"," * @include http://alloyui.com/examples/alert/basic.js"," */","A.Alert = A.Base.create('alert', A.Widget, [","    A.WidgetCssClass,","    A.WidgetStdMod,","    A.WidgetTransition","], {","    CONTENT_TEMPLATE: null,","","    _eventHandle: null,","","    /**","     * Renders the Alert component instance. Lifecycle.","     *","     * @method renderUI","     * @protected","     */","    renderUI: function() {","        this._uiSetCloseable(this.get('closeable'));","    },","","    /**","     * Binds the events on the Alert UI. Lifecycle.","     *","     * @method bindUI","     * @protected","     */","    bindUI: function() {","        this.on('closeableChange', this._onCloseableChange);","        this.after('visibleChange', this._afterVisibleChange);","    },","","    /**","     * Fires after visibility changes.","     *","     * @method _afterVisibleChange","     * @param {EventFacade} event","     * @protected","     */","    _afterVisibleChange: function(event) {","        if (!event.newVal && this.get('destroyOnHide')) {","            A.soon(A.bind('destroy', this));","        }","    },","","    /**","     * Handles close icon click event.","     *","     * @method _onClickBoundingBox","     * @param {EventFacade} event","     * @protected","     */","    _onClickBoundingBox: function(event) {","        if (event.target.test('.' + CSS_CLOSE)) {","            this.hide();","        }","    },","","    /**","     * Handles `closeable` events.","     *","     * @method _onCloseableChange","     * @param {EventFacade} event","     * @protected","     */","    _onCloseableChange: function(event) {","        this._uiSetCloseable(event.newVal);","    },","","    /**","     * Sets `closeable` UI.","     *","     * @method _uiSetCloseable","     * @protected","     */","    _uiSetCloseable: function(val) {","        var boundingBox = this.get('boundingBox'),","            closeableNode = this.get('closeableNode');","","        boundingBox.toggleClass(CSS_DISMISSABLE, val);","","        closeableNode.remove();","","        if (this._eventHandle) {","            this._eventHandle.detach();","        }","","        if (val) {","            boundingBox.insert(closeableNode, 0);","            this._eventHandle = boundingBox.on('click', this._onClickBoundingBox, this);","        }","    }","}, {","","    /**","     * Static property used to define the default attribute","     * configuration for the Alert.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * Whether the alert can be closed.","         *","         * @attribute closeable","         * @default true","         * @type {Boolean}","         */","        closeable: {","            validator: A.Lang.isBoolean,","            value: true","        },","","        /**","         * Node used to generate a close button.","         *","         * @attribute closeableNode","         * @default `<button type=\"button\" class=\"close\">×</button>`","         * @type {Node}","         */","        closeableNode: {","            valueFn: function() {","                return A.Node.create('<button type=\"button\" class=\"close\">×</button>');","            }","        },","","        /**","         * CSS class for alert.","         *","         * @attribute popoverCssClass","         * @default A.getClassName('alert-info')","         * @type {String}","         */","        cssClass: {","            value: CSS_INFO","        },","","        /**","         * Determine if Alert should be destroyed when hidden.","         *","         * @attribute destroyOnHide","         * @default false","         * @type Boolean","         */","        destroyOnHide: {","            validator: A.Lang.isBoolean,","            value: false","        }","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type {String}","     * @static","     */","    CSS_PREFIX: 'alert',","","    /**","     * Object hash, defining how closeableNode value have to be parsed from markup.","     *","     * @property HTML_PARSER","     * @type Object","     * @static","     */","    HTML_PARSER: {","        closeableNode: '.' + CSS_CLOSE","    }","});","","","}, '3.1.0-deprecated.18', {","    \"requires\": [","        \"timers\",","        \"widget\",","        \"widget-stdmod\",","        \"aui-classnamemanager\",","        \"aui-widget-cssclass\",","        \"aui-widget-transition\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_4PBfiDi4ZbhKFZ2to3MtXQ = __coverage__['build/aui-alert/aui-alert.js'];
__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['1']++;YUI.add('aui-alert',function(A,NAME){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['1']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['2']++;var getClassName=A.getClassName,CSS_CLOSE=getClassName('close'),CSS_INFO=getClassName('alert','info'),CSS_DISMISSABLE=getClassName('alert','dismissable');__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['3']++;A.Alert=A.Base.create('alert',A.Widget,[A.WidgetCssClass,A.WidgetStdMod,A.WidgetTransition],{CONTENT_TEMPLATE:null,_eventHandle:null,renderUI:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['2']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['4']++;this._uiSetCloseable(this.get('closeable'));},bindUI:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['3']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['5']++;this.on('closeableChange',this._onCloseableChange);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['6']++;this.after('visibleChange',this._afterVisibleChange);},_afterVisibleChange:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['4']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['7']++;if((__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['2'][0]++,!event.newVal)&&(__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['2'][1]++,this.get('destroyOnHide'))){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['1'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['8']++;A.soon(A.bind('destroy',this));}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['1'][1]++;}},_onClickBoundingBox:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['5']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['9']++;if(event.target.test('.'+CSS_CLOSE)){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['3'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['10']++;this.hide();}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['3'][1]++;}},_onCloseableChange:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['6']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['11']++;this._uiSetCloseable(event.newVal);},_uiSetCloseable:function(val){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['7']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['12']++;var boundingBox=this.get('boundingBox'),closeableNode=this.get('closeableNode');__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['13']++;boundingBox.toggleClass(CSS_DISMISSABLE,val);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['14']++;closeableNode.remove();__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['15']++;if(this._eventHandle){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['4'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['16']++;this._eventHandle.detach();}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['4'][1]++;}__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['17']++;if(val){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['5'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['18']++;boundingBox.insert(closeableNode,0);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['19']++;this._eventHandle=boundingBox.on('click',this._onClickBoundingBox,this);}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['5'][1]++;}}},{ATTRS:{closeable:{validator:A.Lang.isBoolean,value:true},closeableNode:{valueFn:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['8']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['20']++;return A.Node.create('<button type="button" class="close">\xd7</button>');}},cssClass:{value:CSS_INFO},destroyOnHide:{validator:A.Lang.isBoolean,value:false}},CSS_PREFIX:'alert',HTML_PARSER:{closeableNode:'.'+CSS_CLOSE}});},'3.1.0-deprecated.18',{'requires':['timers','widget','widget-stdmod','aui-classnamemanager','aui-widget-cssclass','aui-widget-transition'],'skinnable':true});
