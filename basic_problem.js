/**
 * 1. Product Type and Discount Calculator
Create a Product type that has:

name (string)

price (number)

isAvailable (boolean)

Now, write a function calculateDiscountedPrice(product: Product, discount: number): number
This function should:

Apply the discount (in %) to the product.price

Return the final price.
 */
var laptop = {
    name: "Dell inspiron 15 5510",
    price: 90000,
    isAvailable: true,
};
var calculateDiscountedPrice = function (product, discount) {
    var discountAmount = (product.price / 100) * discount;
    var discountedPrice = product.price - discountAmount;
    return discountedPrice;
};
// calculateDiscountedPrice(laptop, 20);
/**
 * 2. User Roles with Enum and Conditional Logic
Create an enum called Role with values:

Admin

Editor

Viewer

Write a function getRolePermissions(role: Role): string[]
Return different permissions depending on the role.
 */
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["Editor"] = "editor";
    Roles["Viewer"] = "viewer";
})(Roles || (Roles = {}));
function getRolePermission(role) {
    if (role === "admin") {
        return ["create", "edit", "delete", "view"];
    }
    else if (role === "editor") {
        return ["edit", "view"];
    }
    else if (role === "viewer") {
        return ["view"];
    }
    else {
        return ["none"];
    }
}
console.log(getRolePermission(Roles.Viewer));
