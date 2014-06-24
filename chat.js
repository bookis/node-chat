$(document).ready(function () {
  $("#submit").click(function () {
    $.ajax("/messages", {
      type: "POST",
      data: {message: $("#message").val()},
      success: function (data) {
        var li = $("<li>")
        li.text(data);
        $("ul#messages").append(li);
      }
    });
    return false;
    //put message in html on index page
  })

});