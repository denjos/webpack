<template>
    <div id="app">
        <img :src="logo" alt="vue" class="logo">
        <div>
            Webpack + {{des}}
        </div>
        <div class="menu">
            <a class="item" v-for="link in links" :href="link[1]" :key="link[0]" v-text="link[0]"></a>
        </div>
    </div>
</template>

<script>
    import logo from '../img/vue.png';
    import data from '../data.json';
    import sass from '../scss/main.scss';
    export default {
        data(){
            return {
                logo:logo,
                des:"Vue",
                links:data.links

            }
        }
    }
</script>