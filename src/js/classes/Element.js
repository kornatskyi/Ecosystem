export default class Element {
    constructor(ctx, x = 10, y = 10) {

        this.position = {
            x: x = 10,
            y: y = 10
        }
        this.width = 10;
        this.height = 10;
        this.color = 'rgba(0, 0, 255)';
        this.ctx = ctx;
        this.leftCoordinates = [];
        this.rightCoordinates = [];
        this.bottomCoordinates = [];
        this.topCoordinates = [];

        this.visionRange =1;
        this.visionCoordinates = [...this.getNLineOfOuterTopCoordinates(this.visionRange), ...this.getNLineOfOuterRightCoordinates(this.visionRange), ...this.getNLineOfOuterLeftCoordinates(this.visionRange), ...this.getNLineOfOuterBottomCoordinates(this.visionRange)];
    }

    draw() {

        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.stroke();
    }


    getNLineOfOuterTopCoordinates(n) {
        for (let i = 0; i < ((this.width + 2 * n) + 1); i++) {
            this.topCoordinates.push({
                x: this.position.x + i - n,
                y: this.position.y - n - 1
            })
        }
        n--;
        if (n >= 0) {
            this.getNLineOfOuterTopCoordinates(n)
        }
        return this.topCoordinates;
    }
    getNLineOfOuterRightCoordinates(n) {
        for (let i = 0; i < ((this.height + 2 * n) + 1); i++) {
            this.rightCoordinates.push({
                x: this.position.x + n + this.width,
                y: this.position.y + i - n
            })
        }
        n--;
        if (n >= 0) {
            this.getNLineOfOuterRightCoordinates(n)
        }
        return this.rightCoordinates;
    }
    getNLineOfOuterLeftCoordinates(n) {
        for (let i = -1; i < (this.height + 2 * n); i++) {
            this.leftCoordinates.push({
                x: this.position.x - n - 1,
                y: this.position.y + i - n
            })
        }
        n--;
        if (n >= 0) {
            this.getNLineOfOuterLeftCoordinates(n)
        }
        return this.leftCoordinates;
    }
    getNLineOfOuterBottomCoordinates(n) {
        for (let i = -1; i < (this.width + 2 * n); i++) {
            this.bottomCoordinates.push({
                x: this.position.x + i - n,
                y: this.position.y + this.height + n
            })
        }
        n--;
        if (n >= 0) {
            this.getNLineOfOuterBottomCoordinates(n)
        }
        return this.bottomCoordinates;
    }


    scanAround() {
        this.visionCoordinates.forEach(vc => {
            let x = [];
            if (this.ctx.getImageData(vc.x, vc.y, 1, 1).data.every(d => {
                if (d === 0) {
                    return d === 0
                } else {
                    x.push(this.ctx.getImageData(vc.x, vc.y, 1, 1).data)
                    return d === 0
                }

            })) {

            } else {
                // console.log(x[0] + " on the " + vc.x + " " + vc.y);
            }
        })
    }
}