<template>
  <div class="select-box">
    <ul>
      <li v-for="(item,index) in className" :key="index" :class="{'active': current == index}" @click="select(index)">
        {{ item.title }}
        <span v-show="current == index ? show :false">
          <!-- 三角形 -->
        </span>
        <van-icon name="success" class="van-icon" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RsSelectBox',
  props: {
    className: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show: true,
      current: 1
    }
  },
  mounted() {

  },
  methods: {
    select(index) {
      this.current = index
      console.log(index)
    }
  }
}
</script>
<style lang="less" scoped>
.select-box{
        margin-top: 10px;
        margin-bottom: 10px;
    ul{
        display: flex;
        justify-content: space-between;
        margin-left:5%;
        margin-right: 5%;
        li{
            width:55px;
            height: 30px;
            border: 1px solid rgba(139, 136, 136,0.6);
            // margin-left:8px ;
            text-align: center;
            align-content: center;
            overflow: hidden;
            padding-top: 8px;
            border-radius: 4px;
            position: relative;
            // 绘制三角形
        span{
            width:0;
            height: 0;
            border-top: 20px solid rgb(233, 7, 7);
            border-left:20px solid transparent;
            position: absolute;
            margin-top: -8px;
            margin-left: -6px;
            z-index: 10;
          }
          // 定位对勾
          .van-icon{
            position: absolute;
            margin-top: -7px;
            margin-left: 2px;
            color: white;
            z-index: 13;
            font-size: 10px;
          }
       }
       .active{
        border-color: red;
       }
    }
  }

</style>
