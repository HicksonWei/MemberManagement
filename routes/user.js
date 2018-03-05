const express = require('express');
const router = express.Router();
const firebaseDb = require('../connections/firebase_admin_connect');

router.get('/', (req, res) => {
    firebaseDb.ref(`user/${req.session.uid}`).once('value', snapshot => {
        res.render('user', { title: '會員專區', email: snapshot.val().email, nickname: snapshot.val().nickname});
    });
    
})
module.exports = router; 