## defer

index.html 中的 script 会被加上 defer 属性

区别:

![./images/s1.png](./images/s1.png)
![./images/s1.png](./images/s2.png)
![./images/s1.png](./images/s3.png)

## 代码分离

1. 多入口
2. 防止重复
3. 动态导入

```json
// SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
{
  ...,
  "optimization": {
    "splitChunks": {
      "chunks": "all"
    }
  }
}
```

prefetch(预获取)：将来某些导航下可能需要的资源
preload(预加载)：当前导航下可能需要资源

preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。
preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。

```
import(/* webpackPreload: true */ 'ChartingLibrary');

```

## tree shaking

mode: production 默认启用

标记方法
`usedExports: true`
通过`pakage.json` 的`sideEffects: false`
注释 `/*#__PURE__*/`
