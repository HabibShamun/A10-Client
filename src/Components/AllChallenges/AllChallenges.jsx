import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxios from '../../Hooks/useAxios';

const AllChallenges = () => {
  const axios = useAxios();
  const [allChallenges, setAllChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/challengeCategories');
        console.log(res.data)
        setCategories(['All', ...res.data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [axios]);

  useEffect(() => {
    const fetchChallenges = async () => {
      setLoading(true);
      try {
        const query =
          categoryFilter !== 'All'
            ? `/challenges?category=${encodeURIComponent(categoryFilter)}`
            : '/challenges';

        const res = await axios.get(query);
        setAllChallenges(res.data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, [axios, categoryFilter]);

  return (
    <div>
      <h1
        className="text-center mt-10 mb-4 text-primary text-3xl font-bold"
        data-aos="fade-down"
      >
        All of Our Challenges
      </h1>

      {loading ? (
        <div className="text-center py-20 text-lg font-medium text-gray-500">
          Loading challenges...
        </div>
      ) : (
        <div className="px-4 py-8">
          <div className="mb-6 text-center">
            <select
              className="select select-bordered w-full max-w-xs"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {allChallenges.map((challenge, index) => (
              <div
                key={challenge._id}
                className="card bg-base-100 w-full max-w-sm shadow-md flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <figure className="px-6 pt-6">
                  <img
                    src={challenge.imageUrl}
                    alt={challenge.title}
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center px-6 pb-6">
                  <h2 className="card-title">{challenge.title}</h2>
                  <p className="text-sm text-gray-500">{challenge.category}</p>
                  <p className="text-sm text-gray-700">{challenge.description}</p>
                  <p className="text-xs mt-2 text-gray-500">
                    <strong>Participants:</strong> {challenge.participants}
                  </p>
                  <div className="card-actions mt-4">
                    <Link to={`/challengedetails/${challenge._id}`} className="btn btn-primary">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllChallenges;
