const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.session.uid = '';
  // req.session.destroy(); 兩者皆可
  res.redirect('/');
});

module.exports = router;