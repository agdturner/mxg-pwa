/**
 * Remove a top level element.
 * @param id The id of the element to remove.
 */
export function remove(id: string) {
    let e: HTMLElement | null = document.getElementById(id);
    if (e != null) {
        e.parentNode?.removeChild(e);
        //} else {
        //    console.warn("remove: id=" + id + " not found.");
    }
}

/**
 * Create a collapsible div.
 * @param options The options for creating the collapsible div.
 * @returns A collapsible div.
 */
export function getCollapsibleDiv({
    content,
    buttonLabel,
    buttonFontSize = '',
    level = { marginLeft: '', marginTop: '', marginBottom: '' },
    contentDivId = '',
    contentDivClassName = ''
}: {
    content: HTMLElement,
    buttonLabel: string,
    buttonFontSize?: string,
    level: { marginLeft?: string, marginTop?: string, marginBottom?: string },
    contentDivId?: string,
    contentDivClassName?: string
}): HTMLDivElement {
    let contentDiv: HTMLDivElement = document.createElement('div');
    contentDiv.id = contentDivId;
    contentDiv.className = contentDivClassName;
    let button: HTMLButtonElement = document.createElement('button');
    button.id = contentDivId + 'Button';
    button.className = 'collapsible';
    button.innerText = `${buttonLabel} ▼`;
    button.addEventListener('click', function () {
        button.innerText = button.innerText.includes('▼')
            ? `${buttonLabel} ▲`
            : `${buttonLabel} ▼`;
    });
    button.style.fontSize = buttonFontSize;
    Object.assign(button.style, level);
    contentDiv.appendChild(button);
    contentDiv.appendChild(content);
    return contentDiv;
}

/**
 * For making elements with the class "collapsible" collapsible.
 */
export function makeCollapsible(): void {
    var collapsibleElements = document.getElementsByClassName("collapsible");
    for (var i = 0; i < collapsibleElements.length; i++) {
        // Remove existing event listener
        collapsibleElements[i].removeEventListener("click", toggleCollapsible);
        // Add new event listener
        collapsibleElements[i].addEventListener("click", toggleCollapsible);
    }
}

/**
 * For toggling the collapsible content.
 */
function toggleCollapsible(this: HTMLElement): void {
    this.classList.toggle("active");
    let contentDiv = this.nextElementSibling as HTMLElement;
    if (contentDiv.style.display === "block") {
        contentDiv.style.display = "none";
    } else {
        contentDiv.style.display = "block";
    }
}

/**
 * Create and return HTMLDivElement that contains an HTMLLabelElement and a HTMLInputElement.
 * @param type The input type (e.g. "text", "number").
 * @param id The id of the input.
 * @param func The function called on a change to the input.
 * @param value The value of the input.
 * @param labelText The label text.
 * @returns A HTMLDivElement that contains a HTMLLabelElement and a HTMLInputElement.
 */
export function createLabelWithInput(type: string, id: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
},
    func: (event: Event) => any, value: string, labelContent: string): HTMLDivElement {
    let input: HTMLInputElement = createInputWithFunction(type, id, boundary, func, value);
    let label: HTMLLabelElement = createLabel(labelContent, boundary);
    label.htmlFor = id;
    Object.assign(label.style, boundary);
    let container: HTMLDivElement = document.createElement('div');
    container.appendChild(label);
    container.appendChild(input);
    Object.assign(container, boundary);
    return container;
}

/**
 * Create and return a HTMLInputElement.
 * @param type The input type (e.g. "text", "number").
 * @param id The id of the input.
 * @param func The function called on a change to the input.
 * @returns A HTMLInputElement.
 */
export function createInputWithFunction(type: string, id: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
},
    func: (event: Event) => any, value: string): HTMLInputElement {
    let input: HTMLInputElement = createInput(type, id, boundary);
    input.onchange = func;
    return input;
}

/**
 * Create and return a HTMLInputElement.
 * @param type The input type (e.g. "text", "number", "checkbox").
 * @param id The id of the input.
 * @returns A HTMLInputElement.
 */
