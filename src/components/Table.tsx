import React, { FC } from 'react'
import { IData } from '~/types'
import TableRow from './TableRow'

type TableProps = {
  data: IData[]
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-6">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Namespace ID
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Height
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Tx hash
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((d) => (
            <TableRow key={d.txhash} txData={d} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
