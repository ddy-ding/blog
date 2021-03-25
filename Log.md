### 日志文件
3.16--完成ssr搭建和webpack搭建
### 盒模型
前端面试之盒子模型（标准盒模型、怪异盒模型）和 css3指定盒子模型种类的box-sizing属性------https://www.imooc.com/article/68238

### 问题二
问题描述:父组件中引入子组件的时候，当要触发子组件点击事件的时候@click不生效
问题解决：
1.@click.native
2.在子组件中添加this.$emit('事件名', value)方法讲子组件的值传到父组件中