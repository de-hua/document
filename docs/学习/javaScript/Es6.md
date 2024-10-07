# Es6

::: danger 什么是 Es6 呢？

可以说是 js 的高级语法

方便日常开发项目使用，前端非常有必要学习的一项，可以说是必学的一项！！！

:::

## 一 let 声明变量和 const 声明变量

| 关键字  | 作用域     | 变量提升   | 可修改性 | 重复声明       | 声明时初始化                   |
| ------- | ---------- | ---------- | -------- | -------------- | ------------------------------ |
| `let`   | 块级作用域 | 不会被提升 | 可修改   | 不允许重复声明 | 可选，未初始化时为 `undefined` |
| `const` | 块级作用域 | 不会被提升 | 不可修改 | 不允许重复声明 | 必须初始化                     |
| `var`   | 函数作用域 | 会被提升   | 可修改   | 允许重复声明   | 可选，未初始化时为 `undefined` |

## 二  解构赋值

::: danger 什么是解构赋值？

可以快速的从对象或者数组里面提取出一个成员的语法方式

:::

### 2.1数组的解构赋值

```js
 // 数组结构赋值
    let arr = [1, 2, 3, 4, 5]
    let [a, b, c, d, e] = arr   // 注意要一一对应
    let [, , , , , E] = arr  // 不想取，也可以空着，但是要一一对应

    // 写一个小例子  交换两个变量的值
    let x = 1
    let y = 2
    [y, x] = [x, y]

    // 多层嵌套怎么取
    let arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    let [[a, b, c], [d, e, f], [g, h, i]] = arr2
```

### 2.2对象的结构赋值

```js
 // 对象的结构赋值
    let obj = {
      age: 23,
      name: 'zhangsan'
    }
    // 以前取法
    // let age = obj.age
    // let name = obj.name
    // 结构赋值的取法
    // let { age, name } = obj
    // console.log(age, name);  //23 'zhangsan'

    // 交换位置试一下
    // 发现没事，只是交换了位置  ！！和位置没关系，并且想取哪个取哪个
    let { name, age } = obj
    console.log(age, name)  //23 'zhangsan'

    // 重命名
    let { name: myName, age: myAge } = obj
    console.log(myName, myAge)  //zhangsan 23

    // 默认值
    let { name: myName2 = 'zhangsan', age: myAge2 = 23 } = obj
    console.log(myName2, myAge2)  //zhangsan 23

    // 嵌套取法
    let obj1 = {
      name1: "dehua",
      info: {
        list: ["1", "2", "3"]
      }
    }
    let { name1, info: { list } } = obj1; // 提取 list 数组
    let [a, b, c] = list; // 解构赋值数组
```

## 三 模板字符串

```js
   /**
     * 1.可换行
     * 2.可拼接变量
     * 3.还可以放表达式
    **/
    let name = "张三"
    let age = 23

    let str = `我叫${name},今年${2022 - age}岁了`
    console.log(str)  //我叫张三,今年1999岁了

```

## 其他拓展

### 字符串拓展

1. includes
2. startsWith
3. endsWith
4. repeat

```js
 // 字符串拓展
    let name = "dehua"

    // 1. includes  包含
    console.log(name.includes("h"));  //true
    console.log(name.includes("dehu")); //true
    console.log(name.includes("q"));  //false

    // 2.startsWith           开头
    console.log(name.startsWith("d"));  //true
    console.log(name.startsWith("h"));  //false

    // 3.endsWith             结尾
    console.log(name.endsWith("a"));  //true
    console.log(name.endsWith("h"));  //false
    // 这三个可以写，第二个参数，下标，也就是从哪里开始检索
    console.log(name.includes("h", 1));  //true
    console.log(name.startsWith("e", 1));  //true
    // startsWith 有一点不一样  第二个参数，下标，也就是从哪里开始检索，检索前面的内容，下标后面的不检索
    console.log(name.endsWith("h", 3));  //true

    // 4. repeat  重复  传数字  返回新的字符串
    console.log(name.repeat(3));  //dehadehadeha
```

### 数字拓展

1. Number.isNaN
2. Number.isFinite

```js
  // 1.支持 二进制(0b/0B开头)  八进制 （0o/0O开头）十进制(直接数字表示) 十六进制（0x/0X开头） 写法
    let num1 = 0b1010   //二进制
    let num2 = 0o123   //八进制
    let num3 = 42    //十进制
    let num4 = 0x2A  //十六进制
    console.log(num1, num2, num3, num4);  //10  10  42  42

    // 1.Number.isNaN     只有当值为 NaN 时，Number.isNaN 才会返回 true，否则返回 false。
    console.log(Number.isNaN(NaN)); // 输出: true
    console.log(Number.isNaN(42)); // 输出: false
    console.log(Number.isNaN("Hello")); // 输出: false
    console.log(Number.isNaN(undefined)); // 输出: false
    console.log(Number.isNaN(null)); // 输出: false


    // 2.Number.isFinite  不会将非数字类型的值转换为数字，而是直接判断其是否为有限的数字。
    console.log(Number.isFinite(42)); // 输出: true
    console.log(Number.isFinite(NaN)); // 输出: false
    console.log(Number.isFinite(Infinity)); // 输出: false
    console.log(Number.isFinite(-Infinity)); // 输出: false
    console.log(Number.isFinite("Hello")); // 输出: false
    console.log(Number.isFinite(undefined)); // 输出: false
    console.log(Number.isFinite(null)); // 输出: false
```

