function bonusScoringSystem(declaration) {
    // •	On the first line, you are going to receive the number of the students – an integer in the range [0…50]
    // •	On the second line, you will receive the number of the lectures – an integer number in the range [0...50].
    // •	On the third line, you will receive the additional bonus – an integer number in the range [0….100].
    // •	On the following lines, you will be receiving the attendance of each student.
    // •	There will never be students with equal bonuses.
    declaration = declaration.map(Number)
    let students = declaration.shift()
    let lectures = declaration.shift()
    let additionalBonus = declaration.shift()
    let attendanceArr = []
    let bonusPointsArr = []
    for (i = 0; i < declaration.length; i++) {
        let attendance = declaration[i]
        attendanceArr.push(attendance)
        //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
        let totalBonus = attendance / lectures * (5 + (additionalBonus))
        totalBonus = Math.round(totalBonus)
        if (i != 0) {
            if (totalBonus > bonusPointsArr[0]) {
                bonusPointsArr.unshift(totalBonus)
                continue
            }
            bonusPointsArr.push(totalBonus)
            continue
        }
        bonusPointsArr.push(totalBonus)
    }
    for (i = 0; i < attendanceArr.length; i++) {
        let currentAttendance = attendanceArr[i]
        let currentPoints = currentAttendance / lectures * (5 + (additionalBonus))
        currentPoints = Math.round(currentPoints)
        if (bonusPointsArr[0] == currentPoints) {
            console.log(`Max Bonus: ${bonusPointsArr[0]}.`)
            console.log(`The student has attended ${currentAttendance} lectures.`)
            break;
        }
    }
}
