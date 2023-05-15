import React, { FC } from 'react'
import { IData } from '~/types'

type TableRowProps = {
  txData: IData
}

const TableRow: FC<TableRowProps> = ({ txData }) => {
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {txData.namespaceId}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {txData.height}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
        <a
          href={`https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txData.txhash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 truncate w-44 block"
          title={txData.txhash}
        >
          {txData.txhash}
        </a>
      </td>
    </tr>
  )
}

export default TableRow
