$(document).ready(function() {

    var avatarElem = document.getElementById('avatar'),
      heightElem = $("#avatar").height(),
      elemMain = document.getElementById('table');

    var avatarSourceBottom = elemMain.getBoundingClientRect().top - 1 - Number(heightElem) + window.pageYOffset;

    window.onscroll = function() {
      if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
        avatarElem.classList.remove('fixed');
      } else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.classList.add('fixed');
      }
    };
});


$(function() {
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {
    var target = $(this).attr('href'),
      heightElem = $("#avatar").height(),
      bl_top = $(target).offset().top - heightElem;

    $('body, html').animate({scrollTop: bl_top}, 1000);
    return false;

  });
});




