import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:11
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
* @see app/Http/Controllers/ShopsController.php:11
* @route '/shops'
*/
getAll.url = (options?: RouteQueryOptions) => {
    return getAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:11
* @route '/shops'
*/
getAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopsController::getAll
* @see app/Http/Controllers/ShopsController.php:11
* @route '/shops'
*/
getAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAll.url(options),
    method: 'head',
})

const ShopsController = { getAll }

export default ShopsController