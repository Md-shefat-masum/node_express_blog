const express = require("express");
const blogRoutes = require("./partials/blog.routes");
const emailRoutes = require("./partials/email.routes");
const userRoutes = require("./partials/user.routes");
const dashboardRoutes = require("./partials/dashboard.routes");
const websiteRoutes = require("./partials/website.routes");
const authRoutes = require("./partials/auth.routes");
const categoryRoutes = require("./partials/category.routes");
const router = express.Router();

router.use(websiteRoutes());

router.use(authRoutes());
router.use(dashboardRoutes());
router.use(blogRoutes());
router.use(emailRoutes());
router.use(userRoutes());
router.use(categoryRoutes());

module.exports = () => router;
