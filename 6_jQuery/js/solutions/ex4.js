function doSolution() {
  $(".myClass-0-3").each(function () {
    // Hover in.
    $(this).hover(
      function () {
        $(this).css({
          transition: "0.5s",
          transform: "scale(1.1)",
          // A few other things to make it look nicer.
          filter: "drop-shadow(0px 4px 4px black)",
          "margin-top": "4px",
          "margin-bottom": "9px",
        });
      },
      // Hover out.
      function () {
        $(this).css({
          transition: "0.5s",
          transform: "scale(1)",
          // A few other things to make it look nicer.
          filter: "drop-shadow(0px 0px 0px black)",
          "margin-top": "0px",
          "margin-bottom": "5px",
        });
      }
    );
  });
}
