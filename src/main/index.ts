import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import graphqlServer from './graphql';

app.whenReady().then(async () => {
    try {
        await installExtension(REACT_DEVELOPER_TOOLS);
        await graphqlServer.listen({ port: 5000 })

        console.log('Apollo Server listening on port 5000! 🚀')
    } catch (e) {
        console.error('Could not load react devtools: ', e);
    }
})

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 900,
        height: 550,
        webPreferences: {
            sandbox: true,
        },
        titleBarStyle: 'hidden',
        resizable: false,
    });

    // if (process.env.NODE_ENV === "development") {
		win.loadURL("http://localhost:3001")
	// } else {
	// 	win.loadFile(path.join(__dirname, '..', "index.html"))
	// }
});