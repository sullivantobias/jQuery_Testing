// jQuery Part //
$(function() {
  $('span').each(function($i) {
    $(this).html('disparition test ' + $i + "</br>");
  });
});


// Vanilla Javascript Part//
var temp = document.querySelectorAll('div');
for (var i in temp) {
  temp[i].innerHTML = 'disparition test ' + i + "</br>";
}