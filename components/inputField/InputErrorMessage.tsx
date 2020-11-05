import { type } from 'os'
import React from 'react'

type Props = {
    message: string| any,
    field: string| any,
    touched: boolean| any
}

const InputError = ({ message, field, touched }: Props) => {
    return (
        <>
            <style jsx>{`
                #errorMsg{
                    color: red;
                    font-size: smaller;
                }
            `}</style>
            <p id="errorMsg">
                {field && touched ? message : null}
            </p>
        </>
    )
}

export default InputError
