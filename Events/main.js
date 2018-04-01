$(function() {
  let $pos = $('img').offset();
  let $img = $('img');
  let $times = $('#times')
  let nb = 0;
  let $show = $('#show');

  $pos.top = 200;
  $pos.left = 200;
  $('img').offset($pos)

  $img.hover(() => {
    nb++;
    $times.html(nb)
    let $y = Math.floor(Math.random() * 500);
    let $x = Math.floor(Math.random() * 500);

    //console.log($y);
    //console.log($x);
    let $newPos = $('img').offset();
    $newPos.top = $y;
    $newPos.left = $x;

    $('img').offset($newPos);
  }, () => {
    console.log('You are not hovering');
  });
  $show.on('click', () => {
    $('#fade').fadeIn('slow').delay(3000).fadeOut('slow');
  })

})