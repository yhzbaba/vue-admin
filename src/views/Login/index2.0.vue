/* eslint-disable prettier/prettier */
<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!--表单 start-->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="email">
          <label>邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-if="model === 'reg'">
          <label>重复密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15"
              ><el-input v-model.number="ruleForm.code"></el-input
            ></el-col>
            <el-col :span="9"
              ><el-button type="success" class="block"
                >获取验证码</el-button
              ></el-col
            >
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="login-btn block"
            >Submit</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {
  stripscript,
  validateEmailReg,
  validatePasswordReg,
  validateCodeReg
} from "@/utils/validate";
export default {
  name: "login",
  data() {
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the validate code"));
      } else if (!validateCodeReg(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the email"));
      } else if (!validateEmailReg(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("Please input the password"));
      } else if (!validatePasswordReg(value)) {
        callback(new Error("密码长度6-20位 只能是字母数字下划线"));
      } else {
        callback();
      }
    };
    var validatePasswords = (rule, value, callback) => {
      //如果为login,直接通过
      if (this.model === "login") {
        callback();
      }
      //过滤
      this.ruleForm.passwords = stripscript(value);
      value = this.ruleForm.passwords;
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value != this.ruleForm.password) {
        this.ruleForm.password = "";
        this.ruleForm.passwords = "";
        callback(new Error("两次密码不一致,请重新输入"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "reg" }
      ],
      //表单的数据
      ruleForm: {
        email: "",
        password: "",
        code: "",
        passwords: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        passwords: [{ validator: validatePasswords, trigger: "blur" }]
      },
      //模块值
      model: "login"
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggleMenu(data) {
      this.model = data.type;
      this.menuTab.forEach(elem => {
        elem.current = false;
      });
      //高光
      data.current = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #517494;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .current {
    background-color: rgba($color: #000000, $alpha: 1);
  }
}
.login-form {
  margin-top: 30px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 5px;
  }
}
</style>
