<template>
    <div class="apps">
        <EmptyCard />
        {{apps}}
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import { FETCH_APPS } from '@src/store/modules/apps/actions/apps.actions';
    import EmptyCard from './EmptyCard';

    export default {
        name: "Apps",

        components: {
            EmptyCard
        },

        computed: {
            ...mapState('apps', ['apps'])
        },

        mounted() {
            console.log(`mounted`,);

            this.fetchApps();
        },

        methods: {
            ...mapActions('apps', {
                fetchApps: FETCH_APPS
            })
        }
    }
</script>

<style lang="scss" scoped>
    .apps {
        flex: 0 0 80%;
        padding: 10px;

        background-color: #ecf0f1;
        border: 1px solid #bdc3c7;
    }
</style>