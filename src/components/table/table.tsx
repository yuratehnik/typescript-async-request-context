import React from "react";
import {useTable} from "../../context/table-context";

interface ITablePost {
    id: number;
    title: string;
    body: string;
    userId: number
}

const Table = (): JSX.Element => {
    const {tableData} = useTable();
    const tableElements: JSX.Element | null = tableData ? tableData.map((item: ITablePost)=>{
            return(
                <div key={item.id} className="item-wrapper">
                    <h1>
                        {item.title}
                    </h1>
                    <p>
                        {item.body}
                    </p>
                </div>
            )
        })
        : null;

    return (
        <div className="table-wrapper">
            {tableElements}
        </div>
    )
}

export default Table;