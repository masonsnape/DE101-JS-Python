class Party {
    constructor(newName) {
        this.name = newName 
    }

    toString() {
        let result = `${this.name}`
        return result
    }

    /*
    countElectorate (theElectorate) {
    // some code goes here!
    }


    setVotePercent (newVotePercent) {
    // someCode goes here!
    }
    */

  

    toTableRow() {
        let result = '<tr>'
        result += `<td>${this.name}</td>`
        result += '</tr>'
        return result
    }
   
}