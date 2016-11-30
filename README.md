小项目使用扁平的文件结构

  * components
  * contianers
  * etc

这种结构伸缩性不好，随着项目增长，会影响开发效率

从第一天开始，就使用Fractal项目结构，项目驱动架构，但是保持store扁平

```
  components    全局复用的展示组件
  containers    全局复用的容器组件
  layouts       页面结构
  routes        路由
  store         扁平的state
  styles        全局复用的样式
  index.html    入口html
  index.js       入口js
```
