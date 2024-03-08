import {
    TagWithAttributes, NodeWithNodes, NumberArrayNode, NumberNode, StringNode
} from './xml.js';

/**
 * A class for representing an atom.
 * @param attributes The attributes.
 * If there is no "id" or "elementType" key an error will be thrown.
 */
export class Atom extends TagWithAttributes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "atom";

    /**
     * @param attributes The attributes. If there is no "id" or "elementType" key an error will be thrown.
     */
    constructor(attributes: Map<string, string>) {
        super(attributes, Atom.tagName);
        let id: string | undefined = attributes.get("id");
        if (id == undefined) {
            console.warn(Atom.tagName + ' id attribute is undefined');
        }
        let elementType: string | undefined = attributes.get("elementType");
        if (elementType == undefined) {
            console.warn(Atom.tagName + ' elementType attribute is undefined');
        }
    }

    /**
     * @returns The id of the atom.
     */
    get id(): string {
        return this.attributes.get("id") as string;
    }

    /**
     * @returns The element type of the atom.
     */
    get elementType(): string {
        return this.attributes.get("elementType") as string;
    }
}

/**
 * A class for representing an atomArray.
 */
export class AtomArray extends NodeWithNodes {

    /**
    * The tag name.
    */
    static readonly tagName: string = "atomArray";

    /**
     * 
     * @param attributes The attributes.
     * @param atoms The atoms.
     */
    constructor(attributes: Map<string, string>, atoms: Atom[]) {
        super(attributes, AtomArray.tagName);
        atoms.forEach(atom => {
            this.nodes.set(this.nodes.size, atom);
        });
    }
}

/**
 * A class for representing an atomic bond - a bond beteen two atoms.
 */
export class Bond extends TagWithAttributes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "bond";

    /**
     * @param {Map<string, string>} attributes The attributes.
     */
    constructor(attributes: Map<string, string>) {
        super(attributes, Bond.tagName);
    }
}

/**
 * A class for representing a bondArray.
 */
export class BondArray extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "bondArray";

    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {Map<string, Bond>} bonds A Map of bonds with keys as ids.
     */
    constructor(attributes: Map<string, string>, bonds: Bond[]) {
        super(attributes, BondArray.tagName);
        bonds.forEach(bond => {
            this.nodes.set(this.nodes.size, bond);
        });
    }
}

/**
 * A class for representing a property scalar.
 */
export class PropertyScalar extends NumberNode {

    /**
     * The tag name.
     */
    static readonly tagName: string = "scalar";

    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes: Map<string, string>, value: number) {
        super(attributes, PropertyScalar.tagName, value);
    }
}

/**
 * A class for representing an property array.
 */
export class PropertyArray extends NumberArrayNode {

    /**
     * The tag name.
     */
    static readonly tagName: string = "array";

    /**
     * @param attributes The attributes.
     * @param values The values.
     * @param delimiter The delimiter of the values (Optional - default will be ",").
     */
    constructor(attributes: Map<string, string>, values: number[], delimiter?: string) {
        super(attributes, PropertyArray.tagName, values, delimiter);
    }
}

/**
 * A class for representing a property.
 */
export class Property extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "property";

    /**
     * @param attributes The attributes.
     * @param property The property.
     */
    constructor(attributes: Map<string, string>, property: PropertyScalar | PropertyArray) {
        super(attributes, Property.tagName);
        this.nodes.set(0, property);
    }

    /**
     * @returns The property.
     */
    getProperty(): PropertyScalar | PropertyArray {
        return this.nodes.get(0) as PropertyScalar | PropertyArray;
    }
}

/**
 * A class for representing a propertyArray.
 */
export class PropertyList extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "propertyList";

    /**
     * The properties.
     */
    properties: Map<string, Property>;

    /**
     * @param attributes The attributes.
     * @param properties A Map of properties with keys as dictRefs.
     */
    constructor(attributes: Map<string, string>, properties: Map<string, Property>) {
        super(attributes, PropertyList.tagName);
        this.properties = properties;
        properties.forEach(property => {
            this.nodes.set(this.nodes.size, property);
        });
    }
}

