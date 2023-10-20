function solve() {
    const myObj = {
        extend: function (template) {
            Object.assign(this, template);

             Object.setPrototypeOf(this, Object.getPrototypeOf(template));
        }
    };

    return myObj;
}