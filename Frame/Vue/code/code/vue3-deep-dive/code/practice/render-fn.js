import { h } from "vue";

const Stack = {
  render() {
    const slot = this.slots.default
      ? this.slots.default()
      : [];

    return h("div", { class: stack }, slot.map(node => {
      return h("div", { class: `mt-${this.props.size}` }, [node]);
    }));
  }
}

  `<Stack size="4">
    <div>hello</div>
    <Stack size="4">
      <div>hello</div>
      <div>hello</div>
    </Stack>
    </Stack>
  `

  `
    <div class="stack">
      <div class="mt-4">
        <div>hello</div>
      </div>
      <div class="mt-4">
        <class="stack">
          <div>hello</div>
          <div>hello</div>
        </class>
      </div>
    </div>
  `