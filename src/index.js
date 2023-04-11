$(function () {
  $('#phoneInput').mask('+38 (999) 999-99-99');

  const users = [];

  $('#createUserModal').on('hidden.bs.modal', function () {
    $('#formModal').removeClass('was-validated');
  });

  $('.needs-validation').each(function () {
    $(this).submit(function (event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const formObject = {};
        const formData = new FormData(this);

        for (let pair of formData.entries()) {
          formObject[pair[0]] = pair[1];
        }

        const user = { ...formObject, id: Date.now() };
        users.push(user);

        const file = $('#avatarInput').get(0).files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function () {
            const dataURL = reader.result;

            const img = $('<img />')
              .addClass('rounded-5')
              .attr('width', '40')
              .attr('height', '40');
            img.attr('src', dataURL ? dataURL : '../assets/avatar.png');
            $('tbody').prepend(
              `<tr>
                <td id="image-container" class="text-center align-middle" >
                <img class="rounded-5" src="${dataURL}" width="40" height="40"/></td>
                <td class="text-center align-middle">${formObject.name}</td>
                 <td class="text-center align-middle">${formObject.email}</td>
                <td class="text-center align-middle">${formObject.phone}</td>
                 <td class="text-center align-middle"><button
              type="button"
              class="btn btn-outline-info"
              data-bs-toggle="modal"
              data-bs-target="#detailsModal"
              data-id="${user.id}"
            >
              Details
            </button></td>
              </tr>`
            );
          };
          reader.readAsDataURL(file);

          $('.modal').modal('hide');
        } else {
          $('tbody').prepend(
            `<tr>
              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>
            <td class="text-center align-middle">${formObject.name}</td>
                 <td class="text-center align-middle">${formObject.email}</td>
                <td class="text-center align-middle">${formObject.phone}</td>
            
              <td class="text-center align-middle"><button
              type="button"
              class="btn btn-outline-info"
              data-bs-toggle="modal"
              data-bs-target="#detailsModal"
              data-id="${user.id}"
            >
              Details
            </button></td>
            </tr>`
          );
          $('.modal').modal('hide');
        }
      }
      $(this).addClass('was-validated');
      this.reset();
    });
  });

  const detailUserModal = $('#detailsModal');

  if (detailUserModal.length > 0) {
    detailUserModal.on('show.bs.modal', function (event) {
      const button = $(event.relatedTarget);
      const recipient = button.data('id');

      const user = users.find(user => {
        return user.id === recipient;
      });

      $('.details-modal-body').prepend(
        ` <ul id="modal__user-info" >
                                   
                        <li >
                            <p>${user?.gender}</p>
                        </li>
                        <li>
                            <p>${user?.city}</p>
                        </li>
                        <li>
                            <p>${user?.email}</p>
                        </li>
                        <li>
                            <p>${user?.phone}</p>
                        </li>
                    </ul>`
      );
    });
  }
  $('.modal.fade').on('hidden.bs.modal', function () {
    $('#modal__user-info').remove();
  });

  // Обробник події для кнопки "Згенерувати користувача"
  $('#generateUserBtn').on('click', function () {
    $('#generateUserModal').modal('show');
  });
  $('#generateUserModal').on('hidden.bs.modal', function () {
    $('#form_generateUserModal').trigger('reset');
  });
  $('#generateBtn').on('click', function () {
    const gender = $('#genderSelect').val();
    const url = `https://randomuser.me/api/?gender=${gender}`;

    $.ajax({
      url: url,
      dataType: 'json',

      success: function (data) {
        const user = data.results[0];

        const newUser = { ...user, id: Date.now() };

        users.push(newUser);

        $('#generateUserModal').modal('hide');

        const img = $('<img />')
          .addClass('rounded-5')
          .attr('width', '40')
          .attr('height', '40');
        img.attr(
          'src',
          newUser.picture.large ? newUser.picture.large : '../assets/avatar.png'
        );

        $('tbody').prepend(
          `<tr>
                <td id="image-container" class="text-center align-middle" >
                <img class="rounded-5" src="${
                  newUser.picture.large
                }" width="40" height="40"/></td>
                <td class="text-center align-middle">${
                  newUser.name.first + ' ' + newUser.name.last
                }</td>
                 <td class="text-center align-middle">${newUser.email}</td>
                <td class="text-center align-middle">${newUser.phone}</td>
                <td class="text-center align-middle">
                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="${
                  newUser.id
                }">
                  Details
                </button></td>
              </tr>`
        );
      },
    });
  });
});
