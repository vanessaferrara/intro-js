$(document).ready(function() {
        
    // From Ex1.
    // We can chain methods in jQuery.
    $('.myClass-0-1').html('jQuery is <em>easy</em>.<br/><br/>');
    // The text is there but small. Let's make it bigger.
    $('.myClass-0-1').css({ 'font-size': '40px' });
    ///////////////////////////////////////////////

    // From Ex2.

    // Let sets the left and top margin to a percentage.
    // Let's use the parent div's (myClass-0) to position all children.
    $('.myClass-0').css({
        'margin-left':  '20%',
        'margin-right': '20%'
    });

    // Let's add some texts to some divs.
    $('.myClass-0-3').html('Some text.');

    // Let's make it less boring with some animation.

    // We can add the 'transition' property to tell the browser
    // to make the requested change happen gradually.

    // You can also us the ID of the div: $('#ID_NAME').
    // We are moving the first children.
    $('#myID-0-1').css({
        'transition':'1s',
        'margin-left':'33%',
        'margin-top':'10%'
    });
    

    // Add a transition for divs with class name: myClass-0-3
    // The transition will be effective for _all_ properties that
    // you specify.
    // Hint: try 'background-color', 'color', and 'font-size';


    // Solution.
    // Add some fun attributes to your text.
    $('.myClass-0-3').css({
        'transition': '1s',
        'background-color': 'black',
        'color': 'white',
        'font-size': '30px',
        'margin-bottom': '5px',
        'padding': '10px'
    });
    /////////////////////////////////////////////////////////
   

    // Exercise 3: each().
    //////////////////////

    // jQuery has an edge over vanilla JS when it comes to manipulate 
    // multiple elements at once.

    // When you fetch multiple divs with the same class you can also
    // go through each of them and do something different with each().

    // Ref:
    // https://api.jquery.com/each/#each-function

    // a. Modify the code below to
    // 
    // 1. Display the ordinal position of each div the page.
    // 2. Create a gradient of background colors across all divs.

    $('.myClass-0-3').each(function(counter) {

        // Write here anything you want to happen
        // for each div with the same class.

        // Here 'this' represents a single div.
        
        // this.html('');
        // this.css({'':''});

    });

    // Solution.
    // doSolution();

    // b. Fun facts.

    // Let's add some fun facts.
    // Ref: https://www.rd.com/list/interesting-facts/.
    let funFacts = [
        'McDonald\'s once made bubblegum-flavored broccoli',
        'Some fungi create zombies, then control their minds',
        'Only one letter does not appear in any U.S. state name',
        'Scotland has 421 words for "snow"',
        'Peanuts aren\'t technically nuts'
    ];

    // Set the text of the divs to the fun facts above.
    $('.myClass-0-3').each(function(counter) {
        // Not using jQuery in here.
        this.innerText = funFacts[counter];
    });

    // c. Optional. Let's parametrize the gradient creation.
    ///////////////////////////////////////////////

    // - Create a new function that takes two parameters: red and green.
    // - Modify the function in a. to set those two parameters in the 
    //   rgb background definition.
    // - Add some delay to see the result (hint: setTimeout()).

    // Solution.
    // doSolutionOptional();


});