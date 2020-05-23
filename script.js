//name space
const mySite = {}

mySite.init = function() {
    mySite.copyToClipboard();
    AOS.init();
    mySite.hamburgerMenu();
    mySite.closeMobile(); 
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

// function to copy to clip board upon button click
mySite.copyToClipboard = function() {
    $('#copyEmail').on('click', function() {
        const text = $('.contactEmail p');
        copy(text);
        //change Icon to copied
        $('#copyEmail i').toggleClass('fa-clipboard fa-check' );
    })
    
    //change Icon when user leaves the copy function
    $('#copyEmail').on('mouseleave touchend', function() {
        $('#copyEmail i').hasClass('fa-check') ?
        $('#copyEmail i').toggleClass('fa-clipboard fa-check') :
        null;
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

// function to close hamburger menu when link is clicked
mySite.hamburgerMenu = function() {
    $('#toggleMenu').on('click', function () {
        $('nav').toggleClass('mobileNav hide');
    });
}

mySite.closeMobile = function () {
    $('.navItem a').on('click', function() {
        $('nav').toggleClass('mobileNav');
    })
}


$(document).ready(function() {
    mySite.init();
});