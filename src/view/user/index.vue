<template>
    <div class="container">
        <van-nav-bar
            title="个人中心"
            left-text="返回"
            left-arrow
          @click-left="onClickLeft"
        />
        <div class="userInfo">
            <img src="../../assets/img/ss.jpg">
            <span>重案组(Id:88888)</span>
        </div>
        <van-cell-group>
            <van-cell title="备用客服" is-link />
            <van-cell title="我的账户" is-link />
            <van-cell title="等级佣金" is-link />
            <van-cell title="佣金明细" is-link />
            <van-cell title="发包分佣" is-link />
            <van-cell title="我的下线" is-link />
            <van-cell title="备用入口" is-link />
        </van-cell-group>
        <van-cell-group class="t">
            <van-cell title="我的积分" is-link />
        </van-cell-group>
            <van-cell title="我的充值" is-link />
            <van-cell title="我的提现" is-link />
        <van-cell-group class="t">
            <van-cell title="上传我的二维码" is-link />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userLogo: '../../assets/img/go.gif'
        }
    },
    components: {
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    .userInfo {
        padding-top: 0.3rem;
        background: #f3a7b4;
        img {
            margin-top: 0.5rem;
            width: 1.2rem;
            height: 1.2rem;
            display: block;
            margin: 0 auto;
            border-radius: 1.2rem;
            background: red;
            overflow: hidden;
        }
        span {
            display: block;
            margin-top: 0.3rem;
            text-align: center;
            font-size: 0.3rem;
            color: white;
            padding-bottom: 0.2rem;
        }
    }
}
.t {
    margin-top: 20px;
}
</style>
