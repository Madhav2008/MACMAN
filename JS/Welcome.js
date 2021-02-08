class Welcome {
    constructor() {
        this.logoImage = "https://raw.githubusercontent.com/Madhav2008/Macman-Logo/master/macman logo1.jpg"
        this.logo = createImg(this.logoImage);

        this.startButton = createButton("START");
    }

    hideElements() {
        this.startButton.hide();
    }
    hideLogo() {
        this.logo.hide();
    }

    setElementPosition() {
        this.logo.position(width / 2.5, 0);
        this.startButton.position(width / 2.1, height / 2);
    }

    setElementStyle() {
        this.startButton.class("customButton");
        this.logo.class("customLogo");
    }

    handleOnpress() {
        this.startButton.mousePressed(() => {
            this.hideElements();
            start.display();
        });
    }

    display() {
        this.setElementStyle();
        this.setElementPosition();
        this.handleOnpress();
    }
}