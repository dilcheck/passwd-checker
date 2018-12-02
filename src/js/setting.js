// setting env.
const defaultSetting = {};

// length.
defaultSetting.length = {};
defaultSetting.length.min = 9;
defaultSetting.length.max = 16;

// rule.
defaultSetting.rule = {};
defaultSetting.rule.specialCharacter = true;
defaultSetting.rule.character = true;
defaultSetting.rule.number = true;

// except
defaultSetting.except = {};
defaultSetting.except.specialCharacter = ['<', '>',
  '(', ')', '#', '\'', '/', '|'];
defaultSetting.except.word = ['love', 'happy', 'qwer',
  'asdf', 'zxcv', 'test', 'gpin', 'ipin'];

export default defaultSetting;
