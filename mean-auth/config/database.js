module.exports = {
    "secret": "meanauth",
    "database": process.env.DATABASE_URL || "mongodb://localhost/mean-auth"
}