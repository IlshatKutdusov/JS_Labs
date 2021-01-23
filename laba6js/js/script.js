"use strict";

function isInteger(num) {
    return (num ^ 0) === num;
}

function parent(a, b, c, d, x) {
  try {
    if (arguments.length != 5)
      throw new SyntaxError("Недостаточно свойств для создания объекта.");
    if (!isInteger(a) || !isInteger(b) || !isInteger(c) || !isInteger(d))
      throw new SyntaxError("Ошибка! Некорректные значения аргументов!");
    this.a = a;
    this.b = b;
    this.c = c;
	this.getX = function() {
		return x;
		}
    this.d = d;
  } catch (e) {
    document.write(e + "<br/><br/>");
  }
}


parent.prototype.average = function () {
  return (this.a + this.b + this.c + this.d) / 4;
};

parent.prototype.max = function () {
  var max = this.a;
  if (max < this.b)
    max = this.b;
  if (max < this.c)
    max = this.c;
  if (max < this.d)
    max = this.d;
  return max;
};

function child(a, b, c, d, x) {
  try {
    if (arguments.length != 5)
      throw new SyntaxError("Недостаточно свойств для создания объекта.");
    if (!isInteger(a) && a || !isInteger(b) && b || !isInteger(c) && c || !isInteger(d) && d || isNaN(x) && a)
      throw new SyntaxError("Ошибка! Некорректные значения аргументов!");
    this.a = a || 1;
    this.b = b || 2;
    this.c = c || 3;
    this.d = d || 4;
    this.x = x || 5;
  } catch (e) {
    document.write(e + "<br/><br/>");
  }
}

child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

child.prototype.squares = function () {
  function square(a, b) {
    return a * a - 2 * a * b + b * b;
  }
  return square(this.a, this.x) + square(this.b, this.x) + square(this.c, this.x) + square(this.d, this.x);
};

document.write('Примеры работы:<br>');

var int = new parent(1, 2, 3, 4, 5);
document.write('Parent #1<br>');
document.write("var int = new parent(1, 2, 3, 4); <br>");
document.write("int.a = " + int.a + ' <br>');
document.write("int.b = " + int.b + ' <br>');
document.write("int.c = " + int.c + ' <br>');
document.write("int.d = " + int.d + ' <br>');
document.write("int.x = " + int.getX() + ' <br>');
document.write("int.average() = " + int.average() + ' <br>');
document.write("int.max() = " + int.max() + ' <br><br>');

document.write('Parent #2<br>');
document.write("var int = new parent(1); <br>");
int = new parent(1);

document.write('Parent #3<br>');
document.write("var int = new parent(1, 2, '3', 4); <br>");
int = new parent(1, 2, '3', 4, 5);

int = new child(1, 2, 3, 4, 5);
document.write('Child #1<br>');
document.write("var int = new child(1, 2, 3, 4, 5); <br>");
document.write("int.a = " + int.a + ' <br>');
document.write("int.b = " + int.b + ' <br>')
document.write("int.c = " + int.c + ' <br>');
document.write("int.d = " + int.d + ' <br>');
document.write("int.x = " + int.x + ' <br>');
document.write("int.average() = " + int.average() + ' <br>');
document.write("int.max() = " + int.max() + ' <br>');
document.write("int.squares() = " + int.squares() + ' <br><br>');

document.write('Child #2<br>');
document.write("var int = new child(1); <br>");
int = new child(1);

document.write('Child #3<br>');
document.write("var int = new child(1, 2, '3', 4, 5); <br>");
int = new child(1, 2, '3', 4, 5);

/*1. Число аргументов функции-конструктора родителя соответствует числу свойств
создаваемого объекта: 1 — да — выбрасывается
исключение с описанием ошибки, указывающем на то, что параметров для создания
объекта недостаточно.
2. Осуществлять проверку корректности задания значений аргументов функцииконструктора родителя: 1 — да.
3. Число аргументов функции-конструктора потомка соответствует числу свойств
создаваемого объекта: 1 — да — выбрасывается
исключение с описанием ошибки, указывающем на то, что параметров для создания
объекта недостаточно.
4. Осуществлять проверку корректности задания значений аргументов функцииконструктора потомка: 1 — да.
5. Создать одно частное свойство20 для объекта родителя: 0 — нет
6. Создать одно частное свойство для объекта потомка: 0 — нет
7. Поместить описание одного из методов родителя в его прототип: 1 — да.
8. Поместить описание одного из методов потомка в его прототип: 1 — да.
9. Номера реализуемых классов родителя и потомка: номер в таблицах 1.1. и 1.2 за
вычетом единицы в шестнадцатеричной системе счисления.

Родитель
Четыре целых числа:
a,b,c,d
Вычислить среднее
арифметическое чисел
Определить максимальное
из чисел


Потомок
Четыре целых числа:
a,b,c,d
Пять чисел: четыре целых
числа (a,d,c,d) и число х
Вычислить сумму квадратов разности каждого из
четырех чисел и числа х.

*/