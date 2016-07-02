$(document).ready(function(){


  $('#random-article').click(redirectRandom);
  function redirectRandom() {
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&format=json&callback=?',function (data) {

      var title = data.query.random[0].title;

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
      if (data.query.search.length == 0 ){
          console.log('nope');
          $('#results').html('<h3 class = "text-center">Not Found.Try something else</h3>');
          return false;
      }
      var length = data.query.search.length;
      var searchArr = data.query.search;
      $('#results').html("");
      for (var i = 0; i < length; i++) {
        var title = searchArr[i].title;
        var snippet = searchArr[i].snippet;
        var link = 'https://en.wikipedia.org/wiki/' + title;

        InsertResults(title,snippet,link);
      }
    }
    function InsertResults(title,snippet,link) {

      var toAppend = '  <div class="result">' +
                          '<div class="content">' +
                            '<a href = "'+ link +'"><h3 class = "content-title">'+title+'</h3></a>'+
                            '<h4 class="content-text">'+snippet+'</h4>';
      $('#results').append(toAppend);
    }
  }
});
