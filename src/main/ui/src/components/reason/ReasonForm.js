import React, {useEffect, useMemo} from "react";
import {Container, InnerContainer} from "./Reason.style";
import {Dropdown, TextField} from "@iyadmosa/react-library";
import {useDispatch, useSelector} from "react-redux";
import {listReasons} from "../../actions/ReasonAction";

export const ReasonForm = ({disabled = false, value, onChange = () => 0}) => {
    const {major, minor, minor2} = value;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listReasons());
    }, []);

    const majors = [...new Set(useSelector((state) => state.reason.reasons).map((obj) => obj.major))];
    const majorsOptions = useMemo(
        () => [...majors.map((name) => ({value: name, label: name}))],
        [majors]
    );

    const minors = [...new Set(useSelector((state) => state.reason.reasons).map((obj) => obj.minor))];
    const minorsOptions = useMemo(
        () => [...minors.map((name) => ({value: name, label: name}))],
        [minors]
    );

    const minors2 = [...new Set(useSelector((state) => state.reason.reasons).map((obj) => obj.minor2))];
    const minors2Options = useMemo(
        () =>
            [
                {value: '', label: 'Select an option'},  // Empty option
                ...minors2.map((name) => ({value: name, label: name}))
            ],
        [minors2]
    );
    return (
        <Container>
            <InnerContainer>
                <Dropdown
                    title={"Major"}
                    value={{value: major, label: major}}
                    options={majorsOptions}
                    onChange={(nv) => onChange({...value, major: nv.value})}
                    width={350}
                    disabled={disabled}
                />
                <TextField
                    title={"Major"}
                    value={major}
                    onChange={(nv) => onChange({...value, major: nv})}
                />
            </InnerContainer>
            <InnerContainer>
                <Dropdown
                    title={"Minor"}
                    value={{value: minor, label: minor}}
                    options={minorsOptions}
                    onChange={(nv) => onChange({...value, minor: nv.value})}
                    width={350}
                    disabled={disabled}
                />
                <TextField
                    title={"Minor"}
                    value={minor}
                    onChange={(nv) => onChange({...value, minor: nv})}
                />
            </InnerContainer>
            <InnerContainer>
                <Dropdown
                    title={"Minor2"}
                    value={{value: minor2, label: minor2}}
                    options={minors2Options}
                    onChange={(nv) => onChange({...value, minor2: nv.value})}
                    width={350}
                    disabled={disabled}
                />
                <TextField
                    title={"Minor2"}
                    value={minor2}
                    onChange={(nv) => onChange({...value, minor2: nv})}
                />
            </InnerContainer>
        </Container>
    );
};
