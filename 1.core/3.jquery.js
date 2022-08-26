$('myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라.
// * 요구사항에서 객체에 집중하기!
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li')
// 과제: 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/

$('a.external:first') // 첫번째 class
/*
<a class='external'></a>
<a class='external'></a>
*/

$('tr:odd')
/*
<tr/>-- // 줄 수가 아닌 생성된 순서 기준이다.
<tr/>
<tr/>--
*/

$('div:visible')

$('div:gt(1)') // 1번째 index보다 큰거부터 (0,1,2)
/*
<div></div>
<div></div>
<div></div>
*/

$('div:animated')

$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') // foo class가 있는 div를 찾고 그 중에 p를 갖고 있는 객체를 찾자.
// has 다음에 나오는 para는 자식이다.
/*
<div class ='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.currnet') // li에서 current class(속성)을 갖고있는 것 들을 골라낸다.
/*
<ul>
    <li class ='current'></li>
    <li></li>
</ul>
*/

$('ul li').not('.currnet') 
// li에서 current class(속성)을 갖고있지 않은 것. 64와 반의
//<li>중에 <li class='current'>가 없는 element를 찾아라.

$('ul li').eq(1) 
//1번 index를 찾아라. (0~n)
// function이 return하는 것은 collection이다!

$('form :button')
/*
    <form>
        <button></button>
        <input type='button'>
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked') // 마우스로 입력하는 것중 체크된 것
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :intput')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit></button>
*/

$('form :text') // <input type='text'/>

$('form :password') //<input type='password'/>

$('form input[name="gender"]:radio') // ':'앞의 스페이스는 자식관계 유무로 결정된다.
/*
// 과제: 위 selector 에 해당하는 HTML code 를 작성하라.
<input type='radio' name='gender'/>
*/

$('form :reset') // <input type='reset'/>

$('form: submit') // <input type='submit'/>