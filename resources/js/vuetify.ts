import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { colors } from './theme/colors'

export const vuetify = createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: 'system',

        themes: {
            light: {
                colors: colors.light,
            },

            dark: {
                colors: colors.dark,
            },
        },
    },

    display: {
        mobileBreakpoint: 'md',
        thresholds: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
})