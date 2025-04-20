import React from 'react';
import { useTheme } from '../../../context/ThemeContext.jsx';

const Table = ({ data, columns }) => {
  const { darkMode } = useTheme();

  if (!data || !data.length || !columns || !columns.length) {
    return null;
  }

  return (
    <div className='w-full overflow-x-auto max-w-full'>
      <table
        className={`w-full table-auto border-collapse rounded-lg ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}
      >
        <thead>
          <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`py-3 px-2 sm:px-4 text-left font-semibold ${
                  column.width || ''
                }`}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-t ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className='py-3 px-2 sm:px-4 break-words'
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
