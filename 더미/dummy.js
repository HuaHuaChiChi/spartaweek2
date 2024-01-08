const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzAzNDY5NThiZTJiMjE1M2ZjNWVkODYyYzU4YmUzNiIsInN1YiI6IjY1OTY4ZTFkYTZjMTA0MGY5YmZhN2FiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4LnQfu2xxKboKwvHT5uiyxiHhy9f4OCjx1Ipa8o1v00",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => moviesapi(response.results))
  .then((response) => moviesearch(response))
  .catch((err) => console.error(err));

function moviesapi(response) {
  // 무비api에 들어오는 매개변수 (response)
  response.forEach((v) => {
    // 데이터 배열을 배분해라 매개변수 v의 노드를
    let cards = document.getElementById("cards"); //html 에 부여한 아이디값 "cards"를 자바스크립트와 연결해주었다.
    const { title, overview, poster_path, id, vote_average } = v;

    const temp_html = `
            <div onclick="alert('id : ${id}')" class="col">
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${vote_average}</p>
                    <p class="card-text">${overview}</p>
                </div>
            </div>
        </div>`;

    cards.insertAdjacentHTML("beforeend", temp_html); //기준 요소에(html)에 지정한 아이디 값에 temp한다.
  });
}
