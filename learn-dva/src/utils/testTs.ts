
/**
 * @description: 创建一个枚举对象，枚举关联的数字，有点类似数组。但是这个关联数字可以更改，常见的有通过位移进行更改
 */

enum NoYes {
  No,
  Yes,
}
function toChinese(value: NoYes) {
  switch (value) {
    case NoYes.No:
      return "否";
    case NoYes.Yes:
      return "是";
    default:
      break;
  }
}
console.log(toChinese(NoYes.No));//否
console.log(NoYes.No);//0
console.log(NoYes[0]);//No



