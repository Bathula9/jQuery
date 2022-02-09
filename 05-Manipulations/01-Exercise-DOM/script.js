$(document).ready(function () {
  // version la plus utilisée et la plus connue

  $(".zone1").on("click", function () {
    $("h1").css({
      color: "green",
      "font-size": "80px",
      "text-align": "center",
    });
  });
  //console.log("document chargé (1)");
  //!exercise 2
  $(".zone2").on("click", function () {
    $("body").css("background", "fuchsia");
  });

  //!exercise 3
  //   let para = $(".titre").eq(2);
  //   console.log(para);
  //para.html("<h3>Ciao</h3>")
  $(".zone3").on("click", function (event) {
    event.preventDefault();
    $("body").css("background", "IndianRed");
  });

  //?exercise4

  //   $(theColor).on("click", function () {
  //     $("body").css("background", $(this).val());
  //   });

  $(".zone5").on("click", function (event) {
    event.preventDefault();
    let theColor = $(".zone4").val();
    console.log(theColor);
    $("body").css("background", theColor);
  });

  //*Exercise 5

  $(".zone7").on("click", function (event) {
    event.preventDefault();
    let color = $(".zone6").val();
    console.log(color);
    $("body").css("background-color", color);
  });

  //!Exercise6

  $(".zone8").on("click", function (event) {
    event.preventDefault();
    $(".zone8").css("background", "yellow");
    console.log(eq(index));
  });

  //?Exercise7

  $(".zone9").on("click", function (event) {
    event.preventDefault();
    $(".zone9").css("background", "green");
    $(this).css("background", "yellow");
  });
});
