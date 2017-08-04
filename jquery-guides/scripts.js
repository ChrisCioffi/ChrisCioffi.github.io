/*
This script file contains a bunch of functions to help you learn/review jquery. Turn the functions on and off by temporarily deleting the comments before and after each function

The Document Ready Function is perhaps the most important of all jquery functions.  Unless you use it, none of your other functions will work.  Any other function you write will be "wrapped" in this function.

Let's take it point by point.
--The $() says "hey, we're about to do some jquery"
--Document refers to the html document or, put another way, your html page.
--Ready is an action.  It listens for whatever is within the $(), in this case the html page, is "ready" or loaded.
--Once that happens, it executes the function, or specific instructions we'll give it to do something fun, which we'll put in between the {} later on.
 */

/*
$(document).ready(function(){


});
*/



/*
We nest functions within Document Ready Function to do them when the page loads. The function below says, once the page is loaded do the following: Find all DIVs on the page and fade them out in 1000 milliseconds.

Let's take it point by point:
--The $("div") says do some jquery to any elements on the page that are divs.
--The action .fadeOut makes it dissapear.
--The number in between parenthases after fadeOut is how much time it will take.  You could also right "fast" or "slow".

Turn the first function on by removing the comments, save this file and refresh the page.
*/

/*
$(document).ready(function() {
    $("div").fadeOut(1000);
});
*/

/*Now, try this one to make the divs fade out "fast.*/

/*
$(document).ready(function() {
    $("div").fadeOut("fast");
});
*/

/*
$(document).ready(function() {
    $("div").fadeOut("slow");
});
*/


/*We aren't just limited to DIVs. In the previous example, we targeted all DIVs on the page.  Now let's just make the text at the top dissapear by targeting all P tags on the page.*/

/*
$(document).ready(function() {
    $("p").fadeOut(1000);
});
*/

/*Even cooler, we can get more specific by targeting things by class or ID.  Let's start by targeting an ID and making only the first block disappear.  Notice we've included the # sign here. */

/*
$(document).ready(function() {
    $("#one").fadeOut(1000);
});
*/

/*And let's try a class this time, in this case getting rid of all the even numbered boxes, which, conveniently, have a class of even*/

/*
$(document).ready(function() {
    $(".even").fadeOut(1000);
});
*/

/*When we use jQuery, rarely do we want things to happen as soon as the page loads.  It's much more common for us to use it in response to a user event, like when they click on something or hover over something or type something in.

For the following examples, we don't want anything to happen to our boxes when the page loads.  We only want things to happen to our boxes when we click the magic button.  In this case, we want all of the even DIVs to disappear when the button is clicked.

Below, we have a function nested within a function nested within a function. This says:

--When the page is loaded...
--If the user clicks on the button...
--Execute the function to fadeout the .even DIVs

Try it out.
*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$(".even").fadeOut(1000);
    });
});
*/

/*Besides click, another common event is hover.  Below is the same function as above, but with click instead of hover.  Watch what happens when you put your mouse over the button, even before you click.*/

/*
$(document).ready(function() {
    $("button").hover(function() {
		$(".even").fadeOut(1000);
    });
});
*/

/*Two more common ones are mouseenter and mouseleave, which tell something to happen when a mouse cursor moves over an element, and when a mouse mouses out of an element.  Watch what happens when you move your cursor over the button. When you move it in, the even boxes disappear.  When you move it out, the even boxes fade back in. */

/*
$(document).ready(function() {
    $("button").mouseenter(function() {
		$(".even").fadeOut(1000);
    });
    $("button").mouseleave(function() {
		$(".even").fadeIn(1000);
    });
});
*/

/*Now that we've learned how to target elements with events, you should know about THIS.  This, in jQuery, is a command that allows us to target very specifically.

Let's say we want to click on #one and make only that DIV disappear.  We could do this: */

/*
$(document).ready(function() {
    $("#one").click(function() {
		$("#one").fadeOut(1000);
    });
});
*/

/*Or, we could use this, which does basically the same thing.  As we write more complicated jquery functions, this becomes useful.  This means, do the fadeout to the thing we clicked on, in this case #one */

/*
$(document).ready(function() {
    $("#one").click(function() {
		$(this).fadeOut(1000);
    });
});
*/


/*Now that we have the basics of how jquery works, let's look at some more methods or actions jQuery can do. */

/*Change CSS of any element on the page! Let's make our #one DIV gray when we click the button*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").css("background-color", "#cccccc");
    });
});
*/

/*Let's make it 300px tall when we click the button*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").height("300px");
    });
});
*/

/*Let's make it 300px wide when we click the button*/


/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").width("300px");
    });
});
*/

/*Or we can combine to do all of those at once*/
/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").width("300px");
		$("#one").height("300px");
		$("#one").css("background-color", "#cccccc");
    });
});


/*We can turn things on and off with toggle*/


$(document).ready(function() {
    $("button").click(function() {
		$("#one").toggle();
    });
});


/*We can hide something that is currently visible*/
/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").hide();
    });
});
*/
/*We can show something that is currently hidden, the #hiddenbox that was set to display: none;*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#hiddenbox").show();
    });
});
*/


/*We can make things grow or shrink with animate.  This shrinks the #one div by 50px*/
/*
	$(document).ready(function() {
    $("button").click(function() {
		$("#one").animate({height: '-=50px'
       });
    });
});
*/

/*We can make things move with animate.  This moves the #moveme div down by 100 px*/
/*
	$(document).ready(function() {
	    $("button").click(function() {
			$("#moveme").animate({ top: '+=100px'}, 1000 );
    	});
	});
*/

/*This moves the #moveme div right by 100px*/
/*

	$(document).ready(function() {
	    $("button").click(function() {
			$("#moveme").animate({ left: '+=100px'}, 1000 );
    	});
	});
*/

/*This moves the #moveme div up by 100px*/
/*

	$(document).ready(function() {
	    $("button").click(function() {
			$("#moveme").animate({ top: '-=100px'}, 1000 );
    	});
	});
*/

/*We can add CSS classes and remove CSS classes, allowing us to pull additional styling from our stylesheet.*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").addClass("dottedborder");
    });
});
*/

/*We can turn a class on and off with toggleClass*/
/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").toggleClass("dottedborder");
    });
});
*/

/*We can easily change the opacity of things with fadeTo*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").fadeTo("fast", .5);
    });
});
*/

/*We can add content using append, before, after and html*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").after("<p>The box above this is called one</p>");
    });
});
*/
/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").before("<p>The box below this is called one</p>");
    });
});
*/

/*
$(document).ready(function() {
    $("button").click(function() {
		$("#one").append("<p>I used append to add this inside the box</p>");
    });
});
*/

/*
$(document).ready(function(){
	$("button").click(function() {
	   $("p").html("I just changed this text!");
	  });
});
*/
/*We can also remove content! */

/*
$(document).ready(function() {
    $("button").click(function() {
		$("p").remove();
    });
});
*/

/*A note about variables.  Don't get hung up on these.  They're more useful down the road, but for now we don't have to use them.  */
/*$(document).ready(function() {
	$("button").click(function() {
	     var seanfullname = $('<p>Sean Llewellyn Mussenden</p>');
    	 $('#one').after(seanfullname);
     });
});*/
