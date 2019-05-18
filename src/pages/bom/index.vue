<template>
  <div>
    <el-table
      :data="boms"
      style="width: 100%">
      <el-table-column prop="serialNumber" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="物料名称" width="180"></el-table-column>
      <el-table-column prop="specification" label="物料型号规格"></el-table-column>
      <el-table-column prop="vendor" label="厂家"></el-table-column>
      <el-table-column prop="wholesaler" label="进货商"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="vendorModel" label="厂家型号"></el-table-column>
      <el-table-column prop="minQuantity" label="最小批量"></el-table-column>
      <el-table-column prop="deliveryDay" label="交期"></el-table-column>
      <el-table-column prop="backupVendor" label="备用厂家"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import bom from '@/api/bom'
export default {
  name: 'bom',
  data () {
    return {
      boms: []
    }
  },

  mounted () {
    this.list()
  },

  methods: {
    list () {
      bom.list().then(res => {
        this.boms = res.data
      }).catch(() => {
        this.$message.error('error')
      })
    }
  }

}
</script>

<style scoped>

</style>
