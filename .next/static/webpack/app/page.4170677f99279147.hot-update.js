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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GameContext */ \"(app-pages-browser)/./src/context/GameContext.tsx\");\n/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/questions */ \"(app-pages-browser)/./src/data/questions.ts\");\n/* __next_internal_client_entry_do_not_use__ GameBoard auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction GameBoard() {\n    _s();\n    const { state, dispatch } = (0,_context_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGame)();\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(state.timePerTurn);\n    const [wrongAnswers, setWrongAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswer, setUserAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isTimerRunning, setIsTimerRunning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPlayButton, setShowPlayButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hasStartedOnce, setHasStartedOnce] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!state.currentQuestion && _data_questions__WEBPACK_IMPORTED_MODULE_3__.questions.length > 0) {\n            dispatch({\n                type: \"SET_QUESTION\",\n                payload: _data_questions__WEBPACK_IMPORTED_MODULE_3__.questions[state.currentRound - 1]\n            });\n        }\n    }, [\n        state.currentRound,\n        state.currentQuestion,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timeLeft > 0 && isTimerRunning && state.gameState === \"playing\") {\n            const timer = setTimeout(()=>setTimeLeft(timeLeft - 1), 1000);\n            return ()=>clearTimeout(timer);\n        } else if (timeLeft === 0 && isTimerRunning) {\n            endTurn();\n        }\n    }, [\n        timeLeft,\n        isTimerRunning,\n        state.gameState\n    ]);\n    const handleStartTimer = ()=>{\n        setTimeLeft(state.timePerTurn);\n        setIsTimerRunning(true);\n        setShowPlayButton(false);\n        setWrongAnswers(0);\n        setHasStartedOnce(true);\n    };\n    const endTurn = ()=>{\n        setIsTimerRunning(false);\n        setShowPlayButton(true);\n        setTimeout(()=>{\n            handleNextTurn();\n        }, 1500) // Give players time to see the final state\n        ;\n    };\n    const handleNextTurn = ()=>{\n        dispatch({\n            type: \"NEXT_TURN\"\n        });\n        setTimeLeft(state.timePerTurn);\n        setShowPlayButton(true);\n        setIsTimerRunning(false);\n        setWrongAnswers(0);\n        setHasStartedOnce(false);\n        setUserAnswer(\"\");\n    };\n    const handleAnswerSubmit = ()=>{\n        if (!state.currentQuestion || !isTimerRunning) return;\n        const answer = state.currentQuestion.answers.find((a)=>a.text.toLowerCase() === userAnswer.toLowerCase() && !a.isRevealed);\n        if (answer) {\n            dispatch({\n                type: \"REVEAL_ANSWER\",\n                payload: {\n                    answerIndex: state.currentQuestion.answers.indexOf(answer)\n                }\n            });\n            dispatch({\n                type: \"UPDATE_SCORE\",\n                payload: {\n                    teamId: state.teams[state.currentTeamIndex].id,\n                    points: answer.points\n                }\n            });\n            setUserAnswer(\"\");\n        } else {\n            setWrongAnswers((prev)=>{\n                const newCount = prev + 1;\n                if (newCount >= 3) {\n                    endTurn() // End turn after 3 wrong answers\n                    ;\n                    return 0;\n                }\n                return newCount;\n            });\n            setUserAnswer(\"\");\n        }\n    };\n    if (!state.currentQuestion) return null;\n    const currentTeam = state.teams[state.currentTeamIndex];\n    const shouldShowQuestion = isTimerRunning || hasStartedOnce && state.currentQuestion.answers.some((a)=>a.isRevealed);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-4xl space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: state.teams.map((team, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl font-bold p-4 rounded-lg \".concat(state.currentTeamIndex === index ? \"bg-game-blue text-white\" : \"bg-gray-100\"),\n                        children: [\n                            team.name,\n                            \": \",\n                            team.score\n                        ]\n                    }, team.id, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg bg-board-bg p-8 text-white\",\n                children: [\n                    shouldShowQuestion ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6 text-center text-2xl font-bold\",\n                                children: state.currentQuestion.text\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 gap-4\",\n                                children: state.currentQuestion.answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between rounded-md bg-gray-700 p-4 \".concat(answer.isRevealed ? \"bg-game-gold text-black\" : \"\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: answer.isRevealed ? answer.text : index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: answer.isRevealed ? answer.points : \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: userAnswer,\n                                        onChange: (e)=>setUserAnswer(e.target.value),\n                                        className: \"flex-1 rounded-md border p-2 text-black\",\n                                        placeholder: \"\".concat(currentTeam.name, \"'s answer...\"),\n                                        onKeyPress: (e)=>e.key === \"Enter\" && handleAnswerSubmit(),\n                                        disabled: !isTimerRunning\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleAnswerSubmit,\n                                        className: \"rounded-md px-4 py-2 \".concat(isTimerRunning ? \"bg-game-blue hover:bg-blue-700\" : \"bg-gray-500 cursor-not-allowed\"),\n                                        disabled: !isTimerRunning,\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl font-bold py-12\",\n                        children: wrongAnswers >= 3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-game-red\",\n                                    children: \"Three Wrong Answers!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Next Team's Turn...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                            lineNumber: 167,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Get Ready \",\n                                currentTeam.name,\n                                \"!\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                            lineNumber: 172,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: showPlayButton && wrongAnswers < 3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleStartTimer,\n                                    className: \"bg-game-green hover:bg-green-700 px-6 py-2 rounded-md\",\n                                    children: \"Start Turn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 180,\n                                    columnNumber: 15\n                                }, this) : isTimerRunning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xl\",\n                                    children: [\n                                        \"Time Left: \",\n                                        timeLeft,\n                                        \"s\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                    lineNumber: 187,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, this),\n                            hasStartedOnce && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg text-game-red\",\n                                children: [\n                                    \"Wrong Answers: \",\n                                    wrongAnswers,\n                                    \"/3\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                                lineNumber: 191,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center text-xl font-bold\",\n                        children: [\n                            \"Current Team: \",\n                            currentTeam.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Muhannad.Helvaci/Desktop/Family Game/src/components/GameBoard.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_s(GameBoard, \"z4OB6gFpyKT/lhseVrZy3M93xnM=\", false, function() {\n    return [\n        _context_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGame\n    ];\n});\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dhbWVCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDSztBQUNIO0FBR3RDLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0osNkRBQU9BO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQ0ksTUFBTUksV0FBVztJQUMxRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxNQUFNZSxlQUFlLElBQUlqQixzREFBU0EsQ0FBQ2tCLE1BQU0sR0FBRyxHQUFHO1lBQ2xEZixTQUFTO2dCQUNQZ0IsTUFBTTtnQkFDTkMsU0FBU3BCLHNEQUFTLENBQUNFLE1BQU1tQixZQUFZLEdBQUcsRUFBRTtZQUM1QztRQUNGO0lBQ0YsR0FBRztRQUFDbkIsTUFBTW1CLFlBQVk7UUFBRW5CLE1BQU1lLGVBQWU7UUFBRWQ7S0FBUztJQUV4RE4sZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXLEtBQUtPLGtCQUFrQlQsTUFBTW9CLFNBQVMsS0FBSyxXQUFXO1lBQ25FLE1BQU1DLFFBQVFDLFdBQVcsSUFBTW5CLFlBQVlELFdBQVcsSUFBSTtZQUMxRCxPQUFPLElBQU1xQixhQUFhRjtRQUM1QixPQUFPLElBQUluQixhQUFhLEtBQUtPLGdCQUFnQjtZQUMzQ2U7UUFDRjtJQUNGLEdB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SixZQUFZUSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDO0dBbk1nQnJEOztRQUNjRix5REFBT0E7OztLQURyQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZUJvYXJkLnRzeD9mNGFjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHYW1lIH0gZnJvbSAnLi4vY29udGV4dC9HYW1lQ29udGV4dCdcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gJy4uL2RhdGEvcXVlc3Rpb25zJ1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi4vdHlwZXMvZ2FtZSdcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUdhbWUoKVxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKHN0YXRlLnRpbWVQZXJUdXJuKVxuICBjb25zdCBbd3JvbmdBbnN3ZXJzLCBzZXRXcm9uZ0Fuc3dlcnNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3VzZXJBbnN3ZXIsIHNldFVzZXJBbnN3ZXJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpc1RpbWVyUnVubmluZywgc2V0SXNUaW1lclJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93UGxheUJ1dHRvbiwgc2V0U2hvd1BsYXlCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2hhc1N0YXJ0ZWRPbmNlLCBzZXRIYXNTdGFydGVkT25jZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc3RhdGUuY3VycmVudFF1ZXN0aW9uICYmIHF1ZXN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBkaXNwYXRjaCh7IFxuICAgICAgICB0eXBlOiAnU0VUX1FVRVNUSU9OJywgXG4gICAgICAgIHBheWxvYWQ6IHF1ZXN0aW9uc1tzdGF0ZS5jdXJyZW50Um91bmQgLSAxXSBcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbc3RhdGUuY3VycmVudFJvdW5kLCBzdGF0ZS5jdXJyZW50UXVlc3Rpb24sIGRpc3BhdGNoXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0aW1lTGVmdCA+IDAgJiYgaXNUaW1lclJ1bm5pbmcgJiYgc3RhdGUuZ2FtZVN0YXRlID09PSAncGxheWluZycpIHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRUaW1lTGVmdCh0aW1lTGVmdCAtIDEpLCAxMDAwKVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB9IGVsc2UgaWYgKHRpbWVMZWZ0ID09PSAwICYmIGlzVGltZXJSdW5uaW5nKSB7XG4gICAgICBlbmRUdXJuKClcbiAgICB9XG4gIH0sIFt0aW1lTGVmdCwgaXNUaW1lclJ1bm5pbmcsIHN0YXRlLmdhbWVTdGF0ZV0pXG5cbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICBzZXRUaW1lTGVmdChzdGF0ZS50aW1lUGVyVHVybilcbiAgICBzZXRJc1RpbWVyUnVubmluZyh0cnVlKVxuICAgIHNldFNob3dQbGF5QnV0dG9uKGZhbHNlKVxuICAgIHNldFdyb25nQW5zd2VycygwKVxuICAgIHNldEhhc1N0YXJ0ZWRPbmNlKHRydWUpXG4gIH1cblxuICBjb25zdCBlbmRUdXJuID0gKCkgPT4ge1xuICAgIHNldElzVGltZXJSdW5uaW5nKGZhbHNlKVxuICAgIHNldFNob3dQbGF5QnV0dG9uKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBoYW5kbGVOZXh0VHVybigpXG4gICAgfSwgMTUwMCkgLy8gR2l2ZSBwbGF5ZXJzIHRpbWUgdG8gc2VlIHRoZSBmaW5hbCBzdGF0ZVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV4dFR1cm4gPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTkVYVF9UVVJOJyB9KVxuICAgIHNldFRpbWVMZWZ0KHN0YXRlLnRpbWVQZXJUdXJuKVxuICAgIHNldFNob3dQbGF5QnV0dG9uKHRydWUpXG4gICAgc2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpXG4gICAgc2V0V3JvbmdBbnN3ZXJzKDApXG4gICAgc2V0SGFzU3RhcnRlZE9uY2UoZmFsc2UpXG4gICAgc2V0VXNlckFuc3dlcignJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFuc3dlclN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXN0YXRlLmN1cnJlbnRRdWVzdGlvbiB8fCAhaXNUaW1lclJ1bm5pbmcpIHJldHVyblxuXG4gICAgY29uc3QgYW5zd2VyID0gc3RhdGUuY3VycmVudFF1ZXN0aW9uLmFuc3dlcnMuZmluZChcbiAgICAgIChhOiBBbnN3ZXIpID0+IFxuICAgICAgICBhLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdXNlckFuc3dlci50b0xvd2VyQ2FzZSgpICYmIFxuICAgICAgICAhYS5pc1JldmVhbGVkXG4gICAgKVxuXG4gICAgaWYgKGFuc3dlcikge1xuICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgdHlwZTogJ1JFVkVBTF9BTlNXRVInLCBcbiAgICAgICAgcGF5bG9hZDogeyBcbiAgICAgICAgICBhbnN3ZXJJbmRleDogc3RhdGUuY3VycmVudFF1ZXN0aW9uLmFuc3dlcnMuaW5kZXhPZihhbnN3ZXIpIFxuICAgICAgICB9IFxuICAgICAgfSlcbiAgICAgIGRpc3BhdGNoKHsgXG4gICAgICAgIHR5cGU6ICdVUERBVEVfU0NPUkUnLCBcbiAgICAgICAgcGF5bG9hZDogeyBcbiAgICAgICAgICB0ZWFtSWQ6IHN0YXRlLnRlYW1zW3N0YXRlLmN1cnJlbnRUZWFtSW5kZXhdLmlkLCBcbiAgICAgICAgICBwb2ludHM6IGFuc3dlci5wb2ludHMgXG4gICAgICAgIH0gXG4gICAgICB9KVxuICAgICAgc2V0VXNlckFuc3dlcignJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V3JvbmdBbnN3ZXJzKHByZXYgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb3VudCA9IHByZXYgKyAxXG4gICAgICAgIGlmIChuZXdDb3VudCA+PSAzKSB7XG4gICAgICAgICAgZW5kVHVybigpIC8vIEVuZCB0dXJuIGFmdGVyIDMgd3JvbmcgYW5zd2Vyc1xuICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0NvdW50XG4gICAgICB9KVxuICAgICAgc2V0VXNlckFuc3dlcignJylcbiAgICB9XG4gIH1cblxuICBpZiAoIXN0YXRlLmN1cnJlbnRRdWVzdGlvbikgcmV0dXJuIG51bGxcblxuICBjb25zdCBjdXJyZW50VGVhbSA9IHN0YXRlLnRlYW1zW3N0YXRlLmN1cnJlbnRUZWFtSW5kZXhdXG4gIGNvbnN0IHNob3VsZFNob3dRdWVzdGlvbiA9IGlzVGltZXJSdW5uaW5nIHx8IChoYXNTdGFydGVkT25jZSAmJiBzdGF0ZS5jdXJyZW50UXVlc3Rpb24uYW5zd2Vycy5zb21lKGEgPT4gYS5pc1JldmVhbGVkKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBzcGFjZS15LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAge3N0YXRlLnRlYW1zLm1hcCgodGVhbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3RlYW0uaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhsIGZvbnQtYm9sZCBwLTQgcm91bmRlZC1sZyAke1xuICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50VGVhbUluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgICAgID8gJ2JnLWdhbWUtYmx1ZSB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktMTAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RlYW0ubmFtZX06IHt0ZWFtLnNjb3JlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctYm9hcmQtYmcgcC04IHRleHQtd2hpdGVcIj5cbiAgICAgICAge3Nob3VsZFNob3dRdWVzdGlvbiA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IHRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7c3RhdGUuY3VycmVudFF1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIHtzdGF0ZS5jdXJyZW50UXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcjogQW5zd2VyLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbWQgYmctZ3JheS03MDAgcC00ICR7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlci5pc1JldmVhbGVkID8gJ2JnLWdhbWUtZ29sZCB0ZXh0LWJsYWNrJyA6ICcnXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YW5zd2VyLmlzUmV2ZWFsZWQgPyBhbnN3ZXIudGV4dCA6IGluZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YW5zd2VyLmlzUmV2ZWFsZWQgPyBhbnN3ZXIucG9pbnRzIDogJyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyQW5zd2VyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFuc3dlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHJvdW5kZWQtbWQgYm9yZGVyIHAtMiB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7Y3VycmVudFRlYW0ubmFtZX0ncyBhbnN3ZXIuLi5gfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBoYW5kbGVBbnN3ZXJTdWJtaXQoKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzVGltZXJSdW5uaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQW5zd2VyU3VibWl0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbWQgcHgtNCBweS0yICR7XG4gICAgICAgICAgICAgICAgICBpc1RpbWVyUnVubmluZ1xuICAgICAgICAgICAgICAgICAgICA/ICdiZy1nYW1lLWJsdWUgaG92ZXI6YmctYmx1ZS03MDAnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktNTAwIGN1cnNvci1ub3QtYWxsb3dlZCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzVGltZXJSdW5uaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgcHktMTJcIj5cbiAgICAgICAgICAgIHt3cm9uZ0Fuc3dlcnMgPj0gMyA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ2FtZS1yZWRcIj5UaHJlZSBXcm9uZyBBbnN3ZXJzITwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+TmV4dCBUZWFtJ3MgVHVybi4uLjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+R2V0IFJlYWR5IHtjdXJyZW50VGVhbS5uYW1lfSE8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAge3Nob3dQbGF5QnV0dG9uICYmIHdyb25nQW5zd2VycyA8IDMgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFydFRpbWVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdhbWUtZ3JlZW4gaG92ZXI6YmctZ3JlZW4tNzAwIHB4LTYgcHktMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0IFR1cm5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBpc1RpbWVyUnVubmluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5UaW1lIExlZnQ6IHt0aW1lTGVmdH1zPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNTdGFydGVkT25jZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1nYW1lLXJlZFwiPlxuICAgICAgICAgICAgICBXcm9uZyBBbnN3ZXJzOiB7d3JvbmdBbnN3ZXJzfS8zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGRcIj5cbiAgICAgICAgICBDdXJyZW50IFRlYW06IHtjdXJyZW50VGVhbS5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdhbWUiLCJxdWVzdGlvbnMiLCJHYW1lQm9hcmQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsInRpbWVQZXJUdXJuIiwid3JvbmdBbnN3ZXJzIiwic2V0V3JvbmdBbnN3ZXJzIiwidXNlckFuc3dlciIsInNldFVzZXJBbnN3ZXIiLCJpc1RpbWVyUnVubmluZyIsInNldElzVGltZXJSdW5uaW5nIiwic2hvd1BsYXlCdXR0b24iLCJzZXRTaG93UGxheUJ1dHRvbiIsImhhc1N0YXJ0ZWRPbmNlIiwic2V0SGFzU3RhcnRlZE9uY2UiLCJjdXJyZW50UXVlc3Rpb24iLCJsZW5ndGgiLCJ0eXBlIiwicGF5bG9hZCIsImN1cnJlbnRSb3VuZCIsImdhbWVTdGF0ZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVuZFR1cm4iLCJoYW5kbGVTdGFydFRpbWVyIiwiaGFuZGxlTmV4dFR1cm4iLCJoYW5kbGVBbnN3ZXJTdWJtaXQiLCJhbnN3ZXIiLCJhbnN3ZXJzIiwiZmluZCIsImEiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJpc1JldmVhbGVkIiwiYW5zd2VySW5kZXgiLCJpbmRleE9mIiwidGVhbUlkIiwidGVhbXMiLCJjdXJyZW50VGVhbUluZGV4IiwiaWQiLCJwb2ludHMiLCJwcmV2IiwibmV3Q291bnQiLCJjdXJyZW50VGVhbSIsInNob3VsZFNob3dRdWVzdGlvbiIsInNvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0ZWFtIiwiaW5kZXgiLCJuYW1lIiwic2NvcmUiLCJzcGFuIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25LZXlQcmVzcyIsImtleSIsImRpc2FibGVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/GameBoard.tsx\n"));

/***/ })

});