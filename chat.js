$(document).ready(function () {
  $("#submit").click(function () {
    $.ajax("/messages", {
      type: "POST",
      data: {message: $("#message").val()},
      success: function (data) {
        alert(data);
      }
    });
    return false;
    //put message in html on index page
  })

});