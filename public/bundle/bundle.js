(function(){
var _$hideSection_6 = {};
"use strict";Object.defineProperty(_$hideSection_6,"__esModule",{value:!0}),_$hideSection_6.hideSection=function(){$("body").hasClass("checkout-page")||$("body").hasClass("done-page")?$("#topbar, #header, #footer").hide():$("#top, #header, #footer").show()};

var _$districts_3 = {};
"use strict";Object.defineProperty(_$districts_3,"__esModule",{value:!0}),_$districts_3.districts=function(){$(document).ready(function(){(address_2=localStorage.getItem("address_2_saved"))&&($('select[name="calc_shipping_district"] option').each(function(){$(this).text()==address_2&&$(this).attr("selected","")}),$("input.billing_address_2").attr("value",address_2)),(district=localStorage.getItem("district"))&&($('select[name="calc_shipping_district"]').html(district),$('select[name="calc_shipping_district"]').on("change",function(){var target=$(this).children("option:selected");target.attr("selected",""),$('select[name="calc_shipping_district"] option').not(target).removeAttr("selected"),address_2=target.text(),$("input.billing_address_2").attr("value",address_2),district=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",district),localStorage.setItem("address_2_saved",address_2)})),$('select[name="calc_shipping_provinces"]').each(function(){var $this=$(this),stc="";c.forEach(function(i,e){stc+="<option value="+(e+=1)+">"+i+"</option>",$this.html('<option value="">T\u1ec9nh / Th\xe0nh ph\u1ed1</option>'+stc),(address_1=localStorage.getItem("address_1_saved"))&&($('select[name="calc_shipping_provinces"] option').each(function(){$(this).text()==address_1&&$(this).attr("selected","")}),$("input.billing_address_1").attr("value",address_1)),$this.on("change",function(i){i=$this.children("option:selected").index()-1;var str="",r=$this.val();if(""!=r){arr[i].forEach(function(el){str+='<option value="'+el+'">'+el+"</option>",$('select[name="calc_shipping_district"]').html('<option value="">Qu\u1eadn / Huy\u1ec7n</option>'+str)});var address_1=$this.children("option:selected").text(),district=$('select[name="calc_shipping_district"]').html();localStorage.setItem("address_1_saved",address_1),localStorage.setItem("district",district),$('select[name="calc_shipping_district"]').on("change",function(){var target=$(this).children("option:selected");target.attr("selected",""),$('select[name="calc_shipping_district"] option').not(target).removeAttr("selected");var address_2=target.text();$("input.billing_address_2").attr("value",address_2),district=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",district),localStorage.setItem("address_2_saved",address_2)})}else $('select[name="calc_shipping_district"]').html('<option value="">Qu\u1eadn / Huy\u1ec7n</option>'),district=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",district),localStorage.removeItem("address_1_saved",address_1)})})})})};

var _$backToTop_2 = {};
"use strict";Object.defineProperty(_$backToTop_2,"__esModule",{value:!0}),_$backToTop_2.backToTop=function(){$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".back-to-top").addClass("open"):$(".back-to-top").removeClass("open")}),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})})};

var _$openFilters_7 = {};
"use strict";Object.defineProperty(_$openFilters_7,"__esModule",{value:!0}),_$openFilters_7.openFilters=function(){$(document).ready(function(){$(".open-filters").click(function(e){$(this).find("i").hasClass("bxs-filter-alt")?($(this).find("i").removeClass("bxs-filter-alt"),$(this).find("i").addClass("bx-x")):($(this).find("i").removeClass("bx-x"),$(this).find("i").addClass("bxs-filter-alt")),$(".aside").hasClass("open")||$(".open-filters").hasClass("open")?$(".aside, .open-filters").removeClass("open"):$(".aside, .open-filters").addClass("open")})})};

