"use strict";var customSearch,scrollCorrection=70,changeEssay=function(){$("#digest, #open").fadeOut(1e3,function(){$("#content").fadeIn(1e3)})},scrollToElement=function(e,t){t=t||scrollCorrection;var a=e.href?$(e.getAttribute("href")):$(e);$("html, body").animate({scrollTop:a.offset().top-t},400)},initCustomSearch=function(){"google"===CONFIG.search_service?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/images/"}):"algolia"===CONFIG.search_service?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/images/"}):"hexo"===CONFIG.search_service?customSearch=new HexoSearch({imagePath:"/images/"}):"azure"===CONFIG.search_service?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/images/"}):"baidu"===CONFIG.search_service&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/images/"}))},initHeaderMenu=function(){var a=$("header .menu"),n=a.find(".underline");function t(e,t){e=e||a.find("li a.active"),(t=void 0===t||!!t)||n.addClass("disable-trans"),e&&e.length?(e.addClass("active").siblings().removeClass("active"),n.css({left:e.position().left,width:e.innerWidth()})):n.css({left:0,width:0}),t||setTimeout(function(){n.removeClass("disable-trans")},0)}a.on("mouseenter","li",function(e){t($(e.currentTarget))}),a.on("mouseout",function(){t()});var e=null;if("/"===location.pathname||location.pathname.startsWith("/page/"))e=$(".nav-home",a);else{var i=location.pathname,o=(i="/"===i[i.length-1]?i:i+"/").match(/\/(.*?)\//);1<o.length&&(e=$(".nav-"+o[1],a))}t(e,!1)},initHeaderMenuPhone=function(){var t=$(".l_header .switcher .s-menu");t.click(function(e){e.stopPropagation(),$("body").toggleClass("z_menu-open"),t.toggleClass("active")}),$(document).click(function(e){$("body").removeClass("z_menu-open"),t.removeClass("active")})},initHeaderSearch=function(){var e=$(".l_header .switcher .s-search"),t=$(".l_header"),a=$(".l_header .m_search");0!==e.length&&(e.click(function(e){e.stopPropagation(),t.toggleClass("z_search-open"),a.find("input").focus()}),$(document).click(function(e){t.removeClass("z_search-open")}),a.click(function(e){e.stopPropagation()}))},initHeaderIconTop=function(){var e=$("header .wrapper");$(".s-top",e).click(function(){return scrollToElement(document.body)})},initHeaderIconDown=function(){var e=$("header .wrapper"),t=$(".s-down",e),a=$("#footer");t.click(function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(a)})},initHeaderIconComment=function(){var e=$("header .wrapper"),t=$(".s-comment",e),a=$(".s-down",e),n=$(".comment");n.length?(a.hide(),t.unbind("click"),t.show(),t.click(function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(n)})):(t.hide(),a.show())},initHeader=function(){var e=$("header .menu").find("li a.active");if(e&&e.length&&e.removeClass("active"),window.subData){var a=$("header .wrapper");a.find(".nav-sub .logo").text(window.subData.title);var n=document.body.scrollTop;$(document,window).scroll(function(){var e=$(window).scrollTop(),t=e-n;50<=t&&100<e?(n=e,a.addClass("sub")):t<=-50&&(n=e,a.removeClass("sub"))})}},initWaves=function(){Waves.attach(".flat-btn",["waves-button"]),Waves.attach(".float-btn",["waves-button","waves-float"]),Waves.attach(".float-btn-light",["waves-button","waves-float","waves-light"]),Waves.attach(".flat-box",["waves-block"]),Waves.attach(".float-box",["waves-block","waves-float"]),Waves.attach(".waves-image"),Waves.init()},initReveal=function(){if(0!==$(".reveal").length){var e=ScrollReveal({distance:"0px",easing:"ease-in"});e.destroy(),e.reveal(".reveal")}},initToc=function(){$(".toc-wrapper").length&&($(".toc-wrapper a").unbind("click"),$(".toc-wrapper a").on("click",function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(this)}))},initGallery=function(){if(location.pathname.startsWith("/gallery/")){var t=[],c=document.getElementById("gallery"),a=function(e){var t=document.createElement("img");t.setAttribute("src",e.url);var a=document.createElement("div"),n="flex-grow:"+100*e.width/e.height+";flex-basis:"+200*e.width/e.height+"px;";a.setAttribute("style",n);var i=document.createElement("i"),o="padding-bottom:"+e.height/e.width*100+"%";i.setAttribute("style",o),a.appendChild(i),a.appendChild(t),c.appendChild(a)};fetch("/gallery/data.json").then(function(e){return e.json()}).then(function(e){t=e.pics,function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(c),t.forEach(a),document.body.scrollTop=0,lazyImage(),wrapImage(),loadImage()})}},initImage=function(){location.pathname.startsWith("/gallery/")||(lazyImage(),wrapImage(),loadImage())},initMotto=function(){$("#motto-div").click(function(){$("#motto-div").unbind("click"),new Typed("#motto",{strings:["Hello，你好哇！","睁着一只眼睛，关注人生。\n闭着一只眼睛，放进梦意。"],typeSpeed:100,backSpeed:100,startDelay:500,backDelay:500,onComplete:function(){var e=document.querySelector(".typed-cursor");setTimeout(function(){e.style.opacity=0},2e3)}})})},init=function(){initCustomSearch(),initHeader(),initHeaderIconTop(),initHeaderIconDown(),initHeaderIconComment(),initHeaderMenu(),initHeaderMenuPhone(),initHeaderSearch(),initWaves(),initReveal(),initToc(),initGallery(),initImage(),loadBgImage(),initSince(),initMotto()},pjax_init=function(){initHeader(),initHeaderIconComment(),initHeaderMenu(),initWaves(),initReveal(),initToc(),initGallery(),initImage()};