describe('Tests for Create Election', function() {
    describe('Election', function() {
        var theElection
		
        beforeEach(function() {
            theElection = new Election(2020)
        })

        describe('test_addElection_property', function() {
            it('should have a property called year', function() {
             expect(theElection.hasOwnProperty('year')).to.be.true
            })
        })

        describe('test_addElection_property', function() {
            it('year should be 2020', function() {
                expect(theElection.year).to.equal(2020)
            })
        })
        describe('test_addElection_property', function() {
            it('year should be a number', function() {
                expect(typeof theElection.year).to.equal('number')
            })
        })


    })
})

