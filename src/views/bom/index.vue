<template>
    <div>
        <el-table stripe border @row-dblclick="edit"
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
            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="primary" size="small">编辑</el-button>
                    <el-button @click="deleteBom(scope.row)" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
        <el-dialog :title="dialogTitle" :visible.sync="showEdit" width="1000px">
            <v-edit :form="form" v-if="showEdit" @close="closeDialog" @confirm="updateList"></v-edit>
        </el-dialog>
    </div>
</template>

<script>
    import bom from '@/api/bom'
    import Edit from './edit'

    export default {
        name: 'bom',
        components: {
            'v-edit': Edit
        },
        data () {
            return {
                boms: [],
                currentPage: 1,
                pageSize: 8,
                total: 0,
                showEdit: false,
                form: {},
                dialogTitle: ''
            }
        },

        mounted () {
            this.list(this.currentPage)
        },

        methods: {
            //关闭弹框
            closeDialog () {
                this.showEdit = false
            },
            updateList () {
                this.list(this.currentPage)
                this.showEdit = false
            },
            //
            edit (item) {
                console.log(item)
                this.showEdit = true
                this.form = JSON.parse(JSON.stringify(item))
                this.dialogTitle = '修改'
            },
            deleteBom (item) {
                this.$confirm(`是否要刪除该bom（${item.serialNumber}）`, '提示').then(() => {
                    bom.delete(item.id).then(res => {
                        this.$message('删除成功')
                        this.boms.splice(this.boms.findIndex(obj => obj.id == item.id), 1)
                    })
                })
            },
            list (currentPage) {
                bom.list({
                    page: currentPage,
                    size: this.pageSize
                }).then(res => {
                    this.boms = res.data.content
                    this.total = res.data.totalSize
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
