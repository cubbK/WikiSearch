$(document).ready(function(){
  $('h3').html("Hi jquery is working");
  $.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&callback=?',
  {list:'search' , srsearch: 'paradox', prop:'links', uselang:'en'}, wikipediaHTMLResult);

  function wikipediaHTMLResult(data) {
    console.log(data);
    $('h3').html(data.query.search[1].snippet);
  }
  $('#random-article').click(redirectRandom);
  function redirectRandom() {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&format=json&callback=?',function (data) {

      var title = data.query.random[0].title;
      console.log(link);
      var link = 'https://en.wikipedia.org/wiki/' + title;
      window.location.href = link;
    })
  }
});
