import React, { useState } from 'react';


const UserComparisonSelector = ({users,setUser1, setUser2}) => {




  return (
    <div className="w-full  max-w-2xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4  justify-between">
          {/* Left user selector */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">User 1</label>
            <select
              onChange={(e) => setUser1(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select user...</option>
              {users.map(user => (
                <option 
                  key={user} 
                  value={user}
                >
                  {user}
                </option>
              ))}
            </select>
          </div>

          {/* Comparison icon */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-600">vs</span>
            </div>
          </div>

          {/* Right user selector */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">User 2</label>
            <select
              onChange={(e) => setUser2(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select user...</option>
              {users.map(user => (
                <option 
                  key={user} 
                  value={user}
                >
                  {user}
                </option>
              ))}
            </select>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserComparisonSelector;