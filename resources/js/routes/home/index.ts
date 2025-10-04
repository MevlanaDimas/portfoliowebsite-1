import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::message
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
export const message = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: message.url(options),
    method: 'post',
})

message.definition = {
    methods: ["post"],
    url: '/',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HomeController::message
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
message.url = (options?: RouteQueryOptions) => {
    return message.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::message
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
message.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: message.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HomeController::message
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
    const messageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: message.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HomeController::message
 * @see app/Http/Controllers/HomeController.php:66
 * @route '/'
 */
        messageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: message.url(options),
            method: 'post',
        })
    
    message.form = messageForm
const home = {
    message: Object.assign(message, message),
}

export default home