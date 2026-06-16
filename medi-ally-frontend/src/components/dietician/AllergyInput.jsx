import React from 'react';
import { X } from 'lucide-react';
import { ALLERGENS } from '../../utils/constants';

const AllergyInput = ({ selected = [], onChange }) => {
  const toggle = (allergen) => {
    if (selected.includes(allergen)) {
      onChange(selected.filter((a) => a !== allergen));
    } else {
      onChange([...selected, allergen]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
        Allergies (select if any)
      </label>
      <div className="flex flex-wrap gap-2">
        {ALLERGENS.map((allergen) => (
          <button
            key={allergen}
            type="button"
            onClick={() => toggle(allergen)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selected.includes(allergen)
                ? 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-400 ring-1 ring-danger-300'
                : 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-400 hover:bg-surface-200'
            }`}
          >
            {allergen}
            {selected.includes(allergen) && <X size={10} className="inline ml-1" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllergyInput;
