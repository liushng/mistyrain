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
    background: linear-gradient(45deg, #141e30, #243b55);
    overflow: hidden;
    color:#ffffff;
    display: flex;
    .item{
        margin-right: 30px;
        .title{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            background: linear-gradient(60deg,#ffffff,#cccccc);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Impact";
            user-select: none;
            text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.1)
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