### 스파르타 코딩클럽(react)의 2주차 개인과제입니다.
- 필수요구사항 만족여부
    -   순수 바닐라 자바스크립트 사용
    -   TMDB API 사용하여 데이터 가져오기
    -   영화 카드리스트 UI 구현
    -  영화 검색 UI 구현
    -   const, let 만을 이용한 변수 선언
    -   화살표 함수 사용
    -   배열 메소드 2개 이상 사용 : reduce, filter
    -   DOM 제어 API 2개 이상 사용: getElementsByClassName, innerHTML
    
  
  위의 사항을 만족하며 제작된 프로젝트입니다.
  
###   메인 페이지
![](https://velog.velcdn.com/images/ksksks102/post/40a4b0f9-f246-459c-9d5f-d34b7ae059a3/image.png)
상단의 "스파르타 영화명작" 을 누르면 새로고침이 되게 하였고.
검색창과 검색하기는 from 속성을 가져, 검색하기 버튼을 클릭 또는 엔터키를 누르면 작동하게 되어 있습니다.

api는 TMDB의 top rated 영화 목록을 가져와 사용하였습니다.
<br>
<br>
**검색기능**
![](https://velog.velcdn.com/images/ksksks102/post/89aa4ee5-7c8f-4c81-a12e-382743910db8/image.png)

<br>
<br>

**검색과 출력**

![](https://velog.velcdn.com/images/ksksks102/post/b1fc014c-de3b-4c85-a825-b9be6a2d7890/image.png)

![](https://velog.velcdn.com/images/ksksks102/post/21675445-451a-417a-8797-ceda58c2b843/image.png)

처음 페이지가 로딩되었을땐 displayMovies함수의 매개변수에 api 전체가 들어가 모든 영화정보를 출력하고.
제목 검색란에 제목을 입력하고 검색을 하면 displayMovies함수의 매개변수에 내가 검색한 영화 제목이 포함된 영화들의 api를 불러와 출력하게 된다.

검색하기 용이하게 toLowerCase매서드를 추가해 대소문자의 구분을 하지 않게 만들었다.

### 추가구현

**자동스크롤**

![](https://velog.velcdn.com/images/ksksks102/post/66be63c5-7f2b-45cf-b7bf-2acc1beb4f4c/image.png)

![](https://velog.velcdn.com/images/ksksks102/post/c657518f-9389-4fdf-9e7b-5aec0d9291a5/image.png)

스크롤의 길이를 감지해 상단으로 올라가게 만들어주는 버튼을 표시할 수 있게 만들어 주었다.
버튼을 누르면 페이지의 최상단으로 이동한다.

**포멧**

![](https://velog.velcdn.com/images/ksksks102/post/472ada88-ff7b-41d1-9c3a-0327739e0525/image.png)

reset.css 파일을 추가해 어떤 브라우저에서도 동일한 페이지를 볼 수 있게 설정해놓았다.
