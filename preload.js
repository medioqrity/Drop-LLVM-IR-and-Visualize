"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
// node: () => process.versions.node,
// chrome: () => process.versions.chrome,
// electron: () => process.versions.electron,
// selectDirectory: () => ipcRenderer.invoke("select-directory"),
// getBranches: (folder_path: string) => ipcRenderer.invoke("get-branch", folder_path),
// isDirGitRepo: (folder_path: string) => ipcRenderer.invoke("is_dir_git_repo", folder_path),
// getALSinDir: (folder_path: string, branch_a: string, branch_b: string) => ipcRenderer.invoke("get_als_in_dir", folder_path, branch_a, branch_b),
});
