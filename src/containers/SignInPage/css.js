import styled from 'styled-components';

export const SignInFormWrapper = styled.div`
    .login-form {
        width         : 300px;
        margin        : 0;
        padding       : 3em 2em 2em 2em;
        color         : rgba(0, 0, 0, 0.870588);
        background    : #fafafa;
        border        : 1px solid #FAFAFA;
        border-radius : 3px;
    }

    .login-form-button {
        width: 100%;
    }

    .error {
        color : red;
    }
`;

export const SignInPageWrapper = styled.div`
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
`;
