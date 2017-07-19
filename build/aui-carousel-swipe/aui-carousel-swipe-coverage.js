if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-carousel-swipe/aui-carousel-swipe.js']) {
   __coverage__['build/aui-carousel-swipe/aui-carousel-swipe.js'] = {"path":"build/aui-carousel-swipe/aui-carousel-swipe.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"CarouselSwipe","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":10,"column":25}}},"3":{"name":"(anonymous_3)","line":23,"loc":{"start":{"line":23,"column":17},"end":{"line":23,"column":28}}},"4":{"name":"(anonymous_4)","line":33,"loc":{"start":{"line":33,"column":29},"end":{"line":33,"column":40}}},"5":{"name":"(anonymous_5)","line":47,"loc":{"start":{"line":47,"column":16},"end":{"line":47,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":59,"column":111}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":27}},"3":{"start":{"line":12,"column":0},"end":{"line":54,"column":2}},"4":{"start":{"line":24,"column":8},"end":{"line":24,"column":74}},"5":{"start":{"line":34,"column":8},"end":{"line":36,"column":10}},"6":{"start":{"line":48,"column":8},"end":{"line":52,"column":9}},"7":{"start":{"line":51,"column":12},"end":{"line":51,"column":35}},"8":{"start":{"line":56,"column":0},"end":{"line":56,"column":55}}},"branchMap":{"1":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":8},"end":{"line":48,"column":8}},{"start":{"line":48,"column":8},"end":{"line":48,"column":8}}]},"2":{"line":48,"type":"binary-expr","locations":[{"start":{"line":48,"column":12},"end":{"line":48,"column":28}},{"start":{"line":48,"column":32},"end":{"line":48,"column":109}}]}},"code":["(function () { YUI.add('aui-carousel-swipe', function (A, NAME) {","","/**"," * The Carousel funcionality of swiping to go to the previous/next image."," * Will be mixed into the Carousel automatically when loaded."," *"," * @module aui-carousel-swipe"," */","","function CarouselSwipe() {}","","CarouselSwipe.prototype = {","    WIDGET_INDEX_ATTRIBUTE: 'currentIndex',","    WIDGET_ITEM_SELECTOR: '.image-viewer-base-image-container',","","    /**","     * Construction logic executed during instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        A.after(this._afterAttachSwipeEvents, this, '_attachSwipeEvents');","    },","","    /**","     * Attaches more events related to the swipe functionality.","     *","     * @method _afterAttachSwipeEvents","     * @protected","     */","    _afterAttachSwipeEvents: function() {","        this._swipeEventHandles.push(","            this.on('animate', this._onAnimate)","        );","    },","","    /**","     * Fired on the `animate` event. This prevents new image animations when","     * the current image was shown by scrolling.","     *","     * @method _onAnimate","     * @param {EventFacade} event","     * @protected","     */","    _onAnimate: function(event) {","        if (this._scrollView && this._scrollView.pages.get('index') === this.get(this.WIDGET_INDEX_ATTRIBUTE)) {","            // If the scroll view is already at the new index, then it was already","            // scrolled there, so we don't want the carousel to animate it.","            event.preventDefault();","        }","    }","};","","A.Base.mix(A.Carousel, [A.WidgetSwipe, CarouselSwipe]);","","","}, '3.1.0-deprecated.18', {\"requires\": [\"aui-carousel\", \"aui-widget-swipe\", \"base-build\"], \"skinnable\": true});","","}());"]};
}
var __cov_uoKrYsLHczPRrXdRRkDwGA = __coverage__['build/aui-carousel-swipe/aui-carousel-swipe.js'];
__cov_uoKrYsLHczPRrXdRRkDwGA.s['1']++;YUI.add('aui-carousel-swipe',function(A,NAME){__cov_uoKrYsLHczPRrXdRRkDwGA.f['1']++;__cov_uoKrYsLHczPRrXdRRkDwGA.s['2']++;function CarouselSwipe(){__cov_uoKrYsLHczPRrXdRRkDwGA.f['2']++;}__cov_uoKrYsLHczPRrXdRRkDwGA.s['3']++;CarouselSwipe.prototype={WIDGET_INDEX_ATTRIBUTE:'currentIndex',WIDGET_ITEM_SELECTOR:'.image-viewer-base-image-container',initializer:function(){__cov_uoKrYsLHczPRrXdRRkDwGA.f['3']++;__cov_uoKrYsLHczPRrXdRRkDwGA.s['4']++;A.after(this._afterAttachSwipeEvents,this,'_attachSwipeEvents');},_afterAttachSwipeEvents:function(){__cov_uoKrYsLHczPRrXdRRkDwGA.f['4']++;__cov_uoKrYsLHczPRrXdRRkDwGA.s['5']++;this._swipeEventHandles.push(this.on('animate',this._onAnimate));},_onAnimate:function(event){__cov_uoKrYsLHczPRrXdRRkDwGA.f['5']++;__cov_uoKrYsLHczPRrXdRRkDwGA.s['6']++;if((__cov_uoKrYsLHczPRrXdRRkDwGA.b['2'][0]++,this._scrollView)&&(__cov_uoKrYsLHczPRrXdRRkDwGA.b['2'][1]++,this._scrollView.pages.get('index')===this.get(this.WIDGET_INDEX_ATTRIBUTE))){__cov_uoKrYsLHczPRrXdRRkDwGA.b['1'][0]++;__cov_uoKrYsLHczPRrXdRRkDwGA.s['7']++;event.preventDefault();}else{__cov_uoKrYsLHczPRrXdRRkDwGA.b['1'][1]++;}}};__cov_uoKrYsLHczPRrXdRRkDwGA.s['8']++;A.Base.mix(A.Carousel,[A.WidgetSwipe,CarouselSwipe]);},'3.1.0-deprecated.18',{'requires':['aui-carousel','aui-widget-swipe','base-build'],'skinnable':true});
