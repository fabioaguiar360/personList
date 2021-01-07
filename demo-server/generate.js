module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        people: _.times(100, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                gender: faker.name.gender(),
                userName: faker.internet.userName(),
                password: faker.internet.password(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                city: faker.address.city(),
                street: faker.address.streetName(),
                number: faker.random.number(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),
                avatar: faker.internet.avatar()
            }
        })
    }
}