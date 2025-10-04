import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AboutController::index
 * @see app/Http/Controllers/AboutController.php:83
 * @route '/about'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/about/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AboutController::create
 * @see app/Http/Controllers/AboutController.php:108
 * @route '/about/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\AboutController::store
 * @see app/Http/Controllers/AboutController.php:130
 * @route '/about'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/about',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AboutController::store
 * @see app/Http/Controllers/AboutController.php:130
 * @route '/about'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::store
 * @see app/Http/Controllers/AboutController.php:130
 * @route '/about'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AboutController::store
 * @see app/Http/Controllers/AboutController.php:130
 * @route '/about'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AboutController::store
 * @see app/Http/Controllers/AboutController.php:130
 * @route '/about'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
export const edit = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/about/{about}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
edit.url = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { about: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    about: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        about: args.about,
                }

    return edit.definition.url
            .replace('{about}', parsedArgs.about.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
edit.get = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
edit.head = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
    const editForm = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
        editForm.get = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AboutController::edit
 * @see app/Http/Controllers/AboutController.php:116
 * @route '/about/{about}/edit'
 */
        editForm.head = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
export const update = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/about/{about}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
update.url = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { about: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    about: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        about: args.about,
                }

    return update.definition.url
            .replace('{about}', parsedArgs.about.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
update.put = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
update.patch = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
    const updateForm = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
        updateForm.put = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AboutController::update
 * @see app/Http/Controllers/AboutController.php:164
 * @route '/about/{about}'
 */
        updateForm.patch = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\AboutController::destroy
 * @see app/Http/Controllers/AboutController.php:201
 * @route '/about/{about}'
 */
export const destroy = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/about/{about}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AboutController::destroy
 * @see app/Http/Controllers/AboutController.php:201
 * @route '/about/{about}'
 */
destroy.url = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { about: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    about: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        about: args.about,
                }

    return destroy.definition.url
            .replace('{about}', parsedArgs.about.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::destroy
 * @see app/Http/Controllers/AboutController.php:201
 * @route '/about/{about}'
 */
destroy.delete = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AboutController::destroy
 * @see app/Http/Controllers/AboutController.php:201
 * @route '/about/{about}'
 */
    const destroyForm = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AboutController::destroy
 * @see app/Http/Controllers/AboutController.php:201
 * @route '/about/{about}'
 */
        destroyForm.delete = (args: { about: string | number } | [about: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\AboutController::activatingAbout
 * @see app/Http/Controllers/AboutController.php:30
 * @route '/about/{id}/activating'
 */
export const activatingAbout = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatingAbout.url(args, options),
    method: 'patch',
})

activatingAbout.definition = {
    methods: ["patch"],
    url: '/about/{id}/activating',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AboutController::activatingAbout
 * @see app/Http/Controllers/AboutController.php:30
 * @route '/about/{id}/activating'
 */
activatingAbout.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return activatingAbout.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutController::activatingAbout
 * @see app/Http/Controllers/AboutController.php:30
 * @route '/about/{id}/activating'
 */
activatingAbout.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatingAbout.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AboutController::activatingAbout
 * @see app/Http/Controllers/AboutController.php:30
 * @route '/about/{id}/activating'
 */
    const activatingAboutForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: activatingAbout.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AboutController::activatingAbout
 * @see app/Http/Controllers/AboutController.php:30
 * @route '/about/{id}/activating'
 */
        activatingAboutForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: activatingAbout.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    activatingAbout.form = activatingAboutForm
const AboutController = { index, create, store, edit, update, destroy, activatingAbout }

export default AboutController