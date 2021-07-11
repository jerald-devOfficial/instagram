import { createContext } from 'react';

const FirebaseContext = createContext(null);
export default FirebaseContext;

// createContext works by setting the Provider for component 1, and it can be accessed by other components by using Consumer
