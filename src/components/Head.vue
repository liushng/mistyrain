<template>
	<div class="header">
		<github></github>
	</div>
</template>
<script>
import github from "@/components/Github"
export default {
    name: "HeaderItems",
    data() {
        return {};
    },
    props: {},
    computed: {},
    components: {
      github
    },
    created() {},
    mounted() {},
    methods: {},
    watch: {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
.header {
	width: 100%;
	height: 66px;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;
}
</style>