class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.querySelector("#food") as HTMLElement;
  }

  get X(): number {
    return this.element.offsetLeft;
  }

  get Y(): number {
    return this.element.offsetTop;
  }

  change(): void {
    let x: number, y: number;
    x = Math.floor(Math.random() * 29) * 10;
    y = Math.floor(Math.random() * 29) * 10;
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}

export default Food;