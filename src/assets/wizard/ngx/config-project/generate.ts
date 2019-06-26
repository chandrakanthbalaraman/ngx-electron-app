export var  generateProject = {
    appInfo: [
        {
            "name": "generate",
            "dir": [
                {
                    "name": "src",
                    "dir": [
                        {
                            "name": "app",
                            "dir": [
                                {
                                    "name": "common",
                                    "dir": [
                                        {
                                            "name": "_components"


                                        },
                                        {
                                            "name": "_directives"


                                        },
                                        {
                                            "name": "_interfaces"

                                        },
                                        {
                                            "name": "_consts",
                                            "file":[
                                                {
                                                    "name":"app-url.const.ts"
                                                },
                                                {
                                                    "name":"app-animate.const.ts"
                                                },
                                                {
                                                    "name":"app-regex.const.ts"
                                                },
                                                {
                                                    "name":"app-messages.const.ts"
                                                },
                                                {
                                                    "name":"app-config.const.ts"
                                                }
                                            ]

                                        },
                                        {
                                            "name": "_functions"

                                        },
                                        {
                                            "name": "_modules",
                                            "file": [
                                                {
                                                    "name": "core.module.ts",
                                                    "type": "module"

                                                },
                                                {
                                                    "name": "shared.module.ts",
                                                    "type": "module"

                                                }
                                            ]

                                        },
                                        {
                                            "name": "_pipes"

                                        },
                                        {
                                            "name": "_services"

                                        }

                                    ]

                                },
                                {
                                    "name": "main",
                                }

                            ],
                            "file": [
                                {
                                    "name": "app.component.ts",
                                    "type": "component"
                                },
                                {
                                    "name": "app.module.ts",
                                    "type": "module"

                                },
                                {
                                    "name": "app.routing.ts"

                                },
                                {
                                    "name": "app.component.scss"


                                },
                                {
                                    "name": "app.component.html"


                                }
                            ]
                        },
                        {
                            "name": "assets",
                            "dir": [
                                {
                                    "name": "partials",
                                    "dir": [
                                        {
                                            "name": "_base",
                                            "file": [
                                                {
                                                    "name": "base.scss"

                                                },
                                                {
                                                    "name": "typography.scss"

                                                },
                                                {
                                                    "name": "colors.scss"

                                                }
                                            ]

                                        },
                                        {
                                            "name": "_modules",
                                            "dir": [
                                                {
                                                    "name": "_components"

                                                }
                                            ]

                                        },
                                        {
                                            "name": "_layouts"

                                        },
                                        {
                                            "name": "_utils",
                                            "dir": [
                                                {
                                                    "name": "_mixins"

                                                }
                                            ]

                                        },

                                    ],
                                    "file": [
                                        {
                                            "name": "global.scss"

                                        }
                                    ]

                                },
                                {
                                    "name": "img",
                                    "dir": [
                                        {
                                            "name": "logo"

                                        },
                                        {
                                            "name": "user"

                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            "name": "environments",
                            "file": [
                                {
                                    "name": "environment.ts",
                                    "type": "environment"
                                },
                                {
                                    "name": "environment.prod.ts",
                                    "type": "environment"
                                }
                            ]
                        }
                    ],
                    "file": [
                        {
                            "name": "index.html",
                            "type": "index"
                        },
                        {
                            "name": "main.ts"
                        },
                        {
                            "name": "polyfills.ts"
                        },
                        {
                            "name": "styles.scss"
                        },
                        {
                            "name": "tsconfig.app.json"
                        },
                        {
                            "name": "typings.d.ts"
                        }
                    ]

                }
            ],
            "file": [
                {
                    "name": ".gitignore",
                    "type": "gitignore"
                },
                {
                    "name": ".angular-cli.json",
                    "type": "cli"
                },
                {
                    "name": "package.json",
                    "type": "package"
                },
                {
                    "name": "tsconfig.json",
                    "type": "tsconfig"
                },
                {
                    "name": "README.md"
                }
            ]
        }
    ],
    basicLayout: [

        {
            "dir": [
                {
                    "name": "basic-layout"


                },
                {
                    "name": "main-layout"


                }
            ]
        }
    ]
}
