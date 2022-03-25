// code your solution here

function saturdayFun(haveFun = "roller-skate") {
    return `This Saturday, I want to ${haveFun}!`;
}
saturdayFun();
saturdayFun("bathe my dog");


function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective (symbol="*") {
    return function (adj = "special") {
        return `You are ${symbol}${adj}${symbol}!`
    }
}

wrapAdjective("%")("a dedicated programmer");