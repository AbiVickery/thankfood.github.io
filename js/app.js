const survey = ()=> {
    event.preventDefault();

    var q1 = Number(document.querySelector('input[name=personality]:checked').value);
    // console.log(q1);
    var q2 = Number(document.querySelector('input[name=personality]:checked').value);
    // console.log(q2);
    var q3 = Number(document.querySelector('input[name=personality]:checked').value);
    // console.log(q3);
    var q4 = Number(document.querySelector('input[name=personality]:checked').value);
    // console.log(q4);
    var q5 = Number(document.querySelector('input[name=personality]:checked').value);
    // console.log(q5);
    var images = [];

    var total = q1 + q2 + q3 + q4 + q5;
    // console.log(total);

    if (total <= 9) {
        message = "You are Cranberry Sauce, You are a sweet person!";
        resultpic = images[1];
    } else if ((total > 9) && (total <=12)) {
        message = "You are Ham, a bit of a buff.";
        resultpic = images[2];
    } else if ((total > 12) && (total <= 16)) {
        message = "You are Turkey, you need to lighten up a bit...";
        resultpic = images[3];
    } else if ((total > 16) && (total <= 20)) {
        message = "You are Dressing, enough said.";
        resultpic = images[2];
    } else if (total > 20) {
        message = "You are Yams, yam right!";
        resultpic = images[1];
    }
}