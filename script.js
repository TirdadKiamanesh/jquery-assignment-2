// ## Assignment

// 1. [Fork this repo][fork].

// 1. Only code inside the file named [script.js]. No editing any other files.

// 1. Using the [$.ajax] function, get the following url: `https://quarkbackend.com/getfile/karbassi/user-profiles`

$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        console.log(response);

        for (var i = 0; i < 40; i++) {
            var user = response[i];
            updateUserInformation(i, user);
        }
    }
});



// 1. Using the [$.ajax] `success` function, loop through the response. Do not use a [hard coded][hard coding] number in the loop.

    function updateUserInformation(index, user) {

     var $user = $('.user-profile').eq(index);
         $user.find('.name').text(user.name.first + " " + user.name.last);
         $user.find('.company').find('.name').text(user.company.name);
         $user.find('.company').find('.street').text(user.company.address.street);
         $user.find('.company').find('.city').text(user.company.address.city);
         $user.find('.company').find('span').find('.state').text(user.company.address.state);
         $user.find('.company').find('.zip').text(user.company.zip);
         $user.find('a').text(user.company.email);
         $user.find('.company')
        .find('a')
        .text(user.email)
        .attr('href', "mailto:" + user.company.email);
      $user.css("background-color", user.favoriteColor);

// 1. Create a new function that updates one user at a time. Call this new function inside the loop in step 4.

// 1. This new function should update the elements of the div with the class of `user-profile`. It should:

//     - Set the user's image.

//     - Set the user's first and last name.

//     - Set the user's company name and address.

//     - Set the user's email address. The email address should be clickable.

//     - Set the background color of `.user-profile` to the user's favorite color.

// **Hint**: Email address links need to have `mailto:` in from of them. E.g: `<a href="mailto:person@example.com">person@example.com</a>`

// ### The HTML page should produce an image like so:

// ![output](./output.jpg)
        }

// [fork]: https://github.com/karbassi-id/jQuery-assignment-2/fork
// [script.js]: ./script.js
// [$.ajax]: https://api.jquery.com/jQuery.ajax/
// [jQuery find]: https://www.w3schools.com/jquery/traversing_find.asp
// [jQuery attr]: https://www.w3schools.com/jquery/html_attr.asp
// [jQuery text]: https://www.w3schools.com/jquery/html_text.asp
// [jQuery css]: https://www.w3schools.com/jquery/jquery_css.asp
// [hard coding]: https://encrypted.google.com/search?q=hard+coding


// $.ajax({
//     url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
//     type: "GET",
//     success: function (response) {
//         // console.log(response);

//         for (var i = 0; i < response.length; i++) {
//             var user = response[i];
//             updateUserInformation(i, user);
//         }
//     }
// });

// // function updateUserInformation(index, user) {
// //     var $user = $('.user-profile').eq(index);

// //     // Update the user's name
// //     $user.find('.user-name').text(user.name);

// //     // Update the user's phone
// //     $user.find('.user-phone').text(user.phone);

// //     // Update the user's company name
// //     $user.find('.user-company').text(user.company.name);

// //     // Update the user's website URL text
// //     $user.find('.user-website').find('a').text(user.website);

// //     $user
// //         .find('.user-website')
// //         .find('a')
// //         .attr('href', "http://" + user.website);

// //     // Update the user's website text
// //     // $user
// //     //     .find('.user-website')
// //     //     .find('a')
// //     //         .text(user.website)
// //     //         .attr('href', "http://" + user.website)
// //     // ;

    

// }