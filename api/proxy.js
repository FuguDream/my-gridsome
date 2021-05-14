/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 处理代理目标地址
  if (req.url.includes('/img')) {
    target = process.env.GRIDSOME_API_URL
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/img/': '/'
    }
  })(req, res)
}