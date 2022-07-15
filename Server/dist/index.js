"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }))
app.get('/', (request, response, next) => {
    response.json(`정배홍이 되나?`);
});
app.use("/router", router_1.default);
app.listen(4002, () => {
    console.log('start');
});
