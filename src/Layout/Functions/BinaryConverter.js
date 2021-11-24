export default function BinaryConverter(number) {
    number=parseInt(number)
  let newnumber=0;
  let i = 1;
  let variable;
  while (number !== 0) {
    variable = number % 10;
    number = Math.floor(number / 10);
    newnumber = newnumber + i * variable;
    i=i*2
  }
  return newnumber;
}