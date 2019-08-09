export const APP_REGEX = {
    DIGITS:{
        WHOLE_NUM:/^\d+$/,
        DECIMAL_NUM:/^\d*\.\d+$/,
        WHOLE_DECIMAL_NUM:/^\d*(\.\d+)?$/,
        NEG_POST_WHOLE_DECIMAL_NUM:/^-?\d*(\.\d+)?$/,
        WHOLE_DECIMAL_FRACTION_NUM:/^-?\d*(\.\d+)?$/,
    },
    CHARACTERS:{
        ALPHA_NUM_NO_SPACE:/^[a-zA-Z0-9]*$/,
        ALPHA_NUM_SPACE:/^[a-zA-Z0-9 ]*$/,
        APLHA:/^[a-zA-Z]*$/
    },
    EMAIL:{
        COMMON:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
        UNCOMMON:/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    }
}