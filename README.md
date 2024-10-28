
## Manual case study

Deployed page: https://manual-task.vercel.app/

To run the development server:

```bash
yarn dev
```
### Features

-  **Next.js** -  I explored its modern features, including the new App Router. This was my first experience with route interception, which made it simple to implement URL-based navigable modals for the quiz component.
- **Tailwind** - Working with Tailwind CSS, especially given Next.js’s built-in support, was seamless. Styling the landing page and ensuring its responsiveness was a pleasure.
- **Extendable Design** - The page design is built to be easily extendable, making it straightforward to connect with CMS systems:
  - About section is dynamic and can be edited with adding additional entries to json file
  - Footer links can also be managed dynamically
- **Folder Structure** - Each section is modular, with distinct view models and hooks.
  - `src/app` - handles pages and routing.
  - `src/modules` - standalone app modules. The structure I'm using most of the time is: 
    - **Application** - hooks and methods for module lifecycle and state management
    - **Domain** - types, models and view models
    - **UI/Components**- visual components
  - `components` directory
    - `design-components` directory is used for design-system elements, like Text and Button. Additional assets like font and Tailwind configurations could also be moved here
    - Other shared components would have their own directories.
- **Testing**
  - **Unit tests** - for unit test i used the same approach and libraries i use daily - vitest and RTL. I tend to unit test standalone parts of the code - in this example I tested `quiz-reducer`, other candidate could be `StorageService`
  - **Snapshot tests** - Though not added, snapshots are ideal for keeping track of design-component changes and make developers more careful about the changes they do
  - **E2E tests** - Kept in a separate category. For application of this size I think that e2e are the correct way to test all user paths. In bigger projects i tend to add more integration tests between different components. E2E tests are often costly on the CI and I use them to cover crucial paths of the application (paths with biggest business value).


### Testing
For unit tests:
 ```bash
yarn run test
```

For e2e tests:
 ```bash
yarn run e2e
```

### Quiz

I designed the quiz to be highly customizable. 
The `useQuizState` hook is the core of the quiz logic, accepting data from an API and allowing full control over its behavior. It utilizes a singleton `StorageService` to sync its state with `localStorage`. For an app of this scale, a singleton pattern is enough, but in larger projects, I’d consider dependency injection through a context or DI container to manage dependencies. This would enable greater control and testing flexibility, especially with feature flags.

**QuizState** is build using `useReducer` hook with a set of defined lifecycle events. I believe this approach makes the state control expandable and easy to test.


**QuizModel** encapsulates state-dependent logic for specific UI behaviors. It could be also returned directly from the hook and accessed in children components to avoid prop drilling.

### Missing parts

- **Accessibility** - Additional semantic HTML elements and screen reader testing would improve accessibility
- **Internationalization** - I would consider moving all texts to JSON file and handle translations using some common library like `react-i18next`
- **Analytics** - adding analytics to track user interactions, particularly on interactive elements like buttons and links or quiz events, would help monitor user journeys and drop-off rates.

### Summary

I really enjoyed building this app. I covered most of my initial ideas and look forward to discussing them further in the next phase.