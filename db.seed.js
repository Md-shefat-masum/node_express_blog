const userSeeder = require("./app/models/seeders/user.seeder");
const blogSeeder = require("./app/models/seeders/blog.seeder");
const categorySeeder = require("./app/models/seeders/category.seeder");
const translatorSeeder = require("./app/models/seeders/translator.seeder");
const writerSeeder = require("./app/models/seeders/writer.seeder");

const seed = async () =>{
    await userSeeder();
    await categorySeeder();
    await writerSeeder();
    await translatorSeeder();
    await blogSeeder();
}

seed();