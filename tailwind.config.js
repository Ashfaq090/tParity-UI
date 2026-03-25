/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-green': '#30360E',
                'olive': '#787F56',
                'clay-beige': '#E2D4B9',
            },
        },
    },
    plugins: [],
}
