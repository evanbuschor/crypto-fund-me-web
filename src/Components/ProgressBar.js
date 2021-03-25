import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    border: 3px solid black;
    border-radius: 10px;
`;
const Fill = styled.div`
    min-height: 1px;
    min-width: 1px;
    height: 100%;
    width: ${(props) => props.fillPercent + "%"};
    background-color: blue;
    border-radius: 10px;
`;

const ProgressBar = ({
    value = 50,
    goal = 100,
    bgColor = "white",
    fgColor = "blue",
    className,
}) => {
    return (
        <>
            <Bar className={className}>
                <Fill fillPercent={(value / goal) * 100}></Fill>
            </Bar>
        </>
    );
};

export default ProgressBar;
