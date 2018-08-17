<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop" @click="tabChange('home')">
                <span>首页</span>
            </van-tabbar-item>
            <van-tabbar-item icon="shop" @click="tabChange('recharge')">
                <span>充值</span>
            </van-tabbar-item>
            <van-tabbar-item icon="shop" @click="tabChange('chat')">
                <span>在线客服</span>
            </van-tabbar-item>
            <van-tabbar-item icon="gold-coin" @click="tabChange('user')">
                <span>个人中心</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        tabChange(val) {
            this.$router.push({name: val})
        }
    }
}
</script>
<style>

</style>
