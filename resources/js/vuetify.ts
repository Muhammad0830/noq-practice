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
                colors: {
                    primary: colors.light.primary,
                    secondary: colors.light.secondary,
                    background: colors.light.background,
                },
            },

            dark: {
                colors: {
                    primary: colors.dark.primary,
                    secondary: colors.dark.secondary,
                    background: colors.dark.background,
                },
            },
        },
    },
})