import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const gurdianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  // enum Type data
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  // enum Type data for schema
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: gurdianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String, required: false },
  // enum Type data for schema
  isActive: ['active', 'black'],
})

export const StudentModel = model<Student>('Student', studentSchema)
