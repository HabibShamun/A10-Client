import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useAxios from '../../Hooks/useAxios';
import { FaPlusCircle } from 'react-icons/fa';

const NewChallenges = () => {
  const axios = useAxios();
  const [error, setError] = useState('');

  const createChallenge = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const title = form.title.value.trim();
    const category = form.category.value.trim();
    const description = form.description.value.trim();
    const duration = form.duration.value.trim();
    const target = form.target.value.trim();
    const imageUrl = form.imageUrl.value.trim();
    const impactMetric = form.impactMetric.value.trim();
    const createdBy = form.createdBy.value.trim();
    const startDate =  'N/A';
    const endDate = 'N/A';

    const titleRegex = /^.{6,}$/;
    const durationRegex = /^\d+$/;

    if (!titleRegex.test(title)) {
      const msg = 'Title must be at least 6 characters long.';
      setError(msg);
      toast.error(msg);
      return;
    }

    if (!durationRegex.test(duration)) {
      const msg = 'Duration must be a number.';
      setError(msg);
      toast.error(msg);
      return;
    }

    const newChallenge = {
      title,
      category,
      description,
      duration: parseInt(duration),
      target,
      imageUrl,
      impactMetric,
      createdBy,
      startDate,
      endDate,
      participants: 0,
    };

    try {
      const res = await axios.post('/challenges', newChallenge);
      if (res.data.insertedId) {
        toast.success('Challenge created successfully!');
        form.reset();
      }
    } catch (err) {
      console.error('Error creating challenge:', err);
      toast.error('Failed to create challenge.');
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl my-10">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-2">
          <FaPlusCircle /> New Challenge
        </h2>

        <form onSubmit={createChallenge} className="fieldset space-y-4">
          <label className="label">Title</label>
          <input type="text" name="title" className="input input-bordered" placeholder="Challenge title" />

          <label className="label">Category</label>
          <input type="text" name="category" className="input input-bordered" placeholder="e.g. Energy Conservation" />

          <label className="label">Description</label>
          <textarea name="description" className="textarea textarea-bordered" placeholder="Challenge description"></textarea>

          <label className="label">Duration (days)</label>
          <input type="number" name="duration" className="input input-bordered" placeholder="e.g. 5" />

          <label className="label">Target / Goal</label>
          <input type="text" name="target" className="input input-bordered" placeholder="e.g. Save energy and water" />

          <label className="label">Impact Metric</label>
          <input type="text" name="impactMetric" className="input input-bordered" placeholder="e.g. kWh saved" />

          <label className="label">Created By</label>
          <input type="email" name="createdBy" className="input input-bordered" placeholder="e.g. admin@ecotrack.com" />

          <label className="label">Start Date</label>
          <input type="date" name="startDate" className="input input-bordered" />

          <label className="label">End Date</label>
          <input type="date" name="endDate" className="input input-bordered" />

          <label className="label">Image URL</label>
          <input type="text" name="imageUrl" className="input input-bordered" placeholder="Image link" />

          <button type="submit" className="btn btn-primary mt-4">Create Challenge</button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default NewChallenges;
