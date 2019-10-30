<template>
	<view>
		<view>{{tuser.name}}</view>
		<image :src="tuser.image" mode="" style="width: 300upx;height: 200upx;"></image>
		<view>{{tuser.sex}}</view>
		<view>{{tuser.phone}}</view>
		<view>{{tuser.qq}}</view>
		<view>{{tuser.wx}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tuser : {'name':''},
			}
		},
		methods: {
			
		},
		onLoad(option) {
			uni.request({
				url:'https://ygjs.mfmeat.top/index.php/api/user/detail',
				data:{'tuser_id':option.id},
				method:'POST',
				dataType:'json',
				success:(res)=> {
					this.tuser = res.data.message;
				},
				fail() {
					uni.showToast({
						title:'网络异常!'
					});
				}
			})
		}
	}
</script>

<style>

</style>
