import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '../components/homePage'
import about from '../components/about'
import courses from '../components/courses'
import events from '../components/events'
import gallery from '../components/gallery'

import admin from '../components/admlogin/admin'
import college from '../components/clglogin/college'
import student from '../components/stulogin/student'

import approveInstitute from '../components/admlogin/approveInstitute'
import deleteInstitute from '../components/admlogin/deleteInstitute'
import viewStudents from '../components/admlogin/viewStudents'

import uploadArticles from '../components/clglogin/uploadArticles'
import facultyManagement from '../components/clglogin/facultyManagement'
import updateProfile from '../components/clglogin/updateProfile'
import sendResponse from '../components/clglogin/sendResponse'
import viewStudentsRequests from '../components/clglogin/viewStudentsRequests'
import feedback from '../components/clglogin/feedback'

Vue.use(VueRouter)

const routes = [
        {
          path: '/',
          name: 'homePage',
          component: homePage
        },
        {
          path: '/courses',
          name: 'courses',
          component: courses
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },           
        {
          path: '/events',
          name: 'events',
          component: events
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: gallery
        },   
        {
          path: '/admin',
          name: 'admin',
          component: admin
        },           
        {
          path: '/admin/approveInstitute',
          name: 'approveInstitute',
          component: approveInstitute
        },                  
        {
          path: '/admin/deleteInstitute',
          name: 'deleteInstitute',
          component: deleteInstitute
        },                  
        {
          path: '/admin/viewStudents',
          name: 'viewStudents',
          component: viewStudents
        },    
        {
          path: '/college',
          name: 'college',
          component: college
        },
        {
          path: '/college/uploadArticles',
          name: 'uploadArticles',
          component: uploadArticles
        },  
        {
          path: '/college/facultyManagement',
          name: 'facultyManagement',
          component: facultyManagement
        },  
        {
          path: '/college/updateProfile',
          name: 'updateProfile',
          component: updateProfile
        },  
        {
          path: '/college/sendResponse',
          name: 'sendResponse',
          component: sendResponse
        },
        {
          path: '/college/viewStudentsRequests',
          name: 'viewStudentsRequests',
          component: viewStudentsRequests
        },
        {
          path: '/college/feedback',
          name: 'feedback',
          component: feedback
        },                        
        {
          path: '/student',
          name: 'student',
          component: student
        },                
              

];

const router = new VueRouter({
     routes,
     mode: 'history',
});

export default router;
