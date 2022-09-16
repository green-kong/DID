"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 3023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL:  true ? 'http://3.38.58.1:4000' : 0
}));

/***/ }),

/***/ 1791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Global": () => (/* binding */ Global),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(5515);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./api/index.ts
var api = __webpack_require__(3023);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./styles/header.tsx

const StyledHeader = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-iv84qz-0"
})(["width:1200px;height:100px;color:white;display:flex;justify-content:space-between;align-items:center;margin:0 auto;"]);
const Logo = /*#__PURE__*/external_styled_components_default().h1.withConfig({
  displayName: "header__Logo",
  componentId: "sc-iv84qz-1"
})(["width:80px;height:80px;background-image:url('/logo.png');background-size:80px;cursor:pointer;"]);
const Nav = /*#__PURE__*/external_styled_components_default().ul.withConfig({
  displayName: "header__Nav",
  componentId: "sc-iv84qz-2"
})(["display:flex;font-size:18px;span{cursor:pointer;}& > li{margin-right:22px;}& > li:last-child{margin-right:0;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/header.tsx



 // eslint-disable-next-line import/no-cycle







const Header = () => {
  const [,, removeCookie] = (0,external_react_cookie_.useCookies)();
  const {
    isLogin,
    setIsLogin,
    setUserToken,
    setUserData
  } = (0,external_react_.useContext)(Global);

  const logout = () => {
    removeCookie('DID_Token');

    if (setIsLogin === undefined || setUserToken === undefined || setUserData === undefined) {
      return;
    }

    setUserToken('');
    setIsLogin(false);
    setUserData({});
    alert('로그아웃 되었습니다.');
    router_default().push('/');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledHeader, {
      id: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
          id: "logo"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        id: "nav",
        children: isLogin ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/myProfile",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "\uD504\uB85C\uD544\uBCF4\uAE30",
                children: "My profile"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              onClick: logout,
              children: "\uB85C\uADF8\uC544\uC6C3"
            })
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "\uB85C\uADF8\uC778",
                children: "Login"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/user/regist",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "\uD68C\uC6D0\uAC00\uC785",
                children: "Sign up"
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./components/footer.tsx



const FooterDiv = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "footer__FooterDiv",
  componentId: "sc-uxe4sa-0"
})(["margin:0 auto;width:1200px;height:40px;display:flex;justify-content:center;opacity:0.7;position:relative;bottom:0;"]);
const FooterCon = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "footer__FooterCon",
  componentId: "sc-uxe4sa-1"
})(["width:250px;height:100%;display:flex;justify-content:center;align-items:center;color:white;"]);
const FooterLogo = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "footer__FooterLogo",
  componentId: "sc-uxe4sa-2"
})(["width:30px;height:30px;background-image:url('/logo.png');background-size:30px;"]);
const FooterText = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "footer__FooterText",
  componentId: "sc-uxe4sa-3"
})(["color:white;font-size:12px;"]);

const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(FooterDiv, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterCon, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FooterLogo, {}), /*#__PURE__*/jsx_runtime_.jsx(FooterText, {
        children: "DECENTRALIZED IDENTIFIER"
      })]
    })
  });
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // eslint-disable-next-line import/no-cycle







const Wrap = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "_app__Wrap",
  componentId: "sc-1pw3xut-0"
})(["position:relative;z-index:2;background:linear-gradient(180deg,#071832 0%,#103c73 100%);"]);
const ContentWrap = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "_app__ContentWrap",
  componentId: "sc-1pw3xut-1"
})(["width:1200px;min-height:calc(100vh - 100px - 40px);color:white;margin:0 auto;"]);
const Global = /*#__PURE__*/(0,external_react_.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: userToken,
    1: setUserToken
  } = (0,external_react_.useState)('');
  const {
    0: isLogin,
    1: setIsLogin
  } = (0,external_react_.useState)(false);
  const {
    0: userData,
    1: setUserData
  } = (0,external_react_.useState)({});
  const [cookies,, removeCookie] = (0,external_react_cookie_.useCookies)();
  const globalState = {
    userToken,
    setUserToken,
    isLogin,
    setIsLogin,
    userData,
    setUserData
  };
  (0,external_react_.useEffect)(() => {
    if (userToken === '') return;

    (async () => {
      try {
        const response = await api/* default.post */.Z.post('/user/sendToken', {
          userToken
        });
        const result = response.data;
        setIsLogin(true);
        setUserData(result);
      } catch (e) {
        console.log(e);
        setIsLogin(false);
        removeCookie('DID_Token');
        setUserToken('');
      }
    })();
  }, [userToken]);
  (0,external_react_.useEffect)(() => {
    const {
      DID_Token: token
    } = cookies;

    if (token) {
      setUserToken(token);
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Global.Provider, {
      value: globalState,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrap, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx(ContentWrap, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
      })
    })
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ })

};
;