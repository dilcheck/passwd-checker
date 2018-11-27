/* eslint-disable no-useless-escape */
import _ from 'lodash';
// setting env.
const defaultSetting = {};

// length.
defaultSetting.length = {};
defaultSetting.length.minLength = 8;
defaultSetting.length.maxLength = 20;

// rule.
defaultSetting.rule = {};
defaultSetting.rule.specialCharator = 1;
defaultSetting.rule.lowerChar = 1;
defaultSetting.rule.upperChar = 1;

// continuty
defaultSetting.continuty = 3;

// except
defaultSetting.except = {};
defaultSetting.except.specialCharator = ['<', '>',
  '(', ')', '#', '\'', '/', '|'];
defaultSetting.except.word = ['love', 'happy', 'qwer',
  'asdf', 'zxcv', 'test', 'gpin', 'ipin'];

// check regular expression
defaultSetting.reg = {};
defaultSetting.reg.upperChar = '(?=.*?[AZ])';
defaultSetting.reg.lowerChar = '(?=.*?[az])';
defaultSetting.reg.specialCharator = '(?=.*?[#?!@$%^&*-])';
defaultSetting.reg.length = '.{' + defaultSetting.length.minLength +
 ',' + defaultSetting.length.maxLength + '}';
defaultSetting.reg.exceptWord = '/' +
  _.join(defaultSetting.except.word, '|') + '/';
defaultSetting.reg.exceptSpecialChar = '/[' +
  _.join(defaultSetting.except.specialCharator, '') + ']/';
defaultSetting.reg.exceptEmail = '(\w+\.)*\w+@(\w+\.)+[A-Za-z]+';

export default defaultSetting;

// 정규표현식 bucket /^ $/
