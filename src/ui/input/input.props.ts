export type InputProps = {
    label?: string;
    value: string;
    placeholder?: string;
    error?: string;
    type?: string;
    onChange: (value: string) => void;
}