webpackJsonp([155],{2142:function(t,e){t.exports={content:["section",["p","通过鼠标或键盘输入内容，是最基础的表单域的包装。"],["h2","何时使用"],["ul",["li",["p","需要用户输入表单域内容时。"]],["li",["p","提供组合型输入框，带搜索的输入框，还可以进行大小选择。"]]]],meta:{category:"Components",subtitle:"输入框",type:"Data Entry",title:"Input",filename:"components/input/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Input"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","addonAfter"],["td","带标签的 input，设置后置标签"],["td","string","|","ReactNode"],["td"]],["tr",["td","addonBefore"],["td","带标签的 input，设置前置标签"],["td","string","|","ReactNode"],["td"]],["tr",["td","defaultValue"],["td","输入框默认内容"],["td","string"],["td"]],["tr",["td","disabled"],["td","是否禁用状态，默认为 false"],["td","boolean"],["td","false"]],["tr",["td","showPasswordEye"],["td","是否显示type为password的俺就按住显示密码的眼睛，默认为 false"],["td","boolean"],["td","false"]],["tr",["td","id"],["td","输入框的 id"],["td","string"],["td"]],["tr",["td","prefix"],["td","带有前缀图标的 input"],["td","string","|","ReactNode"],["td"]],["tr",["td","size"],["td","控件大小。注：标准表单内的输入框大小限制为 ",["code","large"],"。可选 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","suffix"],["td","带有后缀图标的 input"],["td","string","|","ReactNode"],["td"]],["tr",["td","type"],["td","声明 input 类型，同原生 input 标签的 type 属性，见：",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性"},"MDN"],"(请直接使用 ",["code","Input.TextArea"]," 代替 ",["code",'type="textarea"'],")。"],["td","string"],["td",["code","text"]]],["tr",["td","value"],["td","输入框内容"],["td","string"],["td"]],["tr",["td","onPressEnter"],["td","按下回车的回调"],["td","function(e)"],["td"]],["tr",["td","copy"],["td","显示复制按钮"],["td","boolean"],["td","false"]],["tr",["td","onCopy"],["td","点击复制按钮的回调"],["td","function(copyValue)"],["td"]],["tr",["td","underline"],["td","input 下划线"],["td","boolean"],["td","true"]]]],["blockquote",["p","如果 ",["code","Input"]," 在 ",["code","Form.Item"]," 内，并且 ",["code","Form.Item"]," 设置了 ",["code","id"]," 和 ",["code","options"]," 属性，则 ",["code","value"]," ",["code","defaultValue"]," 和 ",["code","id"]," 属性会被自动设置。"]],["p","Input 的其他属性和 React 自带的 ",["a",{title:null,href:"https://facebook.github.io/react/docs/events.html#supported-events"},"input"]," 一致。"],["h3","Input.TextArea"],["blockquote",["p",["code","2.12"]," 后新增的组件，旧版请使用 ",["code","Input[type=textarea]"],"。"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","autosize"],["td","自适应内容高度，可设置为 ",["code","true|false"]," 或对象：",["code","{ minRows: 2, maxRows: 6 }"]],["td","boolean","|","object"],["td","false"]],["tr",["td","defaultValue"],["td","输入框默认内容"],["td","string"],["td"]],["tr",["td","value"],["td","输入框内容"],["td","string"],["td"]],["tr",["td","onPressEnter"],["td","按下回车的回调"],["td","function(e)"],["td"]]]],["p",["code","Input.TextArea"]," 的其他属性和浏览器自带的 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},"textarea"]," 一致。"],["h4","Input.Search"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","enterButton"],["td","是否有确认按钮，可设为按钮文字"],["td","boolean","|","ReactNode"],["td","false"]],["tr",["td","onSearch"],["td","点击搜索或按下回车键时的回调"],["td","function(value)"],["td"]]]],["p","其余属性和 Input 一致。"],["h4","Input.Group"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","compact"],["td","是否用紧凑模式"],["td","boolean"],["td","false"]],["tr",["td","size"],["td",["code","Input.Group"]," 中所有的 ",["code","Input"]," 的大小，可选 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]]]],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input.Group</span><span class="token punctuation">></span></span>'},["code","<Input.Group>\n  <Input />\n  <Input />\n</Input.Group>"]]]}}});