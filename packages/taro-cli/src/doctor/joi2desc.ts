/* 
 *  MIT License
 *  
 *  Copyright (c) 2018 O2Team、58.com、other contributors
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 */

const joi2desc = {
  'alternatives.base': '不符合任何一个可选项',
  'any.empty': '不允许为空',
  'any.required': '必须填写',
  'any.unknown': '',
  'array.base': '应该为数组类型',
  'any.allowOnly': '',
  'any.default': '',
  'any.invalid': '',
  'array.excludes': '',
  'array.excludesSingle': '',
  'array.includesRequiredBoth': '',
  'array.includesRequiredKnowns': '',
  'array.includesRequiredUnknowns': '',
  'array.includes': '',
  'array.includesSingle': '',
  'array.length': '',
  'array.max': '',
  'array.min': '',
  'array.orderedLength': '',
  'array.ref': '',
  'array.sparse': '',
  'array.unique': '',
  'binary.base': '',
  'binary.length': '',
  'binary.max': '',
  'binary.min': '',
  'boolean.base': '应该为布尔值',
  'date.base': '应该为一个日期',
  'date.greater': '',
  'date.isoDate': '',
  'date.less': '',
  'date.max': '',
  'date.min': '',
  'date.ref': '',
  'date.strict': '',
  'date.timestamp.javascript': '',
  'date.timestamp.unix': '',
  'function.arity': '',
  'function.base': '应该为一个函数',
  'function.class': '',
  'function.maxArity': '',
  'function.minArity': '',
  'function.ref': '',
  'lazy.base': '',
  'lazy.schema': '',
  'number.base': '应该为一个数字',
  'number.greater': '',
  'number.integer': '',
  'number.less': '',
  'number.max': '',
  'number.min': '',
  'number.multiple': '',
  'number.negative': '',
  'number.port': '',
  'number.positive': '',
  'number.precision': '',
  'number.ref': '',
  'number.unsafe': '',
  'object.allowUnknown': '不合法的字段',
  'object.and': '',
  'object.assert': '',
  'object.base': '应该为一个对象',
  'object.length': '',
  'object.max': '',
  'object.min': '',
  'object.missing': '',
  'object.nand': '',
  'object.rename.multiple': '',
  'object.rename.override': '',
  'object.rename.regex.multiple': '',
  'object.rename.regex.override': '',
  'object.schema': '',
  'object.type': '',
  'object.with': '',
  'object.without': '',
  'object.xor': '',
  'string.alphanum': '',
  'string.base64': '',
  'string.base': '应该为一个字符串',
  'string.creditCard': '',
  'string.dataUri': '',
  'string.email': '',
  'string.guid': '',
  'string.hexAlign': '',
  'string.hex': '',
  'string.hostname': '',
  'string.ipVersion': '',
  'string.ip': '',
  'string.isoDate': '',
  'string.length': '',
  'string.lowercase': '',
  'string.max': '',
  'string.min': '',
  'string.normalize': '',
  'string.ref': '',
  'string.regex.base': '',
  'string.regex.name': '',
  'string.regex.invert.base': '',
  'string.regex.invert.name': '',
  'string.token': '',
  'string.trim': '',
  'string.uppercase': '',
  'string.uri': '',
  'string.uriCustomScheme': '',
  'string.uriRelativeOnly': '',
  'symbol.base': '',
  'symbol.map': ''
}

export default function (error) {
  return joi2desc[error.type] || error.message
}
