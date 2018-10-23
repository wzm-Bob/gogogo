
/* 方法 */
export const validateUser = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("用户名不能为空"));
    } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        callback(new Error("用户名只能包含中英文字符，数字和下划线"));
    } else {
        callback();
    }
};
export const validatePass = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("密码不能为空"));
    } else if (!/^[0-9a-zA-Z]{6,14}$/.test(value)) {
        callback(new Error(" 登录密码只能为6-14位数字或英文字符哦！"));
    } else {
        /*看来必须要有else啊 不然一直转圈刷新*/
        callback();
    }
};
export const validatePhone = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("手机号不能为空"));
    } else if (
        !/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
            value
        )
    ) {
        callback(new Error(" 手机号码格式错啦!"));
    } else {
        callback();
    }
};
export const validateCaptcha = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("验证码不能为空"));
    } else if (!/^[0-9]*$/.test(value)) {
        callback(new Error("验证码不能是非数字"));
    } else {
        callback();
    }
};