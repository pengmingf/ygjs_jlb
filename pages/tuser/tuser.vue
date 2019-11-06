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
					<!-- 多列选择器 -->
					<view class="uni-list-cell">
						<picker mode="multiSelector" :data-id='value.id' :data-index='key'   @change="before_weight" :value="multiIndex" :range="allarray">
							<button  type="default" size="mini" style="margin-left:10upx ;" >{{value.before_sp || "运动前"}}</button>
						</picker>
					</view>
					<view class="uni-list-cell">
						<picker mode="multiSelector" :data-id='value.id' :data-index='key'  @change="after_weight"  :value="multiIndex" :range="allarray"> 
							<button  type="warn" size="mini" style="margin-left:10upx ;" >{{value.after_sp || "运动后"}}</button>
						</picker>
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
				list: [], //用户列表
				array: [], //第一列整数体重
				array2:[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9], // 第二列小数
				allarray:[], //多列选择器
				multiIndex: [35, 2], //多列选择器数组小标索引
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
				uni.navigateTo({
					url:'../reg/reg',
				})
			},
			
			delet()
			{
				uni.showToast({
					title: '不准删除'
				});
			},
			detail(value)
			{
				uni.navigateTo({
					url:'../tuser_detail/tuser_detail?id='+value.id
				})
			},
			before_weight(e)
			{
				var tuser_id = e.currentTarget.dataset.id;
				var weight = this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]];
				var status = 10;
				this.weight_to(tuser_id,weight,status);
				this.list[e.currentTarget.dataset.index].before_sp = weight;
			},
			after_weight(e)
			{
				// var nub = e.currentTarget.dataset.index;
				var tuser_id = e.currentTarget.dataset.id;
				var weight = this.allarray[0][e.detail.value[0]]+this.allarray[1][e.detail.value[1]];
				var status = 11;
				this.weight_to(tuser_id,weight,status);
				this.list[e.currentTarget.dataset.index].after_sp = weight;
			},
			//写入服务器
			weight_to(tuser_id,weight,status)
			{
				uni.request({
					url:'https://ygjs.mfmeat.top/index.php/api/user/weightin',
					data:{'token':this.token,'tuser_id':tuser_id,'weight':weight,'status':status},
					dataType:'json',
					method:'POST',
					success: (res) => {
						if(res.data.code == 1)
						{
							
						}else{
							uni.showModal({
								title:'出错了'
							});
						}
					},
					fail: () => { 
						uni.showModal({
							title:'网络异常，请检查网络'
						});
					}
				});
			},
			/*
			*渲染体重数据
			*/
		   weight()
		   {
			   for(let i=70;i<200;i++)
			   {
				   this.array.push(i);
			   }
		   },
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
							var data_push ={"id":res.data.message[i].Id,
											"name":res.data.message[i].name,
											"phone":res.data.message[i].phone,
											"img":res.data.message[i].image,
											'qiandao':res.data.message[i].qiandao,
											'id':res.data.message[i].Id,
											'before_sp':res.data.message[i].before_weight,
											'after_sp':res.data.message[i].after_weight,
											'before_value':res.data.message[i].before_weight-70,
											'after_value':res.data.message[i].after_weight-70};
							if(!res.data.message[i].before_weight)
							{
								data_push.before_value = 35;
								data_push.before_sp = null;
							}
							if(!res.data.message[i].after_weight)
							{
								data_push.after_value = 33;
								data_push.after_sp = null;
							}
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
		onReady() {
			this.weight();
			this.allarray = [this.array,this.array2];
		}
	}
</script>

<style>
	
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-input {
		height: 50upx;
		padding: 15upx 25upx;
		line-height:50upx;
		font-size:28upx;
		background:#FFF;
		flex: 1;
	}

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
		padding-right: 7upx;
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
