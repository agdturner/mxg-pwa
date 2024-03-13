"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Molecule = exports.ReservoirSize = exports.ExtraDOSCMethod = exports.Periodicity = exports.HinderedRotorPotential = exports.PotentialPoint = exports.BondRef = exports.DOSCMethod = exports.EnergyTransferModel = exports.DeltaEDown = exports.PropertyList = exports.ImFreqs = exports.MW = exports.RotConsts = exports.VibFreqs = exports.FrequenciesScaleFactor = exports.ZPE = exports.Property = exports.PropertyArray = exports.PropertyScalar = exports.BondArray = exports.Bond = exports.AtomArray = exports.Atom = void 0;
const util_js_1 = require("./util.js");
const xml_js_1 = require("./xml.js");
/**
 * Atom data.
 * The examples can be used to compile this.
 * It is likely that only a small subset of atoms in the periodic table are of interest...
 */
/**
 * Molecule data.
 * The examples can be used to compile this.
 * It would be good to use, have, provide ways of sharing and to be able to specify/edit molecules...
 * This would include data about atoms, bonds, molecule properties and other things...
 */
/**
 * Atom instances must have an "elementType" attribute.
 * The attributes may include "id", "x3", "y3", "z3" - coordinates used to depict a molecule containing the atom.
 * In the XML, an "atom" node is typically a child of an "atomArray" parent node.
 * If there is only one atom, it may be a child of a "molecule" parent node.
 */
class Atom extends xml_js_1.TagWithAttributes {
    /**
     * The tag name.
     */
    static tagName = "atom";
    /**
     * The id if specified, or the elementType.
     */
    id;
    /**
     * The element type.
     */
    elementType;
    /**
     * @param attributes The attributes. If there is no "elementType" key an error will be thrown.
     * If there is no "id" then "this.id" is set to the "elementType".
     */
    constructor(attributes) {
        super(attributes, Atom.tagName);
        let elementType = attributes.get("elementType");
        if (elementType == undefined) {
            throw new Error('elementType is undefined');
        }
        this.elementType = elementType;
        let id = attributes.get("id");
        if (id == undefined) {
            id = this.elementType;
        }
        this.id = id;
    }
}
exports.Atom = Atom;
/**
 * A class for representing an atomArray.
 * There can be no attributes.
 * In the XML, a "atomArray" node is typically a child of a "molecule" parent node and has "atom" node children.
 */
class AtomArray extends xml_js_1.NodeWithNodes {
    /**
    * The tag name.
    */
    static tagName = "atomArray";
    /**
     * @param attributes The attributes.
     * @param atoms The atoms.
     */
    constructor(attributes, atoms) {
        super(attributes, AtomArray.tagName);
        atoms.forEach(atom => {
            this.nodes.set(this.nodes.size, atom);
        });
    }
}
exports.AtomArray = AtomArray;
/**
 * An atomic bond between two atoms in a molecule.
 * Instances must have a "atomRefs2" attribute - a space separated list of two atom ids.
 * The attributes may include "order" - presumed to be the order of the bond. Generally:
 *  order = (the number of bonding electrons) - ((the number of non-bonding electrons) / 2).
 * In the XML, a "bond" node is typically a child of a "bondArray" parent node.
 */
class Bond extends xml_js_1.TagWithAttributes {
    /**
     * The tag name.
     */
    static tagName = "bond";
    /**
     * The atomRefs2.
     */
    atomRefs2;
    /**
     * @param attributes The attributes.
     */
    constructor(attributes) {
        super(attributes, Bond.tagName);
        let atomRefs2 = attributes.get("atomRefs2");
        if (atomRefs2 == undefined) {
            throw new Error('atomRefs2 is undefined');
        }
        this.atomRefs2 = atomRefs2;
    }
}
exports.Bond = Bond;
/**
 * There can be no attributes.
 * In the XML, a "bondArray" node is typically a child of a "molecule" parent node and has "bond" node children.
 */
