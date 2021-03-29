import BaseInput from '../BaseInput/BaseInput.vue'

export default {
  name:'inputWithTest',
  components: {
    BaseInput
  },
  props: {
    value: { type: String, default: ''},
    type: { type: String, default: 'input'},
    errMsg: { type: String, default: '' },
    onBlur: { type: Function, required: true },
    onfocus: { type: Function, require: true },
    placeholder: { type: String, default: '' }
  }

}