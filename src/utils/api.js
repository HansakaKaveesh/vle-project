export const addCourseToUser = async (userId, courseId) => {
    try {
      const response = await fetch("http://localhost/vle-api/add_course.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ user_id: userId, course_id: courseId }),
      });
  
      return await response.json();
    } catch (error) {
      console.error("Error adding course:", error);
      return { success: false, message: "Server error" };
    }
  };
  