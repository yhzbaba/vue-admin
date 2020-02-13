## 安装vue3.0脚手架

```
安装淘宝镜像cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

```
全局安装vue-cli3.0脚手架
npm install -g @vue/cli
卸载
npm uninstall vue-cli -g
2.0对3.0版本的桥接
npm install -g @vue/cli-init
```

```git
选中就是复制，shift+insert就是粘贴
创建并进入分支：
git checkout -b feature-vueAdmin-V1,0,0-20200211
```

## 构建项目

```
vue create vue-admin
```

```
Babel								编译es6--->es5
TypeScript							js超集
Progressive Web App(PWA) Support	渐进式web应用
Router								VUE路由
Vuex								VUE状态管理(仓库)
CSS Pre-processors					CSS预编译器
Linter/Formatter					代码检测和格式化
Unit Testing						单元测试
E2E Testing							端对端测试,属于黑盒测试
```

```
路由模式有两种，hash、history
hash-即地址栏URL中的#符号，如：http://www.abc.com/#/hello
history-利用了HTML5 History Interface中新增的pushState()和replaceState()方法。这就是如何取出URL中的#的方法，此方法需要后端Apache或Nginx进行简单的路由配置，否则404
如果在意#，就用history，如果不在意就用hash
```

```
3.x目录
1 去除了static、config、build
2 新增了public
3 自动依赖node_modules
4 默认配置微博pack、通过vue.config.js修改
5 vue.inspect可查看webpack默认配置
6 内置了vue-cli-service serve服务
7 浏览器打开图形界面、vue ui查看
```

## element-ui

```
安装
npm i element-ui -S

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
```

## git提交部分

```git
查看状态
git status
添加所有文件
git add .
拉取
git pull
推送
git push
```

## vue文件规则

```
固定的三块内容
template、script、style

template
必须有一层父元素，否则报错

<script>
export defaut{
  name:'home',	//当前的名称
  components:{},//组件，有引入组件的时候放置组件名称
  data(){
  	//数据、v-model绑定数据使用
  }，
  created(){},	//创建完成时
  mounted(){},	//挂载完成时
  methods:{},	//定义函数
  props:{},
  watch:{}		//子组件接收父组件参数
}
</script>

style
lang="scss"		//写入类型
scoped			//当前有效
```

```vue
v-for
基础模式
<div v-for="item in items" :key="item.id">
    {{item.text}}
</div>

带索引
<div v-for="(item,index) in items" :key="item.id">
    {{item.text}}
</div>
```

```vue
v-bind绑定属性
绑定方式：v-bind:class或:class
```

### class的几种绑定方式

#### 最简单的绑定

```vue
:class="{active:isActive}"
```



#### 判断是否绑定一个active

```vue
:class="{active:isActive == 1}"
或
:class="{active:isActive == index}"
```



#### 绑定并判断多个

```vue
第一种(用逗号隔开)
:class="{active: isActive, sort: isSort}"
第二种(放在data里面)
:class="classObject"
data(){
  return{
	classObject:{active: true, sort: false}
  }
}
第三种(使用computed属性)
:class="classObject"
data(){
  return{
	isActive: true,
	isSort: false
  }
},
computed:{
  classObject: function(){
	return {
	  active:this.isActive,
	  sort:this.isSort
	}
  }
}
```

```vue
v-model
在表单控件或者组件上创建双向绑定
input select textarea component
```

```vue
v-show与v-if
v-show:在元素中添加display,隐藏DOM元素
v-if:直接删除DOM元素。DOM元素有接口且v-if为true时，会请求接口。
```





## 基础数据、引用数据类型

基础类型 按值访问

undefined number null boolean string

引用类型

object Array function

## Vue3.0

主要特点 响应式、模板、对象式的组件声明方式

### Vue Composition API(原Vue Function API)

```
安装依赖
npm install @vue/composition-api -D
```

### setup函数

一个新的Vue组件选项，是用于在组件中使用Compsition API的入口

```vue
export default{
	setup(props,context){
		context.attrs
		context.slots
		context.parent
		context.root
		context.emit
		context.refs
		...
	}
}
```

### reactive

取得一个对象并返回原始对象的响应数据处理

```vue
const obj = reactive({count:0});
```

### ref

声明基础类型变量使用

内部值并返回一个响应性且可变的ref对象，ref对象具有value指向内部值的单个属性

```vue
const number = ref(0);
```

获取值：number.value

### isRef toRefs

```vue
const model = ref("login");
console.log(model.value);

console.log(isRef(model) ? "是基础数据" : "是对象类型");
function useMousePosition() {
const obj = reactive({
		x: 0,
		y: 1
	});
	return toRefs(obj);
}
const { x, y } = useMousePosition();
console.log(x, y);
```

### 2.x生命周期选项与Composition API之间的映射

```
beforeCreate---------->setup
created--------------->setup
beforeMount----------->onBeforeMount
mounted--------------->onMounted
methods--------------->去除，用普通方式写方法
beforeUpdate---------->onBeforeUnmount
destroyed------------->onUnmounted
errorCaptured--------->onErrorCaptured
```

```
新的调试挂钩：
onRenderTracked
onRenderTriggered
两个钩子都收到DebuggerEvent类似于onTrack和onTrigger
```

























