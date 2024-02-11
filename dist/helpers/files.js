"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilesFromDir = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getAllFilesFromDir(folderPath) {
    let response = [];
    const allFilesAndFolders = fs_1.default.readdirSync(folderPath);
    allFilesAndFolders.forEach(file => {
        const fullFilePath = path_1.default.join(folderPath, file);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            const dirCheck = fullFilePath.split('/')[fullFilePath.split('/').length - 1] !== 'node_modules';
            if (dirCheck)
                response = response.concat(getAllFilesFromDir(fullFilePath));
        }
        else
            response.push(fullFilePath);
    });
    return response;
}
exports.getAllFilesFromDir = getAllFilesFromDir;
