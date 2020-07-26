const express = require('express');
const router = express.Router();

const { ensureAuth } = require('../middleware/auth');

const Story = require('../model/story');

/** @desc Add page
 *  @route GET /stories/add
 */ router.get('/add', ensureAuth, (req, res) => res.render('stories/add'));

/** @desc Get all story
 *  @route GET /stories
 */ router.get('/', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ status: 'Public '})
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean();

    res.render('stories/index', {
      stories,
    });
  } catch (e) {
    if (e) new Error(e), res.render('assets/500');
  }
});

module.exports = router;