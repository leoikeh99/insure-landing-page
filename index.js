$(".img-nav").click(function () {
  $(".nav2").css("display", "block");
  $(".img-close").css("display", "block");
  $(".img-nav").css("display", "none");
  $(".nav2").css("height", "83vh");
});

$(".img-close").click(function () {
  $(".nav2").css("height", "0");
  $(".img-close").css("display", "none");
  $(".img-nav").css("display", "block");
});
