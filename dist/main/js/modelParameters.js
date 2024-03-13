"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelParameters = exports.EnergyAboveTheTopHill = exports.GrainSize = void 0;
const xml_js_1 = require("./xml.js");
/**
 * A class for measures of grain size.
 */
class GrainSize extends xml_js_1.NumberNode {
    /**
     * The tag name.
     */
    static tagName = "me:grainSize";
    /**
     * @param {string} value The value.
     */
    constructor(attributes, value) {
        super(attributes, GrainSize.tagName, value);
    }
    toString() {
        return `GrainSize(${super.toString()})`;
    }
}
exports.GrainSize = GrainSize;
/**
 * A class for measures of grain size.
 */
class EnergyAboveTheTopHill extends xml_js_1.NumberNode {
    /**
     * The tag name.
     */
    static tagName = "me:energyAboveTheTopHill";
    /**
     * @param {string} value The value.
     */
    constructor(attributes, value) {
        super(attributes, EnergyAboveTheTopHill.tagName, value);
    }
}
exports.EnergyAboveTheTopHill = EnergyAboveTheTopHill;
/**
 * A class for model parameters.
 */
class ModelParameters extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "me:modelParameters";
    constructor(grainSize, energyAboveTheTopHill) {
        super(new Map(), ModelParameters.tagName);
        this.addNode(grainSize);
        this.addNode(energyAboveTheTopHill);
    }
    /**
     * @returns The grain size.
     */
    getGrainSize() {
        return this.nodes.get(0);
    }
    /**
     * @returns The energy above the top hill.
     */
    getEnergyAboveTheTopHill() {
        return this.nodes.get(1);
    }
}
exports.ModelParameters = ModelParameters;
//# sourceMappingURL=modelParameters.js.map