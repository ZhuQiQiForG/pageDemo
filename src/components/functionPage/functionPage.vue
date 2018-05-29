<template>
	<div class="functionPage">
		<transition-group tag="ul" class="imgList" name="list">
			<li class="list-item" v-for="(item, index) in imgList" :key="index" v-show="index === currentIndex">
				<img :src="item.url">
			</li>
		</transition-group>
		<div class="changePage">
			<div class="prePage" @click="prePage">
				上一页
			</div>
			<div class="nextPage" @click="nextPage">
				下一页
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				// 此处添加图片url 如果是本地图片使用require
				imgList: [
					{
						url: 'xxxx'
					},
					{
						url: 'xxxx'
					},
					{
						url: 'xxxx'
					},
					{
						url: 'xxxx'
					}
				],
				currentIndex: 0
			};
		},
		methods: {
			prePage() {
				if (this.currentIndex > 0) {
					this.currentIndex = this.currentIndex - 1;
					let index = this.currentIndex;
					this.$http.get('/api/setIndex', {
						params: {index: index}
					}).then((res) => {
						console.log(res);
					});
				}
			},
			nextPage() {
				if (this.currentIndex < this.imgList.length - 1) {
					this.currentIndex = this.currentIndex + 1;
					let index = this.currentIndex;
					this.$http.get('/api/setIndex', {
						params: {index: index}
					}).then((res) => {
						console.log(res);
					});
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
::-webkit-scrollbar
	display: none
html, body
	width: 100%;
	height: 100%;
	#app
		width: 100%;
		height: 100%;
		.functionPage
			width: 100%;
			height: 100%;
			overflow: hidden;
			.imgList
				width: 100%;
				height: 100%;
				.list-item
					position: absolute;
					width: 100%;
					height: 100%;
					line-height: 50;
					text-align: center;
					background: #dedede;
					img
						width: 100%
						height: 100%
			.list-enter-to
				transition: all 1s ease;
				transform: translateY(0);
			.list-leave-active
				transition: all 1s ease;
				transform: translateY(-100%)
			.list-enter
				transform: translateY(100%)
			.list-leave
				transform: translateY(0)
			.changePage
				position: fixed;
				top: 50%;
				right: 50px;
</style>
