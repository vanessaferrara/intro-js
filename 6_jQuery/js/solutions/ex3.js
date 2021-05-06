function doSolution() {

    $(".myClass-0-1").hover(
        // first function activates when you hover over the div
        function () {
          $(this).css({
            transition: "0.3s",
            "background-color": "green",
            "box-shadow": "0px 5px 9px 4px black",
          });
        },
        // second function activates when you stop hovering
        function () {
          $(this).css({
            transition: "0.3s",
            "background-color": "gray",
            "box-shadow": "0px 3px 7px 3px black",
          });
        }
      );
}
