const express = require('express');
const router = express.Router();
const firebase = require('../connections/firebase_connect');
const firebaseDb = require('../connections/firebase_admin_connect');
const fireAuth = firebase.auth();

router.get('/', (req, res) => {
    res.render('login', { title: '登入' });
})
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.passwd;
    fireAuth.signInWithEmailAndPassword(email, password)
        .then(user => {
            req.session.uid = user.uid;
            res.redirect('/');
        })
        .catch(error => {
            res.redirect('/');
        })
})
module.exports = router;