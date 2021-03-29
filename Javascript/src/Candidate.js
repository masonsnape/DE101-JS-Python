class Candidate {
  constructor (newName, theElectorate) {
    this.name = newName
    this.myElectorate = theElectorate
  } 
    toTableRow () {
    let result = `<tr><td  colspan="2">${this.name} </td></tr>`
    return result
  }

}
  