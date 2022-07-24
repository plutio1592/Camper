import React from "react";
import {
    FooterItemContainer,
    FooterTitle,
    GitHubContainer,
    TeamMemberContainer,
    TeamMember,
    LookAround,
    PickList,
    Login

} from './Footer.style';
import { Link } from "react-router-dom";
import { MdAccountCircle,MdFavoriteBorder,MdOutlineSearch } from "react-icons/md";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        };
    return(
        <FooterItemContainer>
            <FooterTitle>
                <GitHubContainer>
                    <Link to="/" style={{ textDecoration: "none", borderBottom: "none" }}>
                        <img
                            src="./githubLogo.svg"
                            alt="GitImg"
                            onClick={() => {
                            scrollToTop();
                            }}
                        />
                    </Link>
                        <a
                        href="https://github.com/plutio1592/Camper"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Camper
                        </a>
                        <a 
                        href="https://github.com/plutio1592/Camper/wiki" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        정배홍이
                        </a>
                </GitHubContainer>
            </FooterTitle>
        <TeamMemberContainer>
            <TeamMember>
            <a
            href="https://github.com/ProjectBYH"
            target="_blank"
            rel="noopener noreferrer"
            >
            배윤호
            </a>
            </TeamMember>
            <TeamMember>
            <a
            href="https://github.com/code920309"
            target="_blank"
            rel="noopener noreferrer"
            >
            이동규
            </a>
            </TeamMember>
            <TeamMember>
            <a
            href="https://github.com/bonnibel200"
            target="_blank"
            rel="noopener noreferrer"
            >
            이창석
            </a>
            </TeamMember>
            <TeamMember>
            <a
            href="https://github.com/sowookim"
            target="_blank"
            rel="noopener noreferrer"
            >
            정다희
            </a>
            </TeamMember>
            <TeamMember>
            <a
            href="https://github.com/plutio1592"
            target="_blank"
            rel="noopener noreferrer"
            >
            정무공
            </a>
            </TeamMember>
            <TeamMember>
            <a
            href="https://github.com/hongsuwon"
            target="_blank"
            rel="noopener noreferrer"
            >
            홍은지
            </a>
            </TeamMember>
        </TeamMemberContainer> 
        <LookAround>
            <MdOutlineSearch size="30" color="red" />
            <div>둘러보기</div>
        </LookAround>
        <PickList>
            <MdFavoriteBorder size="30" color="gray"/>
            <div>위시리스트</div>
        </PickList>
        <Login>
            <MdAccountCircle size="30" color="gray"/>
            <div>로그인</div>
        </Login>
      </FooterItemContainer>
    )
};

export default Footer;