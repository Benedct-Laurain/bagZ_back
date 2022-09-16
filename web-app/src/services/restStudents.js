import { query, STUDENTS_PATH } from "./rest";

export async function fetchStudents() {
  return query(STUDENTS_PATH, 'GET'); 
}

export async function createStudent(firstName, lastName) {
  return query(STUDENTS_PATH, 'POST', { firstName, lastName });
}