(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/ui/BasicMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BasicMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ClickAwayListener/ClickAwayListener.js [app-client] (ecmascript) <export ClickAwayListener as default>");
(()=>{
    const e = new Error("Cannot find module './Radio'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BasicMenu() {
    _s();
    const [anchorEl, setAnchorEl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const open = Boolean(anchorEl);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = (event)=>{
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const goToProfile = ()=>{
        handleClose();
        router.push("/profile");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "basic-button",
                "aria-controls": open ? "dashboard-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                onClick: handleClick,
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/BasicMenu.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                anchorEl: anchorEl,
                placement: "bottom-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__["default"], {
                    onClickAway: handleClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Radio, {}, void 0, false, {
                            fileName: "[project]/app/components/ui/BasicMenu.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/BasicMenu.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/BasicMenu.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/BasicMenu.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/BasicMenu.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(BasicMenu, "xsU0udaUSNXED+GnbZgiagohUo4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BasicMenu;
var _c;
__turbopack_context__.k.register(_c, "BasicMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/ColorModeToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ColorModeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 60px;\n  height: 30px;\n  border-radius: 9999px;\n  background: ",
        ";\n  position: relative;\n  cursor: pointer;\n  transition: background 0.3s;\n\n  .circle {\n    width: 26px;\n    height: 26px;\n    background: ",
        ";\n    border-radius: 50%;\n    position: absolute;\n    top: 2px;\n    left: ",
        ";\n    transition: all 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .icon {\n      width: 16px;\n      height: 16px;\n      color: ",
        ";\n    }\n  }\n\n  &:hover {\n    opacity: 0.9;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ColorModeToggle() {
    _s();
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorModeToggle.useEffect": ()=>setMounted(true)
    }["ColorModeToggle.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === "dark";
    const toggleTheme = ()=>setTheme(isDark ? "light" : "dark");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleWrapper, {
        onClick: toggleTheme,
        $isDark: isDark,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "circle",
            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "icon"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/ColorModeToggle.tsx",
                lineNumber: 21,
                columnNumber: 19
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "icon"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/ColorModeToggle.tsx",
                lineNumber: 21,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ui/ColorModeToggle.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/ColorModeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ColorModeToggle, "t8+WCtmY6Q/K+YFmVfyga28+HWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ColorModeToggle;
const ToggleWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    shouldForwardProp: (prop)=>prop !== "$isDark"
})(_templateObject(), (param)=>{
    let { $isDark } = param;
    return $isDark ? "#0B1F3A" : "#f0c95f";
}, (param)=>{
    let { $isDark } = param;
    return $isDark ? "#fff" : "#FFD93B";
}, (param)=>{
    let { $isDark } = param;
    return $isDark ? "32px" : "2px";
}, (param)=>{
    let { $isDark } = param;
    return $isDark ? "#0B1F3A" : "#ffffff";
});
_c1 = ToggleWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "ColorModeToggle");
__turbopack_context__.k.register(_c1, "ToggleWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$BasicMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/BasicMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$ColorModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/ColorModeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const navLinks = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/explore",
            label: "Explore"
        },
        {
            href: "/pricing",
            label: "Pricing"
        },
        {
            href: "/about",
            label: "About"
        },
        {
            href: "/inbox",
            label: "Inbox"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-[#0B1F3A] shadow-md sticky top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl font-bold tracking-tight text-white hover:text-[#1A73E8] transition-colors duration-300 cursor-pointer",
                            children: "AzPayGo"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/Navbar.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Navbar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex gap-6 items-center",
                        children: [
                            navLinks.map((param)=>{
                                let { href, label } = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    className: "text-white hover:text-[#1A73E8] transition",
                                    children: label
                                }, href, false, {
                                    fileName: "[project]/app/components/ui/Navbar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$BasicMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/ui/Navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$ColorModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/ui/Navbar.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white",
                        onClick: toggleMenu,
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/Navbar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-4 pb-4",
                children: [
                    navLinks.map((param)=>{
                        let { href, label } = param;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "block py-2 text-gray-200 hover:text-white transition",
                            onClick: ()=>setIsOpen(false),
                            children: label
                        }, href, false, {
                            fileName: "[project]/app/components/ui/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$BasicMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/ui/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$ColorModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/ui/Navbar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/Navbar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/LoaderText.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% { top: 0px; }\n  50% { top: 54px; }\n  100% { top: 0px; }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0%, 75%, 100% { clip-path: inset(0 0 0 0); }\n  25% { clip-path: inset(100% 0 0 0); }\n  50% { clip-path: inset(0 0 100% 0); }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  .loader {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    height: 60px;\n    overflow: hidden;\n  }\n\n  .loader span {\n    display: block;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    font-size: 60px;\n    font-weight: 700;\n    color: #0b1f3a;\n    animation: ",
        " ",
        'ms linear infinite;\n    z-index: 2;\n  }\n\n  .loader::after {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 6px;\n    border-radius: 4px;\n    background-color: #ff828291;\n    filter: blur(10px);\n    animation: ',
        " ",
        'ms linear infinite;\n    left: 0;\n    z-index: 0;\n  }\n\n  .loader::before {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 5px;\n    border-radius: 4px;\n    background-color: #ff8282;\n    animation: ',
        " ",
        "ms linear infinite;\n    left: 0;\n    z-index: 1;\n    filter: opacity(0.9);\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const words = [
    "Rahat",
    "Asan",
    "Sürətli"
];
const scanDuration = 2500;
const LoaderText = ()=>{
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoaderText.useEffect": ()=>{
            const interval = setInterval({
                "LoaderText.useEffect.interval": ()=>{
                    setCurrent({
                        "LoaderText.useEffect.interval": (prev)=>(prev + 1) % words.length
                    }["LoaderText.useEffect.interval"]);
                }
            }["LoaderText.useEffect.interval"], scanDuration);
            return ({
                "LoaderText.useEffect": ()=>clearInterval(interval)
            })["LoaderText.useEffect"];
        }
    }["LoaderText.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: words[current]
            }, void 0, false, {
                fileName: "[project]/app/components/ui/LoaderText.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ui/LoaderText.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ui/LoaderText.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoaderText, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c = LoaderText;
const scan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject());
const cut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1());
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject2(), cut, scanDuration, scan, scanDuration, scan, scanDuration);
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = LoaderText;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoaderText");
__turbopack_context__.k.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/Info.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
;
;
const Info = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl font-bold text-center mb-12 text-[#0B1F3A]",
                children: "Xüsusiyyətlərimiz"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/Info.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpeedtest"], {
                                        className: "text-[#0B1F3A] text-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold",
                                        children: "İldırım Sürətli Transferlər"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: "Bank əməliyyatlarının vaxtını gözləmədən saniyələr ərzində bütün dünyaya pul göndərin."
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Info.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSecurity"], {
                                        className: "text-[#0B1F3A] text-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold",
                                        children: "Təhlükəsiz Ödənişlər"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: "Bütün əməliyyatlar fırıldaqçılıqdan qorunmaq üçün şifrələnir və 24/7 nəzarət olunur."
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Info.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdAttachMoney"], {
                                        className: "text-[#0B1F3A] text-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold",
                                        children: "Aşağı Ödənişlər"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/Info.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    "Daha ucuz ödəniş prosesi ilə daha çox pula qənaət edin.",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/Info.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Info.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/Info.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/Info.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Info;
const __TURBOPACK__default__export__ = Info;
var _c;
__turbopack_context__.k.register(_c, "Info");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/GetStartButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center pt-6",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/GetStartButton.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 block px-6 py-3 rounded-xl bg-gray-950",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "transition-all duration-500 group-hover:translate-x-1",
                                        children: "İndi başlayaq"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/GetStartButton.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 transition-transform duration-500 group-hover:translate-x-1",
                                        "data-slot": "icon",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            clipRule: "evenodd",
                                            d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
                                            fillRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ui/GetStartButton.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/GetStartButton.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/GetStartButton.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/GetStartButton.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ui/GetStartButton.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ui/GetStartButton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/GetStartButton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/LearnMoreButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LearnMoreButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center pt-6",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 block px-6 py-3 rounded-xl bg-gray-950",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "transition-all duration-500 group-hover:translate-x-1",
                                        children: [
                                            "Daha çoxunu gör",
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 transition-transform duration-500 group-hover:translate-x-1",
                                        "data-slot": "icon",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            clipRule: "evenodd",
                                            d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
                                            fillRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/LearnMoreButton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LearnMoreButton;
const __TURBOPACK__default__export__ = LearnMoreButton;
var _c;
__turbopack_context__.k.register(_c, "LearnMoreButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/features/Header/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-80 h-auto",
                        src: "https://i.pinimg.com/736x/89/e0/a4/89e0a4c0fce683f5cf4c339006ba4db5.jpg",
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl text-[#0B1F3A] whitespace-normal break-words",
                            children: "İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və əlçatan oldu."
                        }, void 0, false, {
                            fileName: "[project]/app/features/Header/header.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/features/Header/header.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl text-[#0B1F3A] whitespace-normal break-words",
                            children: "İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və əlçatan oldu."
                        }, void 0, false, {
                            fileName: "[project]/app/features/Header/header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-80 h-auto",
                        src: "https://i.pinimg.com/736x/33/eb/b3/33ebb309990f70eb41100b57e92a86ed.jpg",
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/features/Header/header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-80 h-auto",
                        src: "https://i.pinimg.com/736x/c9/64/0e/c9640e3e2d4a3f54c71ea6115b45bf06.jpg",
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl text-[#0B1F3A] whitespace-normal break-words",
                            children: "İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və əlçatan oldu."
                        }, void 0, false, {
                            fileName: "[project]/app/features/Header/header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/features/Header/header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/features/Header/header.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/Header/header.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/cx.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cx": ()=>cx,
    "sortCx": ()=>sortCx
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
const twMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
    extend: {
        theme: {
            text: [
                "display-xs",
                "display-sm",
                "display-md",
                "display-lg",
                "display-xl",
                "display-2xl"
            ]
        }
    }
});
const cx = twMerge;
function sortCx(classes) {
    return classes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/buttons/app-store-buttons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppGalleryButton": ()=>AppGalleryButton,
    "AppStoreButton": ()=>AppStoreButton,
    "GalaxyStoreButton": ()=>GalaxyStoreButton,
    "GooglePlayButton": ()=>GooglePlayButton,
    "GooglePlayWhiteButton": ()=>GooglePlayWhiteButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cx.ts [app-client] (ecmascript)");
"use client";
;
;
const GooglePlayButton = (param)=>{
    let { size = "md", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        "aria-label": "Get it on Google Play",
        href: "#",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("rounded-[7px] bg-black ring-1 ring-app-store-badge-border outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size === "md" ? 135 : 149,
            height: size === "md" ? 40 : 44,
            viewBox: "0 0 135 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M68.136 21.7511C65.784 21.7511 63.867 23.5401 63.867 26.0041C63.867 28.4531 65.784 30.2571 68.136 30.2571C70.489 30.2571 72.406 28.4531 72.406 26.0041C72.405 23.5401 70.488 21.7511 68.136 21.7511ZM68.136 28.5831C66.847 28.5831 65.736 27.5201 65.736 26.0051C65.736 24.4741 66.848 23.4271 68.136 23.4271C69.425 23.4271 70.536 24.4741 70.536 26.0051C70.536 27.5191 69.425 28.5831 68.136 28.5831ZM58.822 21.7511C56.47 21.7511 54.553 23.5401 54.553 26.0041C54.553 28.4531 56.47 30.2571 58.822 30.2571C61.175 30.2571 63.092 28.4531 63.092 26.0041C63.092 23.5401 61.175 21.7511 58.822 21.7511ZM58.822 28.5831C57.533 28.5831 56.422 27.5201 56.422 26.0051C56.422 24.4741 57.534 23.4271 58.822 23.4271C60.111 23.4271 61.222 24.4741 61.222 26.0051C61.223 27.5191 60.111 28.5831 58.822 28.5831ZM47.744 23.0571V24.8611H52.062C51.933 25.8761 51.595 26.6171 51.079 27.1321C50.451 27.7601 49.468 28.4531 47.744 28.4531C45.086 28.4531 43.008 26.3101 43.008 23.6521C43.008 20.9941 45.086 18.8511 47.744 18.8511C49.178 18.8511 50.225 19.4151 50.998 20.1401L52.271 18.8671C51.191 17.8361 49.758 17.0471 47.744 17.0471C44.103 17.0471 41.042 20.0111 41.042 23.6521C41.042 27.2931 44.103 30.2571 47.744 30.2571C49.709 30.2571 51.192 29.6121 52.351 28.4041C53.543 27.2121 53.914 25.5361 53.914 24.1831C53.914 23.7651 53.882 23.3781 53.817 23.0561H47.744V23.0571ZM93.052 24.4581C92.698 23.5081 91.618 21.7511 89.411 21.7511C87.22 21.7511 85.399 23.4751 85.399 26.0041C85.399 28.3881 87.204 30.2571 89.62 30.2571C91.569 30.2571 92.697 29.0651 93.165 28.3721L91.715 27.4051C91.232 28.1141 90.571 28.5811 89.62 28.5811C88.67 28.5811 87.993 28.1461 87.558 27.2921L93.245 24.9401L93.052 24.4581ZM87.252 25.8761C87.204 24.2321 88.525 23.3951 89.476 23.3951C90.217 23.3951 90.845 23.7661 91.055 24.2971L87.252 25.8761ZM82.629 30.0001H84.497V17.4991H82.629V30.0001ZM79.567 22.7021H79.503C79.084 22.2021 78.278 21.7511 77.264 21.7511C75.137 21.7511 73.188 23.6201 73.188 26.0211C73.188 28.4051 75.137 30.2581 77.264 30.2581C78.279 30.2581 79.084 29.8071 79.503 29.2921H79.567V29.9041C79.567 31.5311 78.697 32.4011 77.296 32.4011C76.152 32.4011 75.443 31.5801 75.153 30.8871L73.526 31.5641C73.993 32.6911 75.233 34.0771 77.296 34.0771C79.487 34.0771 81.34 32.7881 81.34 29.6461V22.0101H79.568V22.7021H79.567ZM77.425 28.5831C76.136 28.5831 75.057 27.5031 75.057 26.0211C75.057 24.5221 76.136 23.4271 77.425 23.4271C78.697 23.4271 79.696 24.5221 79.696 26.0211C79.696 27.5031 78.697 28.5831 77.425 28.5831ZM101.806 17.4991H97.335V30.0001H99.2V25.2641H101.805C103.873 25.2641 105.907 23.7671 105.907 21.3821C105.907 18.9971 103.874 17.4991 101.806 17.4991ZM101.854 23.5241H99.2V19.2391H101.854C103.249 19.2391 104.041 20.3941 104.041 21.3821C104.041 22.3501 103.249 23.5241 101.854 23.5241ZM113.386 21.7291C112.035 21.7291 110.636 22.3241 110.057 23.6431L111.713 24.3341C112.067 23.6431 112.727 23.4171 113.418 23.4171C114.383 23.4171 115.364 23.9961 115.38 25.0251V25.1541C115.042 24.9611 114.318 24.6721 113.434 24.6721C111.649 24.6721 109.831 25.6531 109.831 27.4861C109.831 29.1591 111.295 30.2361 112.935 30.2361C114.189 30.2361 114.881 29.6731 115.315 29.0131H115.379V29.9781H117.181V25.1851C117.182 22.9671 115.524 21.7291 113.386 21.7291ZM113.16 28.5801C112.55 28.5801 111.697 28.2741 111.697 27.5181C111.697 26.5531 112.759 26.1831 113.676 26.1831C114.495 26.1831 114.882 26.3601 115.38 26.6011C115.235 27.7601 114.238 28.5801 113.16 28.5801ZM123.743 22.0021L121.604 27.4221H121.54L119.32 22.0021H117.31L120.639 29.5771L118.741 33.7911H120.687L125.818 22.0021H123.743ZM106.937 30.0001H108.802V17.4991H106.937V30.0001Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.418 10.2429C47.418 11.0809 47.1701 11.7479 46.673 12.2459C46.109 12.8379 45.3731 13.1339 44.4691 13.1339C43.6031 13.1339 42.8661 12.8339 42.2611 12.2339C41.6551 11.6329 41.3521 10.8889 41.3521 10.0009C41.3521 9.11194 41.6551 8.36794 42.2611 7.76794C42.8661 7.16694 43.6031 6.86694 44.4691 6.86694C44.8991 6.86694 45.3101 6.95094 45.7001 7.11794C46.0911 7.28594 46.404 7.50894 46.6381 7.78794L46.111 8.31594C45.714 7.84094 45.167 7.60394 44.468 7.60394C43.836 7.60394 43.29 7.82594 42.829 8.26994C42.368 8.71394 42.1381 9.29094 42.1381 9.99994C42.1381 10.7089 42.368 11.2859 42.829 11.7299C43.29 12.1739 43.836 12.3959 44.468 12.3959C45.138 12.3959 45.6971 12.1729 46.1441 11.7259C46.4341 11.4349 46.602 11.0299 46.647 10.5109H44.468V9.78994H47.375C47.405 9.94694 47.418 10.0979 47.418 10.2429Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.0281 7.737H49.2961V9.639H51.7601V10.36H49.2961V12.262H52.0281V13H48.5251V7H52.0281V7.737Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M55.279 13H54.508V7.737H52.832V7H56.955V7.737H55.279V13Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M59.938 13V7H60.709V13H59.938Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.1281 13H63.3572V7.737H61.6812V7H65.8042V7.737H64.1281V13Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M73.6089 12.225C73.0189 12.831 72.2859 13.134 71.4089 13.134C70.5319 13.134 69.7989 12.831 69.2099 12.225C68.6199 11.619 68.3259 10.877 68.3259 9.99999C68.3259 9.12299 68.6199 8.38099 69.2099 7.77499C69.7989 7.16899 70.5319 6.86499 71.4089 6.86499C72.2809 6.86499 73.0129 7.16999 73.6049 7.77899C74.1969 8.38799 74.4929 9.12799 74.4929 9.99999C74.4929 10.877 74.1979 11.619 73.6089 12.225ZM69.7789 11.722C70.2229 12.172 70.7659 12.396 71.4089 12.396C72.0519 12.396 72.5959 12.171 73.0389 11.722C73.4829 11.272 73.7059 10.698 73.7059 9.99999C73.7059 9.30199 73.4829 8.72799 73.0389 8.27799C72.5959 7.82799 72.0519 7.60399 71.4089 7.60399C70.7659 7.60399 70.2229 7.82899 69.7789 8.27799C69.3359 8.72799 69.1129 9.30199 69.1129 9.99999C69.1129 10.698 69.3359 11.272 69.7789 11.722Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M75.5749 13V7H76.513L79.429 11.667H79.4619L79.429 10.511V7H80.1999V13H79.3949L76.344 8.106H76.3109L76.344 9.262V13H75.5749Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.418 10.2429C47.418 11.0809 47.1701 11.7479 46.673 12.2459C46.109 12.8379 45.3731 13.1339 44.4691 13.1339C43.6031 13.1339 42.8661 12.8339 42.2611 12.2339C41.6551 11.6329 41.3521 10.8889 41.3521 10.0009C41.3521 9.11194 41.6551 8.36794 42.2611 7.76794C42.8661 7.16694 43.6031 6.86694 44.4691 6.86694C44.8991 6.86694 45.3101 6.95094 45.7001 7.11794C46.0911 7.28594 46.404 7.50894 46.6381 7.78794L46.111 8.31594C45.714 7.84094 45.167 7.60394 44.468 7.60394C43.836 7.60394 43.29 7.82594 42.829 8.26994C42.368 8.71394 42.1381 9.29094 42.1381 9.99994C42.1381 10.7089 42.368 11.2859 42.829 11.7299C43.29 12.1739 43.836 12.3959 44.468 12.3959C45.138 12.3959 45.6971 12.1729 46.1441 11.7259C46.4341 11.4349 46.602 11.0299 46.647 10.5109H44.468V9.78994H47.375C47.405 9.94694 47.418 10.0979 47.418 10.2429Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.0281 7.737H49.2961V9.639H51.7601V10.36H49.2961V12.262H52.0281V13H48.5251V7H52.0281V7.737Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M55.279 13H54.508V7.737H52.832V7H56.955V7.737H55.279V13Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M59.938 13V7H60.709V13H59.938Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.1281 13H63.3572V7.737H61.6812V7H65.8042V7.737H64.1281V13Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M73.6089 12.225C73.0189 12.831 72.2859 13.134 71.4089 13.134C70.5319 13.134 69.7989 12.831 69.2099 12.225C68.6199 11.619 68.3259 10.877 68.3259 9.99999C68.3259 9.12299 68.6199 8.38099 69.2099 7.77499C69.7989 7.16899 70.5319 6.86499 71.4089 6.86499C72.2809 6.86499 73.0129 7.16999 73.6049 7.77899C74.1969 8.38799 74.4929 9.12799 74.4929 9.99999C74.4929 10.877 74.1979 11.619 73.6089 12.225ZM69.7789 11.722C70.2229 12.172 70.7659 12.396 71.4089 12.396C72.0519 12.396 72.5959 12.171 73.0389 11.722C73.4829 11.272 73.7059 10.698 73.7059 9.99999C73.7059 9.30199 73.4829 8.72799 73.0389 8.27799C72.5959 7.82799 72.0519 7.60399 71.4089 7.60399C70.7659 7.60399 70.2229 7.82899 69.7789 8.27799C69.3359 8.72799 69.1129 9.30199 69.1129 9.99999C69.1129 10.698 69.3359 11.272 69.7789 11.722Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M75.5749 13V7H76.513L79.429 11.667H79.4619L79.429 10.511V7H80.1999V13H79.3949L76.344 8.106H76.3109L76.344 9.262V13H75.5749Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    filter: "url(#filter0_ii_1303_2188)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.4361 7.53803C10.1451 7.84603 9.97314 8.32403 9.97314 8.94303V31.059C9.97314 31.679 10.1451 32.156 10.4361 32.464L10.5101 32.536L22.8991 20.147V20.001V19.855L10.5101 7.46503L10.4361 7.53803Z",
                            fill: "url(#paint0_linear_1303_2188)"
                        }, void 0, false, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M27.0279 24.278L22.8989 20.147V20.001V19.855L27.0289 15.725L27.1219 15.778L32.0149 18.558C33.4119 19.352 33.4119 20.651 32.0149 21.446L27.1219 24.226L27.0279 24.278Z",
                            fill: "url(#paint1_linear_1303_2188)"
                        }, void 0, false, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            filter: "url(#filter1_i_1303_2188)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M27.122 24.225L22.898 20.001L10.436 32.464C10.896 32.952 11.657 33.012 12.514 32.526L27.122 24.225Z",
                                fill: "url(#paint2_linear_1303_2188)"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M27.122 15.777L12.514 7.47701C11.657 6.99001 10.896 7.05101 10.436 7.53901L22.899 20.002L27.122 15.777Z",
                            fill: "url(#paint3_linear_1303_2188)"
                        }, void 0, false, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "filter0_ii_1303_2188",
                            x: "9.97314",
                            y: "7.14093",
                            width: "23.0894",
                            height: "25.7207",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dy: "-0.15"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect1_innerShadow_1303_2188"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dy: "0.15"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_innerShadow_1303_2188",
                                    result: "effect2_innerShadow_1303_2188"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "filter1_i_1303_2188",
                            x: "10.436",
                            y: "20.001",
                            width: "16.686",
                            height: "12.8607",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dy: "-0.15"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect1_innerShadow_1303_2188"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "paint0_linear_1303_2188",
                            x1: "21.8009",
                            y1: "8.70903",
                            x2: "5.01895",
                            y2: "25.491",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00A0FF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.0066",
                                    stopColor: "#00A1FF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.2601",
                                    stopColor: "#00BEFF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.5122",
                                    stopColor: "#00D2FF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.7604",
                                    stopColor: "#00DFFF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00E3FF"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "paint1_linear_1303_2188",
                            x1: "33.8334",
                            y1: "20.001",
                            x2: "9.63753",
                            y2: "20.001",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFE000"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.4087",
                                    stopColor: "#FFBD00"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.7754",
                                    stopColor: "#FFA500"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FF9C00"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "paint2_linear_1303_2188",
                            x1: "24.8281",
                            y1: "22.2949",
                            x2: "2.06964",
                            y2: "45.0534",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FF3A44"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#C31162"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "paint3_linear_1303_2188",
                            x1: "7.29743",
                            y1: "0.176806",
                            x2: "17.4597",
                            y2: "10.3391",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#32A071"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.0685",
                                    stopColor: "#2DA771"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.4762",
                                    stopColor: "#15CF74"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.8009",
                                    stopColor: "#06E775"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00F076"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GooglePlayButton;
const GooglePlayWhiteButton = (param)=>{
    let { size = "md", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        "aria-label": "Download on the App Store",
        href: "#",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("rounded-[7px] bg-black ring-1 ring-app-store-badge-border outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size === "md" ? 135 : 149,
            height: size === "md" ? 40 : 44,
            viewBox: "0 0 135 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "134",
                    height: "39",
                    rx: "6.5",
                    stroke: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M68.136 21.7509C65.784 21.7509 63.867 23.5399 63.867 26.0039C63.867 28.4529 65.784 30.2569 68.136 30.2569C70.489 30.2569 72.406 28.4529 72.406 26.0039C72.405 23.5399 70.488 21.7509 68.136 21.7509ZM68.136 28.5829C66.847 28.5829 65.736 27.5199 65.736 26.0049C65.736 24.4739 66.848 23.4269 68.136 23.4269C69.425 23.4269 70.536 24.4739 70.536 26.0049C70.536 27.5189 69.425 28.5829 68.136 28.5829ZM58.822 21.7509C56.47 21.7509 54.553 23.5399 54.553 26.0039C54.553 28.4529 56.47 30.2569 58.822 30.2569C61.175 30.2569 63.092 28.4529 63.092 26.0039C63.092 23.5399 61.175 21.7509 58.822 21.7509ZM58.822 28.5829C57.533 28.5829 56.422 27.5199 56.422 26.0049C56.422 24.4739 57.534 23.4269 58.822 23.4269C60.111 23.4269 61.222 24.4739 61.222 26.0049C61.223 27.5189 60.111 28.5829 58.822 28.5829ZM47.744 23.0569V24.8609H52.062C51.933 25.8759 51.595 26.6169 51.079 27.1319C50.451 27.7599 49.468 28.4529 47.744 28.4529C45.086 28.4529 43.008 26.3099 43.008 23.6519C43.008 20.9939 45.086 18.8509 47.744 18.8509C49.178 18.8509 50.225 19.4149 50.998 20.1399L52.271 18.8669C51.191 17.8359 49.758 17.0469 47.744 17.0469C44.103 17.0469 41.042 20.0109 41.042 23.6519C41.042 27.2929 44.103 30.2569 47.744 30.2569C49.709 30.2569 51.192 29.6119 52.351 28.4039C53.543 27.2119 53.914 25.5359 53.914 24.1829C53.914 23.7649 53.882 23.3779 53.817 23.0559H47.744V23.0569ZM93.052 24.4579C92.698 23.5079 91.618 21.7509 89.411 21.7509C87.22 21.7509 85.399 23.4749 85.399 26.0039C85.399 28.3879 87.204 30.2569 89.62 30.2569C91.569 30.2569 92.697 29.0649 93.165 28.3719L91.715 27.4049C91.232 28.1139 90.571 28.5809 89.62 28.5809C88.67 28.5809 87.993 28.1459 87.558 27.2919L93.245 24.9399L93.052 24.4579ZM87.252 25.8759C87.204 24.2319 88.525 23.3949 89.476 23.3949C90.217 23.3949 90.845 23.7659 91.055 24.2969L87.252 25.8759ZM82.629 29.9999H84.497V17.4989H82.629V29.9999ZM79.567 22.7019H79.503C79.084 22.2019 78.278 21.7509 77.264 21.7509C75.137 21.7509 73.188 23.6199 73.188 26.0209C73.188 28.4049 75.137 30.2579 77.264 30.2579C78.279 30.2579 79.084 29.8069 79.503 29.2919H79.567V29.9039C79.567 31.5309 78.697 32.4009 77.296 32.4009C76.152 32.4009 75.443 31.5799 75.153 30.8869L73.526 31.5639C73.993 32.6909 75.233 34.0769 77.296 34.0769C79.487 34.0769 81.34 32.7879 81.34 29.6459V22.0099H79.568V22.7019H79.567ZM77.425 28.5829C76.136 28.5829 75.057 27.5029 75.057 26.0209C75.057 24.5219 76.136 23.4269 77.425 23.4269C78.697 23.4269 79.696 24.5219 79.696 26.0209C79.696 27.5029 78.697 28.5829 77.425 28.5829ZM101.806 17.4989H97.335V29.9999H99.2V25.2639H101.805C103.873 25.2639 105.907 23.7669 105.907 21.3819C105.907 18.9969 103.874 17.4989 101.806 17.4989ZM101.854 23.5239H99.2V19.2389H101.854C103.249 19.2389 104.041 20.3939 104.041 21.3819C104.041 22.3499 103.249 23.5239 101.854 23.5239ZM113.386 21.7289C112.035 21.7289 110.636 22.3239 110.057 23.6429L111.713 24.3339C112.067 23.6429 112.727 23.4169 113.418 23.4169C114.383 23.4169 115.364 23.9959 115.38 25.0249V25.1539C115.042 24.9609 114.318 24.6719 113.434 24.6719C111.649 24.6719 109.831 25.6529 109.831 27.4859C109.831 29.1589 111.295 30.2359 112.935 30.2359C114.189 30.2359 114.881 29.6729 115.315 29.0129H115.379V29.9779H117.181V25.1849C117.182 22.9669 115.524 21.7289 113.386 21.7289ZM113.16 28.5799C112.55 28.5799 111.697 28.2739 111.697 27.5179C111.697 26.5529 112.759 26.1829 113.676 26.1829C114.495 26.1829 114.882 26.3599 115.38 26.6009C115.235 27.7599 114.238 28.5799 113.16 28.5799ZM123.743 22.0019L121.604 27.4219H121.54L119.32 22.0019H117.31L120.639 29.5769L118.741 33.7909H120.687L125.818 22.0019H123.743ZM106.937 29.9999H108.802V17.4989H106.937V29.9999Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.418 10.2432C47.418 11.0812 47.1701 11.7482 46.673 12.2462C46.109 12.8382 45.3731 13.1342 44.4691 13.1342C43.6031 13.1342 42.8661 12.8342 42.2611 12.2342C41.6551 11.6332 41.3521 10.8892 41.3521 10.0012C41.3521 9.11219 41.6551 8.36819 42.2611 7.76819C42.8661 7.16719 43.6031 6.86719 44.4691 6.86719C44.8991 6.86719 45.3101 6.95119 45.7001 7.11819C46.0911 7.28619 46.404 7.50919 46.6381 7.78819L46.111 8.31619C45.714 7.84119 45.167 7.60419 44.468 7.60419C43.836 7.60419 43.29 7.82619 42.829 8.27019C42.368 8.71419 42.1381 9.29119 42.1381 10.0002C42.1381 10.7092 42.368 11.2862 42.829 11.7302C43.29 12.1742 43.836 12.3962 44.468 12.3962C45.138 12.3962 45.6971 12.1732 46.1441 11.7262C46.4341 11.4352 46.602 11.0302 46.647 10.5112H44.468V9.79019H47.375C47.405 9.94719 47.418 10.0982 47.418 10.2432Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.0281 7.73724H49.2961V9.63924H51.7601V10.3602H49.2961V12.2622H52.0281V13.0002H48.5251V7.00024H52.0281V7.73724Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M55.279 13.0002H54.508V7.73724H52.832V7.00024H56.955V7.73724H55.279V13.0002Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M59.938 13.0002V7.00024H60.709V13.0002H59.938Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 179,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.1281 13.0002H63.3572V7.73724H61.6812V7.00024H65.8042V7.73724H64.1281V13.0002Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 180,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M73.6089 12.2252C73.0189 12.8312 72.2859 13.1342 71.4089 13.1342C70.5319 13.1342 69.7989 12.8312 69.2099 12.2252C68.6199 11.6192 68.3259 10.8772 68.3259 10.0002C68.3259 9.12323 68.6199 8.38123 69.2099 7.77523C69.7989 7.16923 70.5319 6.86523 71.4089 6.86523C72.2809 6.86523 73.0129 7.17023 73.6049 7.77923C74.1969 8.38823 74.4929 9.12823 74.4929 10.0002C74.4929 10.8772 74.1979 11.6192 73.6089 12.2252ZM69.7789 11.7222C70.2229 12.1722 70.7659 12.3962 71.4089 12.3962C72.0519 12.3962 72.5959 12.1712 73.0389 11.7222C73.4829 11.2722 73.7059 10.6982 73.7059 10.0002C73.7059 9.30223 73.4829 8.72823 73.0389 8.27823C72.5959 7.82823 72.0519 7.60423 71.4089 7.60423C70.7659 7.60423 70.2229 7.82923 69.7789 8.27823C69.3359 8.72823 69.1129 9.30223 69.1129 10.0002C69.1129 10.6982 69.3359 11.2722 69.7789 11.7222Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M75.5749 13.0002V7.00024H76.513L79.429 11.6672H79.4619L79.429 10.5112V7.00024H80.1999V13.0002H79.3949L76.344 8.10625H76.3109L76.344 9.26224V13.0002H75.5749Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.418 10.2432C47.418 11.0812 47.1701 11.7482 46.673 12.2462C46.109 12.8382 45.3731 13.1342 44.4691 13.1342C43.6031 13.1342 42.8661 12.8342 42.2611 12.2342C41.6551 11.6332 41.3521 10.8892 41.3521 10.0012C41.3521 9.11219 41.6551 8.36819 42.2611 7.76819C42.8661 7.16719 43.6031 6.86719 44.4691 6.86719C44.8991 6.86719 45.3101 6.95119 45.7001 7.11819C46.0911 7.28619 46.404 7.50919 46.6381 7.78819L46.111 8.31619C45.714 7.84119 45.167 7.60419 44.468 7.60419C43.836 7.60419 43.29 7.82619 42.829 8.27019C42.368 8.71419 42.1381 9.29119 42.1381 10.0002C42.1381 10.7092 42.368 11.2862 42.829 11.7302C43.29 12.1742 43.836 12.3962 44.468 12.3962C45.138 12.3962 45.6971 12.1732 46.1441 11.7262C46.4341 11.4352 46.602 11.0302 46.647 10.5112H44.468V9.79019H47.375C47.405 9.94719 47.418 10.0982 47.418 10.2432Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.0281 7.73724H49.2961V9.63924H51.7601V10.3602H49.2961V12.2622H52.0281V13.0002H48.5251V7.00024H52.0281V7.73724Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M55.279 13.0002H54.508V7.73724H52.832V7.00024H56.955V7.73724H55.279V13.0002Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M59.938 13.0002V7.00024H60.709V13.0002H59.938Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 202,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.1281 13.0002H63.3572V7.73724H61.6812V7.00024H65.8042V7.73724H64.1281V13.0002Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 203,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M73.6089 12.2252C73.0189 12.8312 72.2859 13.1342 71.4089 13.1342C70.5319 13.1342 69.7989 12.8312 69.2099 12.2252C68.6199 11.6192 68.3259 10.8772 68.3259 10.0002C68.3259 9.12323 68.6199 8.38123 69.2099 7.77523C69.7989 7.16923 70.5319 6.86523 71.4089 6.86523C72.2809 6.86523 73.0129 7.17023 73.6049 7.77923C74.1969 8.38823 74.4929 9.12823 74.4929 10.0002C74.4929 10.8772 74.1979 11.6192 73.6089 12.2252ZM69.7789 11.7222C70.2229 12.1722 70.7659 12.3962 71.4089 12.3962C72.0519 12.3962 72.5959 12.1712 73.0389 11.7222C73.4829 11.2722 73.7059 10.6982 73.7059 10.0002C73.7059 9.30223 73.4829 8.72823 73.0389 8.27823C72.5959 7.82823 72.0519 7.60423 71.4089 7.60423C70.7659 7.60423 70.2229 7.82923 69.7789 8.27823C69.3359 8.72823 69.1129 9.30223 69.1129 10.0002C69.1129 10.6982 69.3359 11.2722 69.7789 11.7222Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M75.5749 13.0002V7.00024H76.513L79.429 11.6672H79.4619L79.429 10.5112V7.00024H80.1999V13.0002H79.3949L76.344 8.10625H76.3109L76.344 9.26224V13.0002H75.5749Z",
                    stroke: "white",
                    strokeWidth: "0.2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.1565 7.96617C10.0384 8.23367 9.97314 8.56144 9.97314 8.94269V31.0587C9.97314 31.4408 10.0385 31.7686 10.1567 32.036L22.1907 20.0003L10.1565 7.96617ZM10.8517 32.7552C11.2978 32.9461 11.8797 32.8855 12.5141 32.5257L26.6712 24.4809L22.8978 20.7074L10.8517 32.7552ZM27.5737 23.9691L32.0151 21.4457C33.4121 20.6507 33.4121 19.3517 32.0151 18.5577L27.5717 16.0328L23.6048 20.0003L27.5737 23.9691ZM26.6699 15.5204L12.5141 7.4767C11.8796 7.11612 11.2977 7.05596 10.8516 7.2471L22.8977 19.2932L26.6699 15.5204Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
            lineNumber: 167,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = GooglePlayWhiteButton;
const AppStoreButton = (param)=>{
    let { size = "md", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        "aria-label": "Download on the App Store",
        href: "#",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("rounded-[7px] bg-black ring-1 ring-app-store-badge-border outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size === "md" ? 120 : 132,
            height: size === "md" ? 40 : 44,
            viewBox: "0 0 120 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M81.5257 19.2009V21.4919H80.0896V22.9944H81.5257V28.0994C81.5257 29.8425 82.3143 30.5398 84.2981 30.5398C84.6468 30.5398 84.9788 30.4983 85.2693 30.4485V28.9626C85.0203 28.9875 84.8626 29.0041 84.5887 29.0041C83.7005 29.0041 83.3104 28.5891 83.3104 27.6428V22.9944H85.2693V21.4919H83.3104V19.2009H81.5257Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 244,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M90.3232 30.6643C92.9628 30.6643 94.5815 28.8962 94.5815 25.9661C94.5815 23.0525 92.9545 21.2761 90.3232 21.2761C87.6835 21.2761 86.0566 23.0525 86.0566 25.9661C86.0566 28.8962 87.6752 30.6643 90.3232 30.6643ZM90.3232 29.0789C88.7709 29.0789 87.8994 27.9416 87.8994 25.9661C87.8994 24.0071 88.7709 22.8616 90.3232 22.8616C91.8671 22.8616 92.747 24.0071 92.747 25.9661C92.747 27.9333 91.8671 29.0789 90.3232 29.0789Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 248,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M95.9664 30.49H97.7511V25.1526C97.7511 23.8826 98.7056 23.0276 100.059 23.0276C100.374 23.0276 100.905 23.0857 101.055 23.1355V21.3757C100.864 21.3259 100.524 21.301 100.258 21.301C99.0792 21.301 98.0748 21.9485 97.8175 22.8367H97.6846V21.4504H95.9664V30.49Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 252,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M105.486 22.7952C106.806 22.7952 107.669 23.7165 107.711 25.136H103.145C103.245 23.7248 104.166 22.7952 105.486 22.7952ZM107.702 28.0496C107.37 28.7551 106.632 29.1453 105.552 29.1453C104.125 29.1453 103.203 28.1409 103.145 26.5554V26.4558H109.529V25.8332C109.529 22.9944 108.009 21.2761 105.494 21.2761C102.946 21.2761 101.327 23.1106 101.327 25.9993C101.327 28.8879 102.913 30.6643 105.503 30.6643C107.57 30.6643 109.014 29.6682 109.421 28.0496H107.702Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 256,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M69.8221 27.1518C69.9598 29.3715 71.8095 30.7911 74.5626 30.7911C77.505 30.7911 79.3462 29.3027 79.3462 26.9281C79.3462 25.0612 78.2966 24.0287 75.7499 23.4351L74.382 23.0996C72.7645 22.721 72.1106 22.2134 72.1106 21.3272C72.1106 20.2088 73.1259 19.4775 74.6487 19.4775C76.0941 19.4775 77.0921 20.1916 77.2727 21.3358H79.1483C79.0365 19.2452 77.1953 17.774 74.6745 17.774C71.9644 17.774 70.1576 19.2452 70.1576 21.4563C70.1576 23.2802 71.1815 24.3643 73.427 24.8891L75.0272 25.2763C76.6705 25.6634 77.3932 26.2312 77.3932 27.1776C77.3932 28.2789 76.2575 29.079 74.7089 29.079C73.0484 29.079 71.8955 28.3305 71.7321 27.1518H69.8221Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 260,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M51.3348 21.301C50.1063 21.301 49.0437 21.9153 48.4959 22.9446H48.3631V21.4504H46.6448V33.4949H48.4295V29.1204H48.5706C49.0437 30.0749 50.0647 30.6394 51.3514 30.6394C53.6341 30.6394 55.0867 28.8381 55.0867 25.9661C55.0867 23.094 53.6341 21.301 51.3348 21.301ZM50.8284 29.0373C49.3343 29.0373 48.3963 27.8586 48.3963 25.9744C48.3963 24.0818 49.3343 22.9031 50.8367 22.9031C52.3475 22.9031 53.2522 24.0569 53.2522 25.9661C53.2522 27.8835 52.3475 29.0373 50.8284 29.0373Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 264,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M61.3316 21.301C60.103 21.301 59.0405 21.9153 58.4927 22.9446H58.3599V21.4504H56.6416V33.4949H58.4263V29.1204H58.5674C59.0405 30.0749 60.0615 30.6394 61.3482 30.6394C63.6309 30.6394 65.0835 28.8381 65.0835 25.9661C65.0835 23.094 63.6309 21.301 61.3316 21.301ZM60.8252 29.0373C59.3311 29.0373 58.3931 27.8586 58.3931 25.9744C58.3931 24.0818 59.3311 22.9031 60.8335 22.9031C62.3443 22.9031 63.249 24.0569 63.249 25.9661C63.249 27.8835 62.3443 29.0373 60.8252 29.0373Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 268,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43.4428 30.49H45.4905L41.008 18.0751H38.9346L34.4521 30.49H36.431L37.5752 27.1948H42.3072L43.4428 30.49ZM39.8724 20.3292H40.0186L41.8168 25.5774H38.0656L39.8724 20.3292Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 272,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M35.6514 8.71094V14.7H37.8137C39.5984 14.7 40.6318 13.6001 40.6318 11.6868C40.6318 9.80249 39.5901 8.71094 37.8137 8.71094H35.6514ZM36.5811 9.55762H37.71C38.9509 9.55762 39.6855 10.3462 39.6855 11.6992C39.6855 13.073 38.9634 13.8533 37.71 13.8533H36.5811V9.55762Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 276,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43.7969 14.7871C45.1167 14.7871 45.9261 13.9031 45.9261 12.438C45.9261 10.9812 45.1126 10.093 43.7969 10.093C42.4771 10.093 41.6636 10.9812 41.6636 12.438C41.6636 13.9031 42.4729 14.7871 43.7969 14.7871ZM43.7969 13.9944C43.0208 13.9944 42.585 13.4258 42.585 12.438C42.585 11.4585 43.0208 10.8857 43.7969 10.8857C44.5689 10.8857 45.0088 11.4585 45.0088 12.438C45.0088 13.4216 44.5689 13.9944 43.7969 13.9944Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 280,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.8182 10.1802H51.9259L51.1207 13.6292H51.0501L50.1205 10.1802H49.2655L48.3358 13.6292H48.2694L47.4601 10.1802H46.5553L47.8004 14.7H48.7176L49.6473 11.3713H49.7179L50.6517 14.7H51.5772L52.8182 10.1802Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 284,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M53.8458 14.7H54.7382V12.0562C54.7382 11.3506 55.1574 10.9106 55.8173 10.9106C56.4772 10.9106 56.7926 11.2717 56.7926 11.998V14.7H57.685V11.7739C57.685 10.699 57.1288 10.093 56.1203 10.093C55.4396 10.093 54.9914 10.396 54.7714 10.8982H54.705V10.1802H53.8458V14.7Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M59.0903 14.7H59.9826V8.41626H59.0903V14.7Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 292,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M63.3386 14.7871C64.6584 14.7871 65.4678 13.9031 65.4678 12.438C65.4678 10.9812 64.6543 10.093 63.3386 10.093C62.0188 10.093 61.2053 10.9812 61.2053 12.438C61.2053 13.9031 62.0146 14.7871 63.3386 14.7871ZM63.3386 13.9944C62.5625 13.9944 62.1267 13.4258 62.1267 12.438C62.1267 11.4585 62.5625 10.8857 63.3386 10.8857C64.1106 10.8857 64.5505 11.4585 64.5505 12.438C64.5505 13.4216 64.1106 13.9944 63.3386 13.9944Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 293,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M68.1265 14.0234C67.6409 14.0234 67.2881 13.7869 67.2881 13.3801C67.2881 12.9817 67.5704 12.77 68.1929 12.7285L69.2969 12.658V13.0356C69.2969 13.5959 68.7989 14.0234 68.1265 14.0234ZM67.8982 14.7747C68.4917 14.7747 68.9856 14.5173 69.2554 14.0649H69.326V14.7H70.1851V11.6121C70.1851 10.6575 69.5459 10.093 68.4129 10.093C67.3877 10.093 66.6573 10.5911 66.566 11.3672H67.4292C67.5289 11.0476 67.8733 10.865 68.3714 10.865C68.9815 10.865 69.2969 11.1348 69.2969 11.6121V12.0022L68.0726 12.0728C66.9976 12.1392 66.3916 12.6082 66.3916 13.4216C66.3916 14.2476 67.0267 14.7747 67.8982 14.7747Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 297,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M73.2132 14.7747C73.8358 14.7747 74.3629 14.48 74.6327 13.9861H74.7032V14.7H75.5582V8.41626H74.6659V10.8982H74.5995C74.3546 10.4001 73.8316 10.1055 73.2132 10.1055C72.0719 10.1055 71.3373 11.0103 71.3373 12.438C71.3373 13.8699 72.0636 14.7747 73.2132 14.7747ZM73.4664 10.9065C74.2135 10.9065 74.6825 11.5 74.6825 12.4421C74.6825 13.3884 74.2176 13.9736 73.4664 13.9736C72.711 13.9736 72.2586 13.3967 72.2586 12.438C72.2586 11.4875 72.7152 10.9065 73.4664 10.9065Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 301,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M81.3447 14.7871C82.6645 14.7871 83.4738 13.9031 83.4738 12.438C83.4738 10.9812 82.6604 10.093 81.3447 10.093C80.0249 10.093 79.2114 10.9812 79.2114 12.438C79.2114 13.9031 80.0207 14.7871 81.3447 14.7871ZM81.3447 13.9944C80.5686 13.9944 80.1328 13.4258 80.1328 12.438C80.1328 11.4585 80.5686 10.8857 81.3447 10.8857C82.1166 10.8857 82.5566 11.4585 82.5566 12.438C82.5566 13.4216 82.1166 13.9944 81.3447 13.9944Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M84.655 14.7H85.5474V12.0562C85.5474 11.3506 85.9666 10.9106 86.6265 10.9106C87.2864 10.9106 87.6018 11.2717 87.6018 11.998V14.7H88.4941V11.7739C88.4941 10.699 87.938 10.093 86.9294 10.093C86.2488 10.093 85.8005 10.396 85.5806 10.8982H85.5142V10.1802H84.655V14.7Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 309,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M92.6039 9.05542V10.2009H91.8858V10.9521H92.6039V13.5046C92.6039 14.3762 92.9981 14.7249 93.9901 14.7249C94.1644 14.7249 94.3304 14.7041 94.4757 14.6792V13.9363C94.3512 13.9487 94.2723 13.957 94.1353 13.957C93.6913 13.957 93.4962 13.7495 93.4962 13.2764V10.9521H94.4757V10.2009H93.4962V9.05542H92.6039Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 313,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M95.6735 14.7H96.5658V12.0603C96.5658 11.3755 96.9726 10.9148 97.703 10.9148C98.3339 10.9148 98.6701 11.28 98.6701 12.0022V14.7H99.5624V11.7822C99.5624 10.7073 98.9689 10.0972 98.006 10.0972C97.3253 10.0972 96.848 10.4001 96.6281 10.9065H96.5575V8.41626H95.6735V14.7Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 317,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M102.781 10.8525C103.441 10.8525 103.873 11.3132 103.894 12.0229H101.611C101.661 11.3174 102.122 10.8525 102.781 10.8525ZM103.89 13.4797C103.724 13.8325 103.354 14.0276 102.815 14.0276C102.101 14.0276 101.64 13.5254 101.611 12.7327V12.6829H104.803V12.3716C104.803 10.9521 104.043 10.093 102.786 10.093C101.511 10.093 100.702 11.0103 100.702 12.4546C100.702 13.8989 101.495 14.7871 102.79 14.7871C103.823 14.7871 104.545 14.2891 104.749 13.4797H103.89Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24.769 20.3008C24.7907 18.6198 25.6934 17.0292 27.1256 16.1488C26.2221 14.8584 24.7088 14.0403 23.1344 13.9911C21.4552 13.8148 19.8272 14.9959 18.9715 14.9959C18.0992 14.9959 16.7817 14.0086 15.363 14.0378C13.5137 14.0975 11.7898 15.1489 10.8901 16.7656C8.95607 20.1141 10.3987 25.0351 12.2513 27.7417C13.1782 29.0671 14.2615 30.5475 15.6789 30.495C17.066 30.4375 17.584 29.6105 19.2583 29.6105C20.9171 29.6105 21.4031 30.495 22.8493 30.4616C24.3377 30.4375 25.2754 29.1304 26.1698 27.7925C26.8358 26.8481 27.3483 25.8044 27.6882 24.7C25.9391 23.9602 24.771 22.2 24.769 20.3008Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.0373 12.2111C22.8489 11.2369 23.2487 9.98469 23.1518 8.72046C21.912 8.85068 20.7668 9.44324 19.9443 10.3801C19.14 11.2954 18.7214 12.5255 18.8006 13.7415C20.0408 13.7542 21.2601 13.1777 22.0373 12.2111Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 329,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
            lineNumber: 243,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
        lineNumber: 234,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = AppStoreButton;
const GalaxyStoreButton = (param)=>{
    let { size = "md", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        "aria-label": "Available on Galaxy Store",
        href: "#",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("rounded-[7px] bg-black ring-1 ring-app-store-badge-border outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size === "md" ? 147 : 162,
            height: size === "md" ? 40 : 44,
            viewBox: "0 0 147 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.7516 20.3987H66.7715V31.3885H64.7516V20.3987Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 350,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M42.5 25.9699C42.5 22.8811 44.8314 20.4009 48.039 20.4009C50.2816 20.4009 52.0489 21.5444 52.9695 23.1779L51.1875 24.2473C50.5193 23.0146 49.4799 22.3611 48.054 22.3611C46.0343 22.3611 44.5047 23.9946 44.5047 25.9699C44.5047 27.9745 46.0196 29.5786 48.1281 29.5786C49.7469 29.5786 50.8757 28.6578 51.2616 27.2322H47.8017V25.3017H53.4298V26.1037C53.4298 29.0289 51.3657 31.5392 48.1281 31.5392C44.7423 31.5392 42.5 28.9695 42.5 25.9699Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 351,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M54.3525 27.0543C54.3525 24.1732 56.4613 22.525 58.6592 22.525C59.8027 22.525 60.8274 22.9999 61.4512 23.7426V22.7032H63.4558V31.3907H61.4512V30.2616C60.8124 31.0636 59.773 31.5689 58.6295 31.5689C56.5354 31.5689 54.3525 29.8904 54.3525 27.0543ZM61.555 27.0246C61.555 25.5543 60.4412 24.3514 58.9562 24.3514C57.4713 24.3514 56.3278 25.5249 56.3278 27.0246C56.3278 28.539 57.4713 29.7272 58.9562 29.7272C60.4412 29.7272 61.555 28.5243 61.555 27.0246Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 355,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M67.7938 27.0543C67.7938 24.1732 69.9026 22.525 72.1005 22.525C73.244 22.525 74.2686 22.9999 74.8925 23.7426V22.7032H76.8971V31.3907H74.8925V30.2616C74.2539 31.0636 73.2146 31.5689 72.0707 31.5689C69.977 31.5689 67.7938 29.8904 67.7938 27.0543ZM74.9966 27.0246C74.9966 25.5543 73.8828 24.3514 72.3981 24.3514C70.9128 24.3514 69.7693 25.5249 69.7693 27.0246C69.7693 28.539 70.9128 29.7272 72.3981 29.7272C73.8825 29.7272 74.9966 28.5243 74.9966 27.0246Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 359,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M80.8048 26.9652L77.6566 22.7032H80.1072L82.0818 25.4652L84.0424 22.7032H86.4182L83.2994 26.9949L86.6261 31.3907H84.1759L82.0524 28.4949L79.988 31.3907H77.5375L80.8048 26.9652Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 363,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M90.3846 30.9598L86.8206 22.7029H88.9588L91.3796 28.554L93.6663 22.7029H95.7757L90.5926 35.4H88.5582L90.3846 30.9598Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 367,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M99.8907 29.5936L101.732 28.1384C102.282 29.074 103.128 29.6083 104.108 29.6083C105.178 29.6083 105.757 28.911 105.757 28.1531C105.757 27.2325 104.658 26.9505 103.499 26.594C102.044 26.1334 100.426 25.5693 100.426 23.5049C100.426 21.7676 101.94 20.4012 104.019 20.4012C105.772 20.4012 106.781 21.0697 107.658 21.9756L105.994 23.2376C105.534 22.5547 104.895 22.1982 104.034 22.1982C103.054 22.1982 102.519 22.7329 102.519 23.4305C102.519 24.292 103.559 24.5743 104.732 24.9605C106.203 25.4355 107.866 26.089 107.866 28.1681C107.866 29.8757 106.499 31.5395 104.123 31.5395C102.163 31.5392 100.871 30.7071 99.8907 29.5936Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 368,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M108.03 22.7029H109.515V21.3812L111.535 20V22.7029H113.302V24.4999H111.535V27.7519C111.535 29.2669 111.743 29.5045 113.302 29.5045V31.3904H113.02C110.332 31.3904 109.515 30.5292 109.515 27.7672V24.4999H108.03L108.03 22.7029Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 372,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M113.838 27.0543C113.838 24.5296 115.827 22.5247 118.337 22.5247C120.832 22.5247 122.837 24.5296 122.837 27.0543C122.837 29.5639 120.832 31.5689 118.337 31.5689C115.827 31.5689 113.838 29.5639 113.838 27.0543ZM120.862 27.0543C120.862 25.599 119.747 24.4108 118.337 24.4108C116.896 24.4108 115.812 25.599 115.812 27.0543C115.812 28.4949 116.896 29.6828 118.337 29.6828C119.747 29.6828 120.862 28.4949 120.862 27.0543Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 376,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M125.853 22.7029V23.9949C126.254 23.1335 126.981 22.7029 128.08 22.7029C128.704 22.7029 129.223 22.8514 129.61 23.0741L128.852 24.9749C128.555 24.782 128.214 24.6334 127.649 24.6334C126.491 24.6334 125.867 25.2573 125.867 26.7569V31.3904H123.862V22.7029H125.853Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 380,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M129.834 27.069C129.834 24.5296 131.808 22.5247 134.348 22.5247C136.932 22.5247 138.818 24.4255 138.818 26.9949V27.7519H131.749C132.017 28.9701 132.997 29.8016 134.423 29.8016C135.536 29.8016 136.413 29.1928 136.828 28.2719L138.477 29.2222C137.719 30.6186 136.353 31.5686 134.423 31.5686C131.69 31.5686 129.834 29.5786 129.834 27.069ZM131.853 26.074H136.784C136.487 24.9158 135.596 24.292 134.348 24.292C133.145 24.292 132.21 25.0196 131.853 26.074Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 384,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M46.6986 13.974H43.9018L43.3866 15.4H42.5034L44.8218 9.0244H45.7878L48.097 15.4H47.2138L46.6986 13.974ZM46.4594 13.2932L45.3002 10.0548L44.141 13.2932H46.4594Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 388,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M50.4322 14.6272L51.9962 10.3584H52.8886L50.9106 15.4H49.9354L47.9574 10.3584H48.859L50.4322 14.6272Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 392,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M53.4917 12.8608C53.4917 12.3456 53.5959 11.8948 53.8045 11.5084C54.013 11.1159 54.2982 10.8123 54.6601 10.5976C55.0281 10.3829 55.4359 10.2756 55.8837 10.2756C56.3253 10.2756 56.7086 10.3707 57.0337 10.5608C57.3587 10.7509 57.601 10.9901 57.7605 11.2784V10.3584H58.6069V15.4H57.7605V14.4616C57.5949 14.756 57.3465 15.0013 57.0153 15.1976C56.6902 15.3877 56.3099 15.4828 55.8745 15.4828C55.4267 15.4828 55.0219 15.3724 54.6601 15.1516C54.2982 14.9308 54.013 14.6211 53.8045 14.2224C53.5959 13.8237 53.4917 13.3699 53.4917 12.8608ZM57.7605 12.87C57.7605 12.4897 57.6838 12.1585 57.5305 11.8764C57.3771 11.5943 57.1686 11.3796 56.9049 11.2324C56.6473 11.0791 56.3621 11.0024 56.0493 11.0024C55.7365 11.0024 55.4513 11.076 55.1937 11.2232C54.9361 11.3704 54.7306 11.5851 54.5773 11.8672C54.4239 12.1493 54.3473 12.4805 54.3473 12.8608C54.3473 13.2472 54.4239 13.5845 54.5773 13.8728C54.7306 14.1549 54.9361 14.3727 55.1937 14.526C55.4513 14.6732 55.7365 14.7468 56.0493 14.7468C56.3621 14.7468 56.6473 14.6732 56.9049 14.526C57.1686 14.3727 57.3771 14.1549 57.5305 13.8728C57.6838 13.5845 57.7605 13.2503 57.7605 12.87Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 393,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M60.2701 9.5396C60.1106 9.5396 59.9757 9.4844 59.8653 9.374C59.7549 9.2636 59.6997 9.12867 59.6997 8.9692C59.6997 8.80974 59.7549 8.6748 59.8653 8.5644C59.9757 8.454 60.1106 8.3988 60.2701 8.3988C60.4234 8.3988 60.5522 8.454 60.6565 8.5644C60.7669 8.6748 60.8221 8.80974 60.8221 8.9692C60.8221 9.12867 60.7669 9.2636 60.6565 9.374C60.5522 9.4844 60.4234 9.5396 60.2701 9.5396ZM60.6749 10.3584V15.4H59.8377V10.3584H60.6749Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 397,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M62.7549 8.592V15.4H61.9177V8.592H62.7549Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 401,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M63.869 12.8608C63.869 12.3456 63.9732 11.8948 64.1818 11.5084C64.3903 11.1159 64.6755 10.8123 65.0374 10.5976C65.4054 10.3829 65.8132 10.2756 66.261 10.2756C66.7026 10.2756 67.0859 10.3707 67.411 10.5608C67.736 10.7509 67.9783 10.9901 68.1378 11.2784V10.3584H68.9842V15.4H68.1378V14.4616C67.9722 14.756 67.7238 15.0013 67.3926 15.1976C67.0675 15.3877 66.6872 15.4828 66.2518 15.4828C65.804 15.4828 65.3992 15.3724 65.0374 15.1516C64.6755 14.9308 64.3903 14.6211 64.1818 14.2224C63.9732 13.8237 63.869 13.3699 63.869 12.8608ZM68.1378 12.87C68.1378 12.4897 68.0611 12.1585 67.9078 11.8764C67.7544 11.5943 67.5459 11.3796 67.2822 11.2324C67.0246 11.0791 66.7394 11.0024 66.4266 11.0024C66.1138 11.0024 65.8286 11.076 65.571 11.2232C65.3134 11.3704 65.1079 11.5851 64.9546 11.8672C64.8012 12.1493 64.7246 12.4805 64.7246 12.8608C64.7246 13.2472 64.8012 13.5845 64.9546 13.8728C65.1079 14.1549 65.3134 14.3727 65.571 14.526C65.8286 14.6732 66.1138 14.7468 66.4266 14.7468C66.7394 14.7468 67.0246 14.6732 67.2822 14.526C67.5459 14.3727 67.7544 14.1549 67.9078 13.8728C68.0611 13.5845 68.1378 13.2503 68.1378 12.87Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 402,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M71.3282 11.2968C71.4999 10.9963 71.7514 10.7509 72.0826 10.5608C72.4138 10.3707 72.791 10.2756 73.2142 10.2756C73.668 10.2756 74.0759 10.3829 74.4378 10.5976C74.7996 10.8123 75.0848 11.1159 75.2934 11.5084C75.5019 11.8948 75.6062 12.3456 75.6062 12.8608C75.6062 13.3699 75.5019 13.8237 75.2934 14.2224C75.0848 14.6211 74.7966 14.9308 74.4286 15.1516C74.0667 15.3724 73.6619 15.4828 73.2142 15.4828C72.7787 15.4828 72.3954 15.3877 72.0642 15.1976C71.7391 15.0075 71.4938 14.7652 71.3282 14.4708V15.4H70.491V8.592H71.3282V11.2968ZM74.7506 12.8608C74.7506 12.4805 74.6739 12.1493 74.5206 11.8672C74.3672 11.5851 74.1587 11.3704 73.895 11.2232C73.6374 11.076 73.3522 11.0024 73.0394 11.0024C72.7327 11.0024 72.4475 11.0791 72.1838 11.2324C71.9262 11.3796 71.7176 11.5973 71.5582 11.8856C71.4048 12.1677 71.3282 12.4959 71.3282 12.87C71.3282 13.2503 71.4048 13.5845 71.5582 13.8728C71.7176 14.1549 71.9262 14.3727 72.1838 14.526C72.4475 14.6732 72.7327 14.7468 73.0394 14.7468C73.3522 14.7468 73.6374 14.6732 73.895 14.526C74.1587 14.3727 74.3672 14.1549 74.5206 13.8728C74.6739 13.5845 74.7506 13.2472 74.7506 12.8608Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 406,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M77.5454 8.592V15.4H76.7082V8.592H77.5454Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 410,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M83.6642 12.686C83.6642 12.8455 83.655 13.0141 83.6366 13.192H79.607C79.6377 13.6888 79.8064 14.0783 80.113 14.3604C80.4258 14.6364 80.803 14.7744 81.2446 14.7744C81.6065 14.7744 81.907 14.6916 82.1462 14.526C82.3916 14.3543 82.5633 14.1273 82.6614 13.8452H83.563C83.4281 14.3297 83.1582 14.7253 82.7534 15.032C82.3486 15.3325 81.8457 15.4828 81.2446 15.4828C80.7662 15.4828 80.3369 15.3755 79.9566 15.1608C79.5825 14.9461 79.2881 14.6425 79.0734 14.25C78.8587 13.8513 78.7514 13.3913 78.7514 12.87C78.7514 12.3487 78.8557 11.8917 79.0642 11.4992C79.2728 11.1067 79.5641 10.8061 79.9382 10.5976C80.3185 10.3829 80.754 10.2756 81.2446 10.2756C81.723 10.2756 82.1462 10.3799 82.5142 10.5884C82.8822 10.7969 83.1643 11.0852 83.3606 11.4532C83.563 11.8151 83.6642 12.226 83.6642 12.686ZM82.7994 12.5112C82.7994 12.1923 82.7289 11.9193 82.5878 11.6924C82.4467 11.4593 82.2536 11.2845 82.0082 11.168C81.769 11.0453 81.5022 10.984 81.2078 10.984C80.7846 10.984 80.4227 11.1189 80.1222 11.3888C79.8278 11.6587 79.6591 12.0328 79.6162 12.5112H82.7994Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 411,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M89.6048 15.4828C89.1326 15.4828 88.7032 15.3755 88.3168 15.1608C87.9366 14.9461 87.636 14.6425 87.4152 14.25C87.2006 13.8513 87.0932 13.3913 87.0932 12.87C87.0932 12.3548 87.2036 11.9009 87.4244 11.5084C87.6514 11.1097 87.958 10.8061 88.3444 10.5976C88.7308 10.3829 89.1632 10.2756 89.6416 10.2756C90.12 10.2756 90.5524 10.3829 90.9388 10.5976C91.3252 10.8061 91.6288 11.1067 91.8496 11.4992C92.0766 11.8917 92.19 12.3487 92.19 12.87C92.19 13.3913 92.0735 13.8513 91.8404 14.25C91.6135 14.6425 91.3038 14.9461 90.9112 15.1608C90.5187 15.3755 90.0832 15.4828 89.6048 15.4828ZM89.6048 14.7468C89.9054 14.7468 90.1875 14.6763 90.4512 14.5352C90.715 14.3941 90.9266 14.1825 91.086 13.9004C91.2516 13.6183 91.3344 13.2748 91.3344 12.87C91.3344 12.4652 91.2547 12.1217 91.0952 11.8396C90.9358 11.5575 90.7272 11.3489 90.4696 11.214C90.212 11.0729 89.933 11.0024 89.6324 11.0024C89.3258 11.0024 89.0436 11.0729 88.786 11.214C88.5346 11.3489 88.3322 11.5575 88.1788 11.8396C88.0255 12.1217 87.9488 12.4652 87.9488 12.87C87.9488 13.2809 88.0224 13.6275 88.1696 13.9096C88.323 14.1917 88.5254 14.4033 88.7768 14.5444C89.0283 14.6793 89.3043 14.7468 89.6048 14.7468Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 415,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M95.9312 10.2664C96.5445 10.2664 97.0413 10.4535 97.4216 10.8276C97.8019 11.1956 97.992 11.7292 97.992 12.4284V15.4H97.164V12.548C97.164 12.0451 97.0383 11.6617 96.7868 11.398C96.5353 11.1281 96.1919 10.9932 95.7564 10.9932C95.3148 10.9932 94.9621 11.1312 94.6984 11.4072C94.4408 11.6832 94.312 12.0849 94.312 12.6124V15.4H93.4748V10.3584H94.312V11.076C94.4776 10.8184 94.7015 10.6191 94.9836 10.478C95.2719 10.3369 95.5877 10.2664 95.9312 10.2664Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 419,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "9",
                    y: "7",
                    width: "26",
                    height: "26",
                    rx: "10",
                    fill: "url(#paint0_angular_1303_2200)"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 423,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M25.7914 16.5695L25.738 16.3341C25.738 14.2733 24.0609 12.5968 21.9997 12.5968C19.9385 12.5968 18.2617 14.2733 18.2617 16.3341L18.2081 16.5695H15.1387L15.966 24.2826C16.1318 25.8515 17.4549 27.0421 19.0326 27.0421H24.9669C26.5446 27.0421 27.8677 25.8515 28.0334 24.2828L28.8609 16.5695H25.7914ZM19.8331 16.5695L19.8934 16.3341C19.8934 15.1729 20.8383 14.2281 21.9997 14.2281C23.1613 14.2281 24.1063 15.1729 24.1063 16.3341L24.1664 16.5695H19.8331Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 424,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "paint0_angular_1303_2200",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(22 20) rotate(88.8309) scale(13.0027)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.000415415",
                                stopColor: "#F4605E"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 439,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.0642377",
                                stopColor: "#E94B80"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 440,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.128396",
                                stopColor: "#DE33A4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 441,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.186654",
                                stopColor: "#D41AC8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 442,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.250949",
                                stopColor: "#CB06E5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 443,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.281719",
                                stopColor: "#C902EC"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 444,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.316858",
                                stopColor: "#CB04E5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 445,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.371347",
                                stopColor: "#D108D3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 446,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.43351",
                                stopColor: "#D80DBA"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 447,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.504024",
                                stopColor: "#E1139E"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 448,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.59576",
                                stopColor: "#EC1E7B"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 449,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.673288",
                                stopColor: "#F22A65"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 450,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.713795",
                                stopColor: "#F5355B"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 451,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.754495",
                                stopColor: "#F74452"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 452,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.818581",
                                stopColor: "#F75651"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 453,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.878478",
                                stopColor: "#F76051"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 454,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.938046",
                                stopColor: "#F76551"
                            }, void 0, false, {
                                fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                                lineNumber: 455,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                        lineNumber: 431,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 430,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
            lineNumber: 349,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
        lineNumber: 340,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = GalaxyStoreButton;
const AppGalleryButton = (param)=>{
    let { size = "md", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        "aria-label": "Explore it on AppGallery",
        href: "#",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("rounded-[7px] bg-black ring-1 ring-app-store-badge-border outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size === "md" ? 133 : 147,
            height: size === "md" ? 40 : 44,
            viewBox: "0 0 133 40",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M45.3962 25.4116H48.8919L47.6404 22.0615C47.4682 21.5986 47.2989 21.0875 47.1319 20.5276C46.9813 21.0229 46.817 21.5286 46.6394 22.0453L45.3962 25.4116ZM49.4893 27.0021H44.8068L43.6607 30.1344H41.6021L46.1874 18.4368H48.133L52.8234 30.1344H50.6599L49.4893 27.0021Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 475,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M58.8962 28.0072C59.3026 27.461 59.5058 26.663 59.5058 25.6135C59.5058 24.6396 59.3375 23.933 59.0013 23.4942C58.6647 23.0557 58.2167 22.8364 57.657 22.8364C57.2695 22.8364 56.9117 22.9281 56.5834 23.1109C56.2551 23.2939 55.9429 23.5387 55.6469 23.8455V28.5117C55.8461 28.6085 56.0775 28.6853 56.3413 28.7416C56.605 28.7984 56.8661 28.8266 57.1242 28.8266C57.8994 28.8266 58.4898 28.5533 58.8962 28.0072ZM53.653 23.555C53.653 22.9092 53.6314 22.1986 53.5885 21.4237H55.4613C55.5311 21.7844 55.5797 22.1531 55.6066 22.5297C56.3815 21.6849 57.2695 21.2622 58.2706 21.2622C58.8519 21.2622 59.3901 21.4088 59.8853 21.7021C60.3802 21.9955 60.7799 22.4583 61.0839 23.0906C61.3882 23.7231 61.5402 24.5265 61.5402 25.5005C61.5402 26.5177 61.3666 27.387 61.0194 28.108C60.6722 28.8294 60.1866 29.3754 59.5623 29.747C58.9381 30.1181 58.2167 30.3039 57.3989 30.3039C56.8066 30.3039 56.2226 30.2042 55.6469 30.0053V33.6056L53.653 33.7752V23.555Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 479,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M67.9935 28.0072C68.3999 27.461 68.6031 26.663 68.6031 25.6135C68.6031 24.6396 68.4349 23.933 68.0986 23.4942C67.7621 23.0557 67.3141 22.8364 66.7543 22.8364C66.3669 22.8364 66.009 22.9281 65.6807 23.1109C65.3522 23.2939 65.0402 23.5387 64.7442 23.8455V28.5117C64.9434 28.6085 65.1746 28.6853 65.4386 28.7416C65.7021 28.7984 65.9631 28.8266 66.2215 28.8266C66.9964 28.8266 67.5871 28.5533 67.9935 28.0072ZM62.7501 23.555C62.7501 22.9092 62.7285 22.1986 62.6855 21.4237H64.5586C64.6285 21.7844 64.677 22.1531 64.7039 22.5297C65.4789 21.6849 66.3669 21.2622 67.3679 21.2622C67.9493 21.2622 68.4871 21.4088 68.9826 21.7021C69.4775 21.9955 69.8772 22.4583 70.1815 23.0906C70.4852 23.7231 70.6375 24.5265 70.6375 25.5005C70.6375 26.5177 70.4637 27.387 70.1167 28.108C69.7695 28.8294 69.2837 29.3754 68.6597 29.747C68.0351 30.1181 67.314 30.3039 66.4959 30.3039C65.9039 30.3039 65.3199 30.2042 64.7442 30.0053V33.6056L62.7501 33.7752V23.555Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 483,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M74.3005 29.5813C73.4391 29.1053 72.7773 28.4229 72.3146 27.5349C71.8514 26.6469 71.6202 25.5974 71.6202 24.3864C71.6202 23.0734 71.8866 21.9578 72.4194 21.0401C72.9522 20.1227 73.6775 19.4337 74.5949 18.9735C75.5127 18.5134 76.5418 18.2833 77.6831 18.2833C78.3557 18.2833 78.9975 18.3574 79.6085 18.5053C80.2191 18.6534 80.7882 18.8564 81.3159 19.1149L80.8071 20.6486C79.7469 20.1428 78.7351 19.8898 77.7719 19.8898C76.9591 19.8898 76.2474 20.0634 75.6367 20.4106C75.0258 20.7578 74.5506 21.2677 74.2117 21.9404C73.8725 22.6132 73.7031 23.4258 73.7031 24.3783C73.7031 25.2128 73.8335 25.9526 74.0943 26.5984C74.3557 27.2442 74.7674 27.7557 75.3298 28.1323C75.8922 28.509 76.6013 28.6973 77.457 28.6973C77.8445 28.6973 78.2319 28.6651 78.6194 28.6005C79.0069 28.536 79.3703 28.4418 79.7093 28.3179V25.9526H77.005V24.4026H81.6469V29.3272C80.9794 29.6392 80.2783 29.8789 79.5439 30.0456C78.809 30.2123 78.0786 30.2957 77.3519 30.2957C76.1786 30.2957 75.1613 30.0579 74.3005 29.5813Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 487,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M87.5381 28.5197C87.9522 28.3208 88.2914 28.073 88.5551 27.7771V26.1625C88.0114 26.1034 87.5674 26.0737 87.2231 26.0737C86.3997 26.0737 85.8303 26.2068 85.5159 26.4734C85.2007 26.7394 85.0434 27.0989 85.0434 27.5509C85.0434 27.9818 85.1578 28.3005 85.3866 28.5077C85.6154 28.7149 85.9261 28.8184 86.3189 28.8184C86.717 28.8184 87.1234 28.7189 87.5381 28.5197ZM88.7327 30.1344C88.6626 29.7952 88.6167 29.4106 88.5954 28.98C88.2887 29.3461 87.8893 29.6568 87.3965 29.9125C86.9045 30.168 86.3485 30.2957 85.7295 30.2957C85.229 30.2957 84.773 30.1976 84.361 30.001C83.9498 29.8048 83.6226 29.5087 83.3805 29.113C83.1383 28.7176 83.017 28.2347 83.017 27.6639C83.017 26.8192 83.321 26.145 83.9293 25.6416C84.5375 25.1385 85.5519 24.887 86.9727 24.887C87.5055 24.887 88.033 24.9248 88.5551 25V24.8305C88.5551 24.0609 88.3909 23.5187 88.0626 23.2036C87.7343 22.889 87.2634 22.7316 86.6501 22.7316C86.2247 22.7316 85.7701 22.7935 85.2855 22.9172C84.8013 23.0411 84.3759 23.189 84.0101 23.3612L83.6951 21.9081C84.0503 21.7465 84.5186 21.5986 85.0999 21.464C85.6813 21.3297 86.2946 21.2622 86.9405 21.2622C87.6941 21.2622 88.3343 21.3765 88.8618 21.6052C89.3893 21.834 89.801 22.2271 90.097 22.7838C90.393 23.3411 90.541 24.0906 90.541 25.0323V28.4954C90.541 28.8562 90.5623 29.4027 90.6055 30.1344H88.7327Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 491,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M92.0709 28.0434V17.7505L94.0567 17.5891V27.6882C94.0567 28.0597 94.1199 28.3218 94.2463 28.4754C94.3727 28.6285 94.5732 28.7056 94.8479 28.7056C94.9716 28.7056 95.1466 28.676 95.3724 28.6168L95.6066 30.0456C95.418 30.121 95.1882 30.1816 94.9167 30.2272C94.6447 30.2728 94.3876 30.2957 94.1455 30.2957C92.762 30.2957 92.0709 29.5451 92.0709 28.0434Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 495,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M97.0356 28.0434V17.7505L99.0215 17.5891V27.6882C99.0215 28.0597 99.0847 28.3218 99.2111 28.4754C99.3378 28.6285 99.5383 28.7056 99.8127 28.7056C99.9365 28.7056 100.111 28.676 100.338 28.6168L100.572 30.0456C100.383 30.121 100.153 30.1816 99.8815 30.2272C99.6095 30.2728 99.3524 30.2957 99.1103 30.2957C97.7271 30.2957 97.0356 29.5451 97.0356 28.0434Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 499,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M106.795 24.7659C106.755 24.0716 106.581 23.551 106.269 23.2036C105.957 22.8568 105.539 22.683 105.019 22.683C104.512 22.683 104.091 22.8581 103.755 23.2078C103.419 23.5578 103.197 24.0771 103.096 24.7659H106.795ZM108.739 26.0333H103.04C103.131 27.8579 104 28.7701 105.648 28.7701C106.056 28.7701 106.475 28.7203 106.904 28.6208C107.331 28.521 107.741 28.388 108.133 28.221L108.571 29.5853C107.595 30.0592 106.501 30.2957 105.285 30.2957C104.357 30.2957 103.579 30.121 102.944 29.7711C102.307 29.4213 101.829 28.9181 101.509 28.2613C101.19 27.6051 101.03 26.8138 101.03 25.888C101.03 24.9248 101.199 24.0958 101.539 23.4016C101.877 22.7073 102.349 22.1773 102.955 21.8112C103.56 21.4453 104.259 21.2622 105.051 21.2622C105.875 21.2622 106.56 21.4547 107.112 21.8396C107.664 22.2241 108.072 22.737 108.339 23.3773C108.605 24.018 108.739 24.7255 108.739 25.5005V26.0333Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 503,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M110.248 23.6115C110.248 23.1326 110.224 22.4034 110.181 21.4237H112.048C112.08 21.6659 112.109 21.9552 112.141 22.2916C112.171 22.6279 112.189 22.901 112.2 23.1109C112.432 22.7288 112.659 22.4073 112.883 22.1463C113.107 21.8851 113.368 21.6727 113.667 21.5083C113.965 21.3443 114.304 21.2622 114.688 21.2622C114.995 21.2622 115.256 21.2946 115.477 21.3592L115.227 23.0868C115.035 23.0276 114.819 22.9979 114.581 22.9979C114.115 22.9979 113.704 23.1177 113.355 23.3573C113.005 23.5965 112.632 23.9908 112.232 24.5398V30.1344H110.248V23.6115Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 507,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M116.597 33.6984C116.307 33.6475 116.067 33.5896 115.88 33.5251L116.243 32.072C116.376 32.1094 116.547 32.1458 116.752 32.1808C116.955 32.216 117.149 32.2333 117.333 32.2333C118.216 32.2333 118.877 31.6653 119.317 30.5299L119.448 30.207L116.235 21.4237H118.373L119.989 26.332C120.251 27.1717 120.421 27.8149 120.496 28.2613C120.648 27.6317 120.824 27.0021 121.029 26.3724L122.669 21.4237H124.677L121.475 30.2475C121.173 31.0816 120.845 31.7541 120.496 32.2656C120.147 32.7768 119.733 33.1562 119.259 33.4039C118.781 33.6512 118.208 33.7752 117.533 33.7752C117.2 33.7752 116.888 33.7499 116.597 33.6984Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 511,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M41.5933 7.30106H45.1474L45.0474 8.15946H42.6349V9.82186H44.9098V10.6261H42.6349V12.4677H45.1765L45.089 13.3344H41.5933V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 515,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.5973 10.2552L45.7223 7.30106H46.9055L48.1765 9.472L49.514 7.30106H50.6639L48.8055 10.2176L50.8181 13.3344H49.6181L48.1807 10.9595L46.7181 13.3344H45.5682L47.5973 10.2552Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 519,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M54.1973 9.99466C54.4194 9.7936 54.5306 9.50933 54.5306 9.14266C54.5306 8.7704 54.4172 8.50266 54.1911 8.33866C53.9647 8.17466 53.6319 8.0928 53.1932 8.0928H52.6266V10.2344C52.8876 10.276 53.0876 10.2968 53.2266 10.2968C53.6514 10.2968 53.9751 10.1963 54.1973 9.99466ZM51.5847 7.30106H53.2098C53.9735 7.30106 54.5583 7.4568 54.9639 7.76773C55.3695 8.07893 55.5722 8.5288 55.5722 9.1176C55.5722 9.5176 55.4813 9.8672 55.2994 10.1656C55.1173 10.4643 54.8639 10.6936 54.5388 10.8531C54.214 11.0131 53.8402 11.0928 53.418 11.0928C53.1876 11.0928 52.9236 11.0651 52.6266 11.0093V13.3344H51.5847V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 523,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M56.6015 7.30106H57.6431V12.4427H60.1389L60.0514 13.3344H56.6015V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 527,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.4223 12.2989C64.714 12.1032 64.9319 11.8339 65.0764 11.4907C65.221 11.1477 65.2932 10.7552 65.2932 10.3136C65.2932 9.88026 65.2292 9.49439 65.1015 9.15519C64.9735 8.81625 64.7695 8.54639 64.489 8.34479C64.2084 8.14346 63.8474 8.04266 63.4055 8.04266C62.9834 8.04266 62.625 8.14479 62.3306 8.34906C62.0362 8.55306 61.8154 8.82692 61.6682 9.16986C61.521 9.51306 61.4474 9.89145 61.4474 10.3053C61.4474 10.7413 61.5167 11.1317 61.6556 11.476C61.7943 11.8205 62.0068 12.0928 62.2932 12.2928C62.5791 12.4928 62.9332 12.5928 63.3556 12.5928C63.7751 12.5928 64.1306 12.4947 64.4223 12.2989ZM61.7223 13.0387C61.2807 12.7859 60.9431 12.4309 60.7098 11.9739C60.4764 11.5171 60.3599 10.9859 60.3599 10.3803C60.3599 9.74426 60.4839 9.18799 60.7327 8.71146C60.9813 8.23519 61.3396 7.86719 61.8076 7.60719C62.2756 7.34772 62.8277 7.21759 63.4639 7.21759C64.0722 7.21759 64.5959 7.34346 65.0348 7.59466C65.4735 7.84639 65.8084 8.19972 66.0388 8.65519C66.2695 9.11092 66.3847 9.63865 66.3847 10.2387C66.3847 10.8859 66.2591 11.4485 66.0076 11.9261C65.7562 12.4037 65.3981 12.772 64.9327 13.0301C64.4674 13.2885 63.921 13.4177 63.2932 13.4177C62.6876 13.4177 62.1639 13.2915 61.7223 13.0387Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 528,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M69.1807 10.1552C69.4333 10.1552 69.657 10.1061 69.8514 10.0072C70.0458 9.9088 70.1973 9.76986 70.3055 9.59066C70.4141 9.41146 70.4682 9.20373 70.4682 8.96773C70.4682 8.66506 70.3722 8.44346 70.1807 8.3032C69.989 8.16293 69.7098 8.0928 69.3431 8.0928H68.589V10.1552H69.1807ZM67.5474 7.30106H69.4349C70.1237 7.30106 70.6453 7.43866 70.9994 7.7136C71.3536 7.98853 71.5306 8.38186 71.5306 8.8928C71.5306 9.21226 71.4666 9.4936 71.3389 9.73653C71.2111 9.97973 71.0528 10.1776 70.864 10.3301C70.6749 10.4829 70.4807 10.5968 70.2807 10.672L72.1349 13.3344H70.9266L69.3557 10.9427H68.589V13.3344H67.5474V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 532,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M72.9599 7.30106H76.5141L76.4141 8.15946H74.0015V9.82186H76.2765V10.6261H74.0015V12.4677H76.5431L76.4556 13.3344H72.9599V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 536,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M80.3807 7.30106H81.4223V13.3344H80.3807V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 540,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M84.1765 8.172H82.3055L82.3973 7.30106H87.0933L86.9973 8.172H85.218V13.3344H84.1765V8.172Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 541,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M94.3141 12.2989C94.6055 12.1032 94.8237 11.8339 94.9682 11.4907C95.1125 11.1477 95.1847 10.7552 95.1847 10.3136C95.1847 9.88026 95.1207 9.49439 94.9933 9.15519C94.8653 8.81625 94.661 8.54639 94.3807 8.34479C94.0999 8.14346 93.7389 8.04266 93.2973 8.04266C92.8749 8.04266 92.5167 8.14479 92.2223 8.34906C91.9277 8.55306 91.7069 8.82692 91.5599 9.16986C91.4125 9.51306 91.3389 9.89145 91.3389 10.3053C91.3389 10.7413 91.4082 11.1317 91.5474 11.476C91.6861 11.8205 91.8986 12.0928 92.1847 12.2928C92.4709 12.4928 92.825 12.5928 93.2474 12.5928C93.6666 12.5928 94.0223 12.4947 94.3141 12.2989ZM91.6141 13.0387C91.1722 12.7859 90.8349 12.4309 90.6015 11.9739C90.3682 11.5171 90.2514 10.9859 90.2514 10.3803C90.2514 9.74426 90.3757 9.18799 90.6245 8.71146C90.8727 8.23519 91.2311 7.86719 91.6994 7.60719C92.1674 7.34772 92.7194 7.21759 93.3557 7.21759C93.9639 7.21759 94.4874 7.34346 94.9266 7.59466C95.3653 7.84639 95.6999 8.19972 95.9306 8.65519C96.161 9.11092 96.2765 9.63865 96.2765 10.2387C96.2765 10.8859 96.1506 11.4485 95.8994 11.9261C95.6479 12.4037 95.2895 12.772 94.8245 13.0301C94.3591 13.2885 93.8125 13.4177 93.1847 13.4177C92.5791 13.4177 92.0557 13.2915 91.6141 13.0387Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 542,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M97.4389 7.30106H98.6349L101.619 11.976C101.592 11.5317 101.581 11.1219 101.581 10.7469V7.30106H102.547V13.3344H101.389L98.3599 8.58426C98.3903 9.12346 98.4055 9.60106 98.4055 10.0176V13.3344H97.4389V7.30106Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 546,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M26.9417 7.33329H15.8633C10.6446 7.33329 8.73584 9.24209 8.73584 14.4608V25.5393C8.73584 30.7579 10.6446 32.6666 15.8633 32.6666H26.9382C32.1569 32.6666 34.0692 30.7579 34.0692 25.5393V14.4608C34.0692 9.24209 32.1604 7.33329 26.9417 7.33329",
                    fill: "#C91C2E"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 550,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.7881 22.0255H20.8041L20.2944 20.8404L19.7881 22.0255ZM19.5379 22.6229L19.2366 23.3125H18.5504L20.0097 20.0021H20.6025L22.0558 23.3125H21.3513L21.0537 22.6229H19.5379ZM30.5787 23.3102H31.2419V20.0021H30.5787V23.3102ZM27.9395 21.8887H29.1616V21.2859H27.9395V20.6078H29.7137V20.0042H27.2766V23.3121H29.7777V22.7088H27.9395V21.8887ZM25.3046 22.2796L24.5526 20.002H24.0043L23.2523 22.2796L22.5206 20.0036H21.8054L22.9598 23.314H23.516L24.2691 21.1395L25.0219 23.314H25.5832L26.7347 20.0036H26.0379L25.3046 22.2796ZM17.5382 21.8979C17.5382 22.4364 17.2707 22.7241 16.7851 22.7241C16.2969 22.7241 16.0281 22.4283 16.0281 21.875V20.004H15.356V21.8979C15.356 22.8296 15.8736 23.3638 16.776 23.3638C17.6872 23.3638 18.2099 22.8194 18.2099 21.8705V20.002H17.5382V21.8979ZM13.7526 20.0021H14.4243V23.3142H13.7526V21.9692H12.235V23.3142H11.563V20.0021H12.235V21.3383H13.7526V20.0021Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 556,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21.4023 15.7851C19.0773 15.7851 17.1855 13.8933 17.1855 11.5683H17.7813C17.7813 13.5649 19.4055 15.1894 21.4023 15.1894C23.3991 15.1894 25.0234 13.5649 25.0234 11.5683H25.6191C25.6191 13.8933 23.7274 15.7851 21.4023 15.7851",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
                    lineNumber: 560,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
            lineNumber: 474,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/buttons/app-store-buttons.tsx",
        lineNumber: 465,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = AppGalleryButton;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GooglePlayButton");
__turbopack_context__.k.register(_c1, "GooglePlayWhiteButton");
__turbopack_context__.k.register(_c2, "AppStoreButton");
__turbopack_context__.k.register(_c3, "GalaxyStoreButton");
__turbopack_context__.k.register(_c4, "AppGalleryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/foundations/rating-stars.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RatingStars": ()=>RatingStars,
    "StarIcon": ()=>StarIcon,
    "getStarProgress": ()=>getStarProgress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cx.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const getStarProgress = function(starPosition, rating) {
    let maxRating = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;
    // Ensure rating is between 0 and 5
    const clampedRating = Math.min(Math.max(rating, 0), maxRating);
    const diff = clampedRating - starPosition;
    if (diff >= 1) return 100;
    if (diff <= 0) return 0;
    return Math.round(diff * 100);
};
const StarIcon = (param)=>{
    let { progress = 100, ...props } = param;
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("size-5 text-warning-400", props.className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z",
                className: "fill-bg-tertiary"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-stars.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip-".concat(id, ")"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/app/components/foundations/rating-stars.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-stars.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip-".concat(id),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "".concat(progress, "%"),
                        height: "20",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/foundations/rating-stars.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/foundations/rating-stars.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-stars.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/foundations/rating-stars.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StarIcon, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = StarIcon;
const RatingStars = (param)=>{
    let { rating = 5, stars = 5, starClassName, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("flex", props.className),
        children: Array.from({
            length: stars
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                progress: getStarProgress(index, rating, stars),
                className: starClassName
            }, index, false, {
                fileName: "[project]/app/components/foundations/rating-stars.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/components/foundations/rating-stars.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = RatingStars;
var _c, _c1;
__turbopack_context__.k.register(_c, "StarIcon");
__turbopack_context__.k.register(_c1, "RatingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/foundations/rating-badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RatingBadge": ()=>RatingBadge,
    "Wreath": ()=>Wreath
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$foundations$2f$rating$2d$stars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/foundations/rating-stars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cx.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Wreath = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "81",
        viewBox: "0 0 36 81",
        fill: "none",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("text-fg-primary", props.className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M34.188 79.123C21.8844 77.4193 12.9273 67.7396 8.84084 54.5087C7.16207 49.0327 6.91909 42.9593 7.50445 36.6094C8.58681 25.2702 13.7888 15.4245 21.3764 8.24482C21.4095 8.21163 21.4206 8.20057 21.4316 8.23376C21.4537 8.26695 21.52 8.30013 21.5531 8.32226C21.5973 8.34439 21.6083 8.32226 21.5752 8.37757C13.5237 15.7563 8.35488 27.4938 7.79161 39.3529C6.91909 56.2898 15.1362 71.2907 27.4509 76.4569C29.5162 77.3308 31.6809 77.9946 33.934 78.3375C34.0886 78.5367 34.177 78.8132 34.188 79.123Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.51737 50.8359C4.52243 52.0306 6.12388 53.2033 7.84683 52.7497C7.93518 52.8825 8.38801 53.5462 8.45428 53.6458C8.53159 53.7675 8.67517 53.8892 8.78561 53.7896C8.85188 53.7453 8.9071 53.6458 8.84084 53.4909C8.58681 53.1812 8.34383 52.8603 8.05667 52.5285C7.54863 49.8402 6.80864 48.0481 5.26241 46.2338C3.4732 44.1541 1.6398 43.2248 0.502216 42.8376C0.336548 42.7934 0.181926 42.7491 0.0162576 42.6938C-0.0941877 43.7337 0.380727 45.2493 0.756241 46.1121C1.48518 47.8822 2.28039 49.4309 3.51737 50.8359Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.317 12.9686C18.1735 13.0239 17.3341 13.2451 17.2347 13.0792C17.2015 13.0349 17.2457 12.869 17.323 12.8579C17.6323 12.8247 17.9747 12.8026 18.2729 12.7362C18.814 11.0326 20.3161 10.2914 21.6967 10.0038C23.3533 9.6719 25.1757 10.1808 27.1306 10.4573C27.23 10.4795 27.3404 10.4905 27.4288 10.4905C27.3956 10.5569 27.3515 10.6012 27.3073 10.6675C26.49 11.7849 25.2088 12.8137 23.9608 13.3226C23.1214 13.6766 22.1164 13.8757 21.1334 13.8425C20.0952 13.7983 19.2227 13.5659 18.317 12.9686Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.5531 8.3112C21.6194 8.33332 21.6194 8.3112 21.7408 8.24482C21.9728 8.02357 22.1716 7.89082 22.4035 7.68063C23.7289 7.69169 24.9879 7.29344 26.1807 6.49693C26.7109 6.14293 27.241 5.71148 27.6828 5.19154C28.7431 4.05209 29.5935 2.38164 29.9801 0.854996C30.0022 0.766495 30.0132 0.711182 30.0242 0.622681C29.9248 0.666931 29.8365 0.711183 29.7371 0.755433C27.5945 1.61832 25.5181 2.01657 23.7951 3.68703C22.6244 4.80435 22.017 6.15399 22.2599 7.45938C21.9949 7.66957 21.7188 7.86869 21.4647 8.11207C21.3543 8.21163 21.4868 8.3112 21.5531 8.3112Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.7557 20.1039C13.6121 20.1814 12.8058 20.6018 12.6843 20.4579C12.6291 20.4026 12.6512 20.2256 12.7285 20.1924C13.0267 20.0818 13.3801 20.0044 13.6783 19.8716C13.7888 18.6658 14.4625 17.5374 15.7989 16.763C17.8421 15.6789 20.1615 15.8559 22.3483 15.6678C22.4587 15.6568 22.5581 15.6568 22.6575 15.6457C22.6244 15.7121 22.5913 15.7674 22.5692 15.8338C21.8402 17.0949 20.6585 18.4556 19.4546 19.23C18.6484 19.7721 17.6544 20.1814 16.6604 20.3805C15.6111 20.5907 14.7165 20.469 13.7557 20.1039Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.0535 38.7113C3.71618 40.2047 4.90898 41.842 6.65402 41.9526C6.70924 42.1075 7.02953 42.8266 7.07371 42.9372C7.10685 43.0921 7.21729 43.258 7.36087 43.1916C7.42714 43.1695 7.4934 43.081 7.48236 42.9261C7.31669 42.5279 7.10685 42.2181 6.90804 41.8088C7.06267 39.0653 6.90804 37.0629 5.85881 34.8062C4.666 32.2064 3.03141 30.713 2.02636 29.9829C1.90487 29.8722 1.76129 29.7837 1.61771 29.6952C1.38578 30.7572 1.46309 32.4056 1.60667 33.357C1.86069 35.2818 2.26934 36.9744 3.0535 38.7113Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.00838 27.6929C5.29554 29.2859 6.01344 30.89 7.60385 31.5869C7.62594 31.7529 7.80265 32.5273 7.82474 32.6489C7.82474 32.8149 7.87996 33.0029 8.03458 32.9808C8.07876 32.9698 8.18921 32.9255 8.20025 32.7596C8.13399 32.3392 8.0125 31.8635 7.93519 31.4099C8.46532 29.474 8.75248 27.704 8.66412 25.8123C8.52054 23.1462 7.52654 20.8341 5.95821 18.9756C5.83672 18.8428 5.74837 18.699 5.63792 18.5773C5.19614 19.4955 4.90898 21.0664 4.83167 22.0067C4.666 23.9095 4.67705 25.8233 5.00838 27.6929Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.01755 17.637C8.97337 19.2742 9.37097 21.1106 10.7405 22.1727C10.7295 22.3386 10.6963 23.1351 10.6963 23.2457C10.6742 23.4006 10.6853 23.5887 10.8399 23.6219C10.8951 23.6219 10.9945 23.6108 11.0277 23.4559C11.0608 23.0466 11.0718 22.416 11.0939 21.9625C12.2646 19.9712 12.8942 17.8029 12.9163 15.3249C12.9604 12.4597 12.2536 10.6343 11.6903 9.48383C11.613 9.32896 11.5357 9.17408 11.4584 9.01921C10.8399 9.77146 10.2545 11.2096 9.98947 12.0946C9.45933 13.8868 9.07277 15.7563 9.01755 17.637Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.092 8.45501C14.7386 9.99271 14.838 12.2495 15.9867 13.1787C15.9425 13.3779 15.8431 14.0638 15.832 14.2186C15.7878 14.3846 15.7547 14.5394 15.8872 14.6058C15.9425 14.6279 15.9866 14.628 16.0529 14.4841C16.1302 14.0527 16.1523 13.6987 16.2186 13.2562C17.8532 11.5083 18.7809 9.78252 19.3 7.42619C19.8191 4.95923 19.7418 3.00114 19.5209 1.61832C19.4988 1.45238 19.4546 1.28644 19.4105 1.10944C17.9747 2.25995 16.9586 3.77553 16.0971 5.50129C15.6332 6.44162 15.2688 7.40406 15.092 8.45501Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.0889 29.5182C9.95633 29.6399 9.22739 30.3369 9.05068 30.2484C9.0065 30.2041 8.97337 29.9718 9.05068 29.9275C9.32679 29.7063 9.68022 29.5404 9.95633 29.3302C9.86798 28.0026 10.1662 26.653 11.37 25.3919C13.2255 23.5887 15.6884 22.9802 17.9305 22.051C18.0299 22.0067 18.1293 21.9514 18.2508 21.9071C18.2287 21.9846 18.2176 22.0731 18.1845 22.1505C17.7427 23.6993 16.8592 25.5025 15.7878 26.7194C15.092 27.538 14.1533 28.3235 13.1703 28.8434C12.1432 29.3965 11.1712 29.5735 10.0889 29.5182Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.54263 40.3264C8.44323 40.5034 7.85787 41.4548 7.67012 41.4105C7.5928 41.4105 7.51549 41.1782 7.57072 41.0897C7.81369 40.7689 8.12294 40.5145 8.33279 40.1826C7.95727 38.9657 8.13399 37.2067 9.03964 35.5252C10.4754 33.0693 12.5739 31.8746 14.6061 30.1599C14.6944 30.0714 14.7828 29.9939 14.8822 29.8944C14.8932 29.9718 14.9043 30.0603 14.8932 30.1599C14.8491 31.8414 14.4073 33.9543 13.6231 35.5474C13.1151 36.6204 12.364 37.6935 11.5026 38.5896C10.608 39.4856 9.65813 40.0056 8.54263 40.3264Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.55873 50.9244C9.48142 51.1346 9.08382 52.263 8.88501 52.3072C8.81875 52.2961 8.68621 52.1302 8.74144 52.0085C8.90711 51.6324 9.09486 51.2009 9.24948 50.8138C8.56472 50.1611 8.33279 48.3468 8.88501 46.444C9.80171 43.6562 11.8449 41.5654 13.4906 39.2533C13.5679 39.1427 13.6452 39.0321 13.7225 38.9214C13.7446 38.9989 13.7557 39.0874 13.7777 39.1759C14.0649 40.8021 14.0428 42.9593 13.601 44.7183C13.3028 45.8909 12.7837 47.1852 12.11 48.2915C11.4142 49.4641 10.5859 50.2717 9.55873 50.9244Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.0958 63.3256C8.34383 64.1442 10.5748 64.7637 12.11 63.757C12.2315 63.8455 12.8721 64.2327 12.9494 64.2991C13.0598 64.4097 13.2145 64.4871 13.3139 64.3323C13.3691 64.2659 13.4022 64.1553 13.2918 64.0336C12.9715 63.8123 12.6181 63.6685 12.2757 63.4473C11.105 61.0135 9.84589 59.3652 7.9131 58.1483C5.70419 56.7323 3.85975 56.7101 2.67799 56.7101C2.51232 56.7101 2.34665 56.7212 2.18098 56.7212C2.46814 59.1218 5.43912 62.2968 7.0958 63.3256Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.2255 61.4449C13.2145 61.5998 13.1372 62.2857 13.0267 62.7061C12.9936 62.8277 12.9825 63.0048 12.8169 62.9384C12.7506 62.9273 12.6843 62.7835 12.6843 62.7171C12.7616 62.3078 12.8279 61.8432 12.861 61.4339C12.099 60.9471 11.5026 59.3541 11.3811 57.396C11.5136 54.4423 12.839 51.7651 13.8992 48.9774C13.9324 48.8557 13.9765 48.7229 14.0207 48.5902C14.0649 48.6565 14.087 48.7229 14.1312 48.7893C14.838 50.2496 15.3792 52.2962 15.4234 54.1436C15.4676 55.3494 15.2908 56.7544 14.9374 58.0598C14.5619 59.3983 14.0097 60.4493 13.2255 61.4449Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.8551 73.4257C15.2908 73.7134 17.2347 73.647 18.4496 72.0982C18.7588 72.1425 19.2558 72.2199 19.5761 72.242C19.6645 72.2531 19.7307 72.1867 19.7639 72.0761C19.786 71.9987 19.7639 71.8991 19.6203 71.8217C19.2558 71.7442 18.8914 71.7442 18.5048 71.6778C16.8923 69.7861 15.3682 68.7241 13.1703 68.3259C10.6301 67.8612 8.47637 68.5139 7.32774 68.9896C7.17311 69.0449 7.00744 69.1113 6.86387 69.1888C7.27251 70.1069 8.46532 71.0473 9.21635 71.5008C10.6521 72.4522 12.1211 73.1381 13.8551 73.4257Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 100,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.9908 69.4321C19.0128 69.5981 19.0349 70.2618 19.0349 70.7043C19.0239 70.826 19.057 70.992 18.8914 71.003C18.814 71.003 18.7257 70.9035 18.7257 70.826C18.6926 70.4167 18.7146 69.9742 18.6484 69.5538C17.798 69.2883 16.6714 67.994 16.1523 66.2129C15.5559 63.3588 16.2075 60.4161 16.5168 57.396C16.5389 57.2633 16.5278 57.1305 16.5389 56.9867C16.5941 57.042 16.6604 57.0973 16.7156 57.1526C17.7538 58.2921 18.792 60.051 19.289 61.7768C19.6313 62.9052 19.8081 64.2991 19.8081 65.6376C19.786 67.0426 19.4988 68.2263 18.9908 69.4321Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27.0312 75.24C27.1085 75.3617 27.2079 75.9148 27.3183 76.3352C27.3515 76.4348 27.4177 76.5896 27.2631 76.645C27.1858 76.6781 27.0864 76.6118 27.0643 76.5454C26.9207 76.1914 26.9207 75.8153 26.744 75.4613C25.9157 75.6604 24.4799 74.6094 23.5411 73.2377C22.2379 70.8703 22.0943 68.0936 21.5862 65.2726C21.5752 65.1398 21.531 65.0182 21.5089 64.8854C21.5752 64.8965 21.6414 64.9407 21.7077 64.9628C22.9557 65.5934 24.3805 66.7107 25.2972 68.0825C25.9267 68.9675 26.5121 70.1955 26.8434 71.4234C27.1858 72.7177 27.1968 73.9457 27.0312 75.24Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.514 80.5058C23.9829 80.3067 25.8825 79.6319 26.7219 77.7512C27.0201 77.6627 27.5392 77.6074 27.8485 77.5189C27.9368 77.5078 27.981 77.4083 27.9921 77.2866C27.9921 77.2202 27.9479 77.1207 27.7933 77.0985C27.4288 77.1538 27.0643 77.2645 26.6557 77.3087C24.5241 76.0476 22.8011 75.4723 20.5591 75.7931C17.9857 76.1582 16.1081 77.4525 15.1031 78.2822C14.9595 78.4039 14.8159 78.5145 14.6834 78.6362C15.3019 79.3996 16.6935 79.9084 17.5218 80.1297C19.1454 80.5833 20.7358 80.7603 22.514 80.5058Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 118,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/foundations/rating-badge.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Wreath;
const RatingBadge = (param)=>{
    let { title = "Best Design Tool", subtitle = "2,000+ reviews", rating, theme = "dark", className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("flex items-center -space-x-0.5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wreath, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("shrink-0", theme === "light" && "text-fg-white")
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$foundations$2f$rating$2d$stars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingStars"], {
                        rating: rating,
                        className: "gap-0.5",
                        starClassName: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/foundations/rating-badge.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("text-sm font-semibold", theme === "light" ? "text-primary_on-brand" : "text-primary"),
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("text-xs font-medium", theme === "light" ? "text-secondary_on-brand" : "text-secondary"),
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/foundations/rating-badge.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wreath, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("shrink-0 -scale-x-100", theme === "light" && "text-fg-white")
            }, void 0, false, {
                fileName: "[project]/app/components/foundations/rating-badge.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/foundations/rating-badge.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = RatingBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "Wreath");
__turbopack_context__.k.register(_c1, "RatingBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/shared-assets/qr-code.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GradientScan": ()=>GradientScan,
    "QRCode": ()=>QRCode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qr$2d$code$2d$styling$2f$lib$2f$qr$2d$code$2d$styling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qr-code-styling/lib/qr-code-styling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cx.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const QRCodeFrameHandle = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("size-3 rounded-tl border-t-2 border-l-2 border-brand_alt", className)
    }, void 0, false, {
        fileName: "[project]/app/components/shared-assets/qr-code.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = QRCodeFrameHandle;
const GradientScan = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("absolute bottom-0 h-1/2 w-full border-t border-brand bg-brand-solid/10", className),
        style: {
            maskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
            WebkitMaskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
            ...props.style
        }
    }, void 0, false, {
        fileName: "[project]/app/components/shared-assets/qr-code.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = GradientScan;
const styles = {
    md: {
        root: "p-2",
        qr: {
            width: 96,
            height: 96
        }
    },
    lg: {
        root: "p-3",
        qr: {
            width: 128,
            height: 128
        }
    }
};
const QRCode = (param)=>{
    let { size = "md", value, options, className } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [qrCode, setQrCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRCode.useEffect": ()=>{
            if (!ref.current) return;
            const qrCode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qr$2d$code$2d$styling$2f$lib$2f$qr$2d$code$2d$styling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                width: styles[size].qr.width,
                height: styles[size].qr.height,
                data: value,
                type: "svg",
                ...options
            });
            setQrCode(qrCode);
            qrCode.append(ref.current);
        }
    }["QRCode.useEffect"], [
        options,
        size,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRCode.useEffect": ()=>{
            if (!qrCode) return;
            qrCode.update(options);
        }
    }["QRCode.useEffect"], [
        qrCode,
        value,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("relative flex items-center justify-center", styles[size].root, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref
            }, void 0, false, {
                fileName: "[project]/app/components/shared-assets/qr-code.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRCodeFrameHandle, {
                className: "absolute top-0 left-0"
            }, void 0, false, {
                fileName: "[project]/app/components/shared-assets/qr-code.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRCodeFrameHandle, {
                className: "absolute top-0 right-0 rotate-90"
            }, void 0, false, {
                fileName: "[project]/app/components/shared-assets/qr-code.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRCodeFrameHandle, {
                className: "absolute right-0 bottom-0 rotate-180"
            }, void 0, false, {
                fileName: "[project]/app/components/shared-assets/qr-code.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRCodeFrameHandle, {
                className: "absolute bottom-0 left-0 -rotate-90"
            }, void 0, false, {
                fileName: "[project]/app/components/shared-assets/qr-code.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared-assets/qr-code.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QRCode, "ko/LXYsHhqr8SXWMdhAaLSG7qq8=");
_c2 = QRCode;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QRCodeFrameHandle");
__turbopack_context__.k.register(_c1, "GradientScan");
__turbopack_context__.k.register(_c2, "QRCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/features/Footer/footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$buttons$2f$app$2d$store$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/buttons/app-store-buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$foundations$2f$rating$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/foundations/rating-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2d$assets$2f$qr$2d$code$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared-assets/qr-code.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#0B1F3A] text-white py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center md:items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold tracking-tight text-white hover:text-[#1A73E8] transition-colors duration-300 cursor-pointer",
                                children: "AzPayGo"
                            }, void 0, false, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-5 text-m text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/about",
                                            children: "Haqqımızda"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/Footer/footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#why",
                                            children: "Niyə AzPayGo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/Footer/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/blog",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/Footer/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#news",
                                            children: "Xəbərlər"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/Footer/footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/feedback",
                                            children: "Feedback"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/Footer/footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/features/Footer/footer.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-5 text-m text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/about",
                                        children: "Abunəlik"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#why",
                                        children: "Asan POS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#blog",
                                        children: "Birdən çox pul köçürmələri"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/campaigns",
                                        children: "Kampanyalar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/feedback",
                                        children: "AzPayGo ilə ödə"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/faq",
                                        children: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/features/Footer/footer.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-5 text-m text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/tutorial",
                                        children: "Tutorial"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/mobile",
                                        children: "AzPayGo Mobile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/pricing",
                                        children: "Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/explore",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/settings",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/Footer/footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/features/Footer/footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/features/Footer/footer.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center gap-4 text-m text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-white",
                                children: "Contribute"
                            }, void 0, false, {
                                fileName: "[project]/app/features/Footer/footer.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/features/Footer/footer.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/features/Footer/footer.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " pt-10 items-center justify-center pl-8 pr-8 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4 text-white text-xl pt-10 border-t-2 border-white w-full items-center justify-center gap-5 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2025 AzPayGo"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                            className: "cursor-pointer hover:text-blue-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                            className: "cursor-pointer hover:text-pink-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                            className: "cursor-pointer hover:text-blue-400 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {
                            className: "cursor-pointer hover:text-gray-400 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$buttons$2f$app$2d$store$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStoreButton"], {}, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$buttons$2f$app$2d$store$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GalaxyStoreButton"], {}, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$buttons$2f$app$2d$store$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GooglePlayButton"], {}, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$foundations$2f$rating$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingBadge"], {}, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2d$assets$2f$qr$2d$code$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCode"], {
                            className: "cursor-pointer",
                            value: "https://example.com",
                            size: "lg"
                        }, void 0, false, {
                            fileName: "[project]/app/features/Footer/footer.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/features/Footer/footer.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/features/Footer/footer.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/Footer/footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$LoaderText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/LoaderText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$GetStartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/GetStartButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$LearnMoreButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/LearnMoreButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$features$2f$Header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/features/Header/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$features$2f$Footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/features/Footer/footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = [
        {
            q: "How do I create an account?",
            a: "Click on the Register button, fill in your details, and you’ll be ready to go in minutes."
        },
        {
            q: "Is my payment information secure?",
            a: "Yes, we use industry-standard encryption and comply with financial security regulations."
        },
        {
            q: "Can I send money internationally?",
            a: "Absolutely! Our platform supports cross-border transactions with competitive rates."
        },
        {
            q: "What fees should I expect?",
            a: "Most transfers are free. Some premium services may include a small fee, which will be shown before you confirm."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex flex-col overflow-hidden bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col items-center justify-center px-4 text-center h-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[#0B1F3A] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col sm:flex-row items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ölkənin ən"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$LoaderText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "ödəniş platforması"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/register",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$GetStartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$LearnMoreButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$features$2f$Header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gray-50 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-center mb-12",
                        children: "How It Works"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto grid md:grid-cols-4 gap-6 px-4 text-center",
                        children: [
                            {
                                step: "1️⃣",
                                text: "Sign Up"
                            },
                            {
                                step: "2️⃣",
                                text: "Add Funds"
                            },
                            {
                                step: "3️⃣",
                                text: "Send Payment"
                            },
                            {
                                step: "4️⃣",
                                text: "Receive Confirmation"
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-white rounded-xl shadow hover:shadow-lg transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-4xl mb-2",
                                        children: item.step
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-center mb-12",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto px-4 space-y-4",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-lg overflow-hidden shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                        className: "w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition",
                                        children: [
                                            faq.q,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500",
                                                children: openIndex === index ? "−" : "+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 text-gray-600 bg-white border-t",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$features$2f$Footer$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Home, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2c20bef4._.js.map