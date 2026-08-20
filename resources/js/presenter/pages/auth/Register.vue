<script setup lang="ts">
import { useRegisterForm } from '@/presenter/forms/registerForm';
import ThemeToggler from '@/presenter/layouts/app/header/ThemeToggler.vue';
import { loginPage } from '@/routes';
import { Link } from '@inertiajs/vue3';

const { submit, form } = useRegisterForm()
</script>

<template>
    <div class="flex items-center justify-center relative w-full mb-4">
        <div class="text-primary text-center font-semibold absolute left-0">
            NoQ
        </div>

        <div class="text-xl font-bold">Register</div>

        <div class="absolute right-0 scale-80">
            <ThemeToggler />
        </div>
    </div>

    <form @submit.prevent="submit" class="w-full flex flex-col gap-2">
        <v-text-field :error-messages="form.errors.name" v-model="form.name" density="comfortable" class="w-full"
            placeholder="Name"></v-text-field>

        <v-text-field :error-messages="form.errors.email" v-model="form.email" density="comfortable" class="w-full"
            placeholder="Email"></v-text-field>

        <v-text-field :error-messages="form.errors.password" v-model="form.password" density="comfortable"
            class="w-full" placeholder="Password"></v-text-field>

        <v-btn type="submit" :disabled="form.processing" variant="flat" color="primary"
            class="text-white font-bold!">Register</v-btn>
    </form>

    <div class="flex items-center justify-end gap-2 text-[13px]">
        <span>You already have an account?</span>
        <Link :href="loginPage()" class="text-primary underline underline-offset-2">Login</Link>
    </div>
</template>