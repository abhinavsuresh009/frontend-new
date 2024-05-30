import { Card, Typography } from "@material-tailwind/react";


export function Table({HEAD, TABLE_ROWS, datakey}) {
    return (
      <Card className="h-full w-11/12 overflow-scroll mt-10  ml-auto mr-auto">
        <table className="border min-w-max table-auto text-left">
          <thead>
            <tr>
              {HEAD && HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS && TABLE_ROWS.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
   
              return (
                <tr key={index}>
                   {datakey && datakey.map((column, columnIndex) => (
                  <td key={columnIndex} className={classes}>
                     <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      >
                      {item[column]}
                    </Typography>
                  </td>
                ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    );
  }
