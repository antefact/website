var $root = $('html, body');

//this make the browser scroll to a specific anchor
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
          }, 500);
    return false;
});



window.onload = function() {

    //add scrollspy to activate menu on scroll
    $('body').scrollspy({target: ".navbar"});

    //when we get to a new section we check if there are things to do
    $('body').on('activate.bs.scrollspy', function () {
      var currentSection = $(".nav li.active > a").attr('href');

      //if we are in process animation, restart the animation
      if (currentSection==="#process-animation"){
//       processAnim.stop().reset().play(2);
      }

    })

    //init the plugin for the animation when you scroll on to something
    AOS.init();

    //if js works replace a word from the claim with the full list of options
    $('#hero em').replaceWith($('#hero .replacement_verbs'));

    //start changing the text in the hero-claim
    randomTextInHero();
    setInterval(function(){randomTextInHero()}, 3000);
    $('#hero .claim ul').click(function(){
      randomTextInHero();
    });

    //load the asset fot the animation
    var processAnim =new Vivus('process-animation', {duration: 200, file: 'svg/process.svg'}, function(){});
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
