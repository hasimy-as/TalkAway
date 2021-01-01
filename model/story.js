const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	body: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: 'Public',
		enum: ['Public', 'Private'],
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

let Story = mongoose.model('Story', StorySchema);
module.exports = Story;
