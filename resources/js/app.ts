import { createApp, h } from 'vue'
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import { vuetify } from './vuetify.js';
import AuthLayout from './presenter/layouts/AuthLayout.vue';
import AppLayout from './presenter/layouts/AppLayout.vue';

const pinia = createPinia();

const appName = import.meta.env.VITE_APP_NAME || 'NoQ Project'

createInertiaApp({
    title: (title) => (title ? `${appName} - ${title}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'Login':
                return null;
            case name === 'Test':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('admin/'):
                return [AppLayout];
            default:
                return AppLayout;
        }
    },
    resolve: (name) => {
        const pages = import.meta.glob('./presenter/pages/**/*.vue', { eager: true, import: 'default' })
        return pages[`./presenter/pages/${name}.vue`] as DefineComponent
    },
    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h('v-app', null, [
                h(App, props),
            ])
        })
            .use(plugin)
            .use(pinia)
            .use(vuetify)
            .mount(el)
    },
})
