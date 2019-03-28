// 获取组件路径
const context = require.context('./', true, /\.vue$/);

// 返回组件列表
const components = context.keys().map(url => {
    return require(`${url}`).default
})

const install = function (Vue) {
    components.forEach(obj => {
        Vue.component(obj.name, obj);
    })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default {
    install
};