### Math拓展

1. Math.trund
2. Math.sign 

```js
    // Math.trund    //返回整数
    console.log(Math.trunc(42.42)); // 42
    console.log(Math.trunc(-42.42)); // -42

    // Math.sign
    // Math.trund    //返回整数
    // 如果参数是正数，返回 1。
    // 如果参数是负数，返回 - 1。
    // 如果参数是 0，返回 0。
    // 如果参数是 NaN，返回 NaN。
    console.log(Math.sign(42)); // 1
    console.log(Math.sign(-42)); // -1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign("sss")); //NaN
```

### 数组的拓展

```js
 let arr = [1, 2, 3]
    let ar = [3, 4, 5]

    // 1。 ... 展开运算符
    // 比如我现在想复制数组
    // 以前的方法
    let arr1 = arr
    let arr2 = arr.concat()

    // 现在的方法 复制 很简单 （浅拷贝） 
    let arr3 = [...arr]

    // 合并数组
    let arr4 = [...arr, ...ar]
    console.log(arr4);   //123345

    // 取数据  以前不是要一一对应吗 现在剩余的参数可以使用 ...接住
    // 但是注意，只能是最后一个
    let [a, b, c, ...d] = arr4
    console.log(a, b, c, d);  //1,2,3,[3,4,5]


    // 2.Array.from   把类数组转换成数组
    // 类数组对象
    let arrayLike = {
      0: "apple",
      1: "banana",
      2: "orange",
      length: 3
    };

    let newArray = Array.from(arrayLike);
    console.log(newArray); // 输出: ["apple", "banana", "orange"]

    // 可迭代对象
    let iterable = "hello";
    let newArray2 = Array.from(iterable);
    console.log(newArray2); // 输出: ["h", "e", "l", "l", "o"]



    // 3. find    查找  参数传递一个函数，返回第一个满足的元素
    // 如果找不到满足条件的元素，则 find 方法返回 undefined。
    const numbers = [1, 2, 3, 4, 5];

    const found = numbers.find((element) => element > 3);
    console.log(found); // 输出: 4
    // 4. findIndex  查找
    // 如果找不到满足条件的元素，则 findIndex 方法返回 -1。
    const numbers1 = [1, 2, 3, 4, 5];

    const index = numbers.findIndex((element) => element > 3);
    console.log(index); // 输出: 3


    // 5. findLast

    // 6. findLastIndex  从末尾开始查找
    // 如果找不到满足条件的元素，则 findLastIndex 方法返回 -1。

    // 7.fill
    const numbers3 = [1, 2, 3, 4, 5];
    numbers.fill(0);
    console.log(numbers); // 输出: [0, 0, 0, 0, 0]

    const numbers4 = [1, 2, 3, 4, 5];

    numbers.fill(0, 1, 4);
    console.log(numbers); // 输出: [1, 0, 0, 0, 5]
    // 索引从 1 到 3（不包括索引 4）的元素替换为 0。注意，原始数组的第一个元素不受替换影响


    // 8.flat  数组扁平化
    let nestedArray = [1, 2, [3, 4, [5, 6]]];

    // 默认深度为 1
    const flatArray1 = nestedArray.flat();
    console.log(flatArray1); // 输出: [1, 2, 3, 4, [5, 6]]

    // 指定深度为 2
    const flatArray2 = nestedArray.flat(2);
    console.log(flatArray2); // 输出: [1, 2, 3, 4, 5, 6]

    // 9.flatMap
    const numbers5 = [1, 2, 3, 4, 5];

    const doubledAndSquared = numbers.flatMap((num) => [num * 2, num ** 2]);
    console.log(doubledAndSquared); // 输出: [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]
```

### 对象的拓展

1. Object.assign

````js
  // 原先的对象声明方式，了解即可
    let obj = {
      name: "dehau",
      test: function () {
        console.log(this.name);
      }
    }

    obj.test()  //dehau

    // 1.简写方式
    let name = "dehya"
    let obj2 = {
      name,   //name:name 可以简写
      test () {   //箭头函数
        console.log(this.name);
      }
    }
    obj2.test()  //dehya


    // 2.键名的方式
    let moudle = "test"
    let obj3 = {
      name,   //name:name 可以简写
      [moudle + "test"] () {   //箭头函数
        console.log(this.name);
      }
    }
    console.log(obj3); //  { name: 'dehya', testtest: ƒ }

    // 2.合并对象  ...  展开运算符   有相同的键  会替换掉
    let obj1 = {
      name: "dehua1"
    }
    let obj4 = {
      name: "dehua2"
    }
    let obj5 = {
      name: "dehua3"
    }

    console.log({ ...obj1, ...obj4, ...obj5 }); // { name: 'dehua3' }


    // 3.合并对象   把其余类型合到 第一个对象上面
    let obj6 = {
      name: "dehua1"
    }
    let obj7 = {
      name: "dehua2"
    }
    let obj8 = {
      name: "dehua3"
    }

    console.log(Object.assign(obj6, obj7, obj8)); // { name: 'dehua3' }
````

### 函数的拓展

```

```

