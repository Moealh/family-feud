"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/GameBoard.tsx":
/*!**************************************!*\
  !*** ./src/components/GameBoard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ \"(app-pages-browser)/./src/context/GameContext.tsx\");\n/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/questions */ \"(app-pages-browser)/./src/data/questions.ts\");\n/* __next_internal_client_entry_do_not_use__ GameBoard auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction GameBoard() {\n    _s();\n    const { state, dispatch } = (0,_context_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGame)();\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(state.timePerTurn);\n    const [wrongAnswers, setWrongAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswer, setUserAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isTimerRunning, setIsTimerRunning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPlayButton, setShowPlayButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hasStartedOnce, setHasStartedOnce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!state.currentQuestion && _data_questions__WEBPACK_IMPORTED_MODULE_3__.questions.length > 0) {\n            dispatch({\n                type: \"SET_QUESTION\",\n                payload: _data_questions__WEBPACK_IMPORTED_MODULE_3__.questions[state.currentRound - 1]\n            });\n        }\n    }, [\n        state.currentRound,\n        state.currentQuestion,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timeLeft > 0 && isTimerRunning && state.gameState === \"playing\") {\n            const timer = setTimeout(()=>setTimeLeft(timeLeft - 1), 1000);\n            return ()=>clearTimeout(timer);\n        } else if (timeLeft === 0 && isTimerRunning) {\n            setIsTimerRunning(false);\n            setShowPlayButton(true);\n            handleNextTurn();\n        }\n    }, [\n        timeLeft,\n        isTimerRunning,\n        state.gameState\n    ]);\n    const handleStartTimer = ()=>{\n        setTimeLeft(state.timePerTurn);\n        setIsTimerRunning(true);\n        setShowPlayButton(false);\n        setWrongAnswers(0);\n        setHasStartedOnce(true);\n    };\n    const handleNextTurn = ()=>{\n        dispatch({\n            type: \"NEXT_TURN\"\n        });\n        setTimeLeft(state.timePerTurn);\n        setShowPlayButton(true);\n        setIsTimerRunning(false);\n        setWrongAnswers(0);\n        setHasStartedOnce(false);\n        setUserAnswer(\"\");\n    };\n    const handleAnswerSubmit = ()=>{\n        if (!state.currentQuestion || !isTimerRunning) return;\n        const answer = state.currentQuestion.answers.find((a)=>a.text.toLowerCase() === userAnswer.toLowerCase() && !a.isRevealed);\n        if (answer) {\n            dispatch({\n                type: \"REVEAL_ANSWER\",\n                payload: {\n                    answerIndex: state.currentQuestion.answers.indexOf(answer)\n                }\n            });\n            dispatch({\n                type: \"UPDATE_SCORE\",\n                payload: {\n                    teamId: state.teams[state.currentTeamIndex].id,\n                    points: answer.points\n                }\n            });\n            setUserAnswer(\"\");\n        } else {\n            setWrongAnswers((prev)=>{\n                const newCount = prev + 1;\n                if (newCount >= 3) {\n                    setIsTimerRunning(false);\n                    setShowPlayButton(true);\n                    setTimeout(()=>{\n                        handleNextTurn();\n                    }, 1000);\n                    return 0;\n                }\n                return newCount;\n            });\n            setUserAnswer(\"\");\n        }\n    };\n    if (!state.currentQuestion) return null;\n    const currentTeam = state.teams[state.currentTeamIndex];\n    const shouldShowQuestion = isTimerRunning || hasStartedOnce && state.currentQuestion.answers.some((a)=>a.isRevealed);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-4xl space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: state.teams.map((team, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl font-bold p-4 rounded-lg \".concat(state.currentTeamIndex === index ? \"bg-game-blue text-white\" : \"bg-gray-100\"),\n                        children: [\n                            team.name,\n                            \": \",\n                            team.score\n                        ]\n                    }, team.id, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg bg-board-bg p-8 text-white\",\n                children: [\n                    shouldShowQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6 text-center text-2xl font-bold\",\n                                children: state.currentQuestion.text\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 gap-4\",\n                                children: state.currentQuestion.answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between rounded-md bg-gray-700 p-4 \".concat(answer.isRevealed ? \"bg-game-gold text-black\" : \"\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: answer.isRevealed ? answer.text : index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                                lineNumber: 133,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: answer.isRevealed ? answer.points : \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: userAnswer,\n                                        onChange: (e)=>setUserAnswer(e.target.value),\n                                        className: \"flex-1 rounded-md border p-2 text-black\",\n                                        placeholder: \"\".concat(currentTeam.name, \"'s answer...\"),\n                                        onKeyPress: (e)=>e.key === \"Enter\" && handleAnswerSubmit(),\n                                        disabled: !isTimerRunning\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleAnswerSubmit,\n                                        className: \"rounded-md px-4 py-2 \".concat(isTimerRunning ? \"bg-game-blue hover:bg-blue-700\" : \"bg-gray-500 cursor-not-allowed\"),\n                                        disabled: !isTimerRunning,\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl font-bold py-12\",\n                        children: [\n                            \"Get Ready \",\n                            currentTeam.name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: showPlayButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleStartTimer,\n                                    className: \"bg-game-green hover:bg-green-700 px-6 py-2 rounded-md\",\n                                    children: \"Start Turn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xl\",\n                                    children: [\n                                        \"Time Left: \",\n                                        timeLeft,\n                                        \"s\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 11\n                            }, this),\n                            hasStartedOnce && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg text-game-red\",\n                                children: [\n                                    \"Wrong Answers: \",\n                                    wrongAnswers,\n                                    \"/3\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 182,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center text-xl font-bold\",\n                        children: [\n                            \"Current Team: \",\n                            currentTeam.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(GameBoard, \"z4OB6gFpyKT/lhseVrZy3M93xnM=\", false, function() {\n    return [\n        _context_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGame\n    ];\n});\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dhbWVCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDSztBQUNIO0FBR3RDLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0osNkRBQU9BO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQ0ksTUFBTUksV0FBVztJQUMxRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxNQUFNZSxlQUFlLElBQUlqQixzREFBU0EsQ0FBQ2tCLE1BQU0sR0FBRyxHQUFHO1lBQ2xEZixTQUFTO2dCQUNQZ0IsTUFBTTtnQkFDTkMsU0FBU3BCLHNEQUFTLENBQUNFLE1BQU1tQixZQUFZLEdBQUcsRUFBRTtZQUM1QztRQUNGO0lBQ0YsR0FBRztRQUFDbkIsTUFBTW1CLFlBQVk7UUFBRW5CLE1BQU1lLGVBQWU7UUFBRWQ7S0FBUztJQUV4RE4sZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXLEtBQUtPLGtCQUFrQlQsTUFBTW9CLFNBQVMsS0FBSyxXQUFXO1lBQ25FLE1BQU1DLFFBQVFDLFdBQVcsSUFBTW5CLFlBQVlELFdBQVcsSUFBSTtZQUMxRCxPQUFPLElBQU1xQixhQUFhRjtRQUM1QixPQUFPLElBQUluQixhQUFhLEtBQUtPLGdCQUFnQjtZQUMzQ0Msa0JBQWtCO1lBQ2xC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TSxHQUFHOzs7Ozs7O3VDQU50Q1U7Ozs7Ozs7Ozs7MENBV1gsOERBQUNKO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087d0NBQ0NyQyxNQUFLO3dDQUNMc0MsT0FBT2hEO3dDQUNQaUQsVUFBVSxDQUFDQyxJQUFNakQsY0FBY2lELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3Q0FDN0NSLFdBQVU7d0NBQ1ZZLGFBQWEsR0FBb0IsT0FBakJoQixZQUFZUSxJQUFJLEVBQUM7d0NBQ2pDUyxZQUFZLENBQUNILElBQU1BLEVBQUVJLEdBQUcsS0FBSyxXQUFXbkM7d0NBQ3hDb0MsVUFBVSxDQUFDckQ7Ozs7OztrREFFYiw4REFBQ3NEO3dDQUNDQyxTQUFTdEM7d0NBQ1RxQixXQUFXLHdCQUlWLE9BSEN0QyxpQkFDSSxtQ0FDQTt3Q0FFTnFELFVBQVUsQ0FBQ3JEO2tEQUNaOzs7Ozs7Ozs7Ozs7O3FEQU1MLDhEQUFDcUM7d0JBQUlDLFdBQVU7OzRCQUF1Qzs0QkFDekNKLFlBQVlRLElBQUk7NEJBQUM7Ozs7Ozs7a0NBSWhDLDhEQUFDTDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNacEMsK0JBQ0MsOERBQUNvRDtvQ0FDQ0MsU0FBU3ZDO29DQUNUc0IsV0FBVTs4Q0FDWDs7Ozs7eURBSUQsOERBQUNEO29DQUFJQyxXQUFVOzt3Q0FBVTt3Q0FBWTdDO3dDQUFTOzs7Ozs7Ozs7Ozs7NEJBR2pEVyxnQ0FDQyw4REFBQ2lDO2dDQUFJQyxXQUFVOztvQ0FBd0I7b0NBQ3JCMUM7b0NBQWE7Ozs7Ozs7Ozs7Ozs7a0NBS25DLDhEQUFDeUM7d0JBQUlDLFdBQVU7OzRCQUFxQzs0QkFDbkNKLFlBQVlRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7R0ExTGdCcEQ7O1FBQ2NGLHlEQUFPQTs7O0tBRHJCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lQm9hcmQudHN4P2Y0YWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUdhbWUgfSBmcm9tICcuLi9jb250ZXh0L0dhbWVDb250ZXh0J1xuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSAnLi4vZGF0YS9xdWVzdGlvbnMnXG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi90eXBlcy9nYW1lJ1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2FtZSgpXG4gIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoc3RhdGUudGltZVBlclR1cm4pXG4gIGNvbnN0IFt3cm9uZ0Fuc3dlcnMsIHNldFdyb25nQW5zd2Vyc10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdXNlckFuc3dlciwgc2V0VXNlckFuc3dlcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzVGltZXJSdW5uaW5nLCBzZXRJc1RpbWVyUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dQbGF5QnV0dG9uLCBzZXRTaG93UGxheUJ1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaGFzU3RhcnRlZE9uY2UsIHNldEhhc1N0YXJ0ZWRPbmNlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5jdXJyZW50UXVlc3Rpb24gJiYgcXVlc3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRpc3BhdGNoKHsgXG4gICAgICAgIHR5cGU6ICdTRVRfUVVFU1RJT04nLCBcbiAgICAgICAgcGF5bG9hZDogcXVlc3Rpb25zW3N0YXRlLmN1cnJlbnRSb3VuZCAtIDFdIFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtzdGF0ZS5jdXJyZW50Um91bmQsIHN0YXRlLmN1cnJlbnRRdWVzdGlvbiwgZGlzcGF0Y2hdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRpbWVMZWZ0ID4gMCAmJiBpc1RpbWVyUnVubmluZyAmJiBzdGF0ZS5nYW1lU3RhdGUgPT09ICdwbGF5aW5nJykge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRpbWVMZWZ0KHRpbWVMZWZ0IC0gMSksIDEwMDApXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH0gZWxzZSBpZiAodGltZUxlZnQgPT09IDAgJiYgaXNUaW1lclJ1bm5pbmcpIHtcbiAgICAgIHNldElzVGltZXJSdW5uaW5nKGZhbHNlKVxuICAgICAgc2V0U2hvd1BsYXlCdXR0b24odHJ1ZSlcbiAgICAgIGhhbmRsZU5leHRUdXJuKClcbiAgICB9XG4gIH0sIFt0aW1lTGVmdCwgaXNUaW1lclJ1bm5pbmcsIHN0YXRlLmdhbWVTdGF0ZV0pXG5cbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICBzZXRUaW1lTGVmdChzdGF0ZS50aW1lUGVyVHVybilcbiAgICBzZXRJc1RpbWVyUnVubmluZyh0cnVlKVxuICAgIHNldFNob3dQbGF5QnV0dG9uKGZhbHNlKVxuICAgIHNldFdyb25nQW5zd2VycygwKVxuICAgIHNldEhhc1N0YXJ0ZWRPbmNlKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXh0VHVybiA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdORVhUX1RVUk4nIH0pXG4gICAgc2V0VGltZUxlZnQoc3RhdGUudGltZVBlclR1cm4pXG4gICAgc2V0U2hvd1BsYXlCdXR0b24odHJ1ZSlcbiAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSlcbiAgICBzZXRXcm9uZ0Fuc3dlcnMoMClcbiAgICBzZXRIYXNTdGFydGVkT25jZShmYWxzZSlcbiAgICBzZXRVc2VyQW5zd2VyKCcnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICghc3RhdGUuY3VycmVudFF1ZXN0aW9uIHx8ICFpc1RpbWVyUnVubmluZykgcmV0dXJuXG5cbiAgICBjb25zdCBhbnN3ZXIgPSBzdGF0ZS5jdXJyZW50UXVlc3Rpb24uYW5zd2Vycy5maW5kKFxuICAgICAgKGE6IEFuc3dlcikgPT4gXG4gICAgICAgIGEudGV4dC50b0xvd2VyQ2FzZSgpID09PSB1c2VyQW5zd2VyLnRvTG93ZXJDYXNlKCkgJiYgXG4gICAgICAgICFhLmlzUmV2ZWFsZWRcbiAgICApXG5cbiAgICBpZiAoYW5zd2VyKSB7XG4gICAgICBkaXNwYXRjaCh7IFxuICAgICAgICB0eXBlOiAnUkVWRUFMX0FOU1dFUicsIFxuICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgIGFuc3dlckluZGV4OiBzdGF0ZS5jdXJyZW50UXVlc3Rpb24uYW5zd2Vycy5pbmRleE9mKGFuc3dlcikgXG4gICAgICAgIH0gXG4gICAgICB9KVxuICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgdHlwZTogJ1VQREFURV9TQ09SRScsIFxuICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgIHRlYW1JZDogc3RhdGUudGVhbXNbc3RhdGUuY3VycmVudFRlYW1JbmRleF0uaWQsIFxuICAgICAgICAgIHBvaW50czogYW5zd2VyLnBvaW50cyBcbiAgICAgICAgfSBcbiAgICAgIH0pXG4gICAgICBzZXRVc2VyQW5zd2VyKCcnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXcm9uZ0Fuc3dlcnMocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50ID0gcHJldiArIDFcbiAgICAgICAgaWYgKG5ld0NvdW50ID49IDMpIHtcbiAgICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSlcbiAgICAgICAgICBzZXRTaG93UGxheUJ1dHRvbih0cnVlKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlTmV4dFR1cm4oKVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Q291bnRcbiAgICAgIH0pXG4gICAgICBzZXRVc2VyQW5zd2VyKCcnKVxuICAgIH1cbiAgfVxuXG4gIGlmICghc3RhdGUuY3VycmVudFF1ZXN0aW9uKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGN1cnJlbnRUZWFtID0gc3RhdGUudGVhbXNbc3RhdGUuY3VycmVudFRlYW1JbmRleF1cbiAgY29uc3Qgc2hvdWxkU2hvd1F1ZXN0aW9uID0gaXNUaW1lclJ1bm5pbmcgfHwgKGhhc1N0YXJ0ZWRPbmNlICYmIHN0YXRlLmN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzLnNvbWUoYSA9PiBhLmlzUmV2ZWFsZWQpKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNHhsIHNwYWNlLXktNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7c3RhdGUudGVhbXMubWFwKCh0ZWFtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17dGVhbS5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQteGwgZm9udC1ib2xkIHAtNCByb3VuZGVkLWxnICR7XG4gICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRUZWFtSW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICAgICAgPyAnYmctZ2FtZS1ibHVlIHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgOiAnYmctZ3JheS0xMDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVhbS5uYW1lfToge3RlYW0uc2NvcmV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1ib2FyZC1iZyBwLTggdGV4dC13aGl0ZVwiPlxuICAgICAgICB7c2hvdWxkU2hvd1F1ZXN0aW9uID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtzdGF0ZS5jdXJyZW50UXVlc3Rpb24udGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAge3N0YXRlLmN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyOiBBbnN3ZXIsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1tZCBiZy1ncmF5LTcwMCBwLTQgJHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyLmlzUmV2ZWFsZWQgPyAnYmctZ2FtZS1nb2xkIHRleHQtYmxhY2snIDogJydcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnthbnN3ZXIuaXNSZXZlYWxlZCA/IGFuc3dlci50ZXh0IDogaW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnthbnN3ZXIuaXNSZXZlYWxlZCA/IGFuc3dlci5wb2ludHMgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJBbnN3ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyQW5zd2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcm91bmRlZC1tZCBib3JkZXIgcC0yIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtjdXJyZW50VGVhbS5uYW1lfSdzIGFuc3dlci4uLmB9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZUFuc3dlclN1Ym1pdCgpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNUaW1lclJ1bm5pbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBbnN3ZXJTdWJtaXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1tZCBweC00IHB5LTIgJHtcbiAgICAgICAgICAgICAgICAgIGlzVGltZXJSdW5uaW5nXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWdhbWUtYmx1ZSBob3ZlcjpiZy1ibHVlLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JheS01MDAgY3Vyc29yLW5vdC1hbGxvd2VkJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNUaW1lclJ1bm5pbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZCBweS0xMlwiPlxuICAgICAgICAgICAgR2V0IFJlYWR5IHtjdXJyZW50VGVhbS5uYW1lfSFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICB7c2hvd1BsYXlCdXR0b24gPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFydFRpbWVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdhbWUtZ3JlZW4gaG92ZXI6YmctZ3JlZW4tNzAwIHB4LTYgcHktMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0IFR1cm5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5UaW1lIExlZnQ6IHt0aW1lTGVmdH1zPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNTdGFydGVkT25jZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1nYW1lLXJlZFwiPlxuICAgICAgICAgICAgICBXcm9uZyBBbnN3ZXJzOiB7d3JvbmdBbnN3ZXJzfS8zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGRcIj5cbiAgICAgICAgICBDdXJyZW50IFRlYW06IHtjdXJyZW50VGVhbS5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdhbWUiLCJxdWVzdGlvbnMiLCJHYW1lQm9hcmQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsInRpbWVQZXJUdXJuIiwid3JvbmdBbnN3ZXJzIiwic2V0V3JvbmdBbnN3ZXJzIiwidXNlckFuc3dlciIsInNldFVzZXJBbnN3ZXIiLCJpc1RpbWVyUnVubmluZyIsInNldElzVGltZXJSdW5uaW5nIiwic2hvd1BsYXlCdXR0b24iLCJzZXRTaG93UGxheUJ1dHRvbiIsImhhc1N0YXJ0ZWRPbmNlIiwic2V0SGFzU3RhcnRlZE9uY2UiLCJjdXJyZW50UXVlc3Rpb24iLCJsZW5ndGgiLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRSb3VuZCIsImdhbWVTdGF0ZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZU5leHRUdXJuIiwiaGFuZGxlU3RhcnRUaW1lciIsImhhbmRsZUFuc3dlclN1Ym1pdCIsImFuc3dlciIsImFuc3dlcnMiLCJmaW5kIiwiYSIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsImlzUmV2ZWFsZWQiLCJhbnN3ZXJJbmRleCIsImluZGV4T2YiLCJ0ZWFtSWQiLCJ0ZWFtcyIsImN1cnJlbnRUZWFtSW5kZXgiLCJpZCIsInBvaW50cyIsInByZXYiLCJuZXdDb3VudCIsImN1cnJlbnRUZWFtIiwic2hvdWxkU2hvd1F1ZXN0aW9uIiwic29tZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRlYW0iLCJpbmRleCIsIm5hbWUiLCJzY29yZSIsInNwYW4iLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleVByZXNzIiwia2V5IiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/GameBoard.tsx\n"));

/***/ })

});