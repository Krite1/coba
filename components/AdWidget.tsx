
import React from 'react';

const AdWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-md">
          Visit
        </span>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <img src="https://i.imgur.com/B9zD1pS.png" alt="Heo.li logo" className="h-40 object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          Everything with one platform.
        </h3>
        <p className="text-gray-500 mt-2 uppercase tracking-wider text-sm">
          Shorten Links<br />
          Bio Pages<br />
          QR Codes<br />
          Share VCards<br />
          Transfer File
        </p>
      </div>
    </div>
  );
};

export default AdWidget;
