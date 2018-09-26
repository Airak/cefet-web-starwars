// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let itemFilme = document.querySelector('#movies ul');

$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',

  success: function(resposta) {
  	console.log(resposta);
   for (movie of resposta.results){

   		let filme = document.createElement('li');
   		filme.dataset.episodeUrl= movie.url;
   		filme.innerHTML = "Episode " + movie.episode_id + ": " + movie.title;
   		itemFilme.appendChild(filme);
   }
  }

});

$("#movies ul").on('click', 'li', function(e){
    let url = $(e.target).data('episodeUrl');
    $.ajax({
        url: url,
        method: 'get',
        success: function(resposta) {
            $(".reading-animation").html("EPISÓDIO " + resposta.episode_id + "\n\n" + resposta.title + "\n\n" + resposta.opening_crawl);
        }
    });
});