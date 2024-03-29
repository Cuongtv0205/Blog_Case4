"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const blog_controller_1 = __importDefault(require("../controller/blog-controller"));
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.get('/', blog_controller_1.default.index);
exports.blogRouter.get('/:id', blog_controller_1.default.show);
exports.blogRouter.post('/', blog_controller_1.default.store);
exports.blogRouter.put('/', blog_controller_1.default.update);
exports.blogRouter.delete('/', blog_controller_1.default.destroy);
//# sourceMappingURL=blog-router.js.map