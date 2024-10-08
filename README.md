# Telia E-shop Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project Features

This project leverages the [App Directory](https://nextjs.org/docs/getting-started/project-structure), utilizing features like:

-   React Server Components
-   Nested, Grouped, and Parallel routes
-   [Suspense loading states](https://react.dev/reference/react/Suspense)
-   Error boundaries

Absolute imports are configured (see [Next.js docs](https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases))

### App Directory Structure

Routes are defined by directory structure within the app folder.
Files with specific names handle layout, loading states, error handling, etc.
See the [Next.js docs on Route Handlers for detailed information](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).

## ESLint and Prettier

Code quality and consistency are maintained with ESLint and Prettier.

Run formatting with: `npm run format`

Run linting with: `npm run lint`

## Testing

This project uses Jest and Testing Library for unit and integration tests.
Key libraries:

-   `jest`
-   `@testing-library/react`
-   `@testing-library/jest-dom`
-   `@testing-library/user-event`

[Jest](https://testing-library.com/docs/ecosystem-jest-dom/) with [Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest#creating-your-first-test)

Custom Jest matchers are used ([see](https://github.com/testing-library/jest-dom#custom-matchers))

### Run tests:

-   **All tests with verbose output:** `npm run test`

    -   _Verbose mode provides more detailed information about each test, including any console logs and other debugging output._

-   **Watch mode:** `npm run test:watch`
    -   _Reruns tests automatically whenever you make changes to your code._

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
