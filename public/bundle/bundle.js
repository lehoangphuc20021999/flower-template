!function(){var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.hideSection=function(){$("body").hasClass("checkout-page")||$("body").hasClass("done-page")?$("#topbar, #header, #footer").hide():$("#top, #header, #footer").show()};var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.districts=function(){$(document).ready((function(){(address_2=localStorage.getItem("address_2_saved"))&&($('select[name="calc_shipping_district"] option').each((function(){$(this).text()==address_2&&$(this).attr("selected","")})),$("input.billing_address_2").attr("value",address_2)),(district=localStorage.getItem("district"))&&($('select[name="calc_shipping_district"]').html(district),$('select[name="calc_shipping_district"]').on("change",(function(){var e=$(this).children("option:selected");e.attr("selected",""),$('select[name="calc_shipping_district"] option').not(e).removeAttr("selected"),address_2=e.text(),$("input.billing_address_2").attr("value",address_2),district=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",district),localStorage.setItem("address_2_saved",address_2)}))),$('select[name="calc_shipping_provinces"]').each((function(){var e=$(this),t="";c.forEach((function(i,o){t+="<option value="+(o+=1)+">"+i+"</option>",e.html('<option value="">T\u1ec9nh / Th\xe0nh ph\u1ed1</option>'+t),(address_1=localStorage.getItem("address_1_saved"))&&($('select[name="calc_shipping_provinces"] option').each((function(){$(this).text()==address_1&&$(this).attr("selected","")})),$("input.billing_address_1").attr("value",address_1)),e.on("change",(function(t){t=e.children("option:selected").index()-1;var i="";if(""!=e.val()){arr[t].forEach((function(e){i+='<option value="'+e+'">'+e+"</option>",$('select[name="calc_shipping_district"]').html('<option value="">Qu\u1eadn / Huy\u1ec7n</option>'+i)}));var o=e.children("option:selected").text(),s=$('select[name="calc_shipping_district"]').html();localStorage.setItem("address_1_saved",o),localStorage.setItem("district",s),$('select[name="calc_shipping_district"]').on("change",(function(){var e=$(this).children("option:selected");e.attr("selected",""),$('select[name="calc_shipping_district"] option').not(e).removeAttr("selected");var t=e.text();$("input.billing_address_2").attr("value",t),s=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",s),localStorage.setItem("address_2_saved",t)}))}else $('select[name="calc_shipping_district"]').html('<option value="">Qu\u1eadn / Huy\u1ec7n</option>'),s=$('select[name="calc_shipping_district"]').html(),localStorage.setItem("district",s),localStorage.removeItem("address_1_saved",o)}))}))}))}))};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.backToTop=function(){$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$(".back-to-top").addClass("open"):$(".back-to-top").removeClass("open")})),$(".back-to-top").click((function(){return $("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}))}))};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.openFilters=function(){$(document).ready((function(){$(".open-filters").click((function(e){$(this).find("i").hasClass("bxs-filter-alt")?($(this).find("i").removeClass("bxs-filter-alt"),$(this).find("i").addClass("bx-x")):($(this).find("i").removeClass("bx-x"),$(this).find("i").addClass("bxs-filter-alt")),$(".aside").hasClass("open")||$(".open-filters").hasClass("open")?$(".aside, .open-filters").removeClass("open"):$(".aside, .open-filters").addClass("open")}))}))};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.viewMode=function(){$(document).ready((function(){$(".view-mode button").click((function(){$(".view-mode button").removeClass("active"),$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")})),$("#view-list").click((function(){$(".products-view").addClass("list")})),$("#view-grid").click((function(){$(".products-view").removeClass("list")})),$("#formAddProduct .btn-buy").click((function(e){$("#modalAddProduct").modal(),e.preventDefault()}))}))};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.slickProduct=function(){$(document).ready((function(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,speed:400,prevArrow:$(".prev-arrow2"),nextArrow:$(".next-arrow2"),asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!1,centerMode:!0,focusOnSelect:!0,vertical:!0,speed:400,infinite:!0,centerPadding:"20px",responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1,vertical:!1}},{breakpoint:576,settings:{slidesToShow:3,slidesToScroll:1,vertical:!1}}]})}))};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.slickBanner=function(){$(document).ready((function(){$(".slide-banners").slick({infinite:!0,slidesToShow:1,autoplay:!0,autoplaySpeed:2500,arrows:!0,dots:!0,speed:500,fade:!0,cssEase:"linear",prevArrow:$(".prev-arrow"),nextArrow:$(".next-arrow")})}))};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.slickBrands=function(){$(document).ready((function(){$(".slider-brands").slick({infinite:!0,slidesToShow:6,arrows:!0,dots:!1,speed:600,fade:!1,prevArrow:$(".prev-arrow1"),nextArrow:$(".next-arrow1"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,dots:!1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]})}))};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.dropDown=function(){$(document).ready((function(){$(".aside-category .dropdown").click((function(e){$(this).find("> ul").slideToggle(350),$(this).find("> a i").toggleClass("rotate180deg")})),$(".dropdown-btn").click((function(e){e.preventDefault()})),$(".dropdown-btn ul").find("a").click((function(e){e.stopPropagation()}))}))};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.glightbox=function(){$(document).ready((function(){GLightbox({selector:".portfokio-lightbox",loop:!0})}))};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.quantityProduct=function(){$(document).ready((function(){$(".minus-icon").click((function(){var e=parseInt($("#quantity").val());(e-=1)>0?$(".form-product #quantity").val(e):$(".form-product #quantity").val(parseInt(1))})),$(".plus-icon").click((function(){var e=parseInt($(".form-product #quantity").val());e+=1,$(".form-product #quantity").val(e)}))}))};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.toggleMobile=function(){$(document).ready((function(){$("#nav-mobile-hamburger").click((function(e){$(".list-nav-mobile").slideToggle(350)}))}))},(0,e.hideSection)(),(0,t.districts)(),(0,i.backToTop)(),(0,o.openFilters)(),(0,s.viewMode)(),(0,n.slickProduct)(),(0,a.slickBanner)(),(0,r.slickBrands)(),(0,l.dropDown)(),(0,d.glightbox)(),(0,u.quantityProduct)(),(0,p.toggleMobile)()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrLWZsYXRcXF9wcmVsdWRlIiwicHVibGljL2pzL3N1Yi1qcy9oaWRlU2VjdGlvbi5qcyIsInB1YmxpYy9qcy9zdWItanMvZGlzdHJpY3RzLmpzIiwicHVibGljL2pzL3N1Yi1qcy9iYWNrVG9Ub3AuanMiLCJwdWJsaWMvanMvc3ViLWpzL29wZW5GaWx0ZXJzLmpzIiwicHVibGljL2pzL3N1Yi1qcy92aWV3TW9kZS5qcyIsInB1YmxpYy9qcy9zdWItanMvc2xpY2tQcm9kdWN0LmpzIiwicHVibGljL2pzL3N1Yi1qcy9zbGlja0Jhbm5lci5qcyIsInB1YmxpYy9qcy9zdWItanMvc2xpY2tCcmFuZHMuanMiLCJwdWJsaWMvanMvc3ViLWpzL2Ryb3BEb3duLmpzIiwicHVibGljL2pzL3N1Yi1qcy9nbGlnaHRib3guanMiLCJwdWJsaWMvanMvc3ViLWpzL3F1YW50aXR5UHJvZHVjdC5qcyIsInB1YmxpYy9qcy9zdWItanMvdG9nZ2xlTW9iaWxlLmpzIiwicHVibGljL2pzL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJfJGhpZGVTZWN0aW9uXzYiLCIkIiwiaGFzQ2xhc3MiLCJoaWRlIiwic2hvdyIsImRvY3VtZW50IiwicmVhZHkiLCJhZGRyZXNzXzIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWFjaCIsInRoaXMiLCJ0ZXh0IiwiYXR0ciIsImRpc3RyaWN0IiwiaHRtbCIsIm9uIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJub3QiLCJyZW1vdmVBdHRyIiwic2V0SXRlbSIsIiR0aGlzIiwic3RjIiwiYyIsImZvckVhY2giLCJpIiwiZSIsImFkZHJlc3NfMSIsImluZGV4Iiwic3RyIiwidmFsIiwiYXJyIiwiZWwiLCJyZW1vdmVJdGVtIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwiYW5pbWF0ZSIsImZpbmQiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImZhZGUiLCJzcGVlZCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFzTmF2Rm9yIiwiZG90cyIsImNlbnRlck1vZGUiLCJmb2N1c09uU2VsZWN0IiwidmVydGljYWwiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJHTGlnaHRib3giLCJzZWxlY3RvciIsImxvb3AiLCJxdWFudGl0eSIsInBhcnNlSW50IiwiaGlkZVNlY3Rpb24iLCJfJGRpc3RyaWN0c18zIiwiZGlzdHJpY3RzIiwiXyRiYWNrVG9Ub3BfMiIsImJhY2tUb1RvcCIsIl8kb3BlbkZpbHRlcnNfNyIsIm9wZW5GaWx0ZXJzIiwiXyR2aWV3TW9kZV8xMyIsInZpZXdNb2RlIiwiXyRzbGlja1Byb2R1Y3RfMTEiLCJzbGlja1Byb2R1Y3QiLCJfJHNsaWNrQmFubmVyXzkiLCJzbGlja0Jhbm5lciIsIl8kc2xpY2tCcmFuZHNfMTAiLCJzbGlja0JyYW5kcyIsIl8kZHJvcERvd25fNCIsImRyb3BEb3duIiwiXyRnbGlnaHRib3hfNSIsImdsaWdodGJveCIsIl8kcXVhbnRpdHlQcm9kdWN0XzgiLCJxdWFudGl0eVByb2R1Y3QiLCJfJHRvZ2dsZU1vYmlsZV8xMiIsInRvZ2dsZU1vYmlsZSJdLCJtYXBwaW5ncyI6IkNBQUEsV0FDQSxJQUFBQSxFQUFBLGtFQ0RBLFdBRU9DLEVBQUUsUUFBUUMsU0FBUyxrQkFBb0JELEVBQUUsUUFBUUMsU0FBUyxhQUN6REQsRUFBRSw2QkFBNkJFLE9BRS9CRixFQUFFLDBCQUEwQkcsOEVDTHBDLFdBQ0lILEVBQUVJLFVBQVVDLE9BQU0sWUFFWEMsVUFBWUMsYUFBYUMsUUFBUSxzQkFDaENSLEVBQUUsZ0RBQWdEUyxNQUFLLFdBQy9DVCxFQUFFVSxNQUFNQyxRQUFVTCxXQUNsQk4sRUFBRVUsTUFBTUUsS0FBSyxXQUFZLE9BR2pDWixFQUFFLDJCQUEyQlksS0FBSyxRQUFTTixhQUU1Q08sU0FBV04sYUFBYUMsUUFBUSxlQUMvQlIsRUFBRSx5Q0FBeUNjLEtBQUtELFVBQ2hEYixFQUFFLHlDQUF5Q2UsR0FBRyxVQUFVLFdBQ3BELElBQUlDLEVBQVNoQixFQUFFVSxNQUFNTyxTQUFTLG1CQUM5QkQsRUFBT0osS0FBSyxXQUFZLElBQ3hCWixFQUFFLGdEQUFnRGtCLElBQUlGLEdBQVFHLFdBQVcsWUFDekViLFVBQVlVLEVBQU9MLE9BQ25CWCxFQUFFLDJCQUEyQlksS0FBSyxRQUFTTixXQUMzQ08sU0FBV2IsRUFBRSx5Q0FBeUNjLE9BQ3REUCxhQUFhYSxRQUFRLFdBQVlQLFVBQ2pDTixhQUFhYSxRQUFRLGtCQUFtQmQsZUFHaEROLEVBQUUsMENBQTBDUyxNQUFLLFdBQzdDLElBQUlZLEVBQVFyQixFQUFFVSxNQUNkWSxFQUFNLEdBQ05DLEVBQUVDLFNBQVEsU0FBU0MsRUFBR0MsR0FFbEJKLEdBQU8sa0JBRFBJLEdBQUssR0FDeUIsSUFBTUQsRUFBSSxZQUN4Q0osRUFBTVAsS0FBSywwREFBK0NRLElBQ3RESyxVQUFZcEIsYUFBYUMsUUFBUSxzQkFDakNSLEVBQUUsaURBQWlEUyxNQUFLLFdBQ2hEVCxFQUFFVSxNQUFNQyxRQUFVZ0IsV0FDbEIzQixFQUFFVSxNQUFNRSxLQUFLLFdBQVksT0FHakNaLEVBQUUsMkJBQTJCWSxLQUFLLFFBQVNlLFlBRS9DTixFQUFNTixHQUFHLFVBQVUsU0FBU1UsR0FDeEJBLEVBQUlKLEVBQU1KLFNBQVMsbUJBQW1CVyxRQUFVLEVBQ2hELElBQUlDLEVBQU0sR0FFVixHQUFTLElBRExSLEVBQU1TLE1BQ0csQ0FDVEMsSUFBSU4sR0FBR0QsU0FBUSxTQUFTUSxHQUNwQkgsR0FBTyxrQkFBb0JHLEVBQUssS0FBT0EsRUFBSyxZQUM1Q2hDLEVBQUUseUNBQXlDYyxLQUFLLG1EQUEyQ2UsTUFFL0YsSUFBSUYsRUFBWU4sRUFBTUosU0FBUyxtQkFBbUJOLE9BQzlDRSxFQUFXYixFQUFFLHlDQUF5Q2MsT0FDMURQLGFBQWFhLFFBQVEsa0JBQW1CTyxHQUN4Q3BCLGFBQWFhLFFBQVEsV0FBWVAsR0FDakNiLEVBQUUseUNBQXlDZSxHQUFHLFVBQVUsV0FDcEQsSUFBSUMsRUFBU2hCLEVBQUVVLE1BQU1PLFNBQVMsbUJBQzlCRCxFQUFPSixLQUFLLFdBQVksSUFDeEJaLEVBQUUsZ0RBQWdEa0IsSUFBSUYsR0FBUUcsV0FBVyxZQUN6RSxJQUFJYixFQUFZVSxFQUFPTCxPQUN2QlgsRUFBRSwyQkFBMkJZLEtBQUssUUFBU04sR0FDM0NPLEVBQVdiLEVBQUUseUNBQXlDYyxPQUN0RFAsYUFBYWEsUUFBUSxXQUFZUCxHQUNqQ04sYUFBYWEsUUFBUSxrQkFBbUJkLFdBRzVDTixFQUFFLHlDQUF5Q2MsS0FBSyxvREFDaERELEVBQVdiLEVBQUUseUNBQXlDYyxPQUN0RFAsYUFBYWEsUUFBUSxXQUFZUCxHQUNqQ04sYUFBYTBCLFdBQVcsa0JBQW1CTixzRkNsRW5FLFdBQ0kzQixFQUFFSSxVQUFVQyxPQUFNLFdBRWRMLEVBQUVrQyxRQUFRQyxRQUFPLFdBQ1RuQyxFQUFFVSxNQUFNMEIsWUFBYyxJQUN0QnBDLEVBQUUsZ0JBQWdCcUMsU0FBUyxRQUUzQnJDLEVBQUUsZ0JBQWdCc0MsWUFBWSxXQUl0Q3RDLEVBQUUsZ0JBQWdCdUMsT0FBTSxXQUlwQixPQUhBdkMsRUFBRSxjQUFjd0MsUUFBUSxDQUN4QkosVUFBVyxHQUNSLEtBQU0sa0JBQUEsaUZDZHJCLFdBQ0lwQyxFQUFFSSxVQUFVQyxPQUFNLFdBRWRMLEVBQUUsaUJBQWlCdUMsT0FBTSxTQUFVYixHQUUzQjFCLEVBQUVVLE1BQU0rQixLQUFLLEtBQUt4QyxTQUFTLG1CQUMzQkQsRUFBRVUsTUFBTStCLEtBQUssS0FBS0gsWUFBWSxrQkFDOUJ0QyxFQUFFVSxNQUFNK0IsS0FBSyxLQUFLSixTQUFTLFVBRTNCckMsRUFBRVUsTUFBTStCLEtBQUssS0FBS0gsWUFBWSxRQUM5QnRDLEVBQUVVLE1BQU0rQixLQUFLLEtBQUtKLFNBQVMsbUJBSTNCckMsRUFBRSxVQUFVQyxTQUFTLFNBQVdELEVBQUUsaUJBQWlCQyxTQUFTLFFBQzVERCxFQUFFLHlCQUF5QnNDLFlBQVksUUFHdkN0QyxFQUFFLHlCQUF5QnFDLFNBQVMsb0ZDbEJwRCxXQUNJckMsRUFBRUksVUFBVUMsT0FBTSxXQUVkTCxFQUFFLHFCQUFxQnVDLE9BQU0sV0FDekJ2QyxFQUFFLHFCQUFxQnNDLFlBQVksVUFDL0J0QyxFQUFFVSxNQUFNVCxTQUFTLFVBQ2pCRCxFQUFFVSxNQUFNNEIsWUFBWSxVQUVwQnRDLEVBQUVVLE1BQU0yQixTQUFTLGFBSXpCckMsRUFBRSxjQUFjdUMsT0FBTSxXQUNsQnZDLEVBQUUsa0JBQWtCcUMsU0FBUyxXQUlqQ3JDLEVBQUUsY0FBY3VDLE9BQU0sV0FDbEJ2QyxFQUFFLGtCQUFrQnNDLFlBQVksV0FJcEN0QyxFQUFFLDRCQUE0QnVDLE9BQU0sU0FBVWIsR0FDMUMxQixFQUFFLG9CQUFvQjBDLFFBQ3RCaEIsRUFBRWlCLGlHQ3hCZCxXQUNJM0MsRUFBRUksVUFBVUMsT0FBTSxXQUVkTCxFQUFFLGVBQWU0QyxNQUFNLENBQ25CQyxhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxRQUFBLEVBQ0FDLE1BQUEsRUFDQUMsTUFBTyxJQUNQQyxVQUFXbEQsRUFBRSxnQkFDYm1ELFVBQVduRCxFQUFFLGdCQUNib0QsU0FBVSxnQkFFZHBELEVBQUUsZUFBZTRDLE1BQU0sQ0FDbkJDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJNLFNBQVUsY0FDVkMsTUFBQSxFQUNBTixRQUFBLEVBQ0FPLFlBQUEsRUFDQUMsZUFBQSxFQUNBQyxVQUFBLEVBQ0FQLE1BQU8sSUFDUFEsVUFBQSxFQUNBQyxjQUFlLE9BQ2ZDLFdBQVksQ0FDUixDQUNBQyxXQUFZLElBQ1pDLFNBQVUsQ0FDTmhCLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJVLFVBQUEsSUFHSixDQUNJSSxXQUFZLElBQ1pDLFNBQVUsQ0FDVmhCLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJVLFVBQUEsbUZDdkNwQixXQUNJeEQsRUFBRUksVUFBVUMsT0FBTSxXQUVkTCxFQUFFLGtCQUFrQjRDLE1BQU0sQ0FDdEJhLFVBQUEsRUFDQVosYUFBYyxFQUNkaUIsVUFBQSxFQUNBQyxjQUFlLEtBQ2ZoQixRQUFBLEVBQ0FNLE1BQUEsRUFDQUosTUFBTyxJQUNQRCxNQUFBLEVBQ0FnQixRQUFTLFNBQ1RkLFVBQVdsRCxFQUFFLGVBQ2JtRCxVQUFXbkQsRUFBRSw2RkNkekIsV0FDSUEsRUFBRUksVUFBVUMsT0FBTSxXQUVkTCxFQUFFLGtCQUFrQjRDLE1BQU0sQ0FDdEJhLFVBQUEsRUFDQVosYUFBYyxFQUNkRSxRQUFBLEVBQ0FNLE1BQUEsRUFDQUosTUFBTyxJQUNQRCxNQUFBLEVBQ0FFLFVBQVdsRCxFQUFFLGdCQUNibUQsVUFBV25ELEVBQUUsZ0JBQ2IyRCxXQUFZLENBQ1IsQ0FDRUMsV0FBWSxJQUNaQyxTQUFVLENBQ1JoQixhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCTyxNQUFBLElBR0osQ0FDRU8sV0FBWSxJQUNaQyxTQUFVLENBQ1JoQixhQUFjLEVBQ2RDLGVBQWdCLElBR3BCLENBQ0VjLFdBQVksSUFDWkMsU0FBVSxDQUNSaEIsYUFBYyxFQUNkQyxlQUFnQixnRkNoQ3BDLFdBQ0k5QyxFQUFFSSxVQUFVQyxPQUFNLFdBRWRMLEVBQUUsNkJBQTZCdUMsT0FBTSxTQUFVYixHQUMzQzFCLEVBQUVVLE1BQU0rQixLQUFLLFFBQVF3QixZQUFZLEtBRWpDakUsRUFBRVUsTUFBTStCLEtBQUssU0FBU3lCLFlBQVksbUJBR3RDbEUsRUFBRSxpQkFBaUJ1QyxPQUFNLFNBQVViLEdBQy9CQSxFQUFFaUIsb0JBR04zQyxFQUFFLG9CQUFvQnlDLEtBQUssS0FBS0YsT0FBTSxTQUFVYixHQUM1Q0EsRUFBRXlDLCtGQ2RkLFdBQ0luRSxFQUFFSSxVQUFVQyxPQUFNLFdBSVkrRCxVQUFVLENBQ2hDQyxTQUFVLHNCQUNWQyxNQUFBLG9GQ1BaLFdBQ0l0RSxFQUFFSSxVQUFVQyxPQUFNLFdBRWRMLEVBQUUsZUFBZXVDLE9BQU0sV0FDbkIsSUFBSWdDLEVBQVdDLFNBQVN4RSxFQUFFLGFBQWE4QixRQUV2Q3lDLEdBQVksR0FFRyxFQUNYdkUsRUFBRSwyQkFBMkI4QixJQUFJeUMsR0FHakN2RSxFQUFFLDJCQUEyQjhCLElBQUkwQyxTQUFTLE9BSWxEeEUsRUFBRSxjQUFjdUMsT0FBTSxXQUNsQixJQUFJZ0MsRUFBV0MsU0FBU3hFLEVBQUUsMkJBQTJCOEIsT0FDckR5QyxHQUFZLEVBQ1p2RSxFQUFFLDJCQUEyQjhCLElBQUl5QyxtRkNuQjdDLFdBQ0l2RSxFQUFFSSxVQUFVQyxPQUFNLFdBRWRMLEVBQUUseUJBQXlCdUMsT0FBTSxTQUFTYixHQUN0QzFCLEVBQUUsb0JBQW9CaUUsWUFBWSxhQ085QyxFQUVBbEUsRUFBQTBFLGdCQUFBLEVBQ0FDLEVBQUFDLGNBQUEsRUFDQUMsRUFBQUMsY0FBQSxFQUNBQyxFQUFBQyxnQkFBQSxFQUNBQyxFQUFBQyxhQUFBLEVBQ0FDLEVBQUFDLGlCQUFBLEVBQ0FDLEVBQUFDLGdCQUFBLEVBQ0FDLEVBQUFDLGdCQUFBLEVBQ0FDLEVBQUFDLGFBQUEsRUFDQUMsRUFBQUMsY0FBQSxFQUNBQyxFQUFBQyxvQkFBQSxFQUNBQyxFQUFBQyxnQmJ4QkEiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiIsImZ1bmN0aW9uIGhpZGVTZWN0aW9uKCl7XHJcbiAgICAvLy0gSGlkZSAjdG9wYmFyLCAjaGVhZGVyLCAjZm9vdGVyIOG7nyBjaGVja291dC1wYWdlLCBkb25lLXBhZ2VcclxuICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcyhcImNoZWNrb3V0LXBhZ2VcIikgfHwgJCgnYm9keScpLmhhc0NsYXNzKFwiZG9uZS1wYWdlXCIpKXtcclxuICAgICAgICAkKCcjdG9wYmFyLCAjaGVhZGVyLCAjZm9vdGVyJykuaGlkZSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnI3RvcCwgI2hlYWRlciwgI2Zvb3RlcicpLnNob3coKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtoaWRlU2VjdGlvbn07IiwiZnVuY3Rpb24gZGlzdHJpY3RzKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vLSBM4bqleSBkYXRhIGPhu6dhIDY0IHThu4luaCB0aMOgbmhcclxuICAgICAgICBpZihhZGRyZXNzXzIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc18yX3NhdmVkJykpIHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdIG9wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgPT0gYWRkcmVzc18yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzZWxlY3RlZCcsICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdpbnB1dC5iaWxsaW5nX2FkZHJlc3NfMicpLmF0dHIoJ3ZhbHVlJywgYWRkcmVzc18yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkaXN0cmljdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXN0cmljdCcpKSB7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoZGlzdHJpY3QpXHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb246c2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmF0dHIoJ3NlbGVjdGVkJywgJycpXHJcbiAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfZGlzdHJpY3RcIl0gb3B0aW9uJykubm90KHRhcmdldCkucmVtb3ZlQXR0cignc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc18yID0gdGFyZ2V0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzInKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMilcclxuICAgICAgICAgICAgICAgIGRpc3RyaWN0ID0gJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzXzJfc2F2ZWQnLCBhZGRyZXNzXzIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19wcm92aW5jZXNcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBzdGMgPSAnJ1xyXG4gICAgICAgICAgICBjLmZvckVhY2goZnVuY3Rpb24oaSwgZSkge1xyXG4gICAgICAgICAgICAgICAgZSArPSArMVxyXG4gICAgICAgICAgICAgICAgc3RjICs9ICc8b3B0aW9uIHZhbHVlPScgKyBlICsgJz4nICsgaSArICc8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAkdGhpcy5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+VOG7iW5oIC8gVGjDoG5oIHBo4buRPC9vcHRpb24+JyArIHN0YylcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzXzEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc18xX3NhdmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfcHJvdmluY2VzXCJdIG9wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSA9PSBhZGRyZXNzXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc2VsZWN0ZWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzEnKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9ICR0aGlzLmNoaWxkcmVuKCdvcHRpb246c2VsZWN0ZWQnKS5pbmRleCgpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICByID0gJHRoaXMudmFsKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAociAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0uZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGVsICsgJ1wiPicgKyBlbCArICc8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdzZWxlY3RbbmFtZT1cImNhbGNfc2hpcHBpbmdfZGlzdHJpY3RcIl0nKS5odG1sKCc8b3B0aW9uIHZhbHVlPVwiXCI+UXXhuq1uIC8gSHV54buHbjwvb3B0aW9uPicgKyBzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzXzEgPSAkdGhpcy5jaGlsZHJlbignb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0cmljdCA9ICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc18xX3NhdmVkJywgYWRkcmVzc18xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbjpzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYXR0cignc2VsZWN0ZWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXSBvcHRpb24nKS5ub3QodGFyZ2V0KS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc18yID0gdGFyZ2V0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXQuYmlsbGluZ19hZGRyZXNzXzInKS5hdHRyKCd2YWx1ZScsIGFkZHJlc3NfMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0ID0gJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzXzJfc2F2ZWQnLCBhZGRyZXNzXzIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnc2VsZWN0W25hbWU9XCJjYWxjX3NoaXBwaW5nX2Rpc3RyaWN0XCJdJykuaHRtbCgnPG9wdGlvbiB2YWx1ZT1cIlwiPlF14bqtbiAvIEh1eeG7h248L29wdGlvbj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmljdCA9ICQoJ3NlbGVjdFtuYW1lPVwiY2FsY19zaGlwcGluZ19kaXN0cmljdFwiXScpLmh0bWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdHJpY3QnLCBkaXN0cmljdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FkZHJlc3NfMV9zYXZlZCcsIGFkZHJlc3NfMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXN0cmljdHN9OyIsImZ1bmN0aW9uIGJhY2tUb1RvcCgpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBCYWNrIHRvIHRvcCBidXR0b25cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgICAgIH0sIDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8tIERvIGPDsyB0YWcgYSBuw6puIGTDuW5nIMSR4buDIHRyw6FuaCBi4buLIHRy4bufIHbhu4EgxJHhuqd1IHRyYW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtiYWNrVG9Ub3B9OyIsImZ1bmN0aW9uIG9wZW5GaWx0ZXJzKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vLSBPcGVuIGZpbHRlciBpbiBjb2xsZWN0aW9uLnB1Z1xyXG4gICAgICAgICQoJy5vcGVuLWZpbHRlcnMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLy0gQ2h1eeG7g24gaWNvblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdpJykuaGFzQ2xhc3MoJ2J4cy1maWx0ZXItYWx0JykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaScpLnJlbW92ZUNsYXNzKCdieHMtZmlsdGVyLWFsdCcpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5hZGRDbGFzcygnYngteCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnYngteCcpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5hZGRDbGFzcygnYnhzLWZpbHRlci1hbHQnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLy0gTeG7nyBmaWx0ZXJzXHJcbiAgICAgICAgICAgIGlmICgkKCcuYXNpZGUnKS5oYXNDbGFzcygnb3BlbicpIHx8ICQoJy5vcGVuLWZpbHRlcnMnKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXNpZGUsIC5vcGVuLWZpbHRlcnMnKS5yZW1vdmVDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXNpZGUsIC5vcGVuLWZpbHRlcnMnKS5hZGRDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBvcGVuRmlsdGVycyB9OyIsImZ1bmN0aW9uIHZpZXdNb2RlKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vLSBWaWV3IG1vZGU6IGdyaWQsIGxpc3QgaW4gY29sbGVjdGlvbi5wdWdcclxuICAgICAgICAkKCcudmlldy1tb2RlIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnZpZXctbW9kZSBidXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyN2aWV3LWxpc3QnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0cy12aWV3JykuYWRkQ2xhc3MoJ2xpc3QnKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjdmlldy1ncmlkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdHMtdmlldycpLnJlbW92ZUNsYXNzKCdsaXN0JylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLy0gQnV0dG9uIGJ0biBidXksIHRvIG9wZW4gbW9kYWwgd2hlbiBzdWJtaXRcclxuICAgICAgICAkKCcjZm9ybUFkZFByb2R1Y3QgLmJ0bi1idXknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxBZGRQcm9kdWN0JykubW9kYWwoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdmlld01vZGUgfTsiLCJmdW5jdGlvbiBzbGlja1Byb2R1Y3QoKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8tIFNsaWNrIHNsaWRlclxyXG4gICAgICAgICQoJy5zbGlkZXItZm9yJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLnByZXYtYXJyb3cyJyksXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJCgnLm5leHQtYXJyb3cyJyksXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1uYXYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtzbGlja1Byb2R1Y3R9OyIsImZ1bmN0aW9uIHNsaWNrQmFubmVyKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vLSBTbGljayBiYW5uZXIgaW4gc2xpZGVyLnB1Z1xyXG4gICAgICAgICQoJy5zbGlkZS1iYW5uZXJzJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjUwMCxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAkKCcucHJldi1hcnJvdycpLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5uZXh0LWFycm93JylcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsaWNrQmFubmVyfTsiLCJmdW5jdGlvbiBzbGlja0JyYW5kcygpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLy0gU2xpY2sgYnJhbmRzXHJcbiAgICAgICAgJCgnLnNsaWRlci1icmFuZHMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiA2MDAsIFxyXG4gICAgICAgICAgICBmYWRlOiBmYWxzZSwgLy8tIE7hur91IGPDsyBuaGnhu4F1IHNsaWRlIG3DoCDEkeG7gyBmYWRlOiB0cnVlIHRow6wgbsOzIGNo4buJIGhp4buHbiAxIGl0ZW1cclxuICAgICAgICAgICAgcHJldkFycm93OiAkKCcucHJldi1hcnJvdzEnKSxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAkKCcubmV4dC1hcnJvdzEnKSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsaWNrQnJhbmRzfTsiLCJmdW5jdGlvbiBkcm9wRG93bigpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLy0gVG9nZ2xlIGZvciBwcm9kdWN0cy1wYWdlXHJcbiAgICAgICAgJCgnLmFzaWRlLWNhdGVnb3J5IC5kcm9wZG93bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnPiB1bCcpLnNsaWRlVG9nZ2xlKDM1MCk7XHJcbiAgICAgICAgICAgIC8vLSBSb3RhdGUgaWNvbiBpXHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnPiBhIGknKS50b2dnbGVDbGFzcyhcInJvdGF0ZTE4MGRlZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTm93IGxpbmsgd29uJ3QgZ28gYW55d2hlcmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLWJ0biB1bCcpLmZpbmQoJ2EnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBOb3cgdGhlIGV2ZW50IHdvbid0IGJ1YmJsZSB1cFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRyb3BEb3duIH07IiwiZnVuY3Rpb24gZ2xpZ2h0Ym94KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICAqIEluaXRpYXRlIHBvcnRmb2xpbyBsaWdodGJveCBcclxuICAgICAgICAqKi9cclxuICAgICAgICBjb25zdCBwb3J0Zm9saW9MaWdodGJveCA9IEdMaWdodGJveCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvcnRmb2tpby1saWdodGJveCcsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtnbGlnaHRib3h9OyIsImZ1bmN0aW9uIHF1YW50aXR5UHJvZHVjdCgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLy0gSW5jcmVhc2UsIGRlY3JlYXNlIGFtb3VudCBvZiBwcm9kdWN0IGluIHByb2R1Y3QtaW5mby5wdWdcclxuICAgICAgICAkKCcubWludXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoJCgnI3F1YW50aXR5JykudmFsKCkpO1xyXG5cclxuICAgICAgICAgICAgcXVhbnRpdHkgLT0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChxdWFudGl0eSA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXByb2R1Y3QgI3F1YW50aXR5JykudmFsKHF1YW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5mb3JtLXByb2R1Y3QgI3F1YW50aXR5JykudmFsKHBhcnNlSW50KDEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGx1cy1pY29uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludCgkKCcuZm9ybS1wcm9kdWN0ICNxdWFudGl0eScpLnZhbCgpKTtcclxuICAgICAgICAgICAgcXVhbnRpdHkgKz0gMTtcclxuICAgICAgICAgICAgJCgnLmZvcm0tcHJvZHVjdCAjcXVhbnRpdHknKS52YWwocXVhbnRpdHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHF1YW50aXR5UHJvZHVjdCB9OyIsImZ1bmN0aW9uIHRvZ2dsZU1vYmlsZSgpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLy0gVG9nZ2xlIGZvciBwcm9kdWN0cy1wYWdlXHJcbiAgICAgICAgJCgnI25hdi1tb2JpbGUtaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQoJy5saXN0LW5hdi1tb2JpbGUnKS5zbGlkZVRvZ2dsZSgzNTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7dG9nZ2xlTW9iaWxlfTsiLCJpbXBvcnQge2hpZGVTZWN0aW9ufSBmcm9tICcuL3N1Yi1qcy9oaWRlU2VjdGlvbi5qcyc7XG5pbXBvcnQge2Rpc3RyaWN0c30gZnJvbSAnLi9zdWItanMvZGlzdHJpY3RzLmpzJztcbmltcG9ydCB7YmFja1RvVG9wfSBmcm9tICcuL3N1Yi1qcy9iYWNrVG9Ub3AuanMnO1xuaW1wb3J0IHtvcGVuRmlsdGVyc30gZnJvbSAnLi9zdWItanMvb3BlbkZpbHRlcnMuanMnO1xuaW1wb3J0IHt2aWV3TW9kZX0gZnJvbSAnLi9zdWItanMvdmlld01vZGUuanMnO1xuaW1wb3J0IHtzbGlja1Byb2R1Y3R9IGZyb20gJy4vc3ViLWpzL3NsaWNrUHJvZHVjdC5qcyc7XG5pbXBvcnQge3NsaWNrQmFubmVyfSBmcm9tICcuL3N1Yi1qcy9zbGlja0Jhbm5lci5qcyc7XG5pbXBvcnQge3NsaWNrQnJhbmRzfSBmcm9tICcuL3N1Yi1qcy9zbGlja0JyYW5kcy5qcyc7XG5pbXBvcnQge2Ryb3BEb3dufSBmcm9tICcuL3N1Yi1qcy9kcm9wRG93bi5qcyc7XG5pbXBvcnQge2dsaWdodGJveH0gZnJvbSAnLi9zdWItanMvZ2xpZ2h0Ym94LmpzJztcbmltcG9ydCB7cXVhbnRpdHlQcm9kdWN0fSBmcm9tICcuL3N1Yi1qcy9xdWFudGl0eVByb2R1Y3QuanMnO1xuaW1wb3J0IHt0b2dnbGVNb2JpbGV9IGZyb20gJy4vc3ViLWpzL3RvZ2dsZU1vYmlsZS5qcyc7XG5cbmhpZGVTZWN0aW9uKCk7XG5kaXN0cmljdHMoKTtcbmJhY2tUb1RvcCgpO1xub3BlbkZpbHRlcnMoKTtcbnZpZXdNb2RlKCk7XG5zbGlja1Byb2R1Y3QoKTtcbnNsaWNrQmFubmVyKCk7XG5zbGlja0JyYW5kcygpO1xuZHJvcERvd24oKTtcbmdsaWdodGJveCgpO1xucXVhbnRpdHlQcm9kdWN0KCk7XG50b2dnbGVNb2JpbGUoKTtcbiJdfQ==