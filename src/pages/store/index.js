import * as Vuex from "vuex";
import Taro from "@tarojs/taro";

const store = Vuex.createStore({
  state() {
    return {
      pictures: [],
      myfollow: [],
    };
  },
  mutations: {
    LOAD_PICTURE_MUTATIONS: (state, pictures) => {
      for (let i in pictures) {
        pictures[i].is_follow = false;
      }
      state.pictures = state.pictures.concat(pictures);
    },
    SAVE_DATA: (state) => {
      Taro.setStorage({
        key: "pictures",
        data: JSON.stringify(state.pictures),
      });

      Taro.setStorage({
        key: "myfollow",
        data: JSON.stringify(state.myfollow),
      });
    },
    ADD_TO_MYFOLLOW: (state, index) => {
      state.pictures[index].is_follow = true;
      state.pictures[index].photos_index = index;
      state.myfollow.push(state.pictures[index]);
      store.commit("SAVE_DATA");
    },
    DEL_MYFOLLOW: (state, { id, index }) => {
      for (let i in state.myfollow) {
        if (state.myfollow[i].id == id) {
          state.myfollow.splice(i, 1);
          state.pictures[index].is_follow = false;
          store.commit("SAVE_DATA");
        }
      }
    },
    UPDATE_MYFOLLOW: (state, myfollow) => {
      state.myfollow = myfollow;
    },
    UPDATE_PICTURE: (state, pictures) => {
      state.pictures = pictures;
    },
  },
  actions: {
    LOAD_PICTURE_MUTATIONS: async (context, { page = 1, limit = 5 }) => {
      const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
      const res = await Taro.request({ url });
      context.commit("LOAD_PICTURE_MUTATIONS", res.data);
      return res.data;
    },
  },
});

export default store;
