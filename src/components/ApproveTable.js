import React, { useState } from 'react';
import { Card, CardHeader, Typography, Button, CardBody, CardFooter, IconButton, Input } from "@material-tailwind/react";

function DaybookTableComponent({ TABLE_HEAD, datakey, daybooks, onApprove, rowsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = daybooks.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Daybook List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Details about the daybook transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input label="Search" />
                        </div>
                        <Button className="flex items-center gap-3 bg-gray-700" size="sm">
                            Search
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={index}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((daybook, rowIndex) => (
                            <tr key={daybook.id}>
                                {datakey.map((key, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                                        {key === 'approved' ? (daybook.approved ? 'Yes' : 'No') : daybook[key]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {!daybook.approved && (
                                        <button onClick={() => onApprove(daybook.id)} className="flex items-center gap-3 text-xs bg-gray-700">
                                            APPROVE
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    {Array.from({ length: Math.ceil(daybooks.length / rowsPerPage) }, (_, index) => (
                        <IconButton
                            key={index}
                            variant={currentPage === index + 1 ? "filled" : "text"}
                            size="sm"
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </IconButton>
                    ))}
                </div>
                <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= daybooks.length}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
}

export default DaybookTableComponent;
