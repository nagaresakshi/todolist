/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // eslint-disable-next-line no-unused-vars
            backgroundImage: (_) => ({
                'custom-background': "url('https://catinean.com/content/images/size/w1920/2016/03/time-wallpaper-23.jpg')"
            })
        },
    },
    plugins: [],
}