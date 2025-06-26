# Weather Forecast

**Weather Forecast** is a modern web application built with Next.js that provides a 7-day weather forecast for any address in the United States.

Users can enter an address, and the app will geocode the location, fetch the latest weather data from the National Weather Service, and display a detailed forecast with weather icons and temperature information. The app features a clean, responsive design and leverages React, TypeScript, and Tailwind CSS for a seamless user experience.

**Key Features:**

- Enter any US address to get a 7-day weather forecast
- Real-time data from the National Weather Service API
- Visual weather icons and clear temperature/unit display
- Responsive, mobile-friendly interface
- Built with Next.js, React, and TypeScript

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running Tests

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and component testing.

To run all tests:

```bash
npm test
```

To run a specific test file:

```bash
npm test path/to/your/testfile.test.tsx
```

Make sure you have installed all dependencies with `npm install` before running tests.
