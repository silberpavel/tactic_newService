

// $(document).ready(function () {
//     // $(".thumbnails").click(function () {
//         // $(".news-slider").css("color", "red").slideUp(2000).slideDown(2000);
//         // $(".active").slideUp(8000);
//         // $(".deactive").slideUp(5000);
//     // });


//     $('.newsSlider').hide(3000);



// });

document.getElementById('slider-left').onload = slideleft;
var up = 0;

function sliderUp() {
    var rowSlider = document.getElementsByClassName('newsSlider');
    up = up + 200;
    if (up < 800) {
        up = 0;
    }    
    rowSlider.style.up = up + 'px';
}



