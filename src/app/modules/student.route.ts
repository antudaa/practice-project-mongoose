import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()

router.post(`/create-student`, StudentControllers.createStudent)

router.get(`/get_allStudents`, StudentControllers.getAllStudents)

router.get(`/get_student/:studentId`, StudentControllers.getSingleSutdent)

export const StudentRoutes = router
