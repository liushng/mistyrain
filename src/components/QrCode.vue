<template>
    <div class="QrCode">
        <div class="item">
            <div class="title">微信公众号</div>
            <div class="content">
                <img src="@/assets/images/code.png" alt="">
            </div>
        </div>
        <div class="item">
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
        </div>
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
    background: linear-gradient(to right, #0880d7, #5246e2);
    overflow: hidden;
    color:#ffffff;
    display: flex;
    .item{
        margin-right: 30px;
        .title{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
            background: -webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#85e246));
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Impact"
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