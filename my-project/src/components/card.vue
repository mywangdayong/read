<template>
	<el-row :gutter="20">
	 <!--  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0"> -->
    <el-col :span="4" v-for="movie in movies">
	    <el-card :body-style="{ padding: '0px' }">
	      <img :src="movie.img" class="image">
	      <div style="padding: 14px;">
	        <span>{{movie.title}}</span>
	        <div class="bottom clearfix">
	          <time class="time">{{ currentDate }}</time>
	          <el-button type="text" class="button">查看详情稍等</el-button>
	        </div>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>
</div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      movies:[]
    };
  },
  created(){
    /*this.$axios.get("/sxtstu/blueberrypai/getChengpinDetails.php")
    .then(res => {
      console.log(res);
      this.mes = res.data.chengpinDetails[0].content
    })
    .catch(error => {
      console.log(error);
    })*/
    let url = this.HOST + "/movie/top250";
      this.$axios.get(url,{
        params:{
          count:10,
          start:0
        }
      })
    .then(res => {
      this.filterDate(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods:{
    filterDate(data){
      var finalMovies = [];
      for (var i = 0; i<data.subjects.length;i++){
        var moviesObj = {
         title:data.subjects[i].title,
         img:data.subjects[i].images.large
         }
        finalMovies.push(moviesObj);
      }
      this.movies = finalMovies;
    }
  }
}
</script>
