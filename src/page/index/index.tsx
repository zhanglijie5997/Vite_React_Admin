import React, {  useCallback,  useRef, useState } from 'react';

import InputCom, { InputRef } from "@components/inputCom";

import { useTranslation, Trans, Translation  } from "react-i18next";

import { I18nName } from '@i18n/i18n';

import Ctx, { light } from "./context/context";

const Index = () => {
    
    const [getText, setText] = useState('');

    const refs = useRef<InputRef>(null);

    let { t, i18n} = useTranslation()

    const submit = useCallback( () => {
        console.log(getText);
        refs.current?.focus();
        setText(refs.current?.text || '')
    },[getText]);

    const p = {
        a: 2,
        _setText: (e: string) => setText(e)
    }

    return (
        <div>
            { t(I18nName.name) }
            <button onClick={() => i18n.changeLanguage(i18n.language=='en'?'zh':'en')}>
                change {i18n.language == 'en' ? 'zh' : 'en' }
            </button>
            <Ctx.Provider value={light}>
                <InputCom {...p} ref={refs} />
            </Ctx.Provider>
            <div className="circle">
                <span>测试文字</span> 
            </div>
            <button onClick={submit}>submit</button>
        </div>
    );
}

export default Index;
