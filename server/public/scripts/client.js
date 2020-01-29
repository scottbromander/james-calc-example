$(document).ready(function() {
  console.log("jQuery is working!");

  $(".js-btn-add").on("click", addValues);
});

function addValues(event) {
  event.preventDefault();

  const numOne = parseInt($("#js-input-one").val());
  const numTwo = parseInt($("#js-input-two").val());
  const answer = numOne + numTwo;
  $("#js-input-one").val("");
  $("#js-input-two").val("");

  render(answer);
}

function render(answer) {
  $(".container").empty();
  $(".container").append(`
        <h1>${answer}</h1>
    `);
}
