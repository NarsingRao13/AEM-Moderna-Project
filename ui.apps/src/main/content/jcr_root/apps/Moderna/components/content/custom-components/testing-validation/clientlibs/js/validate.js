console.log('client library called');

//to test whether client libs was getting loaded.
/*$(document).on("foundation-contentloaded", function(e) {
	var container = e.target;
    console.log('foundation-contentloaded was fired.');
	console.log(container);
     console.log('foundation-contentloaded end.');
});
*/

/*
$(window).adaptTo("foundation-registry").register("foundation.validation.validator",{
    selector: "[]"
});
*/

/*below code is to check user input should match value 
at "/apps/Moderna/components/content/custom-components/testing-validation/cq:dialog/content/items/column/items/title/granite:data"
*/
/*
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
  selector: "[data-pattern]",
  validate: function(el) {
    var shouldContain = el.getAttribute("data-pattern");  //aem

    console.log('validating text contains aem');
    console.log('input should contain ' + shouldContain);

    var input = el.value;  //input added by author

    if (input.indexOf(shouldContain) === -1 ) {
      return "The field should contain " + shouldContain + ". It's current value is " + el.value + ".";
    }
  }
});
*/
/* global jQuery, Coral */
(function($, Coral) {
    "use strict";

    console.log(" --------CLIENTLIBS LOADED------- ");

    var registry = $(window).adaptTo("foundation-registry");

    // Validator for required for multifield max and min items
    registry.register("foundation.validation.validator", {
        selector: "[data-validation=txt-multifield]",
        validate: function(element) {
            var el = $(element);
            let max=el.data("max-items");
            let min=el.data("min-items");
            let items=el.children("coral-multifield-item").length;
            let domitems=el.children("coral-multifield-item");
            console.log("{} : {} :{} ",max,min,items);
            if(items>max){
              /* Use below line if you don't want to add item in multifield more than max limit */
              //domitems.last().remove();
              return "You can add maximum "+max+" books. You are trying to add "+items+"th book."
            }
            if(items<min){
                return "You add minimum "+min+" books."
            }
        }
    }
    });