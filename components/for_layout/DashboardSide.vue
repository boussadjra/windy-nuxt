<template>
<div class="h-full w-full min-h-screen bg-gray-200 dark:bg-black-700 text-black-700 dark:text-black-100">
    <h1 class="text-4xl font-bold text-purple-900 dark:bg-black-700 h-16 flex items-center justify-center">
        <template v-if="collapsed">
            <router-link to="/">WN</router-link>
        </template>
        <template v-else>
            <router-link to="/">
                <span class="transition-all duration-700" :class="{ 'w-0 opacity-0': collapsed }">
                    WINDYNUXT
                </span>
            </router-link>
        </template>
    </h1>

    <div class="p-2">
        <ul class="">
            <li v-for="(item, i) in routes" @click="expandedItem = expandedItem === i ? -1 : i; $emit('collapse')" :key="i" class="p-3 cursor-pointer w-full">
                <div class="flex space-x-2 items-center w-full" :class="{ 'justify-center': collapsed }">
                    <component :is="item.name.replace(' ', '')" />
                    <template v-if="!collapsed">
                        <span class="transition-all duration-700" :class="{ 'w-0 opacity-0': collapsed }">{{ item.name }}</span>

                        <span v-if="item.children" class="justify-self-end">
                            <caret-right />
                        </span>
                    </template>
                </div>
                <transition name="slide-fade">
                    <ul class="flex flex-col pl-4" :class="{ 'absolute z-10 w-64': collapsed }" v-if="item.children && expandedItem === i" @click.stop="">
                        <li v-for="(subitem, j) in item.children" :key="j" class="p-3">
                            <nuxt-link :to="subitem.path">
                                <div class="flex space-x-2 items-center">
                                    <component :is="subitem.name.replace(' ', '')" />

                                    <span>{{ subitem.name }}</span>
                                </div>
                            </nuxt-link>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import CaretRight from "../icons/CaretRight.vue";
// import Vue3RouterTree from "vue3-router-tree";
import IconDashboard from "../icons/IconDashboard";
import IconDirectionSharpTurn from "../icons/IconDirectionSharpTurn";
import IconEmail from "../icons/IconEmail";
import IconEmailNew from "../icons/IconEmailNew";
import IconLicenseDraft from "../icons/IconLicenseDraft";
import IconModel from "../icons/IconModel";
import IconRadioButton from "../icons/IconRadioButton";
import IconSend from "../icons/IconSend";
import IconUserAvatar from "../icons/IconUserAvatar";
import IconWarningAlt from "../icons/IconWarningAlt";

export default {
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        expandedItem: -1,
        routes: [{
                path: "/admin",
                name: "Dashboard",
                hasIcon: true,

                info: "updated",
            },
            {
                path: "/admin/components",
                name: "Components",
                info: "+5",
                hasIcon: true,
                children: [{
                        path: "/admin/components/alerts",
                        name: "Alerts",
                    },
                    {
                        path: "/admin/components/avatars",
                        name: "Avatars",
                    },
                    {
                        path: "/admin/components/badges",
                        name: "Badges",
                    },
                    {
                        path: "/admin/components/breadcrumbs",
                        name: "Breadcrumbs",
                    },
                    {
                        path: "/admin/components/buttons",
                        name: "Buttons",
                    },
                    {
                        path: "/admin/components/cards",
                        name: "Cards",
                    },
                    {
                        path: "/admin/components/chips",
                        name: "Chips",
                    },
                    {
                        path: "/admin/components/icons",
                        name: "Icons",
                    },
                    {
                        path: "/admin/components/tabs",
                        name: "Tabs",
                    },
                ],
            },
            {
                path: "/admin/mail",
                name: "Mail",
                hasIcon: true,

                children: [{
                        path: "/admin/mailinbox",
                        name: "Inbox",
                    },
                    {
                        path: "/admin/mail/sent",
                        name: "Sent",
                    },
                    {
                        path: "/admin/mail/draft",
                        name: "Draft",
                    },
                ],
            },
        ],
    }),
    computed: {},
    methods: {},
    components: {
        CaretRight,
        Dashboard: IconDashboard,
        Components: IconModel,
        Mail: IconEmail,
        Inbox: IconEmailNew,
        Sent: IconSend,
        Draft: IconLicenseDraft,
    },
    mounted() {},
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease-out;
    max-height: 1000px;
}

.slide-fade-enter,
.slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
