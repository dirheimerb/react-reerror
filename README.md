# React Error Boundary with Custom Logger

This project is a React application with an integrated error boundary that logs errors to the console and posts them to Jsonbin.io for further analysis.

## Features

- Error Boundary to catch JavaScript errors anywhere in the component tree.
- Custom logger to log errors to the console and send them to Jsonbin.io.
- Custom error handling for both caught and uncaught errors in React 19.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/react-error-boundary-logger.git
   cd react-error-boundary-logger
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Configuration

1. Open `src/logger.ts` and replace `YOUR_JSONBIN_MASTER_KEY` with your actual Jsonbin.io master key.

   ```env
    REACT_APP_API_ENDPOINT=https://api.jsonbin.io/v3/b
    REACT_APP_API_KEY= # Add Valid Key, Required
    REACT_APP_ADMIN_KEY=# Add Valid Key, Required
    REACT_APP_BIN_NAME=# Add Valid Bin Name, Not Required
    REACT_APP_BIN_PRIVATE=# Add true or false, Not Required
    REACT_APP_COLLECTION_ID=# Add Valid Collection ID, Not Required
   ```

## Usage

1. Start the development server:

   ```sh
   npm start
   ```

2. The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code of the React application.
  - `App.tsx`: The main application component.
  - `ErrorBoundary.tsx`: The Error Boundary component to catch and log errors.
  - `logger.ts`: The custom logger utility to log errors to the console and send them to Jsonbin.io.
  - `index.tsx`: The entry point of the React application.

## Error Logging

The custom logger logs errors in the following format:

```json
{
  "error": {
    "errorInfo": "",
    "errorMessage": "",
    "timestamp": ""
  },
  "metadata": {
    "created": "",
    "component": null
  }
}
```

### Example

To see the error logging in action, introduce an error in any component, for example, in `App.tsx`:

```tsx
function App() {
  // This will throw an error
  throw new Error('Test error');
  return (
    <div className="App">
      <h1>Welcome to the App</h1>
    </div>
  );
}
```

This will trigger the error boundary and log the error to the console as well as send it to Jsonbin.io.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
