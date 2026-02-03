function solution(code) {
  let mode = 0;
  let ret = [];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '1') {
      mode ^= 1; // 0 <-> 1 토글
      continue;
    }

    if (i % 2 === mode) {
      ret.push(code[i]);
    }
  }

	// 문자열이 많아진다면 문자열 += 연산보다 push로 처리하는게 빠를 수 있음
  return ret.length ? ret.join('') : 'EMPTY';
}