"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntries = exports.findById = exports.getEntries = void 0;
const post_json_1 = __importDefault(require("./post.json"));
const post = post_json_1.default;
const getEntries = () => post;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = post.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const addEntries = () => null;
exports.addEntries = addEntries;
