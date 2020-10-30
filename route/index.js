const express = require('express');
const router = express.Router();

const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../model/story');

/** @desc Landing page 
 *  @route GET /
*/  router.get('/', ensureGuest, (req, res) => res.render('login'));


/** @desc Dashboard page 
 *  @route GET /dashboard
*/  router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render('dashboard', {
      name: req.user.firstName,
      stories
    }); 
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;