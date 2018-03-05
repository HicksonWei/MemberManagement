const express = require('express');
const router = express.Router();
const firebaseDb = require('../connections/firebase_admin_connect');

router.get('/', (req, res) => {
	firebaseDb.ref('list').once('value', snapshot => {
    const auth = req.session.uid;
    res.render('index', {
      title: '留言板',
      auth,
      errors: req.flash('errors'),
      list: snapshot.val(),
    });
	});
});
/* GET home page. */
module.exports = router;