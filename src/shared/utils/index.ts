export async function withDelay<T>(promise: Promise<T>, delay: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

  return await promise;
}
