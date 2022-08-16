"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const camping = express_1.default.Router();
camping.get("/", (req, res, next) => {
    res.send("camping connect");
});
module.exports = camping;
