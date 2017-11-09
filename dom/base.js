let match = require('./script').match()

function html(option) {
  let dom =
    `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 引入样式 -->
    <title>${option.today ? option.today : new Date()}---考试</title>
    <link href="../lib/style.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="app">
      ${option.item ? option.item : '请配置created.json'}
      <div class="js_dialog" @click="hideHint" ref="js_dialog" style="display: none; opacity: 0">
          <div class="weui-mask"></div>
          <div class="weui-dialog">
              <div class="weui-dialog__bd" ref="hintMessage"></div>
              <div class="weui-dialog__ft">
                  <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
              </div>
          </div>
      </div>
    </div>
  </body>
  <!-- 先引入 Vue -->
  <script src="../lib/vue.min.js"></script>
  <!-- 引入组件库 -->
  <script src="../lib/index.js"></script>
  
  ${match ? match : '请配置script.js'}
</html>
`
  return dom
}


module.exports = {
  html
}