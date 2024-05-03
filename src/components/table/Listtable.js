import React from 'react';

const ListTable = ({ columns, data, datakey }) => {
  return (
    <div >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-8 md:px-12 lg:px-16 xl:px-20">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data && data.map((item, index) => (
              <tr key={index}>
                {datakey.map((column, columnIndex) => (
                  <td key={columnIndex} className="px-6 py-4 whitespace-nowrap sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    {item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
