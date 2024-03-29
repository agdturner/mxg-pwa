"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = exports.toNumberArray = exports.setToString = exports.arrayToString = exports.mapToString = exports.rescale = exports.get = void 0;
/**
 * Thow an error if the key is not in the map otherwise return the value mapped to the key.
 * @param map The map to search in.
 * @param key The key to search for.
 * @returns The value mapped to the key.
 * @throws An error if the key is not in the map.
 */
function get(map, key) {
    if (!map.has(key)) {
        throw new Error(`Key ${key} not found in map`);
    }
    return map.get(key);
}
exports.get = get;
/**
 * Linearly rescale a value from one range to another.
 * @param min The minimum value of the original range.
 * @param range The original range.
 * @param newMin The minimum value of the new range.
 * @param newRange The new range.
 * @param value The value to rescale.
 * @returns The rescaled value.
 */
function rescale(min, range, newMin, newRange, value) {
    // The + 0.0 is to force the division to be a floating point division.
    //return (((value - min) / (range + 0.0)) * (newRange)) + newMin;
    return ((value - min) * (newRange) / (range + 0.0)) + newMin;
}
exports.rescale = rescale;
/**
 * For convertina a map to a string.
 * @param map The map to convert to a string.
 * @param delimiter The (optional) delimiter.
 * @returns A string representation of all the entries in the map.
 */
function mapToString(map, delimiter) {
    if (map == null) {
        return "";
    }
    if (delimiter == undefined) {
        delimiter = ', ';
    }
    return Array.from(map.entries()).map(([key, value]) => `${key == null ? "null" : key.toString()}(${value == null ? "null" : value.toString()})`).join(delimiter);
}
exports.mapToString = mapToString;
/**
 * For converting an array to a string.
 * @param {any[]} array The array to convert to a string.
 * @param {string} delimiter The (optional) delimiter.
 */
function arrayToString(array, delimiter) {
    if (delimiter == undefined) {
        delimiter = ', ';
    }
    return array.map((value) => value == null ? "null" : value.toString()).join(delimiter);
}
exports.arrayToString = arrayToString;
/**
 * For converting an array to a string.
 * @param {any[]} set The set to convert to a string.
 * @param {string} delimiter The (optional) delimiter.
 */
function setToString(set, delimiter) {
    if (delimiter == undefined) {
        delimiter = ', ';
    }
    return Array.from(set).map((value) => value == null ? "null" : value.toString()).join(delimiter);
}
exports.setToString = setToString;
/**
 * For converting a string array to a number array.
 * @param {string[]} s The string to convert to a number array.
 * @returns A number array.
 */
function toNumberArray(s) {
    let r = [];
    for (let i = 0; i < s.length; i++) {
        if (isNumeric(s[i])) {
            r.push(parseFloat(s[i]));
            //} else {
            //    throw new Error(`toNumberArray: ${s[i]} is not a number`);
        }
    }
    return r;
}
exports.toNumberArray = toNumberArray;
/**
 * @param s The string to check.
 * @returns true iff s is a number.
 */
function isNumeric(s) {
    if (s === "") {
        return false;
    }
    return !isNaN(Number(s));
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=util.js.map