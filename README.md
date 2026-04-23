# UI Builder Component Library Workspace

This repository is my Angular workspace for building and maintaining a reusable UI component library used across internal products.

Instead of rebuilding the same UI and form logic in every app, I centralized shared patterns into a single package (`ui-builder-component-lib`) and a separate test app (`ui-builder-component-lib-test`) for real integration testing.

## What I built

- Designed and maintained a reusable Angular/Ionic component library with **270+ exported building blocks** (components, directives, pipes, models, and enums).
- Implemented common product modules such as authentication flows, dynamic form generator, data grid with filters, map integration, modal system, toast/notification stack, and shared input controls.
- Structured the library with Angular modules so teams can import feature-focused modules instead of copying UI code between projects.
- Added test coverage with Jest and maintained lint/format automation for consistent code quality.
- Set up packaging and publishing scripts so the library can be versioned and distributed from `dist/ui-builder-component-lib`.

## Technical highlights

- **Frameworks:** Angular 17, Ionic 8, Angular Material
- **Internationalization:** `@ngx-translate/core`
- **Testing:** Jest (`npm run test:lib`)
- **Packaging:** `ng-packagr` with npm pack/publish flow
- **Quality tooling:** ESLint, Prettier, Husky, lint-staged

## Workspace structure

- `projects/ui-builder-component-lib`: the reusable component library
- `projects/ui-builder-component-lib-test`: integration/demo app used to validate library behavior
- `dist/ui-builder-component-lib`: build output and npm package artifacts

## Run locally

Install dependencies:

```bash
npm install
```

Build and pack the library:

```bash
npm run package
```

Start the test app locally:

```bash
npm start
```

The app runs on [http://localhost:4400](http://localhost:4400).

## Useful scripts

- `npm run build_lib`: production build for the library
- `npm run build_lib:watch`: watch mode while developing library code
- `npm run test:lib`: run Jest tests for the library
- `npm run lint`: lint the library code
- `npm run npm_pack`: create npm tarball from `dist/ui-builder-component-lib`
- `npm run npm_pub`: publish the built library to npm

## Why this project matters

This work demonstrates practical front-end architecture skills: building scalable reusable UI systems, designing module boundaries, supporting shared product requirements, and creating a maintainable release pipeline for a real-world Angular library.
