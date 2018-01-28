import LoginView from './components/Login.vue'
import SearchCertView from './components/Search.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash

// import TablesView from './components/views/Tables.vue'

import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

import UploadView from './components/views/Upload.vue'
import UsersView from './components/views/TingtingUsers.vue'

import UpdatePassView from './components/views/UpdatePass.vue'

import AlbumListView from './components/views/TingtingAlbums.vue'

import AddAlbumView from './components/views/TingtingAddAlbum.vue'

import EditAlbumView from './components/views/TingtingEditAlbum.vue'

// Routes
const routes = [
  {
    path: '/backend',
    component: LoginView
  },
  {
    path: '/search',
    component: SearchCertView
  },
  {
    path: '/',
    component: SearchCertView,
    children: [
      {
        path: 'album/edit',
        alias: 'editalbum',
        component: EditAlbumView,
        name: '编辑证书',
        meta: {description: 'EditAlbumView'}
      },
      {
        path: 'album/add',
        alias: 'addalbum',
        component: AddAlbumView,
        name: '添加证书',
        meta: {description: 'AddAlbumView'}
      },
      {
        path: 'album/list',
        alias: 'albumlist',
        component: AlbumListView,
        name: '证书列表',
        meta: {description: 'AlbumListView'}
      },
      {
        path: 'user/updatePass',
        alias: 'updatePass_alias',
        component: UpdatePassView,
        name: '修改用户密码',
        meta: {description: 'UpdatePassView'}
      },
      {
        path: 'user/list',
        alias: 'users_alias',
        component: UsersView,
        name: '用户列表',
        meta: {description: 'UsersView'}
      },
      {
        path: 'upload',
        alias: 'upload_alias',
        component: UploadView,
        name: 'UploadView',
        meta: {description: 'UploadView'}
      },
      {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
