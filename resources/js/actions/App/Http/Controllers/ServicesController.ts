import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
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
* @see app/Http/Controllers/ServicesController.php:20
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.url = (options?: RouteQueryOptions) => {
    return getAllbbee0fd5659320176905772cd001770a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
* @route '/services'
*/
getAllbbee0fd5659320176905772cd001770a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAllbbee0fd5659320176905772cd001770a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
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
* @see app/Http/Controllers/ServicesController.php:20
* @route '/favourites'
*/
getAll6d96482a32cf6844d6b355df28d819ff.url = (options?: RouteQueryOptions) => {
    return getAll6d96482a32cf6844d6b355df28d819ff.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
* @route '/favourites'
*/
getAll6d96482a32cf6844d6b355df28d819ff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAll6d96482a32cf6844d6b355df28d819ff.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::getAll
* @see app/Http/Controllers/ServicesController.php:20
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

/**
* @see \App\Http\Controllers\ServicesController::list
* @see app/Http/Controllers/ServicesController.php:54
* @route '/admin/shop/{shop}/service/list'
*/
export const list = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(args, options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/admin/shop/{shop}/service/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::list
* @see app/Http/Controllers/ServicesController.php:54
* @route '/admin/shop/{shop}/service/list'
*/
list.url = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shop: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shop: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shop: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: typeof args.shop === 'object'
        ? args.shop.id
        : args.shop,
    }

    return list.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::list
* @see app/Http/Controllers/ServicesController.php:54
* @route '/admin/shop/{shop}/service/list'
*/
list.get = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::list
* @see app/Http/Controllers/ServicesController.php:54
* @route '/admin/shop/{shop}/service/list'
*/
list.head = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::createServicesPage
* @see app/Http/Controllers/ServicesController.php:29
* @route '/admin/shop/{shop}/service/create'
*/
export const createServicesPage = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createServicesPage.url(args, options),
    method: 'get',
})

createServicesPage.definition = {
    methods: ["get","head"],
    url: '/admin/shop/{shop}/service/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::createServicesPage
* @see app/Http/Controllers/ServicesController.php:29
* @route '/admin/shop/{shop}/service/create'
*/
createServicesPage.url = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shop: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shop: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shop: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: typeof args.shop === 'object'
        ? args.shop.id
        : args.shop,
    }

    return createServicesPage.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::createServicesPage
* @see app/Http/Controllers/ServicesController.php:29
* @route '/admin/shop/{shop}/service/create'
*/
createServicesPage.get = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createServicesPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::createServicesPage
* @see app/Http/Controllers/ServicesController.php:29
* @route '/admin/shop/{shop}/service/create'
*/
createServicesPage.head = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createServicesPage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::editPage
* @see app/Http/Controllers/ServicesController.php:64
* @route '/admin/shop/{shop}/service/{service}/edit'
*/
export const editPage = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editPage.url(args, options),
    method: 'get',
})

editPage.definition = {
    methods: ["get","head"],
    url: '/admin/shop/{shop}/service/{service}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::editPage
* @see app/Http/Controllers/ServicesController.php:64
* @route '/admin/shop/{shop}/service/{service}/edit'
*/
editPage.url = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            shop: args[0],
            service: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: args.shop,
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return editPage.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::editPage
* @see app/Http/Controllers/ServicesController.php:64
* @route '/admin/shop/{shop}/service/{service}/edit'
*/
editPage.get = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::editPage
* @see app/Http/Controllers/ServicesController.php:64
* @route '/admin/shop/{shop}/service/{service}/edit'
*/
editPage.head = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editPage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::toggleActive
* @see app/Http/Controllers/ServicesController.php:71
* @route '/admin/shop/{shop}/service/{service}/edit/toggleActive'
*/
export const toggleActive = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/admin/shop/{shop}/service/{service}/edit/toggleActive',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ServicesController::toggleActive
* @see app/Http/Controllers/ServicesController.php:71
* @route '/admin/shop/{shop}/service/{service}/edit/toggleActive'
*/
toggleActive.url = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            shop: args[0],
            service: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: args.shop,
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return toggleActive.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::toggleActive
* @see app/Http/Controllers/ServicesController.php:71
* @route '/admin/shop/{shop}/service/{service}/edit/toggleActive'
*/
toggleActive.put = (args: { shop: string | number, service: number | { id: number } } | [shop: string | number, service: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ServicesController::createServices
* @see app/Http/Controllers/ServicesController.php:36
* @route '/admin/shop/{shop}/service/create'
*/
export const createServices = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createServices.url(args, options),
    method: 'post',
})

createServices.definition = {
    methods: ["post"],
    url: '/admin/shop/{shop}/service/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServicesController::createServices
* @see app/Http/Controllers/ServicesController.php:36
* @route '/admin/shop/{shop}/service/create'
*/
createServices.url = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shop: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shop: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shop: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: typeof args.shop === 'object'
        ? args.shop.id
        : args.shop,
    }

    return createServices.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::createServices
* @see app/Http/Controllers/ServicesController.php:36
* @route '/admin/shop/{shop}/service/create'
*/
createServices.post = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createServices.url(args, options),
    method: 'post',
})

const ServicesController = { getAll, list, createServicesPage, editPage, toggleActive, createServices }

export default ServicesController