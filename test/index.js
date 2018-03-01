var path = require('path');
var Nightmare = require('nightmare');
var should = require('chai').should();
var expect = require('chai').expect;

describe('Nightmare demo', function () {
    this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds

    var url = 'http://localhost:4200/list';

    describe('Todo list page', function () {

        it('should show headline when loaded', function (done) {
            new Nightmare()
                .goto(url)
                .evaluate(function () {
                    return document.querySelectorAll('app-root h1').length;
                })
                .run(function(err, result){
                    result.should.equal(1);
                    done();
                });
        });

        it('should show load tasks', function (done) {
            new Nightmare()
            .goto(url)
            .wait('.list-group')
            .evaluate(function () {
                var count = document.querySelectorAll('.list-group-item').length;
                return count;
            })
            .then(function (count) {
                expect(count).to.be.above(0);
                done();
            })
        });
        
    });
   
});

