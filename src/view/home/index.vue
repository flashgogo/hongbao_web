<template>
    <div>
        <van-nav-bar title="首页" @click-left="onClickLeft"/>
        <van-row class="title">
            <van-col class="coin" span="8">金币: {{ gold }}</van-col>
            <van-col class="cash" span="8">
                <van-icon name="gold-coin" />提现
            </van-col>
            <van-col class="integral" span="8">积分: {{ coin }}</van-col>
        </van-row>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image">
            </van-swipe-item>
        </van-swipe>
        <img class="gameEnter" v-for="img in imageList" v-lazy="img" >
    </div>
</template>

<script>
import { Lazyload } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload);
export default {
    data() {
        return {
            gold: 1000,
            coin: 100,
            images: [
                'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
            ],
            imageList: [
                'https://i.ytimg.com/vi/fE7VAJ8duXU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD5Urdj6o1J5iGSZatBPc6NKfRiEA',
                'https://i.ytimg.com/vi/rRQu3k0wxzY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC6gBN9Rm_i3neJ8BkHSrkEOHSiAg',
                'https://i.ytimg.com/vi/pLIK4ZvBYoY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLApIF6K-seUi7FyfGC-2TME11Np6Q',
                'https://i.ytimg.com/vi/hHKftJG5ikc/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD2ubSVXAvpF0Pt2J3y28Z7DuM-0Q',
                'https://i.ytimg.com/vi/F0Kncyv6Fbg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDWg3AHbEkvJ-FWDHX7wgjO_IFNCQ'
            ]
        }
    },
    components: {
        Lazyload
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="less" scoped>
.title {
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
}
.gameEnter {
    width: 100%;
    height: 100px;
}
.van-swipe {
    width: 100%;
    height: 120px;
    img {
        height: 120px;
        width: 100%;
    }
}
.coin {
    text-indent: 10px;
}
.cash {
    text-align: center;
}
.integral {
    text-align: right;
    padding-right: 10px;
}
</style>
