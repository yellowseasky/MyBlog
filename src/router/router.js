import Home from '@/views/Home'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Message from '@/views/Message'
import Project from '@/views/Project'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Blog',
    path: '/Blog',
    component: Blog
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