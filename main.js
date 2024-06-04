import './css/style.css';

// 1. Declaración y Asignación: Declara una variable llamada nombre y asignale tu nombre como valor.

let nombre = 'Wilman';
alert(`La variable 'nombre' contiene -> ${nombre} `);

// 2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante).

const edad = 41;
const precio = 19.5;
const ciudad = 'Cali';
const esEstudiante = true;

// 3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".

nombre = 'Wilman';
const apellido = 'Conde';
alert(`Hola, ${nombre} ${apellido}`);

// 4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.

const num1 = 12;
const num2 = 7;
alert(`Variable num1= ${num1} \nVariable num2= ${num2}`)
alert(`La suma de ${num1} + ${num2} es-> (${num1 + num2})`);
alert(`La resta de ${num1} - ${num2} es-> (${num1 - num2})`);
alert(`La multiplicación de ${num1} x ${num2} es-> (${num1 * num2})`);
alert(`La division de ${num1} / ${num2} es-> (${num1 / num2})`);
alert(`EL resto de la division de ${num1} / ${num2} es-> (${num1 % num2})`);

// 5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

let contador = 0;
alert(`Variable contador inicializada = ${contador}`);
while (contador <= 5) {
  alert('contador incremento -> ' + contador++);
}
alert(`Variable contador = ${contador}`);
while (contador >= 0) {
  alert('contador decremento -> ' + contador--);
}

// 6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().

const nombreUsuario = prompt('Ingrese su nombre');
alert(`Bienvenid@ ${nombreUsuario}`);

// 7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).

const radioCirculo = Number(prompt('Ingresa el radio de tu circulo'));
alert(`El area de un circulo de radio ${radioCirculo} es ${Math.pow(radioCirculo, 2) * 3.14}`);

// 8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.

const gradosCelsius = Number(prompt('Ingresa grados Celsius'));
const gradosFarenheit = gradosCelsius * (9 / 5) + 32;
alert(`${gradosCelsius}°C son ${gradosFarenheit}°F`);

// 9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio.

const nota1 = Number(prompt('Ingresa nota 1'));
const nota2 = Number(prompt('Ingresa nota 2'));
const nota3 = Number(prompt('Ingresa nota 3'));
const promedio = (nota1 + nota2 + nota3) / 3;
alert(`El promedio de ${nota1}+${nota2}+${nota3} es ${promedio}`);

// 10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.

const posONeg = Number(prompt('Ingresa un numero'));
const result = posONeg >= 0 ? `El numero ${posONeg} es positivo` : `El numero ${posONeg} es negativo`;
alert(result);

// 11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.

const edadUsuario = Number(prompt('Ingresa tu edad'));
if (edadUsuario > 17) {
  alert(`Eres mayor de edad`);
} else {
  alert(`Eres menor de edad`);
}

// 12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.

const diaSemana = prompt(
  'Ingrese un numero del 1 al 7 \n 1. Lunes \n 2. Martes \n 3. Miércoles \n 4. Jueves \n 5. Viernes \n 6. Sábado \n 7. Domingo',
);

switch (diaSemana) {
  case '1':
    alert('Hoy es lunes');
    break;
  case '2':
    alert('Hoy es martes');
    break;
  case '3':
    alert('Hoy es miércoles');
    break;
  case '4':
    alert('Hoy es jueves');
    break;
  case '5':
    alert('Hoy es viernes');
    break;
  case '6':
    alert('Hoy es sábado');
    break;
  case '7':
    alert('Hoy es domingo');
    break;

  default: 
    alert('No coincide con las opciones');
    break;
}
