export type TextInputProps = {
    label?: string;
    value: string;
    placeholder?: string;
    error?: string;
    onChange: (value: string) => void;
}