$('.pic').css('min-height', $('.info-table').outerHeight() + 'px');// this to make algin-items-center work

function bodyPadding(x) {
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";
        $('body').css('padding-top', $('.navbar').outerHeight() / 2 + 'px');
    } else {
        // document.body.style.backgroundColor = "pink";
        $('body').css('padding-top', $('.navbar').outerHeight() * 2 + 'px');
    }
}

var x = window.matchMedia("(max-width: 768px)")
bodyPadding(x) // Call function at run time
x.addEventListener("change", () => {
    this.bodyPadding(x);
});// Attach listener function on state changes
