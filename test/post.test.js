var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("POST /api/post", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("shouldnt be favorited", function (done) {
        // Create an object to send to the endpoint
        var reqBody = {
            id: 1,
            title: "Quadrantids Meteor Shower",
            date: "January 3, 4",
            description: "Example description",
            favorited: 0,
            createdAt: "2019-05-11",
            updatedAt: "2019-05-11"
        };

        // POST the request body to the server
        request
            .post("/api/post")
            .send(reqBody)
            .end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("object")
                    .that.includes(reqBody);

                // The `done` function is used to end any asynchronous tests
                done();
            });
    });
});
