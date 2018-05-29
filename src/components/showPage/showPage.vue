<template>
	<div class="showPage">
		<transition-group tag="ul" class="imgList" name="list">
			<li class="list-item" v-for="(item, index) in imgList" :key="index" v-show="index === currentIndex">
				<img :src="item.url">
			</li>
		</transition-group>
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
		created() {
			// 在dom加载完成后，用短连接的方式实时监控后台index值得变化
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.setIndex();
				}, 100);
			});
		},
		methods: {
			setIndex() {
				let _this = this;
				this.$http.get('/api/setIndex')
					.then((res) => {
						if (res.data) {
							let index = parseInt(res.data);
							if (index !== _this.currentIndex) {
								_this.currentIndex = index;
							}
						}
					});
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
		.showPage
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
</style>
