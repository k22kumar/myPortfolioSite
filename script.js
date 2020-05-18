//name space
const mySite = {}

mySite.init = function() {
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