class BondArray extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "bondArray";
    /**
     * @param attributes The attributes.
     * @param bonds A Map of bonds with keys as ids.
     */
    constructor(attributes, bonds) {
        super(attributes, BondArray.tagName);
        bonds.forEach(bond => {
            this.nodes.set(this.nodes.size, bond);
        });
    }
}
exports.BondArray = BondArray;
/**
 * The attributes may contain "units".
 * In the XML, a "scalar" node is a child of a "property" node.
 */
class PropertyScalar extends xml_js_1.NumberNode {
    /**
     * The tag name.
     */
    static tagName = "scalar";
    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes, value) {
        super(attributes, PropertyScalar.tagName, value);
    }
    /**
     * This updates the units of the property. It does not do any unit conversion.
     * It simply updates the specified units of a property
     * @param units Updates the units of the property.
     */
    updateUnits(units) {
        // Check the units are the same and if not replace the units...
        if (units) {
            if (this.attributes != undefined) {
                let existingUnits = this.attributes.get("units");
                if (existingUnits != undefined) {
                    if (existingUnits != units) {
                        //console.log('Units are not the same, changing units...');
                        this.attributes.set("units", units);
                    }
                }
            }
        }
    }
}
exports.PropertyScalar = PropertyScalar;
/**
 * The attributes may contain "units".
 * In the XML, an "array" node is a child of a "property" node.
 */
class PropertyArray extends xml_js_1.NumberArrayNode {
    /**
     * The tag name.
     */
    static tagName = "array";
    /**
     * @param attributes The attributes.
     * @param values The values.
     * @param delimiter The delimiter of the values (Optional - default will be ",").
     */
    constructor(attributes, values, delimiter) {
        super(attributes, PropertyArray.tagName, values, delimiter);
    }
    /**
     * This updates the units of the property. It does not do any unit conversion.
     * It simply updates the specified units of a property
     * @param units Updates the units of the property.
     */
    updateUnits(units) {
        // Check the units are the same and if not replace the units...
        if (units) {
            if (this.attributes != undefined) {
                let existingUnits = this.attributes.get("units");
                if (existingUnits != undefined) {
                    if (existingUnits != units) {
                        //console.log('Units are not the same, changing units...');
                        this.attributes.set("units", units);
                    }
                }
            }
        }
    }
}
exports.PropertyArray = PropertyArray;
/**
 * The attributes must contain "dictRef" which is a dictionary reference for a type of property.
 * In the XML, a "property" node has a "propertyList" parent and either a "scalar" or "array" or another type of child not yet implemented (there could be a "matrix" type).
 */
class Property extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "property";
    /**
     * The dictRef.
     */
    dictRef;
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, Property.tagName);
        let dictRef = attributes.get("dictRef");
        if (dictRef == undefined) {
            throw new Error('dictRef is undefined');
        }
        this.dictRef = dictRef;
        if (property) {
            this.nodes.set(0, property);
        }
    }
    /**
     * @returns The property.
     */
    getProperty() {
        return this.nodes.get(0);
    }
    /**
     * Set the property.
     * @param property The property.
     */
    setProperty(property) {
        this.nodes.set(0, property);
    }
}
exports.Property = Property;
/**
 * The Zero Potential Energy.
 * The child "scalar" node should have a "units" attribute (known units=[kJ/mol]).
 */
