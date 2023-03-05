## End to End Testing with Cypress.js

- Website:
  https://www.cypress.io/

### Setup

```
npm install cypress --save-dev
```

This creates a folder and some files in project structure:

- **/cypress**: contains other folders with specific purpose

  - <u>**/Support**</u>:
    - **index.js** : Code that gets run before all tests good for imports or other global configurations
    - **Commands.js**: is where you create custom commands that are reused across multiple test or even overwrite some cypress commands in very rare cases.
  - **<u>/Plugins</u>**:
    - index.js : where cypress plugins are loaded in
  - **<u>/Integration:</u>**
    - Test.spec.js : Files where the test are written
  - <u>**/fixture**</u>:
    - \*.json : JSON files holding test data

- cypress.json: Configuration file created in the root folder.

### Configuration file

- https://docs.cypress.io/guides/references/configuration#Global

```json
//BASIC CONFIGURATION FILE : ~/cypress.json
{
  "baseUrl": "http://localhost:4200", //root URL of applicaiton
  "ignoreTestFiles": "**/examples/*", // if any test need be ignored
  //updating the viewport for the cypress client
  "viewportHeight": 786,
  "viewportWidth": 1024,
  "scrollBehavior": false // This stops some functions from auto scrolling and the test not
  // displaying correctly.
}
```

### Test Structure

```javascript
/**
Integration/<TestName>.spec.js

-> 'context()' is interchangable as far as i can tell with 'describe()'
-> Inside the describe() | context() goes all the test relating that suit
*/

describe("Our First Test Suit", () => {
  //runs before every test
  beforeEach("Setup Code Before every Test", () => {
    // Setup code
    // OR redundant code
  });

  //Single Test instance
  it("First Test", () => {
    //TEST CODE....
  });

  it("Second Test", () => {
    //TEST CODE....
  });
});

describe("Our Second Test Suit", () => {
  it("First Test", () => {
    //TEST CODE....
  });
  describe("Second Suit Section", () => {
    it("INNER: First Test", () => {
      //TEST CODE....
    });

    it("INNER: Second Test", () => {
      //TEST CODE....
    });
  });
});
```

### Taking a look at some simple examples

1. Make sure that if your testing local project have the server running for the local project.

   ```
   For this example just run with ~ npm start

   Run Cypress.js using the command: ~ npx cypress open

   //BASE URLS....
   // "https://profit.ly/"
   // "http://localhost:4200"
   ```

### Good Resource:

https://docs.cypress.io/guides/overview/why-cypress
