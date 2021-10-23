const Contact = require('./Contact');

class User {
    constructor(user) {
        this._id = user.phoneno;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.contacts = [];
        for (let contact of user.contacts) {
            this.contacts.push(new Contact(contact.phoneno, contact.name, contact.email, contact.relationship));
        }
    }
}

module.exports = User