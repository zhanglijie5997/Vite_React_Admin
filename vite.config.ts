import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';
import gzip from 'rollup-plugin-gzip';
import legacy from '@vitejs/plugin-legacy';
// import { eslint } from 'rollup-plugin-eslint'
// import { eslint } from 'rollup-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        reactRefresh(),
        gzip(),
        legacy(),
    ],
    resolve: {
        alias: {
            '@page': path.resolve(__dirname, 'src/page'),
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@http': path.resolve(__dirname, 'src/http'),
            '@hook': path.resolve(__dirname, 'src/hook'),
        },
    },
    esbuild: {
        // jsxInject: `import React, { useState } from 'react'`,
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "./src/static/css/global.scss";`
            }
        },
        modules: {
            scopeBehaviour: 'local',
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
        https: false, // 启用 TLS + HTTP/2
        cors: true,// 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
        force: true, // 设置为 true 强制使依赖预构建
        proxy: {
            // string shorthand
            //   '/foo': 'http://localhost:4567/foo',
            // with options
            '/api': {
                target: 'https://dev.heybooks.net/',
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path, '99999')
                    return path.replace(/^\/api/g, '');
                }
            },
            // with RegEx
            '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
            }
        }
    },
    build: {
        assetsInlineLimit: 10240,
        manifest: true, // 构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
        rollupOptions: {
            // external: ['react'],
            // output: {
            //     globals: {
            //         React: 'react'
            //     }
            // }
        },
        terserOptions: {
            safari10: true, // 解决 Safari 10/11 循环范围和await. 见safari10在选择mangle 和format了解详细信息。
        }
    },

})
