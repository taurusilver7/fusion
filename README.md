# Fusion

A responsive soccer stats, teams info application powered by Next.JS 13, Typescript, Tailwindcss.

The Application uses API-Football to request stats required to populate the application.

## Available Scripts

First, create a starter template and run the development server:

```bash
npm create-next-app@latest <name> --typescript --tailwind --eslint
# and
yarn dev
# or
npm run dev
```

## Build

Refactor the starter template to suit `Fusion`. Add the main background in the layout for the application.

Modify the main layout to fit `Seachbar` into the body, parallel to children components.

Create Searchbar & SearchbarForm components for extensive search results.

Create a RapidApi to get access to the Authorized API key to link with the application. Create multiple types for API response based on the reference in the website.

To process the response, create a utility function `getStandings`. CUstomize the request options with a revalidate period of 24 hours.

The nextjs revalidates the fetched data at specific intervals. The server will cache the data for 24 hours & feed the application with cached data when many requests are made. This prevents the unnecessary usage of API calls.

However, the `npm run dev` command for development server will not cache the data, consuming API calls for every hot-reload/refresh. It is suggested to use a sample data while development.

Create a `getTeams` utility function to get teams response

Create a searchBar component to house the logo & the searchBarForm. Create the helper functions & events for the search input.

Create a StandingsAndFixtures component to list out the match results between teams for different leagues.

Create a FixtureInfo type to populate the fixture details on the mainpage. Get the fixtures params from the API-football response-samples.

Create LeagueFixtures, Teams, Goals type to populate Fixtures into the main page.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
