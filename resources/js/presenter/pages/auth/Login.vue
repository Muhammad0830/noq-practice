<script setup lang="ts">
import PasswordInput from '@/presenter/components/shared/PasswordInput.vue';
import { useLoginForm } from '@/presenter/forms/loginForm';
import ThemeToggler from '@/presenter/layouts/shared/ThemeToggler.vue';
import { registerPage } from '@/routes';
import { Link } from '@inertiajs/vue3';

const { form, submit } = useLoginForm();
</script>

<template>
    <div class="flex items-center justify-center relative w-full mb-4">
        <!-- logo -->
        <div class="text-primary text-center font-semibold absolute left-0">
            NoQ
        </div>

        <div class="text-xl font-bold">Login</div>

        <div class="absolute right-0 scale-80">
            <ThemeToggler />
        </div>
    </div>

    <form @submit.prevent="submit" class="w-full flex flex-col gap-2">
        <v-text-field type="email" :error-messages="form.errors.email" v-model="form.email" density="comfortable"
            class="w-full" placeholder="Email"></v-text-field>

        <PasswordInput v-model="form.password" :password-error="form.errors.password" />

        <v-btn type="submit" :disabled="form.processing" variant="flat" color="primary"
            class="text-white font-bold!">Login</v-btn>
    </form>

    <div class="flex items-center justify-end gap-2 text-[13px]">
        <span>You do not have an account?</span>
        <Link :href="registerPage()" class="text-primary underline underline-offset-2">Register</Link>
    </div>
</template>