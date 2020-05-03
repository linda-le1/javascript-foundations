class Werewolf {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.human = true
        this.wolf = false
        this.hungry = false
    }

    change() {
        this.human = !this.human
        this.wolf = !this.wolf
        if (this.wolf == true) {
            this.hungry = true
        } else {
            this.hungry = false
        }
    }

    eat(victim) {
        if (this.wolf == true) {
            this.human = true
            this.hungry = false
            victim.alive = false
        } else {
            return false
        }
    }

}

module.exports = Werewolf