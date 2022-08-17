"use strict";

// $(function() {
//   console.log('Hello Bootstrap5');
// });
ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
});
$(function () {
  $('.admin-reply').click(function () {
    $('.card-admin').addClass('d-none');
    $('.admin-btn').addClass('d-none');
    $('.admin-collapse').show();
  });
  $('.edit-cancel').click(function () {
    $('.card-admin').removeClass('d-none');
    $('.admin-btn').removeClass('d-none');
    $('.admin-collapse').hide();
  });
});
//# sourceMappingURL=all.js.map
