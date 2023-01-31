import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30px;
  background: white;
  width: 90%;
  height: 90%;
`;
export const DateRangeRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ChartRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
`;

export const TablesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #3c4144;
`;
