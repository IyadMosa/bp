import styled from 'styled-components';

export const headerFooterBGColor = {
    light: '#ffffff',
    dark: '#1F3242',
};

export const titleColor = {
    light: 'rgba(0, 0, 0, 0.65)',
    dark: '#ffffff',
};

export const modalBgColor = {
    light: '#F5F5F5',
    dark: '#142230',
};


export const modalBoxShadow = {
    light: '1px 1px 10px rgba(85, 85, 85, 0.15)',
    dark: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export const ModalBody = styled.div`
  padding: 0 5px;
`;

export const InputTitle = styled.div`
  color: '#142230';
  line-height: 18px;
  margin-bottom: 3px;
  font-family: 'TitilliumWeb-300';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
`;

export const FileInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 40px;
`;

export const FileUpload = styled.label<{
    isFileSelected: boolean;
}>`
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  color: ${({ isFileSelected }) => (isFileSelected ? '#142230' : '#9E9E9E')};
  background: #ffffff;
  width: 443px;
  height: 36px;
  line-height: 34px;
  padding-left: 10px;
  font-family: 'TitilliumWeb-400';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  input[type='file'] {
    display: none;
  }
`;