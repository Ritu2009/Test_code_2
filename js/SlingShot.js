class Short {
    constructor(bodyA, point) {
        this.point = point;
        this.bodyA = bodyA;
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.str1 = Constraint.create(options);
    }

    attachTostr(body) {
        this.str1.bodyA = body;
    }

    removeFromStr() {
        this.str1.bodyA = null;
    }
};