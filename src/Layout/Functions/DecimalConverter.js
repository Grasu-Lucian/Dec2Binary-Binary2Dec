
export default function DecimalConverter(number) {
    number=parseInt(number)
  let newnumber=0;
  let i = 1;
  let variable;
  while (number !== 0) {
    variable = number % 2;
    number = Math.floor(number / 2);
    newnumber = newnumber + i * variable;
    i=i*10
  }
  return newnumber;
}
