<template>
<section>
    <div class="space-y-2">
        <h1 class="section__title">
            Badges with different shapes:
        </h1>
        <div class="w-full grid--auto-cols gap-4 ">
            <badge v-for="shape in shapes" :key="shape" :shape="shape" color="purple">
                {{shape}}
            </badge>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">
            Small badges with texts:
        </h1>
        <div class="w-full grid--auto-cols gap-4 ">
            <badge bgColor="bg-red-200" textColor="text-red-700"> +9 </badge>
            <badge bgColor="bg-red-500" textColor="text-red-200"> +99 </badge>
            <badge bgColor="bg-green-500" shape="rounded-full" textColor="text-green-100">
                5
            </badge>
            <badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
                +100
            </badge>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">Badges on avatars:</h1>
        <div class="w-full flex flex-wrap space-x-8 items-center">
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=56" variant="rounded-full" class="bg-purple-200 row-start-1 text-purple-650">
                    <template #badge>
                        <badge shape="rounded-full" size="md"></badge>
                    </template>
                </avatar>
            </div>
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=58" variant="rounded-full" size="xs" class="bg-purple-200 row-start-1 text-purple-650">
                    <template #badge="{ avatar }">
                        <badge shape="rounded-full" size="xs" :avatar="avatar"></badge>
                    </template>
                </avatar>
            </div>
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=64" variant="rounded-full" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
                    <template #badge="{ avatar }">
                        <badge shape="rounded-full" color="red" size="sm" :avatar="avatar"></badge>
                    </template>
                </avatar>
            </div>
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=65" variant="rounded" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
                    <template #badge="{ avatar }">
                        <badge shape="rounded-full" color="green" size="sm" :avatar="avatar"></badge>
                    </template>
                </avatar>
            </div>
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=67" size="sm" class="bg-purple-200 row-start-1 text-purple-600">
                    <template #badge="{ avatar }">
                        <badge shape="rounded-full" ping position="top-right" color="blue" size="sm" :avatar="avatar"></badge>
                    </template>
                </avatar>
            </div>
            <div class="p-2">
                <avatar src="https://i.pravatar.cc/200?img=42" variant="rounded-none" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
                    <template #badge="{ avatar }">
                        <badge shape="rounded-full" color="green" size="sm" :avatar="avatar"></badge>
                    </template>
                </avatar>
            </div>
        </div>
    </div>

    <div class="space-y-2">
        <h1 class="section__title">Badges on Icons:</h1>
        <div class="w-full grid--auto-cols grid--auto-cols-xs gap-8">
            <icon-with-badge>
                <template #icon>
                    <IconNotification :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge>
                    <badge shape="rounded-full" position="initial" bgColor="bg-purple-700" size="sm"></badge>
                </template>
            </icon-with-badge>

            <icon-with-badge>
                <template #icon>
                    <IconHome :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge>
                    <badge shape="rounded-full" position="initial" color="red" size="sm"></badge>
                </template>
            </icon-with-badge>
            <icon-with-badge>
                <template #icon>
                    <IconFavorite :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge>
                    <badge shape="rounded-full" ping position="initial" color="green" size="sm"></badge>
                </template>
            </icon-with-badge>

            <icon-with-badge>
                <template #icon>
                    <IconChat :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge-text>
                    <badge bgColor="bg-red-500" shape="rounded-full" textColor="text-red-100">
                        <span class="text-sm"> +9</span>
                    </badge>
                </template>
            </icon-with-badge>
            <icon-with-badge>
                <template #icon>
                    <IconShoppingCart :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge-text>
                    <badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
                        <span class="text-sm"> 4</span>
                    </badge>
                </template>

            </icon-with-badge>
            <icon-with-badge>
                <template #icon>
                    <IconModel :height="32" :width="32" class="text-gray-600" />
                </template>

                <template #badge-text>
                    <badge bgColor="bg-yellow-500" shape="rounded-full" size="xs" textColor="text-yellow-100">
                        <span class="text-xs"> New</span>
                    </badge>
                </template>

            </icon-with-badge>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">Badges on buttons:</h1>
        <div class="w-full flex flex-row space-x-24 items-center">
            <w-btn @click.native="count++">
                Count
                <template #append>
                    <badge bgColor="bg-green-400" shape="rounded-full" size="xs" textColor="text-green-100">
                        {{count}}
                    </badge>
                </template>
            </w-btn>
        </div>
    </div>
</section>
</template>

<script>
import Avatar from "~/components/data-display/Avatar.vue";
import Badge from "~/components/data-display/Badge.vue";
import IconWithBadge from "~/components/data-display/IconWithBadge.vue";
import IconChat from '~/components/icons/IconChat';
import IconFavorite from '~/components/icons/IconFavorite';
import IconHome from '~/components/icons/IconHome';
import IconModel from '~/components/icons/IconModel';
import IconNotification from "~/components/icons/IconNotification";
import IconShoppingBag from '~/components/icons/IconShoppingBag';
import IconShoppingCart from '~/components/icons/IconShoppingCart';
import Button from "~/components/actions/Button.vue";

export default {
    name: 'badges',
    layout: 'dashboard',

    data() {
        return {
            shapes: ["rounded-full", "rounded", "rounded-none"],
            badge: Badge,
            count: 0
        };
    },
    components: {
        Badge,
        Avatar,
        IconNotification,
        IconWithBadge,
        IconHome,
        IconChat,
        IconShoppingBag,
        IconFavorite,
        IconShoppingCart,
        IconModel,
        "w-btn": Button,

    },
};
</script>

<style>
</style>
