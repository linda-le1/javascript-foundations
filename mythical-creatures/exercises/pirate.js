class Pirate {
    constructor(name, job = "Scallywag"){
        this.name = name
        this.job = job
        this.cursed = false
        this.acts = 0
        this.booty = 0
    }

    commitHeinousAct() {
        this.acts += 1
        if (this.acts === 3) {
            this.cursed = true
        }
    }

    robShip() {
        this.booty += 100
        return "YAARRR!"
    }
}

module.exports = Pirate