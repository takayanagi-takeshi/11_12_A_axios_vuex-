module.exports = {
  publicPath: './',//相対パス
  devServer: {//プロキシの設定
    proxy: 'https://opendata.corona.go.jp', 
  }
}