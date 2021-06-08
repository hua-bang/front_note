## Web Components

web components is a set of standards to make self-contained components: custom HTML-elements with their own properties and methods, encapsulated DOM and styles;

Don't make complex software;

If something becomes complex -- split it into simpler part and connect in the most obvious way.

![img](https://javascript.info/article/webcomponents-intro/satellite-expanded.jpg)

![image-20210606165005960](F:\github\js_note\js_base\WebComponents\image-20210606165005960.png)

### A component has:

- Its own JavaScript Class
- DOM structure, managed solely by it class, outside code doesn't access it
- CSS styles, applied to the component
- API: events, class methods etc, to interact with other components

### "Web components"

- Custom element
- Shadow DOM
- CSS Scoping
- Event retargeting

### Custom elements

- Autonomous custom elements
  - "all-new"
- Customized built-in-elements
  - extending built-in elements

### Autonomous custom elements Step

1. **connectedCallback()** where customElements is added to the page
2. regitser customElements.define(tag, elem)
3. we can use it in the page

```html
<script>
class TimeFormatted extends HTMLElement { // (1)

  connectedCallback() {
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

}

customElements.define("time-formatted", TimeFormatted); // (2)
</script>

<!-- (3) -->
<time-formatted datetime="2019-12-01"
  year="numeric" month="long" day="numeric"
  hour="numeric" minute="numeric" second="numeric"
  time-zone-name="short"
></time-formatted>
```

#### CustomElements API

- define(tag, elem)
- customElement.get(tag)
- customElement.whenDefined(tag)  promise

#### Observing attributes

- For a change of an attribute, listed in `observedAttributes()`, `attributeChangedCallback` triggers.

  ```js
  class TimeFormatted extends HTMLElement {
  
      render() {
          let date = new Date(this.getAttribute('datetime')) || Date.now();
  
          this.innerHTML = new Intl.DateTimeFormat("default", {
              year: this.getAttribute('year') || undefined,
              month: this.getAttribute('month') || undefined,
              day: this.getAttribute('day') || undefined,
              hour: this.getAttribute('hour') || undefined,
              minute: this.getAttribute('minute') || undefined,
              second: this.getAttribute('second') || undefined,
              timeZoneName: this.getAttribute('time-zone-name') || undefined
          }).format(date);
      }
  
      connectedCallback() {
          if(!this.rendered) {
              this.render();
              this.rendered = true;
          }
      }
      
      static get observedAttributes() { // (3)
          return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
      }
  
      attributeChangedCallback(name, oldValue, newValue) { // (4)
          this.render();
      }
  }
  
  export default TimeFormatted;
  ```

### Rendering order

If we have <outer><inner></inner></outer>, the <outer> element is created and connected to DOM first, and then <inner>;

### Customized built-in elements

we can extends and customize built-in HTML elements by inheriting from their classes

1. extends HTMLButtonElement with our class
2. customElements.define
3. regular <button> tag, add the attribute is.

```html
<script>
// The button that says "hello" on click
class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => alert("Hello!"));
  }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});
</script>

<button is="hello-button">Click me</button>

<button is="hello-button" disabled>Disabled</button>
```



### Shadow DOM

Shadow DOM serves for encapsulation. It allows a component to have its very own “shadow” DOM tree, that can’t be accidentally accessed from the main document, may have local style rules, and more.

#shadow-root就是被称为[shadow DOM]的东西。

We can't get built-in shadow DOM elements by regular javaScript or selectors.

#### Shadom Tree

A DOM element can have two types of DOM subtrees:

1. Light tree;
2. Shadow tree;

The browser only renders the shadow tree when it has both. But we can use Shadow DOM Slots.

Shadow tree can be used in Custom Elements to hide component internals and apply component-local styles.

```html
<script>
customElements.define('show-hello', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<p>
      Hello, ${this.getAttribute('name')}
    </p>`;
  }
});
</script>

<show-hello name="John"></show-hello>
```

**There are two limitations**

1. We can create only one shadow root per element.
2. The `elem` must be either a custom element, or one of: “article”, “aside”, “blockquote”, “body”, “div”, “footer”, “h1…h6”, “header”, “main” “nav”, “p”, “section”, or “span”. Other elements, like `<img>`, can’t host shadow tree.

The mode option sets the encapssulation level

- open
- closed

**Encapsulation**

1. Shadow DOM elements are not visible to quertSelector from the light DOM.
2. Shadow DOM has own stylesheets, style rules from the outer DOM don't get applied.

### Template Element

A built-in `<template>` element serves as a storage for HTML markup templates. The browser ignores it contents, only checks for syntax validity, but we can access and use it in JavaScript, to create other elements.

why template?

- First, its content can be any valid HTML, even if it normally requires a proper enclosing tag.
- The browser considers `<template>` content “out of the document”: styles are not applied, scripts are not executed, `<video autoplay>` is not run, etc.

#### Inserting template

The template content is available in its `content` property as a [DocumentFragment](https://javascript.info/modifying-document#document-fragment) – a special type of DOM node.

We can treat it as any other DOM node, except one special property: when we insert it somewhere, its children are inserted instead.

- \<template\> content can be any syntactically correct 
- \<template> content is considered “out of the document”, so it doesn’t affect anything.
- We can access template.content from JavaScript, clone it to reuse in a new component.



Shadow DOM slots, composition

Many types of components, need the content to render

```html
<custom-menu>
  <title>Candy menu</title>
  <item>Lollipop</item>
  <item>Fruit Toast</item>
  <item>Cup Cake</item>
