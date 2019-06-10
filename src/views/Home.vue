<template>
	<div class="home">
		<Head></Head>
		<Topbg></Topbg>
		<div class="content">
			<router-view />
		</div>
		<QrCode class="qr-code"></QrCode>
		<footer>
			蜀ICP备19017670号
		</footer>
	</div>
</template>
<script>
import Head from "@/components/Head";
import Topbg from "@/components/Topbg";
import QrCode from "@/components/QrCode";
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
		Topbg,
		QrCode
	},
	created() {
		
	},
	mounted() {},
	methods: {},
	watch: {},
	destroyed() {},
}
</script>
<style scoped lang="scss">
	.home{
		position: relative;
		background: #f6f6f6;
		.content{
			width: 80vw;
			min-height: calc(60vh - 300px);
			margin-top: -30px;
			margin-left: 10vw;
			position: relative;
			z-index: 4;
			background: #ffffff;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
			border-radius: 6px;
			color: #1b2735;
			border: 1px solid transparent;
		}
		.QrCode{
			margin-top: -30px;
			padding-top: 50px;
		}
		footer{
			height: 60px;
			background: #1b2735;
			color: #f6f6f6;
			display: flex;
			justify-content: center;
			align-items: center
		}
	}
</style>