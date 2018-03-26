// jQuery Part //
$(function() {

  var temp = $('label')
  var button = $('#adId')
  var area = $('.area')



  button.on('click', (e) => {

    button.css({
      top: 50,
      left: 50
    });

    temp.each(function($i) {
      $(this).html('I am the ' + $i + ' label </br>')
      $(this).attr({
        id: 'label' + $i
      });

      if ($i == temp.length - 1) {
        $(this).attr({
          id: 'last-label'
        });
      }

      $('.infos').text("Width : " + area.outerWidth() +
        ", Height : " + area.outerHeight())
    });

  });
});