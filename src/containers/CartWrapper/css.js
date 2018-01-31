import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
    padding          : 24px;
    min-height       : 380px;
    background-color : #fff;
`;

export const Total = styled.div`
    font-size : 40px;

    span {
        float : right;
    }
`;

export const CheckoutWrapper = styled.div`
    padding : 15px 0 0 0
`;

export const CheckoutButton = styled(Button)`
    width : 49%;
    float : ${props => props.position};
`;
