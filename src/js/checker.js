/* eslint-disable no-undef */
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
    this.init();
    this.input = null;

    // for get result
    this.report = {};
  }

  /**
   * init checker.
   */
  init() {
    this.setting = _.extend(defaultSetting, this.setting);
    this.keyUp();
    console.log('pwdChecker is working');
  }
  /**
   * monitor input;
   */
  keyUp() {
    $('#pwdChecker').keyup(()=> {
      // skip specialkey
      if (window.event.keyCode > 40) {
        // run check.
        this.input = $('#pwdChecker').val();
        this.checkInput();
      }
    });
  }

  /**
   * run all check methods.
   */
  checkInput() {
    // skip null
    if ( '' != this.input ) {
      // must
      this.checkLength();
      this.checkExceptWords();
      this.checkExceptSpecialCharacter();
      this.checkEmailForm();

      // option
      if (this.setting.rule.specialCharacter) {
        this.checkSpecialCharacter();
      }

      if (this.setting.rule.character) {
        this.checkUpperCharacter();
        this.checkLowerCharacter();
      }
    }
  }

  /**
   * check length {min, max}.
   */
  checkLength() {
    const length = this.input.length;
    let result = false;

    if (this.setting.length.min <= length
        && length <= this.setting.length.max) {
      result = true;
    }
    this.report.checkLength=result;
  }

  /**
   * check except words.
   */
  checkExceptWords() {
    const exceptRule = _.join(this.setting.except.word, '|');
    this.report.noExceptWords = !(new RegExp(exceptRule).test(this.input));
  }

  /**
   * check except special character.
   */
  checkExceptSpecialCharacter() {
    const exceptRule =
      '[' + _.join(this.setting.except.specialCharacter, '') + ']';
    this.report.noExceptSpecialCharacter =
      !(new RegExp(exceptRule).test(this.input));
  }

  /**
   * check email form.
   */
  checkEmailForm() {
    this.report.noEmailForm =
      !(/(\w+\.)*\w+@(\w+\.)+[A-Za-z]+/.test(this.input));
  }

  /**
   * check special character used.
   */
  checkSpecialCharacter() {
    this.report.checkSpecialCharacter = /[#?!@$%^&*-]/.test(this.input);
  }

  /**
   * check upper character used.
   */
  checkUpperCharacter() {
    this.report.checkUpperCharacter = /[A-Z]/.test(this.input);
  }

  /**
   * check lower character used.
   */
  checkLowerCharacter() {
    this.report.checkLowerCharacter = /[a-z]/.test(this.input);
  }

  /**
   * check number uses.
   */
  checkNumber() {
    this.report.checkNumber = /[0-9]/.test(this.input);
  }

  /**
   * get check result.
   * @return {JSON} check result.
   */
  getResult() {
    return this.report;
  }
}

export default Checker;
