describe('Tests for Create Party', function() {
    describe('Party', function() {
        var theParty
		
        beforeEach(function() {
            theParty = new Party
        })

        describe('test_addParty_property', function() {
            it('should have a name property in party and alltheparties', function() {
                expect(theParty.hasOwnProperty('name')).to.be.true
            })
        })


         describe('test_addParty_property', function() {
            it('name should be the expected value', function() {
                expect(typeof theParty.name).to.be.a('string')
            })
        })

    })
})
