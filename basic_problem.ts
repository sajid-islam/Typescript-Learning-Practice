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

type Product = {
    name: string;
    price: number;
    isAvailable: boolean;
};

const laptop: Product = {
    name: "Dell inspiron 15 5510",
    price: 90000,
    isAvailable: true,
};

const calculateDiscountedPrice = (
    product: Product,
    discount: number
): number => {
    const discountAmount = (product.price / 100) * discount;
    const discountedPrice = product.price - discountAmount;
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

enum Roles {
    Admin = "admin",
    Editor = "editor",
    Viewer = "viewer",
}

function getRolePermission(role: Roles): string[] {
    if (role === "admin") {
        return ["create", "edit", "delete", "view"];
    } else if (role === "editor") {
        return ["edit", "view"];
    } else if (role === "viewer") {
        return ["view"];
    } else {
        return ["none"];
    }
}
// console.log(getRolePermission(Roles.Viewer));

/**
 * 3. Handle Mixed ID List (Union + Array)
You have a list of user IDs that can be either numbers or strings.
Example:

const userIds = [1, "2", 3, "4", 5];
Write a function printUserIds(userIds: (number | string)[]): void
This should loop over the array and print each ID with a message:
"User ID: 1", "User ID: 2", etc.
 */

const userIds = [1, "ab", 3, "4"];
let modifiedIds: (number | string)[] = [];

function printUserIds(UserIds: (number | string)[]): void {
    for (let i = 0; i < UserIds.length; i++) {
        const id = UserIds[i];
        if (typeof id === "number") {
            modifiedIds.push(id / 2);
        }
        if (typeof id === "string") {
            modifiedIds.push(id.toUpperCase());
        }
    }
    console.log(modifiedIds);
}
printUserIds(userIds);
// MODERN VERSION OF PROBLEM 3

const userIds2 = [1, "User2", 5423, "admin"];

const printUserIds2 = (userIds2: (number | string)[]): void => {
    const modifiedIds2 = userIds2.map((id) =>
        typeof id === "number" ? id / 2 : id.toUpperCase()
    );
    console.log(modifiedIds2);
};
printUserIds2(userIds2);

/**
 * 4. Advanced Tuple - Student Record
Create a tuple type called StudentRecord:

name (string)

age (number)

GPA (number)

isGraduated (boolean)

Then create a variable of type StudentRecord and print each value nicely.

📝 Example:

Sajid, 20 years old, has a GPA of 3.8. Graduated: No

 */

let studentRecord: [
    name: string,
    age: number,
    GPA: number,
    isGraduated: boolean
];
studentRecord = ["Sajid", 21, 3.13, false];
studentRecord = ["Masum", 21, 3.43, true];
studentRecord = ["Saimun", 24, 3.33, true];

const studentRecordVar = `${
    (studentRecord[0],
    studentRecord[1],
    "years old, has a GPA of",
    studentRecord[2],
    "Graduated",
    studentRecord[3])
}`;

console.log(studentRecordVar);
