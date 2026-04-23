$(document).ready(function() {
    
    // 1. Hover effect for smaller images
    $('#thumbs img').hover(
        function() {
            // Mouse enter: add thin dark green border and box shadow
            $(this).css({
                'border': '1px solid darkgreen',
                'box-shadow': '3px 3px 5px rgba(0, 0, 0, 0.4)'
            });
        }, 
        function() {
            // Mouse leave: remove the border and box shadow
            $(this).css({
                'border': '', 
                'box-shadow': '' 
            });
        }
    );

    // 2. Click event for smaller images
    $('#thumbs img').click(function() {
        // Grab the src and alt attributes from the clicked thumbnail
        let newSrc = $(this).attr('src');
        let newAlt = $(this).attr('alt');

        // Replace the large image's src and update the figcaption text
        $('#lgPic').attr('src', newSrc);
        $('#lgTitle').text(newAlt); 
    });

    // 3. Click event for the large image
    $('#lgPic').click(function() {
        // Grab the current src attribute of the large image
        let currentSrc = $(this).attr('src');
        
        // Open the image URL in a new window/tab
        window.open(currentSrc, '_blank');
    });

});