const express = require('express');
const router = express.Router();

let index = 0;
router.get('/api/setIndex', (req, res) => {
	if (req.query.index) {
		index = req.query.index;
	}
	res.json(index);
});

module.exports = router;