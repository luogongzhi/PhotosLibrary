<template>
  <view class="detail">
    <view>
      <img :src="download_url" class="resize" />
      <nut-cell-group>
        <nut-cell title="author" icon="my" :desc = "author" ></nut-cell>
        <nut-cell title="pictureID" icon="issue" :desc = "id" ></nut-cell>
        <nut-cell title="width" icon="date" :desc = "width" ></nut-cell>
        <nut-cell title="height" icon="date" :desc = "height" ></nut-cell>
        <nut-cell title="url" icon="link" :desc = "url" ></nut-cell>
        <nut-cell title="download_url" icon="link" :desc = "download_url" ></nut-cell>
      </nut-cell-group>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { useStore } from "vuex";
import { computed, onMounted, reactive, toRefs } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const params = Taro.getCurrentInstance().router.params;
    const state = reactive({
      pictures: computed(() => store.state.pictures),
      id: "",
      author: "",
      width: "",
      height: "",
      url: "",
      download_url: "",
    });

    const methods = {
      init: ({ idx }) => {
        const data = state.pictures[idx];
        state.id = String(data.id);
        state.author = String(data.author);
        state.width = String(data.width);
        state.height = String(data.height);
        state.url = String(data.url);
        state.download_url = String(data.download_url);
      },
    };

    onMounted(() => {
      methods.init(params);
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.detail {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.resize {
  max-width: 100%;
  height: 270px;
  width: 95%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%),
    0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
}
</style>