export function createInput(type: string, id: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLInputElement {
    let input: HTMLInputElement = document.createElement('input');
    input.type = type;
    input.id = id;
    Object.assign(input.style, boundary);
    return input;
}

/**
 * Create a self closing tag.
 * @param attributes The attributes.
 * @param tagName The tag name.
 */
export function getSelfClosingTag(attributes: Map<string, string> | undefined, tagName: string): string {
    let s: string = "<" + tagName;
    if (attributes) {
        for (let [key, value] of attributes) {
            s += " " + key + "=\"" + value + "\"";
        }
    }
    return s + " />";
}

/**
 * For resizing an HTMLInputElement to the width of what it contains.
 * @param input The input to resize.
 * @param minSize The minimum size of the input.
 */
export function resizeInputElement(input: HTMLInputElement, minSize?: number) {
    if (minSize == undefined) {
        minSize = 4;
    }
    input.style.width = (input.value.length + minSize) + "ch";
}

/**
 * For resizing an HTMLSelectElement to the width of what it contains.
 * 
 * @param input The input to resize.
 * @param minSize The minimum size of the input.
 */
export function resizeSelectElement(input: HTMLSelectElement, minSize?: number) {
    if (minSize == undefined) {
        minSize = 6;
    }
    input.style.width = (input.value.length + minSize) + "ch";
}

/**
 * Create and return an HTMLSelectElement.
 * 
 * @param options The options.
 * @param name The name.
 * @param id The id.
 * @returns An HTMLSelectElement.
 */
export function createSelectElement(options: string[] | Set<string>, name: string, id: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLSelectElement {
    let selectElement: HTMLSelectElement = document.createElement('select');
    options.forEach(option => {
        selectElement.name = name;
        selectElement.id = id;
        let optionElement: HTMLOptionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        selectElement.appendChild(optionElement);
    });
    Object.assign(selectElement.style, boundary);
    return selectElement;
}

/**
 * Create and return an HTMLDivElement containing a HTMLLabelElement and HTMLSelectElement.
 * 
 * @param textContent The text content of the label.
 * @param options The options for the HTMLSelectElement.
 * @param name The name for the HTMLSelectElement.
 * @param id The id.
 * @param boundary The boundary to go around the HTMLLabelElement and HTMLSelectElement.
 * @returns A HTMLDivElement containing a HTMLLabelElement and HTMLSelectElement.
 */
export function createLabelWithSelectElement(textContent: string, options: string[] | Set<string>, name: string, id: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLDivElement {
    let div: HTMLDivElement = document.createElement('div');
    let label: HTMLLabelElement = createLabel(textContent, boundary);
    div.appendChild(label);
    let selectElement: HTMLSelectElement = document.createElement('select');
    div.appendChild(selectElement);
    options.forEach(option => {
        selectElement.name = name;
        selectElement.id = id;
        let optionElement: HTMLOptionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        selectElement.appendChild(optionElement);
    });
    Object.assign(selectElement.style, boundary);
    return div;
}

/**
 * Create and return an HTMLButtonElement.
 * 
 * @param textContent The text content of the button.
 * @param marginLeft The left margin.
 * @param marginTop The top margin.
 * @param marginBottom The bottom margin.
 * @param marginRight The right margin
 * @returns An HTMLButtonElement with the textContent and specified boundary.
 */
export function createButton(textContent: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLButtonElement {
    let button: HTMLButtonElement = document.createElement('button');
    button.textContent = textContent;
    Object.assign(button.style, boundary);
    return button;
}

/**
 * Create and return HTMLDivElement with a 'flex' display style.
 *
 * @param marginLeft The left margin.
 * @param marginTop The top margin.
 * @param marginBottom The bottom margin.
 * @param marginRight The right margin.
 * @returns An HTMLDivElement with a 'flex' display style and specified boundary.
 */
export function createFlexDiv(boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.style.display = 'flex';
    Object.assign(div.style, boundary);
    return div;
}

/**
 * Create and return HTMLLabelElement.
 *
 * @param textContent The text content of the label.
 * @param marginLeft The left margin.
 * @param marginTop The top margin.
 * @param marginBottom The bottom margin.
 * @param marginRight The right margin.
 * @returns An HTMLLabelElement with specified boundary.
 */
export function createLabel(textContent: string, boundary: {
    marginLeft?: string, marginTop?: string, marginBottom?: string, marginRight?: string
}): HTMLLabelElement {
    let label: HTMLLabelElement = document.createElement("label");
    Object.assign(label.style, boundary);
    label.textContent = textContent;
    return label;
}