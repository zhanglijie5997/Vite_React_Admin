import context from '@page/index/context/context';

import React, { forwardRef, useContext, useEffect, 
                useImperativeHandle, useRef } from 'react';

export interface InputRef {
    focus: () => void,
    text: string
}

interface InputComProps {
    a: number,
    _setText: (e: string) => void
}

const inputCom = (props: InputComProps, ref: React.Ref<any> | undefined) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const _ctx = useContext(context);

    useEffect(() => {
        console.log(_ctx);
    }, [_ctx])

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        text: inputRef.current?.value
    }));

    return (
        <div>
            <input type="text" ref={inputRef} onChange={e => props._setText(e.currentTarget.value)}/>
        </div>
    );
}

export default forwardRef<InputRef, InputComProps>(inputCom);
