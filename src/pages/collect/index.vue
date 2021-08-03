<template>
  <view class="index">
    <nut-toast
      :msg="toast.msg"
      v-model:visible="toast.show"
      :type="toast.type"
      :cover="toast.cover"
    />
    <nut-cell>
      <view class="infiniteUl">
        <!-- <view v-if="myfollow.length>0"> -->
          <view class="infiniteLi" v-for="item in myfollow" :key="item.id">
            <img
              :src="`https://picsum.photos/id/${item.id}/1000`"
              class="resize"
              @tap="toDetail(item.photos_index)"
            />
            <view>
              {{ item.author }}
              <nut-icon
                name="del"
                class="del"
                @tap="delfollow(item.id, item.photos_index)"
              />
            </view>
          </view>
        </view>
        <!-- <view v-else><nut-cell class="empty">暂无收藏</nut-cell></view> -->
      <!-- </view> -->
    </nut-cell>
  </view>
</template>
<script>
import { toRefs, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Taro from "@tarojs/taro";
export default {
  name: "collect",
  setup() {
    const store = useStore();
    const state = reactive({
      myfollow: computed(() => store.state.myfollow),
      toast: {
        msg: "toast",
        type: "text",
        show: false,
        cover: false,
      },
      infiniteloading: {
        isOpenRefresh: false,
        hasMore: true,
      },
    });
    const methods = {
      openToast: (type, msg, cover = false) => {
        state.toast.show = true;
        state.toast.msg = msg;
        state.toast.type = type;
        state.toast.cover = cover;
      },

      delfollow: (id, index) => {
        store.commit("DEL_MYFOLLOW", { id: id, index: index });
        methods.openToast("success", "已取消收藏", false);
      },

      GoIndex: () => {
        Taro.switchTab({
          url: `/pages/index/index`,
        });
      },
      toDetail: (index) => {
        Taro.navigateTo({
          url: `/pages/detail/index?idx=${index}`,
        });
      },
    };

    onMounted(() => {
      try {
        let pictures = Taro.getStorageSync("pictures");
        let myfollow = Taro.getStorageSync("myfollow");
        if (pictures) {
          store.commit("UPDATE_PICTURE", JSON.parse(pictures));
        }
        if (myfollow) {
          store.commit("UPDATE_MYFOLLOW", JSON.parse(myfollow));
        }
      } catch (error) {
        methods.openToast("fail", "同步数据失败");
        console.log(error.message());
      } finally {
        state.toast.show = false;
      }
      if (state.myfollow.length == 0) methods.openToast("text", "暂无收藏", true);
    });
    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>
<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.infiniteUl {
  height: 550px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
.resize {
  max-width: 100%;
  height: 260px;
  width: 95%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%),
    0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
}
.del {
  left: 30px;
  top: 7px;
}
.empty {
  width: 300px;
  margin: 150px auto;
  text-align: center;
  padding-left: 130px;
}
</style>
