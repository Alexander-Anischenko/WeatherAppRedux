import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import background from "../../../assets/background.png"

export const LayoutWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 10px;
  padding-left: 85px;
  padding-right: 107px;
  gap: 10px;
  width: 100%;
  height: 80px;
  color: #ffffff;
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(17.799999237060547px);
  border-bottom: 1px solid #d2d2d2;
`

export const HeaderLogoContainer = styled.div`
  width: 155px;
  height: 29px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 83px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 1920px;
  height: 1080px;
  top: -1755px;
  left: -4544px;
  opacity: 0px;
`

export const MainPictureContainer = styled.img`
  width: 100%;
  height: 100%;
`

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background-color: #2f5a6e;
  color: white;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`
