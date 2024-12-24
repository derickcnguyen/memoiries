import React from 'react';
import { format } from 'date-fns';
import { Edit2, Trash2 } from 'lucide-react';

interface MemoryCardProps {
  memory: {
    id: string;
    title: string;
    content: string;
    image_url: string;
    mood_rating: number;
    color_scheme: {
      primary: string;
      secondary: string;
      background: string;
    };
    created_at: string;
    updated_at: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onEdit, onDelete }) => {
  const { color_scheme } = memory;

  return (
    <div 
      className="p-6 mb-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-transform hover:-translate-y-1"
      style={{ backgroundColor: color_scheme.background }}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold" style={{ color: color_scheme.primary }}>{memory.title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(memory.id)}
            className="p-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(memory.id)}
            className="p-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {memory.image_url && (
        <img 
          src={memory.image_url} 
          alt={memory.title}
          className="w-full h-48 object-cover mb-4 rounded border-2 border-black"
        />
      )}

      <p className="mb-4">{memory.content}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold">Mood:</span>
          <div 
            className="px-3 py-1 rounded bg-white border-2 border-black"
            style={{ color: color_scheme.secondary }}
          >
            {memory.mood_rating}/10
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <div>Created: {format(new Date(memory.created_at), 'PPp')}</div>
          {memory.updated_at !== memory.created_at && (
            <div>Updated: {format(new Date(memory.updated_at), 'PPp')}</div>
          )}
        </div>
      </div>
    </div>
  );
};