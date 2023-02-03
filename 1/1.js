const temp_celsius = parseInt(prompt("Введите температуру для перевода"));
alert(`Цельсия: ${temp_celsius}, Фаренгейт: ${Math.round(1.8 * temp_celsius + 32)}`); 