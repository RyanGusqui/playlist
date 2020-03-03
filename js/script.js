var friends = [];

$('.addButton').click(function() {
    var InputOne = $(".guestName").val();
    friends.push(InputOne);
    console.log(friends);
    $(".guestList").append("<br>" + friends[friends.length - 1] + "</br>");
    var AllFriends = friends.length;
    console.log(AllFriends);
    $(".numberOfGuests").append(" " + AllFriends);
});