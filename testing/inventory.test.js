const inventory = require('../inventory.js');

//Test Data
const indProd = "detergent";
const groupProd = ["softener", "dryer sheets", "lint catcher"];


describe('calculateDiscount',()=>{
    test('should be applied discount',()=>{
        expect(calculateDiscount(100,0.2)).toEqual(80);
    });

    test('should not be applied discount',()=>{
        expect(calculateDiscount(-0.5,0.2)).toBe(Price must be a decimal value between 0 and 1.);
    });

    test('should not be applied discount',()=>{
        expect(calculateDiscount(100,-0.2)).toBe(Price must be a decimal value between 0 and 1.);
    });

    //Edge case could be for a 
});


describe('The filterProducts() function', () => {
    test('should remove products that do not meet the criteria', () => {
        expect(inventory.filterProducts(groupProd,/*Insert Callback*/)).toBe(/*Filter Function Response*/)
    }); 
    
    test('does not filter products that are not an Array', () => {
        expect(inventory.filterProducts(indProd,/*Insert Callback*/)).toBe(`Please use a valid array and filter`)
    });

    test('should remove products that do not meet the criteria', () => {
        expect(inventory.filterProducts(groupProd,/*Insert Callback*/)).toBe(/*Filter Function Response*/)
    });
});



describe("sortInventory function", function(){
    test("Should check  that sortInventory sorts alphabetically ascending", function(){
    expect(sortInventory(groupProd)).toEqual("["dryer sheets", "lint catcher", "softener"]");
    })
});

describe("sortInventory function", function(){
    test("Should check  that sortInventory sorts alphabetically ascending", function(){
    expect(sortInventory(groupProd)).toEqual("["softener", "lint catcher","dryer sheets"]");
    })
});

/* describe("sortInventory function", function(){
    test("Should check  that sortInventory sorts alphabetically ascending", function(){
    expect(sortInventory(groupProd)).toEqual("");
    })
}); */