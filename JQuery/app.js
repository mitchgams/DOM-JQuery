$('document').ready(function() {
    //1
    $('<button id="firstBtn">Alert Msg.</button>').appendTo('body');
    $('#firstBtn').click(function() {
        alert("This is an alert!");
    });
    //2
    $('#submitAlert').click(function() {
        alert($('#txtBox').val());
    });
    //3
    $('#hover').mouseover(function() {
        $(this).css('background-color', 'blue');
    });
    $('#hover').mouseout(function() {
        $(this).css('background-color', 'orange');
    })
    //4
    $('<p>This is some text and it contains characters and stuff.</p>').appendTo('body');
    $('p').click(function() {
        $(this).css('color', 'rgb('+rand()+', '+rand()+', '+rand()+')');
    });
    //5
    $('<button id="nameBtn">Add Name</button>').appendTo('body');
    $('<div id="nameDiv"></div>').appendTo('body');
    $('#nameBtn').click(function() {
        $('<span>Mitch Gams</span>').appendTo($('#nameDiv'));
    });
    //6
    let friends = ['Brandon', 'Dillon', 'Sojo', 'Richard', 'Mitch', 'Jarred', 'Carl', 'Jake', 'Drake', 'Meagan'];
    $('#friendBtn').click(function() {
        for(let i = 0; i < friends.length; i++) {
            $('<li>' + friends[i] + '</li>').appendTo('ul');
        }
    })
});
// that took me 1/15th of the time

function rand() {
    return Math.floor(Math.random() * Math.floor(255));
}