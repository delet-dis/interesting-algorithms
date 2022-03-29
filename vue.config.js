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
                //Compressed code
                compact: true,
                //Whether to enable control flow flattening (reduce the running speed by 1.5 times)
                controlFlowFlattening: false,
                //Random dead code blocks (increasing the size of obfuscated code)
                deadCodeInjection: false,
                //This option makes it almost impossible to use the console tab of the developer tool
                debugProtection: false,
                //Disable console.log, console.info, console.error, and console.warn by replacing them with empty functions. This makes the use of the debugger more difficult.
                disableConsoleOutput: true,
                //The confusion of identifiers is hexadecimal (hexadecimal) mangled (short identifier)
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                //Enable obfuscation of global variables and function names
                renameGlobals: false,
                //Move the array through fixed and random positions (generated when code is confused). This makes it more difficult to match the order of deleted strings with their original positions. If the original source code is not small, this option is recommended because auxiliary functions can attract attention.
                rotateStringArray: true,
                //The confused code cannot be beautified with code, and cpmpat: true needs to be configured;
                selfDefending: true,
                //Delete string literals and place them in a special array
                stringArray: true,
                stringArrayThreshold: 0.75,
                //Enables / disables string conversion to unicode escape sequences. Unicode escape sequences greatly increase code size and can easily restore strings to their original view. It is recommended that you enable this option only for small source code.
                unicodeEscapeSequence: false
            }, [])
        ]
    } : {},
})
