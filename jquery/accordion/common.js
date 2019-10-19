$(function () {
  $("#accordion dt").on("click", function () {
    $(this).next().slideToggle();
    $("#accordion dt").not($(this)).next().slideUp();
  });
});
