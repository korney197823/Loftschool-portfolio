/**
 * Created by Denis on 24.05.2016.
 */
$(document).ready(function(){
  var burger = $('.menu__toggle');
  var menu = $('.menu');

  burger.click(
    function() {
      menu.toggle();
    }
  );

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

});
