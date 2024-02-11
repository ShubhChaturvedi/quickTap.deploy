"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const generate_1 = require("./helpers/generate");
const simple_git_1 = require("simple-git");
const path_1 = __importDefault(require("path"));
const files_1 = require("./helpers/files");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/deploy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUrl = req.body.repoUrl;
    const id = (0, generate_1.generate)();
    yield (0, simple_git_1.simpleGit)().clone(repoUrl, path_1.default.join(__dirname, `output/${id}`));
    const allFiles = (0, files_1.getAllFilesFromDir)(path_1.default.join(__dirname, `output/${id}`));
    console.log(allFiles);
    res.send({
        deployId: id
    });
}));
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
