class Wizard {
    constructor(data) {
        this.name = data["name"]
        if ("bearded" in data) {
            this.bearded = data["bearded"]
        } else {
            this.bearded = true
        }
        this.isRested = true
        this.spellCount = 0
    }

    incantation(spell) {
        return spell.toUpperCase()
    }

    cast() {
        this.spellCount += 1
        if (this.spellCount == 3) {
            this.isRested = false
            return 'I SHALL NOT CAST'
        } else {
            return "MAGIC BULLET"
        }
    }
}

module.exports = Wizard