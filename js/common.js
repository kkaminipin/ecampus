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
let activeCont2 = ''; 

for (var i = 0; i < tabList2.length; i++) {
    tabList2[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < tabList2.length; j++) {
            tabList2[j].classList.remove('is_on');

            contents2[j].style.display = 'none';
        }

        this.parentNode.classList.add('is_on');

        activeCont2 = this.getAttribute('href');
        document.querySelector(activeCont2).style.display = 'block';
    });
}

// 테스트 시작
//검색 정제 (번지 빼기, 띄어쓰기)
function regExpCheckJuso(strKeyword)
{
	var tempKeyword = strKeyword;
	var charKeyword;  
	var tempLength;
	
	//주소일 경우 글자뒤에 번지 x, 주소와 숫자 사이에 한칸 띄우기
	var reqExp1 =/([0-9]|번지)$/;
	var reqExp2 =/번지$/;
	var checkChar =/^([0-9]|-|\.|\·)$/;
	var checkEng =/^[A-Za-z]+$/;

	if(reqExp1.test(strKeyword))
	{
		// 글자 뒤의 번지 삭제
		tempKeyword = strKeyword.split(reqExp2).join("");

		// 주소와 숫자 사이 한칸 띄우기
		tempLength = tempKeyword.length;

		for(var i=tempLength-1;i>=0;i--)
		{
			charKeyword = tempKeyword.charAt(i);
			
			if(!checkChar.test(charKeyword))
			{
				if(charKeyword != " " && !checkEng.test(charKeyword))
				{
					tempKeyword = insertString(tempKeyword,i+1,' ');			
				}
				break;
			}
		}
	}
	
	var regExp3 = /[0-9]*[ ]*(대로|로|길)[ ]+[0-9]+[ ]*([가-힝]|[ ])*[ ]*(로|길)/;
	var regExp4 = /[ ]/;

	var k = tempKeyword.match(regExp3) ;
	
	if (k != null) {
		var tmp = k[0].split(regExp4).join("");
		
		tempKeyword=tempKeyword.replace(regExp3, tmp);
	}
	
	return tempKeyword;
}

function insertString(key,index,string)
{
	if(index >0)
		return key.substring(0,index) + string + key.substring(index,key.length);
	else
		return string+key;
}
function validateJuso(value){
	value =value.replace(/(^\s*)|(\s*$)/g, ""); //앞뒤 공백 제거
  	return value.split(/[%]/).join("");  //특수문자제거
}