</custom-menu>
```

Then our component should render it properly, as a nice menu with given title and items, handle menu events, etc.

Luckily, we don’t have to. Shadow DOM supports `<slot>` elements, that are automatically filled by the content from light DOM.

In the shadow DOM, `<slot name="X">` defines an “insertion point”, a place where elements with `slot="X"` are rendered.

Then the browser performs “composition”: it takes elements from the light DOM and renders them in corresponding slots of the shadow DOM. At the end, we have exactly what we want – a component that can be filled with data.

Has both light and shadow

```html
<user-card>
  #shadow-root
    <div>Name:
      <slot name="username">
        <!-- slotted element is inserted into the slot -->
        <span slot="username">John Smith</span>
      </slot>
    </div>
    <div>Birthday:
      <slot name="birthday">
        <span slot="birthday">01.01.2001</span>
      </slot>
    </div>
</user-card>
```

Only top-level children may have slot=".." attribute

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <user-card>
        <span slot="username">test</span>
        <!-- <div>
            <span slot="birthday">123</span>
        </div> -->
        <span slot="birthday">456</span>
    </user-card>
</body>
<script>
    customElements.define('user-card', class extends HTMLElement {
        connectedCallback() {
            this.attachShadow({
                mode: "open"
            });
            this.shadowRoot.innerHTML = `
                <div>Name:
                    <slot name="username"></slot>    
                </div>
                <div>birthday:
                    <div>
                        <slot name="birthday"></slot>
                    </div>     
                </div>

            `;
        }
    })
</script>
</html>
```

#### Slot fallback content

if we put something inside a \<slot>. It becomes the fallback, "default" content, the browser will show it if there's no corresponding filter in light DOM.

```html
<div>Name:
  <slot name="username">Anonymous</slot>
</div>
```

#### Default slot: first unnamed

The first `<slot>` in shadow DOM that doesn’t have a name is a “default” slot. It gets all nodes from the light DOM that aren’t slotted elsewhere.

#### Update Slots

event: slotchange

#### Slot API

#### Summary

- kinds of slots
  - Named Slots
  - Default slots
  - If there are many elements for the same slot – they are appended one after another.
  - The content of /<slot> element is used as a fallback. It’s shown if there are no light children for the slot.
- The process of rendering slotted elements inside their slots is called “composition”. The result is called a “flattened DOM”.
- js can access slot using methods:
  - slot.assignedNodes/Elements()
  - node.assignedSlot
- changeEvent
  - slotchange (import)
  - MutationObserver



### Shadow DOM styling

- :**host**

  - The `:host` selector allows to select the shadow host (the element containing the shadow tree).

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <template id="tmpl">
            <style>
                :host {
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    display: inline-block;
                    border: 1px solid red;
                    padding: 10px;
                }
            </style>
            <slot></slot>
        </template>
    
        <custom-dialog>
            hug
        </custom-dialog>
    </body>
    <script>
        customElements.define("custom-dialog", class extends HTMLElement {
           connectedCallback() {
               this.attachShadow({
                   mode: "open"
               }).append(tmpl.content.cloneNode(true));
           }
        });
    </script>
    </html>
    ```

- **Cascading**

  - The shadow host (`<custom-dialog>` itself) resides in the light DOM, so it’s affected by document CSS rules.
  - If there’s a property styled both in `:host` locally, and in the document, then the document style takes precedence.

  setup "default" components styles in its :host rule, override them in document

- **:host(selector)**

  - Same as `:host`, but applied only if the shadow host matches the `selector`.

- **:host-context(selector)**

  - Same as :host, but applied only if the shadow host or any of its ancestors in the outer document matches the selector. (**for outer document**)

- **Styling slotted content**

  - Slotted elements come from light DOM, so they use document styles. Local styles do not affect slotted content.
  - If we’d like to style slotted elements in our component, there are two choices.
    - First, we can style the `<slot>` itself and rely on CSS inheritance
    - Another option is to use `::slotted(selector)` pseudo-class. It matches elements based on two conditions:
      - That’s a slotted element, that comes from the light DOM. Slot name doesn’t matter. Just any slotted element, but only the element itself, not its children.
      - The element matches the `selector`.
  - `::slotted` selector can’t descend any further into the slot. (can't effect the content in slot)

- **CSS hooks with custom properties**

  - Custom CSS properties exist on all levels, both in light and shadow.

- #### Summary

  - Local styles can affect:
    - shadow tree,
    - shadow host with `:host`-family pseudoclasses,
    - slotted elements (coming from light DOM), `::slotted(selector)` allows to select slotted elements themselves, but not their children.
  - Document styles can affect:
    - shadow host (as it lives in the outer document)
    - slotted elements and their contents (as that’s also in the outer document)



### Shadow DOM and events

- ##### encapsulate

- ##### **Events that happen in shadow DOM have the host element as the target, when caught outside of the component.**

- ##### The event happened on \<user-card>

- ##### Retargeting does not occur if the event occurs on a slotted element, that physically lives in the light DOM

- ##### Bubbling, event.composedPath()

  - So, if we have a slotted element, and an event occurs somewhere inside it, then it bubbles up to the `<slot>` and upwards.

- ##### event.composed

- ##### Custom events

