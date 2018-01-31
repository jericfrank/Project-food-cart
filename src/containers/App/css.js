import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutWrapper = styled( Layout )`
    min-height : 100vh;
`;

export const ContentWrapper = styled( Layout.Content )`
    padding : 0 50px;
`;

export const Content = styled.div`
    padding    : 24px;
    min-height : 280px;
    margin     : 16px 0;
`;

export const FooterWrapper = styled( Layout.Footer )`
    text-align : center;
    background : #FAFAFA !important;;
`;
