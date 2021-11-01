import path from 'path';
import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

app.whenReady().then(async () => {
    try {
        await installExtension(REACT_DEVELOPER_TOOLS);
    } catch (e) {
        console.error('Could not load react devtools: ', e);
    }
})

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            sandbox: true,
        },
    });

    if (process.env.NODE_ENV === "development") {
		win.loadURL("http://localhost:3001")
	} else {
		win.loadFile(path.join(__dirname, '..', "index.html"))
	}
});