$(function () {
  $("body >#open").on("click", function () {
    if ($("body").addClass("active")) {
      $(this).removeClass("active");
      $("#open").removeClass("active");
    };
  });
  $("body #close").on("click", function () {
    console.log("windows");
    if ($("body").removeClass("active")); {
      $(this).removeClass("active");
    };
  });
});