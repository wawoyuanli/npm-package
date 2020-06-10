<template>
  <div class="rs-tablist">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(item,index) in list" :key="index" class="product" @click="onClick(item.title)">
          <!--
          <div class="product-img" v-show="show">
            <img :src="`http://server.kingtool.top/cshop-ads/controller/file/show/`+item.guideImage" width="100%">
          </div>
            -->

          <div v-show="comShow" class="shop">
            <div class="product-img">
              <img :src="`http://server.kingtool.top/cshop-ads/controller/file/show/`+item.guideImage" width="100%">
            </div>
            <div class="product-content">
              <div class="product-guidContent" v-html="item.guidContent" />
              <!-- <div class="product-manufactor">浙商保险发布</div> -->
            </div>
          </div>

          <div v-show="isShow" class="new">
            <div class="product-content">
              <div class="product-title" v-html="item.title" />
              <div class="product-manufactor">浙商保险发布</div>
            </div>

            <div class="product-img">
              <img :src="`http://server.kingtool.top/cshop-ads/controller/file/show/`+item.guideImage" width="100%">
            </div>
          </div>

        </div></van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'RsTabList',
  props: {
    infoType: {
      type: String,
      default: '1'
    },
    baseUrl: {
      type: String,
      default: '/cshop-ads/cshop-ads/controller/information/manager/findPagination'
    },
    comShow: {
      type: Boolean,
      default: Boolean
    },
    isShow: {
      type: Boolean,
      default: Boolean
    },
    jump: {
      type: String,
      default: 'show'
    }
  },
  data() {
    return {
      refreshing: false,
      finished: false,
      loading: false,
      list: [],
      data: {}
    }
  },
  watch: {
    infoType(oldVal, newVal) {
      this.infoType = oldVal
    }
  },
  mounted() {
    if (this.comShow === true) {
      if (this.infoType === '1') {
        this.date = {
          hotFlag: this.infoType,
          from: 1,
          limit: 10
        }
      } else {
        this.date = {
          shopType: this.infoType,
          from: 1,
          limit: 10
        }
      }
    } else {
      this.date = {
        infoType: this.infoType,
        from: 1,
        limit: 10
      }
    }
  },
  methods: {
    onLoad(infoType, baseURL) {
      const _this = this
      this.$http({
        url: this.baseUrl,
        method: 'post',
        data: this.date
      })
        .then(function(res) {
          _this.list = res.data$
          _this.finished = true
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    onRefresh() {
      this.finished = false
      this.loading = true
      this.onLoad()
    },
    onClick(title) {
      if (this.jump === 'show') {
        this.$router.push({
          path: 'cshop_nonvhl_cxjc_index'
          // query: { title: title }
        })
      } else {
        this.$router.push({
          path: 'cshop_new_detail_index',
          query: { title: title }
        })
      }
    }
  }
}
</script>

 <style lang="less" scoped>
@import '~@/styles/mixin.less';

.rs-tablist{
  // margin-top: 20px;
  .product{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
    margin: 0 15px;
    // border: 1px solid red;
    border-bottom: 1px solid #f5f5f5;
    padding: 10px 0px;
    .shop{
      display: flex;
      flex-direction: row;
      width: 100%;
      .product-img{
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 10px;
      background-color: #e5e5e5;
      }
      .product-content{
        width: 60%;
        font-size: 14px;
        margin-left: 34px;
        .product-guidContent{
          color: @primaryTextColor;
          font-size: 14px;
          font-weight: bold;
          // margin-bottom: 15px;
          margin: 10px 0px;
        }
        // .product-manufactor{
        //   font-size: 12px;
        // }
      }
    }
    .new{
      display: flex;
      flex-direction: row;
      width: 100%;
      .product-img{
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 10px;
      }
      .product-content{
        width: 60%;
        font-size: 14px;
        margin-right: 34px;
        .product-title{
          color: @primaryTextColor;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .product-manufactor{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