/**
 * Represents the deltaEDown class.
 */
export class DeltaEDown extends NumberNode {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:deltaEDown";

    /**
     * @param attributes The attributes.
     * @param units The units.
     */
    constructor(attributes: Map<string, string>, value: number) {
        super(attributes, DeltaEDown.tagName, value);
    }
}

/**
 * A class for representing an energy transfer model.
 */
export class EnergyTransferModel extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:energyTransferModel";

    /**
     * @param attributes The attributes.
     * @param deltaEDowns The DeltaEDowns.
     */
    constructor(attributes: Map<string, string>, deltaEDowns: DeltaEDown[]) {
        super(attributes, EnergyTransferModel.tagName);
        deltaEDowns.forEach(deltaEDown => {
            this.nodes.set(this.nodes.size, deltaEDown);
        });
    }
}

/**
 * A class for representing a method for calculating the density of states.
 */
export class DOSCMethod extends TagWithAttributes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:DOSCMethod";

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>) {
        super(attributes, DOSCMethod.tagName);
    }
}

/**
 * A class for representing a bondRef.
 */
export class BondRef extends StringNode {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:bondRef";

    /**
     * @param attributes The attributes.
     * @param bondRef The bondRef.
     */
    constructor(attributes: Map<string, string>, bondRef: string) {
        super(attributes, BondRef.tagName, bondRef);
    }
}

/**
 * A class for representing a PotentialPoint.
 */
export class PotentialPoint extends TagWithAttributes {

    static readonly tagName: string = "me:PotentialPoint";

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>) {
        super(attributes, PotentialPoint.tagName);
    }
}

/**
 * A class for representing a HinderedRotorPotential.
 */
export class HinderedRotorPotential extends NodeWithNodes {

    static readonly tagName: string = "me:HinderedRotorPotential";

    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {PotentialPoint[]} potentialPoints The PotentialPoints.
     */
    constructor(attributes: Map<string, string>, potentialPoints: PotentialPoint[]) {
        super(attributes, HinderedRotorPotential.tagName);
        potentialPoints.forEach(p => {
            this.nodes.set(this.nodes.size, p);
        });
    }

}

/**
 * A class for representing a Periodicity.
 */
export class Periodicity extends NumberNode {

    static readonly tagName: string = "me:periodicity";

    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes: Map<string, string>, value: number) {
        super(attributes, Periodicity.tagName, value);
    }
}

/**
 * A class for representing the extra DOSC method.
 */
export class ExtraDOSCMethod extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:ExtraDOSCMethod";

    /**
     * @param attributes The attributes.
     * @param bondRef The bondRef.
     * @param hinderedRotorPotential The HinderedRotorPotential.
     * @param periodicity The Periodicity.
     */
    constructor(attributes: Map<string, string>, bondRef: BondRef | undefined,
        hinderedRotorPotential: HinderedRotorPotential | undefined,
        periodicity: Periodicity | undefined) {
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
}

/**
 * A class for representing a reservoir size.
 */
export class ReservoirSize extends NumberNode {

    /**
     * The tag name.
     */
    static readonly tagName: string = "me:reservoirSize";

    /**
     * @param attributes The attributes.
     * @param value The value.
     */
    constructor(attributes: Map<string, string>, value: number) {
        super(attributes, ReservoirSize.tagName, value);
    }
}


/**
 * A class for representing a molecule.
 */
export class Molecule extends NodeWithNodes {

    /**
     * The tag name.
     */
    static readonly tagName: string = "molecule";

    /**
     * The energy dictRef.
     */
    static readonly energyDictRef: string = "me:ZPE";

