# useDebounce

The `useDebounce` hook is a simple utility that helps delay the update of a value until after a specified delay. This is particularly useful when you want to prevent a function from being called too frequently, such as when handling search input.

#### Example Usage:

1. **Import the Hook:**

   ```javascript
   import { useDebounce } from "hooks/useDebounce";
   ```

2. **Use in a Component:**

   ```javascript
   import React, { useState } from "react";
   import { useDebounce } from "hooks/useDebounce";

   const SearchComponent = () => {
     const [searchTerm, setSearchTerm] = useState("");
     const debouncedSearchTerm = useDebounce(searchTerm, 500);  // Usage is on this line

     useEffect(() => {
       if (debouncedSearchTerm) {
         // Perform the search or API call with debounced value
         console.log("Searching for:", debouncedSearchTerm);
       }
     }, [debouncedSearchTerm]);

     return (
       <input
         type="text"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         placeholder="Search..."
       />
     );
   };

   export default SearchComponent;
   ```

#### How It Works:

- **Debouncing**: The `useDebounce` hook delays the update of `debounceValue` until `delay` milliseconds have passed since the last change to `value`.
- **Practical Use**: This is useful for scenarios like search inputs, where you want to avoid making an API call on every keypress, and instead, wait until the user has stopped typing.
