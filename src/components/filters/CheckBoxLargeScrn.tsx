'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { useFilter } from '@/context/FilterContext';

interface CheckBoxLargeScrnProps {
    name: keyof Filter;
    title: string;
    options: string[];
}

export const CheckBoxLargeScrn: React.FC<CheckBoxLargeScrnProps> = ({
    name,
    title,
    options,
}) => {
    const { selectedFilters, handleImmediateChange } = useFilter();

    const selectedValues = selectedFilters[name] as string[];

    const handleCheckboxChange = (value: string, checked: boolean) => {
        const updatedValues = checked
            ? [...selectedValues, value] // Add value if checked
            : selectedValues.filter((v) => v !== value); // Remove value if unchecked

        handleImmediateChange(name, updatedValues);
    };

    return (
        <div className='space-y-4'>
            <h3 className='mb-3 font-medium text-gray-750'>{title}</h3>
            {options.map((option) => {
                const checkboxId = `${name}-${option}`;
                return (
                    <div
                        key={option}
                        className='flex flex-row items-center space-x-2 align-middle text-base'
                    >
                        <Checkbox
                            id={checkboxId}
                            aria-label={option}
                            checked={selectedValues.includes(option)}
                            onCheckedChange={(checked: boolean) => {
                                handleCheckboxChange(option, checked);
                            }}
                        />
                        <label
                            aria-label={option}
                            htmlFor={checkboxId}
                            className='font-light hover:cursor-pointer'
                        >
                            {option}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
