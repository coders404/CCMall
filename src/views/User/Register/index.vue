<template>
  <div class="box">
    <!-- 注册区域 -->
    <div class="container">
      <div class="register">
        <div class="top">
          <h2>注册新用户</h2>
          <h3>
            我有账号，去<span>
              <router-link to="/login">登录</router-link></span
            >
          </h3>
        </div>
        <div class="body">
          <el-form
            ref="form"
            :model="params"
            label-width="80px"
            size="small"
            :rules="rules"
            :hide-required-asterisk="true"
          >
            <el-form-item label="手机号:" prop="phone">
              <el-input
                v-model="params.phone"
                placeholder="请输入你的手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码:" prop="code">
              <el-input
                v-model="params.code"
                placeholder="请输入你的验证码"
              ></el-input>
            </el-form-item>
            <el-form-item label="登陆密码:" prop="password">
              <el-input
                v-model="params.password"
                placeholder="请输入你的密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkpass">
              <el-input
                v-model="params.checkpass"
                placeholder="请输入确认密码"
              ></el-input>
            </el-form-item>

            <el-form-item prop="agree">
              <el-checkbox-group v-model="params.agree">
                <el-checkbox
                  label="同意协议并注册《CC Mall用户协议》"
                  name="agree"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" size="medium " @click="register"
                >完成注册</el-button
              >
            </el-form-item>
          </el-form>
          <!-- <table>
            <tr>
              <td>手机号：</td>
              <td>
                <input
                  type="text"
                  placeholder="请输入您的手机号"
                  class="ipt"
                  v-model="params.phone"
                />
                <i>错误提示信息</i>
              </td>
            </tr>
            <tr>
              <td>验证码：</td>
              <td>
                <input
                  type="text"
                  placeholder="请输入验证码"
                  v-model="params.code"
                  class="ipt"
                />
                <i>错误提示信息</i>
              </td>
            </tr>
            <tr>
              <td>登陆密码：</td>
              <td>
                <input
                  type="password"
                  placeholder="请输入您的登陆密码"
                  class="ipt"
                  v-model="params.password"
                />
                <i>错误提示信息</i>
              </td>
            </tr>
            <tr>
              <td>确认密码：</td>
              <td>
                <input
                  type="password"
                  placeholder="请输入确认密码"
                  class="ipt"
                />
                <i>错误提示信息</i>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" class="ckbx" />
                同意协议并注册《尚品汇用户协议》
                <i>错误提示信息</i>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button class="btn" @click="register">完成注册</button>
              </td>
            </tr>
          </table> -->
          <button class="getCode" @click="getCode">获取验证码</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Register",
  data() {
    var validateCheckPASS = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入确认密码！"));
      } else if (value != this.params.password) {
        callback(new Error("两次输入的密码不一致！"));
      } else {
        callback();
      }
    };

    return {
      params: {
        phone: "",
        password: "",
        checkpass: "",
        code: "",
        agree: [],
      },
      rules: {
        phone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "手机号必须为11位！",
            trigger: ["blur", "change"],
          },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            min: 6,
            max: 6,
            message: "验证码必须为6位",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码不能小于6位", trigger: ["blur", "change"] },
        ],
        checkpass: [
          { validator: validateCheckPASS, trigger: ["change", "blur"] },
        ],
        agree: [
          {
            type: "array",
            required: true,
            message: "请勾选同意条款！",
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      phoneCode(state) {
        return state.User.phoneCode;
      },
    }),
  },
  methods: {
    async getCode() {
      try {
        await this.$store.dispatch("getCode", this.params.phone);
        this.params.code = this.phoneCode;
      } catch (error) {
        alert("获取验证码失败");
      }
    },
    register() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const { phone, password, code } = this.params;
            let params = {
              phone,
              password,
              code,
            };
            await this.$store.dispatch("register", params);
            this.$router.push({ name: "Login" });
          } catch (error) {
            alert("注册失败！");
          }
        } else {
          alert("请输入正确的注册信息！");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  width: 280px;
}
.register {
  border: 1px solid #ccc;
  margin-bottom: 15px;
  .top {
    height: 43px;
    line-height: 43px;
    padding: 0 20px;
    width: 100%;
    background-color: rgb(230, 229, 229);
    border-bottom: 1px solid #ccc;
    h2 {
      float: left;
      font-size: 18px;
    }
    h3 {
      float: right;
      span {
        a {
          color: #e1251b;
        }
      }
    }
  }
  .body {
    padding: 20px 0 30px 0;
    position: relative;
    width: 360px;
    margin: 0 auto;
    table {
      // 下面两个可以设置table中tr的间距
      border-collapse: separate;
      // 第一个是设置td之间的间距，第二个设置tr行之间的间距
      border-spacing: 0 20px;
      margin: 0 auto;
      tr {
        td {
          position: relative;
          .ipt {
            width: 270px;
            height: 38px;
            padding-left: 5px;
          }
          &:nth-child(1) {
            font-size: 16px;
            text-align: right;
          }
          i {
            color: #e1251b;
            position: absolute;
            bottom: -17px;
            left: 0;
          }
          input {
            vertical-align: middle;
          }
          .btn {
            width: 270px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background-color: #e1251b;
            color: #fff;
            font-size: 16px;
            border: none;
          }
        }
      }
    }
    .getCode {
      height: 30px;
      width: 100px;
      position: absolute;
      top: 73px;
      left: 364px;
    }
  }
}
</style>