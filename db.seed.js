const userSeeder = require("./app/models/seeders/user.seeder");
const blogSeeder = require("./app/models/seeders/blog.seeder");
const categorySeeder = require("./app/models/seeders/category.seeder");
const translatorSeeder = require("./app/models/seeders/translator.seeder");
const writerSeeder = require("./app/models/seeders/writer.seeder");
const { db_url } = require("./configs/db.config");
const { default: mongoose } = require("mongoose");

const seed = async () => {
    mongoose.connect(db_url)
        .then(async () => {
            await userSeeder();
            await categorySeeder();
            await writerSeeder();
            await translatorSeeder();
            await blogSeeder();
            console.log('\n seed end');
        })
}

seed();