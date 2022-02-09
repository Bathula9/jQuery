$(document).ready(function () {
  $(".droite > img").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    let $abc = $(this).attr("src");
    $(".gauche > img").attr("src", $abc);
  });
});
