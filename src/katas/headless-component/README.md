# Headless Component

In this kata you will learn how react hooks (and by extension vue composables etc..)
can be used to create headless components that are easy to test. 

## Exercise

*Step 1*

An online store has a product page that displays multiple products. There is a product
component responsible for displaying a single product. The product component is responsible
for its own data fetching and state management given an id. At the moment it's not possible
to add a product to the cart. You should refactor the product component to be able to 
add a product to the cart, keeping the product component as a headless component.

You should probably write some tests when
adding buttons to the product card to ensure they are wired up correctly, but do not
test the logic there.

To interact with the cart you can use the `useCart` hook. The `useCart` hook has a method
`addToCart` that takes a product id and adds it to the cart. There is no tests for the 
implementation of the ProductCard component. 

*Step 2*

A new requirement is added. All products should have a + and - button to increase or decrease
the quantity of the product added to the cart when clicking the add cart button.