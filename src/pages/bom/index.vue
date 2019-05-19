<template>
    <div>
        <el-table stripe border
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
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import bom from '@/api/bom'

    export default {
        name: 'bom',
        data () {
            return {
                boms: [],
                currentPage: 1,
                pageSize: 8,
                total: 0
            }
        },

        mounted () {
            this.list(this.currentPage)
        },

        methods: {
            list (currentPage) {
                bom.list({
                    page: currentPage,
                    size: this.pageSize
                }).then(res => {
                    this.boms = res.data.content
                    this.total = res.data.totalPages
                }).catch(() => {
                    this.$message.error('error')
                })
            },
            handleCurrentChange (page) {
                this.list(page)
            }
        }

    }
</script>

<style scoped>

</style>
