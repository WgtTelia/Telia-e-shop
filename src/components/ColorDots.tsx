import React from 'react';
import { mapColorToHex } from '@/utils/colorUtils';

interface ColorDotsProps {
  availableColors: ColorOption[];
  onColorSelect: (color: ColorOption) => void;
}

export const ColorDots: React.FC<ColorDotsProps> = ({ availableColors, onColorSelect }) => {
  return (
    <div className='flex gap-2'>
      {availableColors.map((colorOption) => (
        <div
          key={colorOption.color}
          title={colorOption.color}
          className='h-[12px] w-[12px] cursor-pointer rounded-full outline outline-grey-200'
          style={{ backgroundColor: mapColorToHex(colorOption.color) }}
          onClick={() => onColorSelect(colorOption)}
        />
      ))}
    </div>
  );
};
