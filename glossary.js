$(document).ready(function() {
  // Select both h1 and h2 headings
  $("h1, h2").mouseover(function() {
    // Change to a new color on mouseover
    $(this).css("color", "lightgreen");
  });

  $("h1, h2").mouseout(function() {
    // Change back to the original color (empty string reverts to CSS default)
    $(this).css("color", "");
  });
});
// This code uses jQuery to add interactivity to the glossary page. When the user hovers over any h1 or h2 heading, the text color changes to light green. When the mouse leaves the heading, the color reverts back to its original state.
$(document).ready(function() {
  // 1. Hide all botanic names immediately on page load
  $('.botanic').hide();

  // Mouseover/Mouseout events for headings (from previous step)
  $("h1, h2").mouseover(function() {
    $(this).css("color", "lightgreen");
  });

  $("h1, h2").mouseout(function() {
    $(this).css("color", "");
  });

  // 2. Add click event to the flower class
  $('.flower').click(function() {
    // Hide all botanic names first (resets previous selections)
    $('.botanic').hide();
    
    // Show the botanic name for the current flower only
    $(this).children('.botanic').show();
  });
});
// This code extends the previous functionality by adding a click event to elements with the class "flower". When a flower is clicked, it first hides all elements with the class "botanic" to reset any previous selections. Then, it shows only the botanic name that is a child of the clicked flower element. This allows users to click on a flower and see its corresponding botanic name while hiding others.
$(document).ready(function() {
  // 1. Hide botanic names and image divs immediately
  $('.botanic').hide();
  $('.imgdiv').hide();

  // Mouseover/out for headings
  $("h1, h2").mouseover(function() { $(this).css("color", "lightgreen"); });
  $("h1, h2").mouseout(function() { $(this).css("color", ""); });

  // Click event for flowers (from previous step)
  $('.flower').click(function() {
    $('.botanic').hide();
    $(this).children('.botanic').show();
  });

  // 2. Hover event for .pic classes
  $('.pic').hover(
    function(evt) {
      // Get the title attribute which matches the ID of the imgdiv
      var picId = $(this).attr('title');
      
      // Position the div near the mouse and show it
      $('#' + picId).css({
        top: evt.pageY + 10,
        left: evt.pageX + 10
      }).show();
    }, 
    function() {
      // Hide all image divs when mouse leaves
      $('.imgdiv').hide();
    }
  );
});
// This code further enhances the interactivity by adding a hover event to elements with the class "pic". When the user hovers over a picture, it retrieves the title attribute of that picture, which corresponds to the ID of an image div. The code then positions the image div near the mouse cursor and displays it. When the mouse leaves the picture, all image divs are hidden again. This allows users to see a larger image or additional information when they hover over a picture.
$(document).ready(function() {
  // Initial setup: hide botanic names and image divs
  $('.botanic').hide();
  $('.imgdiv').hide();

  // Heading color changes
  $("h1, h2").mouseover(function() { $(this).css("color", "lightgreen"); });
  $("h1, h2").mouseout(function() { $(this).css("color", ""); });

  // Click to reveal botanic name
  $('.flower').click(function() {
    $('.botanic').hide();
    $(this).children('.botanic').show();
  });

  // Hover event for flowers with images (.pic)
  $('.pic').hover(
    function(evt) {
      // 1. Get title and create the ID selector
      var picTitle = $(this).attr('title');
      var imgDivId = "#" + picTitle;

      // 2. Get coordinates and add 150 to X
      var posX = evt.pageX + 150;
      var posY = evt.pageY;

      // 3. Set CSS and show the image
      $(imgDivId).css({
        top: posY,
        left: posX
      }).show();
    }, 
    function() {
      // 1. Get title and create the ID selector again
      var picTitle = $(this).attr('title');
      var imgDivId = "#" + picTitle;

      // 2. Hide the specific image div
      $(imgDivId).hide();
    }
  );
});
//keypress event for the entire images  
  // Keypress event to jump to a specific letter
  $(document).keypress(function(evt) {
    // 1. Get the character code and convert to string
    var charCode = evt.which;
    var keyPressed = String.fromCharCode(charCode);
    
    // 2. Convert to lowercase to match the HTML IDs
    keyPressed = keyPressed.toLowerCase();
    
    // 3. Jump to the first flower with that ID
    window.location = "#" + keyPressed;
  });
