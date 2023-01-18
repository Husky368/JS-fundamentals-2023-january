function cone(radius, heigth){
    let volume = Math.PI*(radius*radius) * heigth
    volume /=3
    console.log(volume.toFixed(4));
    //πrl+πr2
    let l = (radius*radius)+ (heigth*heigth)
    let area = Math.PI*radius*l + Math.PI*radius*2
    console.log(area.toFixed(4))
}cone(3,5)
