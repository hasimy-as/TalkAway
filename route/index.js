const express = require('express');
const router = express.Router();

const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../model/story');

/**
 * @description
 * Landing Page
 *
 * @route
 * GET /
 */

router.get('/', ensureGuest, (req, res) => res.render('login'));

/**
 * @description
 * Dashboard
 *
 * @route
 * GET /dashboard
 */

router.get('/dashboard', ensureAuth, async (req, res) => {
	try {
		const stories = await Story.find({ user: req.user.id }).lean();
		res.render('dashboard', {
			name: req.user.firstName,
			stories,
		});
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
