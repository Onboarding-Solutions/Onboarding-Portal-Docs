# useLocalStorage

The `useLocalStorage` hook is a custom hook that simplifies working with `localStorage`. It allows us to persist state in `localStorage` and automatically update the state when the stored value changes.

#### Example Usage:

1. **Import the Hook:**
   ```javascript
   import useLocalStorage from 'hooks/useLocalStorage';
   ```

2. **Use in a Component:**
   ```javascript
   const MyComponent = () => {
     const [name, setName] = useLocalStorage('name', 'Guest');

     return (
       <div>
         <p>Hello, {name}!</p>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
       </div>
     );
   };

   export default MyComponent;
   ```

#### How It Works:
- **Initial Value**: The hook retrieves the initial value from `localStorage` using the provided key. If the key doesn't exist, it falls back to the `defaultValue`.
- **State Sync**: When the value in `localStorage` changes (even from another tab), the state in your component is automatically updated.
- **Setting Value**: The hook provides a setter function that updates both the state and `localStorage`.
