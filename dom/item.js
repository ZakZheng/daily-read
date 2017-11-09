function item(data) {
  let item = ''
  let count = 0
  for (let objItem of data) {
    item +=
      `
  <div class="weui-cell weui-cell_warn">
      <div class="weui-cell__bd">
          <input 
          class="weui-input" 
          placeholder="${objItem.title ? objItem.title : key}" 
          @input="matchInput($event,${count},'${objItem.answer}')"
          >
      </div>
      <div class="weui-cell__ft" @click="openHint('${objItem.answer}')">
          <i class="weui-icon-warn"></i>
      </div>
  </div>
    `
    count++
  }
  return `<div class="weui-cells weui-cells_form" style="z-index:0" ref="form">${item}</div>`
}

module.exports = {
  item
}