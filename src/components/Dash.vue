<template>
  <div :class="['wrapper', classes]">
    <header class="main-header">
	<span class="logo-mini">
		<!--<a href="/"><img src="/static/img/copilot-logo-white.svg" alt="Logo" class="img-responsive center-block logo"></a>-->
	</span>
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages-->
            <!--<li class="dropdown messages-menu">
              <router-link  class="pageLink" to="/user/updatePass">修改密码</router-link>

            </li>-->
            <!-- /.messages-menu -->

            <!-- Notifications Menu -->
            <li class="dropdown notifications-menu">
              <router-link  class="pageLink" to="/backend">注销登录</router-link>
            </li>

            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <!--<img v-bind:src="demo.avatar" class="user-image" alt="User Image">-->
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <!--<span class="hidden-xs">&lt;!&ndash;{{ demo.displayName }}&ndash;&gt;BTK</span>-->
              </a>
              <ul class="dropdown-menu" style="width: 100%">
                <!--<li class="header"><el-button type="primary" style="width: 100%">修改密码</el-button></li>
                <li class="header"><el-button type="success" style="width: 100%">注销登录</el-button></li>-->

              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <sidebar :display-name="demo.displayName" :picture-url="demo.avatar"/>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>

          <small> </small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="javascript:;">
              <i class="fa fa-home"></i>Home</a>
          </li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>

      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}}
        <a href="javascript:;">BTK</a>.</strong> All rights reserved.
    </footer>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import faker from 'faker'
  import { mapState } from 'vuex'
  import config from '../config'
  import Sidebar from './Sidebar'
  import 'hideseek'
  export default {
    name: 'Dash',
    components: {
      Sidebar
    },
    data: function () {
      return {
        // section: 'Dash',
        year: new Date().getFullYear(),
        classes: {
          fixed_layout: config.fixedLayout,
          hide_logo: config.hideLogoOnMobile
        },
        error: ''
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
      demo () {
        return {
          displayName: faker.name.findName(),
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
          randomCard: faker.helpers.createCard()
        }
      }
    },
    methods: {
      changeloading () {
        this.$store.commit('TOGGLE_SEARCHING')
      }
    }
  }
</script>

<style lang="scss">
  .wrapper.fixed_layout {
    .main-header {
      position: fixed;
      width: 100%;
    }
    .content-wrapper {
      padding-top: 50px;
    }
    .main-sidebar {
      position: fixed;
      height: 100vh;
    }
  }
  .wrapper.hide_logo {
    @media (max-width: 767px) {
      .main-header .logo {
        display: none;
      }
    }
  }
  .logo-mini,
  .logo-lg {
    text-align: left;
    img {
      padding: .4em !important;
    }
  }
  .logo-lg {
    img {
      display: -webkit-inline-box;
      width: 25%;
    }
  }
  .user-panel {
    height: 4em;
  }
  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }
</style>
