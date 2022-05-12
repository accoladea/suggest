In this project I used MUI, Redux-Toolkit, React-Redux, TypeScript, and React Query.

I tried to mimic a real API by using promises and filtering data there

Then, I wrapped API functions with React Query - a server side state management library

This library always does caching and is a state management alternative for redux for server-side side effects

Also, I added timed clean up mechanism inside useEffect in useFetchBooksAndCities hook where basically it waits before making a new API request to reduce the bandwidth of that API

To test this project pull this repo from GitHub and run npm start
