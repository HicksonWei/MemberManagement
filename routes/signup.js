const express = require('express');
const router = express.Router();
const firebase = require('../connections/firebase_connect');
const firebaseDb = require('../connections/firebase_admin_connect');
const fireAuth = firebase.auth();
router.get('/', (req, res) => {
    res.render('signup', { title: '註冊', error: req.flash('error')});
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.passwd;
    const nickname = req.body.nickname;
    fireAuth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            // console.log(user);
            const saveUser = {
                'email': email,
                'nickname': nickname,
                'uid': user.uid
            };//authentication 不足之處(記錄欄位)，用database補足
            firebaseDb.ref(`/user/${user.uid}`).set(saveUser);
            res.redirect('/signup/success');
        })
        .catch(error =>  {
            // console.log(error);
            const errorMessage = error.message;
            req.flash('error', errorMessage);
            res.redirect('/signup');
        });
});

router.get('/success', (req, res) => {
    res.render('success',{
        title:'註冊成功'
    });
});
module.exports = router;