function solution(spell, dic) {
    const spellString = spell.sort().join('');
    
    return dic.some((d) => [...d].sort().join('') === spellString) ? 1 : 2;
}