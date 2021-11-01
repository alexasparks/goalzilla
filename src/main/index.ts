import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

app.on('ready', () => {
    // Example of adding a listener for hello-world event the ContextBridge
    ipcMain.on('hello-world', () => {
        console.log('Hello world from Main thread!');
    });

    const win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            sandbox: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });


    // if (process.env.NODE_ENV === "development") {
		win.loadURL("http://localhost:3001")
	// } else {
	// 	win.loadFile(path.join(__dirname, '..', "index.html"))
	// }
});
