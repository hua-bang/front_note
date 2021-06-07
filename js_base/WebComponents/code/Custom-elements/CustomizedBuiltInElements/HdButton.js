class HdButton extends HTMLButtonElement {

    constructor() {
        super();
        this.addEventListener('click', () => {
            console.log('click');
        })
    }
}

export default HdButton;