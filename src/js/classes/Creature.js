import Element from './Element.js'

export default class Creature extends Element {
    constructor(ctx, x = 10, y = 10) {
        super(ctx, x = 10, y = 10);


    }

    randomMovement() {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                this.position.x++;
                this.position.y++;
                break;
            case 1:
                this.position.x++;
                this.position.y--;
                break;
            case 2:
                this.position.x--;
                this.position.y++;
                break;
            case 3:
                this.position.x--;
                this.position.y--;
                break;

            default:
                break;
        }
    }

    arrowMove() {
        document.addEventListener("keydown", (event) => {

            switch (event.key) {
                case "ArrowUp":
                    this.position.x;
                    this.position.y--;
                    break;
                case "ArrowDown":
                    this.position.x;
                    this.position.y++;

                    break;
                case "ArrowLeft":
                    this.position.x--;
                    this.position.y;

                    break;
                case "ArrowRight":
                    this.position.x++;
                    this.position.y;


                    break;
                default:
                    break;
            }
        });
    }







}