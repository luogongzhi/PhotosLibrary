(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/collect/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=65d3c54e */ "./src/pages/collect/index.vue?vue&type=template&id=65d3c54e");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/collect/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_65d3c54e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss */ "./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss");





_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/collect/index.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_Desktop_Vue_PhotosLibrary_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "collect",
  setup: function setup() {
    var store = Object(vuex__WEBPACK_IMPORTED_MODULE_3__[/* useStore */ "b"])();
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ "j"])({
      myfollow: Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* computed */ "f"])(function () {
        return store.state.myfollow;
      }),
      toast: {
        msg: "toast",
        type: "text",
        show: false,
        cover: false
      },
      infiniteloading: {
        isOpenRefresh: false,
        hasMore: true
      }
    });
    var methods = {
      openToast: function openToast(type, msg) {
        var cover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        state.toast.show = true;
        state.toast.msg = msg;
        state.toast.type = type;
        state.toast.cover = cover;
      },
      delfollow: function delfollow(id, index) {
        store.commit("DEL_MYFOLLOW", {
          id: id,
          index: index
        });
        methods.openToast("success", "已取消收藏", false);
      },
      GoIndex: function GoIndex() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.switchTab({
          url: "/pages/index/index"
        });
      },
      toDetail: function toDetail(index) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
          url: "/pages/detail/index?idx=".concat(index)
        });
      }
    };
    Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* onMounted */ "x"])(function () {
      try {
        var pictures = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("pictures");
        var myfollow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("myfollow");

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
    return Object(C_Users_Desktop_Vue_PhotosLibrary_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_Desktop_Vue_PhotosLibrary_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ "s"])(state)), methods);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  class: "index"
};
var _hoisted_2 = {
  class: "infiniteUl"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_toast = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-toast");

  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-icon");

  var _component_nut_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-cell");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_toast, {
    msg: _ctx.toast.msg,
    visible: _ctx.toast.show,
    "onUpdate:visible": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.toast.show = $event;
    }),
    type: _ctx.toast.type,
    cover: _ctx.toast.cover
  }, null, 8
  /* PROPS */
  , ["msg", "visible", "type", "cover"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_cell, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "L"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("view", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "h"])(" <view v-if=\"myfollow.length>0\"> "), (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "C"])(_ctx.myfollow, function (item) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", {
          class: "infiniteLi",
          key: item.id
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("img", {
          src: "https://picsum.photos/id/".concat(item.id, "/1000"),
          class: "resize",
          onTap: function onTap($event) {
            return _ctx.toDetail(item.photos_index);
          }
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , ["src", "onTap"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "K"])(item.author) + " ", 1
        /* TEXT */
        ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_icon, {
          name: "del",
          class: "del",
          onTap: function onTap($event) {
            return _ctx.delfollow(item.id, item.photos_index);
          }
        }, null, 8
        /* PROPS */
        , ["onTap"])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "h"])(" <view v-else><nut-cell class=\"empty\">暂无收藏</nut-cell></view> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "h"])(" </view> ")];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collect/index.vue":
/*!*************************************!*\
  !*** ./src/pages/collect/index.vue ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue");


var config = {"navigationBarTitleText":"PHOTOSLIBRARY-我的收藏"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/collect/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=template&id=65d3c54e":
/*!*******************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=template&id=65d3c54e ***!
  \*******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=65d3c54e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/collect/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map