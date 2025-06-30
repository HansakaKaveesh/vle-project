-- Authentication & Users
 CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  role ENUM('student', 'teacher', 'admin') NOT NULL,
  status ENUM('active','inactive','suspended') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 CREATE TABLE passwords (
  password_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_current BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
 );-- Profiles
 CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  dob DATE,
  contact_number VARCHAR(15),
  email VARCHAR(100),
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
 );
 CREATE TABLE teachers (
  teacher_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
 );-- Course structure
 CREATE TABLE course_types (
  course_type_id INT PRIMARY KEY AUTO_INCREMENT,
  board ENUM('Cambridge','Edexcel','Local','Other') NOT NULL,
  level ENUM('O/L','A/L','IGCSE','Others') NOT NULL,
  description VARCHAR(255)
 );
 CREATE TABLE courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  description TEXT,
  course_type_id INT NOT NULL,
  FOREIGN KEY (course_type_id) REFERENCES course_types(course_type_id)
 );
 CREATE TABLE teacher_courses (
  teacher_id INT NOT NULL,
  course_id INT NOT NULL,
  PRIMARY KEY (teacher_id, course_id),
  FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
 );
 CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  status ENUM('active','completed','dropped') DEFAULT 'active',
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
 );-- Content & Activity
 CREATE TABLE contents (
  content_id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  type ENUM('lesson','video','pdf','forum','quiz'),
  title VARCHAR(150),
  body TEXT,
  file_url VARCHAR(255),
  position INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
 );
 CREATE TABLE activity_logs (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  content_id INT NOT NULL,
  action VARCHAR(50),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (content_id) REFERENCES contents(content_id)
 );
 CREATE TABLE events (
  event_id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  name VARCHAR(100),
  description TEXT,
  start_time DATETIME,
  end_time DATETIME,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
 );
 CREATE TABLE forum_posts (
  post_id INT PRIMARY KEY AUTO_INCREMENT,
  content_id INT,
  user_id INT NOT NULL,
  parent_post_id INT NULL,
  body TEXT,
  posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (content_id) REFERENCES contents(content_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
 );-- Mastery Assignments
 CREATE TABLE assignments (
  assignment_id INT PRIMARY KEY AUTO_INCREMENT,
  lesson_id INT NOT NULL,
  title VARCHAR(100),
  description TEXT,
  due_date DATE,
  total_marks INT DEFAULT 10,
  passing_score INT DEFAULT 7,
  FOREIGN KEY (lesson_id) REFERENCES contents(content_id)
 );
 CREATE TABLE assignment_questions (
  question_id INT PRIMARY KEY AUTO_INCREMENT,
  assignment_id INT NOT NULL,
  question_text TEXT,
  option_a VARCHAR(255),
  option_b VARCHAR(255),
  option_c VARCHAR(255),
  option_d VARCHAR(255),
  correct_option ENUM('A','B','C','D'),
  FOREIGN KEY (assignment_id) REFERENCES assignments(assignment_id)
 );
 CREATE TABLE student_assignment_attempts (
  attempt_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  assignment_id INT NOT NULL,
  score INT NOT NULL,
  passed BOOLEAN NOT NULL,
  attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (assignment_id) REFERENCES assignments(assignment_id)
 );
 CREATE TABLE assignment_attempt_questions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  attempt_id INT NOT NULL,
  question_id INT NOT NULL,
  selected_option ENUM('A','B','C','D') NOT NULL,
  is_correct BOOLEAN NOT NULL,
  FOREIGN KEY (attempt_id) REFERENCES student_assignment_attempts(attempt_id),
  FOREIGN KEY (question_id) REFERENCES assignment_questions(question_id)
 );-- Progress summary (optional cache)
 CREATE TABLE student_progress (
  progress_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  chapters_completed INT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
 );

CREATE TABLE admins (
  admin_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  contact_number VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE student_payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_method ENUM('card', 'bank_transfer', 'cash', 'other') NOT NULL,
  payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  reference_code VARCHAR(100),
  paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE teacher_payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_method ENUM('card', 'bank_transfer', 'cash', 'other') NOT NULL,
  payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  reference_code VARCHAR(100),
  paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);
