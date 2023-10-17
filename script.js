// Students array
var students = [];

// Courses array
var courses = [];

// Add student
function AddStudent() {
    var firstname = $('#fName').val();
	var lastname = $('#lName').val();
    var age = $('#stdAge').val();
    var courseID = $('#stdCourseID').val();

    var student = {
        firstName: firstname,
		lastName: lastname,
        age: age,
        courseID : courseID
    };

    $.ajax({
        url: 'https://localhost:7093/api/Students',
        type: 'POST',
        data: JSON.stringify(student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#StudentForm')[0].reset();
            // Update student List
            GetAllStudents();
        }
    });
	
}

function GetAllStudents() {
    $.ajax({
        url: 'https://localhost:7093/api/Students',
        type: 'GET',
        success: function(data) {
            $('#studentList').empty();
            data.forEach(function(student) {
                $('#studentList').append('<li class="list-group-item">' + student.studentID + ', ' + student.firstName + ', ' + student.lastName + ', ' + student.age + ', ' + student.courseID + '</li>');
            });
        }
    });
}

function UpdateStudent() {
	var age = $('#newage').val();
	var courseID = $('#C_ID_update_age').val();
    
	
	var student = {
        age: age,
    };

    $.ajax({
        url: 'https://localhost:7093/api/Students/' + courseID,
        type: 'PUT',
        data: JSON.stringify(student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#UpdateAge')[0].reset();
            // Update student List
            GetAllStudents();
		}
    });
	
}


function DeleteStudent() {
	var courseID = $('#C_ID_DEL').val();
    
	

    $.ajax({
        url: 'https://localhost:7093/api/Students/' + courseID,
        type: 'DELETE',
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#DeleteStd')[0].reset();
            // Update student List
            GetAllStudents();
		}
    });
	
}

function OldThan20() {
    $.ajax({
        url: 'https://localhost:7093/api/Students/OldThan20',
        type: 'GET',
        success: function(data) {
            $('#studentList').empty();
            data.forEach(function(student) {
                $('#studentList').append('<li class="list-group-item">' + student.studentID + ', ' + student.firstName + ', ' + student.lastName + ', ' + student.age + ', ' + student.courseID + '</li>');
            });
        }
    });
}

function Specific_Course() {
	var courseName = $('#cName').val();
	
    $.ajax({
        url: 'https://localhost:7093/api/Students/SpecificCourse/' + courseName,
        type: 'GET',
        success: function(data) {
            $('#studentList').empty();
            data.forEach(function(student) {
                $('#studentList').append('<li class="list-group-item">' + student.studentID + ', ' + student.firstName + ', ' + student.lastName + ', ' + student.age + ', ' + student.courseID + '</li>');
            });
        }
    });
}

function MostPopularCourse() {
	var courseName = $('#cName').val();
	
    $.ajax({
        url: 'https://localhost:7093/api/Students/MostPopularCourse',
        type: 'GET',
        success: function(data) {
            $('#studentList').empty();
            
            $('#studentList').append(data);
            }
        });
}