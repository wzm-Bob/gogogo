<template>
    <div>
        <Tabs value='account'>
            <TabPane label='账户密码登录' name='account'>
                <Form ref='account' :model='formLogin' :rules='ruleCustom'>
                    <FormItem prop='user'>
                        <Input type='text' v-model='formLogin.user' placeholder='admin/user'>
                        <Icon type='ios-person-outline' slot='prepend'></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop='password'>
                        <Input type='password' v-model='formLogin.password' placeholder='888888/123456'>
                        <Icon type='ios-locked-outline' slot='prepend'></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Row class='add__margin'>
                            <Col span='18'>
                            <!--注意事件要用@监听 属性要用：绑定-->
                            <Checkbox @on-change='onTabChange' v-model='formLogin.single'>自动登录</Checkbox>
                            </Col>
                            <Col span='6'>
                            <span class='forget'>
                                <router-link to='/IndexPage'>忘记密码</router-link>
                            </span>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button type='primary' @click='onSubmit(`account`)' :disabled='formLogin.isDisabled' :class='{disabled:formLogin.isDisabled}' long>{{formLogin.loginState}}</Button>
                        <!--  <Button type='primary'  @click='formLoginReset('formLogin')' long>重置</Button> -->
                    </FormItem>
                </Form>
            </TabPane>
            <TabPane label='手机号码登录' name='mobile'>
                <Form ref='mobile' :model='formLogin' :rules='ruleCustom'>
                    <FormItem prop='phone'>
                        <Input type='text' v-model='formLogin.phone' placeholder='17797592879'>
                        <Icon type='ios-telephone-outline' slot='prepend'></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span='16'>
                            <FormItem prop='captcha'>
                                <Input type='text' v-model='formLogin.captcha' placeholder='1234'>
                                <Icon type='ios-email-outline' slot='prepend'></Icon>
                                </Icon>
                                </Input>
                            </FormItem>
                            </Col>
                            <Col span='6' style='width:29%;' offset='1'>
                            <Button type='default' style='width:100%' @click='onGetCaptcha' :disabled='!show'>
                                <span v-show='show'>获取验证码</span>
                                <span v-show='!show' class='count'>{{count}} s</span>
                            </Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row class='add__margin'>
                            <Col span='18'>
                            <Checkbox on-change='onTabChange' v-model='formLogin.single'>自动登录</Checkbox>
                            </Col>
                            <Col span='6'>
                            <span class='forget'>
                                <router-link to='/IndexPage'>忘记密码</router-link>
                            </span>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button type='primary' @click='onSubmit(`mobile`)' :disabled='formLogin.isDisabled' :class='{disabled: formLogin.isDisabled}' long>{{formLogin.loginState}}</Button>
                        <!--  <Button type='primary'  @click='formLoginReset('formLogin')' long>重置</Button> -->
                    </FormItem>
                </Form>
            </TabPane>
        </Tabs>
        <Row class='add__margin'>
            <Col span='18'>
            <span>其他登录方式</span>
            <span>
                <a @click="See('https://github.com/wzm-Bob/VUE.git')">
                    <Icon type="ios-alarm-outline" />
                </a>
                <!-- 这里跳外站链接不能用router-link  -->
                <!-- <router-link @click="See('https://github.com/wzm-Bob/VUE.git')">
                <Icon type='social-tux'></Icon>
              </router-link> -->
            </span>
            <span>
                <a @click="See('https://github.com/wzm-Bob/VUE.git')">
                    <Icon type="logo-android" />
                </a>
            </span>
            <span>
                <a @click="See('https://github.com/wzm-Bob/VUE.git')">
                   <Icon type="logo-apple" />
                </a>
            </span>
            </Col>
            <Col span='6'>
            <span class='forget'>
                <router-link to='/registerWrap'>注册账户</router-link>
            </span>
            </Col>
        </Row>
        <Modal v-if='formLogin.error' :styles="{top: '20px'}">
            <p>{{formLogin.error}}</p>
        </Modal>
    </div>
