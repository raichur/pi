num_iterations = 99999; // The higher the number of iterations, the more precise the value of pi calculated

function calculate_pi(pi, count) {
  for(var i = 0; i <= num_iterations; i++) {
    pi += (4/count) - (4/(count+2));
    count += 4;
  }
  return pi;
}

calculate_pi(0,1);
