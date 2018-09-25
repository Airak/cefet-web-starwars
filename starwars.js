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


   		// console.log(movie.title);
   		// console.log(movie.episode_id);
   		// console.log(opeaning_crawl);
   		// console.log(url);
   }
  }

});