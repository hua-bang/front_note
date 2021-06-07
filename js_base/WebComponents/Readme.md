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