// This is My Assignment 03 Code Link: https://fatimakhatungit.github.io/Assignment-03/

// System to convert kilometers to meters via JavaScript start

function kilomiterTomiters(meter) {
    var kiloMiter = meter * 1000;
    return kiloMiter;
}
var totalMiter = kilomiterTomiters(2);
console.log(totalMiter);

// System to convert kilometers to meters via JavaScript end


// Budget Calculator start

function budgetCalculator(watch, mobile, laptop) {
    watch = watch * 100;
    mobile = mobile * 500;
    laptop = laptop * 1000;
    var total = watch + mobile + laptop;
    return total;
}
var totalBudget = budgetCalculator(1, 2, 3);
console.log(totalBudget);

// Budget Calculator end


// Hotel Er Total Cost start

function totalCost(perDay) {
    var dailyCost = 0;

    if (perDay <= 10) {
        dailyCost = perDay * 120;
    } else if (perDay <= 20) {
        var firstPert = 10 * 120;
        var remaining = perDay - 10
        var secondPert = remaining * 90;
        dailyCost = firstPert + secondPert;
    } else {
        var firstPert = 10 * 120;
        var remaining = perDay - 10
        var secondPert = remaining * 70;
        dailyCost = firstPert + secondPert;
    }

    return dailyCost;
}

var totalCost = totalCost(50);
console.log(totalCost);

// Hotel Er Total Cost end


//Mega Friend List start

var myFriendList = ['khadija', 'rohima', 'fatima', 'joli', 'rojina', 'lubna', 'mim', 'sonali', 'Sorna'];
var frinds = '';

function megaFriend(frinds) {
    for (var i = 0; i < myFriendList.length; i++) {

        if (myFriendList[i].length > frinds.length) {
            frinds = myFriendList[i];
        }
    }
    return frinds;
}
var myFriendList = megaFriend(myFriendList);
console.log(myFriendList);

//Mega Friend List end