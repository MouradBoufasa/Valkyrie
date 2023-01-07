import styled from 'styled-components';

const StyledFooter = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1180px;
    bottom: 1%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    svg {
        font-size: 1.5rem;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <h6>
                Copyright<sup className="text-base font-bold">&copy;</sup> All
                Reserved Rights{' '}
                <span className="font-semibold">
                    <a href="https://github.com/MouradBoufasa">
                        Boufasa Mourad {Year}
                    </a>
                </span>
            </h6>
        </StyledFooter>
    );
};

export default Footer;
