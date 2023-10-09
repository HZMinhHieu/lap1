export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric.name, metric.value);
  }
}
