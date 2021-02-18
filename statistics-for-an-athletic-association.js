function stat(strg) {
    // Edge cases
    if (strg.length < 1) return '';
    if (strg.length === 8) return `Range: ${strg} Average: ${strg} Median: ${strg}`;

    // Split times
    let times = strg.split(", ").map(el => el.split("|"));
    for (let time of times) {
        for (let el of time) {
        if (time.indexOf(el) === 0) time[0] = Number(el) * 3600;
        if (time.indexOf(el) === 1) time[1] = Number(el) * 60;
        if (time.indexOf(el) === 2) time[2] = Number(el);
        }
        times[times.indexOf(time)] = time.reduce((a, b) => a + b);
    };

    // Calculate Stats
    const range = Math.max(...times) === Math.min(...times) ? 0 : Math.max(...times) - Math.min(...times);
    const mean = times.reduce((a, b) => a + b) / times.length;
    const calcMedian = (arr) => {
        const sorted = arr.sort((a, b) => a - b);
        return sorted.length % 2 !== 0 ? 
            sorted[Math.floor(sorted.length / 2)] : 
            (sorted[Math.floor(sorted.length / 2) - 1] + sorted[Math.ceil(sorted.length / 2)]) / 2;
    };
    const median = calcMedian(times);

    // Array of results
    let results = [range, mean, median];

    const formatResults = () => {
        for (let result of results) {
        let hours = Math.floor(result / 3600);
        let minutes = Math.floor(result % 3600 / 60);
        let seconds = Math.floor(result % 3600 % 60);

        hours = hours < 10 ? '0' + hours : hours.toString();
        minutes = minutes < 10 ? '0' + minutes : minutes.toString();
        seconds = seconds < 10 ? '0' + seconds : seconds.toString();

        results[results.indexOf(result)] = [hours, minutes, seconds];
        }
    }

    formatResults();

    const joinResults = () => {
        for (let result of results) {
        results[results.indexOf(result)] = result.join("|")
        }
        for (let i = 0; i < results.length; i++) {
        if (i === 0) results[i] = 'Range: ' + results[i];
        if (i === 1) results[i] = ' Average: ' + results[i];
        if (i === 2) results[i] = ' Median: ' + results[i];
        }
        return results.join("");
    };

    return joinResults();
}