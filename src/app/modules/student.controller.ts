import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentInfo } = req.body
    const result = await StudentServices.createStudentIntoDB(studentInfo)

    res.status(200).json({
      success: true,
      message: `Student created Successfully.`,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudents()

    res.status(200).json({
      success: true,
      message: `Student data retrieved successfully.`,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleSutdent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params

    const result = await StudentServices.getSingleStudent(studentId)

    res.status(200).json({
      success: true,
      message: `Successfully retrieved student data.`,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleSutdent,
}
