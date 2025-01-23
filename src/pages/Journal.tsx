import React, { useEffect, useState } from 'react';
import { Book, LogOut, Plus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { supabase } from '../lib/supabase';
import { MemoryCard } from '../components/MemoryCard';
import { MemoryForm } from '../components/MemoryForm';
import { SocialLinks } from '../components/SocialLinks';

export function Journal() {
  const navigate = useNavigate();
  const { user, loading, initialize, signIn, signUp, signOut } = useAuthStore();
  const [memories, setMemories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMemory, setEditingMemory] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (user) {
      fetchMemories();
    }
  }, [user]);

  const fetchMemories = async () => {
    const { data, error } = await supabase
      .from('memories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching memories:', error);
      return;
    }

    setMemories(data);
  };

  const handleSubmit = async (formData) => {
    if (editingMemory) {
      const { error } = await supabase
        .from('memories')
        .update({
          ...formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingMemory.id);

      if (error) {
        console.error('Error updating memory:', error);
        return;
      }
    } else {
      const { error } = await supabase
        .from('memories')
        .insert([{
          ...formData,
          user_id: user.id,
        }]);

      if (error) {
        console.error('Error creating memory:', error);
        return;
      }
    }

    setShowForm(false);
    setEditingMemory(null);
    fetchMemories();
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('memories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting memory:', error);
      return;
    }

    fetchMemories();
  };

  const handleEdit = (id) => {
    const memory = memories.find(m => m.id === id);
    setEditingMemory(memory);
    setShowForm(true);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (error) {
      console.error('Auth error:', error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="fixed top-4 left-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center px-4 py-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            <ArrowLeft size={20} className="mr-1" />
            Back to Home
          </button>
        </div>
        
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md p-8 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center mb-8">
              <Book size={32} className="mr-2" />
              <h1 className="text-2xl font-bold">Memoiries</h1>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              <div>
                <label className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full text-center text-gray-600 hover:text-black"
              >
                {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Book size={32} className="mr-2" />
            <h1 className="text-2xl font-bold">Memoiries</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setShowForm(true);
                setEditingMemory(null);
              }}
              className="flex items-center px-4 py-2 bg-black text-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              <Plus size={20} className="mr-2" />
              New Memory
            </button>
            <button
              onClick={signOut}
              className="flex items-center px-4 py-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              <LogOut size={20} className="mr-2" />
              Sign Out
            </button>
          </div>
        </div>

        {showForm && (
          <div className="mb-8">
            <MemoryForm
              initialData={editingMemory}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingMemory(null);
              }}
            />
          </div>
        )}

        <div className="space-y-6">
          {memories.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        <SocialLinks
          twitter="https://twitter.com/stackblitz"
          linkedin="https://linkedin.com/company/stackblitz"
          github="https://github.com/stackblitz"
        />
      </div>
    </div>
  );
}