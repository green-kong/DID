"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 5747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "form-data"
var external_form_data_ = __webpack_require__(8941);
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./utils/validation.ts
const validation = ({
  values: {
    name,
    desc,
    host,
    redirectURI,
    pointRouter,
    pointUseRouter
  },
  usePoint
}) => {
  const errors = {};
  const startREGEX = /^https?:\/\//;
  const endREGEX = /\/$/;

  if (!name) {
    errors.name = '앱 이름을 입력해주세요.';
  } else if (name.length > 20) {
    errors.name = '앱 이름은 최대 20글자 까지 가능합니다.';
  }

  if (desc && desc.length > 200) {
    errors.desc = '앱 설명은 최대 200글자 까지 가능합니다.';
  }

  if (!host) {
    errors.host = '사이트 주소를 입력해주세요.';
  } else if (!startREGEX.test(host)) {
    errors.host = '사이트 주소는 http:// 또는 https://로 작성해 주세요.';
  } else if (!endREGEX.test(host)) {
    errors.host = '사이트 주소는 / 로 끝나야 합니다.';
  }

  if (!redirectURI) {
    errors.redirectURI = 'redirect uri 를 입력해주세요.';
  } else if (!startREGEX.test(redirectURI)) {
    errors.redirectURI = '리다이렉트 주소는 http:// 또는 https://로 작성해 주세요.';
  }

  if (usePoint) {
    console.log(pointRouter);

    if (!pointRouter) {
      errors.pointRouter = '포인트 조회에 사용될 라우터 주소를 입력해주세요.';
    } else if (!startREGEX.test(pointRouter)) {
      errors.pointRouter = '라우터 주소는 http:// 또는 https://로 작성해 주세요.';
    }

    if (!pointUseRouter) {
      errors.pointUseRouter = '포인트 조회에 사용될 라우터 주소를 입력해주세요.';
    } else if (!startREGEX.test(pointUseRouter)) {
      errors.pointUseRouter = '라우터 주소는 http:// 또는 https://로 작성해 주세요.';
    }
  }

  return errors;
};

/* harmony default export */ const utils_validation = (validation);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./api/dev/addApp.ts


const addAppRequest = async formData => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    },
    withCredentials: true
  };
  const response = await external_axios_default().post('http://localhost:4000/dev/addApp', formData, config);

  if (response.status !== 200) {
    return false;
  } else {
    return response.data;
  }
};

/* harmony default export */ const addApp = (addAppRequest);
;// CONCATENATED MODULE: ./api/dev/updateApp.ts


const updateApp = async formData => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    },
    withCredentials: true
  };
  const response = await external_axios_default().post('http://localhost:4000/dev/updateApp', formData, config);

  if (response.status !== 200) {
    return false;
  } else {
    return response.data;
  }
};

/* harmony default export */ const dev_updateApp = (updateApp);
// EXTERNAL MODULE: ./pages/_app.tsx + 3 modules
var _app = __webpack_require__(1791);
;// CONCATENATED MODULE: ./hooks/useForm.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useForm = (initialValues, imgFile, LoadingModalControll, usePoint, type = 'addApp') => {
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)(initialValues);
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)({});
  const {
    0: submit,
    1: setSubmit
  } = (0,external_react_.useState)(false);
  const {
    userData
  } = (0,external_react_.useContext)(_app.Global);
  const formData = new (external_form_data_default())();

  const reset = defaultValues => {
    setValues(defaultValues);
  };

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: value
    }));
  };

  const handleSubmit = e => {
    setSubmit(true);
    e.preventDefault();
    setErrors(utils_validation({
      values,
      usePoint
    }));
  };

  (0,external_react_.useEffect)(() => {
    (async () => {
      if (!submit) return;
      if (Object.keys(errors).length) return;
      if (!userData) return;
      LoadingModalControll();
      formData.append('u_idx', userData.idx);
      formData.append('file', imgFile);
      formData.append('name', values.name);
      formData.append('desc', values.desc);
      formData.append('host', values.host);
      formData.append('redirect', values.redirectURI);
      formData.append('usePoint', usePoint);

      if (usePoint) {
        formData.append('pointRouter', values.pointRouter);
        formData.append('pointUseRouter', values.pointUseRouter);
      }

      let response;

      switch (type) {
        case 'addApp':
          response = await addApp(formData);
          console.log(response);
          break;

        case 'updateApp':
          formData.append('idx', values.idx);
          response = await dev_updateApp(formData);
          break;

        default:
          break;
      }

      if (response) {
        LoadingModalControll();
        router_default().push('/dev/appList');
        return;
      }

      LoadingModalControll();
    })();
  }, [errors]);
  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    reset
  };
};