var _$viewMode_13 = {};
"use strict";Object.defineProperty(_$viewMode_13,"__esModule",{value:!0}),_$viewMode_13.viewMode=function(){$(document).ready(function(){$(".view-mode button").click(function(){$(".view-mode button").removeClass("active"),$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),$("#view-list").click(function(){$(".products-view").addClass("list")}),$("#view-grid").click(function(){$(".products-view").removeClass("list")}),$("#formAddProduct .btn-buy").click(function(e){$("#modalAddProduct").modal(),e.preventDefault()})})};

var _$slickProduct_11 = {};
"use strict";Object.defineProperty(_$slickProduct_11,"__esModule",{value:!0}),_$slickProduct_11.slickProduct=function(){$(document).ready(function(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,speed:400,prevArrow:$(".prev-arrow2"),nextArrow:$(".next-arrow2"),asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!1,centerMode:!0,focusOnSelect:!0,vertical:!0,speed:400,infinite:!0,centerPadding:"20px",responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1,vertical:!1}},{breakpoint:576,settings:{slidesToShow:3,slidesToScroll:1,vertical:!1}}]})})};

var _$slickBanner_9 = {};
"use strict";Object.defineProperty(_$slickBanner_9,"__esModule",{value:!0}),_$slickBanner_9.slickBanner=function(){$(document).ready(function(){$(".slide-banners").slick({infinite:!0,slidesToShow:1,autoplay:!0,autoplaySpeed:2500,arrows:!0,dots:!0,speed:500,fade:!0,cssEase:"linear",prevArrow:$(".prev-arrow"),nextArrow:$(".next-arrow")})})};

var _$slickBrands_10 = {};
"use strict";Object.defineProperty(_$slickBrands_10,"__esModule",{value:!0}),_$slickBrands_10.slickBrands=function(){$(document).ready(function(){$(".slider-brands").slick({infinite:!0,slidesToShow:6,arrows:!0,dots:!1,speed:600,fade:!1,prevArrow:$(".prev-arrow1"),nextArrow:$(".next-arrow1"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,dots:!1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]})})};

var _$dropDown_4 = {};
"use strict";Object.defineProperty(_$dropDown_4,"__esModule",{value:!0}),_$dropDown_4.dropDown=function(){$(document).ready(function(){$(".aside-category .dropdown").click(function(e){$(this).find("> ul").slideToggle(350),$(this).find("> a i").toggleClass("rotate180deg")}),$(".dropdown-btn").click(function(e){e.preventDefault()}),$(".dropdown-btn ul").find("a").click(function(e){e.stopPropagation()})})};

var _$glightbox_5 = {};
"use strict";Object.defineProperty(_$glightbox_5,"__esModule",{value:!0}),_$glightbox_5.glightbox=function(){$(document).ready(function(){GLightbox({selector:".portfokio-lightbox",loop:!0})})};

var _$quantityProduct_8 = {};
"use strict";Object.defineProperty(_$quantityProduct_8,"__esModule",{value:!0}),_$quantityProduct_8.quantityProduct=function(){$(document).ready(function(){$(".minus-icon").click(function(){var quantity=parseInt($("#quantity").val());(quantity-=1)>0?$(".form-product #quantity").val(quantity):$(".form-product #quantity").val(parseInt(1))}),$(".plus-icon").click(function(){var quantity=parseInt($(".form-product #quantity").val());quantity+=1,$(".form-product #quantity").val(quantity)})})};

var _$toggleMobile_12 = {};
"use strict";Object.defineProperty(_$toggleMobile_12,"__esModule",{value:!0}),_$toggleMobile_12.toggleMobile=function(){$(document).ready(function(){$("#nav-mobile-hamburger").click(function(e){$(".list-nav-mobile").slideToggle(350)})})};

