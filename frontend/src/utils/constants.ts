export const ACCOUNT_TYPE = { STUDENT: "Student", INSTRUCTOR: "Instructor", ADMIN: "Admin", } 
export const COURSE_STATUS = { DRAFT: "Draft", PUBLISHED: "Published", } 

export type AccountType = typeof ACCOUNT_TYPE[keyof typeof ACCOUNT_TYPE];
export type CourseStatus = typeof COURSE_STATUS[keyof typeof COURSE_STATUS];