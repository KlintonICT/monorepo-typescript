"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooComponent = void 0;
const utils_1 = require("@kt-package/utils");
const moment_1 = __importDefault(require("moment"));
const FooComponent = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(`[${(0, moment_1.default)().toISOString()}] FooComponent: ${randomNumber} -> isEven: ${(0, utils_1.isEven)(randomNumber)}`);
    // UI component implementation ...
};
exports.FooComponent = FooComponent;
