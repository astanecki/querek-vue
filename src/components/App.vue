<template>
    <div class="app">
        <Header />
        <Apps />
        <Footer />
    </div>
</template>
<script>
    import Header from './Header';
    import Apps from './Apps';
    import Footer from './Footer';

    export default {
        name: "App",

        components: {
            Header,
            Apps,
            Footer
        },

        data() {
            return {

            }
        },
    }
</script>
<style lang="scss" scoped>
    .app {
        font-family: Roboto;

        height: 100%;
        width: 100%;
        position: absolute;

        display: flex;
        flex-direction: column;
    }
</style>

