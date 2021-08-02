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
        <nut-infiniteloading
          pull-txt="loading"
          load-more-txt="没有啦～"
          container-id="scrollDemo"
          :is-open-refresh="infiniteloading.isOpenRefresh"
          :has-more="infiniteloading.hasMore"
          @load-more="loadMore"
        >
          <view
            class="infiniteLi"
            v-for="(item, index) in pictures"
            :key="item.id"
          >
            <img
              :src="`https://picsum.photos/id/${item.id}/200`"
              class="resize"
              @click="toDetail(index)"
            />
            <view>{{ index + "-" + item.author }}</view>
          </view>
        </nut-infiniteloading>
      </view>
    </nut-cell>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Taro from "@tarojs/taro";
export default {
  name: "Index",
  setup() {
    const handleClick = () => {
      console.log('触发返回顶部');
    };
    const store = useStore();
    const state = reactive({
      pictures: computed(() => store.state.pictures),
      page: 1,
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

      loadPage: async (page) => {
        methods.openToast("loading", "加载中", true);
        try {
          const res = await store.dispatch("LOAD_PICTURE_MUTATIONS", {
            page: page,
          });
        } catch (error) {
          methods.openToast("fail", "加载失败");
          console.log(error.message());
        } finally {
          state.toast.show = false;
        }
      },

      loadMore: (done) => {
        methods.loadPage(++state.page);
        done();
      },

      toDetail: (index) => {
        Taro.navigateTo({
          url: `/pages/detail/index?idx=${index}`,
        });
      },

      init: () => {
        methods.loadPage(state.page);
      },
    };

    onMounted(() => {
      methods.init();
    });
    return {
      ...toRefs(state),
      ...methods,
      handleClick
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
</style>
