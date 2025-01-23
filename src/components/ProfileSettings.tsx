import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface ProfileSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ isOpen, onClose }) => {
  const { socialLinks, updateSocialLinks } = useAuthStore();
  const [links, setLinks] = useState(socialLinks);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSocialLinks(links);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Profile Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-2">Twitter URL</label>
            <input
              type="url"
              value={links.twitter || ''}
              onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
              className="w-full p-2 border-2 border-black rounded"
              placeholder="https://twitter.com/username"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">LinkedIn URL</label>
            <input
              type="url"
              value={links.linkedin || ''}
              onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
              className="w-full p-2 border-2 border-black rounded"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">GitHub URL</label>
            <input
              type="url"
              value={links.github || ''}
              onChange={(e) => setLinks({ ...links, github: e.target.value })}
              className="w-full p-2 border-2 border-black rounded"
              placeholder="https://github.com/username"
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};