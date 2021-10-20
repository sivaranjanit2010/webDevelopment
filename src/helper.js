
export default class Application {
    constructor (btn) {
        this.btn = btn;
    }

    initialize = () => {
        this.btn.addEventListener("click",function () {
            document.body.style.background = "pink";

            const container = document.getElementById("content");
            const pTag = document.createElement("p");

            pTag.innerText = "Setting up Environment for JS";
            container.append(pTag);
        }) 
    }
}