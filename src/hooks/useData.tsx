import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { IData, IDataContextValue, IValues } from '~/types'
import dataService from '~/services/data.service'

export const DataContext = createContext({} as IDataContextValue)

export const useData = () => useContext(DataContext)

type DataProviderProps = {
  children: ReactNode
}

const DataProvider = ({ children }: DataProviderProps) => {
  const [dataArr, setDataArr] = useState<IData[]>([])

  const getDataArr = () => {
    const storageData = localStorage.getItem('tx_history')

    if (storageData) {
      const localData = JSON.parse(storageData)
      setDataArr(localData)
    }
  }

  useEffect(() => {
    getDataArr()
  }, [])

  const submitData = async (payload: IValues) => {
    try {
      const data = await dataService.submit(payload)
      const newData = [data, ...dataArr]
      localStorage.setItem('tx_history', JSON.stringify(newData))
      setDataArr(newData)
    } catch (error) {
      console.error(error)
    }
  }

  const clearData = () => {
    localStorage.removeItem('tx_history')
    setDataArr([])
  }

  return (
    <DataContext.Provider value={{ dataArr, submitData, clearData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
