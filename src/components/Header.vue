<template>
    <div class="header">
        <div class="header__logo">{{ name }}</div>
        <div class="header__search">
            <input v-model="inputValue" class="header__input" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Querek',
                inputValue: ''
            }
        },
    }
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 0 0 5%;

        width: 100%;
        line-height: 100%;
        padding: 10px 0;

        background-color: #ecf0f1;
        border-top: 1px solid #bdc3c7;
        border-bottom: 1px solid #bdc3c7;

        &__logo {
            padding-left: 10px;
            font-size: 25px;
            color: #34495e;
        }

        &__search {
            -webkit-appearance: none;
            padding-right: 10px;
        }

        &__input {
            width: 170px;
            height: 20px;
            border: 1px solid lightgray;
        }
    }
</style>