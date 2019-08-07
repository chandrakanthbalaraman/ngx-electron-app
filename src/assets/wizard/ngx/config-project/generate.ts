export var  generateProject = {
    appInfo: [
        {
            "label": "generate",
            "data": "generate",
            "type": "dir",
            "children": [
                {
                    "label": "src",
                    "data": "src",
                    "type":"dir",
                    "children": [
                        {
                            "label": "app",
                            "data": "app",
                            "type":"dir",
                            "children": [
                                {
                                    "label": "common",
                                    "data": "common",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "_components",
                                            "data": "_components",
                                            "type":"dir",


                                        },
                                        {
                                            "label": "_directives",
                                            "data": "_directives",
                                            "type":"dir",

                                        },
                                        {
                                            "label": "_interfaces",
                                            "data": "_interfaces",
                                            "type":"dir",

                                        },
                                        {
                                            "label": "_consts",
                                            "data": "_consts",
                                            "type":"dir",
                                            "children":[
                                                {
                                                    "label": "app-url.const.ts",
                                                    "data": "app-url.const.ts",
                                                    "type":"file",
                                                },
                                                {
                                                    "label": "app-animate.const.ts",
                                                    "data": "app-animate.const.ts",
                                                    "type":"file",
                                                },
                                                {
                                                    "label": "app-regex.const.ts",
                                                    "data": "app-regex.const.ts",
                                                    "type":"file",

                                                },
                                                {
                                                    "label": "app-messages.const.ts",
                                                    "data": "app-messages.const.ts",
                                                    "type":"file",
                                                },
                                                {
                                                    "label": "app-config.const.ts",
                                                    "data": "app-config.const.ts",
                                                    "type":"file",
                                                }
                                            ]

                                        },
                                        {
                                            "label": "_functions",
                                            "data": "_functions",
                                            "type":"dir",

                                        },
                                        {
                                            "label": "_modules",
                                            "data": "_modules",
                                            "type":"dir",
                                            "children": [
                                                {
                                                    "label": "core.module.ts",
                                                    "data": "core.module.ts",
                                                    "type":"file",
                                                    "templateType": "module"

                                                },
                                                {
                                                    "label": "shared.module.ts",
                                                    "data": "shared.module.ts",
                                                    "type":"file",
                                                    "templateType": "module"

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_pipes",
                                            "data": "_pipes",
                                            "type":"dir",

                                        },
                                        {
                                            "label": "_services",
                                            "data": "_services",
                                            "type":"dir",

                                        }

                                    ]

                                },
                                {
                                    "label": "layout",
                                    "data": "layout",
                                    "type":"dir",
                                },
                                {
                                    "label": "app.component.ts",
                                    "data": "app.component.ts",
                                    "type":"file",
                                    "templateType": "component"
                                },
                                {
                                    "label": "app.module.ts",
                                    "data": "app.module.ts",
                                    "type":"file",
                                    "templateType": "module"

                                },
                                {
                                    "label": "app.routing.ts",
                                    "data": "app.routing.ts",
                                    "type":"file",

                                },
                                {
                                    "label": "app.component.scss",
                                    "data": "app.component.scss",
                                    "type":"file",


                                },
                                {
                                    "label": "app.component.html",
                                    "data": "app.component.html",
                                    "type":"file",
                                }

                            ]
                        },
                        {
                            "label": "assets",
                            "data": "assets",
                            "type":"dir",
                            "children": [
                                {
                                    "label": "partials",
                                    "data": "partials",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "_base",
                                            "data": "_base",
                                            "type":"dir",
                                            "children": [
                                                {
                                                    "label": "base.scss",
                                                    "data": "base.scss",
                                                    "type":"file",

                                                },
                                                {
                                                    "label": "typography.scss",
                                                    "data": "typography.scss",
                                                    "type":"file",

                                                },
                                                {
                                                    "label": "colors.scss",
                                                    "data": "colors.scss",
                                                    "type":"file",

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_modules",
                                            "data": "_modules",
                                            "type":"dir",
                                            "children": [
                                                {
                                                    "label": "_components",
                                                    "data": "_components",
                                                    "type":"dir",

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_layouts",
                                            "data": "_layouts",
                                            "type":"dir",


                                        },
                                        {
                                            "label": "_utils",
                                            "data": "_utils",
                                            "type":"dir",
                                            "children": [
                                                {
                                                    "label": "_mixins",
                                                    "data": "_mixins",
                                                    "type":"dir",
                                                    

                                                }
                                            ]

                                        },
                                        {
                                            "label": "app-style.scss",
                                            "data": "app-style.scss",
                                            "type":"file",

                                        }

                                    ]

                                },
                                {
                                    "label": "images",
                                    "data": "_utils",
                                    "type":"dir",

                                }
                            ]
                        },
                        {
                            "label": "environments",
                            "data": "environments",
                            "type":"dir",
                            "children": [
                                {
                                    "label": "environment.ts",
                                    "data": "environment.ts",
                                    "type":"file",
                                    "templateType": "environment"
                                },
                                {
                                    "label": "environment.prod.ts",
                                    "data": "environment.prod.ts",
                                    "type":"file",
                                    "templateType": "environment"
                                }
                            ]
                        },
                        {
                            "label": "index.html",
                            "data": "index.html",
                            "type":"file",
                            "templateType": "index"
                        },
                        {
                            "label": "main.ts",
                            "data": "main.ts",
                            "type":"file",
                        },
                        {
                            "label": "polyfills.ts",
                            "data": "polyfills.ts",
                            "type":"file",
                        },
                        {
                            "label": "styles.scss",
                            "data": "styles.scss",
                            "type":"file",
                        },
                        {
                            "label": "tsconfig.app.json",
                            "data": "tsconfig.app.json",
                            "type":"file",
                        },
                        {
                            "label": "typings.d.ts",
                            "data": "typings.d.ts",
                            "type":"file",
                        }
                    ]

                },
                {
                    "label": "gitignore",
                    "data": "gitignore",
                    "type":"file",
                    "templateType": "gitignore"
                },
                {
                    "label": ".angular-cli.json",
                    "data": ".angular-cli.json",
                    "type":"file",
                    "templateType": "cli"
                },
                {
                    "label": "package.json",
                    "data": "package.json",
                    "type":"file",
                    "templateType": "package"
                },
                {
                    "label": "tsconfig.json",
                    "data": "tsconfig.json",
                    "type":"file",
                    "templateType": "tsconfig"
                },
                {
                    "label": "README.md",
                    "data": "README.md",
                    "type":"file",
                }
            ]
        }
    ],
    ngCLIAppInfo: [
        {
            "label": "src",
            "data": "src",
            "type":"dir",
            "children": [
                {
                    "label": "app",
                    "data": "app",
                    "type":"dir",
                    "children": [
                        {
                            "label": "common",
                            "data": "common",
                            "type":"dir",
                            "children": [
                                {
                                    "label": "_components",
                                    "data": "_components",
                                    "type":"dir",


                                },
                                {
                                    "label": "_directives",
                                    "data": "_directives",
                                    "type":"dir",

                                },
                                {
                                    "label": "_interfaces",
                                    "data": "_interfaces",
                                    "type":"dir",

                                },
                                {
                                    "label": "_consts",
                                    "data": "_consts",
                                    "type":"dir",
                                    "children":[
                                        {
                                            "label": "app-url.const.ts",
                                            "data": "app-url.const.ts",
                                            "type":"file",
                                        },
                                        {
                                            "label": "app-animate.const.ts",
                                            "data": "app-animate.const.ts",
                                            "type":"file",
                                        },
                                        {
                                            "label": "app-regex.const.ts",
                                            "data": "app-regex.const.ts",
                                            "type":"file",

                                        },
                                        {
                                            "label": "app-messages.const.ts",
                                            "data": "app-messages.const.ts",
                                            "type":"file",
                                        },
                                        {
                                            "label": "app-config.const.ts",
                                            "data": "app-config.const.ts",
                                            "type":"file",
                                        }
                                    ]

                                },
                                {
                                    "label": "_functions",
                                    "data": "_functions",
                                    "type":"dir",

                                },
                                {
                                    "label": "_modules",
                                    "data": "_modules",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "core.module.ts",
                                            "data": "core.module.ts",
                                            "type":"file",
                                            "templateType": "module"

                                        },
                                        {
                                            "label": "shared.module.ts",
                                            "data": "shared.module.ts",
                                            "type":"file",
                                            "templateType": "module"

                                        }
                                    ]

                                },
                                {
                                    "label": "_pipes",
                                    "data": "_pipes",
                                    "type":"dir",

                                },
                                {
                                    "label": "_services",
                                    "data": "_services",
                                    "type":"dir",

                                }

                            ]

                        },
                        {
                            "label": "layout",
                            "data": "layout",
                            "type":"dir",
                        },
                        {
                            "label": "app.component.ts",
                            "data": "app.component.ts",
                            "type":"file",
                            "templateType": "component"
                        },
                        {
                            "label": "app.module.ts",
                            "data": "app.module.ts",
                            "type":"file",
                            "templateType": "module"

                        },
                        {
                            "label": "app.routing.ts",
                            "data": "app.routing.ts",
                            "type":"file",

                        },
                        {
                            "label": "app.component.scss",
                            "data": "app.component.scss",
                            "type":"file",


                        },
                        {
                            "label": "app.component.html",
                            "data": "app.component.html",
                            "type":"file",
                        }

                    ]
                },
                {
                    "label": "assets",
                    "data": "assets",
                    "type":"dir",
                    "children": [
                        {
                            "label": "partials",
                            "data": "partials",
                            "type":"dir",
                            "children": [
                                {
                                    "label": "_base",
                                    "data": "_base",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "base.scss",
                                            "data": "base.scss",
                                            "type":"file",

                                        },
                                        {
                                            "label": "typography.scss",
                                            "data": "typography.scss",
                                            "type":"file",

                                        },
                                        {
                                            "label": "colors.scss",
                                            "data": "colors.scss",
                                            "type":"file",

                                        }
                                    ]

                                },
                                {
                                    "label": "_modules",
                                    "data": "_modules",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "_components",
                                            "data": "_components",
                                            "type":"dir",

                                        }
                                    ]

                                },
                                {
                                    "label": "_layouts",
                                    "data": "_layouts",
                                    "type":"dir",


                                },
                                {
                                    "label": "_utils",
                                    "data": "_utils",
                                    "type":"dir",
                                    "children": [
                                        {
                                            "label": "_mixins",
                                            "data": "_mixins",
                                            "type":"dir",
                                            

                                        }
                                    ]

                                },
                                {
                                    "label": "app-style.scss",
                                    "data": "app-style.scss",
                                    "type":"file",

                                }

                            ]

                        },
                        {
                            "label": "images",
                            "data": "_utils",
                            "type":"dir",

                        }
                    ]
                },
                {
                    "label": "environments",
                    "data": "environments",
                    "type":"dir",
                    "children": [
                        {
                            "label": "environment.ts",
                            "data": "environment.ts",
                            "type":"file",
                            "templateType": "environment"
                        },
                        {
                            "label": "environment.prod.ts",
                            "data": "environment.prod.ts",
                            "type":"file",
                            "templateType": "environment"
                        }
                    ]
                },
                {
                    "label": "index.html",
                    "data": "index.html",
                    "type":"file",
                    "templateType": "index"
                },
                {
                    "label": "main.ts",
                    "data": "main.ts",
                    "type":"file",
                },
                {
                    "label": "polyfills.ts",
                    "data": "polyfills.ts",
                    "type":"file",
                },
                {
                    "label": "styles.scss",
                    "data": "styles.scss",
                    "type":"file",
                },
                {
                    "label": "tsconfig.app.json",
                    "data": "tsconfig.app.json",
                    "type":"file",
                },
                {
                    "label": "typings.d.ts",
                    "data": "typings.d.ts",
                    "type":"file",
                }
            ]

   
        }
    ],
    basicLayout: [

        {
            "children": [
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
