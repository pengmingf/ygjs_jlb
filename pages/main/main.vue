<template>
    <view class="content">
        <view v-if="is_login" class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!is_login" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view>
    </view>
</template>

<script>

    export default {
		data () {
			return {
				is_login :false,
			}
		},
        
        onLoad() {
            if (!uni.getStorageSync('tuser_id')) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    showCancel: false,
                    success: (res) => {
            			uni.reLaunch({
            				url: '../login/login'
            			});
            		}
                });
            }
            this.tuser_id = uni.getStorageSync('tuser_id');
			this.is_login = true;
            this.cWidth = uni.upx2px(750); 
            this.cHeight = uni.upx2px(500);
        }
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>
