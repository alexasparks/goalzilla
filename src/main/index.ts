import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, APOLLO_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import graphqlServer from './graphql';

app.whenReady().then(async () => {
    try {
        await installExtension(REACT_DEVELOPER_TOOLS);
        await installExtension(APOLLO_DEVELOPER_TOOLS);
        const server = await graphqlServer.listen({ port: 5000 })

        console.log(`Apollo Server listening at ${server.url}! 🚀`)
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