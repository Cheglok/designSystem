module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "prettier",
    ],
    parser: "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
        "no-mixed-operators": [ //Заключение сложных выражений в круглые скобки проясняет замысел разработчика
            "error",
            {
                "groups": [
                    ["+", "-", "*", "/", "%", "**"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],
        "vue/require-default-prop": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "vue/no-deprecated-v-on-native-modifier": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/multi-word-component-names": "off",
        "no-irregular-whitespace": "off",
        "vue/no-v-html": "off",
        "@typescript-eslint/no-var-requires": "off",
        'vue/attributes-order': 'warn',
        "vue/match-component-file-name": ["error", {
            "extensions": ["vue"],
            "shouldMatchCase": false
        }],
        "vue/component-name-in-template-casing": ["error", "PascalCase", {
            "registeredComponentsOnly": true,
        }],
        "vue/order-in-components": [
            "error",
            {
                // Конфигурация порядка определения свойств Vue компонентов
                order: [
                    "name",
                    "model",
                    "mixins",
                    ["components", "directives"],
                    ["props", "propsData"],
                    "emits",
                    "data",
                    "computed",
                    "methods",
                    "watch",
                    "LIFECYCLE_HOOKS",
                ],
            },
        ],
    },
}
