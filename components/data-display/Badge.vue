<template>
<div class="badge relative top-0">
    <span v-if="$slots.default" class="mt-2 py-1 " :class="[...classes, ...paddingClasse]">
        <slot></slot>
    </span>

    <div v-else class="relative">
        <div class="border-2 border-white z-10 bg-red-600 h-3 w-3" :class="[...classes, ...absoluteClass]" :style="styles"></div>
        <span v-if="ping" :class="[...classes]" :style="styles" class="top-0 -right-1 animate-ping absolute  rounded-full w-4 h-4 bg-purple-400 opacity-100">
        </span>
    </div>
</div>
</template>

<script lang="ts">
import {
    colorable,
    shaped,
    sizeable
} from "../../mixins";

export default {
    name: "badge",
    props: {
        size: {
            type: String,
            default: "sm",
        },

        avatar: {
            type: Object,
            default: () => ({
                size: "sm",
                shape: "circle",
            }),
        },
        position: {
            type: String,
            default: "bottom-right",
        },
        ping: {
            type: Boolean,
            default: false,
        },
    },
    mixins: [shaped, sizeable, colorable],

    data() {
        return {
            sizes: {
                xs: "8px",
                sm: "12px",
                md: "16px",
                lg: "24px",
                auto: "auto",
            },
            px: {
                xs: 2,
                sm: 4,
                md: 8,
                lg: 16,
            },
        };
    },

    computed: {
        classes() {
            let roundedClass = this.shapes[this.shape];

            let positionClass = "right-1 bottom-1";
            if (this.avatar.size === "xs") {
                positionClass = "right-0 bottom-0";
            }

            if (["rounded", "rounded-none"].includes(this.avatar.shape)) {
                positionClass = "right-0 bottom-0 -mr-1 -mb-1";
            }
            let bgColor = this.bgColor || (this.$slots.default ? 'bg-purple-400' : 'bg-red-600');
            let textColor = this.textColor || (this.$slots.default ? 'text-purple-900' : 'text-red-900');
            return [
                `h-${this.sizes[this.size]} text-${this.size}`,
                `w-${this.sizes[this.size]}`,
                bgColor, textColor,
                roundedClass,
                positionClass,
            ];
        },
        absoluteClass() {
            return [this.position === "initial" ? "initial" : "absolute"];
        },
        paddingClasse() {
            return ["px-" + this.px[this.size]];
        },
        styles() {
            if (this.position === "top-right") {
                return {
                    top: "-68px",
                    right: "2px",
                };
            }
        },
    },
    mounted() {
        console.log('--------------------')
        console.log(this.$slots)
        console.log('--------------------')
    },
};
</script>

<style>
</style>
