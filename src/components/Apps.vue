<template>
    <div class="apps">
        <EmptyCard />
        <AppCard
            v-for="app in apps"
            :title="app.title"
            :description="app.description"
            :version="app.version"
            :platforms="app.platforms"
            :date="app.date"
            :type="app.type"
        />
    </div>
</template>

<script>
    import EmptyCard from './EmptyCard';
    import AppCard from './AppCard';

    export default {
        props: {
            apps: {
                type: Array,
                required: true
            }
        },

        components: {
            EmptyCard,
            AppCard
        },
    }
</script>

<style lang="scss" scoped>
    .apps {
        display: flex;
        flex: 0 0 80%;
        padding: 10px;

        background-color: #ecf0f1;
        border: 1px solid #bdc3c7;
    }
</style>