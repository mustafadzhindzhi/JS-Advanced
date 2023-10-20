class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;

        this.createElement();
        this.attachEvents();
    }

    createElement() {
        this.element = document.createElement("article");
        this.element.innerHTML = `
            <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
            <div class="info" style="display: none;">
                <span>&phone; ${this.phone}</span>
                <span>&#9993; ${this.email}</span>
            </div>
        `;
    }

    attachEvents() {
        const title = this.element.querySelector(".title");
        title.querySelector("button").addEventListener("click", () => this.toggleInfo());

        document.querySelector("#main").appendChild(this.element);
    }

    toggleInfo() {
        const info = this.element.querySelector(".info");
        info.style.display = info.style.display === "none" ? "block" : "none";
    }

    render(id) {
        document.getElementById(id).appendChild(this.element);
    }

    set online(value) {
        this._online = value;
        const title = this.element.querySelector(".title");
        if (value) {
            title.classList.add("online");
        } else {
            title.classList.remove("online");
        }
    }

    get online() {
        return this._online;
    }
}