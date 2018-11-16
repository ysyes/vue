<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>节目管理</el-breadcrumb-item>
        <el-breadcrumb-item>节目列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" style="float: right; margin: 14px;" @click="$router.push('/subscription/add')">添加
      </el-button>
    </div>
    <el-col :span="24" class="toolbar_top toolbar" style="padding-bottom: 0;">
      <el-form :inline="true">
        <el-form-item label="节目类型：">
          <el-select v-model="form.list[0].bigType" placeholder="请选择">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容类型：">
          <el-select v-model="form.list[0].contentType" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="播放形式：">
          <el-select v-model="form.list[0].isLive" placeholder="请选择">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="视音频：">
          <el-select v-model="form.list[0].type" placeholder="请选择">
            <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="彩民类型：">
          <el-select v-model="form.list[0].manType" placeholder="请选择">
            <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上下架：">
          <el-select v-model="form.list[0].status" placeholder="请选择">
            <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11" class="input">
            <el-date-picker v-model="form.list[0].createTime" type="datetime" placeholder="起始时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"> -</el-col>
          <el-col :span="11" class="input">
            <el-date-picker v-model="form.list[0].updateTime" type="datetime" placeholder="截止时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- table-->
    <el-table :data="dataList" highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column prop="name" label="标题" width='200'></el-table-column>
      <el-table-column prop="createTime" label="日期" width='170'></el-table-column>
      <el-table-column prop="updateTime" label="期次" width='170'></el-table-column>
      <el-table-column label="图片URL" width="140">
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl" class="conheight"/>
        </template>
      </el-table-column>
      <el-table-column prop="bigType" label="节目类型" width='100'></el-table-column>
      <el-table-column prop="type" label="播放形式" width='100'></el-table-column>
      <el-table-column prop="manType" label="彩民类型" width='100'></el-table-column>
      <el-table-column prop="name" label="本期专家" width='120'></el-table-column>
      <el-table-column label="文章内容" prop="summary"></el-table-column>
      <el-table-column label="视频URL" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="onPlay(scope.row.videoUrl)"> 点击播放</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="$router.push('/subscription/edit/'+scope.row.id)">编辑
          </el-button>
          <el-button size="small" type="danger" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-pagination style="display: inline-block" background layout="prev, pager, next" :total="total"
                     :page-size="form.pageSize" @current-change="handleCurrentChange">
      </el-pagination>
    </el-col>
    <el-dialog :visible.sync="centerDialogVisible" width="60%" @opened="opened" @close="close">
      <div v-if="player" id="videoBox" style="width: 100%;height: 400px">
      </div>
    </el-dialog>

  </section>
</template>

<script>
  export default {
    data() {
      return {
      	videoUrl:"",
      	form:{
					pageSize: 10,
					pageNum:1,
					list:[
							{
								bigType:null,//节目类型
								contentType:null,//内容类型
								isLive:null,//播放形式
								type:null,//视音频
								manType:null,//彩民类型
								status:null,//是否有效
								createTime:null,//开始时间
								updateTime:null,//结束时间
							}
					]
				},
        options1: [{
					value: '1',
					label: '体彩在线'
				}, {
					value: '2',
					label: '购彩知识内参'
				}],
				options2: [{
					value: 1,
					label: '竞彩足球'
				}, {
					value: 2,
					label: '竞彩篮球'
				}, {
					value: 3,
					label: '数字彩'
				}, {
					value: 4,
					label: '高频彩'
				}, {
					value: 5,
					label: '专家培训'
				}, {
					value: 6,
					label: '传统足彩'
				}],
				options3: [{
					value: '1',
					label: '直播'
				}, {
					value: '2',
					label: '录播'
				}],
				options4: [{
					value: '1',
					label: '视频'
				}, {
					value: '2',
					label: '音频'
				}],
				options5: [{
					value: '1',
					label: '初级专家'
				}, {
					value: '2',
					label: '中级专家'
				},  {
					value: '3',
					label: '高级专家'
				}],
				options6: [{
					value: '1',
					label: '上架'
				}, {
					value: '2',
					label: '下架'
				}],
        dataList: [],
        listLoading: false,
        total: 0,
        sels: [],//列表选中列
        pageSize: 0,
        num: 1,
        centerDialogVisible: false,
        player: true
      }
    },
    created() {
      this.onSubmit()
    },
    methods: {
      onSubmit() {
        this.$http.post(this.api.sub.subList,this.form, res => {
          this.form.pageSize = res.result.pageSize
          this.total = res.result.total
          this.dataList = res.result.list
        });
      },
      handleCurrentChange(val) {
        this.num = val
        this.onSubmit()
      },
      formatStatus: function (row) {
        return row.type == 1 ? '激活' : '暂停';
      },
      //删除
      handleDel: function (row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$http.delete(this.api.sub.subDel(row), res => {
            if (res.code == 1000) {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.onSubmit(this.num)
            } else {
              this.$message.error(res.msg)
            }
          })
        }).catch(() => {

        });
      },
      onPlay(videoUrl) {
        this.centerDialogVisible = true;
       	this.videoUrl=videoUrl;
        this.player = true;
      },
      opened() {
        let videoObject = {
          container: '#videoBox',//“#”代表容器的ID，“.”或“”代表容器的class
          variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
          autoplay: true,//自动播放
          video: this.videoUrl//视频地址
        };
        new ckplayer(videoObject);
      },
      close() {
        this.player = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .toolbar {
    background: #F2F2F2;
    padding: 20px 0 20px 6px;
    text-align: center;
    button {
      float: left;
    }
  }

  .conheight {
    height: 60px;
    overflow: auto;
  }

  .line {
    text-align: center;
  }

  .button {
    margin-left: 10px;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }

  .mbx {
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    overflow: hidden;
    .el-breadcrumb {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      float: left;
    }
  }

  .toolbar_top {
    text-align: left;
  }

</style>
