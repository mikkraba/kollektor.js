
/**
 * Debunces function till certain timeperiod has passed without subsequent event firings.
 * From https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
 * By Elijah Kotyluk.
 * 
 * @param func 
 * @param waitFor
 */
export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
    let timeout;
  
    const debounced = (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), waitFor)
    }
  
    return debounced as (...args: Parameters<F>) => ReturnType<F>
  }