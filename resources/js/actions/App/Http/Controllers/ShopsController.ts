import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShopsController::createPage
* @see app/Http/Controllers/ShopsController.php:34
* @route '/create-shop'
*/
export const createPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createPage.url(options),
    method: 'get',
})

createPage.definition = {
    methods: ["get","head"],
    url: '/create-shop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::createPage
* @see app/Http/Controllers/ShopsController.php:34
* @route '/create-shop'
*/
createPage.url = (options?: RouteQueryOptions) => {
    return createPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::createPage
* @see app/Http/Controllers/ShopsController.php:34
* @route '/create-shop'
*/
createPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createPage.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::createPage
* @see app/Http/Controllers/ShopsController.php:34
* @route '/create-shop'
*/
createPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createPage.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:16
* @route '/shops'
*/
export const getAll = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll.url(options),
    method: 'get',
})

getAll.definition = {
    methods: ["get","head"],
    url: '/shops',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:16
* @route '/shops'
*/
getAll.url = (options?: RouteQueryOptions) => {
    return getAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:16
* @route '/shops'
*/
getAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:16
* @route '/shops'
*/
getAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAll.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:25
* @route '/shops/{shop}/view'
*/
export const getOne = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getOne.url(args, options),
    method: 'get',
})

getOne.definition = {
    methods: ["get","head"],
    url: '/shops/{shop}/view',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:25
* @route '/shops/{shop}/view'
*/
getOne.url = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getOne.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:25
* @route '/shops/{shop}/view'
*/
getOne.get = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getOne.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:25
* @route '/shops/{shop}/view'
*/
getOne.head = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getOne.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::createShop
* @see app/Http/Controllers/ShopsController.php:45
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
* @see app/Http/Controllers/ShopsController.php:45
* @route '/create-shop'
*/
createShop.url = (options?: RouteQueryOptions) => {
    return createShop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::createShop
* @see app/Http/Controllers/ShopsController.php:45
* @route '/create-shop'
*/
createShop.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createShop.url(options),
    method: 'post',
})

const ShopsController = { createPage, getAll, getOne, createShop }

export default ShopsController