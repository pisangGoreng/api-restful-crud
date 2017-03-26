var express = require('express');
var router = express.Router();
var methods = require('../helper/memo.js')

router.get('/', methods.show);
router.post('/', methods.add);
router.put('/:memoId', methods.update);
router.delete('/:memoId', methods.remove);

module.exports = router;
