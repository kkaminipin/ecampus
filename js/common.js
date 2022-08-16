//탭메뉴1
const tabList = document.querySelectorAll('.apply .tab_menu .list li');
const contents = document.querySelectorAll('.cont_area .cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < tabList.length; j++) {
            // 나머지 버튼 클래스 제거
            tabList[j].classList.remove('is_on');

            // 나머지 컨텐츠 display:none 처리
            contents[j].style.display = 'none';
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');

        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
    });
}


//탭메뉴2
const tabList2 = document.querySelectorAll('.myCourse .tab_menu2 .list li');
const contents2 = document.querySelectorAll('.cont_area2 .cont');
let activeCont2 = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var i = 0; i < tabList2.length; i++) {
    tabList2[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < tabList2.length; j++) {
            // 나머지 버튼 클래스 제거
            tabList2[j].classList.remove('is_on');

            // 나머지 컨텐츠 display:none 처리
            contents2[j].style.display = 'none';
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');

        // 버튼 클릭시 컨텐츠 전환
        activeCont2 = this.getAttribute('href');
        document.querySelector(activeCont2).style.display = 'block';
    });
}