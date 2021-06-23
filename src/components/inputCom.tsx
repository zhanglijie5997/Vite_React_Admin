import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export interface InputRef {
    focus: () => void
}

interface InputComProps {
    a: number
}

const inputCom = (props: InputComProps, ref: React.Ref<any> | undefined) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const _num = useRef(2);

    useEffect(() => {
        _num.current = 3;
    }, [_num])

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus()
    }));

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    );
}

export default forwardRef<InputRef, InputComProps>(inputCom);
