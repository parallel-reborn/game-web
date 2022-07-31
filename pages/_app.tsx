import "../styles/globals.css"
import {ThemeProvider} from "@mui/material"
import {theme} from "../themes/default.theme"
import createEmotionCache from "../utils/createEmotionCache"
import {CacheProvider, EmotionCache} from "@emotion/react"
import type {AppProps} from 'next/app'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache: EmotionCache
}

function MyApp({
                   Component,
                   pageProps,
                   emotionCache = clientSideEmotionCache
               }: MyAppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp