import { NodeWithNodes, StringNode } from './xml.js';

/**
 * DC Title.
 */
export class DCTitle extends StringNode {

    /**
     * Tag name.
     */
    public static tagName = 'dc:title';

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, value: string) {
        super(attributes, DCTitle.tagName, value);
    }
}

/**
 * DC Source.
 */
export class DCSource extends StringNode {

    /**
     * Tag name.
     */
    public static tagName = 'dc:source';

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, value: string) {
        super(attributes, DCSource.tagName, value);
    }
}

/**
 * DC Creator.
 */
export class DCCreator extends StringNode {

    /**
     * Tag name.
     */
    public static tagName = 'dc:creator';

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, value: string) {
        super(attributes, DCCreator.tagName, value);
    }
}

/**
 * DC Date.
 */
export class DCDate extends StringNode {

    /**
     * Tag name.
     */
    public static tagName = 'dc:date';

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, value: string) {
        super(attributes, DCDate.tagName, value);
    }
}

/**
 * DC Contributor.
 */
export class DCContributor extends StringNode {

    /**
     * Tag name.
     */
    public static tagName = 'dc:contributor';

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, value: string) {
        super(attributes, DCContributor.tagName, value);
    }
}

/**
 * In the XML, the "metadata" element is a child of the "mesmer" element.
 * Attributes include:
 * xmlns:dc
 * Child elements include:
 * dc:title
 * dc:source
 * dc:creator
 * dc:date
 * dc:contributor
 */
export class MetadataList extends NodeWithNodes {

    /**
     * Tag name.
     */
    public static tagName = 'metadataList';

    /**
     * To look up nodes by type.
     */
    index: Map<string, number>;

    /**
     * @param attributes The attributes.
     */
    constructor(attributes: Map<string, string>, title?: DCTitle, source?: DCSource, creator?: DCCreator, date?: DCDate, 
        contributor?: DCContributor) {
        super(attributes, MetadataList.tagName);
        this.index = new Map<string, number>();
        if (title) {
            this.index.set(DCTitle.tagName, this.nodes.size);
            this.addNode(title);
        }
        if (source) {
            this.index.set(DCSource.tagName, this.nodes.size);
            this.addNode(source);
        }
        if (creator) {
            this.index.set(DCCreator.tagName, this.nodes.size);
            this.addNode(creator);
        }
        if (date) {
            this.index.set(DCDate.tagName, this.nodes.size);
            this.addNode(date);
        }
        if (contributor) {
            this.index.set(DCContributor.tagName, this.nodes.size);
            this.addNode(contributor);
        }
    }

    /**
     * Get the title.
     */
    public getTitle(): DCTitle | undefined {
        if (this.index.has(DCTitle.tagName)) {
            let i: number = this.index.get(DCTitle.tagName)!;
            return this.nodes.get(i) as DCTitle;
        }
    }

    /**
     * @param title The title.
     */
    setTitle(title: DCTitle) {
        if (this.index.has(DCTitle.tagName)) {
            let i: number = this.index.get(DCTitle.tagName)!;
            this.nodes.set(i, title);
        } else {
            this.index.set(DCTitle.tagName, this.nodes.size);
            this.addNode(title);
        }
    }

    /**
     * Get the source.
     */
    public getSource(): DCSource | undefined {
        if (this.index.has(DCSource.tagName)) {
            let i: number = this.index.get(DCSource.tagName)!;
            return this.nodes.get(i) as DCSource;
        }
    }

    /**
     * @param source The source.
     */
    setSource(source: DCSource) {
        if (this.index.has(DCSource.tagName)) {
            let i: number = this.index.get(DCSource.tagName)!;
            this.nodes.set(i, source);
        } else {
            this.index.set(DCSource.tagName, this.nodes.size);
            this.addNode(source);
        }
    }

    /**
     * Get the creator.
     */
    public getCreator(): DCCreator | undefined {
        if (this.index.has(DCCreator.tagName)) {
            let i: number = this.index.get(DCCreator.tagName)!;
            return this.nodes.get(i) as DCCreator;
        }
    }

    /**
     * @param creator The creator.
     */
    setCreator(creator: DCCreator) {
        if (this.index.has(DCCreator.tagName)) {
            let i: number = this.index.get(DCCreator.tagName)!;
            this.nodes.set(i, creator);
        } else {
            this.index.set(DCCreator.tagName, this.nodes.size);
            this.addNode(creator);
        }
    }

    /**
     * Get the date.
     */
    public getDate(): DCDate | undefined {
        if (this.index.has(DCDate.tagName)) {
            let i: number = this.index.get(DCDate.tagName)!;
            return this.nodes.get(i) as DCDate;
        }
    }

    /**
     * @param date The date.
     */
    setDate(date: DCDate) {
        if (this.index.has(DCDate.tagName)) {
            let i: number = this.index.get(DCDate.tagName)!;
            this.nodes.set(i, date);
        } else {
            this.index.set(DCDate.tagName, this.nodes.size);
            this.addNode(date);
        }
    }

    /**
     * Get the contributor.
     */
    public getContributor(): DCContributor | undefined {
        if (this.index.has(DCContributor.tagName)) {
            let i: number = this.index.get(DCContributor.tagName)!;
            return this.nodes.get(i) as DCContributor;
        }
    }

    /**
     * @param contributor The contributor.
     */
    setContributor(contributor: DCContributor) {
        if (this.index.has(DCContributor.tagName)) {
            let i: number = this.index.get(DCContributor.tagName)!;
            this.nodes.set(i, contributor);
        } else {
            this.index.set(DCContributor.tagName, this.nodes.size);
            this.addNode(contributor);
        }
    }
}