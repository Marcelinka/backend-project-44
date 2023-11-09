export default function getGcd(n1, n2) {
  if (n2 === 0) return n1;
  return getGcd(n2, n1 % n2);
}
