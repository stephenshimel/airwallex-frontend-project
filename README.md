# Airwallex Frontend Project

## Getting Started

Install dependencies,

```bash
$ yarn install
```

Start the dev server,

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

![Animated GIF](./cypress/videos/app.spec.cy.ts.gif)

## Folder structure

```
.
├── cypress
│   └── e2e                                   # e2e tests
│       └── app.spec.cy.ts
├── src
│   ├── components                            # reusable components
│   │   ├── button
│   │   ├── header
│   │   ├── footer
│   │   ├── modal                             # reusable Modal component, decoupled from business logic
│   │   └── form                              # reusable Form component, decoupled from business logic
│   ├── constants
│   │   ├── keypoints.ts                      # screen sizes for responsive design
│   │   ├── strings                           # centralized all the strings used in the app
│   ├── pages
│   │   ├── home.ts                           # app entry
│   │   └── request-invite-form.ts            # handle main logic of this form, passed in Modal as a props to render
│   ├── api
│   │   ├── request.ts                        # api call method
│   └── utils
│   │   └── hooks
│   │        └── usePostRequestInvite.ts      # customized hook function, wrapping api method into react query
│   │        └── useEventListener.tsx         # hook to add eventListener to an element
├── tsconfig.json
├── cypress.json                              # e2e config
├── package.json
├── yarn.lock
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
3. Snapshot test are added to the home page and the modal
4. E2E test using cypress is implemented. Video attached above

## Error handling:

1. The form need to pass all the validation schema before being submitted.
2. If the server returns an error, error message will be displayed in an antd package's notification component.
3. The error will also passed to Form component to be displayed under the form

## Architecture design

1. Modal, Form, Input, Button, Header, Footer etc are all defined as reusable components. They are decoupled from the app business logic, therefore can be used in other places if new feature requirements added.
2. RequestInviteForm handles the main business logic including form management, validation, submit function etc. Whole RequestInviteForm component is passed into Modal reusable component as a props, so that these business logic is decoupled from Modal component.
3. Success page and the form share similar design therefore they are both using Form reusable component, just different props.
4. Modal component handles its open/close functionality (including clicking on area outside the Modal to close it). So that if in the future another modal is required, can simply reuse it.
5. All the styled components have expose a className props, allowing future consumer customize styles
6. Emotion package, instead of a css file, is used for styling. As javascript give us more convenience to customize dynamic style based on states.
7. Media query is used to ensure the app runs smoothly on all screen sizes. E2E test has tested responsive design.
