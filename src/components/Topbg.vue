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
            clickMode="push">
        </vue-particles>
        <div class="text">
            <h3>真正的大师永远都怀着一颗学徒的心</h3>
            <div class="text-swiper">
                <swiper class="swiper" :options="textSwiperOption" ref="myTextSwiper" @someSwiperEvent="callback">
                    <!-- slides -->
                    <swiper-slide>
                        <div>只有行动才能说明一切</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>绝对不要坐等胜利的到来。</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>倘若你迷失在黑暗中，除了前行别无他法</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
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
                "http://assets.topmiss.cn/images/bg1.jpg",
                "http://assets.topmiss.cn/images/bg2.jpg",
                "http://assets.topmiss.cn/images/bg3.jpg",
                "http://assets.topmiss.cn/images/bg4.jpg",
                "http://assets.topmiss.cn/images/bg5.jpg",
                "http://assets.topmiss.cn/images/bg6.jpg",
                "http://assets.topmiss.cn/images/bg7.jpg",
            ],
            swiperOption:{
                autoplay: {
                    delay: 5000,//1秒切换一次
                },
                effect : 'fade',
                loop:true
            },
            textSwiperOption:{
                autoplay: {
                    delay: 3000,//1秒切换一次
                },
                effect : 'flip',
                direction : 'vertical',
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
    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 3;
        color: #ffffff;
        text-align: center;
        min-width: 700px;
        h3{
            font-size: 36px;
            display: block;
            width: 100%;
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: 5px;
            text-shadow: 4px 4px 0px rgba(255,222,148,0.3), 8px 8px 0px rgba(8,128,215,0.1); //relief shade effect 
        }
        .text-swiper{
            font-size: 22px;
            letter-spacing: 5px;
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            position:relative;
            z-index: 100;
        }
    }
}
</style>