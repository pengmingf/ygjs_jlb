<template>
	<view>
		<view class="uni-padding-wrap">
			<form @submit="formSubmit" @reset="formReset">
				<view>
					<view class="uni-title">姓名:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<picker mode="selector"   @change="set_name"  range-key='name'   :range="piack_name">
								<input class="uni-input" name="nickname" :value="inputValue" placeholder="请填写用户昵称" />
							</picker>
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">上臂:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="sb" placeholder="请填写上臂数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">腰围:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="yw" placeholder="请填写腰围数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">肩宽:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="jk" placeholder="请填写肩宽数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">小腿:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="xt" placeholder="请填写小腿数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">大腿:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="dt" placeholder="请填写大腿数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">脂肪:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="zf" placeholder="请填写脂肪数值" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">Bmi:</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="Bmi" placeholder="请填写Bmi数值" />
						</view>
					</view>
				</view>
				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit" formType="submit" type="primary">提交</button>
					<button type="default" formType="reset">重置</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				inputValue:'',
				inputId:'',
				piack_name:[],
			}
		},
		methods: {
			formSubmit: function (e) {
				//进行表单检查
				var formData = e.detail.value;
				console.log(formData);
				uni.request({
					url:'https://ygjs.mfmeat.top/index.php/api/user/sanweiInsert',
					data:formData,
					dataType:'json',
					method:'POST',
					success: (res) => {
						if(res.data.code !=1)
						{
							uni.showModal({
								content:res.data.message
							});
						}else{
							uni.showToast({
								title:'数据添加成功',
								icon:'none'
							})
						}
					},
					fail() {
						uni.showToast({
							title:'网络异常,稍后重试',
							icon:'none'
						})
					},
				})
			},
			formReset: function (e) {
				console.log("清空数据");
			},
			set_name(e)
			{
				var value = e.detail.value;
				this.inputValue = this.piack_name[value].name;
				this.inputId = this.piack_name[value].id;
			},
			get_name()
			{
				uni.request({
					url:'https://ygjs.mfmeat.top/index.php/api/user/users',
					dataType:'json',
					success: (res) => {
						for(let i=0;i<res.data.length;i++)
						{
							this.piack_name.push(res.data[i]);
						}
					}
				});
			}
		},
		onLoad() {
			this.get_name();
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
		/* border: #333333; */
		/* border-style: dashed; */
	}
	.uni-btn-v{
		padding:10upx 0;
	}
	.uni-btn-v button{margin:20upx 0;}
	
	.uni-padding-wrap{
		width:690upx;
		padding:0 30upx;
		background-color: #EFEFF4;
	}
	.uni-word {
		text-align: center;
		padding:200upx 100upx;
	}
	.uni-title {
		font-size:30upx;
		font-weight:500;
		padding:20upx 0;
		line-height:1.5;
	}
	.uni-text{
		font-size:28upx;
	}
	.uni-title text{
		font-size:24upx;
		color:#888;
	}
	
	.uni-text-gray{
		color: #ccc;
	}
	.uni-text-small {
		font-size:24upx;
	}
	.uni-common-mb{
		margin-bottom:30upx;
	}
	.uni-common-pb{
		padding-bottom:30upx;
	}
	.uni-common-pl{
		padding-left:30upx;
	}
	.uni-common-mt{
		margin-top:30upx;
	}
	
</style>
