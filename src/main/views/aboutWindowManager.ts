import { app, BrowserWindow } from 'electron';
import path from 'path';

export default class {
    parentWindow?: BrowserWindow;
    aboutWindow?: BrowserWindow;

    constructor(parentWindow?: BrowserWindow) {
        this.parentWindow = parentWindow;
        this.aboutWindow = undefined;
        this.createAboutWindow();
    }

    createAboutWindow() {
        this.aboutWindow = new BrowserWindow({
            parent: this.parentWindow,
            width: 380,
            height: 290,
            resizable: false,
            movable: false,
            center: true,
            frame: false,
            modal: true,
            show: false,
        });

        this.aboutWindow.on('closed', () => {
            this.aboutWindow = undefined;
        });

        this.aboutWindow.loadURL(`file:///${path.resolve(
            app.getAppPath(), 'src', 'main', 'views', 'about.html',
        )}`);
    }

    openAboutWindow() {
        if (!this.aboutWindow) {
            this.createAboutWindow();
        }

        (this.aboutWindow as BrowserWindow).show();
    }

    closeAboutWindow() {
        if (this.aboutWindow) {
            this.aboutWindow.hide();
        }
    }
}
