import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
export const viewHome = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewHome.url(options),
    method: 'get',
})

viewHome.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
viewHome.url = (options?: RouteQueryOptions) => {
    return viewHome.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
viewHome.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewHome.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
viewHome.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewHome.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
    const viewHomeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: viewHome.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
        viewHomeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: viewHome.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::viewHome
 * @see app/Http/Controllers/HomeController.php:25
 * @route '/'
 */
        viewHomeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: viewHome.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    viewHome.form = viewHomeForm
/**
* @see \App\Http\Controllers\HomeController::sendMessage
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
export const sendMessage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HomeController::sendMessage
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
sendMessage.url = (options?: RouteQueryOptions) => {
    return sendMessage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::sendMessage
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
sendMessage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HomeController::sendMessage
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
    const sendMessageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendMessage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HomeController::sendMessage
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
        sendMessageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendMessage.url(options),
            method: 'post',
        })
    
    sendMessage.form = sendMessageForm
const HomeController = { viewHome, sendMessage }

export default HomeController