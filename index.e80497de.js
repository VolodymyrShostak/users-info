$((function(){$("#phoneInput").mask("+38 (000) 000-00-00",{placeholder:"+38 (___) ___-__-__"});const e=[];$("#createUserModal").on("hide.bs.modal",(function(){$("#formModal").removeClass("was-validated")})),$("#formModal").each((function(){$(this).submit((function(t){if(t.preventDefault(),t.stopPropagation(),$(this).addClass("was-validated"),!this.checkValidity())return;const n=new FormData(this),a={};for(let e of n.entries())a[e[0]]=e[1];const d=a.phone;/^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(d)?($("#phoneInput").removeClass("is-invalid"),$("#phoneInput").addClass("is-valid")):($("#phoneInput").removeClass("is-valid"),$("#phoneInput").addClass("is-invalid"));const l={...a,id:Date.now()};e.push(l);const i=$("#avatarInput").get(0).files[0];if(i){const e=new FileReader;e.onload=function(){const t=e.result;$("#objectImage").attr("src",t),$("tbody").prepend(`<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="${t}" width="40" height="40"/></td>\n                <td class="text-center align-middle">${a.name}</td>\n                 <td class="text-center align-middle">${a.email}</td>\n                <td class="text-center align-middle">${a.phone}</td>\n                 <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="${l.id}"\n            >\n              Details\n            </button></td>\n              </tr>`)},e.readAsDataURL(i)}else $("#objectImage").attr("src","../assets/avatar.png"),$("tbody").prepend(`<tr>\n              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>\n            <td class="text-center align-middle">${a.name}</td>\n                 <td class="text-center align-middle">${a.email}</td>\n                <td class="text-center align-middle">${a.phone}</td>\n            \n              <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="${l.id}"\n            >\n              Details\n            </button></td>\n            </tr>`);$(".modal").modal("hide"),$("#objectName").text(a.name),$("#objectEmail").text(a.email),$("#objectPhone").text(a.phone),$("#phoneInput").removeClass("is-invalid"),$("#objectDetails").removeClass("d-none"),this.reset()}))}));const t=$("#detailsModal");t.length>0&&t.on("show.bs.modal",(function(t){const n=$(t.relatedTarget).data("id"),a=e.find((e=>e.id===n));$(".modal-body-details").prepend(` <ul id="modal__user-info" >\n                                   \n                        <li >\n                            <p>${null==a?void 0:a.gender}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.city}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.email}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.phone}</p>\n                        </li>\n                    </ul>`)})),$(".modal.fade").on("hidden.bs.modal",(function(){$("#modal__user-info").remove()})),$("#generateUserBtn").on("click",(function(){$("#generateUserModal").modal("show")})),$("#generateUserModal").on("hidden.bs.modal",(function(){$("#form_generateUserModal").trigger("reset")})),$("#generateBtn").on("click",(function(){const t=`https://randomuser.me/api/?gender=${$("#genderSelect").val()}`,n=$('<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>');$("#queryModal").prepend(n),$.ajax({url:t,dataType:"json",success:function(t){const a={...t.results[0],id:Date.now()};e.push(a),$("#generateUserModal").modal("hide"),$("tbody").prepend(`<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="${null==a?void 0:a.picture.large}" width="40" height="40"/></td>\n                <td class="text-center align-middle">${(null==a?void 0:a.name.first)+" "+(null==a?void 0:a.name.last)}</td>\n                 <td class="text-center align-middle">${null==a?void 0:a.email}</td>\n                <td class="text-center align-middle">${null==a?void 0:a.phone}</td>\n                <td class="text-center align-middle">\n                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="${null==a?void 0:a.id}">\n                  Details\n                </button></td>\n              </tr>`),n.remove();const d=$('<div class="alert alert-success alert-dismissible fade show " role="alert">Користувач успішно згенерований!</div>');$("#table").prepend(d),setTimeout((function(){d.alert("close")}),3e3)},error:function(){n.remove();const e=$('<div class="alert alert-danger alert-dismissible fade show" role="alert">Помилка генерації користувача!</div>');$(".modal-body").prepend(e),setTimeout((function(){e.alert("close")}),3e3)}})}))}));
//# sourceMappingURL=index.e80497de.js.map
