var jwt = require('jsonwebtoken');
const isAuth = async (req, res, next) => {
	let {token } = req.cookies;
	if(token){
		try {
			await jwt.verify(token,'91eb159c-a766-48c3-b143-849170dbceb8');
			req.session.isAuth = true
		} catch (error) {
			req.session.isAuth = true
		}
	}

	if (req.session.isAuth) {
		next();
	} else {
		// req.session.prev_auth_url = req.originalUrl;
		if(/^[^.]*$/.test(req.originalUrl)){
			req.session.prev_auth_url = req.originalUrl;
		}
		res.redirect("/login");
	}
};

module.exports = () => isAuth;
