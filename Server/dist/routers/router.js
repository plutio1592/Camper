"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
const camping_1 = __importDefault(require("./camping"));
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    res.send("라우터 연걸");
});
router.use("/users", users_1.default);
router.use("/camping", camping_1.default);
module.exports = router;
