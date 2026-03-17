function solution(message, spoiler_ranges) {
    const words = [];
    let i = 0;
    
    while (i < message.length) {
        if (message[i] === ' ') {
            i++;
            continue;
        }
        const start = i;
        while (i < message.length && message[i] !== ' ') i++;
        const end = i - 1;
        words.push({ text: message.substring(start, i), start, end });
    }

    const isSpoilerWord = new Array(words.length).fill(false);
    const groups = Array.from({ length: spoiler_ranges.length }, () => []);
    
    let rangeIdx = 0;
    for (let wIdx = 0; wIdx < words.length; wIdx++) {
        const word = words[wIdx];
        
        while (rangeIdx < spoiler_ranges.length && spoiler_ranges[rangeIdx][1] < word.start) {
            rangeIdx++;
        }
        
        let tempRangeIdx = rangeIdx;
        while (tempRangeIdx < spoiler_ranges.length && spoiler_ranges[tempRangeIdx][0] <= word.end) {
            const [s, e] = spoiler_ranges[tempRangeIdx];

            if (!(word.end < s || word.start > e)) {
                isSpoilerWord[wIdx] = true;
                groups[tempRangeIdx].push(word.text);
            }
            tempRangeIdx++;
        }
    }

    const safeWords = new Set();
    words.forEach((w, idx) => {
        if (!isSpoilerWord[idx]) safeWords.add(w.text);
    });

    const revealedAlready = new Set();
    let importantCount = 0;

    for (const group of groups) {
        for (const wordText of group) {
            if (!safeWords.has(wordText) && !revealedAlready.has(wordText)) {
                importantCount++;
            }
            revealedAlready.add(wordText);
        }
    }

    return importantCount;
}