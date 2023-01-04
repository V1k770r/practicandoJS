## FUNCIONES

- ¿Que es una funcion?

Las funciones nos permite encapsular (guardar) bloque de codigo para reutilizarlo
y ejecutarlo en el futuro.

- ¿Cuando me sirve usar una funcion en mi codigo?

Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro.

Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.

-¿Cual es la diferencia entre parametros y argumentos de una funcion?

Las funciones reciben parametros cuando las creamos y les enviamos argumentos cuando las ejecutamos. 

## CONDICIONALES 

- ¿Que es una condicional?

Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

- ¿Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?

If (else y else if), Switch.
El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. En cambio, en el switch todos los cases se comparan con las misma variable o condicion que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Si. Las fucniones pueden encapsular cualquier bloque de codigo, incluyendo condicionales. 

## CICLOS

- ¿Qué es un ciclo?

La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo.

## LISTAS

- ¿Que es un array?

Es una lista de elementos.

``` 
const array = [1, 'jaja', true, false];
```

- ¿Que es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.

``` 
const obj = {
    nombre: 'Fulanito',
    edad: 3,
};
```

- ¿Cuando es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todo los demas (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

-¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades. 