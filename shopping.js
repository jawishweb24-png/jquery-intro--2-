$(document).ready(function() {
    // Variable to count the items in the shopping cart
    var itemCount = 0;

    // Variable to hold HTML for the delete button
    var deleteBtn = "<span class='del'>Remove</span>";

    // --- ADD TO CART LOGIC ---
    $('.add').click(function() {
        itemCount++;

        if (itemCount > 0) {
            $('#empty').hide();
        }

        var itemID = $(this).attr('id');
        var itemName = $(this).attr('name');

        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " " + deleteBtn + "</li>";

        $('#cart').append(cartLink);
        $(this).hide();
    });

    // --- REMOVE FROM CART LOGIC (Delegated) ---
    $('#cart').on('click', '.del', function() {
        var parentLi = $(this).parent();
        var flowerId = parentLi.attr('name');
        
        parentLi.remove();
        itemCount--;

        if (itemCount === 0) {
            $('#empty').show();
        }

        $('#' + flowerId).show();
    });

    // --- STAR RATING LOGIC ---
    $('span.rating img').click(function() {
        $(this).siblings().attr('src', 'staroff.gif');
        $(this).closest('img').attr('src', 'staron.gif');
        $(this).prevAll().attr('src', 'staron.gif');
    });
});