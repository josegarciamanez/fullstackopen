# CHAPTER 1 - EXERCISES

## Los fundamentos de React

### 1.1: información del curso, paso 1

> El programa que se iniciará en esta tarea se desarrollará más en las próximas tareas. En este y otros conjuntos de tareas futuras durante el curso, es suficiente restaurar la versión final del programa, por supuesto, puede comprometerse con la situación después de cada tarea, pero no es necesario.
> Use create-react-app para crear una nueva aplicación. Cambiar a formato index.js.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

> y elimine archivos adicionales (App.js, App.css, App.test.js, logo.svg, serviceWorker.js).
> La aplicación completa ahora está tristemente en un componente. Refactorice el código de la aplicación para que conste de tres componentes nuevos: Encabezado , Contenido y Total . Todos los datos todavía se almacenan en la aplicación componente , que pasa la información necesaria a cada componente utilizando accesorios . Header se encarga de representar el nombre del curso, las secciones de contenido y su número de tareas, y el número total de tareas.
> El cuerpo de la aplicación componente será aproximadamente el siguiente:

```jsx
const App = () => {
  // const-määrittelyt

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

> ADVERTENCIA create-react-app crea automáticamente un repositorio git para el proyecto, a menos que la aplicación se cree dentro de un repositorio existente. Probablemente no desee que el proyecto se convierta en un repositorio, así que ejecute el comando rm -rf .git en la raíz del proyecto .

### 1.2: información del curso, paso 2

> También refactorice el componente Contenido para que no represente el nombre de ninguna parte o su número de tareas, sino solo tres componentes llamados Parte , de modo que cada uno represente el nombre y el número de tareas de una parte.

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

> La comunicación de nuestra aplicación es realmente primitiva en este momento, ya que se basa en variables individuales. La situación pronto mejorará.
