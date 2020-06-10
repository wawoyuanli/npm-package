<template>
  <div class="rs-vehiclelist">
    <!-- <van-list>
      <div v-for="(item,index) in vehiclelist" :key="index" class="product" @click="onClick()">
        <div class="product-title">
          <span>{{ item.title }}</span>
        </div>
        <div class="product-content">
          <span class="cat-content">{{ item.content }}</span>
          <span class="cat-price">{{ item.price }}</span>
        </div>
      </div>
    </van-list> -->

    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: 'RsVehicleList',
  props: {
    // vehiclelist: {
    //   type: Array,
    //   default: Array
    // }
  }
  // methods: {

  // }
}
</script>

 <style lang="less" scoped>
@import '~@/styles/mixin.less';

.rs-catlist{
  padding-top: 10px;
  .product{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 0px;
    font-size: 12px;
    // border: 1px solid red;
    border-bottom: 1px solid #808080;
    &-title{
      overflow: hidden;
      font-weight: 900;
      margin-bottom: 5px;
      background-color: #808080;
    }
    &-content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .cat-content{
        margin-right: 95px;
      }
    }
  }
  .btn-box{
    // margin-top: 20px;
    margin: 0 auto;
      text-align: center;
    .btn{
      border: 1px solid #808080;
      background-color: #fff;
      padding: 5px;
      margin-top: 20px;
    }
  }
}
</style>
