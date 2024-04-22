const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/app.ts', // 진입점 설정
  output: {
    // 출력 파일 설정
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      // css 파일 처리
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // js 파일 babel 처리
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts$/, // .ts 파일 처리
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // .ts 확장자 명시
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HTML 파일 처리
      template: './src/index.html',
    }),
  ],
  devServer: {
    // 개발 서버 설정
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true, // 모든 경로를 index.html 로 리다이렉션
  },
};
