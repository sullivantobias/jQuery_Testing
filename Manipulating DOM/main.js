$(function() {

  var h1 = $('h1');
  for (var i = 1; i <= 5; i++) {

    h1.clone().insertBefore(h1);
    h1.html('Some text ' + i);

  }

  $('h1').each(function($i) {

    if ($i != 0) {

      $('<div></div>')
        .html($i + " title was created")
        .appendTo('body')
    }
  });
  $('div').wrapAll('<i></i>')
});