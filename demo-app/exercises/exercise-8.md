# Exercise 8

## Requirements

1. Create a new component named Car Form. Move the car form state and elements from Car Tool into the new Car Form component.

1. Utilize the new Car Form component in Car Tool. Ensure that you can still add cars. All other features should still work as well.

1. Add a new column to the Car Table. The column header should be set to "Actions".

1. On each row in the new column, add a Delete button. When the Delete button is clicked, delete the row from the table.

  **Hint:** To perform a delete in JavaScript, look at the array `filter` function.

```javascript
newCars = cars.filter(c => c.id !== carIdToDelete);
```

1. Ensure it works!