import $ from 'jquery';
import _ from 'lodash';
import defaultSetting from './setting';

// el 하고 소통하는거 실행시키는 로직이 들어가 있어야함.

/**
 * Check password rule.
 */
class Checker {
  /**
   * @param  {setting} setting User setting value.
   */
  constructor(setting) {
    this.setting = setting;
    this.init();
  }

  /**
   * init checker.
   */
  init() {
    this.setting = _.extend(defaultSetting, this.setting);
    // eslint-disable-next-line no-undef
    console.log(this.setting);

    this.keyUp();
  }
  /**
   * monitor input;
   */
  keyUp() {
    $('#pwdChecker').keyup(()=> {
      // skip enter key.
      // eslint-disable-next-line no-undef
      if (window.event.keyCode != 13) {
        // run check.
        this.onKey();
      }
    });
  }

  /**
   * onkey function.
   */
  onKey() {
    const input = $('#pwdChecker').val();
    // skip null
    if ( '' != input ) {
      // eslint-disable-next-line no-undef
      console.log($('#pwdChecker').val());
    }
  }
}

export default Checker;
