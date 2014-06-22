$(document).ready(function () {
  $("a").click(function () {
    $.ajax("http://localhost:1337/hello", {
      success: function (data) {
        var li = $("<li />")
        li.text(data)
        $(".list").prepend(li)
      }
    })
  })
})
