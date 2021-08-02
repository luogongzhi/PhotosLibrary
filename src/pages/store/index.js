import * as Vuex from "vuex";
import Taro from '@tarojs/taro'

const store = Vuex.createStore({
    state() {
        return {
            pictures: []
        }
    },
    mutations: {
        LOAD_PICTURE_MUTATIONS: (state, pictures) => {
            state.pictures = state.pictures.concat(pictures);
        }
    },
    actions: {
        LOAD_PICTURE_MUTATIONS: async(context, { page = 1, limit = 5 }) => {
            const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
            const res = await Taro.request({ url })
            context.commit("LOAD_PICTURE_MUTATIONS", res.data)
            return res.data
        }
    }
})

export default store