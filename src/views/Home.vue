<template>
	<div class="home">
		<Head></Head>
		<Topbg></Topbg>
	</div>
</template>
<script>
import Head from "@/components/Head";
import Topbg from "@/components/Topbg";
export default {
	name:"home",
	data() {
		return {
			
		}
	},
	props:{},
	computed: {},
	components:{
		Head,
		Topbg
	},
	created() {
		
	},
	mounted() {},
	methods: {},
	watch: {},
	destroyed() {},
}
</script>
<style lang="scss" scoped>
	.home{
		position: relative;
		height: 2000px;
		.content{
			background: #f6f6f6
		}
	}
</style>