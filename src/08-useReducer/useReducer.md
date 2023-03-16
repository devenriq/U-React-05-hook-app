# Qué es UseReducer?

Según la documentación oficial de React (https://beta.reactjs.org/reference/react/useReducer) es lo siguiente:

> UseReducer es un React Hook (anzuelo) que te permite añadir un reducer a tu componente

Bueno, tenemos que es un hook que añade un reducer al componente que se está trabajando. Pero, ¿qué es un _reducer_?

Una vez más, según la documentación de React, un reducer es una función que busca consolidar, reducir los estados del componente (que puede ser mucho si se añaden los event handlers).

Entonces, el UseReducer es una función que permite el manejo de los estados de la aplicación con el fin de que sea más fácil manejarlos. Es similar al useState hook, pero maneja de manera diferente el flujo de la información cambiante, o de los properties que son actualizados constantemente.

## Cómo funciona

Un reducer maneja los datos desde afuera de la función ejecutora. Para ello, se crea la función con la que se quiere manejar los estados siendo la primera palabra de la misma la acción que se pretende realizar y la segunda el término _Reducer_ para identificar la función. Asimismo, esta recibe dos argumentos: el estado y la acción. Luego, por medio de un método para control de flujo se identifica la acción que se desea realizar y con ello se plantea la lógica adecuada para la consecución del objetivo.

## Convirtiendo un flujo useState en un flujo useReducer

La documentación indica cuatro pasos:

1. Pasar de establecer el estado a enviar acciones.
2. Escribir una función reductora.
3. Utiliza el reductor de tu componente.

### 1. Pasar de establecer el estado a enviar acciones

Para este punto, se necesita modificar el contenido de los eventHandlers (manejadores de eventos). Al ser funciones cuyo objetivo es la modificación del estate, se tiene que remover y reubicar en el punto dos. La lógica será reemplazada por un dispatch(envío), que es un elemento incorporado por el hook del useReducer. Dentro de este se creará un objeto con **la información mínima requerida para indicar la acción que se desea realizar**. Normalmente se pasan dos acciones: type y task. El primero representa la acción que se desea realizar y el segundo dónde se quiere realizar

```js
const handleEvent(text)=>{
	dispatch({
		type: 'print',
		text: text
	})
}
```

### 2. Crear una función reductora

En esta función es donde irá toda la lógica que manejará las acciones que se tengan pensadas para los eventos. Toma como argumentos el estado y la acción y retorna el siguiente estado o estado actualizado

```js
const taskReducer(tasks, action){
	if(action.type === 'print'){
		console.log('Hello World')
		return
	}
}
```

### 3. Utilizar el reductor del componente

Para este paso, se importaría el useReducer desde React, tal cual se hace con el useState
