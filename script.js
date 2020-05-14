//name space
const mySite = {}

mySite.init = function() {
    mySite.filter();
}

mySite.filter = function() {
    //initialize isotope
    let isotopeFilter = $('.skillsContainer').isotope({
        itemSelector: '.skill',
        layoutMode: 'masonry',
        // resizable: false,
        masonry: {
            columnWidth: 10,
            // isFitWidth: true
        }
    });

    // $(window).smartresize(function () {
    //     // check if columns has changed
    //     var currentColumns = Math.floor(($body.width() - 10) / colW);
    //     if (currentColumns !== columns) {
    //         // set new column count
    //         columns = currentColumns;
    //         // apply width to container manually, then trigger relayout
    //         $container.width(columns * colW)
    //             .isotope('reLayout');
    //     }

    // }).smartresize(); // trigger resize to set container width

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