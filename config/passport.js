const Strategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user');

module.exports = (passport) => {
	passport.use(
		new Strategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: '/auth/google/callback',
			},
			async (accessToken, refreshToken, profile, done) => {
				const newUser = {
					googleId: profile.id,
					displayName: profile.displayName,
					firstName: profile.name.givenName,
					firstName: profile.name.familyName,
					image: profile.photos[0].value,
				};

				try {
					let user = await User.findOne({ googleId: profile.id });

					if (user) {
						done(null, user);
					} else {
						user = await User.create(newUser);
						done(null, user);
					}
				} catch (e) {
					if (e) throw new Error(e);
				}
			},
		),
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (e, user) => done(e, user));
	});
};
