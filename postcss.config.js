module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // ...(NODE_ENV === 'production' ? { cssnano: {} } : {})
        // npx tailwindcss -o build.css --minify
    }
}