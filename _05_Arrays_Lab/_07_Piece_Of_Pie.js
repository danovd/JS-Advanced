function pie(pies, startPie, endPie){
    let start = pies.indexOf(startPie);
    let end = pies.indexOf(endPie);

    let result = pies.slice(start, end + 1);
    return result;
}