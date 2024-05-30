import React from 'react';

const SimpleTable = () => {
  return (
    <div className="h-72 w-full overflow-scroll ">
      <table className="order-4 w-full min-w-max table-auto text-left text-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 sm:px-4 py-2 ">Item</th>
            <th className="border px-2 sm:px-4 py-2 ">Description</th>
            <th className="border px-2 sm:px-4 py-2 ">Weight (grams)</th>
            <th className="border px-2 sm:px-4 py-2 ">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 sm:px-4 py-2 ">Gold Necklace</td>
            <td className="border px-2 sm:px-4 py-2 ">Quality product</td>
            <td className="border px-2 sm:px-4 py-2 ">50g</td>
            <td className="border px-2 sm:px-4 py-2 ">2</td>
          </tr>
          <tr>
            <td className="border px-2 sm:px-4 py-2 ">Diamond Necklace</td>
            <td className="border px-2 sm:px-4 py-2 ">Quality product</td>
            <td className="border px-2 sm:px-4 py-2 ">500g</td>
            <td className="border px-2 sm:px-4 py-2 ">1</td>
          </tr>
          <tr>
            <td className="border px-2 sm:px-4 py-2 ">Gold Chain</td>
            <td className="border px-2 sm:px-4 py-2 ">Quality product</td>
            <td className="border px-2 sm:px-4 py-2 ">1kg</td>
            <td className="border px-2 sm:px-4 py-2">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
