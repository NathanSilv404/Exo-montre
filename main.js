
var toutesLesEtoiles = $('.stars .star');
toutesLesEtoiles.click(onStarClick);



function onStarClick(event) {


	var etoileCliquée = $(this);
	
	var indexCliqué = etoileCliquée.data("index");

	var parent = $(this).parent();

	
	parent.find('.star').addClass('stargrey');
	parent.find('.star').removeClass('yellow');


	for (var i = 0; i <= indexCliqué; i++) {

		var etoile = parent.find('.star[data-index=' + i + ']');
	
		etoile.addClass('yellow');
		etoile.removeClass('stargrey');
	}
}

jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function(e) {
      let $input = $(this).prev('input.qty');
      let val = parseInt($input.val());
      $input.val( val+1 ).change();
  });

  $('.quantity').on('click', '.minus', 
      function(e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 0) {
          $input.val( val-1 ).change();
      } 
  });
});


const card = document.querySelector('.card');
const orange = document.querySelector('.orange');

card.addEventListener('mouseover', function() {
  orange.style.zIndex = "1";
});

card.addEventListener('mouseout', function() {
  orange.style.zIndex = "-1";
});


