// 1

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}


//2

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

// 3

function wrapAdjective(special = '*'){

    const innerAdjective = (special2 = '||') => {
        return `You are ${special}${special2}${special}!`
    }
    return innerAdjective
}
wrapAdjective('*')("a hard worker")
wrapAdjective('||')("a dedicated programmer")