class ZPE extends Property {
    static dictRef = "me:ZPE";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.ZPE = ZPE;
/**
 * "me:frequenciesScaleFactor" property.
 */
class FrequenciesScaleFactor extends Property {
    static dictRef = "me:frequenciesScaleFactor";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.FrequenciesScaleFactor = FrequenciesScaleFactor;
/**
 * The vibration frequencies.
 * The child "array" node should have a "units" attribute (known units=[cm-1]).
 */
class VibFreqs extends Property {
    static dictRef = "me:vibFreqs";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.VibFreqs = VibFreqs;
/**
 * The rotation constants.
 * The child "array" node should have a "units" attribute (known units=[cm-1]).
 */
class RotConsts extends Property {
    static dictRef = "me:rotConsts";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.RotConsts = RotConsts;
/**
 * The Molecular Weight.
 * The child "scalar" node should have a "units" attribute (known units=[amu]).
 */
class MW extends Property {
    static dictRef = "me:MW";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.MW = MW;
/**
 * "me:imFreqs"
 */
class ImFreqs extends Property {
    static dictRef = "me:imFreqs";
    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes, property) {
        super(attributes, property);
    }
}
exports.ImFreqs = ImFreqs;
/**
 * In the XML, a "propertyList" node is a child node of a "molecule" node and has one or more "property" child node.
 * There can be no attributes.
 */
class PropertyList extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "propertyList";
    /**
     * The index.
     */
    index;
    /**
     * @param attributes The attributes.
     * @param properties The properties (optional).
     */
    constructor(attributes, properties) {
        super(attributes, PropertyList.tagName);
        this.index = new Map();
        if (properties) {
            properties.forEach(property => {
                this.nodes.set(this.nodes.size, property);
                this.index.set(property.dictRef, this.nodes.size - 1);
            });
        }
    }
    /**
     * @param dictRef The dictRef of the property.
     * @returns The property.
     */
    getProperty(dictRef) {
        let i = this.index.get(dictRef);
        if (i != undefined) {
            return this.nodes.get(i);
        }
        else {
            throw new Error('Property ' + dictRef + ' does not exist');
        }
    }
    /**
     * Set the property.
     * @param property The property.
     */
    setProperty(property) {
        let i = this.index.get(property.dictRef);
        if (i == undefined) {
            //console.log('Property ' + property.dictRef + ' does not exist, adding...');
            this.nodes.set(this.nodes.size, property);
            this.index.set(property.dictRef, this.nodes.size - 1);
        }
        else {
            console.log('Property ' + property.dictRef + ' already exists, updating...');
            this.nodes.set(i, property);
        }
    }
}
exports.PropertyList = PropertyList;
/**
 * In the XML, a "me:deltaEDown" node is a child node of a "me:energyTransferModel" node.
 * The attributes may include "bathGas", "units", "lower", "upper", and "stepsize".
 */
class DeltaEDown extends xml_js_1.NumberNode {
    /**
     * The tag name.
     */
    static tagName = "me:deltaEDown";
    /**
     * @param attributes The attributes.
     * @param units The units.
     */
    constructor(attributes, value) {
        super(attributes, DeltaEDown.tagName, value);
    }
    /**
     * @returns The bath gas of the DeltaEDown.
     */
    getBathGas() {
        if (this.attributes != undefined) {
            return this.attributes.get("bathGas");
        }
    }
    /**
     * @param bathGas The bath gas of the DeltaEDown.
     */
    setBathGas(bathGas) {
        if (this.attributes != undefined) {
            this.attributes.set("bathGas", bathGas);
        }
    }
    /**
     * @returns The units of the DeltaEDown.
     */
    getUnits() {
        if (this.attributes != undefined) {
            return this.attributes.get("units");
        }
    }
    /**
     * @returns The lower of the DeltaEDown.
     */
    getLower() {
        if (this.attributes != undefined) {
            return parseFloat((0, util_js_1.get)(this.attributes, "lower"));
        }
    }
    /**
     * @param lower The lower of the DeltaEDown.
     */
    setLower(lower) {
        if (this.attributes != undefined) {
            this.attributes.set("lower", lower.toString());
        }
    }
    /**
     * @returns The upper of the DeltaEDown.
     */
    getUpper() {
        if (this.attributes != undefined) {
            return parseFloat((0, util_js_1.get)(this.attributes, "upper"));
        }
    }
    /**
     * @param upper The upper of the DeltaEDown.
     */
    setUpper(upper) {
        if (this.attributes != undefined) {
            this.attributes.set("upper", upper.toString());
        }
    }
    /**
     * @returns The stepsize of the DeltaEDown.
     */
    getStepsize() {
        if (this.attributes != undefined) {
            return parseFloat((0, util_js_1.get)(this.attributes, "stepsize"));
        }
    }
    /**
     * @param stepsize The stepsize of the DeltaEDown.
     */
    setStepsize(stepsize) {
        if (this.attributes != undefined) {
            this.attributes.set("stepsize", stepsize.toString());
        }
    }
    /**
     * @param value The value of the DeltaEDown.
     */
    setValue(value) {
        this.value = value;
    }
}
exports.DeltaEDown = DeltaEDown;
/**
 * In the XML, a "me:energyTransferModel" node is a child node of a "molecule" node.
 * It may have:
 * One or more "me:deltaEDown" child nodes.
 * Additional child nodes might include "me:deltaEDownTExponent".
 */
class EnergyTransferModel extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "me:energyTransferModel";
    /**
     * @param attributes The attributes.
     * @param deltaEDowns The DeltaEDowns.
     */
    constructor(attributes, deltaEDowns) {
        super(attributes, EnergyTransferModel.tagName);
        if (deltaEDowns != undefined) {
            deltaEDowns.forEach(deltaEDown => {
                this.nodes.set(this.nodes.size, deltaEDown);
            });
        }
    }
    /**
     * @param index The index of the DeltaEDown to return.
     * @returns The DeltaEDown at the given index.
     */
    getDeltaEDown(index) {
        if (index < 0 || index >= this.nodes.size) {
            throw new Error('index out of range');
        }
        return this.nodes.get(index);
    }
    /**
     * Set the DeltaEDown at the given index.
     * @param index The index to set the DeltaEDown at.
     * @param deltaEDown The DeltaEDown to set at the index.
     */
    setDeltaEDown(index, deltaEDown) {
        this.nodes.set(index, deltaEDown);
    }
    /**
     * Add the DeltaEDowns.
     * @param deltaEDown The DeltaEDown.
     * @returns The index of the DeltaEDown added.
     */
    addDeltaEDown(deltaEDown) {
        this.nodes.set(this.nodes.size, deltaEDown);
        return this.nodes.size - 1;
    }
}
exports.EnergyTransferModel = EnergyTransferModel;
/**
 * In the XML, a "me:DOSCMethod" node is a child node of a "molecule" node.
 */
class DOSCMethod extends xml_js_1.TagWithAttributes {
    /**
     * The tag name.
     */
    static tagName = "me:DOSCMethod";
    /**
     * @param attributes The attributes.
     */
    constructor(attributes) {
        super(attributes, DOSCMethod.tagName);
    }
}
exports.DOSCMethod = DOSCMethod;
/**
 * In the XML, a "me:bondRef" node is a child node of a "me:ExtraDOSCMethod" node.
 */
class BondRef extends xml_js_1.StringNode {
    /**
     * The tag name.
     */
    static tagName = "me:bondRef";
    /**
     * @param attributes The attributes.
     * @param bondRef The bondRef.
     */
    constructor(attributes, bondRef) {
        super(attributes, BondRef.tagName, bondRef);
    }
}
exports.BondRef = BondRef;
/**
 * In the XML, a "me:PotentialPoint" node is a child node of a "me:HinderedRotorPotential" node.
 */
class PotentialPoint extends xml_js_1.TagWithAttributes {
    static tagName = "me:PotentialPoint";
    /**
     * @param attributes The attributes.
     */
    constructor(attributes) {
        super(attributes, PotentialPoint.tagName);
    }
}
exports.PotentialPoint = PotentialPoint;
/**
 * In the XML, a "me:HinderedRotorPotential" node is a child node of a "me:ExtraDOSCMethod" node.
 */
class HinderedRotorPotential extends xml_js_1.NodeWithNodes {
    static tagName = "me:HinderedRotorPotential";
    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {PotentialPoint[]} potentialPoints The PotentialPoints.
     */
    constructor(attributes, potentialPoints) {
        super(attributes, HinderedRotorPotential.tagName);
        potentialPoints.forEach(p => {
            this.nodes.set(this.nodes.size, p);
        });
    }
    /**
     * @returns The potential point with the given index.
     */
    getPotentialPoint(index) {
        return this.nodes.get(index);
    }
    /**
     * Set the potential point at the given index.
     * @param index The index to set the potential point at.
     * @param p The potential point to set at the index.
     */
    setPotentialPoints(index, p) {
        this.nodes.set(index, p);
    }
    /**
     * Add the potential point.
     * @param p The potential point.
     * @returns The index of the potential point added.
     */
    addPotentialPoint(p) {
        this.nodes.set(this.nodes.size, p);
        return this.nodes.size - 1;
    }
}
exports.HinderedRotorPotential = HinderedRotorPotential;
/**
 * In the XML, a "me:periodicity" node is a child node of a "me:ExtraDOSCMethod" node.
 */
class Periodicity extends xml_js_1.NumberNode {
    static tagName = "me:periodicity";
    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes, value) {
        super(attributes, Periodicity.tagName, value);
    }
}
exports.Periodicity = Periodicity;
/**
 * In the XML, a "me:ExtraDOSCMethod" node is a child node of a "molecule" node.
 */
class ExtraDOSCMethod extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "me:ExtraDOSCMethod";
    /**
     * @param attributes The attributes.
     * @param bondRef The bondRef.
     * @param hinderedRotorPotential The HinderedRotorPotential.
     * @param periodicity The Periodicity.
     */
    constructor(attributes, bondRef, hinderedRotorPotential, periodicity) {
        super(attributes, ExtraDOSCMethod.tagName);
        if (bondRef) {
            this.nodes.set(this.nodes.size, bondRef);
        }
        if (hinderedRotorPotential) {
            this.nodes.set(this.nodes.size, hinderedRotorPotential);
        }
        if (periodicity) {
            this.nodes.set(this.nodes.size, periodicity);
        }
    }
    /**
     * @returns The bondRef.
     */
    getBondRef() {
        return this.nodes.get(0);
    }
    /**
     * Set the bondRef.
     * @param bondRef The bondRef.
     */
    setBondRef(bondRef) {
        this.nodes.set(0, bondRef);
    }
    /**
     * @returns The hindered rotor potential of the molecule.
     */
    getHinderedRotorPotential() {
        return this.nodes.get(1);
    }
    /**
     * Set the hindered rotor potential.
     * @param hinderedRotorPotential The hindered rotor potential.
     */
    setHinderedRotorPotential(hinderedRotorPotential) {
        this.nodes.set(1, hinderedRotorPotential);
    }
    /**
     * @returns The periodicity of the molecule.
     */
    getPeriodicity() {
        return this.nodes.get(2);
    }
    /**
     * Set the periodicity.
     * @param periodicity The periodicity.
     */
    setPeriodicity(periodicity) {
        this.nodes.set(2, periodicity);
    }
}
exports.ExtraDOSCMethod = ExtraDOSCMethod;
/**
 * The attributes may include "units".
 * In the XML, a "me:reservoirSize" node is a child node of a "molecule" node.
 */
