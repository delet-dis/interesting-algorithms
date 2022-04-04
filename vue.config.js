const {defineConfig} = require('@vue/cli-service')
const JavaScriptObfuscator = require('webpack-obfuscator');
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: "docs",
    publicPath: process.env.NODE_ENV === 'production'
        ? '/interesting-algorithms/'
        : '/',
    productionSourceMap: false,
    configureWebpack: (process.env.NODE_ENV === 'production') ? {
        plugins: [
            new JavaScriptObfuscator({
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                debugProtection: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                renameGlobals: false,
                rotateStringArray: true,
                selfDefending: true,
                stringArray: true,
                stringArrayThreshold: 0.75,
                unicodeEscapeSequence: false
            }, [])
        ]
    } : {},

    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
})
