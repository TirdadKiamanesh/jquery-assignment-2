$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        // console.log(response);

        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInformation(i, user);
        }
    }
});

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);

    // Update the user's name
    $user.find('.user-name').text(user.name);

}