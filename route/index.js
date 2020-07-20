const express = require('express');
const router = express.Router();

/** @desc Landing page 
 *  @route GET /
*/

router.get('/', (req, res) => res.end('<h1>Hello from server-side</h1>'));

module.exports = router;