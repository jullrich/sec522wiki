/* SANS Electronic Workbook styles: workbook.js
   Version: 1.1.3

   Do not make changes to this file - they will be overwritten.  Customizations
   may be applied in the custom.js file, but core requirements may be removed
   if they conflict with standard features.

   In general, if you're not sure whether a customization will "stick", contact
   SROC for assistance.

   This was originally derived from https://github.com/squidfunk/mkdocs-material/issues/791#issuecomment-396563541
   */

// Offset top helper
function offsetY(elem) {
    if(!elem) elem = this;
    var y = elem.offsetTop;
    while (elem = elem.offsetParent) {
        y += elem.offsetTop;
    }
    return y;
}

var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length; i++) {
    links[i].onclick = function (event) {
        var o = document.getElementById(this.hash.substr(1));
        if(this.origin + this.pathname == window.location.origin + window.location.pathname) {
            event.preventDefault();
            var sT = offsetY(o) - document.getElementsByClassName('md-header')[0].clientHeight;
            window.location.hash = this.hash;
            window.scrollTo(0, sT);
        }
    }
}

// attach fancybox to all class="zoom" elements
$(document).ready(function() {
    $(".zoom").fancybox();
});
