import { APP_REGEX } from "../app/app-regex.const";

export const CORE_REGEX = [
    {
        name:'Whole Numbers',
        key:'WHOLE_NUM',
        regex:APP_REGEX.DIGITS.WHOLE_NUM
    },
    {
        name:'Decimal Numbers',
        key:'DECIMAL_NUM',
        regex:APP_REGEX.DIGITS.DECIMAL_NUM
    },
    {
        name:'Whole Decimal Numbers',
        key:'WHOLE_DECIMAL_NUM',
        regex:APP_REGEX.DIGITS.WHOLE_DECIMAL_NUM
    },
    {
        name:'Whole Decimal Numbers(+-)',
        key:'NP_WHOLE_DECIMAL_NUM',
        regex:APP_REGEX.DIGITS.NEG_POST_WHOLE_DECIMAL_NUM
    },
    {
        name:'Whole Decimal Fractions',
        key:'WHOLE_DECIMAL_FRAC_NUM',
        regex:APP_REGEX.DIGITS.WHOLE_DECIMAL_FRACTION_NUM
    },
]