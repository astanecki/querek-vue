<template>
    <div class="header">
        <div class="header__logo">
            {{ name }} <span class="header__version">{{ version }}</span>
        </div>
        <div class="header__search">
            <input
                v-model="inputValue"
                @input="emitInput"
                class="header__input"
                :placeholder="placeholder"
            />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Querek',
                version: '0.0.1', // todo read from package.json
                inputValue: '',
                placeholder: 'Szukaj po nazwie'
            }
        },

        methods: {
            /**
             * @function
             */
            emitInput() {
                this.$emit(`search`, this.inputValue);
            }
        }
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
            font-size: 35px;
            color: #34495e;
        }

        &__version {
            font-size: 20px;
        }

        &__search {
            -webkit-appearance: none;
            padding-right: 10px;
        }

        &__input {
            width: 170px;
            height: 30px;
            border: 1px solid lightgray;
            padding: 4px 4px 4px 15px;
            border-radius: 20px;
        }
    }
</style>