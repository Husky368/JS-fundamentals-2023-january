function buildWall(array) {
    let cost = 0
    let days = []
    let allDone = false
    while (!allDone) {
        //cheking if there is neednes of work
        for (i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                allDone = false
                // if yes
                notDone(array, days, cost)
                continue
            }
            allDone = true
        }
        //work
        function notDone(wallHeigth, crew, money) {
            let crewsWork = 0
            for (i = 0; i < wallHeigth.length; i++) {
                if (wallHeigth[i] < 30) {
                    wallHeigth[i]++
                    crewsWork++
                }
            }
            let concentPerDay = crewsWork * 195
            money = concentPerDay * 1900
            crew.push(concentPerDay)
            cost += money
            days = crew
            array = wallHeigth
        }
    }
    console.log(days.join(', '))
    console.log(cost + " pesos")
} buildWall([17])
