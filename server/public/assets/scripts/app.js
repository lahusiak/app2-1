var employees = [];

$(document).ready(function(){
    console.log("I'm working!");
    getData();

    $('#peopleContainer').on('click', 'button', deletePerson);

});

function deletePerson() {
  var deletedPerson = {};
  deletedPerson.id = $(this).data('id');
  //
  console.log(deletedPerson.id);
  $.ajax({
    type: 'DELETE',
    url: '/data',
    data: deletedPerson,
    success: function (data) {

    }
  });
}

function getData() {
  $.ajax({
    type: 'GET',
    url: '/data',
    //data
    success: function (data) {
      employees = data;
      console.log(employees);
      appendToDom();
    }
  });
}

function appendToDom() {
  for (var i = 0; i < employees.length; i++) {
    $('#peopleContainer').append('<div class="row">' +
    '<p class="individual col-md-2">First Name: ' + employees[i].firstName + '</p>' +
         '<p class="individual col-md-2">Last Name:' + employees[i].lastName + '</p>' +
         '<p class="individual col-md-2">Salary: ' + employees[i].salary + '</p>' +
         '<p class="individual col-md-2">Years of Service: ' + employees[i].yearsService + '</p>' +
         '<button class="btn btn-danger col-md-3" data-id="'+employees[i]._id + '"> Delete </p>' +
      '</div>');

  }

}
