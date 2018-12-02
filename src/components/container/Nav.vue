<template>
	<mt-header :title="title" fixed class="nav">
	  <router-link to="/Main" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
  	  <!-- <mt-button icon="more" slot="right"></mt-button> -->
	</mt-header>
</template>

<script type="text/javascript">
	
	export default{
		name:'Nav',
		data(){
			return{
				
			}
		},
		computed:{
			title(){
				return this.$store.state.title;
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.mint-header.is-fixed{
		z-index: 2008;
	}
	.nav{
		line-height:0.88rem;
		height:0.88rem;
	
	}

</style>