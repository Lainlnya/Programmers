function solution(bridge_length, weight, truck_weights) {
  let bridge_queue = Array.from({ length: bridge_length }, () => 0);
  let answer = 0;
  let bridge_weight = 0;

  answer++;
  bridge_weight += truck_weights[0];
  bridge_queue.shift();
  bridge_queue.push(truck_weights.shift());

  while (bridge_weight > 0) {
    answer++;

    bridge_weight -= bridge_queue.shift();

    if (
      truck_weights.length > 0 &&
      bridge_weight + truck_weights[0] <= weight
    ) {
      bridge_weight += truck_weights[0];
      bridge_queue.push(truck_weights.shift());
    } else {
      bridge_queue.push(0);
    }
  }
  return answer;
}
