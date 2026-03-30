/**
 * 선택 정렬 (Selection Sort)
 * 각 단계에서 가장 작은 원소를 선택, 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체함
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 가장 작은 원소의 인덱스
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

// 선택 정렬의 수행 시간 측정
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

console.log(`선택 정렬 소요 시간: ${endTime - startTime}ms.`);

// 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정
// 30000개의 원소가 7로
arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();

console.log(
  `정렬된 배열에 대한 선택 정렬 소요 시간: ${endTime - startTime}ms.`,
);

/**
 * 로컬 테스트 결과
 * 선택 정렬 소요 시간: 365ms.
 * 정렬된 배열에 대한 선택 정렬 소요 시간: 357ms.
 *
 * 이미 정렬이 되어있던, 정렬이 되어있지 않던 소요시간이 걸림
 * 매 단계에서 가장 작은 것을 선택해서 약 N번의 연산이 필요함 (선형 탐색)
 */
