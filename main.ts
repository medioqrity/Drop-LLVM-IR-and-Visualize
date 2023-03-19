import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "node:path";

const create_window = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    create_window();
});

app.on("window-all-closed", () => {
    app.quit();
});