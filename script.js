backtotop = document.getElementById("backtotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

$(function(){
    $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.slideshow');},
      5000);
});

function clicked(a)
{
    items = document.querySelectorAll('.menubutton.active');

    if(items.length)
    {
        items[0].className = 'menubutton';
    }

    a.className = 'menubutton active';
}
