function match() {
  let match =
    `
<script>
new Vue({
  el: '#app',
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    },
    matchInput ($event,index,val) {
      let _self = this.$refs.form.children[index]
      if(val.trim() === 'undefined'){
        this.replaceClass(_self, 'weui-cell_warn', 'weui-cell_success')
        this.replaceClass(_self.querySelectorAll('i')[0], 'weui-icon-warn', 'weui-icon-success')
      }
      else{
        if($event.target.value.trim() === val) {
          this.replaceClass(_self, 'weui-cell_warn', 'weui-cell_success')
          this.replaceClass(_self.querySelectorAll('i')[0], 'weui-icon-warn', 'weui-icon-success')
        }else{
          this.replaceClass(_self, 'weui-cell_success', 'weui-cell_warn')
          this.replaceClass(_self.querySelectorAll('i')[0], 'weui-icon-success', 'weui-icon-warn')
        }
      }
    },
    openHint(val) {
      this.$refs.js_dialog.style.transition = 'opacity .3s'
      this.$refs.hintMessage.zIndex = 10000
      this.$refs.hintMessage.innerText = val
      this.$refs.js_dialog.style.display = 'block'
      setTimeout(()=>{
        this.$refs.js_dialog.style.opacity = 1
      },20)
    },
    hideHint() {
      this.$refs.js_dialog.style.opacity = 0
      setTimeout(()=>{
        this.$refs.js_dialog.style.display = 'none'
      },300)
    },
    replaceClass(el, oldClass, newClass){
      let className = el.className
      let arr = className.split(' ')
      let index = arr.indexOf(oldClass)
      arr.splice(index,1,newClass)
      el.className = arr.join(" ")
    }
  }
})
</script>
`
  return match
}
module.exports = {
  match
}