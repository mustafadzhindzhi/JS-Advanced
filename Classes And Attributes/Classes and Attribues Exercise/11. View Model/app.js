class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        const parentElement = document.getElementById(id);

        if (!parentElement) {
            console.error(`Element with id '${id}' not found.`);
            return;
        }

        const contactBox = document.createElement("article");
        contactBox.innerHTML = `
            <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
            <div class="info">
                <span>&phone; ${this.phone}</span>
                <span>&#9993; ${this.email}</span>
            </div>
        `;

        const title = contactBox.querySelector(".title");
        const info = contactBox.querySelector(".info");
        const button = contactBox.querySelector("button");

        if (this.online) {
            title.classList.add("online");
        } else {
            title.classList.remove("online");
        }

        button.addEventListener("click", () => {
            info.style.display = info.style.display === "none" ? "block" : "none";
        });

        parentElement.appendChild(contactBox);
    }
}

const contact = new Contact("John", "Doe", "123-456-7890", "johndoe@example.com");
contact.online = true;
contact.render("main");