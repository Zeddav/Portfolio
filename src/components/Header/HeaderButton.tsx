import styled from "styled-components";

interface HeaderButtonProps {
  txt: string;
  href?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ txt, href = "#" }) => {
  return (
    <StyledWrapper>
      <a href={href} className="menu__link">
        {txt}
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  .menu__link {
    color: #fff;
    line-height: 2;
    position: relative;
  }

  .menu__link::before {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transition: width 0.4s, left 0.4s;
  }

  .menu__link:hover::before {
    width: 100%;
    left: 0;
  }
`;

export default HeaderButton;