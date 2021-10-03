class Form {
    constructor() {
        this.heading = createElement("h1");
        this.nameInput = createInput();
        this.button = createButton("Play");
         this.greeting= createElement('h2')
    }

    display() {
        this.heading.html("Welcome to BasketBall Game");
        this.heading.position((displayWidth / 2)  - 100, 0);
        this.nameInput.position((displayWidth / 2)  - 100, this.heading.position.y + 150);
        this.button.position((displayWidth / 2)  - 100, this.nameInput.position.y + 150);
        this.button.mousePressed(() => {
            if (this.nameInput.value() == null) {
                alert("Name Feild Cannot be Empty");
            } else {
               player.name=this.nameInput.value();
               playerCount+=1;
               player.index=playerCount;
                this.greeting('Hello '+ player.name);
            }
        })
    }
};