    /**
     * The rotation constants dictRef.
     */
    //static readonly rotConstsDictRef: string = 'me:rotConsts';

    /**
     * The vibration frequencies dictRef.
     */
    //static readonly vibFreqsDictRef: string = 'me:vibFreqs';

    /**
     * The index.
     */
    index: Map<string, number> = new Map();

    // The molecule ID.
    id: string;

    /**
     * Create a molecule.
     * @param attributes The attributes. If there is no "id" key an error will be thrown.
     * Additional attributes may include "description" and "active" (and posibly others), but these do not exist for all molecules.
     * @param atoms The atoms.
     * @param bonds The bonds.
     * @param properties The properties.
     * @param energyTransferModel The energy transfer model.
     * @param dOSCMethod The method for calculating density of states.
     * @param extraDOSCMethod The extra method for calculating density of states.
     * @param reservoirSize The reservoir size.
     */
    constructor(
        attributes: Map<string, string>,
        atoms: Atom | AtomArray | undefined,
        bonds: Bond | undefined,
        properties: PropertyList | Property | undefined,
        energyTransferModel?: EnergyTransferModel,
        dOSCMethod?: DOSCMethod,
        extraDOSCMethod?: ExtraDOSCMethod,
        reservoirSize?: ReservoirSize) {
        super(attributes, Molecule.tagName);
        let id: string | undefined = this.attributes.get("id");
        if (id == undefined) {
            throw new Error('id is undefined');
        }
        this.id = id;
        let i: number = 0;
        // Atoms
        if (atoms) {
            this.nodes.set(i, atoms);
            if (atoms instanceof Atom) {
                this.index.set(Atom.tagName, i);
            } else {
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
        if (properties == undefined) {
            throw new Error('properties is undefined');
        }
        this.nodes.set(i, properties);
        this.index.set(PropertyList.tagName, i);
        i++;
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
     * @return The id of the molecule.
     */
    getID(): string {
        return this.attributes.get("id") as string;
    }

    /**
     * Gets the description of the molecule.
     * @returns The description of the molecule, or undefined if it is not set.
     */
    getDescription(): string | undefined {
        return this.attributes.get("description");
    }

    /**
     * Gets the active status of the molecule.
     * @returns The active status of the molecule, or undefined if it is not set.
     */
    getActive(): boolean | undefined {
        let active = this.attributes.get("active");
        if (active != undefined) {
            return true;
        }
        return active;
    }

    /**
     * @returns A label for the molecule detailing the attributes of the XML element (including id, 
     * and possibly including description and whether active).
     */
    getLabel(): string {
        let label: string = this.getID();
        let description: string | undefined = this.getDescription();
        if (description) {
            label += " (" + description + ")";
        }
        let active: boolean | undefined = this.getActive();
        if (active) {
            label += " (active)";
        }
        return label;
    }

    /**
     * @returns A string of the attributes of the molecule.
     */
    getAttributesAsString(): string {
        return Array.from(this.attributes, ([key, value]) => `${key}: ${value}`).join(', ');
    }

    /**
     * @returns The properties of the molecule.
     */
    getProperties(): PropertyList | Property | undefined {
        let i: number | undefined = this.index.get(PropertyList.tagName);
        if (i == undefined) {
            i = this.index.get(Property.tagName);
            if (i == undefined) {
                return undefined;
            } else {
                return this.nodes.get(i) as Property;
            }
        } else {
            return this.nodes.get(i) as PropertyList;
        }
    }

    /**
     * Get a property scalar.
     * @param {string} dictRef The dictRef of the property.
     * @returns {number | undefined} The scalar property.
     */
    getPropertyScalar(dictRef: string): number | undefined {
        let properties: PropertyList | Property | undefined = this.getProperties();
        if (properties == undefined) {
            return undefined;
        } else if (properties instanceof PropertyList) {
            let property: Property | undefined = properties.properties.get(dictRef);
            if (property == undefined) {
                return undefined;
            }
            return (property.getProperty() as PropertyScalar).value;
        } else {
            let scalar: PropertyScalar | undefined = (properties as Property).getProperty() as PropertyScalar;
            if (scalar == undefined) {
                return undefined;
            }
            return scalar.value;
        }
    }

    /**
     * @returns {number} The energy of the molecule or zero if the energy is not set or defined.
     */
    getEnergy(): number {
        let p: number | undefined = this.getPropertyScalar(Molecule.energyDictRef);
        if (p == undefined) {
            return 0;
        }
        return p;
    }

    /**
     * Set the scalar property.
     * @param dictRef The dictRef of the property.
     * @param value The value of the property.
     * @param units The units of the property (optional).
     */
    setPropertyScalar(dictRef: string, value: number, units?: string) {
        let properties: PropertyList | Property | undefined = this.getProperties();
        if (properties == undefined) {
            this.nodes.set(this.nodes.size, this.createPropertyScalar(dictRef, value, units));
            this.index.set(Property.tagName, this.nodes.size);
        } else if (properties instanceof Property) {
            if (properties.getProperty().attributes.get(dictRef)) {
                (properties.getProperty() as PropertyScalar).value = value;
            } else {
                let plmap: Map<string, Property> = new Map();
                plmap.set(dictRef, properties);
                plmap.set(dictRef, this.createPropertyScalar(dictRef, value, units));
                properties = new PropertyList(new Map(), plmap);
            }
        } else {
            let scalarProperty: Property | undefined = properties.properties.get(dictRef)
            if (scalarProperty == undefined) {
                properties.properties.set(dictRef, this.createPropertyScalar(dictRef, value, units));
            } else {
                (scalarProperty.getProperty() as PropertyScalar).value = value;
            }
        }
    }

    /**
     * @param dictRef The dictRef of the property.
     * @param value The value of the property.
     * @param units The units of the property.
     * @returns A scalar property.
     */
    createPropertyScalar(dictRef: string, value: number, units?: string): Property {
        let propertyAttributes: Map<string, string> = new Map();
        propertyAttributes.set("dictRef", dictRef);
        let attribs: Map<string, string> = new Map();
        if (units) {
            attribs.set("units", units);
        }
        return new Property(propertyAttributes, new PropertyScalar(attribs, value));
    }

    /**
      * Set the scalar property.
      * @param dictRef The dictRef of the property.
      * @param values The values of the property.
      * @param units The units of the property.
      */
    setPropertyArray(dictRef: string, values: number[], units?: string) {
        let properties: PropertyList | Property | undefined = this.getProperties();
        if (properties == undefined) {
            this.nodes.set(this.nodes.size, this.createPropertyArray(dictRef, values, units));
            this.index.set(Property.tagName, this.nodes.size);
        } else if (properties instanceof Property) {
            if (properties.getProperty().attributes.get(dictRef)) {
                (properties.getProperty() as PropertyArray).values = values;
            } else {
                let plmap: Map<string, Property> = new Map();
                plmap.set(dictRef, properties);
                plmap.set(dictRef, this.createPropertyArray(dictRef, values, units));
                properties = new PropertyList(new Map(), plmap);
            }
        } else {
            let scalarProperty: Property | undefined = properties.properties.get(dictRef)
            if (scalarProperty == undefined) {
                properties.properties.set(dictRef, this.createPropertyArray(dictRef, values, units));
            } else {
                (scalarProperty.getProperty() as PropertyArray).values = values;
            }
        }
    }

    /**
     * @param dictRef The dictRef of the property.
     * @param values The values of the property.
     * @param units The units of the property.
     * @returns A scalar property.
     */
    createPropertyArray(dictRef: string, values: number[], units?: string): Property {
        let propertyAttributes: Map<string, string> = new Map();
        propertyAttributes.set("dictRef", dictRef);
        let attribs: Map<string, string> = new Map();
        if (units) {
            attribs.set("units", units);
        }
        return new Property(propertyAttributes, new PropertyArray(attribs, values));
    }

    /**
     * Set the Energy of the molecule.
     * @param energy The energy of the molecule in kcal/mol.
     */
    setEnergy(energy: number) {
        this.setPropertyScalar(Molecule.energyDictRef, energy);
    }

    /**
     * Set the RotationConstants of the molecule.
     * @param rotConsts The rotation constants of the molecule.
     */
    /*
    setRotConsts(rotConsts: number[]): void {
        this.setPropertyArray(Molecule.rotConstsDictRef, rotConsts);
    }
    */

    /**
     * Set the vibration frequencies of the molecule.
     * @param vibFreqs The vibration frequencies of the molecule.
     */
    /*
    setVibFreqs(vibFreqs: number[]): void {
        this.setPropertyArray(Molecule.vibFreqsDictRef, vibFreqs);
    }
    */

    /**
     * Get a property array.
     * @param dictRef The dictRef of the property.
     * @returns The array property.
     */
    getPropertyArray(dictRef: string): number[] | undefined {
        let properties: PropertyList | Property | undefined = this.getProperties();
        if (properties == undefined) {
            return undefined;
        } else if (properties instanceof PropertyList) {
            let property: Property | undefined = properties.properties.get(dictRef);
            if (property == undefined) {
                return undefined;
            }
            return (property.getProperty() as PropertyArray).values;
        } else {
            if ((properties as Property).getProperty().tagName == dictRef) {
                let pA: PropertyArray | undefined = (properties as Property).getProperty() as PropertyArray;
                if (pA == undefined) {
                    return undefined;
                }
                return pA.values;
            } else {
                return undefined;
            }
        }
    }

    /**
     * Get the RotationConstants of the molecule.
     * @returns The RotationConstants of the molecule.
     */
    /*
    getRotConsts(): number[] | undefined {
        return this.getPropertyArray(Molecule.rotConstsDictRef);
    }
    */

    /**
     * Get the vibration frequencies of the molecule.
     * @returns The vibration frequencies of the molecule.
     */
    /*
    getVibFreqs(): number[] | undefined {
        return this.getPropertyArray(Molecule.vibFreqsDictRef);
    }
    */
}

/**
 * A class for representing a MoleculeRef.
 */
export class MoleculeRef extends NodeWithNodes {

    /**
     * A reference to the molecules.
     */
    molecules: Map<string, Molecule>

    /**
     * @param attributes The attributes.
     * @param tagName The tag name.
     * @param molecule The molecule (an abbreviated molecule).
     * @param molecules The molecules.
     */
    constructor(attributes: Map<string, string>, tagName: string, molecule: TagWithAttributes,
        molecules: Map<string, Molecule>) {
        super(attributes, tagName);
        this.nodes.set(0, molecule);
        this.molecules = molecules;
    }

    /**
     * A convenience method to get the molecule abbreviation.
     * @returns The molecule abbreviation.
     */
    getMoleculeAbb(): TagWithAttributes {
        return this.nodes.get(0) as TagWithAttributes;
    }

    /**
     * A convenience method to get the ref (the molecule ID) of the molecule.
     * @returns The ref of the molecule.
     */
    getRef(): string {
        let s: string | undefined = this.getMoleculeAbb().attributes.get("ref");
        if (s == null) {
            console.log(this.getMoleculeAbb().toString());
            throw new Error('Attribute "ref" is undefined.');
        }
        return s;
    }

    /**
     * A convenience method to get the molecule.
     * @returns {Molecule} The molecule.
     * @throws An error if the molecule is not found.
     */
    getMolecule(): Molecule {
        let ref: string = this.getRef();
        let molecule: Molecule | undefined = this.molecules.get(ref);
        if (molecule == null) {
            throw new Error(`Molecule with ref ${ref} not found in molecules`);
        }
        return molecule;
    }
}