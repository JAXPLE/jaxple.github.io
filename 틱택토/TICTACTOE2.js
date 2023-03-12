const size = 3; // 맵의 크기를 설정할 변수
let turn = 1; // 턴을 관리할 변수(1이 X, 2가 O)
let win = 0; // 승리 여부를 관리할 변수(0이면 진행 중, 1이면 X 승리, 2이면 O 승리, 3이면 무승부)
let cnt = 0; // 무승부를 판단할 카운터 변수

// 게임 보드를 표시할 루트 요소의 참조를 쿼리설렉터로 가져온다.
// 해당 root는 클래스이므로, ".root"으로 가져온다.
const root = document.querySelector(".root");

// 맵 요소를 생성한다.
const map = document.createElement("div");

// 맵 요소의 이름을 "map"으로, class 이름을 "map"으로 설정한다.
map.setAttribute("class", "map");

// 맵 설정 메소드 실행
setMap();

// 맵을 설정하는 함수
function setMap() {
  // 3x3으로 반복: 매 칸마다 작동하는 칸을 생성
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // 매번 만들 아이디를 "iXj"로 만든다(변할 일 없으므로 const)
      const id = `y${i} x${j}`;
     
      // 박스라는 div(구획)요소를 하나 만든다.
      const box = document.createElement("div");
     
      // 박스의 고유 id에 직전에 만든  id를 할당한다.
      box.setAttribute("id", id);
     
      // 박스의 이름을 class. 공통 속성을 box로 설정
      box.setAttribute("class", "box");
    
      // 박스 구획마다 이벤트리스터 생성(조건: 클릭)
      box.addEventListener("click", () => {
        // 비어있는 공간이 아니거나, 누가 승리했으면 반환
        if (box.textContent !== "" || win !== 0) return;
        
        // 턴이 1이면 X로, 2면 O로 표기 후 turnflip 메소드와 유사하게 진행
        if (turn === 1) {
          box.textContent = "X";
          turn = 2;
        } else {
          box.textContent = "O";
          turn = 1;
        }
        
        // 체크가 끝난 뒤 승리 조건 확인 메소드를 실행
        checkWin();
        
        // 무승부 체커
        cnt++;
      });
      
      // 맵 마지막에 박스를 삽입(반복문이니 3회 반복)
      map.append(box);
    }
  }
  
  // root에 맵을 삽입(이 또한 반복문이니 3x3회)
  root.append(map);
}

//reset 버튼 요소를 참조
const button = document.querySelector(".button");

//버튼 클릭시 reset 메소드 실행
button.addEventListener("click", () => {
    reset();
});

//reset 메소드: turn, win 초기화 및 페이지 리로드
function reset(){
    turn=1;
    win=0;
    // location.reload()는 JavaScript에서 현재 페이지를 다시로드하는 메서드입니다. 이 메서드를 호출하면 브라우저는 현재 페이지를 새로 고치고 캐시를 무시하여 서버에서 새로운 데이터를 가져옵니다. 이를 통해 페이지의 내용을 갱신하거나 데이터 변경을 적용할 수 있습니다.
    location.reload();
}
