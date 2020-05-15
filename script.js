//name space
const mySite = {}

mySite.init = function() {
    mySite.filter();
    AOS.init();
}

mySite.filter = function() {
    //initialize isotope
    let isotopeFilter = $('.skillsContainer').isotope({
        itemSelector: '.skill',
        layoutMode: 'fitRows',
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





$(document).ready(function() {
    mySite.init();
});