import React from 'react';

interface ModalButtonsProps {
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  cancelLabel?: string;
  submitLabel?: string;
  submitButtonClass?: string;
}

export const ModalButtons: React.FC<ModalButtonsProps> = ({
  onClose,
  onSubmit,
  cancelLabel = 'Cancel',
  submitLabel = 'Save Changes',
  submitButtonClass = 'bg-blue-600 hover:bg-blue-700',
}) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t">
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
           submitButtonClass
        }`}
      >
        {submitLabel}
      </button>
    </div>
  );
};
