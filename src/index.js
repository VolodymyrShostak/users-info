$(function () {
  $('#phoneInput').mask('+38 (000) 000-00-00', {
    placeholder: '+38 (___) ___-__-__',
  });

  const users = [];

  $('#createUserModal').on('show.bs.modal', function () {
    $('#formModal').removeClass('was-validated');
  });
  function validatePhone(phone) {
    const regex = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    return regex.test(phone);
  }

  $('#formModal').submit(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).addClass('was-validated');
    if (!this.checkValidity()) {
      return;
    }

    const formData = new FormData(this);
    const formUserObject = {};
    for (let pair of formData.entries()) {
      formUserObject[pair[0]] = pair[1];
    }
    const phoneInput = formUserObject['phone'];
    if (!validatePhone(phoneInput)) {
      $('#phoneInput').removeClass('is-valid');
      $('#phoneInput').addClass('is-invalid');
    } else {
      $('#phoneInput').removeClass('is-invalid');
      $('#phoneInput').addClass('is-valid');
    }

    const user = { ...formUserObject, id: Date.now() };
    users.push(user);

    const file = $('#avatarInput').get(0).files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const dataURL = reader.result;

        $('#objectImage').attr('src', dataURL);

        $('tbody').prepend(
          `<tr>
                <td id="image-container" class="text-center align-middle" >
                <img class="rounded-5" src="${dataURL}" width="40" height="40"/></td>
                <td class="text-center align-middle">${formUserObject.name}</td>
                 <td class="text-center align-middle">${formUserObject.email}</td>
                <td class="text-center align-middle">${formUserObject.phone}</td>
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
    } else {
      $('#objectImage').attr('src', '../assets/avatar.png');
      $('tbody').prepend(
        `<tr>
              <td id="image-container" class="text-center align-middle"><img src="../assets/avatar.png" width="40"/></td>
            <td class="text-center align-middle">${formUserObject.name}</td>
                 <td class="text-center align-middle">${formUserObject.email}</td>
                <td class="text-center align-middle">${formUserObject.phone}</td>
            
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

    $('#objectName').text(formUserObject.name);
    $('#objectEmail').text(formUserObject.email);
    $('#objectPhone').text(formUserObject.phone);

    $('#phoneInput').removeClass('is-invalid');
    $('#objectDetails').removeClass('d-none');
    this.reset();
    $('#createUserModal').modal('hide');
  });

  const detailUserModal = $('#detailsModal');

  if (detailUserModal.length > 0) {
    detailUserModal.on('show.bs.modal', function (event) {
      const button = $(event.relatedTarget);
      const recipient = button.data('id');

      const user = users.find(user => {
        return user.id === recipient;
      });

      $('#dispplayDetailsModal').prepend(
        ` <ul id="modal__user-info" >
                        <div class="d-flex flex-row" >
                        <p>Ім'я:&#160;&#160;&#160;</p>
                            <p class="font-weight-bold">${user?.name}</p>
                        </div>
                             
                        <div class="d-flex flex-row" >
                        <p>Стать:&#160;&#160;&#160;</p>
                            <p class="font-weight-bold">${user?.gender}</p>
                        </div>
                        <div class="d-flex flex-row" >
                        <p>Місто:&#160;&#160;&#160;</p>
                            <p class="font-weight-bold">${user?.city}</p>
                        </div>
                        <div>
                        <p>Електронна адреса:&#160;&#160;&#160;</p>
                            <p class="font-weight-bold">${user?.email}</p>
                        </div>
                       <div class="d-flex flex-row" >
                        <p>Телефон:&#160;&#160;&#160;</p>
                            <p class="font-weight-bold">${user?.phone}</p>
                        </div>
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
        const newUser = {
          name: user.name.first + ' ' + user.name.last,
          city: user.location.city,
          phone: user.phone,
          email: user.email,
          gender: user.gender,
          avatar: user.picture?.large,
          id: Date.now(),
        };

        $('#objectImage').attr('src', newUser.avatar);
        $('#objectName').text(newUser.name);
        $('#objectEmail').text(newUser.email);
        $('#objectPhone').text(newUser.phone);
        $('#objectDetails').removeClass('d-none');

        users.push(newUser);

        $('#generateUserModal').modal('hide');

        $('tbody').prepend(
          `<tr>
                <td id="image-container" class="text-center align-middle" >
                <img class="rounded-5" src="${newUser?.avatar}" width="40" height="40"/></td>
                <td class="text-center align-middle">${newUser?.name}</td>
                 <td class="text-center align-middle">${newUser?.email}</td>
                <td class="text-center align-middle">${newUser?.phone}</td>
                <td class="text-center align-middle">
                <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="${newUser?.id}">
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
        }, 2000);
      },
    });
  });
});
