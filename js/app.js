//FIRE THE JQUERY FANCYBOX PLUGIN:

$(document).ready(function() {
    $(".fancybox").fancybox({
        arrows: true,
        closeBtn: true,
        closeClick: true,
        padding: 0,
        margin: 80,
        openEffect: 'elastic',
        openSpeed: 100,
        openOpacity: false,
        closeEffect: 'elastic',
        closeSpeed: 100,
        closeOpacity: false,
        nextEffect: 'fade',
        nextSpeed: 500,
        prevEffect: 'fade',
        prevSpeed: 500
    });

});

//DISABLING FANCYBOX ON MOBILE:

$(document).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 480) {
        $(".gallery-image").removeClass("fancybox");
    }
});




//SEARCH FUNCTION:

//Steps:
//1. Hide all of the items
//2. Find items where alt text shows letters
//3. Display those items in the filtered results

//Explanation of methods and functions


//Get all of the elements with a class of gallery-image
//Attaching keyup event to search box - only when focussed
//.trim() method removes all whitespace from both ends of a string
//.toLowerCase returns the value of the the string converted to Lowercase
//$(this) selects the current HTML element
//.val() method used to get the values of form elements
//.each() - iterates over DOM elements that are part of jQuery object
//.children() - get the children of each element in the set of matched elements - optionally filtered by a selector
//.attr() - get the value of an attribute for the first element in the set of matched elements
//.indexOf - returns the first index at which a given element can be found in an array or - 1 if not present
//.removeClass - removes a single class, multiple classes or all classes from each element
//.addClass - adds the specified class to each element in the set of matched elements
//.fadeIn - display the matched elements by fading them to opaque
//.fadeOut - hide the matched elements by fading them to transparent


var $galleryImage = $(".gallery-image");

$("#search").keyup(function() {
    var term = $.trim($(this).val()).toLowerCase();
    $galleryImage.each(function() {
        //Get the alt text for each image in the gallery
        var altText = $(this).children("a").children("img").attr("alt").toLowerCase();
        //Check inside the alt text for each image
        if (altText.indexOf(term) > -1) {
            $(this).removeClass("hide").fadeIn(1000); //Show elements that fit the search criteria
        } else {
            $(this).fadeOut(1000).addClass("hide"); //Hide elements that don't fulfil the search criteria

        }

    });
});
