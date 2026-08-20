import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from '../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:12
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
* @see app/Http/Controllers/ShopsController.php:12
* @route '/shops'
*/
getAll.url = (options?: RouteQueryOptions) => {
    return getAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:12
* @route '/shops'
*/
getAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:12
* @route '/shops'
*/
getAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAll.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:21
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
* @see app/Http/Controllers/ShopsController.php:21
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
* @see app/Http/Controllers/ShopsController.php:21
* @route '/shops/{shop}/view'
*/
getOne.get = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getOne.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::getOne
* @see app/Http/Controllers/ShopsController.php:21
* @route '/shops/{shop}/view'
*/
getOne.head = (args: { shop: string | number } | [shop: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getOne.url(args, options),
    method: 'head',
})

const ShopsController = { getAll, getOne }

export default ShopsController