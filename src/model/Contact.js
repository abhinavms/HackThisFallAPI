class Contact {
    constructor(phoneno, name, email, relationship) {
        this._id = phoneno;
        this.name = name;
        this.email = email;
        this.relationship = relationship;
    } 
}

module.exports = Contact