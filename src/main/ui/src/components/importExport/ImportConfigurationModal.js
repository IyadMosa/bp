import React, {useRef, useState} from 'react';
import {Modal} from 'design-system/components/Modal/Modal';
import {useTheme} from 'styled-components';

export const ImportConfigurationModal = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputLabel = useRef(null);
    const inputRef = useRef(null);

    const isSubmitDisabled = () => {
        return selectedFile === null;
    };

    return (
        <Modal>
            {/*<ModalOpenButton>*/}
            {/*    <TextButton debugId="import-configuration-button" size="small" color={'gray'}>*/}
            {/*        <Upload />*/}
            {/*        Import Configuration*/}
            {/*    </TextButton>*/}
            {/*</ModalOpenButton>*/}
            {/*<ModalContents*/}
            {/*    title="Import Configuration"*/}
            {/*    borderBottom="none"*/}
            {/*    headerPadding="14px 16px"*/}
            {/*    width={579}*/}
            {/*    top="200px"*/}
            {/*    maskBackgroundColor="rgba(33, 33, 33, 0.5)"*/}
            {/*    headerBackground={Styled.headerFooterBGColor[mode]}*/}
            {/*    footerBackground={Styled.headerFooterBGColor[mode]}*/}
            {/*    textColor={Styled.titleColor[mode]}*/}
            {/*    contentBackground={Styled.modalBgColor[mode]}*/}
            {/*    boxShadow={Styled.modalBoxShadow[mode]}*/}
            {/*    customDefaultFooterSubmitText={'Import'}*/}
            {/*    disableSubmit={isSubmitDisabled()}*/}
            {/*    onSubmit={() => importConfiguration(selectedFile, setSelectedFile)}*/}
            {/*    onCancel={() => setSelectedFile(null)}*/}
            {/*>*/}
            {/*    <Styled.ModalBody>*/}
            {/*        <Styled.InputTitle>File Name (.zip)</Styled.InputTitle>*/}
            {/*        <Styled.FileInputWrap>*/}
            {/*            <Styled.FileUpload isFileSelected={selectedFile !== null} ref={fileInputLabel}>*/}
            {/*                <input*/}
            {/*                    accept=".zip"*/}
            {/*                    type="file"*/}
            {/*                    ref={inputRef}*/}
            {/*                    data-debug-id="file-input"*/}
            {/*                    onChange={e => setSelectedFile(e.target.files[0])}*/}
            {/*                />*/}
            {/*                {selectedFile?.name || 'No File Selected'}*/}
            {/*            </Styled.FileUpload>*/}

            {/*            <OutlineButton*/}
            {/*                onClick={() => fileInputLabel?.current?.click()}*/}
            {/*                debugId="browse-file-button"*/}
            {/*            >*/}
            {/*                Browse*/}
            {/*            </OutlineButton>*/}
            {/*        </Styled.FileInputWrap>*/}
            {/*    </Styled.ModalBody>*/}
            {/*</ModalContents>*/}
        </Modal>
    );
};