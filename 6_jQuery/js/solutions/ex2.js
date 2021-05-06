
function doSolutionStyle() {
    $('.myClass-0-1').css({
        'background-color':'gray',
        'color':'white',
        'width':'250px',
        'height':'75px',
        'margin-bottom':'50px',
        'padding-top':'20px',
        'padding-left':'20px',
        'border':'3px solid black',
        'box-shadow':'0px 3px 7px 3px black',
        'border-radius':'20px',
        // Makes the cursor a "hand".
        'cursor':'pointer'
    });
    
}

function mySolutionClick() {

    // But the div doesn't look or feel like a button
    // Let's shape it into a fancy button

    // First color it and give it a small button shape.

    // Clicking on objects is really easy:
    // simply query the div then use .click().
    $('.myClass-0-1').click(function() {

        // This is the HTML element, we need to wrap it
        // in jQuery to make the .css method available.
        $(this).css({
            'transition': '0.1s',
            'background-color': '#CCC',
            'box-shadow':'0px 1px 1px 1px black'
        }); 

        // Checkpoint. Why is doGradient defined here?
        doGradient(Math.floor(Math.random()*255), 
                   Math.floor(Math.random()*255));

        // Using the arrow function does not change the
        // reference of "this".
        setTimeout(() => {
            $(this).css({
                'transition': '0.2s',
                'background-color': 'gray',
                'box-shadow':'0px 3px 7px 3px black'   
            }); 
        }, 150);
        
    });

}
