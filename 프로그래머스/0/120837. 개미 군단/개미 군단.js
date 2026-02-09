function solution(hp) {
  let count = 0;

  const GENERAL_ATTACK = 5;
  const SOLDIER_ATTACK = 3;
  const WORKER_ATTACK = 1;

  const generalAnts = Math.floor(hp / GENERAL_ATTACK);
  hp -= generalAnts * GENERAL_ATTACK;
  count += generalAnts;

  const soldierAnts = Math.floor(hp / SOLDIER_ATTACK);
  hp -= soldierAnts * SOLDIER_ATTACK;
  count += soldierAnts;
  count += hp / WORKER_ATTACK;

  return count;
}
