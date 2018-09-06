<template>
	<el-row>
	  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/hamburger.png" class="image">
	      <div style="padding: 14px;">
	        <span>{{mes}}</span>
	        <div class="bottom clearfix">
	          <time class="time">{{ currentDate }}</time>
	          <el-button type="text" class="button">查看详情</el-button>
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
      mes: 2
    };
  },
  created(){
    this.$axios.get("http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinDetails.php")
    .then(res => {
      console.log(res);
      this.mes = res.data.chengpinDetails[0].content
    })
    .catch(error => {
      console.log(error);
    })

    
  }
}
</script>