</template>
<script>
// import { loginByUsername } from "../../api/api.js";
import { validateUser, validatePass, validatePhone, validateCaptcha } from "../../utils/valid.js";
//Alt+Shift+F格式化
export default {
    name: 'loginWrap',
    data() {
        return {
            show: true,
            count: "",
            timer: null,
            formLogin: {
                count: "获取验证码",
                user: "",
                single: false,
                password: "",
                phone: "",
                captcha: "",
                loginState: "登录",
                isDisabled: false,
                error: ""
            },
            ruleCustom: {
                user: [
                    {
                        validator: validateUser,
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        validator: validatePass,
                        trigger: "blur"
                    }
                    /*   { min: 6, message: '请输入最少6位' } */
                ],
                phone: [
                    {
                        validator: validatePhone,
                        trigger: "blur"
                    }
                ],
                captcha: [
                    {
                        validator: validateCaptcha,
                        trigger: "blur"
                    }
                ]
            }
        };
    },

    methods: {
        See(e) {
            window.location.href = e;
        },
        onGetCaptcha() {
            const TIME_COUNT = 59;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        },
        onTabChange() {
            if (
                this.formLogin.single == true &&
                localStorage.getItem("user") &&
                localStorage.getItem("password")
            ) {
                this.formLogin.user = localStorage.getItem("user");
                this.formLogin.password = localStorage.getItem("password");
                setTimeout(() => {
                    this.$router.push({ name: "IndexPage" });
                }, 2000);
            }
        },
        beforeSubmit(name) {
            this.formLogin.isDisabled = true;
            this.formLogin.loginState = "正在登录...";
        },
        onSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.validBehind(name);
                } else {
                    return false;
                }
            });
        },
        validBehind(name) {
            debugger
            this.beforeSubmit(name);
            let usermain;
            let usercap;
            if (name == "account") {
                usermain = this.formLogin.user;
                usercap = this.formLogin.password;
            } else {
                usermain = this.formLogin.phone;
                usercap = this.formLogin.captcha;
            }
            //let loginInfo = this.formLogin;
           /*  loginByUsername().then(function (response) {
                debugger
                console.log(response);
            }).catch(function (error) {
                    console.log(error);
                }); */

              this.$store
                 .dispatch("login", {
                     user: usermain,
                     password: usercap
                 })
                 .then(res => {
                     debugger
                     /* JSON.parse() 方法用于将一个 JSON 字符串转换为对象 */
                     const infos = res.data;
                     if (infos.status === "ok") {
                         this.onSuccess(infos);
                     } else {
                         this.onError(infos);
                     }
                 }); 
        },
        onSuccess(res) {
            debugger
            if (
                this.formLogin.single == true &&
                this.formLogin.user != "" &&
                this.formLogin.password != ""
            ) {
                localStorage.setItem("user", this.formLogin.user);
                localStorage.setItem("password", this.formLogin.password);
            } else {
                localStorage.removeItem("user");
                localStorage.removeItem("password");
            }
            // console.log('complete!')
            this.$router.push({ name: "HomeLayout" });
        },
        onError(err) {
            this.$Modal.error({
                content: err.currentAuthority
            });

            this.formLogin.loginState = "登录";
            this.formLogin.isDisabled = false;
        },
        formLoginReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
<style lang="scss" >
/* （block）、元素（element）、修饰符（modifier)  bem css命名规范*/
@media (min-width: 768px) {
    .ivu-layout-content {
        padding: 112px 0 24px;
    }
}
.ivu-layout-content {
    flex: 1 1;
}
.ivu-col-span-6 {
    text-align: right;
}
.top___3tcoI {
    text-align: center;
}
.main___2jCiI {
    width: 368px;
    margin: 0 auto;
}
.header___3StSZ {
    height: 44px;
    line-height: 44px;
}
.ivu-btn-long {
    height: 40px;
    font-size: 16px;
    letter-spacing: 2px;
}
.ivu-checkbox-wrapper {
    font-size: 14px;
}
.ivu-tabs-nav {
    width: 100%;
    margin: 4px 0;
}
.ivu-radio-wrapper,
.add__margin span {
    font-size: 14px;
    margin-right: 4px;
}
.forget {
    color: #57a3f3;
}
.ivu-btn-ghost {
    height: 40px;
    background: #fff;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    padding: 6px 12px;
}
.ivu-icon {
    font-size: 20px;
}
.ivu-tabs-nav .ivu-tabs-tab {
    font-size: 16px;
}
.ivu-input {
    height: 40px;
    outline: none;
}
.ivu-tabs-nav-scroll {
    text-align: center;
}
.ivu-tabs-ink-bar {
    left: 40px;
}
.ivu-tabs-bar {
    border-bottom: none;
    margin-bottom: 24px;
}
.ivu-input-group-append,
.ivu-input-group-prepend {
    background: #fff;
    border-radius: 3px;
}
.ivu-input-group-append,
.ivu-input-group > .ivu-input:last-child {
    border-left: 0;
}
.header___3StSZ a {
    text-decoration: none;
}
.logo___2CWIy {
    height: 44px;
    vertical-align: top;
    margin-right: 16px;
}
.title___2h165 {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.85);
    font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
}
.desc___i73Yc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 12px;
    margin-bottom: 40px;
}
.index__links___1TMBe {
    margin-bottom: 8px;
}
.index__copyright___3hvsv {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
}

.index__links___1TMBe a:not(:last-child) {
    margin-right: 40px;
}

.index__links___1TMBe a {
    color: rgba(0, 0, 0, 0.45);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.ivu-modal-confirm-footer {
    margin-top: 0;
}
.ivu-btn-large {
    padding: 2px 8px;
}
.ivu-layout-footer {
    margin: 0 auto;
    text-align: center;
}
.layout {
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
}
.anticon {
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.anticon-copyright:before {
    content: "\E6DE";
}
.anticon:before {
    display: block;
    font-family: "anticon" !important;
}
.ivu-layout-footer a,
.ivu-layout-footer .index__copyright___3hvsv {
    color: rgba(0, 0, 0, 0.45);
}
</style>

