/**
 * 过滤特殊字符
 */
export function stripscript(s) {
  var pattern = new RegExp(
    "[`~!@#$%^&*()=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——|{}【】‘；：“”’。，？]"
  );
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
}

/**
 * 验证邮箱
 * @param {*} value
 */
export function validateEmailReg(value) {
  var reg = /^([a-zA-Z|0-9])\w+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/i;
  return !reg.test(value) ? false : true;
}

/**
 * 验证密码
 * @param {传入的密码}} value
 */
export function validatePasswordReg(value) {
  let reg = /^(\w){6,20}$/;
  return !reg.test(value) ? false : true;
}

export function validateCodeReg(value) {
  let reg = /^[a-z0-9A-Z]{6}$/;
  return !reg.test(value) ? false : true;
}
