import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 75px;
  background: white;
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

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  padding: 5px;
  gap: 15px;
`;
