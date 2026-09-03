import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

export default defineConfigWithVueTs(
    pluginVue.configs['flat/recommended'],

    vueTsConfigs.recommended,

    {
        ignores: [
            'vendor/**',
            'public/**',
            'bootstrap/ssr/**',
            'node_modules/**',
        ],
    },

    {
        files: ['resources/js/**/*.{ts,vue}'],
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    }
);