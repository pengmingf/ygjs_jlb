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
			<view class="box">
				<button type="primary" @click="to('daka')">打卡</button>
				<button type="default" @click="weight()">体重录入</button>
				<button type="primary" @click="to('tuser')">学员管理</button>
				<button type="default" @click="food_menu()">修改食谱</button>
				<button type="primary" @click="food_to()">明日特供(订单)</button>
				<button type="default" @click="other_message()">三维数据</button>
				<button type="primary" @click="send_message()">发布通告</button>
				<button type="default" @click="change_lb()">修改轮播图</button>
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
        },
		
		methods:{
			to(where){
				if(where == 'daka')
				{
					uni.navigateTo({
						url:'../daka/daka'
					})
				}
				if(where == 'tuser')
				uni.navigateTo({
					url:'../tuser/tuser'
				})
				
			},
		},
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
	
	.inline-box {
		background: #0FAEFF;
		width: 500upx;
		height: 200upx;
		color: #FFAAAA;
		font-size: 20upx;
		display: inline;
		margin: 0 auto;
	}
	
	.box {
		width: 100%;
		margin-top: 100upx;
		height: 100%;
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
