!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},l=t.parcelRequiref821;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequiref821=l),l.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i.default(e,t,n[t])}))}return e};var d,i=(d=l("hKHmD"))&&d.__esModule?d:{default:d};$((function(){$("#phoneInput").mask("+38 (000) 000-00-00",{placeholder:"+38 (___) ___-__-__"});var t=[];$("#createUserModal").on("hide.bs.modal",(function(){$("#formModal").removeClass("was-validated")})),$("#formModal").each((function(){$(this).submit((function(n){if(n.preventDefault(),n.stopPropagation(),$(this).addClass("was-validated"),this.checkValidity()){var a=new FormData(this),l={},d=!0,i=!1,r=void 0;try{for(var s,c=a.entries()[Symbol.iterator]();!(d=(s=c.next()).done);d=!0){var u=s.value;l[u[0]]=u[1]}}catch(e){i=!0,r=e}finally{try{d||null==c.return||c.return()}finally{if(i)throw r}}var p=l.phone;/^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(p)?($("#phoneInput").removeClass("is-invalid"),$("#phoneInput").addClass("is-valid")):($("#phoneInput").removeClass("is-valid"),$("#phoneInput").addClass("is-invalid"));var m=e(o)({},l,{id:Date.now()});t.push(m);var f=$("#avatarInput").get(0).files[0];if(f){var v=new FileReader;v.onload=function(){var e=v.result;$("#objectImage").attr("src",e),$("tbody").prepend('<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="'.concat(e,'" width="40" height="40"/></td>\n                <td class="text-center align-middle">').concat(l.name,'</td>\n                 <td class="text-center align-middle">').concat(l.email,'</td>\n                <td class="text-center align-middle">').concat(l.phone,'</td>\n                 <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="').concat(m.id,'"\n            >\n              Details\n            </button></td>\n              </tr>'))},v.readAsDataURL(f)}else $("#objectImage").attr("src","../assets/avatar.png"),$("tbody").prepend('<tr>\n              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>\n            <td class="text-center align-middle">'.concat(l.name,'</td>\n                 <td class="text-center align-middle">').concat(l.email,'</td>\n                <td class="text-center align-middle">').concat(l.phone,'</td>\n            \n              <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="').concat(m.id,'"\n            >\n              Details\n            </button></td>\n            </tr>'));$(".modal").modal("hide"),$("#objectName").text(l.name),$("#objectEmail").text(l.email),$("#objectPhone").text(l.phone),$("#phoneInput").removeClass("is-invalid"),$("#objectDetails").removeClass("d-none"),this.reset()}}))}));var n=$("#detailsModal");n.length>0&&n.on("show.bs.modal",(function(e){var n=$(e.relatedTarget).data("id"),a=t.find((function(e){return e.id===n}));$(".modal-body-details").prepend(' <ul id="modal__user-info" >\n                        <div class="d-flex flex-row" >\n                        <p>Ім\'я:&#160;&#160;&#160;</p>\n                            <p class="font-weight-bold">'.concat(null==a?void 0:a.name,'</p>\n                        </div>\n                             \n                        <div class="d-flex flex-row" >\n                        <p>Стать:&#160;&#160;&#160;</p>\n                            <p class="font-weight-bold">').concat(null==a?void 0:a.gender,'</p>\n                        </div>\n                        <div class="d-flex flex-row" >\n                        <p>Місто:&#160;&#160;&#160;</p>\n                            <p class="font-weight-bold">').concat(null==a?void 0:a.city,'</p>\n                        </div>\n                        <div>\n                        <p>Електронна адреса:&#160;&#160;&#160;</p>\n                            <p class="font-weight-bold">').concat(null==a?void 0:a.email,'</p>\n                        </div>\n                       <div class="d-flex flex-row" >\n                        <p>Телефон:&#160;&#160;&#160;</p>\n                            <p class="font-weight-bold">').concat(null==a?void 0:a.phone,"</p>\n                        </div>\n                    </ul>"))})),$(".modal.fade").on("hidden.bs.modal",(function(){$("#modal__user-info").remove()})),$("#generateUserBtn").on("click",(function(){$("#generateUserModal").modal("show")})),$("#generateUserModal").on("hidden.bs.modal",(function(){$("#form_generateUserModal").trigger("reset")})),$("#generateBtn").on("click",(function(){var e=$("#genderSelect").val(),n="https://randomuser.me/api/?gender=".concat(e),a=$('<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>');$("#queryModal").prepend(a),$.ajax({url:n,dataType:"json",success:function(e){var n,l=e.results[0];console.log(l);var o={name:l.name.first+" "+l.name.last,city:l.location.city,phone:l.phone,email:l.email,gender:l.gender,avatar:null===(n=l.picture)||void 0===n?void 0:n.large,id:Date.now()};$("#objectImage").attr("src",o.avatar),$("#objectName").text(o.name),$("#objectEmail").text(o.email),$("#objectPhone").text(o.phone),$("#objectDetails").removeClass("d-none"),t.push(o),console.log(t),$("#generateUserModal").modal("hide"),$("tbody").prepend('<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="'.concat(null==o?void 0:o.avatar,'" width="40" height="40"/></td>\n                <td class="text-center align-middle">').concat(null==o?void 0:o.name,'</td>\n                 <td class="text-center align-middle">').concat(null==o?void 0:o.email,'</td>\n                <td class="text-center align-middle">').concat(null==o?void 0:o.phone,'</td>\n                <td class="text-center align-middle">\n                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="').concat(null==o?void 0:o.id,'">\n                  Details\n                </button></td>\n              </tr>')),a.remove();var d=$('<div class="alert alert-success alert-dismissible fade show " role="alert">Користувач успішно згенерований!</div>');$("#table").prepend(d),setTimeout((function(){d.alert("close")}),3e3)},error:function(){a.remove();var e=$('<div class="alert alert-danger alert-dismissible fade show" role="alert">Помилка генерації користувача!</div>');$(".modal-body").prepend(e),setTimeout((function(){e.alert("close")}),3e3)}})}))}))}();
//# sourceMappingURL=index.45affdc1.js.map
