# Ejercitación: Restaurant

## Consigna

En este ejercicio vamos a crear una API para un restaurante. Para esto, se puede utilizar como base el proyecto creado en las clases anteriores. En este caso deberán importar el archivo `menu.json` que se encuentra en esta carpeta de la siguiente forma:

```js
const menu = require('./menu.json');
```

### Ejercicios

1. Crear un endpoint `GET /menu` que devuelva el menú completo del restaurante.
2. Crear un endpoint `GET /menu/:id` que devuelva un plato del menú. El `id` del plato debe ser pasado como parámetro en la ruta.
3. Crear un endpoint `GET /principales` que devuelva los platos principales del menú.
4. Crear un endpoint `GET /postres` que devuelva los postres del menú.
5. Crear un endpoint `GET /bebidas` que devuelva las bebidas del menú.
6. Crear un endpoint `POST /pedido` que reciba un array de id's de platos y devuelva el precio total del pedido. El array de platos debe ser pasado en el cuerpo de la petición.
7. Probar todos los endpoints creados utilizando REST Client.

## Recursos

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
- [Importar archivos](https://nodejs.org/api/modules.html#modules_file_modules)
- [Método `filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
- [Método `reduce()` (completamente opcional)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/Reduce)