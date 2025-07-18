export type ContextCardProps = {
    payload: {
        /**data attribute name */
        name: string;
        /**value of data*/
        value: string;
    }[];
    /**label provided to x-axis*/
    xLabel?: string | number;
    /**represent whether the tick is active or not*/
    active: boolean;
    /**
     * Formats the name and value according to custom logic or display preferences.
     */
    formatter: (
        name: string,
        value: string | number,
    ) => { name: string; value: string };
};
