"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var node_path_1 = __importDefault(require("node:path"));
var create_window = function () {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: node_path_1.default.join(__dirname, "preload.js")
        }
    });
    win.loadFile("index.html");
};
electron_1.app.whenReady().then(function () {
    create_window();
});
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
