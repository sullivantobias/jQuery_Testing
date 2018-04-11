$(function() {
  $('li').each(function() {
    let $list = $(this);
    let $listHref = $list.attr('href');

    $list.on('click', () => {

      $('.activeLi').removeClass('activeLi');
      $list.addClass('activeLi');

      $('div').hide();
      $($listHref).show(800);

    });
  });
})