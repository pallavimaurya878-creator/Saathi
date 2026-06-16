import React, { forwardRef } from 'react';

/**
 * Reusable Input component with label, error, and icon support
 */
const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon size={18} className="text-surface-400" />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`
            w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-surface-800
            border-surface-200 dark:border-surface-700
            text-surface-900 dark:text-surface-100
            placeholder:text-surface-400
            focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
            transition-all duration-200
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-danger-500 focus:ring-danger-500/30' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-danger-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
