window.addEventListener('load', solution);

function solution() {
  const previewField = document.querySelector(".preview")

  const fullNameField = document.getElementById("fname");
  const emailField = document.getElementById("email");
  const phoneNumberField = document.getElementById("phone");
  const addressField = document.getElementById("address");
  const postalCodeField = document.getElementById("code");
  const submitBtn = document.getElementById("submitBTN");

  submitBtn.addEventListener("click", submit);

  function submit(e) {
    e.preventDefault();

    const fullName = fullNameField.value;
    const email = emailField.value;
    const phoneNumber = phoneNumberField.value;
    const adress = addressField.value;
    const postalCode = postalCodeField.value;

    if (fullName === "" || email === "") {
      return;
    }

    const ulEl = document.createElement("ul");
    ulEl.setAttribute("id", "infoPreview");

    const li1 = document.createElement("li");
    li1.textContent = `Full Name: ${fullName}`;
    const li2 = document.createElement("li");
    li2.textContent = `Email: ${email}`;
    const li3 = document.createElement("li");
    li3.textContent = `Phone Number: ${phoneNumber}`;
    const li4 = document.createElement("li");
    li4.textContent = `Address: ${adress}`;
    const li5 = document.createElement("li");
    li5.textContent = `Postal Code: ${postalCode}`;

    ulEl.appendChild(li1);
    ulEl.appendChild(li2);
    ulEl.appendChild(li3);
    ulEl.appendChild(li4);
    ulEl.appendChild(li5);

    previewField.appendChild(ulEl);

    fullNameField.value ="";
    emailField.value ="";
    phoneNumberField.value ="";
    addressField.value ="";
    postalCodeField.value ="";

  }
}
