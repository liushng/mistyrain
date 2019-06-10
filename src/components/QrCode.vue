<template>
    <div class="QrCode">
        <div class="item">
            <div class="title">微信公众号</div>
            <div class="content">
                <img src="@/assets/images/code.png" alt="">
            </div>
        </div>
        <!-- <div class="item">
            <div class="title">微信小程序</div>
            <div class="content">
                <img src="@/assets/images/code.png" alt="">
            </div>
        </div>
        <div class="item">
            <div class="title">Flutter</div>
            <div class="content">
                <img src="@/assets/images/code.png" alt="">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    name:"QrCode",
    data() {
        return {
            
        }
    },
    props:{},
    computed: {},
    components:{},
    created() {},
    mounted() {},
    methods: {},
    watch: {},
    destroyed() {},
}
</script>
<style lang="scss" scoped>
.QrCode{
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    padding: 20px 10vw;
    background: linear-gradient(45deg, rgba(8,128,215,0.8), rgba(82,70,226,0.8));
    overflow: hidden;
    color:#ffffff;
    display: flex;
    .item{
        margin-right: 30px;
        .title{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
            background: linear-gradient(60deg,red,orange,yellow,green,blue,#9c27b0,violet);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Impact";
            user-select: none;
        }
        .content{
            img{
                width: 180px;
                height: 180px;
            }
        }
    }
}
</style>