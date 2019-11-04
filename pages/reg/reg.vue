<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input type="text" focus clearable v-model="account" placeholder="请输入手机号"></m-input>
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码(6-16位)"></m-input>
            </view>
            <view class="input-row border">
                <text class="title">姓名：</text>
                <m-input type="text" clearable v-model="name"  placeholder="请输入姓名"></m-input>
            </view>
			<view class="input-row border">
			    <text class="title">性别：</text>
			    <radio-group class="uni-flex" style="margin-top: 8upx;" @change='getSexValue' name="sex">
			    	<label>
			    		<radio value="0" checked />男</label>
			    	<label>
			    		<radio value="1" />女</label>
			    </radio-group>
			</view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                account: '',
                password: '',
                name: '',
				sex:'男',
            }
        },
        methods: {
			getSexValue(e)
			{
				var value = e.detail.value;
				if(value == 0)
				{
					this.sex = '男';
				}else{
					this.sex = '女';
				}
			},
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length != 11) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号是手机号'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
				if (this.password.length > 16) {
				    uni.showToast({
				        icon: 'none',
				        title: '密码最长为 16 个字符'
				    });
				    return;
				}

                const data = {
                    account: this.account,
                    password: this.password,
                    name: this.name,
					sex:this.sex
                }
                uni.request({
                	url:'https://ygjs.mfmeat.top/index.php/api/user/register',
					data:data,
					dataType:'json',
					method:'POST',
					success: (res) => {
						if(res.data.code == 1)
						{
							uni.showToast({
							    title: '注册成功',
								duration:3000,
							});
						}else{
							uni.showModal({
								content:res.data.message
							});
						}
					},fail() {
						uni.showToast({
							title:'网络异常！',
							icon:'none'
						})
					}
                })
                
                
            }
        }
    }
</script>

<style>
.uni-flex {
	display: flex;
	flex-direction: row;
}
</style>
