<template>
<section>
    <div class="space-y-2">
        <h1 class="section__title">Breadcrumbs:</h1>
        <div class="w-full  place-items-center">
            <client-only>
                <breadcrumb>
                    <span>Home</span>
                    <span>Library</span>
                    <span>Data</span>

                </breadcrumb>
            </client-only>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">Breadcrumbs with custom separator:</h1>
        <div class="w-full  place-items-center">
            <client-only>
                <breadcrumb>
                    <span>Home</span>
                    <span>Library</span>
                    <span>Data</span>

                    <template #separator>

                        <icon-caret-right />
                    </template>

                </breadcrumb>
            </client-only>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">Breadcrumbs as badges:</h1>
        <div class="w-full  place-items-center">
            <client-only>
                <breadcrumb>
                    <badge>Home</badge>
                    <badge>Library</badge>
                    <badge>Data</badge>
                    <template #separator>

                        <icon-caret-right class="text-purple-500" />
                    </template>
                </breadcrumb>
            </client-only>

        </div>
    </div>

    <div class="space-y-2">
        <h1 class="section__title">Breadcrumbs with current route path:</h1>
        <div class="w-full  place-items-center">
            <client-only>
                <breadcrumb :path="$route.path">

                </breadcrumb>
            </client-only>

        </div>
    </div>
</section>
</template>

<script>
import IconCaretRight from "~/components/icons/IconCaretRight";
import Breadcrumb from "~/components/navigation/Breadcrumb.js";
import Badge from "~/components/data-display/Badge.vue";

export default {
    name: "breadcrumbs",
    layout: "dashboard",

    components: {
        Breadcrumb,
        IconCaretRight,
        Badge,
    },
};
</script>

<style>
</style>
