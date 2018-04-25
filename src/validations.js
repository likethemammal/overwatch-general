import _ from 'underscore'

export const ACTIVE_INDEX_NONE = (activeIndex) => {
    if (activeIndex !== 0 && !activeIndex) {
        throw 'No activeIndex defined'
    }
}

export const ACTIVE_INDEX_TOO_SMALL = (activeIndex) => {
    if (activeIndex < 0) {
        throw 'activeIndex can\'t be negative'
    }
}

export const ACTIVE_INDEX_TOO_LARGE = (activeIndex, options) => {
    if (activeIndex >= options.length) {
        throw 'activeIndex is greater than options length'
    }
}

export const ACTIVE_INDEX_NOT_NUMBER = (activeIndex) => {
    if (!_.isNumber(activeIndex)) {
        throw 'activeIndex is not a number'
    }
}

export const OPTIONS_NONE = (activeIndex, options) => {
    if (!options || !options.length) {
        throw 'No options defined or options.length'
    }
}
