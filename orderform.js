$(document).ready(function() {
    // 1. Put the cursor in the username (name) field
    $("#name").focus();

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Helper function for validation
    function validateField(input, isValid, errorMsg) {
        let errorSpan = $("#" + input.attr("id") + "Err");
        if (!isValid) {
            errorSpan.text(errorMsg);
            return false;
        } else {
            errorSpan.text("");
            return true;
        }
    }

    // ==========================================
    // 2. Personal & Shipping Information Validation (on blur)
    // ==========================================

    $("#name").blur(function() {
        validateField($(this), $.trim($(this).val()) !== "", "Name is required.");
    });

    $("#email").blur(function() {
        let val = $(this).val();
        validateField($(this), val !== "" && emailRegex.test(val), "Valid email required.");
    });

    $("#address").blur(function() {
        validateField($(this), $.trim($(this).val()) !== "", "Address is required.");
    });

    $("#city").blur(function() {
        validateField($(this), $.trim($(this).val()) !== "", "City is required.");
    });

    $("#zip").blur(function() {
        let val = $(this).val();
        validateField($(this), $.isNumeric(val) && val.length === 5, "Must be a 5-digit number.");
    });

    $("#shipaddr").blur(function() {
        validateField($(this), $.trim($(this).val()) !== "", "Shipping address required.");
    });

    $("#shipcity").blur(function() {
        validateField($(this), $.trim($(this).val()) !== "", "Shipping city required.");
    });

    $("#shipzip").blur(function() {
        let val = $(this).val();
        validateField($(this), $.isNumeric(val) && val.length === 5, "Must be a 5-digit number.");
    });


    // ==========================================
    // 3. Copy Billing Address to Shipping Address
    // ==========================================
    
    $("#copy").change(function() {
        if ($(this).is(":checked")) {
            // Copy text fields
            $("#shipaddr").val($("#address").val());
            $("#shipcity").val($("#city").val());
            $("#shipzip").val($("#zip").val());
            
            // Set the dropdown state
            $("#shipstate").val($("#state").val());

            // Trigger blur to clear any previous error messages on shipping fields
            $("#shipaddr, #shipcity, #shipzip").trigger("blur");
        } else {
            // Optional: Clear fields if unchecked
            $("#shipaddr, #shipcity, #shipzip").val("");
            $("#shipstate").prop("selectedIndex", 0);
        }
    });


    // ==========================================
    // 4. Quantity Calculations, Tax, and Shipping
    // ==========================================

    $(".qty").blur(function() {
        let orderTotal = 0;

        // Iterate through each quantity field
        $(".qty").each(function() {
            let qtyVal = $(this).val();
            
            // If not numeric or empty, treat as 0
            if (!$.isNumeric(qtyVal)) {
                qtyVal = 0;
            } else {
                qtyVal = parseFloat(qtyVal);
            }

            // Get ID to find matching price and total cells
            let id = $(this).attr("id"); 
            let price = parseFloat($("#price" + id).text());
            
            // Calculate item total
            let itemTotal = price * qtyVal;
            
            // Display item total and add to subtotal
            $("#total" + id).text(itemTotal.toFixed(2));
            orderTotal += itemTotal;
        });

        // Display Subtotal
        $("#subt").text(orderTotal.toFixed(2));

        // Calculate Tax (8% for TX, 0 for others)
        let shipState = $("#shipstate").val();
        let tax = 0;
        if (shipState === "TX") {
            tax = orderTotal * 0.08;
        }
        $("#tax").text(tax.toFixed(2));
        
        orderTotal += tax;

        // Calculate Shipping 
        let shipping = 0;
        if (orderTotal > 0) { // Only charge shipping if items are ordered
            if (shipState === "TX") {
                shipping = 5.00;
            } else if (shipState === "CA" || shipState === "NY") {
                shipping = 20.00;
            } else {
                shipping = 10.00;
            }
        }
        $("#ship").text(shipping.toFixed(2));
        
        // Grand Total
        orderTotal += shipping;
        $("#gTotal").text(orderTotal.toFixed(2));
    });

    // Recalculate totals if shipping state changes
    $("#shipstate").change(function() {
        // Trigger a blur on a quantity field to run the calculation logic again
        $(".qty").first().trigger("blur");
    });


    // ==========================================
    // 5. Final Form Validation on Submit
    // ==========================================
    
    $("#order").submit(function(event) {
        // Force a blur event on all required fields to generate any missing error messages
        $("#name, #email, #address, #city, #zip, #shipaddr, #shipcity, #shipzip").trigger("blur");

        let isValid = true;
        
        // Check if any error span contains text
        $(".error").each(function() {
            // Ignore the main form error span for this check
            if ($(this).attr("id") !== "orderErr" && $(this).text() !== "") {
                isValid = false;
            }
        });

        if (!isValid) {
            // Prevent the form from submitting
            event.preventDefault();
            $("#orderErr").text("Please fix the highlighted errors before submitting.");
        } else {
            $("#orderErr").text("");
        }
    });
    $("#shipstate").change(function() {
    $(".qty").first().trigger("blur"); // Re-runs the calculation logic
});