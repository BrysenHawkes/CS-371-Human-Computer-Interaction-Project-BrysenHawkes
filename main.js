var contentContainer = document.getElementById("content");

var aa1 = false;
var ab1 = false;
var ma1 = false;
var eb1 = false;

//html code for content items
function showArtAssignment() {
    if (aa1)
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeaa1()" id="aa1" rowspan = "2", class = "checkBox";><img src="checkbox_checked.png"></th><th class = "top-left";>Art Project 06</th><th class = "top-right";><a href="instructions_placeholder.html";>Instructions</a> | <a href="assignment_placeholder.html";>Submit</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</th></tr></table></div>');
    else
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeaa1()" id="aa1" rowspan = "2", class = "checkBox";><img src="checkbox_unchecked.png"></th><th class = "top-left";>Art Project 06</th><th class = "top-right";><a href="instructions_placeholder.html";>Instructions</a> | <a href="assignment_placeholder.html";>Submit</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</th></tr></table></div>');
}

function showArtBoard() {
    if (ab1)
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeab1()" id="ab1" rowspan = "2", class = "checkBox";><img src="checkbox_checked.png"></th><th class = "top-left";>Art Discussion Board 06</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="art_discussion.html";>View Board</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
    else
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeab1()" id="ab1" rowspan = "2", class = "checkBox";><img src="checkbox_unchecked.png"></th><th class = "top-left";>Art Discussion Board 06</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="art_discussion.html";>View Board</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
}

function showMathAssignment() {
    if (ma1)
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changema1()" id="ma1" rowspan = "2", class = "checkBox";><img src="checkbox_checked.png"></th><th class = "top-left";>Quiz: Linear Equations</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="announcement_placeholder.html";>Take Quiz</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
    else    
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changema1()" id="ma1" rowspan = "2", class = "checkBox";><img src="checkbox_unchecked.png"></th><th class = "top-left";>Quiz: Linear Equations</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="announcement_placeholder.html";>Take Quiz</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
}
   
function showEngBoard() {
    if (eb1)
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeeb1()" id="eb1" rowspan = "2", class = "checkBox";><img src="checkbox_checked.png"></th><th class = "top-left";>English Discussion Board 06</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="english_discussion.html";>View Board</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
    else
        contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th onclick = "changeeb1()" id="eb1" rowspan = "2", class = "checkBox";><img src="checkbox_unchecked.png"></th><th class = "top-left";>English Discussion Board 06</th><th class = "top-right";><a href="reading_placeholder.html";>Reading</a> | <a href="english_discussion.html";>View Board</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";>Due: 03/15/2020 11:59pm</div></th></tr></table>');
}




//change checkbox for assignments
function changeaa1() {
    aa1 = !aa1;
    if (aa1)
        document.getElementById("aa1").innerHTML = '<img src="checkbox_checked.png">';
    else
        document.getElementById("aa1").innerHTML = '<img src="checkbox_unchecked.png">';
}

function changeab1() {
    ab1 = !ab1;
    if (ab1)
        document.getElementById("ab1").innerHTML = '<img src="checkbox_checked.png">';
    else
        document.getElementById("ab1").innerHTML = '<img src="checkbox_unchecked.png">';
}

function changema1() {
    ma1 = !ma1;
    if (ma1)
        document.getElementById("ma1").innerHTML = '<img src="checkbox_checked.png">';
    else
        document.getElementById("ma1").innerHTML = '<img src="checkbox_unchecked.png">';
}

function changeeb1() {
    eb1 = !eb1;
    if (eb1)
        document.getElementById("eb1").innerHTML = '<img src="checkbox_checked.png">';
    else
        document.getElementById("eb1").innerHTML = '<img src="checkbox_unchecked.png">';
}

//Announcements
function getAllAnnouncements() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
}

function getArtAnnouncements() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
}

function getMathAnnouncements() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
}

function getEngAnnouncements() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
}



//Assignments
function getAllAssignments() {
    contentContainer.innerHTML = "";
    showArtAssignment();
    showArtBoard();
    showMathAssignment();
    showEngBoard();
}

function getArtAssignments() {
    contentContainer.innerHTML = "";
    showArtAssignment();
    showArtBoard();
}

function getMathAssignments() {
    contentContainer.innerHTML = "";
    showMathAssignment();
}

function getEngAssignments() {
    contentContainer.innerHTML = "";
    showEngBoard();
}



//Boards
function getAllBoards() {
    contentContainer.innerHTML = "";
    showArtBoard();
    showEngBoard();
}

function getArtBoards() {
    contentContainer.innerHTML = "";
    showArtBoard();
}

function getMathBoards() {
    contentContainer.innerHTML = "";
}

function getEngBoards() {
    contentContainer.innerHTML = "";
    showEngBoard();
}



//Classes
function getArtClass() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Overview</th><th class = "top-right";><a href="textbook_placeholder.html";>Textbook</a> | <a href="syllabus_placeholder.html";>Syllabus</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";></th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
    showArtAssignment();
    showArtBoard();
}

function getMathClass() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Overview</th><th class = "top-right";><a href="textbook_placeholder.html";>Textbook</a> | <a href="syllabus_placeholder.html";>Syllabus</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";></th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
    showMathAssignment();
}

function getEngClass() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Overview</th><th class = "top-right";><a href="textbook_placeholder.html";>Textbook</a> | <a href="syllabus_placeholder.html";>Syllabus</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";></th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Week 06 Announcement</th><th class = "top-right";><a href="announcement_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";>03/13/2020</th></tr></table></div>');
    showEngBoard();
}

//Grades

function getAllGrades() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>ART 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>B- 80%</th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Math 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>B 84%</th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Eng 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>A 96%</th></tr></table></div>');
}

function getArtGrades() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>ART 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>B- 80%</th></tr></table></div>');
}

function getMathGrades() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Math 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>B 84%</th></tr></table></div>');
}

function getEngGrades() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Eng 101 Grades</th><th class = "top-right";><a href="grades_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";></th><th class = "bottom-right";>A 96%</th></tr></table></div>');
}

//People
function getAllPeople() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";></th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";></th></tr></table></div>');
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";></th></tr></table></div>');
}

function getArtPeople() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ART 101</th><th class = "bottom-right";></th></tr></table></div>');
}

function getMathPeople() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>MATH 101</th><th class = "bottom-right";></th></tr></table></div>');
}

function getEngPeople() {
    contentContainer.innerHTML = "";
    contentContainer.insertAdjacentHTML('beforeend', '<div class = "smallContent";><table><tr><th rowspan = "2", class = "checkBox";><img src="announcement_icon.png"></th><th class = "top-left";>Class List</th><th class = "top-right";><a href="people_placeholder.html";>View</a></th></tr><tr><th class = "bottom-left";>ENG 101</th><th class = "bottom-right";></th></tr></table></div>');
}
