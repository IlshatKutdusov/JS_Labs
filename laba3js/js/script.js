function date() {
  var date = new Date();
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  var year = document.getElementById("year");
  day.innerHTML +=  date.toLocaleString("ru", {weekday: 'long'});
  month.innerHTML += date.toLocaleString("ru", {day: 'numeric', month: 'long', year: 'numeric'});
}

function session() {
  var date = new Date();
  var s = new Date(2017, 5, 16);
  date.setHours(0, 0, 0, 0);
  date = s - date;
  var session = document.getElementById("session");
  session.value = "До сессии осталось: " + (date / 86400000 - 1) + " дней";
}

function days() {
  var s = prompt("Введите дату ГГГГ-ММ-ДД");
  s = Date.parse(s);
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  date = date - s;
  var days = document.getElementById("days");
  days.value = "Уже прошло: " + (Math.floor(date / 86400000) + 1) + " дней";
}

function sum() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  if (isNaN(first) || isNaN(last) || first == "" || last == "" || first == null || last == null) {
    alert("Некорректный ввод");
    return;
  }
  var r = 0;
  for (var i = Number(first); i <= Number(first) + Number(last); i++)
    r += (Math.pow((-1), (i - 1)) * Math.pow((i + 4), 2));
  sumresult.value = "Результат: " + r;
}

date();
session();

/*
1  11  10  101  00  01

1. Создать HTML-страницу, которая при загрузке выводит на страницу текущий день
недели, число, месяц и год. Для месяцев и дней недели следует организовать массивы. При
этом вывод должен быть организован с применением таблицы, в которой: 1 —
две строки, где в первой строке размещается год число и месяц, а во второй день недели.

2. Далее на разрабатываемой HTML-странице выводить количество дней оставшихся до
сессии11: 11 — в не редактируемом текстовом поле12.

3. Далее на HTML-странице нужно разместить кнопку, при щелчке на которую следует
запрашивать памятную для вас дату и ниже (или сбоку) выводить: 10 — в кнопке.

4. Найти и вывести сумму заданного количества членов числовой последовательности,
начиная с указанного (по номеру), задав эти параметры следующим далее образом (см. ниже
следующие пп.). Указанную сумму предлагается вычислять для одной из следующих
целочисленных числовых последовательностей:

101 — (-1)^(n-1) * (n+4)^2

5. Задав номер первого её члена и количество слагаемых последующих членов в: 00 —
отдельных текстовых полях.

6. В код кнопки для вычисления суммы определенного числа членов
последовательности ввести проверку на корректность введённых данных. При этом для
проверки корректности ввода данных запрещено использовать функцию: 01 —
parseFloat(). Но при этом требует обеспечить корректность ввода данных.
*/