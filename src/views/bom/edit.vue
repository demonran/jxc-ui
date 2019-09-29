<template>
  <div>
      <el-form ref="form" :inline="true" :model="form" label-width="100px">
        <el-form-item label="序号" style="width:48%">
          <el-input v-model="form.serialNumber" placeholder="请输入主机名"></el-input>
        </el-form-item>
        <el-form-item label="物料名称" style="width:48%">
          <el-input v-model="form.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="物料型号规格" style="width:48%">
          <el-input v-model="form.specification"></el-input>
        </el-form-item>
        <el-form-item label="厂家" style="width:48%">
          <el-input v-model="form.vendor" ></el-input>
        </el-form-item>
        <el-form-item label="进货商" style="width:48%">
          <el-input v-model="form.wholesaler"></el-input>
        </el-form-item>
        <el-form-item label="价格" style="width:48%">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="厂家型号" style="width:48%">
          <el-input v-model="form.vendorModel"></el-input>
        </el-form-item>
        <el-form-item label="最小批量" style="width:48%">
          <el-input v-model="form.minQuantity" ></el-input>
        </el-form-item>
          <el-form-item label="交期" style="width:48%">
              <el-input v-model="form.deliveryDay" ></el-input>
          </el-form-item>
          <el-form-item label="备用厂家" style="width:48%">
              <el-input v-model="form.backupVendor"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer">
          <el-button type="primary" @click="confirm">提交</el-button>
          <el-button @click="cancel">取消</el-button>
      </span>
  </div>
</template>

<script>
import Bom from '@/api/bom'
  export default {
    data(){
      return {

      }
    },
    props: ['form'],
    methods: {
      // 取消按钮
      cancel(){
        this.$emit('close');
      },

      // 确认按钮
      confirm(){
        let form = this.form;
        this.$refs['form'].validate(valid => {
            console.log(valid)
          if (valid) {
            Bom.add(form).then(res => {
              this.$message({
                type: 'success',
                message: '添加成功'
              });
              this.$emit('confirm', form);
            }).catch( res => this.$message.error('未知错误'))

          } else {
            return false;
          }
        });
      },

    }
  }
</script>

<style scoped>
  .el-form{
    margin: 20px 0;
  }
  .el-select, .el-input{
    width: 310px;
  }
</style>
