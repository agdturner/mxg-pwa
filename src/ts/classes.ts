import {
    getTag, Tag
} from "./xml";

/**
 * A class for representing A Tag with attributes.
 * @param {Map<string, string>} attributes The attributes.
 */
export abstract class TagWithAttributes extends Tag {

    /**
     * The attributes.
     */
    attributes: Map<string, string>;

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, tagName: string) {
        super(tagName);
        this.attributes = attributes;
    }

    /**
     * @returns A string representation.
     */
    toString(): string {
        let r = this.tagName + `(`;
        this.attributes.forEach((value, key) => {
            r += `${key}(${value}), `;
        });
        return r;
    }

    /**
     * Get the XML representation.
     * @param {string} padding The padding (Optional).
     * @returns An XML representation.
     */
    toXML(padding?: string): string {
        return getTag("", this.tagName, this.attributes, padding, false);
    }
}

/**
 * A class for representing a TagWithAttributes with a number as a value.
 */
export class NumberNode extends TagWithAttributes {

    /**
     * The value.
     */
    value: number;

    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {number} value The value.
     */
    constructor(attributes: Map<string, string>, tagName: string, value: number) {
        super(attributes, tagName);
        this.value = value;
    }

    /**
     * @returns A string representation.
     */
    toString(): string {
        return super.toString() + `, ${this.value.toString()})`;
    }

    /**
     * Get the XML representation.
     * @param {string} padding The padding (Optional).
     * @returns An XML representation.
     */
    override toXML(padding?: string): string {
        return getTag(this.value.toString().trim(), this.tagName, this.attributes, padding, false);
    }
}

/**
 * A class for representing a TagWithAttributes with an array of numbers as a value.
 */
export class NumberArrayNode extends TagWithAttributes {

    /**
     * The values.
     */
    values: number[];

    /**
     * The delimiter of the values.
     */
    delimiter: string = ",";

    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {string} tagName The tag name.
     * @param {number[]} values The values.
     * @param {string} delimiter The delimiter of the values (Optional - default will be ",").
     */
    constructor(attributes: Map<string, string>, tagName: string, values: number[], delimiter?: string) {
        super(attributes, tagName);
        this.values = values;
        if (delimiter) {
            this.delimiter = delimiter;
        }
    }

    /**
     * @returns A string representation.
     */
    toString(): string {
        return super.toString() + `, ${this.values.toString()})`;
    }

    /**
     * Set the delimiter.
     * @param {string} delimiter The delimiter.
     */
    setDelimiter(delimiter: string) {
        this.delimiter = delimiter;
    }

    /**
     * Get the XML representation.
     * @param {string} padding The padding (Optional).
     * @returns An XML representation.
     */
    toXML(padding?: string): string {
        return getTag(this.values.toString().replaceAll(",", this.delimiter), this.tagName, this.attributes, padding, false);
    }
}

/**
 * A class for representing attributes with attributes.
 */
export class NodeWithNodes extends TagWithAttributes {

    /**
     * The index contains the positions of values. If index[0] = 0 means that values[0] is the first thing to appear.
     * If index[1] = 4 would mean that the second and thrid things must be nodes[0] and nodes[1] respectively and that 
     * values[1] is the second thing to appear.
     */
    nodes: Map<number, TagWithAttributes | NodeWithNodes>;
    
    /**
     * @param {Map<string, string>} attributes The attributes.
     * @param {string} tagName The tag name.
     */
    constructor(attributes: Map<string, string>, tagName: string) {
        super(attributes, tagName);
        this.nodes = new Map();
    }

    /**
     * Add a node.
     * @param {TagWithAttributes | NodeWithNodes} node The node.
     */
    addNode(node: TagWithAttributes | NodeWithNodes) : void {
        this.nodes.set(this.nodes.size, node);
    }

    /**
     * @returns A string representation.
     */
    toString(): string {
        let s = super.toString();
        this.nodes.forEach((v, k) => {
            s += `, ${v.toString()}`;
        });
        return s + ")";
    }

    /**
     * Get the XML representation.
     * @param {string} pad The pad (Optional).
     * @param {string} padding The padding (Optional).
     * @returns An XML representation.
     */
    toXML(pad?: string, padding?: string): string {
        let padding1: string;
        if (pad != undefined && padding != undefined) {
            padding1 = padding + pad;
        }
        let s: string = "";
        this.nodes.forEach((v) => {
            if (v instanceof TagWithAttributes) {
                s += v.toXML(padding1);
            } else {
                s += (v as NodeWithNodes).toXML(pad, padding1);
            }
            s += v.toXML(padding1);
        });
        return getTag(s, this.tagName, this.attributes, padding, false);
    }
}