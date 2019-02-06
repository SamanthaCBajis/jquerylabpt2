"use strict";

$(document).ready(function () {
    let tablenum = null;                // variables of tooltip are declared
    let Name = null;                    // they are in a global scope so they can be accessed anywhere
    let number = null;
    let Num_people = null;
    $(document).on("click", ".available", function (e) {
        $("form").show();                                // form comes in just shows when you click on a table
        tablenum = $(e.target);

        $(".tableNumber").append(                       // adding the number of the table to the form
            $(e.target).attr('id'));                    // reaching to its id attribute added to the seat divs

    });

    $(document).on("click", ".save", function (e) {       // changes the table from available to reserved by removing available class
        $(tablenum).removeClass("available").addClass("reserved");

        Name = $(`#Name`).val();                        // as it changes to reserved we store these data values for the reservation
        number = $(`#number`).val();                    // getting information from their id and adding their value to the form
        Num_people = $(`#Num_people`).val();
        $("form").hide();                               // then hide the form once the inforamtion is added
        $("form").find('input').val('')

        $(tablenum).attr(`Name`, `${Name}`)
        $(tablenum).attr(`number`, `${number}`)
        $(tablenum).attr(`Num_people`, `${Num_people}`)


        // $(tablenum)                                  // attempt at adding attributes to tooltip but had trouble getting the values
        //   .attr("name", $("input").eq(0).val())
        //   .attr("number", $("input").eq(1).val())
        //   .attr("num_of_people", $("input").eq(2).val());
    });

});
$(document).on("mouseenter", ".reserved", (e) => {                // where the mouse is going to enter to show the reserved info on the tooltip
    // if ($(e.target).attr("name") && $(e.target).attr("number") && $(e.target).attr("num_of_people")) {
    $(e.target).append(`                                          
          <section class="tooltip">
            <p>Name: ${$(e.target).attr("Name")}</p>
            <p>Number: ${$(e.target).attr("number")}</p>
            <p>Size Of Party: ${$(e.target).attr("Num_people")}</p>
          </section>
          `);                                                       // appends the information taken from each id attribute
});

$(document).on("mouseleave", ".reserved", (e) => {         // where the mouse is going to leave and hide the reserved info from the tooltip
    $(".tooltip").remove();
});

$(document).on("mouseenter", ".available", function (e) {   // hovers for when the class on the table element is available 
    $(e.target).toggleClass("hover");
    $(document).on("mouseleave", ".available", function (e) {
        $(e.target).removeClass("hover");
    });
});