var _$script_1 = {};
"use strict";/* removed: var _$toggleMobile_12=require("./sub-js/toggleMobile.js"); */;(0,_$hideSection_6.hideSection)(),(0,_$districts_3.districts)(),(0,_$backToTop_2.backToTop)(),(0,_$openFilters_7.openFilters)(),(0,_$viewMode_13.viewMode)(),(0,_$slickProduct_11.slickProduct)(),(0,_$slickBanner_9.slickBanner)(),(0,_$slickBrands_10.slickBrands)(),(0,_$dropDown_4.dropDown)(),(0,_$glightbox_5.glightbox)(),(0,_$quantityProduct_8.quantityProduct)(),(0,_$toggleMobile_12.toggleMobile)();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrLWZsYXRcXF9wcmVsdWRlIiwicHVibGljL2pzL3N1Yi1qcy9oaWRlU2VjdGlvbi5qcyIsInB1YmxpYy9qcy9zdWItanMvZGlzdHJpY3RzLmpzIiwicHVibGljL2pzL3N1Yi1qcy9iYWNrVG9Ub3AuanMiLCJwdWJsaWMvanMvc3ViLWpzL29wZW5GaWx0ZXJzLmpzIiwicHVibGljL2pzL3N1Yi1qcy92aWV3TW9kZS5qcyIsInB1YmxpYy9qcy9zdWItanMvc2xpY2tQcm9kdWN0LmpzIiwicHVibGljL2pzL3N1Yi1qcy9zbGlja0Jhbm5lci5qcyIsInB1YmxpYy9qcy9zdWItanMvc2xpY2tCcmFuZHMuanMiLCJwdWJsaWMvanMvc3ViLWpzL2Ryb3BEb3duLmpzIiwicHVibGljL2pzL3N1Yi1qcy9nbGlnaHRib3guanMiLCJwdWJsaWMvanMvc3ViLWpzL3F1YW50aXR5UHJvZHVjdC5qcyIsInB1YmxpYy9qcy9zdWItanMvdG9nZ2xlTW9iaWxlLmpzIiwicHVibGljL2pzL3NjcmlwdC5qcyIsIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrLWZsYXRcXF9wb3N0bHVkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO3dHQ0RBLFVBQUEsQ0FFTyxDQUFBLENBQUUsTUFBQSxDQUFBLENBQVEsUUFBQSxDQUFTLGVBQUEsQ0FBQSxFQUFvQixDQUFBLENBQUUsTUFBQSxDQUFBLENBQVEsUUFBQSxDQUFTLFdBQUEsQ0FBQSxDQUN6RCxDQUFBLENBQUUsMkJBQUEsQ0FBQSxDQUE2QixJQUFBLEVBQUEsQ0FFL0IsQ0FBQSxDQUFFLHdCQUFBLENBQUEsQ0FBMEIsSUFBQSxFQUFBLENBQUEsQ0FBQTs7O2tHQ0xwQyxVQUFBLENBQ0ksQ0FBQSxDQUFFLFFBQUEsQ0FBQSxDQUFVLEtBQUEsQ0FBTSxVQUFBLENBQUEsQ0FFWCxTQUFBLENBQVksWUFBQSxDQUFhLE9BQUEsQ0FBUSxpQkFBQSxDQUFBLElBQ2hDLENBQUEs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RUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxXQUFBLEdBQUEsQ0FBQSxDQUNBLENBQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsQ0FDQSxDQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLENBQ0EsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxXQUFBLEdBQUEsQ0FBQSxDQUNBLENBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsQ0FDQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxZQUFBLEdBQUEsQ0FBQSxDQUNBLENBQUEsQ0FBQSxlQUFBLENBQUEsV0FBQSxHQUFBLENBQUEsQ0FDQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEdBQUEsQ0FBQSxDQUNBLENBQUEsQ0FBQSxZQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsQ0FDQSxDQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLENBQ0EsQ0FBQSxDQUFBLG1CQUFBLENBQUEsZUFBQSxHQUFBLENBQUEsQ0FDQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxZQUFBLEdBQUEsQ0FBQTtBQ3hCQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiIsImZ1bmN0aW9uIGhpZGVTZWN0aW9uKCl7XHJcbiAgICAvLy0gSGlkZSAjdG9wYmFyLCAjaGVhZGVyLCAjZm9vdGVyIOG7nyBjaGVja291dC1wYWdlLCBkb25lLXBhZ2VcclxuICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcyhcImNoZWNrb3V0LXBhZ2VcIikgfHwgJCgnYm9keScpLmhhc0NsYXNzKFwiZG9uZS1wYWdlXCIpKXtcclxuICAgICAgICAkKCcjdG9wYmFyLCAjaGVhZGVyLCAjZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnI3RvcCwgI2hlYWRlciwgI2Zvb3RlcicpLnNob3coKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtoaWRlU2VjdGlvbn07IiwiZnVuY3Rpb24gZGlzdHJpY3RzKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vLSBM4bqleSBkYXRhIGPhu6dhIDY0IHThu4luaCB0aMOgbmhcclxuICAgICAgICBpZihhZGRyZXNzXzIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc18yX3NhdmVkJykpIHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdIG9wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgPT0gYWRkcmVzc18yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzZWxlY3RlZCcsICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdpbnB1dC5iaWxsaW5nX2FkZHJlc3NfMicpLmF0dHIoJ3ZhbHVlJywgYWRkcmVzc18yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkaXN0cmljdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXN0cmljdCcpKSB7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoZGlzdHJpY3QpXHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb246c2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmF0dHIoJ3NlbGVjdGVkJywgJycpXHJcbiAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfZGlzdHJpY3RcIl0gb3B0aW9uJykubm90KHRhcmdldCkucmVtb3ZlQXR0cignc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc18yID0gdGFyZ2V0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzInKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMilcclxuICAgICAgICAgICAgICAgIGRpc3RyaWN0ID0gJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzXzJfc2F2ZWQnLCBhZGRyZXNzXzIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19wcm92aW5jZXNcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBzdGMgPSAnJ1xyXG4gICAgICAgICAgICBjLmZvckVhY2goZnVuY3Rpb24oaSwgZSkge1xyXG4gICAgICAgICAgICAgICAgZSArPSArMVxyXG4gICAgICAgICAgICAgICAgc3RjICs9ICc8b3B0aW9uIHZhbHVlPScgKyBlICsgJz4nICsgaSArICc8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAkdGhpcy5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+VOG7iW5oIC8gVGjDoG5oIHBo4buRPC9vcHRpb24+JyArIHN0YylcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzXzEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc18xX3NhdmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfcHJvdmluY2VzXCJdIG9wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSA9PSBhZGRyZXNzXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc2VsZWN0ZWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzEnKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9ICR0aGlzLmNoaWxkcmVuKCdvcHRpb246c2VsZWN0ZWQnKS5pbmRleCgpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICByID0gJHRoaXMudmFsKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAociAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0uZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGVsICsgJ1wiPicgKyBlbCArICc8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfZGlzdHJpY3RcIl0nKS5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+UXXhuq1uIC8gSHV54buHbjwvb3B0aW9uPicgKyBzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzXzEgPSAkdGhpcy5jaGlsZHJlbignb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0cmljdCA9ICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc18xX3NhdmVkJywgYWRkcmVzc18xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbjpzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYXR0cignc2VsZWN0ZWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXSBvcHRpb24nKS5ub3QodGFyZ2V0KS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc18yID0gdGFyZ2V0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzInKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0ID0gJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzXzJfc2F2ZWQnLCBhZGRyZXNzXzIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgnPG9wdGlvbiB2YWx1ZT1cIlwiPlF14bqtbiAvIEh1eeG7h248L29wdGlvbj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmljdCA9ICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FkZHJlc3NfMV9zYXZlZCcsIGFkZHJlc3NfMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXN0cmljdHN9OyIsImZ1bmN0aW9uIGJhY2tUb1RvcCgpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBCYWNrIHRvIHRvcCBidXR0b25cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgICAgIH0sIDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8tIERvIGPDsyB0YWcgYSBuw6puIGTDuW5nIMSR4buDIHRyw6FuaCBi4buLIHRy4bufIHbhu4EgxJHhuqd1IHRyYW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtiYWNrVG9Ub3B9OyIsImZ1bmN0aW9uIG9wZW5GaWx0ZXJzKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vLSBPcGVuIGZpbHRlciBpbiBjb2xsZWN0aW9uLnB1Z1xyXG4gICAgICAgICQoJy5vcGVuLWZpbHRlcnMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLy0gQ2h1eeG7g24gaWNvblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdpJykuaGFzQ2xhc3MoJ2J4cy1maWx0ZXItYWx0JykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaScpLnJlbW92ZUNsYXNzKCdieHMtZmlsdGVyLWFsdCcpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5hZGRDbGFzcygnYngteCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnYngteCcpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5hZGRDbGFzcygnYnhzLWZpbHRlci1hbHQnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLy0gTeG7nyBmaWx0ZXJzXHJcbiAgICAgICAgICAgIGlmICgkKCcuYXNpZGUnKS5oYXNDbGFzcygnb3BlbicpIHx8ICQoJy5vcGVuLWZpbHRlcnMnKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXNpZGUsIC5vcGVuLWZpbHRlcnMnKS5yZW1vdmVDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXNpZGUsIC5vcGVuLWZpbHRlcnMnKS5hZGRDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBvcGVuRmlsdGVycyB9OyIsImZ1bmN0aW9uIHZpZXdNb2RlKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vLSBWaWV3IG1vZGU6IGdyaWQsIGxpc3QgaW4gY29sbGVjdGlvbi5wdWdcclxuICAgICAgICAkKCcudmlldy1tb2RlIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnZpZXctbW9kZSBidXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyN2aWV3LWxpc3QnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0cy12aWV3JykuYWRkQ2xhc3MoJ2xpc3QnKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjdmlldy1ncmlkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdHMtdmlldycpLnJlbW92ZUNsYXNzKCdsaXN0JylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLy0gQnV0dG9uIGJ0biBidXksIHRvIG9wZW4gbW9kYWwgd2hlbiBzdWJtaXRcclxuICAgICAgICAkKCcjZm9ybUFkZFByb2R1Y3QgLmJ0bi1idXknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxBZGRQcm9kdWN0JykubW9kYWwoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdmlld01vZGUgfTsiLCJmdW5jdGlvbiBzbGlja1Byb2R1Y3QoKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8tIFNsaWNrIHNsaWRlclxyXG4gICAgICAgICQoJy5zbGlkZXItZm9yJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLnByZXYtYXJyb3cyJyksXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJCgnLm5leHQtYXJyb3cyJyksXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1uYXYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtzbGlja1Byb2R1Y3R9OyIsImZ1bmN0aW9uIHNsaWNrQmFubmVyKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vLSBTbGljayBiYW5uZXIgaW4gc2xpZGVyLnB1Z1xyXG4gICAgICAgICQoJy5zbGlkZS1iYW5uZXJzJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjUwMCxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAkKCcucHJldi1hcnJvdycpLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5uZXh0LWFycm93JylcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsaWNrQmFubmVyfTsiLCJmdW5jdGlvbiBzbGlja0JyYW5kcygpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLy0gU2xpY2sgYnJhbmRzXHJcbiAgICAgICAgJCgnLnNsaWRlci1icmFuZHMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiA2MDAsIFxyXG4gICAgICAgICAgICBmYWRlOiBmYWxzZSwgLy8tIE7hur91IGPDsyBuaGnhu4F1IHNsaWRlIG3DoCDEkeG7gyBmYWRlOiB0cnVlIHRow6wgbsOzIGNo4buJIGhp4buHbiAxIGl0ZW1cclxuICAgICAgICAgICAgcHJldkFycm93OiAkKCcucHJldi1hcnJvdzEnKSxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAkKCcubmV4dC1hcnJvdzEnKSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsaWNrQnJhbmRzfTsiLCJmdW5jdGlvbiBkcm9wRG93bigpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLy0gVG9nZ2xlIGZvciBwcm9kdWN0cy1wYWdlXHJcbiAgICAgICAgJCgnLmFzaWRlLWNhdGVnb3J5IC5kcm9wZG93bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnPiB1bCcpLnNsaWRlVG9nZ2xlKDM1MCk7XHJcbiAgICAgICAgICAgIC8vLSBSb3RhdGUgaWNvbiBpXHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnPiBhIGknKS50b2dnbGVDbGFzcyhcInJvdGF0ZTE4MGRlZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTm93IGxpbmsgd29uJ3QgZ28gYW55d2hlcmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLWJ0biB1bCcpLmZpbmQoJ2EnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBOb3cgdGhlIGV2ZW50IHdvbid0IGJ1YmJsZSB1cFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRyb3BEb3duIH07IiwiZnVuY3Rpb24gZ2xpZ2h0Ym94KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICAqIEluaXRpYXRlIHBvcnRmb2xpbyBsaWdodGJveCBcclxuICAgICAgICAqKi9cclxuICAgICAgICBjb25zdCBwb3J0Zm9saW9MaWdodGJveCA9IEdMaWdodGJveCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvcnRmb2tpby1saWdodGJveCcsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtnbGlnaHRib3h9OyIsImZ1bmN0aW9uIHF1YW50aXR5UHJvZHVjdCgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLy0gSW5jcmVhc2UsIGRlY3JlYXNlIGFtb3VudCBvZiBwcm9kdWN0IGluIHByb2R1Y3QtaW5mby5wdWdcclxuICAgICAgICAkKCcubWludXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoJCgnI3F1YW50aXR5JykudmFsKCkpO1xyXG5cclxuICAgICAgICAgICAgcXVhbnRpdHkgLT0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChxdWFudGl0eSA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXByb2R1Y3QgI3F1YW50aXR5JykudmFsKHF1YW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXByb2R1Y3QgI3F1YW50aXR5JykudmFsKHBhcnNlSW50KDEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGx1cy1pY29uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludCgkKCcuZm9ybS1wcm9kdWN0ICNxdWFudGl0eScpLnZhbCgpKTtcclxuICAgICAgICAgICAgcXVhbnRpdHkgKz0gMTtcclxuICAgICAgICAgICAgJCgnLmZvcm0tcHJvZHVjdCAjcXVhbnRpdHknKS52YWwocXVhbnRpdHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHF1YW50aXR5UHJvZHVjdCB9OyIsImZ1bmN0aW9uIHRvZ2dsZU1vYmlsZSgpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLy0gVG9nZ2xlIGZvciBwcm9kdWN0cy1wYWdlXHJcbiAgICAgICAgJCgnI25hdi1tb2JpbGUtaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQoJy5saXN0LW5hdi1tb2JpbGUnKS5zbGlkZVRvZ2dsZSgzNTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7dG9nZ2xlTW9iaWxlfTsiLCJpbXBvcnQge2hpZGVTZWN0aW9ufSBmcm9tICcuL3N1Yi1qcy9oaWRlU2VjdGlvbi5qcyc7XG5pbXBvcnQge2Rpc3RyaWN0c30gZnJvbSAnLi9zdWItanMvZGlzdHJpY3RzLmpzJztcbmltcG9ydCB7YmFja1RvVG9wfSBmcm9tICcuL3N1Yi1qcy9iYWNrVG9Ub3AuanMnO1xuaW1wb3J0IHtvcGVuRmlsdGVyc30gZnJvbSAnLi9zdWItanMvb3BlbkZpbHRlcnMuanMnO1xuaW1wb3J0IHt2aWV3TW9kZX0gZnJvbSAnLi9zdWItanMvdmlld01vZGUuanMnO1xuaW1wb3J0IHtzbGlja1Byb2R1Y3R9IGZyb20gJy4vc3ViLWpzL3NsaWNrUHJvZHVjdC5qcyc7XG5pbXBvcnQge3NsaWNrQmFubmVyfSBmcm9tICcuL3N1Yi1qcy9zbGlja0Jhbm5lci5qcyc7XG5pbXBvcnQge3NsaWNrQnJhbmRzfSBmcm9tICcuL3N1Yi1qcy9zbGlja0JyYW5kcy5qcyc7XG5pbXBvcnQge2Ryb3BEb3dufSBmcm9tICcuL3N1Yi1qcy9kcm9wRG93bi5qcyc7XG5pbXBvcnQge2dsaWdodGJveH0gZnJvbSAnLi9zdWItanMvZ2xpZ2h0Ym94LmpzJztcbmltcG9ydCB7cXVhbnRpdHlQcm9kdWN0fSBmcm9tICcuL3N1Yi1qcy9xdWFudGl0eVByb2R1Y3QuanMnO1xuaW1wb3J0IHt0b2dnbGVNb2JpbGV9IGZyb20gJy4vc3ViLWpzL3RvZ2dsZU1vYmlsZS5qcyc7XG5cbmhpZGVTZWN0aW9uKCk7XG5kaXN0cmljdHMoKTtcbmJhY2tUb1RvcCgpO1xub3BlbkZpbHRlcnMoKTtcbnZpZXdNb2RlKCk7XG5zbGlja1Byb2R1Y3QoKTtcbnNsaWNrQmFubmVyKCk7XG5zbGlja0JyYW5kcygpO1xuZHJvcERvd24oKTtcbmdsaWdodGJveCgpO1xucXVhbnRpdHlQcm9kdWN0KCk7XG50b2dnbGVNb2JpbGUoKTtcbiIsIlxufSgpKTsiXX0=
