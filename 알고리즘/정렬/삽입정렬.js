/**
 * 삽입 정렬(Insertion Sort)
 * 각 숫자를 적절한 위치에 삽입하는 정렬 기법
 * 버블정렬, 선택정렬처럼 시간복잡도 O(N^2)이지만 그 둘보단 빠르게 동작하는 특징을 가짐
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;

        // 구조 분해 할당으로 하면?
        // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}

// 삽입 정렬의 수행 시간 측정
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();

console.log(`삽입 정렬 소요 시간: ${endTime - startTime}ms.`);

// 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정
// 30000개의 원소가 7로
arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

console.log(
  `정렬된 배열에 대한 삽입 정렬 소요 시간: ${endTime - startTime}ms.`,
);

/**
 * 로컬 테스트 결과
 * 삽입 정렬 소요 시간: 336ms.
 * 정렬된 배열에 대한 삽입 정렬 소요 시간: 0ms.
 *
 * 삽입정렬 알고리즘은 시간 복잡도 n제곱에 해당하지만
 * 이미 정렬이 되어있거나, 특정한 상황적인 조건을 만족한다면 효율적으로 동작함
 */
