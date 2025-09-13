This is the README.md file! I (Vara)as the presenter, will fill it with content!
key scenarios tested:
----------------------
calculateDiscount function:

valid discount(price=100,discountrate=0.2)
invalid input(negative price)
edge case(0% discount)

filterProducts function:

filtered products with valid input(amount>4)
invalid input(non arrays and non callback function)
edge case with no product match

sortInventory function:

sorted alphabetically and numarically.
invalid keys.
edge case with empty array.

challenges faced:
---------------------------
In writing edge cases but later added few test cases.
confusion that When to use .toBe ,.toEqual .
when running test few tests are not passed.

In sortInventory function first Inventory array is mutated ,to fix this we took copy of array using [...inventory] 

Overall collabarion worked well to complete project.