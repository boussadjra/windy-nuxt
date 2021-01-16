<template>
<div class="px-4 py-4 min-w w-full rounded flex text-gray-600 space-x-2 items-center bg-gray-100 dark:bg-gray-500 dark:text-gray-100 min-w-max">

</div>
</template>

<script>
export default {
    name: 'breadcrumb',
    props: {
        path: {
            type: String,
            default: '',
        },
    },
    mounted() {
        console.log('--------------------')
        this.$slots.default && $slots.default.map((e) => {
            console.log(e)
        })
        console.log('--------------------')
    }
}
</script>

<style>

</style>
