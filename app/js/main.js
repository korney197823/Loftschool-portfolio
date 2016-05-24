/**
 * Created by Denis on 24.05.2016.
 */
$(document).ready(function(){
  var burger = $('.menu__toggle');
  var menu = $('.menu');

  burger.click(function(){
    menu.toggle('menu--close');
  })
});
