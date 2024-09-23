var selected = 0;

var roleSelected = [];
function hideListsWithoutRole(role) {
  for (i = 1; i <= 10; i++) {
    var listNo = i.toString();
    var className = ".list-" + listNo;
    var listText = $(className + " li").text();
    if (listText.indexOf(role) == -1) {
      $(className).hide();
    }
    else {

    }
  }
}

function unhideListsWithRole() {
  for (j = 1; j <= 10; j++) {
    var listNo = j.toString();
    var className = ".list-" + listNo;
    var listText = $(className + " li").text();
    var foundAllItems = true; 
    console.log(listText);
    for (i = 0; i < roleSelected.length; i++) {
      if (listText.indexOf(roleSelected[i]) == -1) {
        foundAllItems = false;
        break; 
      }
    }
    if (foundAllItems) {
      $(className).show();
    }
    else {
      $(className).hide();
    }
  }
}
$("li").click(function () {
  if (selected === 0) {
    $(".upper-div").addClass("role-selected");
    var role = $(this).text();
    $(".upper-div ul").append("<li>" + role + "<span>X</span></li>");
    $(".upper-div span").addClass("X");
    selected++;
    roleSelected.push(role);
    hideListsWithoutRole(role);
  }
  else {
    var role = $(this).text();
    if (!roleSelected.includes(role)) {
      $(".upper-div ul").append("<li>" + role + "<span>X</span></li>");
      $(".upper-div span").addClass("X");
      selected++;
      roleSelected.push(role);
      hideListsWithoutRole(role);
    }
  }
});
$(document).on("click", ".X", function () {
    var roleWithX = $(this).parent().text().trim();
    var temp = roleWithX.substring(0,roleWithX.length-1)
    var index = roleSelected.indexOf(temp);
    if (index !== -1) {
      roleSelected.splice(index, 1);
      unhideListsWithRole();
    }
    $(this).parent().remove();
  });
  $(document).on("click", ".delete-button", function () {
    $(this).closest('.list').remove();
  });
  function openJobPopup(description, requirements) {
    var jobDetailsContainer = $("#jobDetails");
    jobDetailsContainer.html("<h3>Job Description:</h3><p>" + description + "</p>");
    jobDetailsContainer.append("<h3>Job Requirements:</h3><p>" + requirements + "</p>");
    $("#jobPopup").css("display", "block");
  }
  function closeJobPopup() {
    $("#jobPopup").css("display", "none");
  }
  $(document).ready(function () {
    $(".openPopupButton").click(function () { 
      var description = "A job description is a written explanation that outlines the essential responsibilities and requirements for a vacant position. Job descriptions should be thorough, clear, and concise and include: A brief introduction to the company and its mission.";
      var requirements = "I would like to know more about the duties and requirements of this position. I would like to be provided with a job description so that I can understand the specific requirements of this role and make sure that my application is suitable for the role. Thanks for your help. I will be in touch with you soon.";
      openJobPopup(description, requirements);
    });
    $("#closePopup").click(function () {
      closeJobPopup();
    });
    $(".add-button").click(function () {
        openAddJobPopup();
      });
      $("#jobForm").submit(function (e) {
        e.preventDefault();
        var jobName = $("#jobName").val();
        var jobTitle = $("#jobTitle").val();
        var jobDate = $("#jobDate").val();
        addNewJob(newJob);
        closeAddJobPopup();
      });
      $("#closeAddJobPopup").click(function () {
        closeAddJobPopup();
      });
    });
    function openAddJobPopup() {
      $("#jobForm")[0].reset();
      $("#addJobPopup").css("display", "block");
    }
    function closeAddJobPopup() {
      $("#addJobPopup").css("display", "none");
    }
      
  
  
  