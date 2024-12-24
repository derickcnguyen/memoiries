/*
  # Create memories schema

  1. New Tables
    - `memories`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `title` (text)
      - `content` (text)
      - `image_url` (text)
      - `mood_rating` (integer, 1-10)
      - `color_scheme` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `memories` table
    - Add policies for CRUD operations
*/

CREATE TABLE memories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  mood_rating integer CHECK (mood_rating >= 1 AND mood_rating <= 10),
  color_scheme jsonb DEFAULT '{"primary": "#ff3e00", "secondary": "#40b3ff", "background": "#ffffff"}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE memories ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can create their own memories"
  ON memories FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own memories"
  ON memories FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own memories"
  ON memories FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own memories"
  ON memories FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);