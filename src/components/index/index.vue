<template>
	<div class="index">
		<router-link to="/showPage">前往展示页</router-link>|
		<router-link to="/functionPage">前往操作页</router-link>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.index
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -250px;
		margin-left: -250px;
		width: 500px;
		height: 500px;
		line-height: 500px;
		text-align: center;
		font-size: 25px;
		font-weight: 700;
</style>
