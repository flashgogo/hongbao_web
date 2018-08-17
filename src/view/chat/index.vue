<template>
    <div class="container">
        <van-nav-bar
            title="在线客服"
            left-text="返回"
            left-arrow
          @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
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
}

</style>
