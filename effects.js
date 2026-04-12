$(document).ready(function() {
  // Target the specific link by ID
  $('#signuplink').click(function(evt) {
    // 1. Cancel the default link action (stops page jump)
    evt.preventDefault();

    // 2. Slide the form up or down
    $('#newsSignup').slideToggle();

    // 3. Logic to swap the symbol
    var symbol = $('#openclose').text();
    
    if (symbol === '+') {
      $('#openclose').text('-');
    } else {
      $('#openclose').text('+');
    }
    
  });
});
$(document).ready(function() {
  $('#slogan').hover(
    function() {
      // MOUSEOVER
      // 1. Fade out normal/linear
      $(this).fadeOut('normal', 'linear', function() {
        // 2. Callback: Change text and fade back in
        $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
      });
    },
    function() {
      // MOUSEOUT
      // 1. Fade out fast/swing
      $(this).fadeOut('fast', 'swing', function() {
        // 2. Callback: Revert text and fade back in
        $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
      });
    }
  );
});
$(document).ready(function() {
  
  // ... existing code ...

  // Animate the rose into position on page load
  $('#rose').animate({
    right: '100px',
    opacity: 1
  }, 'slow', 'swing');

});
  $('#newsSignup').submit(function(evt) {
  // 1. Stop the default form submission
  evt.preventDefault();

  // 2. Display the alert message
  alert("Thank you for registering");

  // 3. Hide the form itself
  $(this).hide();

  // 4. Fade the link to 30% opacity
  // Using 'fadeTo' allows us to set a specific opacity target (0.3)
  $('#signuplink').fadeTo('slow', 0.3);
});


