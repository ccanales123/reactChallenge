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

Spanish Version

1. Vuelva a implementar `addVersion` (consulte `src/api.js`) para insertar cada nuevo
   versión al principio de la pila (actualmente, cada nueva versión se empuja
   al final de la pila).
2. Con las API de React, mantenga actualizada la lista de archivos actualizándola solo cuando
   se cambia la lista.
3. Ordene la lista de archivos cuando el usuario haga clic en el botón "Ordenar A-Z/Z-A".
    - La lista debe ordenarse de la A a la Z durante el primer renderizado.
    - La etiqueta del botón debe ser "Ordenar Z-A" cuando la lista está ordenada "A-Z" y
      "Ordenar A-Z" de lo contrario.
4. Compruebe la implementación del componente `File` (consulte `src/Files/index.js`) y
   añade cualquier mejora que consideres (no hace falta mejorar la
   estilos).
5. Implemente una función para agregar archivos a la lista. Un nuevo objeto de archivo debe ser
   creado a partir de un nombre de archivo (una `cadena` no vacía) proporcionada por el usuario.
    - Implementar la API `addFile` (ver `src/api.js`).
    - Agregue un botón debajo de la lista de archivos para crear un nuevo archivo. La interfaz de usuario solo debe
      solicitar el nombre de archivo al usuario (puede usar el enfoque más simple para
      pregunte el nombre del archivo).
    - La lista de archivos debe actualizarse una vez que se crea el archivo.



# Instructions

You need `node` (version 10 or 12), and `yarn` (latest).

```sh
# install dependencies
yarn install

# start app in dev mode
yarn start

# run tests
yarn test
```

# Note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
