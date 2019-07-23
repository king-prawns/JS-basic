"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function scream(sentence) {
    return addExclamationPoints(sentence).toUpperCase();
}
exports.default = scream;
function addExclamationPoints(str) {
    return str.replace(/\?/g, "?!").replace(/\.$/, "!!!");
}
exports.addExclamationPoints = addExclamationPoints;
