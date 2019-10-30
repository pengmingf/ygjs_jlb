<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
					<view class="uni-media-list-logo">
						<image v-if="showImg" :src="value.img" @click="detail(value)"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.name}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.phone}}</view>
						
					</view>
					<view  v-if="!value.qiandao">
						<button  type="primary" size="mini" style="margin-left:10upx ;" @click="daka(value)">签到</button>
					</view>
					<view  v-if="value.qiandao">
						<button  type="primary" size="mini" style="margin-left:10upx ;" disabled >已到</button>
					</view>
				</view>
			</view>
		</view>
		<view class="button">
			<button type="primary" size="default" @click="add()">添加用户</button>
		</view>
		<view class="button">
			<button type="warn" size="default" @click="delet()">删除用户</button>
		</view>
	</view>
</template>

<script>
	import md5 from '@/md5.js';
	export default {
		data() {
			return {
				showImg:true,
				token : null,
				list: [{
						id:"1",
						name: "幸福",
						phone: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						qiandao:false
					},
					{
						id:"2",
						name: "木屋",
						phone: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						qiandao:false
					},
					{
						id:'3',
						name: "CBD",
						phone: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						qiandao:false
					}
				]
			}
		},
		methods: {
			daka(value)
			{
				uni.request({
					url:'https://ygjs.mfmeat.top/index.php/api/user/didi',
					data:{'token':this.token,'tuser_id':value.id,'tuser_name':value.name,
							'admin_id':uni.getStorageSync('tuser_id')},
					method:'POST',
					dataType:'json',
					success: (res) => {
						if(res.data.code == 1)
						{
							for(var i=0; i<res.data.message.length;i++)
							{
								//设置签到按钮状态
								value.qiandao = true;
							}
						}else{
							uni.showToast({
								icon:'none',
								title:"网络异常"
							});
						}
					}
				})
				
			},
			
			add()
			{
				uni.showToast({
					title: '暂无'
				});
			},
			
			delet()
			{
				uni.showToast({
					title: '暂无'
				});
			},
			detail(value)
			{
				uni.navigateTo({
					url:'../tuser_detail/tuser_detail?id='+value.id
				})
			}
		},
		onLoad(){
			this.token = md5('allDetailpmf');
			uni.request({
				url:'https://ygjs.mfmeat.top/index.php/api/user/alldetail',
				data:{'token':this.token},
				method:'POST',
				dataType:'json',
				success: (res) => {
					if(res.data.code == 1)
					{
						for(var i=0; i<res.data.message.length;i++)
						{
							var data_push ={"name":res.data.message[i].name,
											"phone":res.data.message[i].phone,
											"img":res.data.message[i].image,
											'qiandao':res.data.message[i].qiandao,
											'id':res.data.message[i].Id};
							this.list.push(data_push);
						}
					}else{
						uni.showModal({
							content:res.data.message,
							showCancel:false
						});
					}
				}
			})
		},
	}
</script>

<style>

	/* 列表 */
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	/* .uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	} */
	/* .uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	} */
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-hover {
		background-color: #eee;
	}
	.uni-list-cell-pd {
		padding: 22upx 30upx;
	}
	.uni-list-cell-left {
		font-size:28upx;
		padding: 0 30upx;
	}
	.uni-list-cell-db,
	.uni-list-cell-right {
		flex: 1;
	}
	.uni-list-cell::after {
		position: absolute;
	  z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list .uni-list-cell:last-child::after {
		height: 0upx;
	}
	.uni-list-cell-last.uni-list-cell::after {
		height: 0upx;
	}
	.uni-list-cell-divider {
		position: relative;
		display: flex;
		color: #999;
		background-color: #f7f7f7;
		padding:15upx 20upx;
	}
	.uni-list-cell-divider::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-divider::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-navigate {
		font-size:30upx;
		padding: 22upx 30upx;
		line-height: 48upx;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-navigate {
		padding-right: 36upx;
	}
	.uni-navigate-badge {
		padding-right: 50upx;
	}
/* 	.uni-list-cell-navigate.uni-navigate-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	} */
/* 	.uni-list-cell-navigate.uni-navigate-bottom:after {
		font-family: uniicons;
		content: '\e581';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
		font-family: uniicons;
		content: '\e580';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	} */
	.uni-collapse.uni-list-cell {
		flex-direction: column;
	}
	.uni-list-cell-navigate.uni-active {
		background: #eee;
	}
	.uni-list.uni-collapse {
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	.uni-collapse .uni-list-cell {
		padding-left: 20upx;
	}
	.uni-collapse .uni-list-cell::after {
		left: 52upx;
	}
	.uni-list.uni-active {
		height: auto;
	}
	
	/* 三行列表 */
	.uni-triplex-row {
		display: flex;
		flex: 1;
		width: 100%;
		box-sizing: border-box;
		flex-direction: row;
		padding: 22upx 30upx;
	}
	.uni-triplex-right,
	.uni-triplex-left {
		display: flex;
		flex-direction: column;
	}
	.uni-triplex-left {
		width: 84%;
	}
	.uni-triplex-left .uni-title{
		padding:8upx 0;
	}
	.uni-triplex-left .uni-text, .uni-triplex-left .uni-text-small{color:#999999;}
	.uni-triplex-right {
		width: 16%;
		text-align: right;
	}
	
	/* 图文列表 */
	.uni-media-list {
		padding: 22upx 30upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}
	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}
	.uni-pull-right {
		flex-direction: row-reverse;
	}
	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}
	.uni-media-list-logo {
		height: 84upx;
		width: 84upx;
		margin-right: 20upx;
	}
	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}
	.uni-media-list-body {
		height: 84upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}
	.button{
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-media-list-button {
		height: 84upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}
	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
	}
	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 26upx;
		color: #8f8f94;
	}
	
</style>
