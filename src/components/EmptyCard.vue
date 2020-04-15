<template>
    <div class="empty-card">
        <span class="empty-card__name">New</span>
        <span class="empty-card__date">today</span>
        <div class="empty-card__add-app">+</div>
    </div>
</template>
<style lang="scss" scoped>
    .empty-card {
        display: flex;
        flex-direction: column;

        width: 250px;
        height: 200px;
        background-color: #34495e;
        color: white;

        margin: 5px;
        padding: 10px;

        &__add-app {
            display: flex;
            justify-content: center;
            flex-basis: 100%;
            align-items: center;
            font-size: 35px;

            &:hover {
                cursor: pointer;
            }
        }

        &__date {
            font-size: 13px;
            color: gray;
        }
    }
</style>