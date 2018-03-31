$(function() {
  let $span = $('.answer').hide();

  $('a').click(e => {
    e.preventDefault();
    if ($('#r3:checked', '#poll').val()) {
      $('#answer1').css({
        color: 'green'
      })
    } else {
      $('#answer1').css({
        color: 'red'
      })
    }

    if ($('#r4:checked', '#poll').val()) {
      $('#answer2').css({
        color: 'green'
      })
    } else {
      $('#answer2').css({
        color: 'red'
      })
    }
    $('img').hide();
    $span.show();
  });
})