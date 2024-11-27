import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    "/zh/guide/",
    "/zh/start/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/zh/",
        children: [
            {
                text: "开始",
                icon: "lightbulb",
                prefix: "start/",
                children: ["", "join", "download"],
            },
            {
                text: "指南",
                icon: "lightbulb",
                prefix: "guide/",
                children: ["", "config-change"],
            },
            {
                text: "功能",
                icon: "sitemap",
                prefix: "features/",
                children: [""],
            },

        ],

    }, "/zh/others/ap.html",{
        text: 'CDN推荐', // 导航栏显示的文字
        link: 'https://kuncdn.com' // 导航链接指向的友链地址
    },
]);
