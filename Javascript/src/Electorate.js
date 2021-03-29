class Electorate {
    constructor(newName) {
        this.name = newName
    }

    toString() {
        let result = `${this.name}`
        return result
    }

    /*
    setParty (theParty) {
    // some code goes here!
    }
    */

    toTableRow() {
        let result = '<tr>'
        result += `<td>${this.name}</td>`
        result += '</tr>'
        return result
    }
}