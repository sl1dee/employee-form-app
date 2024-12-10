export type CalendarProps = {
    value: string | undefined;
    onChange: (value: string) => void;
    error?: string;
}