function solution(todo_list, finished) {
  const answer = todo_list.filter((_, idx) => !finished[idx]);
  return answer;
}
