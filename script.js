const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const getMovies = async (url)=>{
   const response = await fetch(url);
   let data = await response.json();
   showMovies(data.results)
}

const moviebox  = document.querySelector(".moviebox");
const showMovies = (data)=>{
    moviebox.innerHTML=""
    data.forEach((item)=>{
        const box = document.createElement("div");
        box.innerHTML = `  <div class="box">
        <img src="${IMGPATH+item.poster_path}" alt="">
        <div class="overlay">
            <p class="flex">${item.original_title} <span class="rating">${item.vote_average}</span></p>
            <p class="overview">Overview:</p>
            <p class="para">${item.overview}</p>

        </div>
    </div>`
    moviebox.appendChild(box)
    })
}

document.querySelector("#search").addEventListener("keyup",function(event){
    if(event.target.value != ""){
        getMovies(SEARCHAPI+event.target.value)
        
    }else{
        getMovies(APIURL)
    }
})

getMovies(APIURL)
