import React from "react";
import {useTable} from "../../context/table-context";

const LoadDataButton = (): JSX.Element => {
    const {loadInfo} = useTable();

    return (
        <>
            <button onClick={loadInfo}>LoadSuperData</button>
        </>
    )
}

export default LoadDataButton;