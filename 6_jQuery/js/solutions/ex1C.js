
function doSolution() {
    const baseBlue = 50;

    $('.myClass-0-3').each(function(counter) {

        // Counter is a zero-based index of the elements in the each() loop.
        counter++;
    
        let myString = 'This is div number ' + counter;
        $(this).html(myString);
    
        // Let's differentiate the divs based on the index number.
        // Use the index to differentiate their rgb color code.
        // Ref: https://www.w3schools.com/Css/css_colors_rgb.asp
        let blue = baseBlue * counter;
        let someColor = 'rgb(100, 200, ' + blue + ')';
        
        // Let's set the color as the background of the div with .css().
        $(this).css({'background-color' : someColor});
    });
}

function doSolutionB() {
    let funFacts = [
        'McDonald\'s once made bubblegum-flavored broccoli',
        'Some fungi create zombies, then control their minds',
        'There\'s only one letter that doesn’t appear in any U.S. state name',
        'Scotland has 421 words for "snow"',
        'Peanuts aren\'t technically nuts'
    ];

    // Set the text of the divs to the fun facts above.
    $('.myClass-0-3').each(function(counter) {
        // Not using jQuery in here.
        this.innerText = funFacts[counter];
    });
}

function doSolutionOptional() {


    // Let's work with arrow functions, so that we don't forget about them.
    let doGradient = (red, green) => {

        console.log('Making a nice parametric gradient...');

        const baseBlue = 50;
        $('.myClass-0-3').each(function(counter) {

            // Counter is a zero-based index of the elements in 
            // the each() loop.
            counter++;

            // Let's differentiate the divs based on the index number.
            // Use the index to differentiate their rgb color code.
            // Ref: https://www.w3schools.com/Css/css_colors_rgb.asp
            let blue = baseBlue * counter;
            let someColor = `rgb(${red}, ${green}, ${blue})`;
            
            // Let's set the color as the background of the div with .css().
            $(this).css({'background-color' : someColor});
        });
    };

    // Added a global reference.
    window.doGradient = doGradient;
}

