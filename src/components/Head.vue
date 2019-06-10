<template>
    <div class="header" :style="{background:headBg}">
		<div class="progress" :style="{width}"></div>	
		<div class="left">
			<img src="//assets.topmiss.cn/images/panda.jpg" alt="">
			<span>刘盛</span>
		</div>
		<div class="right">
			<touch-ripple v-for="(item,index) in btnArrReverse" :key="index" @click.native="active=index">
				<div class="btn" :class="{active:active==index}">{{item.title}}</div>
			</touch-ripple>
			<github :opacity="opacity"></github>
		</div>
    </div>
</template>
<script>
import github from "@/components/Github"
export default {
    name: "HeaderItems",
    data() {
        return {
			btnArr:[
				{
					title:"首页",
				},
				// {
				// 	title:"归档",
				// },
				// {
				// 	title:"文档",
				// },
				// {
				// 	title:"简历",
				// },
			],
			active:0,
			headBg:"rgba(42, 75, 240,0)",
			opacity:0,
			width:0
		};
    },
    props: {},
    computed: {
		btnArrReverse(){
			return this.btnArr.reverse();
		}
	},
    components: {
      	github
    },
    created() {
		document.addEventListener('scroll',(e)=>{
			let top = document.documentElement.scrollTop || document.body.scrollTop;
			let screenHeight = window.screen.height ;
			let allHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
			let opacity = 0 ;
			if(top<=200){
				opacity = top/200 ;
			}else{
				opacity = 1 ;
			}
			this.width = top*100/(allHeight-screenHeight) + "%";
			this.headBg = `rgba(42, 75, 240,${opacity})`;
			this.opacity = opacity ;
		})
	},
    mounted() {},
    methods: {},
    watch: {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
$padding:10vw;
.header {
	width: 100%;
	height: 66px;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 2;
	display: flex;
	align-items: center;
	color: #ffffff;
	background: rgba(42, 75, 240,0);
	.left{
		padding-left: $padding;
		font-size: 30px;
		display: flex;
		align-items: center;
		img{
			width: 50px;
			height: 50px;
			margin-right: 10px;
			border-radius: 50%
		}
	}
	.right{
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		flex: 1;
		height: 100%;
		padding-right: $padding;
		.v-touch-ripple{
			margin: 0 20px;
			min-width: 80px;
			height: 100%;
		}
		.btn{
			height: 100%;
			padding: 0 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			user-select: none;
			border-radius: 3px;
			font-size: 16px;
			&:hover{
				background: rgba(0, 0, 0,0.6);
			}
			&:active{
				background: rgba(0, 0, 0,0.36);
			}
			&.active{
				background: rgba(0, 0, 0,0.6);
				color: #f6f6f6;
			}
		}
	}
}
.progress{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 5;
		height: 3px;
		width: 100%;
		background: #ff9800;
		transition: width 0.5s;
		border-radius: 2px
	}
</style>