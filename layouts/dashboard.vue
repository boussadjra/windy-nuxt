<template>
<div class="layout fixed-header fixed-sidebar has-sidebar min-h-screen text-black-700 relative" v-bind:class="{ rtl }">
    <aside class="sidebar break-point-md min-h-screen bg-gray-100 dark:bg-black-700" @collapse="setCollapsed" v-bind:class="{ collapsed, toggled }">
        <dashboard-side :collapsed="collapsed"></dashboard-side>

    </aside>
    <div class="overlay" v-on:click="setToggled()"></div>
    <div class="layout">
        <header class="header  bg-gray-50 dark:bg-black-700 shadow-sm" :class="{'header-expanded':collapsed}">
            <dashboard-header @collapse-sidebar="setCollapsed" @toggle-rtl="setRTL" :rtl="rtl" :sidebar-collapsed="collapsed" />
        </header>
        <main class="content bg-white text-black-700 dark:text-black-100 dark:bg-black-600 p-8">
            <Nuxt />
        </main>

        <!-- <footer class="footer">
            <div class="text-sm flex justify-center items-center h-auto py-2 bottom-0  dark:bg-gray-500">
                Developed with
                <span class="text-red-700 whitespace-pre text-2xl"> ❤ </span> by
                Boussadjra Brahim
            </div>
        </footer>-->
    </div>
</div>
</template>

<script>
import DashboardHeader from "../components/for_layout/DashboardHeader";
import DashboardSide from "../components/for_layout/DashboardSide";
export default {
    name: "App",
    data: () => ({
        collapsed: false,
        toggled: false,
        rtl: false,
    }),
    methods: {
        setCollapsed() {
            this.collapsed = !this.collapsed;
        },
        setToggled() {
            this.toggled = !this.toggled;
        },
        setRTL() {
            this.rtl = !this.rtl;
        },
    },

    components: {
        DashboardHeader,
        DashboardSide,
    },
};
</script>

<style>
a.btn {
    display: inline-block;
    margin: 10px 0;
    padding: 8px 20px;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    box-shadow: 1px 1px 4px #8990ad;
    width: 100px;
    text-align: center;
    border-radius: 4px;
    font-size: 0.9rem;
}

a.btn:hover {
    background-color: #f1f1f1;
}

.layout.fixed-header .header {
    position: fixed;
    width: calc(100% - 280px);
    z-index: 1;
}

.layout.fixed-header .header-expanded {

    width: calc(100% - 80px);

}

.layout.fixed-sidebar .sidebar {

    @apply min-h-screen;
    overflow: auto;
    position: sticky;
    top: 0;
}
</style>
