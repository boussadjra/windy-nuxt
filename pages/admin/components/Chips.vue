<template>
<section>
    <div class="space-y-2">
        <h1 class="section__title">Default chips shape:</h1>
        <div class="w-full grid--auto-cols gap-4">
            <chip v-for="variant in variants" :key="variant" :variant="variant">
                {{variant}}
            </chip>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">chips outlined:</h1>
        <div class="w-full grid--auto-cols gap-4">
            <chip v-for="variant in variants" :key="variant" outlined :variant="variant">
                {{variant}}
            </chip>
        </div>
    </div>
    <div class="space-y-2">
        <h1 class="section__title">smooth chips:</h1>
        <div class="w-full grid--auto-cols gap-4">
            <chip v-for="variant in variants" :key="variant" smooth :variant="variant">
                {{variant}}
            </chip>
        </div>
    </div>
</section>
</template>

<script>
import Chip from '~/components/data-display/Chip.vue'
export default {
    layout: 'dashboard',

    data() {
        return {
            variants: ["default", "primary", "danger", "success", "warning"],
        }
    },
    components: {
        Chip
    }
}
</script>

<style>

</style>
