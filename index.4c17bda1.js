!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},d=t.parcelRequiref821;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var d={id:e,exports:{}};return n[e]=d,t.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequiref821=d),d.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r.default(e,t,n[t])}))}return e};var i,r=(i=d("hKHmD"))&&i.__esModule?i:{default:i};$((function(){$("#phoneInput").mask("+38 (000) 000-00-00",{placeholder:"+38 (___) ___-__-__"});var t=[];$("#createUserModal").on("hidden.bs.modal",(function(){$("#formModal").removeClass("was-validated")})),$(".needs-validation").each((function(){$(this).submit((function(n){if(n.preventDefault(),n.stopPropagation(),this.checkValidity()){$(this).addClass("was-validated");var a=new FormData(this),d={},i=!0,r=!1,o=void 0;try{for(var s,c=a.entries()[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;d[u[0]]=u[1]}}catch(e){r=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}var p=d.phone;/^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(p)?($("#phoneInput").removeClass("is-invalid"),$("#phoneInput").addClass("is-valid")):($("#phoneInput").removeClass("is-valid"),$("#phoneInput").addClass("is-invalid"));var m=e(l)({},d,{id:Date.now()});t.push(m);var f=$("#avatarInput").get(0).files[0];if(f){var g=new FileReader;g.onload=function(){var e=g.result;$("<img />").addClass("rounded-5").attr("width","40").attr("height","40").attr("src",e||"../assets/avatar.png"),$("#objectImage").attr("src",e),$("tbody").prepend('<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="'.concat(e,'" width="40" height="40"/></td>\n                <td class="text-center align-middle">').concat(d.name,'</td>\n                 <td class="text-center align-middle">').concat(d.email,'</td>\n                <td class="text-center align-middle">').concat(d.phone,'</td>\n                 <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="').concat(m.id,'"\n            >\n              Details\n            </button></td>\n              </tr>'))},g.readAsDataURL(f),$(".modal").modal("hide")}else $("#objectImage").attr("src","../assets/avatar.png"),$("tbody").prepend('<tr>\n              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>\n            <td class="text-center align-middle">'.concat(d.name,'</td>\n                 <td class="text-center align-middle">').concat(d.email,'</td>\n                <td class="text-center align-middle">').concat(d.phone,'</td>\n            \n              <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="').concat(m.id,'"\n            >\n              Details\n            </button></td>\n            </tr>')),$(".modal").modal("hide");$("#objectName").text(d.name),$("#objectEmail").text(d.email),$("#objectPhone").text(d.phone),this.reset(),$("#phoneInput").removeClass("is-invalid"),$("#objectDetails").removeClass("d-none")}else $(this).addClass("was-validated")}))}));var n=$("#detailsModal");n.length>0&&n.on("show.bs.modal",(function(e){var n=$(e.relatedTarget).data("id"),a=t.find((function(e){return e.id===n}));$(".modal-body-details").prepend(' <ul id="modal__user-info" >\n                                   \n                        <li >\n                            <p>'.concat(null==a?void 0:a.gender,"</p>\n                        </li>\n                        <li>\n                            <p>").concat(null==a?void 0:a.city,"</p>\n                        </li>\n                        <li>\n                            <p>").concat(null==a?void 0:a.email,"</p>\n                        </li>\n                        <li>\n                            <p>").concat(null==a?void 0:a.phone,"</p>\n                        </li>\n                    </ul>"))})),$(".modal.fade").on("hidden.bs.modal",(function(){$("#modal__user-info").remove()})),$("#generateUserBtn").on("click",(function(){$("#generateUserModal").modal("show")})),$("#generateUserModal").on("hidden.bs.modal",(function(){$("#form_generateUserModal").trigger("reset")})),$("#generateBtn").on("click",(function(){var n=$("#genderSelect").val(),a="https://randomuser.me/api/?gender=".concat(n),d=$('<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>');$("#queryModal").prepend(d),$.ajax({url:a,dataType:"json",success:function(n){var a=n.results[0],i=e(l)({},a,{id:Date.now()});t.push(i),$("#generateUserModal").modal("hide"),$("<img />").addClass("rounded-5").attr("width","40").attr("height","40").attr("src",i.picture.large?i.picture.large:"../assets/avatar.png"),$("tbody").prepend('<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="'.concat(i.picture.large,'" width="40" height="40"/></td>\n                <td class="text-center align-middle">').concat(i.name.first+" "+i.name.last,'</td>\n                 <td class="text-center align-middle">').concat(i.email,'</td>\n                <td class="text-center align-middle">').concat(i.phone,'</td>\n                <td class="text-center align-middle">\n                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="').concat(i.id,'">\n                  Details\n                </button></td>\n              </tr>')),d.remove();var r=$('<div class="alert alert-success alert-dismissible fade show " role="alert">Користувач успішно згенерований!</div>');$("#table").prepend(r),setTimeout((function(){r.alert("close")}),3e3)},error:function(){d.remove();var e=$('<div class="alert alert-danger alert-dismissible fade show" role="alert">Помилка генерації користувача!</div>');$(".modal-body").prepend(e),setTimeout((function(){e.alert("close")}),3e3)}})}))}))}();
//# sourceMappingURL=index.4c17bda1.js.map
