<template>
    <div class="qr-code" ref="code"></div>
</template>
<script>
    import QrCode from '@src/services/qrcode';

    const WIDTH = 128;

    const HEIGHT = 128;

    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        },

        mounted() {
            new QrCode(this.$refs.code, {
                text: this.text,
                width: WIDTH,
                height: HEIGHT
            });
        }
    }
</script>
<style lang="scss" scoped>
    .qr-code {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
    }
</style>