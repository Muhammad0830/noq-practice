import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/todo'
*/
export const todo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: todo.url(options),
    method: 'get',
})

todo.definition = {
    methods: ["get","head"],
    url: '/todo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/todo'
*/
todo.url = (options?: RouteQueryOptions) => {
    return todo.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/todo'
*/
todo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: todo.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/todo'
*/
todo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: todo.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::createShopPage
* @see app/Http/Controllers/ShopsController.php:31
* @route '/create-shop'
*/
export const createShopPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createShopPage.url(options),
    method: 'get',
})

createShopPage.definition = {
    methods: ["get","head"],
    url: '/create-shop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::createShopPage
* @see app/Http/Controllers/ShopsController.php:31
* @route '/create-shop'
*/
createShopPage.url = (options?: RouteQueryOptions) => {
    return createShopPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::createShopPage
* @see app/Http/Controllers/ShopsController.php:31
* @route '/create-shop'
*/
createShopPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createShopPage.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::createShopPage
* @see app/Http/Controllers/ShopsController.php:31
* @route '/create-shop'
*/
createShopPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createShopPage.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::shopsList
* @see app/Http/Controllers/ShopsController.php:13
* @route '/shops'
*/
export const shopsList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopsList.url(options),
    method: 'get',
})

shopsList.definition = {
    methods: ["get","head"],
    url: '/shops',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::shopsList
* @see app/Http/Controllers/ShopsController.php:13
* @route '/shops'
*/
shopsList.url = (options?: RouteQueryOptions) => {
    return shopsList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::shopsList
* @see app/Http/Controllers/ShopsController.php:13
* @route '/shops'
*/
shopsList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopsList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::shopsList
* @see app/Http/Controllers/ShopsController.php:13
* @route '/shops'
*/
shopsList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shopsList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::shopView
* @see app/Http/Controllers/ShopsController.php:22
* @route '/shops/{shop}/view'
*/
export const shopView = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopView.url(args, options),
    method: 'get',
})

shopView.definition = {
    methods: ["get","head"],
    url: '/shops/{shop}/view',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::shopView
* @see app/Http/Controllers/ShopsController.php:22
* @route '/shops/{shop}/view'
*/
shopView.url = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shop: args }
    }

    if (Array.isArray(args)) {
        args = {
            shop: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: args.shop,
    }

    return shopView.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::shopView
* @see app/Http/Controllers/ShopsController.php:22
* @route '/shops/{shop}/view'
*/
shopView.get = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopView.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::shopView
* @see app/Http/Controllers/ShopsController.php:22
* @route '/shops/{shop}/view'
*/
shopView.head = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shopView.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::servcies
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
export const servcies = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servcies.url(options),
    method: 'get',
})

servcies.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::servcies
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
servcies.url = (options?: RouteQueryOptions) => {
    return servcies.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::servcies
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
servcies.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servcies.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::servcies
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
servcies.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: servcies.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::favourites
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
export const favourites = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: favourites.url(options),
    method: 'get',
})

favourites.definition = {
    methods: ["get","head"],
    url: '/favourites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::favourites
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
favourites.url = (options?: RouteQueryOptions) => {
    return favourites.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::favourites
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
favourites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: favourites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::favourites
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
favourites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: favourites.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::createShop
* @see app/Http/Controllers/ShopsController.php:42
* @route '/create-shop'
*/
export const createShop = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createShop.url(options),
    method: 'post',
})

createShop.definition = {
    methods: ["post"],
    url: '/create-shop',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShopsController::createShop
* @see app/Http/Controllers/ShopsController.php:42
* @route '/create-shop'
*/
createShop.url = (options?: RouteQueryOptions) => {
    return createShop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::createShop
* @see app/Http/Controllers/ShopsController.php:42
* @route '/create-shop'
*/
createShop.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createShop.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:61
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:61
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:61
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/login'
*/
export const loginPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginPage.url(options),
    method: 'get',
})

loginPage.definition = {
    methods: ["get","head"],
    url: '/auth/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/login'
*/
loginPage.url = (options?: RouteQueryOptions) => {
    return loginPage.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/login'
*/
loginPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginPage.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/login'
*/
loginPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loginPage.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/register'
*/
export const registerPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerPage.url(options),
    method: 'get',
})

registerPage.definition = {
    methods: ["get","head"],
    url: '/auth/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/register'
*/
registerPage.url = (options?: RouteQueryOptions) => {
    return registerPage.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/register'
*/
registerPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerPage.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/auth/register'
*/
registerPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registerPage.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:20
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:20
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:20
* @route '/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:38
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:38
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:38
* @route '/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

