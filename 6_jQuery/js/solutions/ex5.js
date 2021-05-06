function doSolution() {

    $('.myClass-0-3').each(function() {


        $(this).css({
            // Makes a "hand cursor", meaning "clickable".
            'cursor':'pointer',
            // Center the text.
            'text-align':'center',
            // Round the borders.
            'border-radius':'150px'
        });

        // For every element in the list of divs apply the below
        // click function
        $(this).click(function() {

            // Notice that here 'this' refers to a single element on
            // the list of divs

            // This is the cheapest way: first make all the divs in the
            // list less visible (lower opacity)
            $('.myClass-0-3').css({
                'transition':'0.5s',
                'opacity':'0.2'
            });

            // Then make the the div you connect visible (full opacity)
            $(this).css({
                'transition':'0.5s',
                'opacity':'1',
                'transform':'scale(1.3)'
            });

            // Then after 1 second of clicking make the other divs in
            // the list also fully visible
            setTimeout(() => {

                $('.myClass-0-3').css({
                    'transition':'0.5s',
                    'opacity':'1'
                });

                $(this).css({ 'transform':'scale(1)' });

            }, 1000)

        });


    });

}