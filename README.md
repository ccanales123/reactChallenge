Hello!

Here we have a contrived example of an application that deals with a list of
files and their renames over time, represented as versions.

A version is an object with two properties, an `id` and a `name`:
- `id`: is an always growing positive integer starting at zero, so the first version has `id`
equals to `0`, the second one has `id` equals to `1`, etc.
- `name`: a non-empty `string` representing the filename.

We created this example using as few styles/components/scripts as we could, to
allow a quick understanding of the codebase.


# We need you to

1. Reimplement `addVersion` (see `src/api.js`) in order to insert each new
   version on the beginning of the stack (currently, each new version is pushed
   at the end of the stack).
2. Using React APIs, keep the file list up to date by refreshing it only when
   the list is changed.
3. Sort the file list when the user clicks   .
    - The list should be sorted A-Z during the first render.
    - The button label should be "Sort Z-A" when the list is sorted "A-Z" and
      "Sort A-Z" otherwise.
4. Check the implementation of `File` component (see `src/Files/index.js`) and
   add any improvement that you consider (there's no need to improve the
   styles).
5. Implement a feature to add files to the list. A new file object should be
   created from a filename (a non-empty `string`) provided by the user.
    - Implement `addFile` API (see `src/api.js`).
    - Add a button below the file list to create a new file. The UI should only
      require the filename to the user (you can use the simplest approach to
      ask the filename).
    - The file list should be refreshed once the file gets created.

When possible, add tests to your solution.    

# Instructions

You need `node` (version 10 or 12), and `yarn` (latest).

```sh
# install dependencies
npm install

# start app in dev mode
npm start

# run tests
yarn test
```

# Note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
