# webpack

## environment

[https://webpack.js.org/guides/production/](https://webpack.js.org/guides/production/)

## HtmlWebpackPlugin

React 需要挂载 DOM, 使用自定义模版

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```js
{
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
}
```

## webpack-manifest-plugin

```js
{
  "plugins": [
    new WebpackManifestPlugin()
  ],
}
```

## resolve

```js
{
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: [".tsx", ".ts", ".js"],
  }
}
```

## output

```js
  output: {
    // 不同类型分文件夹保存,方便 nginx 设置缓存

    // 入口文件
    filename: "static/js/[name].[contenthash:8].js",

    // chunk 文件: node_modules单独打包vendor chunk
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",

    // 资源文件
    assetModuleFilename: "static/media/[name].[hash][ext]",

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
```

## loader

```js
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
```

## typescript

[https://webpack.js.org/guides/typescript/#root](https://webpack.js.org/guides/typescript/#root)

```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react-jsx",
    "allowJs": true,
    "moduleResolution": "node",
    "sourceMap": true
  }
}
```

## 资源类型声明文件

`import img from "./assets/image.png"`
直接导入资源报错,需要资源类型声明文件

```ts
// env.d.ts
declare module "*.jpg" {
  const src: string;
  export default src;
}

...

```
