const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

const TEST = process.env.TEST_URI;
describe('User', () => {
    before((done) => {
        mongoose.connect(TEST, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => done())
        .catch((err) => done(err));
    });

    after((done) => {
        mongoose.connection.close()
        .then(() => done())
        .catch((err) => done(err));
    });

    it('should be invalid if firstName is missing', (done) => {
        const user = new User({
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        faculty: 'Science',
        department: mongoose.Types.ObjectId(),
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
        });
        user.validate((err) => {
        expect(err.errors.firstName).to.exist;
        done();
        });
    });

    it('should be invalid if lastName is missing', (done) => {
        const user = new User({
        firstName: 'John',
        email: 'john.doe@example.com',
        password: 'password',
        faculty: 'Science',
        department: mongoose.Types.ObjectId(),
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
    });
    user.validate((err) => {
        expect(err.errors.lastName).to.exist;
        done();
    });
    });

    it('should be invalid if email is missing', (done) => {
        const user = new User({
        firstName: 'John',
        lastName: 'Doe',
        password: 'password',
        faculty: 'Science',
        department: mongoose.Types.ObjectId(),
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
        });
        user.validate((err) => {
        expect(err.errors.email).to.exist;
        done();
        });
    });

    it('should be invalid if password is missing', (done) => {
        const user = new User({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        faculty: 'Science',
        department: mongoose.Types.ObjectId(),
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
        });
        user.validate((err) => {
        expect(err.errors.password).to.exist;
        done();
        });
    });

    it('should be invalid if faculty is missing', (done) => {
        const user = new User({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        department: mongoose.Types.ObjectId(),
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
        });
        user.validate((err) => {
        expect(err.errors.faculty).to.exist;
        done();
        });
    });

    it('should be invalid if department is missing for non-admin roles', (done) => {
        const user = new User({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        faculty: 'Science',
        role: 'student',
        courses: [mongoose.Types.ObjectId()]
        });
        user.validate((err) => {
        expect(err.errors.department).to.exist;
        done();
        });
    });

});
