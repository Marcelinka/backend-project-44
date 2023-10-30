/**
 * Возвращает случайное число от min до max, включая максимальное число.
 *
 * @param {number} min - целое число, минимальное значение
 * @param {number} max - целое число, максимальное значение
 * @returns {number}
 */
export default function getRandomInt(min, max) {
  const maxIncluded = max + 1; // включаем максимальное число
  return Math.floor(Math.random() * (maxIncluded - min) + min);
}
