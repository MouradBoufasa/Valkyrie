import { lighten, cssVar } from 'polished'
import styled from "styled-components"

export const SidebarButton = styled.button`
    cursor: pointer;

    width: 100%;
    height: 46px;

    background-color: transparent;
    color: var(--lavender-blush);

    display: flex;
    align-items: center;
    justify-content: start;
    
    font-size: 1.05rem;

    padding: var(--base-padding);
    border-radius: var(--border-radius);

    & > *{margin-right: 10px;}
    &:hover{background-color: ${lighten(0.05, '#0e2339')};}
    
    transition: background-color 0.2s ease;
`

export const Conversation = styled(SidebarButton)`
    position: relative;
    padding: calc(var(--base-padding) / 4);
    font-size: 1rem;
    color: #b9bbbe;
`
export const Channel = styled(SidebarButton)`
    height: 35px;
    font-size: 0.9rem;
    padding: 0;
    padding-left: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
    &.active {
        background-color: ${lighten(0.06, '#0e2339')}
    }
`
