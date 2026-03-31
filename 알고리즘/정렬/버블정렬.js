/**
 * 버블 정렬(Bubble Sort)
 * 인접한 원소를 확인해서 정렬이 되어있지 않다면 위치를 변경
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 오름차순
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 버블 정렬의 수행 시간 측정
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();

console.log(`버블 정렬 소요 시간: ${endTime - startTime}ms.`);
console.log(bubbleSort(arr));
// 이미 정렬된 배열에 대한 버블 정렬의 수행 시간 측정
// 30000개의 원소가 7로
arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();

console.log(
  `정렬된 배열에 대한 버블 정렬 소요 시간: ${endTime - startTime}ms.`,
);

/**
 * 로컬 테스트 결과
 * 버블 정렬 소요 시간: 1100ms.
 * 정렬된 배열에 대한 버블 정렬 소요 시간: 428ms.
 *
 * 선택 정렬보다 더 오래 걸림.
 * 버블 정렬은 비효율적인 알고리즘인데, n^2을 가진 알고리즘 중에서도 제일 비효율적
 * 데이터가 클 때는 정말 비효율적
 */
