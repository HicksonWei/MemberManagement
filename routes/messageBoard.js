const express = require('express');
const router = express.Router();
const firebaseDb = require('../connections/firebase_admin_connect');

router.post('/', (req, res) => {
  req.checkBody('content', '內容不得為空值').notEmpty();
  const errors = req.validationErrors();
  // console.log(errors);
  if(errors){
    req.flash('errors', errors[0].msg);
    res.redirect('/');
  }else{
    firebaseDb.ref(`user/${req.session.uid}`).once('value', snapshot => {
      const nickname = snapshot.val().nickname;
      const ref = firebaseDb.ref('list').push();
      const listContent = {
        nickname: nickname,
        content: req.body.content,
      };
      ref.set(listContent)
        .then(() => {
          res.redirect('/');
        });
    });
  }
});
module.exports = router;