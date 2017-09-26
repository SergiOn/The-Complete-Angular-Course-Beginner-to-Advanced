export class Point {

    constructor(private x?: number, private y?: number) {
    }

    getX() {
        return this.x;
    }

    get X() {
        return this.x;
    }

    setX(value: number) {
        this.x = value;
    }

    set X(value: number) {
        this.x = value;
    }

    draw() {
        console.log('X:', this.x, 'Y:', this.y);
    }
}
