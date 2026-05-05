import React from 'react'

function JobList()
{

 const jobs = [
    { id: 1, role: "Frontend Developer", company: "ABC Tech" },
    { id: 2, role: "Backend Developer", company: "XYZ Solutions" },
    { id: 3, role: "Full Stack Developer", company: "Innovate Ltd" },
    { id: 4, role: "UI/UX Designer", company: "Creative Studio" },
  ];



  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add("scale-110");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("scale-105");
  };

  const handleApply = (role) => {
    alert(`Applied for ${role}`);
  };

  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl text-blue-400  font-bold text-center mb-6">
        Job Openings 
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
           
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            className="bg-white p-5 rounded-xl shadow-md transition cursor-pointer"
          >
            <h2 className="text-3xl  font-semibold">{job.role}</h2>
            <p className="text-gray-600 mt-2">{job.company}</p>

            <button
              onClick={(e) => {
               
                handleApply(job.role);
              }}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg
               hover:bg-blue-600"
            >
              Apply
            </button>

           
          </div>
        ))}
      </div>
    </div>
  );
}
export default JobList