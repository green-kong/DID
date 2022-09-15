"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_loading)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/loading.ts

const LoadingIcon = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "loading__LoadingIcon",
  componentId: "sc-f5tguq-0"
})(["width:200px;height:200px;background-image:url('/loading.gif');"]);
/* harmony default export */ const loading = (LoadingIcon);
// EXTERNAL MODULE: ./styles/Modal.tsx
var Modal = __webpack_require__(208);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/loading.tsx





const LoadingModal = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Modal/* ModalBg */.g1, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* ModalAlert */.WB, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal/* ModalContent */.hz, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(loading, {}), /*#__PURE__*/jsx_runtime_.jsx(Modal/* ModalDesc */.jb, {
          children: "\uB85C\uB529\uC911"
        })]
      })
    })
  });
};

/* harmony default export */ const components_loading = (LoadingModal);

/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ ModalBtnCon),
/* harmony export */   "OQ": () => (/* binding */ ModalIcon),
/* harmony export */   "SP": () => (/* binding */ ModalInput),
/* harmony export */   "WB": () => (/* binding */ ModalAlert),
/* harmony export */   "Xp": () => (/* binding */ ModalBtn),
/* harmony export */   "g1": () => (/* binding */ ModalBg),
/* harmony export */   "hz": () => (/* binding */ ModalContent),
/* harmony export */   "jb": () => (/* binding */ ModalDesc),
/* harmony export */   "vq": () => (/* binding */ ModalDiv)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ModalBg = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalBg",
  componentId: "sc-1ucqyig-0"
})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]);
const ModalAlert = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalAlert",
  componentId: "sc-1ucqyig-1"
})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]);
const ModalIcon = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalIcon",
  componentId: "sc-1ucqyig-2"
})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:15px;"]);
const ModalContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalContent",
  componentId: "sc-1ucqyig-3"
})(["display:flex;flex-direction:column;align-items:center;"]);
const ModalDesc = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalDesc",
  componentId: "sc-1ucqyig-4"
})(["font-size:25px;color:black;"]);
const ModalInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Modal__ModalInput",
  componentId: "sc-1ucqyig-5"
})(["width:230px;height:20px;border:2px solid #a6a19e;border-radius:5px;font-size:16px;margin-top:10px;padding:7px;:focus{border:2px solid dodgerblue;outline:none;}"]);
const ModalDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalDiv",
  componentId: "sc-1ucqyig-6"
})(["margin-top:10px;color:red;"]);
const ModalBtnCon = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Modal__ModalBtnCon",
  componentId: "sc-1ucqyig-7"
})(["display:flex;justify-content:space-between;width:100%;height:48px;"]);
const ModalBtn = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Modal__ModalBtn",
  componentId: "sc-1ucqyig-8"
})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:", ";background-color:", ";color:", ";"], props => props.border || 'rbga(0, 0, 0, 0.6)', props => props.bgc || 'white', props => props.color || 'rbga(0, 0, 0, 0.6)');

/***/ })

};
;