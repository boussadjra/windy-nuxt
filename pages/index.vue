<template>
<main>
    <svg viewBox="0 0 1440 160" class="fill-current text-purple-800">
        <path fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <div class="flex flex-col-reverse justify-around w-full lg:h-96 lg:flex-row">
        <div class="flex flex-col h-32 items-center p-16">
            <h1 class="text-7xl p-8 font-bold text-gray-800">WINDYNUXT</h1>
            <w-btn size="lg">
                <nuxt-link to="/admin"> GET STARTED </nuxt-link>
            </w-btn>
        </div>
    </div>
</main>
</template>

<script>
import Button from "~/components/actions/Button.vue";
export default {
    components: {
        "w-btn": Button,
    },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
