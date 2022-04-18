<template>
  <div class="box">
    <!-- 登陆页面 -->
    <div class="login">
      <div class="container">
        <div class="box">
          <div class="smallbox">
            <div class="title">
              <span>扫描登陆</span>
              <span>账号登陆</span>
            </div>
            <el-form
              ref="form"
              :model="form"
              class="demo-ruleForm"
              label-width="80px"
              :rules="rules"
              :hide-required-asterisk="true"
            >
              <el-form-item label="用户名" prop="phone">
                <el-input
                  v-model="form.phone"
                  placeholder="邮箱/用户名/手机号"
                  size="small"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  v-model="form.password"
                  placeholder="请输入密码"
                  size="small"
                ></el-input>
              </el-form-item>
            </el-form>
            <!-- <ul>
              <li class="clearfix">
                <span></span>
                <input type="text" v-model="phone" />
                <div class="mes">错误提示信息</div>
              </li>
              <li class="clearfix">
                <span></span>
                <input type="password" v-model="password" />
                <div class="mes">错误提示信息</div>
              </li>
            </ul> -->
            <ol class="clearfix">
              <li>
                <input type="checkbox" name="" id="" />
                自动登录
              </li>
              <li>
                <a href="#">忘记密码</a>
              </li>
            </ol>
            <div class="loginbtn" @click="goLogin()">
              登&nbsp;&nbsp;&nbsp;&nbsp;录
            </div>
            <div class="type">
              <ul>
                <li>
                  <a href="#">
                    <img src="./images/qq.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/sina.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/ali.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/weixin.png" alt="" />
                  </a>
                </li>
                <router-link to="/register" class="register"
                  >立即注册</router-link
                >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      rules: {
        phone: [
          { required: true, message: "手机号是必须的", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "手机号格式无效",
            trigger: ["change", "blur"],
          },
        ],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
          { min: 6, message: "密码格式无效", trigger: ["change", "blur"] },
        ],
      },
    };
  },
  methods: {
    goLogin() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const { phone, password } = this.form;
            await this.$store.dispatch("goLogin", { phone, password });
            alert("登陆成功！");
            this.$router.push({ name: "Home" });
          } catch (error) {
            alert("密码不正确");
          }
        } else {
          alert("用户名、密码不规范");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-ruleForm {
  margin-top: 20px;
}
.login {
  width: 100%;
  height: 487px;
  background-color: #e93854;
  .container {
    width: 1200px;
    height: 100%;
    position: relative;
    background: url("./images/loginbg.png") no-repeat;
    .box {
      width: 420px;
      height: 406px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      padding: 20px;
      .smallbox {
        height: 366px;
        border: 1px solid #ccc;
        .title {
          height: 50px;
          width: 380px;
          span {
            width: 188px;
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            line-height: 50px;
            text-align: center;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            &:nth-child(2) {
              border-bottom: none;
              color: #e93854;
            }
          }
        }
        ul {
          margin: 30px 20px;
          li {
            margin-bottom: 25px;
            position: relative;
            span {
              float: left;
              width: 37px;
              height: 32px;
              display: block;
              border: 1px solid #ccc;
              background: url(./images/icons.png) no-repeat -9px -200px;
            }
            input {
              height: 32px;
              float: left;
              border: 1px solid #ccc;
              border-left: none;
              width: 89%;
            }
            .mes {
              position: absolute;
              bottom: -17px;
              left: 40px;
              color: #f1193a;
            }
            &:nth-child(2) {
              span {
                background: url(./images/icons.png) no-repeat -70px -200px;
              }
            }
          }
        }
        ol {
          padding: 0 20px;
          li {
            float: left;
            input {
              vertical-align: middle;
            }
            &:nth-child(2) {
              float: right;
            }
          }
        }
        .loginbtn {
          margin: 20px;
          width: 340px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          color: #fff;
          background-color: #e1251b;
          font-size: 16px;
        }
        .type {
          ul {
            li {
              float: left;
              margin-right: 10px;
              a {
                display: block;
                img {
                  width: 35;
                  height: 35px;
                }
              }
              &:nth-child(5) {
                float: right;
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                color: #666666;
              }
            }
            .register {
              position: absolute;
              bottom: 55px;
              right: 40px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>