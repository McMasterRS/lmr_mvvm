import {Inter} from "next/font/google";

const inter = Inter({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const themeOptions = {
    typography: {
        h1: {
            fontFamily: inter.style.fontFamily,
            fontSize: '25pt',
            fontWeight: 700,
        },
        h2: {
            fontFamily: inter.style.fontFamily,
            fontSize: '20pt',
            fontWeight: 400,
        },
        h3: {
            fontFamily: inter.style.fontFamily,
            fontSize: '15pt',
        },
        h4: {
            fontFamily: inter.style.fontFamily,
            fontSize: '10pt',
            fontWeight: 900,
        },
    },
}

export default themeOptions