"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 9307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const delApp = async idx => {
  try {
    const url = 'http://localhost:4000/dev/delApp';
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, {
      idx
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delApp);

/***/ }),

/***/ 7383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ delAppModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/quitModal.tsx

const ModalBg = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "quitModal__ModalBg",
  componentId: "sc-10a208l-0"
})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]);
const ModalAlert = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "quitModal__ModalAlert",
  componentId: "sc-10a208l-1"
})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]);
const ModalIcon = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "quitModal__ModalIcon",
  componentId: "sc-10a208l-2"
})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:30px;"]);
const ModalDesc = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "quitModal__ModalDesc",
  componentId: "sc-10a208l-3"
})(["font-size:35px;color:black;"]);
const ModalBtnCon = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "quitModal__ModalBtnCon",
  componentId: "sc-10a208l-4"
})(["display:flex;justify-content:space-between;width:100%;height:48px;"]);
const ModalBtn = /*#__PURE__*/external_styled_components_default().button.withConfig({
  displayName: "quitModal__ModalBtn",
  componentId: "sc-10a208l-5"
})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:", ";background-color:", ";color:", ";"], props => props.border || 'rbga(0, 0, 0, 0.6)', props => props.bgc || 'white', props => props.color || 'rbga(0, 0, 0, 0.6)');
const ModalInput = /*#__PURE__*/external_styled_components_default().input.withConfig({
  displayName: "quitModal__ModalInput",
  componentId: "sc-10a208l-6"
})(["width:100%;height:30px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;margin-top:8px;"]);
// EXTERNAL MODULE: ./components/loading.tsx + 1 modules
var loading = __webpack_require__(2536);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/delAppModal.tsx







const DelAppModal = props => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: appName,
    1: setAppName
  } = (0,external_react_.useState)('');
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)('');

  const handleChange = e => {
    setAppName(e.target.value);
  };

  const handleDelBtn = () => {
    setIsLoading(true);

    if (appName === props.appName) {
      props.delAppFromModal();
    } else {
      setError('앱 이름이 일치하지 않습니다.');
    }

    setIsLoading(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalBg, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalAlert, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ModalIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(ModalDesc, {
            children: "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }), /*#__PURE__*/jsx_runtime_.jsx(ModalInput, {
            placeholder: "\uC571 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
            onChange: handleChange
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              color: 'red'
            },
            children: error || ''
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalBtnCon, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ModalBtn, {
            onClick: props.closeDelModal,
            children: "\uCDE8\uC18C"
          }), /*#__PURE__*/jsx_runtime_.jsx(ModalBtn, {
            border: "none",
            bgc: "#f44954",
            color: "white",
            onClick: handleDelBtn,
            children: "\uC0AD\uC81C"
          })]
        })]
      })
    }), isLoading && /*#__PURE__*/jsx_runtime_.jsx(loading/* default */.Z, {})]
  });
};

/* harmony default export */ const delAppModal = (DelAppModal);

/***/ })

};
;