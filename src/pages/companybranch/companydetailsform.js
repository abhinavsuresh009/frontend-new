import React, { useState, useEffect, useContext } from 'react';
import { Title } from '../../titles/titles';
import { AppContext } from '../../context/appContext';

function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { baseurl, comcode } = useContext(AppContext)
  const url = `${baseurl}/companybranch/company-details/${comcode}/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch company details');
        }
        const data = await response.json();
        setCompanyDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log({ "company": companyDetails })
  return (
    <div>
      <Title title="Company Details" />
      <div className="flex justify-center mt-10">
        <div>
          {companyDetails && (
            <div className="overflow-x-auto" style={{ maxWidth: '900px' }}>
              <table className="table-auto min-w-full">
                <tbody className="bg-white">
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Field</th>
                    <th className="py-3 px-6 text-left">Value</th>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Name</td>
                    <td className="py-3 px-6 text-left">{companyDetails.comname}</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Code</td>
                    <td className="py-3 px-6 text-left">{companyDetails.comcode}</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Email</td>
                    <td className="py-3 px-6 text-left">{companyDetails.email}</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Phone</td>
                    <td className="py-3 px-6 text-left">{companyDetails.phone}</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">Address</td>
                    <td className="py-3 px-6 text-left">{companyDetails.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
