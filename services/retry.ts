export const retry = (
  fn: Function,
  retriesLeft = 3,
  interval = 1000
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(() => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            // reject(error);
            console.warn({ error: "Chunk failed" });
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};
