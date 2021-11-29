import React from 'react'
import {ErrorContainer} from './HomeElements';
function FError() {
    return (
            <ErrorContainer>
                <img src={require('../Assets/error.png').default} width={'600px'} height={'400px'} alt="Error404"/>
            </ErrorContainer>
    )
}

export default FError
