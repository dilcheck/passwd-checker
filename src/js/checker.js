import $ from 'jquery';
import _ from 'lodash';
import defaultSetting from './setting';

/**
 * Check password rule.
 */
class Checker {
  /**
   * @param  {setting} setting User setting value.
   */
  constructor(setting) {
    this.setting = setting;
  }

  /**
   * init checker.
   */
  init() {
    this.setting = _.extend(defaultSetting, this.setting);
    // eslint-disable-next-line no-undef
    console.log(this.setting);
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
