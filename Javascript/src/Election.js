class Election { // eslint-disable-line no-unused-vars
  constructor (newYear) {
      this.year = newYear
      this.allTheParties = []
      this.allTheElectorates = []
	  this.allTheCandidates = []
    }

    addParty(newName) {
        const newParty = new Party(newName)
        this.allTheParties.push(newParty)
        this.partyCount += 1
    }

    addElectorate(newName) {
        const newElectorate = new Electorate(newName)
        this.allTheElectorates.push(newElectorate)
        this.ElectorateCount += 1
    }

   
	findElectorate (targetElectorateName) {
		return this.allTheElectorates.find(Electorate => Electorate.name === targetElectorateName)
	}

	addCandidate(newName, aCandidateName) {
        const newCandidate = new Candidate(newName, theElectorate)
        this.allTheCandidates.push(newCandidate)
        this.candidateCount += 1
    }
	
   /*
    findParty (targetPartyName) {
        return this.allTheParties.find(aParty => aParty.name === targetPartyName)
    }


    setWinningParty (targetElectorateName, partyName ) {
    // find the electorate
    // find the party
    // tell the party about the electorate
    // tell the electorate about the party
    }


    setVotePercent(targetPartyName, newVotePercent){
    // find the party
    // pass the vote to the party
    }



	/*toString () {
		let result = `New Zealand Election ${this.year}`
			return result
	}

  /*
	sortElection () {
		this.Election.sort(function (a, b) {
			if (a.name < b.name) {
				return -1
			}
			if (a.name > b.name) {
				return 1
			} // a must be equal to b
			return 0
		} )
	} */


    toTable() {
        let result = `<table><tr><th colspan="3">THE NEW ZEALAND ELECTION ${this.year}</th></tr>`
		result += `<tr><th>PARTIES</th></tr>`
        for (const aParty of this.allTheParties) {
        result += aParty.toTableRow()
        }
		result += `<tr><th>ELECTORATES</th></tr>`
        for (const aElectorate of this.allTheElectorates) {
            result += aElectorate.toTableRow()
        }
        result += '</table>'
        return result
	}
}