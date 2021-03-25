export default {
  computed: {
    parentPath() {
      const temp = this.$route.params.parentPath
      if(temp) {
        return temp
      }
      return ''
    }
  },
  mounted() {
    console.log('this.$route.params',this.$route)
  }
}