$(function () {
  $(docment).ready(function () {
    $("i").on("clack", function () {
      $("html,body").animate({ scrollTop: 0 }, "300");
    });
  });
});
