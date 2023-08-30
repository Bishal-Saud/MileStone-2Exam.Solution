const input =document.getElementById('inp-search')
const movieCard = document.getElementById('cardBox')
const apiKey ="bb3eb31f";
// console.log(apiUrl);
 const fetchMovieList  = async(query)=>{
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
 const res = await fetch(apiUrl);
 const data = await res.json();
 if (data.Response === 'True') {
  movieCard.innerHTML = "";
     displayMovieResults(data.Search);
 } else {
  movieCard.innerHTML = 'Not Found';
 }
  

 }

fetchMovieList('avenger');

input.oninput = ()=>{
  movieCard.innerHTML = "";
    fetchMovieList(input.value);
    if(input.value === ''){
        fetchMovieList('avenger');
    }
}

const displayMovieResults = (search)=>{
    console.log(search);
    
    search.forEach(item => {
        
        const {Title, Poster} = item;
        let card = document.createElement('div');
        card.innerHTML = `
        <img src=${Poster === 'N/A' ? '': Poster} alt=${Title}>
        <h4>${Title}</h4>
        <button>Watch Now</button>
        `;
        card.classList.add('movie-card')
        movieCard.appendChild(card);
    });
}