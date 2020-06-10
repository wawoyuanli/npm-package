<template>
  <div class="topnews" :style="`width:${width}`">
    <div class="hadlines">
      <span>
        <img src="../../../assets/Headlines.png" width="80%" alt="">
      </span>
    </div>
    <div class="text-banner">
      <van-swipe
        :autoplay="5000"
        :show-indicators="false"
        style="height:25px"
        vertical
      >
        <van-swipe-item v-for="(item,index) in banner" :key="index" height="25">
          <div class="van-ellipsis information">
            <a style="color:#101010" :href="'#/cshop_new_detail_index?id='+item.id">{{ item.title }}</a>
          </div>
        </van-swipe-item>
        <!-- <div class="custom-indicator" /> -->
      </van-swipe>
    </div>
    <div class="more-button" @click="newClick">
      <span class="more">更多资讯</span>
      <span class="icon">
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RsTopnews',
  props: {
    width: {
      type: String,
      default: '90%'
    }
  },
  data() {
    return {
      banner: []
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  &-item {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    img {
      display: block;
    }
  }
}
.topnews {
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  background-color: #f6f6f6;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0px;
  .hadlines {
    margin-left: 10px;
    width: 40px;
    span {
      color: orange;
      font-size: 16px;
    }
  }
  .text-banner {
    width: 60%;
    height: 25px;
    line-height: 25px;
    align-items: center;
    margin-left: 5px;
    .move-information {
      // line-height: 75px;
      display: flex;
      align-items: center;
      .information {
        // height: 25px;
        // line-height: 25px;
        font-size: 12px;
        vertical-align: middle;
        color: #000;
      }
    }
  }
  .more-button {
    width: 26%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .more {
      font-size: 12px;
      margin-right: 3px;
      color: gray;
    }
    .icon {
      line-height: 5px;
      vertical-align: middle;
      color: red;
    }
  }
}
</style>
