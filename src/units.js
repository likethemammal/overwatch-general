
import * as validations from './validations'

//selectors
export const activeOption = (activeIndex, options) => {

    validations.INDEX_NONE(activeIndex)
    validations.INDEX_TOO_LARGE(activeIndex, options)
    validations.OPTIONS_NONE(activeIndex, options)
    validations.OPTIONS_TOO_SMALL(activeIndex, options)

    return options[activeIndex]
}