import _ from 'underscore'

export const INDEX_NONE = (index) => {
    if (index !== 0 && !index) {
        throw 'No index defined'
    }
}

export const INDEX_TOO_SMALL = (index) => {
    if (index < 0) {
        throw 'index can\'t be negative'
    }
}

export const INDEX_TOO_LARGE = (index, options) => {
    if (index >= options.length) {
        throw 'index is greater than options length'
    }
}

export const INDEX_NOT_NUMBER = (index) => {
    if (!_.isNumber(index)) {
        throw 'index is not a number'
    }
}

export const OPTIONS_NONE = (index, options) => {
    if (!options || !options.length) {
        throw 'No options defined or options.length'
    }
}

export const OPTIONS_TOO_SMALL = (index, options) => {
    if (index >= options.length) {
        throw 'options length is too small'
    }
}