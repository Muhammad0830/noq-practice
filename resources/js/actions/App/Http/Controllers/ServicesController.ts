import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
const getAllbbee0fd5659320176905772cd001770a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

getAllbbee0fd5659320176905772cd001770a.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.url = (options?: RouteQueryOptions) => {
    return getAllbbee0fd5659320176905772cd001770a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAllbbee0fd5659320176905772cd001770a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
const getAll6d96482a32cf6844d6b355df28d819ff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll6d96482a32cf6844d6b355df28d819ff.url(options),
    method: 'get',
})

getAll6d96482a32cf6844d6b355df28d819ff.definition = {
    methods: ["get","head"],
    url: '/favourites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
getAll6d96482a32cf6844d6b355df28d819ff.url = (options?: RouteQueryOptions) => {
    return getAll6d96482a32cf6844d6b355df28d819ff.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
getAll6d96482a32cf6844d6b355df28d819ff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll6d96482a32cf6844d6b355df28d819ff.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:12
* @route '/favourites'
*/
getAll6d96482a32cf6844d6b355df28d819ff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAll6d96482a32cf6844d6b355df28d819ff.url(options),
    method: 'head',
})

/**
* Multiple routes resolve to \App\Http\Controllers\ServicesController::getAll, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `getAll['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const getAll = {
    '/services': getAllbbee0fd5659320176905772cd001770a,
    '/favourites': getAll6d96482a32cf6844d6b355df28d819ff,
}

const ServicesController = { getAll }

export default ServicesController