class Centaur {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.activities = 0
    }

    shoot() {
        if (this.layingDown == true) {
            return 'NO!'
        }
        this.activities += 1
        if (this.cranky == true) {
            return 'NO!'
        }
        if (this.activities > 2) {
            this.cranky = true
        }
        return 'Twang!!!'
    }

    run() {
        if (this.layingDown == true) {
            return 'NO!'
        }
        this.activities += 1
        if (this.activities > 2) {
            this.cranky = true
        }
        return 'Clop clop clop clop!!!'
    }

    sleep() {
        if (this.standing == true) {
            return 'NO!'
        } else {
            this.cranky = false
            return 'ZZZZ'
        }
    }

    layDown() {
        this.standing = false
        this.layingDown = true
    }

    standUp() {
        this.standing = true
        this.layingDown = false
    }

    drinkPotion() {
        if (this.standing == true) {
            this.cranky = !this.cranky
        } else {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports = Centaur