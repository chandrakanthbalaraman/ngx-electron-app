import { APP_VAL } from "@app/common/_const/app/app-val.const";

export var  GEN_PROJECT = {
    appInfo: [
        {
            "label": "generate",
            "data": "generate",
            "type": APP_VAL.SETUP.DIR,
            "children": [
                {
                    "label": "src",
                    "data": "src",
                    "type":APP_VAL.SETUP.DIR,
                    "children": [
                        {
                            "label": "app",
                            "data": "app",
                            "type":APP_VAL.SETUP.DIR,
                            "children": [
                                {
                                    "label": "common",
                                    "data": "common",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_components",
                                            "data": "_components",
                                            "type":APP_VAL.SETUP.DIR,


                                        },
                                        {
                                            "label": "_directives",
                                            "data": "_directives",
                                            "type":APP_VAL.SETUP.DIR,

                                        },
                                        {
                                            "label": "_interfaces",
                                            "data": "_interfaces",
                                            "type":APP_VAL.SETUP.DIR,

                                        },
                                        {
                                            "label": "_consts",
                                            "data": "_consts",
                                            "type":APP_VAL.SETUP.DIR,
                                            "children":[
                                                {
                                                    "label": "app-url.const.ts",
                                                    "data": "app-url.const.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                },
                                                {
                                                    "label": "app-animate.const.ts",
                                                    "data": "app-animate.const.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                },
                                                {
                                                    "label": "app-regex.const.ts",
                                                    "data": "app-regex.const.ts",
                                                    "type":APP_VAL.SETUP.FILE,

                                                },
                                                {
                                                    "label": "app-messages.const.ts",
                                                    "data": "app-messages.const.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                },
                                                {
                                                    "label": "app-config.const.ts",
                                                    "data": "app-config.const.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                }
                                            ]

                                        },
                                        {
                                            "label": "_functions",
                                            "data": "_functions",
                                            "type":APP_VAL.SETUP.DIR,

                                        },
                                        {
                                            "label": "_modules",
                                            "data": "_modules",
                                            "type":APP_VAL.SETUP.DIR,
                                            "children": [
                                                {
                                                    "label": "core.module.ts",
                                                    "data": "core.module.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                    "templateType": "module"

                                                },
                                                {
                                                    "label": "shared.module.ts",
                                                    "data": "shared.module.ts",
                                                    "type":APP_VAL.SETUP.FILE,
                                                    "templateType": "module"

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_pipes",
                                            "data": "_pipes",
                                            "type":APP_VAL.SETUP.DIR,

                                        },
                                        {
                                            "label": "_services",
                                            "data": "_services",
                                            "type":APP_VAL.SETUP.DIR,

                                        }

                                    ]

                                },
                                {
                                    "label": "layout",
                                    "data": "layout",
                                    "type":APP_VAL.SETUP.DIR,
                                },
                                {
                                    "label": "app.component.ts",
                                    "data": "app.component.ts",
                                    "type":APP_VAL.SETUP.FILE,
                                    "templateType": "component"
                                },
                                {
                                    "label": "app.module.ts",
                                    "data": "app.module.ts",
                                    "type":APP_VAL.SETUP.FILE,
                                    "templateType": "module"

                                },
                                {
                                    "label": "app.routing.ts",
                                    "data": "app.routing.ts",
                                    "type":APP_VAL.SETUP.FILE,

                                },
                                {
                                    "label": "app.component.scss",
                                    "data": "app.component.scss",
                                    "type":APP_VAL.SETUP.FILE,


                                },
                                {
                                    "label": "app.component.html",
                                    "data": "app.component.html",
                                    "type":APP_VAL.SETUP.FILE,
                                }

                            ]
                        },
                        {
                            "label": "assets",
                            "data": "assets",
                            "type":APP_VAL.SETUP.DIR,
                            "children": [
                                {
                                    "label": "partials",
                                    "data": "partials",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_base",
                                            "data": "_base",
                                            "type":APP_VAL.SETUP.DIR,
                                            "children": [
                                                {
                                                    "label": "base.scss",
                                                    "data": "base.scss",
                                                    "type":APP_VAL.SETUP.FILE,

                                                },
                                                {
                                                    "label": "typography.scss",
                                                    "data": "typography.scss",
                                                    "type":APP_VAL.SETUP.FILE,

                                                },
                                                {
                                                    "label": "colors.scss",
                                                    "data": "colors.scss",
                                                    "type":APP_VAL.SETUP.FILE,

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_modules",
                                            "data": "_modules",
                                            "type":APP_VAL.SETUP.DIR,
                                            "children": [
                                                {
                                                    "label": "_components",
                                                    "data": "_components",
                                                    "type":APP_VAL.SETUP.DIR,

                                                }
                                            ]

                                        },
                                        {
                                            "label": "_layouts",
                                            "data": "_layouts",
                                            "type":APP_VAL.SETUP.DIR,


                                        },
                                        {
                                            "label": "_utils",
                                            "data": "_utils",
                                            "type":APP_VAL.SETUP.DIR,
                                            "children": [
                                                {
                                                    "label": "_mixins",
                                                    "data": "_mixins",
                                                    "type":APP_VAL.SETUP.DIR,
                                                    

                                                }
                                            ]

                                        },
                                        {
                                            "label": "app-style.scss",
                                            "data": "app-style.scss",
                                            "type":APP_VAL.SETUP.FILE,

                                        }

                                    ]

                                },
                                {
                                    "label": "images",
                                    "data": "_utils",
                                    "type":APP_VAL.SETUP.DIR,

                                }
                            ]
                        },
                        {
                            "label": "environments",
                            "data": "environments",
                            "type":APP_VAL.SETUP.DIR,
                            "children": [
                                {
                                    "label": "environment.ts",
                                    "data": "environment.ts",
                                    "type":APP_VAL.SETUP.FILE,
                                    "templateType": "environment"
                                },
                                {
                                    "label": "environment.prod.ts",
                                    "data": "environment.prod.ts",
                                    "type":APP_VAL.SETUP.FILE,
                                    "templateType": "environment"
                                }
                            ]
                        },
                        {
                            "label": "index.html",
                            "data": "index.html",
                            "type":APP_VAL.SETUP.FILE,
                            "templateType": "index"
                        },
                        {
                            "label": "main.ts",
                            "data": "main.ts",
                            "type":APP_VAL.SETUP.FILE,
                        },
                        {
                            "label": "polyfills.ts",
                            "data": "polyfills.ts",
                            "type":APP_VAL.SETUP.FILE,
                        },
                        {
                            "label": "styles.scss",
                            "data": "styles.scss",
                            "type":APP_VAL.SETUP.FILE,
                        },
                        {
                            "label": "tsconfig.app.json",
                            "data": "tsconfig.app.json",
                            "type":APP_VAL.SETUP.FILE,
                        },
                        {
                            "label": "typings.d.ts",
                            "data": "typings.d.ts",
                            "type":APP_VAL.SETUP.FILE,
                        }
                    ]

                },
                {
                    "label": "gitignore",
                    "data": "gitignore",
                    "type":APP_VAL.SETUP.FILE,
                    "templateType": "gitignore"
                },
                {
                    "label": ".angular-cli.json",
                    "data": ".angular-cli.json",
                    "type":APP_VAL.SETUP.FILE,
                    "templateType": "cli"
                },
                {
                    "label": "package.json",
                    "data": "package.json",
                    "type":APP_VAL.SETUP.FILE,
                    "templateType": "package"
                },
                {
                    "label": "tsconfig.json",
                    "data": "tsconfig.json",
                    "type":APP_VAL.SETUP.FILE,
                    "templateType": "tsconfig"
                },
                {
                    "label": "README.md",
                    "data": "README.md",
                    "type":APP_VAL.SETUP.FILE,
                }
            ]
        }
    ],
    ngCLIAppInfo: [
        {
            "label": "src",
            "data": "src",
            "type":APP_VAL.SETUP.DIR,
            "children": [
                {
                    "label": "app",
                    "data": "app",
                    "type":APP_VAL.SETUP.DIR,
                    "children": [
                        {
                            "label": "common",
                            "data": "common",
                            "type":APP_VAL.SETUP.DIR,
                            "children": [
                                {
                                    "label": "_components",
                                    "data": "_components",
                                    "type":APP_VAL.SETUP.DIR,


                                },
                                {
                                    "label": "_directives",
                                    "data": "_directives",
                                    "type":APP_VAL.SETUP.DIR,

                                },
                                {
                                    "label": "_interfaces",
                                    "data": "_interfaces",
                                    "type":APP_VAL.SETUP.DIR,

                                },
                                {
                                    "label": "_consts",
                                    "data": "_consts",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children":[
                                        {
                                            "label": "app-url.const.ts",
                                            "data": "app-url.const.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                        },
                                        {
                                            "label": "app-animate.const.ts",
                                            "data": "app-animate.const.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                        },
                                        {
                                            "label": "app-regex.const.ts",
                                            "data": "app-regex.const.ts",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "app-messages.const.ts",
                                            "data": "app-messages.const.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                        },
                                        {
                                            "label": "app-config.const.ts",
                                            "data": "app-config.const.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                        }
                                    ]

                                },
                                {
                                    "label": "_functions",
                                    "data": "_functions",
                                    "type":APP_VAL.SETUP.DIR,

                                },
                                {
                                    "label": "_modules",
                                    "data": "_modules",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "core.module.ts",
                                            "data": "core.module.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                            "templateType": "module"

                                        },
                                        {
                                            "label": "shared.module.ts",
                                            "data": "shared.module.ts",
                                            "type":APP_VAL.SETUP.FILE,
                                            "templateType": "module"

                                        }
                                    ]

                                },
                                {
                                    "label": "_pipes",
                                    "data": "_pipes",
                                    "type":APP_VAL.SETUP.DIR,

                                },
                                {
                                    "label": "_services",
                                    "data": "_services",
                                    "type":APP_VAL.SETUP.DIR,

                                }

                            ]

                        },
                        {
                            "label": "layout",
                            "data": "layout",
                            "type":APP_VAL.SETUP.DIR,
                        },
                        {
                            "label": "app.component.ts",
                            "data": "app.component.ts",
                            "type":APP_VAL.SETUP.FILE,
                            "templateType": "component"
                        },
                        {
                            "label": "app.module.ts",
                            "data": "app.module.ts",
                            "type":APP_VAL.SETUP.FILE,
                            "templateType": "module"

                        },
                        {
                            "label": "app.routing.ts",
                            "data": "app.routing.ts",
                            "type":APP_VAL.SETUP.FILE,

                        },
                        {
                            "label": "app.component.scss",
                            "data": "app.component.scss",
                            "type":APP_VAL.SETUP.FILE,


                        },
                        {
                            "label": "app.component.html",
                            "data": "app.component.html",
                            "type":APP_VAL.SETUP.FILE,
                        }

                    ]
                },
                {
                    "label": "assets",
                    "data": "assets",
                    "type":APP_VAL.SETUP.DIR,
                    "children": [
                        {
                            "label": "styles",
                            "data": "styles",
                            "type":APP_VAL.SETUP.DIR,
                            "children": [
                                {
                                    "label": "_abstracts",
                                    "data": "_abstracts",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_variables",
                                            "data": "_variables",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_functions",
                                            "data": "_functions",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_mixins",
                                            "data": "_mixins",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_base",
                                    "data": "_base",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_reset",
                                            "data": "_reset",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_typography",
                                            "data": "_typography",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_components",
                                    "data": "_components",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_buttons",
                                            "data": "_buttons",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_list-group",
                                            "data": "_list-group",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_card",
                                            "data": "_card",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_layouts",
                                    "data": "_layouts",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_header",
                                            "data": "_header",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_footer",
                                            "data": "_footer",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_sidebar",
                                            "data": "_sidebar",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_pages",
                                    "data": "_pages",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_auth",
                                            "data": "_auth",
                                            "type":"files",

                                        },
                                        {
                                            "label": "_dashboard",
                                            "data": "_dashboard",
                                            "type":APP_VAL.SETUP.FILE,

                                        },
                                        {
                                            "label": "_contact",
                                            "data": "_contact",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_themes",
                                    "data": "_themes",
                                    "type":APP_VAL.SETUP.DIR,
                                    "children": [
                                        {
                                            "label": "_theme1",
                                            "data": "_theme1",
                                            "type":"files",

                                        },
                                        {
                                            "label": "_theme2",
                                            "data": "_theme2",
                                            "type":APP_VAL.SETUP.FILE,

                                        }
                                    ]

                                },
                                {
                                    "label": "_vendors",
                                    "data": "_vendors",
                                    "type":APP_VAL.SETUP.DIR,
                                },
                                {
                                    "label": "app-style",
                                    "data": "app-style",
                                    "type":APP_VAL.SETUP.FILE,

                                }

                            ]

                        },
                        {
                            "label": "images",
                            "data": "images",
                            "type":APP_VAL.SETUP.DIR,

                        }
                    ]
                }
            ]

   
        }
    ]

}

export var SEEK_REF= {
    STYLE_DIR:['/src/assets/styles'],
    LAYOUT_DIR:['/src/app/layout'],
    CONST_DIR:['/src/app/common/_consts']
} 


export var CUSTOM_CREATION = {
    CONST_SECTION:{
        PATH: SEEK_REF.CONST_DIR,
        CHILDREN:[
            {
                name:'app-regex.const.ts',
                type:APP_VAL.SETUP.FILE,
                templateType:'const-file'
            }
        ]
    }
}