<template>
    <div class="top-bg">
        <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgArr" :key="index">
                <img :src="item">
            </swiper-slide>
            <swiper-slide>
                <div class="bg"></div>
            </swiper-slide>
        </swiper>
        
        <vue-particles 
            style="height:100%"
            color="#dedede"
            class="lizi"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"></vue-particles>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"TopBg",
    data() {
        return {
            imgArr:[
                "http://topmiss.cn/images/bg1.jpg",
                "http://topmiss.cn/images/bg2.jpg",
                "http://topmiss.cn/images/bg3.jpg",
                "http://topmiss.cn/images/bg4.jpg",
                "http://topmiss.cn/images/bg5.jpg",
                "http://topmiss.cn/images/bg6.jpg",
                "http://topmiss.cn/images/bg7.jpg",
            ],
            swiperOption:{
                autoplay: {
                    delay: 5000,//1秒切换一次
                },
                effect : 'fade',
                loop:true
            }
        }
    },
    props:{},
    computed: {},
    components:{
        swiper,
        swiperSlide
    },
    created() {},
    mounted() {},
    methods: {
        callback(){

        }
    },
    watch: {},
    destroyed() {},
}
</script>

<style lang="scss" scoped>
.top-bg{
    width: 100%;
    height: 40vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #2a4bf0 100%);
    position: relative;
    overflow: hidden;
    user-select: none;
    z-index: 1;
    .swiper{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        img{
            width: 100%;
            min-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
        }
        .bg{
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at bottom, #1b2735 0%, #2a4bf0 100%);
        }
    }
    .lizi{
        position: relative;
        z-index: 2;
    }
}
</style>