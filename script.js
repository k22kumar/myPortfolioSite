//name space
const mySite = {}

mySite.init = function() {
    // mySite.filter();
    // mySite.shuffle();
    mySite.copyToClipboard();
    AOS.init();
    mySite.formSubmission();
}

mySite.mixer = mixitup('.skillGallery', {
    animation: {
        "duration": 230,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade scale(0.01)",
        "easing": 'ease-in-out'
    },
});

mySite.filter = function() {
    //initialize isotope
    let isotopeFilter = $('.skillsContainer').isotope({
        layoutMode: 'fitRows',
        itemSelector: '.skill',
    });
    //on click filter the skills via datatype
    $('.skillChoice').on('click', function() {
        const skill = $(this).attr('data-isotope-filter');
        // if all skills is clicked show all else show specific skill
        skill === '*' ?
            isotopeFilter.isotope({
                filter: skill
            }) :
            isotopeFilter.isotope({
                filter: `.${skill}`
            });
    });
}

// function using shuffle


// function to copy to clip board upon button click
mySite.copyToClipboard = function() {
    $('#copyEmail').on('click', function() {
        console.log("asfasdf")
        const text = $('.contactEmail p');
        copy(text);
    })
}

// function to copy text
// copied from https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
function copy(element) {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

//upon sucessful submission, reset the form and present a Thank You message
mySite.formSubmission = function() {
    $('form').on('submit', function() {
        $('form').trigger("reset");
        $('.formTitle').text('Sent, thank you!');
    })
}


$(document).ready(function() {
    mySite.init();
});