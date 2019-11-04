<template>
    <view class="content">
        <view class="btn-row">
            <button  type="primary" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
    export default {
        methods: {
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
				uni.clearStorageSync();
                uni.reLaunch({
                    url: '../login/login',
                });
            }
        }
    }
</script>

<style>

</style>
