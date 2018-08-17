<template>
    <div class="container">
        <van-nav-bar
            title="更多充值"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <ul v-for="(val, index) in money">
            <li :class="[{'active' : index == addCorlor }]" @click="chooseMoney(val.coin, index)">{{ val.exchangeMoney }}</li>
        </ul>
        <van-button class="submit" @click="sublimt">确认充值</van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            addCorlor: 100,
            sublimtMoney: '',
            money:[
                {
                    exchangeMoney: "50元 = 50 金币",
                    coin: '50'
                },
                {
                    exchangeMoney: "100元 = 100 金币",
                    coin: '100'
                },
                {
                    exchangeMoney: "200元 = 200 金币",
                    coin: '200'
                },
                {
                    exchangeMoney: "500元 = 500 金币",
                    coin: '500'
                },
                {
                    exchangeMoney: "1000元 = 1000 金币",
                    coin: '1000'
                },
                {
                    exchangeMoney: "2000元 = 2000 金币",
                    coin: '2000'
                }
            ]
        }
    },
    components: {
        Toast
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        chooseMoney (m, n) {
            console.log('充值金额为' + m)
            this.addCorlor = n
            this.sublimtMoney = m
        },
        sublimt () {
            if (this.sublimtMoney == '') {
                Toast('请选择充值金额');
            } else {
                console.log('冲值金额为' + this.sublimtMoney)
            }
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    ul{
        li {
            width: 90%;
            height: 0.8rem;
            border: 1px solid #e26060;
            border-radius: 10px;
            margin: 20px auto 0 auto;
            color: #e26060;
            line-height: 0.8rem;
            text-align: center;
        }
        .active {
            background-color: #e26060;
            color: white;
        }
    }
    .submit {
        display: block;
        text-align: center;
        height: 46px;
        line-height: 46px;
        border-radius: 8px;
        background: #e26060;
        color: white;
        font-size: 16px;
        width: 90%;
        margin: 40px auto 0 auto;
    }
}
</style>
