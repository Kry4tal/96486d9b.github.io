"use strict";var lazyImage=function(){$("img").not(".avatar").each(function(){var a=$(this),t=a.attr("src");a.attr("data-original")||(a.attr("class")?a.attr("class",a.attr("class")+" lazy"):a.attr("class","lazy"),a.attr("data-original",t),a.removeAttr("src"))})},wrapImage=function(){$("img").not(".avatar").not("#bing_img").not(".thumb").each(function(){var a=$(this);if(!a.attr("data-src")){var t=a.attr("alt"),r=a.parent("a");if(r.length<1){var n=a.attr("data-original"),i=n.lastIndexOf("?");-1!==i&&(n=n.substring(0,i)),r=a.wrap('<a href="'+n+'"></a>').parent("a")}r.attr("data-fancybox","gallery"),t&&r.attr("data-caption",t)}})},loadBgImage=function(){$("img[id='bing_img'][class='lazy']").lazyload({effect:"fadeIn",threshold:5})},loadImage=function(){$("img.lazy").not("#bing_img").lazyload({effect:"fadeIn",threshold:50})};