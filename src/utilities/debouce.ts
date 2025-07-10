/**
 *
 * Creates a debounced version of a function that delays its execution
 * until after a specified wait time has passed since the last call.
 *
 * Useful for optimizing performance when dealing with events like
 * window resizing, input typing, or API calls on user interaction.
 *
 * @param fn
 * @param delay
 *
 */

export function debounce<T extends (...args: string[]) => void>(
    fn: T,
    delay: number = 300,
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<T>) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
