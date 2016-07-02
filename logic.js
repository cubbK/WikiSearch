$(document).ready(function(){


  $('#random-article').click(redirectRandom);
  function redirectRandom() {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&format=json&callback=?',function (data) {

      var title = data.query.random[0].title;
      console.log(link);
      var link = 'https://en.wikipedia.org/wiki/' + title;
      window.location.href = link;
    })
  }
  $('#search-btn').click(OnSearchClick);

  function OnSearchClick(){
    var text = $('#search-box').val();
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&callback=?',
    {list:'search' , srsearch: text, prop:'links', uselang:'en'}, wikipediaHTMLResult);

    function wikipediaHTMLResult(data) {
      console.log(data);
      
    }
  }
});
