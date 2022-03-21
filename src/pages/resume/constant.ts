export const baseInfo = [
    {
        label: '工作年限',
        icon: 'icon-huaban',
        value: '5年工作经验'
    },
    {
        label: '所在地',
        icon: 'icon-diqu1',
        value: '北京'
    },
    {
        label: '电话',
        icon: 'icon-dianhua',
        value: '18829290522'
    },
    {
        label: '邮箱',
        icon: 'icon-youxiang3',
        value: '1466974660@qq.com'
    },
];

export interface EducationProps {
    [key: string]: any
}
export const educationInfo: EducationProps = {
    time: '2013/06 - 2017/06',
    schoolName: '西安邮电大学',
    major: '软件工程专业',
    certificate: '本科学历'
}

export const skills = [
    '熟悉并掌握 JavaScript 的基本技术，了解Typescript，掌握ES6以上常用语法',
    '熟练掌握 HTML5，CSS3 等技术的使用',
    '熟练掌握 React 框架的基本应用，擅长组件开发',
    '了解 Sass，Less 等 CSS 预处理器',
    '熟悉Ant Design 等主流 UI 库以及 Echarts，AntV 等图表库的使用',
    '熟练掌握 Webpack 的功能配置，对前端工程化有深刻理解',
    '具备小程序开发以及多端开发 Taro 框架的项目经验',
    '熟练掌握 Http 的基本工作原理以及常用 Web 开发调试工具',
    '熟练掌握 Git，拥有良好的 Git 操作习惯',
]

export const experience = [
    {
        time: '2018/06-2020/05',
        describe: '深圳市鹤麟珠宝有限公司',
        list: [
            {
                desc: '',
                own: '',
                technology: [
                    ' PC 端主要使用 Vue2 + iView 进行开发，实现项目的组件化开发与页面渲染',
                    '使用 Webpack 打包，插件的使用优化项目的性能，并且合理使用 Vuex 保存数据，减少非必要的请求',
                    '使用 Echarts 实现多个维度的数据分析，可视化更有助于直观的观察分析数据的变化',
                    '手机端手机短信验证码的接入和已有用户数据的绑定，以及文件上传 fileUploader 文件分片上传'
                ]
            }, {
                desc: '',
                own: '',
                technology: [
                    
                ]
            }
        ]
    }
]


