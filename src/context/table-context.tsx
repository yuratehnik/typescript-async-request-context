import React, {useContext, createContext, useState, useEffect} from "react";
import makeRequest from "../helpers/table-request";

interface PropsValue {
    children?:
        | JSX.Element
        | JSX.Element[]
        | string
        | string[];
}

type ContextValue = {
    Provider: React.Provider<any>,
    Consumer: React.Consumer<any>
} | null;

const TableContext: ContextValue = createContext(null);

const TableProvider = (props: PropsValue): JSX.Element => {
    const [tableData, setTableData] = useState([])

    const onLoadTable = (): void => {
        console.log("yes, we a here, everything OK")
        makeRequest()
            .then((data)=>{
                setTableData(data)
            });
    }

    return (
        <TableContext.Provider
            value={{
                tableData,
                loadInfo: onLoadTable
            }}>
            {props.children}
        </TableContext.Provider>
    )
}

const useTable = () => {
    return useContext(TableContext)
}

export {TableProvider, useTable}