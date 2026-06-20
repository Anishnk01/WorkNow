'use client';

import { useState } from 'react';

interface RoleSelectionCardProps {
  role: 'CUSTOMER' | 'WORKER';
  isSelected: boolean;
  onSelect: (role: 'CUSTOMER' | 'WORKER') => void;
}

export function RoleSelectionCard({
  role,
  isSelected,
  onSelect,
}: RoleSelectionCardProps) {
  const roleConfig = {
    CUSTOMER: {
      title: 'I\'m a Customer',
      description: 'Looking to hire skilled workers',
      icon: '🔍',
    },
    WORKER: {
      title: 'I\'m a Worker',
      description: 'Offering services and skills',
      icon: '🛠️',
    },
  };

  const config = roleConfig[role];

  return (
    <button
      onClick={() => onSelect(role)}
      className={`p-6 rounded-lg border-2 transition text-left ${
        isSelected
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="text-4xl mb-3">{config.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{config.title}</h3>
      <p className="text-gray-600">{config.description}</p>
      {isSelected && (
        <div className="mt-4 flex items-center text-blue-600">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-600 text-white rounded-full text-sm">✓</span>
          <span className="ml-2 text-sm font-medium">Selected</span>
        </div>
      )}
    </button>
  );
}
