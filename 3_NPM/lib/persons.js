let person1 = { first: 'Brendan', last: 'Eich'};

let person2 = { first: 'Bill', last: 'Gates' };

module.exports = {

    person1: person1,

    person2: person2,

    getRandomPerson: function() {
        return Math.random < 0.5 ? person1 : person2
    }
};
