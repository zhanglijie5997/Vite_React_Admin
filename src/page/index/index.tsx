import React, { LegacyRef, MutableRefObject, RefObject, useCallback, useImperativeHandle, useRef, useState } from 'react';

import InputCom, { InputRef } from "@components/inputCom";

import { useTranslation, Trans, Translation  } from "react-i18next";
import { I18nName } from '@i18n/i18n';

const Index = () => {
    
    const [getText, setText] = useState('');

    const refs = useRef<InputRef>(null);

    let { t, i18n} = useTranslation()

    const submit = useCallback( () => {
        console.log(getText);
        refs.current?.focus();
    },[getText]);

    const p = {
        a: 2
    }

    return (
        <div>
            { t(I18nName.name) }
            <button onClick={() => i18n.changeLanguage(i18n.language=='en'?'zh':'en')}>
                change {i18n.language=='en'?' zh':'en'}
            </button>
            <InputCom {...p} ref={refs}></InputCom>
            <button onClick={submit}>submit</button>
        </div>
    );
}

export default Index;
