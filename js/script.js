var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-$( window ).height()
          }, 500);
    return false;
});
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('body').scrollspy({target: ".navbar"});
    AOS.init();

    $('#hero em').replaceWith($('#hero .replacement_verbs'));

    randomTextInHero();
    setInterval(function(){
      randomTextInHero();
      console.log("update");
    }, 3000);
    $('#hero .claim ul').click(function(){
      randomTextInHero();
    });

}

var randomTextInHero= function(){
  var replacement_verbs=$('#hero .replacement_verbs li');
  var randomtop=$('#hero .claim ul li').outerHeight() * Math.floor(Math.random()*replacement_verbs.length)+9;
  $('#hero .claim ul li').css("top",randomtop*-1); //modify top position
}


/*
  var replacement_verbs=$('#hero .replacement_verbs li');
  var randomName=replacement_verbs.eq(Math.floor(Math.random()*replacement_verbs.length)).text();
  console.log(randomName);
  $('#hero em').html(randomName);
  console.log(replacement_verbs);
*/