/* harmony default export */ const hooks_useForm = (useForm);

/***/ }),

/***/ 1519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useImgUpload = () => {
  const {
    0: fileName,
    1: setFileName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: imgSrc,
    1: setImgSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: imgFile,
    1: setImgFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const imgChangeHandler = e => {
    const {
      files
    } = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;

      if (base64) {
        setImgSrc(base64.toString());
      }
    };

    if (files) {
      reader.readAsDataURL(files[0]);
      setImgFile(files[0]);
      setFileName(files[0].name);
    }
  };

  return {
    imgChangeHandler,
    fileName,
    imgSrc,
    imgFile
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useImgUpload);

/***/ }),

/***/ 4696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "De": () => (/* binding */ ImgInput),
/* harmony export */   "EH": () => (/* binding */ FileNameInput),
/* harmony export */   "P": () => (/* binding */ FileSearchBtn),
/* harmony export */   "Uu": () => (/* binding */ ImagePreviewCon),
/* harmony export */   "g_": () => (/* binding */ UploadInputCon),
/* harmony export */   "ow": () => (/* binding */ AddAppFrm)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AddAppFrm = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "addApp__AddAppFrm",
  componentId: "sc-5swmt5-0"
})(["width:330px;margin:0 auto;& > ul > li{display:flex;flex-direction:column;margin-bottom:15px;& > label{color:white;margin-bottom:3px;font-size:13px;}& > input{width:100%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;background-color:white;}& > input:focus{border:2px solid dodgerblue;outline:none;}& > textarea{width:100%;height:100px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;resize:none;}& > textarea:focus{border:2px solid dodgerblue;outline:none;}& > span{margin-top:5px;color:red;}& > .radioWrap{width:100%;padding-right:20px;padding-left:20px;box-sizing:border-box;display:flex;justify-content:space-between;& > .checkboxWrap{& > label{margin-right:20px;}}}}"]);
const UploadInputCon = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "addApp__UploadInputCon",
  componentId: "sc-5swmt5-1"
})(["width:100%;display:flex;justify-content:space-between;"]);
const FileNameInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "addApp__FileNameInput",
  componentId: "sc-5swmt5-2"
})(["width:82%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;"]);
const FileSearchBtn = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "addApp__FileSearchBtn",
  componentId: "sc-5swmt5-3"
})(["border-radius:5px;background-color:#007f94;border:none;box-sizing:border-box;color:white;font-size:12px;width:15%;cursor:pointer;display:flex;justify-content:center;align-items:center;"]);
const ImgInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "addApp__ImgInput",
  componentId: "sc-5swmt5-4"
})(["display:none;"]);
const ImagePreviewCon = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "addApp__ImagePreviewCon",
  componentId: "sc-5swmt5-5"
})(["width:100%;height:120px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;background-color:white;display:flex;justify-content:center;align-items:center;"]);

/***/ }),

/***/ 5485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "wW": () => (/* binding */ ContentTitle),
/* harmony export */   "zg": () => (/* binding */ TitleIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContentTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "title__ContentTitle",
  componentId: "sc-1fjmapq-0"
})(["width:210px;height:96px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:45px;"]);
const TitleIcon = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "title__TitleIcon",
  componentId: "sc-1fjmapq-1"
})(["width:50px;height:50px;background-image:url(", ");background-size:50px;"], props => props.imageUrl);
const Title = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "title__Title",
  componentId: "sc-1fjmapq-2"
})(["font-size:30px;color:white;"]);

/***/ })

};
;