const {defineConfig} = require('@vue/cli-service')
const JavaScriptObfuscator = require('webpack-obfuscator');
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: "docs",
    publicPath: process.env.NODE_ENV === 'production'
        ? '/interesting-algorithms/'
        : '/',
    productionSourceMap: false,

    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
})
