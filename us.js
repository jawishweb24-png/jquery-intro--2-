// ---------------------------------------------------------
// Requirement 1: Custom JavaScript Function
// ---------------------------------------------------------
function setDynamicGreeting() {
    const currentHour = new Date().getHours();
    let greeting = "Welcome";

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    
    const titleElement = document.getElementById("page-title");
    if(titleElement) {
        titleElement.innerText = greeting + " - About Me";
    }
}

// ---------------------------------------------------------
// Requirement 2: At least 2 jQuery Effects
// ---------------------------------------------------------
$(document).ready(function() {
    
    // Call the custom JavaScript function on load
    setDynamicGreeting();

    // jQuery Effect #1: fadeIn()
    // Hides the content box initially and gently fades it in over 1.5 seconds
    $(".content-box").hide().fadeIn(1500);

    // jQuery Effect #2: slideToggle()
    // Slides the professional goals text open and closed when the button is clicked
    $("#toggle-goals-btn").click(function() {
        $("#goals-text").slideToggle("slow", function() {
            
            // Updates the button text depending on whether the section is open or closed
            if ($("#goals-text").is(":visible")) {
                $("#toggle-goals-btn").text("Hide Professional Goals");
            } else {
                $("#toggle-goals-btn").text("Reveal Professional Goals");
            }
            
        });
    });
    
});