class ReservoirSize extends xml_js_1.NumberNode {
    /**
     * The tag name.
     */
    static tagName = "me:reservoirSize";
    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes, value) {
        super(attributes, ReservoirSize.tagName, value);
    }
}
exports.ReservoirSize = ReservoirSize;
/**
 * The attributes may include "description" and "active" (and possibly others).
 * In the XML, a "molecule" node is a child node of a "moleculeList" node.
 */
class Molecule extends xml_js_1.NodeWithNodes {
    /**
     * The tag name.
     */
    static tagName = "molecule";
    /**
     * The index. The keys are the tag names and the values are the node indexes.
     */
    index;
    // The molecule ID.
    id;
    /**
     * Create a molecule.
     * @param attributes The attributes. If there is no "id" key an error will be thrown.
     * Additional attributes may include "description" and "active" (and posibly others), but these do not exist for all molecules.
     * @param atoms The atom or atoms.
     * @param bonds The bonds.
     * @param properties The properties.
     * @param energyTransferModel The energy transfer model.
     * @param dOSCMethod The method for calculating density of states.
     * @param extraDOSCMethod The extra method for calculating density of states.
     * @param reservoirSize The reservoir size.
     */
    constructor(attributes, atoms, bonds, properties, energyTransferModel, dOSCMethod, extraDOSCMethod, reservoirSize) {
        super(attributes, Molecule.tagName);
        this.index = new Map();
        let id = attributes.get("id");
        if (id == undefined) {
            throw new Error('id is undefined');
        }
        this.id = id;
        let i = 0;
        // Atoms
        if (atoms) {
            this.nodes.set(i, atoms);
            if (atoms instanceof Atom) {
                this.index.set(Atom.tagName, i);
            }
            else {
                this.index.set(AtomArray.tagName, i);
            }
            i++;
        }
        // Bonds
        if (bonds) {
            this.nodes.set(i, bonds);
            this.index.set(BondArray.tagName, i);
            i++;
        }
        // Properties
        if (properties) {
            this.nodes.set(i, properties);
            this.index.set(PropertyList.tagName, i);
            i++;
        }
        // EnergyTransferModel
        if (energyTransferModel) {
            this.nodes.set(i, energyTransferModel);
            this.index.set(EnergyTransferModel.tagName, i);
            i++;
        }
        // DOSCMethod
        if (dOSCMethod) {
            this.nodes.set(i, dOSCMethod);
            this.index.set(DOSCMethod.tagName, i);
        }
        // ExtraDOSCMethod
        if (extraDOSCMethod) {
            this.nodes.set(i, extraDOSCMethod);
            this.index.set(ExtraDOSCMethod.tagName, i);
        }
        // ReservoirSize
        if (reservoirSize) {
            this.nodes.set(i, reservoirSize);
            this.index.set(ReservoirSize.tagName, i);
        }
    }
    /**
     * Get the description of the molecule.
     * @returns The description of the molecule, or undefined if it is not set.
     */
    getDescription() {
        if (this.attributes != undefined) {
            return this.attributes.get("description");
        }
    }
    /**
     * Set the description of the molecule.
     * @param description The description of the molecule.
     */
    setDescription(description) {
        if (this.attributes != undefined) {
            this.attributes.set("description", description);
        }
    }
    /**
     * Get the active status of the molecule.
     * @returns The active status of the molecule, or undefined if it is not set.
     */
    getActive() {
        if (this.attributes != undefined) {
            let active = this.attributes.get("active");
            if (active != undefined) {
                if (active == "true") {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    /**
     * Set the active status of the molecule.
     * @param active The active status of the molecule.
     */
    setActive(active) {
        if (this.attributes != undefined) {
            this.attributes.set("active", active.toString());
        }
    }
    /**
     * Get a label for the molecule which includes the is and any description and whether active.
     * @returns A label for the molecule detailing the attributes of the XML element (including id,
     * and possibly including description and whether active).
     */
    getLabel() {
        let label = this.id;
        let description = this.getDescription();
        if (description != undefined) {
            label += " (" + description + ")";
        }
        let active = this.getActive();
        if (active) {
            label += " (active)";
        }
        return label;
    }
    /**
     * @returns A comma and space separated string of the attributes of the molecule.
     */
    getAttributesAsString() {
        if (this.attributes == undefined) {
            return "";
        }
        return Array.from(this.attributes, ([key, value]) => `${key}=\"${value}\"`).join(', ');
    }
    /**
     * @returns The properties of the molecule.
     */
    getProperties() {
        let i = this.index.get(PropertyList.tagName);
        if (i == undefined) {
            i = this.index.get(Property.tagName);
            if (i == undefined) {
                return undefined;
            }
            else {
                return this.nodes.get(i);
            }
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * @param properties The properties.
     */
    setProperties(properties) {
        let i = this.index.get(PropertyList.tagName);
        if (i == undefined) {
            this.index.set(PropertyList.tagName, this.nodes.size);
            this.addNode(properties);
        }
        else {
            this.nodes.set(i, properties);
        }
    }
    /**
     * Get a property.
     * @param dictRef The dictRef of the property.
     * @returns The property.
     */
    getProperty(dictRef) {
        let properties = this.getProperties();
        if (properties != undefined) {
            if (properties instanceof PropertyList) {
                //console.log('PropertyList');
                return properties.getProperty(dictRef);
            }
            else {
                //console.log('Property');
                return properties;
            }
        }
    }
    /**
     * Set the property.
     * @param property The property.
     */
    setProperty(property) {
        let properties = this.getProperties();
        if (properties != undefined) {
            if (properties instanceof PropertyList) {
                properties.setProperty(property);
            }
            else {
                this.setProperties(properties);
            }
        }
        else {
            this.setProperties(property);
        }
    }
    /**
     * @returns The atoms of the molecule.
     */
    getAtoms() {
        let i = this.index.get(Atom.tagName);
        if (i == undefined) {
            i = this.index.get(AtomArray.tagName);
            if (i == undefined) {
                return undefined;
            }
            else {
                return this.nodes.get(i);
            }
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * @returns The bonds of the molecule.
     */
    getBonds() {
        let i = this.index.get(BondArray.tagName);
        if (i == undefined) {
            return undefined;
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * @returns The energy transfer model of the molecule.
     */
    getEnergyTransferModel() {
        let i = this.index.get(EnergyTransferModel.tagName);
        if (i == undefined) {
            return undefined;
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * Set the energy transfer model.
     * @param energyTransferModel The energy transfer model.
     */
    setEnergyTransferModel(energyTransferModel) {
        let i = this.index.get(EnergyTransferModel.tagName);
        if (i == undefined) {
            this.index.set(EnergyTransferModel.tagName, this.nodes.size);
            this.addNode(energyTransferModel);
        }
        else {
            this.nodes.set(i, energyTransferModel);
        }
    }
    /**
     * @returns The DOSC method of the molecule.
     */
    getDOSCMethod() {
        let i = this.index.get(DOSCMethod.tagName);
        if (i == undefined) {
            return undefined;
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * Set the DOSC method.
     * @param dOSCMethod The DOSC method.
     */
    setDOSCMethod(dOSCMethod) {
        let i = this.index.get(DOSCMethod.tagName);
        if (i == undefined) {
            this.index.set(DOSCMethod.tagName, this.nodes.size);
            this.addNode(dOSCMethod);
        }
        else {
            this.nodes.set(i, dOSCMethod);
        }
    }
    /**
     * @returns The extra DOSC method of the molecule.
     */
    getExtraDOSCMethod() {
        let i = this.index.get(ExtraDOSCMethod.tagName);
        if (i == undefined) {
            return undefined;
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * Set the extra DOSC method.
     * @param extraDOSCMethod The extra DOSC method.
     */
    setExtraDOSCMethod(extraDOSCMethod) {
        let i = this.index.get(ExtraDOSCMethod.tagName);
        if (i == undefined) {
            this.index.set(ExtraDOSCMethod.tagName, this.nodes.size);
            this.addNode(extraDOSCMethod);
        }
        else {
            this.nodes.set(i, extraDOSCMethod);
        }
    }
    /**
     * @returns The reservoir size of the molecule.
     */
    getReservoirSize() {
        let i = this.index.get(ReservoirSize.tagName);
        if (i == undefined) {
            return undefined;
        }
        else {
            return this.nodes.get(i);
        }
    }
    /**
     * Set the reservoir size.
     * @param reservoirSize The reservoir size.
     */
    setReservoirSize(reservoirSize) {
        let i = this.index.get(ReservoirSize.tagName);
        if (i == undefined) {
            this.index.set(ReservoirSize.tagName, this.nodes.size);
            this.addNode(reservoirSize);
        }
        else {
            this.nodes.set(i, reservoirSize);
        }
    }
    /**
     * Get the ZPE value of the molecule.
     */
    getEnergy() {
        let p = this.getProperty(ZPE.dictRef);
        if (p == undefined) {
            console.log(this.toString());
            throw new Error('ZPE property not found');
            //return 0;
        }
        return p.getProperty().value;
    }
}
exports.Molecule = Molecule;
//# sourceMappingURL=molecule.js.map