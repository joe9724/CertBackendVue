<template>
  <!--<div class="container container-table">-->
  <div >
    <div >
      <!--<img src="/static/img/logo.png" class="center-block logo">-->
      <div >
        <!-- login form -->
        <form class="ui form loginForm" @submit.prevent="checkCreds">

          <el-input placeholder="请输入唯一编号" v-model="form.authorName" class="input-with-select" style="position:absolute;">
            <el-button slot="append" icon="el-icon-search" @click="onSubmit">搜索</el-button>
          </el-input>

          <!--<input class="form-control" placeholder="唯一编号" type="text" v-model="form.authorName">
          <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading" @click="onSubmit"> 搜索 </button>-->
        </form>

        <!-- errors -->
        <div style="width:100%" v-html="htmlForEditor"></div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>
<!--<template>
  <div>
    <h5 class="text-center">&lt;!&ndash;添加专辑&ndash;&gt;</h5>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <el-form ref="form" :model="form" label-width="80px">
            &lt;!&ndash;<el-form-item label="器具名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="型号规格">
              <el-input v-model="form.authorAvatar"></el-input>
            </el-form-item>&ndash;&gt;
            <el-form-item label="唯一编号">
              <el-input v-model="form.authorName"></el-input>
            </el-form-item>
            &lt;!&ndash; bidirectional data binding（双向数据绑定） &ndash;&gt;
            <el-form-item label="内容">
              <div v-html="htmlForEditor"></div>
             &lt;!&ndash; <vue-editor id="editor"
                          useCustomImageHandler
                          @imageAdded="handleImageAdded" v-model="htmlForEditor">
              </vue-editor>&ndash;&gt;
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
              &lt;!&ndash;<el-button>确定</el-button>&ndash;&gt;
            </el-form-item>
          </el-form>
        </div>
      </div>
    </section>
  </div>
</template>-->
<script>
  // import configParams from '../../config'
  import api from '../api'

  export default {
    data () {
      return {
        htmlForEditor: '',
        uploadUrl: '',
        form: {
          authorAvatar: '',
          authorName: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          status: '',
          content: '',
          fileList2: [{
            name: 'food.jpeg',
            url: ''
          }]
        },
        name: '01-example',
        content: '',
        imgUrl: '',
        content1: ''
      }
    },
    computed: {},
    created () {
    },
    methods: {
      onSubmit () {
        api.request('get', 'album/detail?authorName=' + this.form.authorName)
          .then(response => {
            var data = response.data.body.data
            data.summary = (data.summary).split('img').join('img style="width:100%" ')
            console.log('data.summary is' + JSON.stringify(data.summary))
            this.htmlForEditor = data.summary
          })
          .catch(error => {
            // this.$store.commit('TOGGLE_LOADING')
            console.log(error)
            this.response = 'Server appears to be offline'
          })
      }
    }
  }

</script>

<style>


</style>
