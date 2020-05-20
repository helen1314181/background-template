<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>个人信息</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goBack">返回</el-button>
    </div>
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="工号">
          <el-input v-model="formLabelAlign.id"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="用户部门">
          <el-select v-model="formLabelAlign.department" placeholder="请选择活动区域" style="width: 100%">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户职务">
          <el-input v-model="formLabelAlign.job"></el-input>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // form表单绑定的数据
      formLabelAlign: {
        id: "",
        name: "",
        department: "",
        job: ""
      }
    };
  },
  methods: {
      // 点击返回按钮的时候跳转上一个界面
      goBack() {
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 100px auto;
}
</style>