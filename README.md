# Airwallex Frontend Project

## Getting Started

Install dependencies:

```bash
$ yarn install
```

Start the dev server:

```bash
$ yarn start
```

For unit tests, please run:

```bash
$ yarn test
```

For e2e tests, please start the dev server first, then run:

```bash
$ yarn e2e
```

E2e test demo:
![Animated GIF](./cypress/videos/app.spec.cy.ts.gif)

## Folder structure

```
.
├── cypress
│   └── e2e                                   # e2e tests
│       └── app.spec.cy.ts
├── src
│   ├── components                            # reusable components: decoupled from business logic
│   │   ├── button
│   │   ├── header
│   │   ├── footer
│   │   ├── modal
│   │   └── form
│   ├── constants
│   │   ├── breakpoints.ts                    # screen sizes for responsive design
│   │   ├── strings                           # centralized all the strings
│   │   └── colors.ts                         # centralized all the color tokens
│   ├── pages
│   │   ├── home.ts                           # app entry
│   │   └── request-invite-form.ts            # handle main logic of this form, passed in Modal as a props to render
│   ├── api
│   │   └── request.ts                        # api call method
│   └── utils
│   │   ├── hooks
│   │   │     ├── usePostRequestInvite.ts     # customized hook function, wrapping api method into react query
│   │   │     └── useEventListener.tsx        # hook to add eventListener to an element
│   │   └───ErrorBoundary.ts                  # ErrorBoundary component, used to catch error
├── tsconfig.json
├── cypress.json                              # e2e config
├── package.json
└── README.md
```

## Main tech stack used in app:

1. Used Create react app with Typescript to initialize the app.
2. React query is used for state management and wrapping api call
3. Axios is used to call api
4. Emotion is used for styling
5. React hook form is used for form data management.
6. Yup is used for form validation schema
7. Jest and React testing library are used for unit tests
8. Cypress is used for E2E Tests
9. react-test-renderer is used for snapshot tests
10. msw is used to mock server in the test
11. antd is used to show server error message

## Test coverage:

1. Unit tests are added to ALL the reusable components: Header, Footer, Modal, Form, Input, Button etc..
2. Integration test is added to RequestInviteForm component. As this component handled the core logic of form and api call.
3. Snapshot test are added to the home page and the modal.
4. Unit tests are added to api call method.
5. E2E test using cypress is implemented. Video attached above.

## Error handling:

1. ErrorBoundary is defined and wrapping different levels of the components. Any error will be caught be ErrorBoundary and easy to locate.
2. The form need to pass all the validation schema before being submitted.
3. If the server returns an error, error message will be displayed in an antd package's notification component.
4. The error will also passed to Form component to be displayed under the form

## Architecture design

1. Modal, Form, Input, Button, Header, Footer etc are all defined as reusable components. They are decoupled from the app business logic, therefore can be used in other places if new feature requirements added.
2. RequestInviteForm handles the main business logic including form management, validation, submit function etc. Whole RequestInviteForm component is passed into Modal reusable component as a props, so that these business logic is decoupled from Modal component.
3. Success page and the form share similar design therefore they are both using Form reusable component, just different props.
4. Modal component handles its open/close functionality (including clicking on area outside the Modal to close it). So that if in the future another modal is required, can simply reuse it.
5. All the styled components have expose a className props, allowing future consumer customize styles
6. Emotion package, instead of a css file, is used for styling. As javascript give us more convenience to customize dynamic style based on states.
7. Media query is used to ensure the app runs smoothly on all screen sizes. E2E test has tested responsive design.
8. Defined absolute path starting point as src in tsconfig file. For more readable import path.

## Performance optimizing

1. HOC React.memo is used to wrap reusable components such as Footer, Button, Modal, Input, and Form, that receive props and just render something without having any state or effects of their own.
2. useMemo and useCallback is used to prevent unnecessary rerender of object/function
3. It's good practice to use throttling to avoid impatient user frequently clicking on send button to call server. However, in the code, I have used isLoading value from react hook form to disable the button until a server response is returned. Therefore, throttling is not necessary here.
4. uuid is used as key of elements rendered by a map method. For React better performance.
