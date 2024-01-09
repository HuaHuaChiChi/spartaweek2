const apiKey = '330346958be2b2153fc5ed862c58be36';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzAzNDY5NThiZTJiMjE1M2ZjNWVkODYyYzU4YmUzNiIsInN1YiI6IjY1OTY4ZTFkYTZjMTA0MGY5YmZhN2FiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4LnQfu2xxKboKwvHT5uiyxiHhy9f4OCjx1Ipa8o1v00'
  }
};

// 초기 데이터 로딩
window.onload = function () {
  loadInitialData();
};

// 영화 검색 함수
function searchMovies() {
  const searchTerm = document.getElementById('searchInput').value;
  const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;

      // 검색어가 있으면 검색
      const searchResults = searchTerm.trim() === '' //trim 문자열의 양 옆 공백을 지운다.
        ? movies
        : movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) //삼항연산자
        );

      // 검색 결과를 화면에 출력
      displayMovies(searchResults);
    })
    .catch(error => {
      console.error('에러 발생:', error);
    });
}

// // 검색어 입력 input 요소에 이벤트 리스너 추가
// document.getElementById('searchInput').addEventListener('keydown', function (event) {
//   // Enter 키의 keyCode는 13
//   if (event.key === 'Enter') {
//     event.preventDefault(); // 기본 동작 막기
//     searchMovies(); // 검색 함수 호출
//   }
// });

// 초기 데이터를 가져와 화면에 출력하는 함수
function loadInitialData() {
  searchMovies(); // 검색 함수를 호출하여 초기 데이터를 불러옵니다.
}

// 결과를 화면에 출력하는 함수
function displayMovies(response) {
  const cards = document.getElementById('cards');
  cards.innerHTML = ''; // 이전 검색 결과 지우기

  response.forEach(movie => {
    const { title, overview, poster_path, id, vote_average } = movie;

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

    cards.insertAdjacentHTML('beforeend', temp_html);
  });
}


//자동 스크롤 버튼
const upbtns = document.querySelector('.upbtn');
let scrolllength = 0;
console.log(upbtns);
window.addEventListener('scroll', function () {
  scrolllength = window.scrollY;
  // console.log(scrolllength);

  if (scrolllength > 570) {
    upbtns.style.display="block";
  } else {
    upbtns.style.display="none";
  }
});

upbtns.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  }); //매소드() 안에 객체(배열)
});
//업버튼을 지정해서 불러오고
//스크롤의 길이를 저장할 변수 scrolllength = window.scrollY 지정
//window.addeventListner('scroll',  function () {) 이벤트 감지 스크롤 했을때 스크롤의 길이를 측정
//스크롤 길이가 570을 넘어가면 업스크롤 아이콘 표시.
//업 버튼을 클릭했을 때 window.scrollTo 보내라 윈도우 스크롤을


//TIL 에다가 defur 안넣었을때 로딩 안되는 오류 작성하자..


