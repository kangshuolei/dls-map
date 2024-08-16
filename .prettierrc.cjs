module.exports = {
  printWidth: 80,                  // 每行最大长度
  tabWidth: 2,                     // 缩进的空格数
  useTabs: false,                  // 使用空格代替制表符
  semi: true,                      // 语句末尾是否加分号
  singleQuote: true,               // 使用单引号代替双引号
  quoteProps: 'as-needed',         // 对象属性是否使用引号 ("as-needed" | "consistent" | "preserve")
  jsxSingleQuote: false,           // 在 JSX 中使用单引号代替双引号
  trailingComma: 'es5',            // 在对象或数组最后一个元素后是否加逗号 ("none" | "es5" | "all")
  bracketSpacing: true,            // 对象字面量中花括号的空格 ("{ foo: bar }")
  jsxBracketSameLine: false,       // 在多行 JSX 元素中，将 `>` 放在最后一行的末尾
  arrowParens: 'always',           // 箭头函数参数总是带括号 ("avoid" | "always")
  proseWrap: 'preserve',           // Markdown 文件中是否换行 ("always" | "never" | "preserve")
  htmlWhitespaceSensitivity: 'css',// HTML 文件中空格的敏感度 ("css" | "strict" | "ignore")
  endOfLine: 'lf'                  // 换行符格式 ("lf" | "crlf" | "cr" | "auto")
}
