const pi =3.14;
const calculateArea = (value) => {
    var result = pi * Math.pow(value,2);
    return {Alan : result};
}
const parameter =process.argv[2];

var result = calculateArea(parameter);
console.log(`${parameter} yarı çaplı dairenin alanı : ${result.Alan}`);


