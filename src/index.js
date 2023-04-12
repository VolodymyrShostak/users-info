$(function () {
  $('#phoneInput').mask('+38 (000) 000-00-00', {
    placeholder: '+38 (___) ___-__-__',
  });

  const users = [];

  $('#createUserModal').on('hidden.bs.modal', function () {
    $('#formModal').removeClass('was-validated');
  });
  function validatePhone(phone) {
    const regex = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    return regex.test(phone);
  }

  $('.needs-validation').each(function () {
    $(this).submit(function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.checkValidity()) {
        $(this).addClass('was-validated');
        return;
      }
      $(this).addClass('was-validated');
      const formData = new FormData(this);
      const formObject = {};
      for (let pair of formData.entries()) {
        formObject[pair[0]] = pair[1];
      }
      const phoneInput = formObject['phone'];
      if (!validatePhone(phoneInput)) {
        $('#phoneInput').removeClass('is-valid');
        $('#phoneInput').addClass('is-invalid');
      } else {
        $('#phoneInput').removeClass('is-invalid');
        $('#phoneInput').addClass('is-valid');
      }

      const user = { ...formObject, id: Date.now() };
      users.push(user);

      const file = $('#avatarInput').get(0).files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          const dataURL = reader.result;

          $('#objectImage').attr('src', dataURL);

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
      } else {
        $('#objectImage').attr('src', '../assets/avatar.png');
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
      }
      $('.modal').modal('hide');
      $('#objectName').text(formObject.name);
      $('#objectEmail').text(formObject.email);
      $('#objectPhone').text(formObject.phone);

      this.reset();
      $('#phoneInput').removeClass('is-invalid');
      $('#objectDetails').removeClass('d-none');
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

      $('.modal-body-details').prepend(
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
    const spinner = $(
      '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>'
    );
    $('#queryModal').prepend(spinner);

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
        spinner.remove();
        const successAlert = $(
          '<div class="alert alert-success alert-dismissible fade show " role="alert">Користувач успішно згенерований!</div>'
        );
        $('#table').prepend(successAlert);
        setTimeout(function () {
          successAlert.alert('close');
        }, 3000);
      },

      error: function () {
        spinner.remove();

        const errorAlert = $(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">Помилка генерації користувача!</div>'
        );
        $('.modal-body').prepend(errorAlert);
        setTimeout(function () {
          errorAlert.alert('close');
        }, 3000);
      },
    });
  });
});
