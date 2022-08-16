"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users = express_1.default.Router();
users.get("/", (req, res, next) => {
    res.send("dhk 연걸");
});
module.exports = users;
