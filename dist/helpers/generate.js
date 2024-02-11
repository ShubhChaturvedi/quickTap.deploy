"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
function generate() {
    const stringPool = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]:><?";
    const string_length = 6;
    let randomstring = '';
    for (let i = 0; i < string_length; i++) {
        const rnum = Math.floor(Math.random() * stringPool.length);
        randomstring += stringPool.substring(rnum, rnum + 1);
    }
    return randomstring;
}
exports.generate = generate;
