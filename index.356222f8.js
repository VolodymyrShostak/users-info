$((function(){$("#phoneInput").mask("+38 (000) 000-00-00",{placeholder:"+38 (___) ___-__-__"});const t=[];$("#createUserModal").on("hidden.bs.modal",(function(){$("#formModal").removeClass("was-validated")})),$(".needs-validation").each((function(){$(this).submit((function(e){if(e.preventDefault(),e.stopPropagation(),!this.checkValidity())return void $(this).addClass("was-validated");$(this).addClass("was-validated");const n=new FormData(this),a={};for(let t of n.entries())a[t[0]]=t[1];const d=a.phone;/^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(d)?($("#phoneInput").removeClass("is-invalid"),$("#phoneInput").addClass("is-valid")):($("#phoneInput").removeClass("is-valid"),$("#phoneInput").addClass("is-invalid"));const s={...a,id:Date.now()};t.push(s);const l=$("#avatarInput").get(0).files[0];if(l){const t=new FileReader;t.onload=function(){const e=t.result;$("<img />").addClass("rounded-5").attr("width","40").attr("height","40").attr("src",e||"../assets/avatar.png"),$("#objectImage").attr("src",e),$("tbody").prepend(`<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="${e}" width="40" height="40"/></td>\n                <td class="text-center align-middle">${a.name}</td>\n                 <td class="text-center align-middle">${a.email}</td>\n                <td class="text-center align-middle">${a.phone}</td>\n                 <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="${s.id}"\n            >\n              Details\n            </button></td>\n              </tr>`)},t.readAsDataURL(l),$(".modal").modal("hide")}else $("#objectImage").attr("src","../assets/avatar.png"),$("tbody").prepend(`<tr>\n              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>\n            <td class="text-center align-middle">${a.name}</td>\n                 <td class="text-center align-middle">${a.email}</td>\n                <td class="text-center align-middle">${a.phone}</td>\n            \n              <td class="text-center align-middle"><button\n              type="button"\n              class="btn btn-outline-info"\n              data-bs-toggle="modal"\n              data-bs-target="#detailsModal"\n              data-id="${s.id}"\n            >\n              Details\n            </button></td>\n            </tr>`),$(".modal").modal("hide");$("#objectName").text(a.name),$("#objectEmail").text(a.email),$("#objectPhone").text(a.phone),this.reset(),$("#phoneInput").removeClass("is-invalid"),$("#objectDetails").removeClass("d-none")}))}));const e=$("#detailsModal");e.length>0&&e.on("show.bs.modal",(function(e){const n=$(e.relatedTarget).data("id"),a=t.find((t=>t.id===n));$(".modal-body-details").prepend(` <ul id="modal__user-info" >\n                                   \n                        <li >\n                            <p>${null==a?void 0:a.gender}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.city}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.email}</p>\n                        </li>\n                        <li>\n                            <p>${null==a?void 0:a.phone}</p>\n                        </li>\n                    </ul>`)})),$(".modal.fade").on("hidden.bs.modal",(function(){$("#modal__user-info").remove()})),$("#generateUserBtn").on("click",(function(){$("#generateUserModal").modal("show")})),$("#generateUserModal").on("hidden.bs.modal",(function(){$("#form_generateUserModal").trigger("reset")})),$("#generateBtn").on("click",(function(){const e=`https://randomuser.me/api/?gender=${$("#genderSelect").val()}`,n=$('<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>');$("#queryModal").prepend(n),$.ajax({url:e,dataType:"json",success:function(e){const a={...e.results[0],id:Date.now()};t.push(a),$("#generateUserModal").modal("hide");$("<img />").addClass("rounded-5").attr("width","40").attr("height","40").attr("src",a.picture.large?a.picture.large:"../assets/avatar.png"),$("tbody").prepend(`<tr>\n                <td id="image-container" class="text-center align-middle" >\n                <img class="rounded-5" src="${a.picture.large}" width="40" height="40"/></td>\n                <td class="text-center align-middle">${a.name.first+" "+a.name.last}</td>\n                 <td class="text-center align-middle">${a.email}</td>\n                <td class="text-center align-middle">${a.phone}</td>\n                <td class="text-center align-middle">\n                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="${a.id}">\n                  Details\n                </button></td>\n              </tr>`),n.remove();const d=$('<div class="alert alert-success alert-dismissible fade show " role="alert">Користувач успішно згенерований!</div>');$("#table").prepend(d),setTimeout((function(){d.alert("close")}),3e3)},error:function(){n.remove();const t=$('<div class="alert alert-danger alert-dismissible fade show" role="alert">Помилка генерації користувача!</div>');$(".modal-body").prepend(t),setTimeout((function(){t.alert("close")}),3e3)}})}))}));
//# sourceMappingURL=index.356222f8.js.map
