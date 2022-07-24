import {
    HeaderItemContainer,
    Logo,
    SearchContainer,
    UserContainer,
    LogoImg,
    LogoImg2,
    LogoTitle,
    SearchBar,
    UserLogin

} from './Header.style';
import { MdList,MdAccountCircle } from "react-icons/md";

function Header() {
    return (
        <HeaderItemContainer>
            <Logo>
                <LogoImg src='../별보러가자.ico' alt='logo' />
                <LogoImg2 src='../별보러가자2.ico' alt='logo' />
                <LogoTitle src="../logotitle.ico" alt="LogoTitle" />
            </Logo>
            <SearchContainer>
                <SearchBar>
                    <div>어디든지</div>
                    <div>주말에</div>
                    <div>게스트추가</div>
                    <img src="../searchBtn.svg" alt="search" />
                </SearchBar>
            </SearchContainer>
            <UserContainer>
                <UserLogin>
                    <MdList size="30"color="gray"/>
                    <MdAccountCircle size="40"color="gray"/>
                </UserLogin>
            </UserContainer>
        </HeaderItemContainer>
    )
};

export default Header;