<template>
	<mt-header :title="title" fixed class="nav">
	  <!-- <router-link  to="history.back()" slot="left" > -->
	    <mt-button  slot="left" icon="back" @click="goback()">返回</mt-button>
	  <!-- </router-link> -->
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
			},
			tabRouterName(){
				return this.$store.state.tabRouterName;
			}
		},
		methods:{
			goback(){
				if('Barrage-LikeMe-FollowMe-MyLike-MyFollow-MyLabel'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',true);
					this.$store.commit('changeTitle','画像系统');
					this.$store.commit('changetabRouterName','Mine')
					this.$router.push('/Mine')
					this.$store.commit('changeBottomSelected','我的')
				}else if('Person'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',true);
					this.$store.commit('changeTitle','画像系统');
					this.$store.commit('changetabRouterName','Find')
					this.$store.commit('changeBottomSelected','发现')
					this.$router.push('/Find')
				}else if('backLM'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeTitle','赞过我');
					this.$store.commit('changetabRouterName','LikeMe')
					this.$router.push('/LikeMe')
				}else if('backML'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeTitle','我赞过的');
					this.$store.commit('changetabRouterName','MyLike')
					this.$router.push('/MyLike')
				}else if('backFM'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeTitle','关注我的');
					this.$store.commit('changetabRouterName','FollowMe')
					this.$router.push('/FollowMe')
				}else if('backMF'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeTitle','我关注的');
					this.$store.commit('changetabRouterName','MyFollow')
					this.$router.push('/MyFollow')
				}else if('PersonImpression'.indexOf(this.tabRouterName)!=-1){
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeTitle','个人风采');
					this.$store.commit('changetabRouterName','Person')
					this.$router.push('/Person')
				}else{
					this.$router.push('/Index')
					this.$store.commit('changetabRouterName','Main')
					this.$store.commit('changeBottomShow',false);
					this.$store.commit('changeBottomSelected','个人画像')
				}
				
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