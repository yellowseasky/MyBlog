import Home from '@/views/Home'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Message from '@/views/Message'
import Project from '@/views/Project'
import BlogDetail from "@/views/Blog/Detail";


export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Blog',
    path: '/article',
    component: Blog
  },
  {
    name: 'CategoryBlog',
    path: '/article/cate/:categoryId',
    component: Blog
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: BlogDetail
  },
  {
    name: 'About',
    path: '/About',
    component: About
  },
  {
    name: 'Message',
    path: '/Message',
    component: Message
  },
  {
    name: 'Project',
    path: '/Project',
    component: Project
  },
]