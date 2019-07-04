<template>
    <div class="app">
        <Header @search="onSearchFilled" />
        <Apps :apps="wantedAppName ? filteredApps : apps" />
        <Footer />
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import { FETCH_APPS, FIND_APP } from '@src/store/modules/apps/actions/apps.actions';

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
                wantedAppName: ''
            }
        },

        mounted() {
            this.fetchApps();
        },

        computed: {
            ...mapState('apps', ['apps', 'filteredApps']),
        },

        methods: {
            ...mapActions('apps', {
                fetchApps: FETCH_APPS,
                findApp: FIND_APP
            }),

            onSearchFilled(name) {
                this.wantedAppName = name;

                this.findApp(name);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .app {
        font-family: 'Bangers';

        height: 100%;
        width: 100%;
        position: absolute;

        display: flex;
        flex-direction: column;
    }
</style>

