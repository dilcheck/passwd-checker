import $ from 'jquery';
import Checker from './checker';

// 환경셋팅 받아오는 로직 구성해야함 customize

const checker = new Checker();
checker.init();

// el 하고 소통하는거 실행시키는 로직이 들어가 있어야함.
// 정의 및 실행하는 로직.
$('#pwdChecker').keyup(()=> {
  // skip enter key.
  // eslint-disable-next-line no-undef
  if (window.event.keyCode != 13) {
    // run check.
    checker.onKey();
  }
});
