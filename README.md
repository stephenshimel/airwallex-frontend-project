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
│   └── e2e                   # e2e tests
│       └── app.spec.cy.ts
├── src
│   ├── components          # reusable components
│   │   ├── button
│   │   ├── header
│   │   ├── footer
│   │   ├── modal
│   │   └── form
│   ├── constants                     # constants
│   │   ├── keypoints.ts              # screen sizes for responsive design
│   │   ├── strings                   # centralized all the strings used in the app
│   ├── pages                         # page entries
│   │   ├── home.ts                   # home page
│   │   └── request-invite-form.ts    # handle the main logic
│   ├── api                      # API requests
│   │   ├── request.ts               # api call method
│   └── utils                         # util functions
│   │   └── hooks
│   │        └── usePostRequestInvite.ts            # customized hook function, wrapping api method into react query
│   │        └── useEventListener.tsx            # hook to add eventListener to an element
├── tsconfig.json
├── cypress.json                      # e2e config
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
