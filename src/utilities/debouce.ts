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
