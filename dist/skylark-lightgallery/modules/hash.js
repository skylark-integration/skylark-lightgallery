/**
 * skylark-lightgallery - The skylark album widgets.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-jquery","../light-gallery"],function(t,o){"use strict";var e={hash:!0},l=function(o){return this.core=t(o).data("lightGallery"),this.core.s=t.extend({},e,this.core.s),this.core.s.hash&&(this.oldHash=window.location.hash,this.init()),this};l.prototype.init=function(){var o,e=this;e.core.$el.on("onAfterSlide.lg.tm",function(t,o,l){history.replaceState?history.replaceState(null,null,window.location.pathname+window.location.search+"#lg="+e.core.s.galleryId+"&slide="+l):window.location.hash="lg="+e.core.s.galleryId+"&slide="+l}),t(window).on("hashchange.lg.hash",function(){o=window.location.hash;var t=parseInt(o.split("&slide=")[1],10);o.indexOf("lg="+e.core.s.galleryId)>-1?e.core.slide(t,!1,!1):e.core.lGalleryOn&&e.core.destroy()})},l.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?history.replaceState?history.replaceState(null,null,this.oldHash):window.location.hash=this.oldHash:history.replaceState?history.replaceState(null,document.title,window.location.pathname+window.location.search):window.location.hash="",this.core.$el.off(".lg.hash"))},t.fn.lightGallery.modules.hash=l});
//# sourceMappingURL=../sourcemaps/modules/hash.js.map
