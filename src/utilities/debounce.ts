/**
 *
 * Creates a debounced version of a function that delays its execution
 * until after a specified wait time has passed since the last call.
 *
 * Useful for optimizing performance when dealing with events like
 * window resizing, input typing, or API calls on user interaction.
 *
 * @param fn function which needs to be debounced
 * @param delay time for which the function needs to wait before the next execution
 *
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
    fn: T,
    delay: number = 300,
): (...args: Parameters<T>) => ReturnType<T> | void {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<T>) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
