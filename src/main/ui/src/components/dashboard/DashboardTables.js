import React, {useEffect, useState} from "react";
import {DashboardScreen} from "@iyadmosa/react-library";
import {useDispatch, useSelector} from "react-redux";
import {listPointsAllComponents} from "../../actions/DashbaordAction";

export const DashboardTables = () => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPointsAllComponents(from, to));
    }, [from, to]);
    const all = useSelector((state) => state.dashboard.all);
    const {
        total,
        withdraw_major,
        withdraw_minor,
        withdraw_minor2,
        deposit_person,
    } = all;
    const charts =
        [
            [
                {
                    title: "Deposit and Withdraw",
                    type: "table",
                    table_columns: [
                        {
                            Header: "Type",
                            accessor: "label",
                            style: {
                                textAlign: "center",
                            },
                        },
                        {
                            Header: "Total",
                            accessor: "value",
                            style: {
                                textAlign: "center",
                            },
                        },
                    ],
                    table_data: total,
                },
            ],
            [
                {
                    title: "Withdraw",
                    type: "table",
                    table_columns: [
                        {
                            Header: "Major",
                            accessor: "label",
                            style: {
                                textAlign: "center",
                            },
                        },
                        {
                            Header: "Total",
                            accessor: "value",
                            style: {
                                textAlign: "center",
                            },
                        },
                    ],
                    table_data: withdraw_major,
                },
            ],
            [
                {
                    title: "Deposit Per Person",
                    type: "table",
                    table_columns: [
                        {
                            Header: "Person",
                            accessor: "label",
                            style: {
                                textAlign: "center",
                            },
                        },
                        {
                            Header: "Total",
                            accessor: "value",
                            style: {
                                textAlign: "center",
                            },
                        },
                    ],
                    table_data: deposit_person,
                },
            ],
            [
                {
                    title: "Withdraw Per reason minor",
                    type: "table",
                    table_columns: [
                        {
                            Header: "Reason",
                            accessor: "label",
                            style: {
                                textAlign: "center",
                            },
                        },
                        {
                            Header: "Value",
                            accessor: "value",
                            style: {
                                textAlign: "center",
                            },
                        },
                    ],
                    table_data: withdraw_minor,
                },
            ],
            [
                {
                    title: "Withdraw Per reason details (Construction)",
                    type: "table",
                    table_columns: [
                        {
                            Header: "Reason",
                            accessor: "label",
                            style: {
                                textAlign: "center",
                            },
                        },
                        {
                            Header: "Value",
                            accessor: "value",
                            style: {
                                textAlign: "center",
                            },
                        },
                    ],
                    table_data: withdraw_minor2,
                },
            ],
        ];
    return (
        <DashboardScreen
            title={"Dashboard Tables"}
            charts={charts}
            setFrom={setFrom}
            setTo={setTo}
            onInit={() => dispatch(listPointsAllComponents(from, to))}
            refresh={false}
        />
    );
};
