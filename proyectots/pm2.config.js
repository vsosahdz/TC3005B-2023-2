module.exports = {
    apps: [{
        name: "backend",
        script: "dist/index.js",
        node_args: "-r dotenv/config"
    }]
}