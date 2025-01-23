import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

interface MemoryFormProps {
  initialData?: {
    title: string;
    content: string;
    image_url: string;
    mood_rating: number;
    color_scheme: {
      primary: string;
      secondary: string;
      background: string;
    };
  };
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

export const MemoryForm: React.FC<MemoryFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    image_url: initialData?.image_url || '',
    mood_rating: initialData?.mood_rating || 5,
    color_scheme: initialData?.color_scheme || {
      primary: '#ff3e00',
      secondary: '#40b3ff',
      background: '#ffffff'
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{initialData ? 'Edit Memory' : 'New Memory'}</h2>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <X size={20} />
        </button>
      </div>

      <div>
        <label className="block font-bold mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border-2 border-black rounded"
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Content</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full p-2 border-2 border-black rounded h-32"
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Image</label>
        <ImageUpload
          value={formData.image_url}
          onChange={(url) => setFormData({ ...formData, image_url: url })}
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Mood Rating (1-10)</label>
        <input
          type="range"
          min="1"
          max="10"
          value={formData.mood_rating}
          onChange={(e) => setFormData({ ...formData, mood_rating: parseInt(e.target.value) })}
          className="w-full"
        />
        <div className="text-center font-bold">{formData.mood_rating}</div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Color Scheme</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Primary</label>
            <input
              type="color"
              value={formData.color_scheme.primary}
              onChange={(e) => setFormData({
                ...formData,
                color_scheme: { ...formData.color_scheme, primary: e.target.value }
              })}
              className="w-full h-10 border-2 border-black rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Secondary</label>
            <input
              type="color"
              value={formData.color_scheme.secondary}
              onChange={(e) => setFormData({
                ...formData,
                color_scheme: { ...formData.color_scheme, secondary: e.target.value }
              })}
              className="w-full h-10 border-2 border-black rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Background</label>
            <input
              type="color"
              value={formData.color_scheme.background}
              onChange={(e) => setFormData({
                ...formData,
                color_scheme: { ...formData.color_scheme, background: e.target.value }
              })}
              className="w-full h-10 border-2 border-black rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
        >
          {initialData ? 'Update' : 'Create'} Memory
        </button>
      </div>
    </form>
  );
};