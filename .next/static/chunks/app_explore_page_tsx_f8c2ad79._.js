(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/explore/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  .card {\n    width: 220px;\n    height: 280px;\n    background: linear-gradient(135deg, #67e1ff, #6797ff);\n    transition: all 0.5s ease;\n    border-radius: 16px;\n    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    perspective: 1000px;\n    overflow: hidden;\n  }\n\n  .card:hover {\n    cursor: pointer;\n    transform: scale(1.08) rotate3d(1, 1, 0, 5deg);\n    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.35),\n      0px 0px 20px rgba(103, 151, 255, 0.6);\n    background: linear-gradient(135deg, #6797ff, #67e1ff);\n  }\n\n  .first-content,\n  .second-content {\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    text-align: center;\n    transition: all 0.6s ease;\n  }\n\n  .first-content {\n    opacity: 1;\n    font-size: 1.1rem;\n    line-height: 1.4;\n  }\n\n  .card:hover .first-content {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n\n  .second-content {\n    opacity: 0;\n    transform: translateY(30px) scale(0.9) rotateX(90deg);\n    font-size: 1rem;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n\n  .card:hover .second-content {\n    opacity: 1;\n    transform: translateY(0) scale(1) rotateX(0deg);\n    font-size: 1.05rem;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
const InfoCard = (param)=>{
    let { question, answer } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "first-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/explore/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "second-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/explore/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/explore/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/explore/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InfoCard;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject());
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = InfoCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "InfoCard");
__turbopack_context__.k.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_explore_page_tsx_f8c2ad79._.js.map