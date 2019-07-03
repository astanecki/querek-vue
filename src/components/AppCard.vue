<template>
    <div class="app-card">
        <div class="app-card__header">
            <div class="app-card__text">
                <span class="app-card__title">{{ title }}</span>
                <span class="app-card__date">{{ date }}</span>
            </div>

            <div class="app-card__platforms">
                <img :src="androidIcon" class="app-card__platform-icon"/>
                <img :src="iosIcon" class="app-card__platform-icon"/>
            </div>
        </div>

        <QrCode :text="url" />
    </div>
</template>

<script>
    import CONFIG from '@src/config/config';
    import QrCode from './QrCode';
    import AndroidIcon from '@src/assets/android-icon.png';
    import IosIcon from '@src/assets/ios-icon.png';

    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            platforms: {
                type: Array
            },
            version: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            type: {
                type: String
            }
        },

        components: {
            QrCode,
            AndroidIcon
        },

        data() {
            return {
                androidIcon: AndroidIcon,
                iosIcon: IosIcon
            }
        },

        computed: {
            url() {
                return `${CONFIG.NETWORK.SERVER_IP}/application?type=${this.type}&version=${this.version}`;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .app-card {
        display: flex;
        flex-direction: column;

        width: 250px;
        height: 200px;

        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;

        margin: 5px;
        padding: 5px;

        &__header {
            display: flex;
            justify-content: space-between;
        }

        &__text {
            display: flex;
            flex-direction: column;
        }

        &__date {
            font-size: 13px;
            color: gray;
        }

        &__platforms {

        }

        &__platform-icon {
            width: 25px;
            height: 25px;
        }
    }
</style>