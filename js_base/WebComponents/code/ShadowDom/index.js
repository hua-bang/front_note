customElements.define("show-hello", class extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({
            mode: "open",
        });
        shadow.innerHTML = `
        <style>
            .shadow-test {
                color: red
            }
        </style>
        <p class="shadow-test">
            Hello, ${this.getAttribute('name')}
        </p>`
    }
})