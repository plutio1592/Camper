import styled from "styled-components";
import React from "react";

export const HeaderItemContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {


    }
    @media screen and (max-width: 576px) {

    }
    @media screen and (max-width: 0px) {

    }

`;

export const Logo = styled.button`
    border : 0px solid black;
    background: white;
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (max-width: 576px) {
        display: none;
    }
    @media screen and (max-width: 0px) {
        display: none;
    }
`;

export const SearchContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 576px) {
        width: 100%;
    }
    @media screen and (max-width: 0px) {
        width: 100%;
    }
`;

export const UserContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: end;
    align-items: center;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (max-width: 576px) {
        display: none;
    }
    @media screen and (max-width: 0px) {
        display: none;
    }
`;

export const LogoImg = styled.img`
  display: block;
  width: 4.5rem;
  display: none;
    @media screen and (max-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 992px) {
        display: block;
    }
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 576px) {

    }
    @media screen and (max-width: 0px) {

    }
`;

export const LogoImg2 = styled.img`
  display: block;
  width: 4.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const LogoTitle = styled.img`
  display: block;
  width: 4.5rem;
  margin-left: 0.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const SearchBar = styled.button`
    width: 380px;
    display: flex;
    background: white;
    justify-content: space-around;
    align-items: center;
    border:0px solid gray;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px gray;
        transition: 0.2s;
    }
`;

export const UserLogin = styled.button`
  display: flex;
  width: 6rem;
  background: white;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 0px solid;
  padding:1px;
  border-radius: 15px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  &:hover{
    box-shadow: 2px 2px gray;
    transition: 0.2s;
}
`;