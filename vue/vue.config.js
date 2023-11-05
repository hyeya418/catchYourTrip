// vue기본 설정
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// spring프로젝트와 연동
module.exports = {
    outputDir: "../src/main/resources/static",
    devServer: {
        port: 8091,
        proxy: {
            '/example': {
                // '/api'로 들어오면 포트 8090(스프링 서버)로 보낸다.
                target: 'http://localhost:8090',
                changeOrigin: true // cross origin 허용
            }
        }
    }
};