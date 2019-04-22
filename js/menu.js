window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('ha-header').style.top = "0";
    } else {
        document.getElementById('ha-header').style.top = "-50px";
    }
}