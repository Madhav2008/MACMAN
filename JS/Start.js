class Start {
    constructor() {
        this.nameInput = createInput("").attribute("placeholder", "Name");
        this.playButton = createButton("Play");
    }
    hideElements() {
        this.nameInput.hide();
        this.playButton.hide();
    }
    setElementPosition() {
        this.nameInput.position(width / 2.3, height / 2 + 70);
        this.playButton.position(width / 2.1, height / 2 + 50);
    }
    setElementStyle() {
        this.nameInput.class("customInput");
        this.playButton.class("customButton");
    }
    handleOnpress() {
        this.playButton.mousePressed(() => {
            this.hideElements();
            welcome.hideLogo();
            gameState = "begin";
        });
    }
    display() {
        this.setElementStyle();
        this.setElementPosition();
        this.handleOnpress();
    }
}