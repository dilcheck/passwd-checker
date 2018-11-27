import test from './test'
import _ from 'lodash'

class Entry {
  constructor (msg) {
    this.msg = msg
  }
  
  hello() {
    test.test()
  }

  test() {
    console.log(this.msg)
  }
}

console.log(_.join(['a', 'b', 'c'], '~'))
var entry = new Entry("test")
entry.test()