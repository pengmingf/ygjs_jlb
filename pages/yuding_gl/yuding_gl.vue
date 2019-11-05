<template>
	<view>
		<button size="mini" type="primary" style="margin:35upx ;" @click="getTableData()">今日送餐</button>
		<button size="mini" type="primary" style="margin:35upx ;" @click="getTmorData">明日预订</button>
		<button size="mini" type="primary" style="margin:35upx ;">指定日期</button>
		<view style="margin-left:15upx;">今日需送：{{total}}份</view>
		<!-- <view style='margin: 25upx 15upx;'>明日需送：18份</view> -->
<!-- 		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">订单详细</view>
			</view>
			<view class="qiun-charts" >
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
			</view>
		</view> -->
		
		<view class="warp">
			<view class="box">
				<view class="title" style='margin: 25upx 15upx;'>今日订单</view>
				<t-table @change="change">
					<t-tr>
						<t-th>序号</t-th>
						<t-th>姓名</t-th>
						<t-th>食品</t-th>
						<t-th>送餐时间</t-th>
					</t-tr>
					<t-tr v-for="(item,index) in tableList" :key="item.id">
						<t-td>{{ index + 1 }}</t-td>
						<t-td>{{ item.name }}</t-td>
						<t-td>{{ item.food }}</t-td>
						<t-td>{{ item.time }}</t-td>
					</t-tr>
					<t-tr v-for="(items,index) in food" :key="index">
						<t-td>餐品：</t-td>
						<!-- <t-td >鸡腿：2个</t-td> -->
						<t-td>{{ items.food_name }}：{{ items.nub }}个</t-td>
						<t-td>总计：{{total}}个</t-td>
						<!-- <t-td>披萨：1个</t-td> -->
					</t-tr>
				</t-table>
			</view>
			<!-- <view class="box">
				<view class="title">自定义样式</view>
				<t-table border="2" border-color="#95b99e" :is-check="true" @change="change">
					<t-tr font-size="14" color="#95b99e" align="left">
						<t-th align="left">姓名</t-th>
						<t-th align="left">年龄</t-th>
						<t-th align="left">爱好</t-th>
						<t-th align="center">操作</t-th>
					</t-tr>
					<t-tr font-size="12" color="#5d6f61" align="right" v-for="item in tableList" :key="item.id">
						<t-td align="left">{{ item.name }}</t-td>
						<t-td align="left">{{ item.age }}</t-td>
						<t-td align="left">{{ item.hobby }}</t-td>
						<t-td align="left"><button @click="edit(item)">编辑</button></t-td>
					</t-tr>
				</t-table>
			</view> -->
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import uCharts from '@/components/u-charts/u-charts.js';
	import md5 from '@/md5.js';
	var _self;
	var canvaColumn=null;

	export default {
		components:{
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				tuser_id : uni.getStorageSync('tuser_id'),
				url : 'https://ygjs.mfmeat.top/index.php/api/main/getBodyDate',
				tableList: [],
				food:[],
				total:0,
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
			this.getTableData();
		},
		methods: {
			getServerData(url=this.url,data){
				uni.request({
					url: url,
					data: {"tuser_id":this.tuser_id},
					method:'POST',
					dataType:'json',
					success: function(res) {
						// console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverData=res.data.data;
						let Column={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Column.categories=res.data.data.Column.categories;
						Column.series=res.data.data.Column.series;
						_self.showColumn("canvasColumn",Column);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:{show:true},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
				
			},
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
			change(e) {
				console.log(e.detail);
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			},
			getTableData(url = 'https://ygjs.mfmeat.top/index.php/api/food/yudinglist'){
				this.food = [];
				this.tableList = [];
				uni.request({ 
					url:url,
					data:{'token':md5('yudinglist_pmf')},
					dataType:'json',
					method:'POST',
					success: (res) => {
						this.total = res.data.message.length;
						for(let i=0;i<res.data.message.length;i++)
						{
							let name = res.data.message[i].name;
							let time = res.data.message[i].sendfood_time;
							let food = res.data.message[i].food_name;
							let table_data = {'name':name,'time':time,'food':food};
							//渲染表格数据
							this.tableList.push(table_data);
							//渲染表格底部
							var xb = -1;
							var index = null;
							for(let x=0;x<this.food.length;x++)
							{
								if(food == this.food[x].food_name)
								{
									xb = 1;
									index = x;
								}
							}
							if(xb > -1)
							{
								this.food[index].nub += 1;
							}else{
								this.food.push({'food_name':food,'nub':1});
							}
						}
						
					},fail() {
						uni.showToast({
							title:'网络错误',
							icon:'none'
						});
					},
				});
			},
			getTmorData()
			{
				this.food = [];
				this.tableList = [];
				this.getTableData('https://ygjs.mfmeat.top/index.php/api/food/yudinglisttmo');
			},
		}
	}
</script>

<style>
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
