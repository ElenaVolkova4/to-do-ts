import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;

  position: relative;
  padding: 15px;
  z-index: 5;

  background-color: #4682b4;
  box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const FormBlock = styled.form``;
export const FormLabel = styled.label``;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-indent: 18px;
  padding: 0 60px 0 0;
  background: #ffffff33;
  border-radius: 5px 25px 25px 5px;
  border: 0;
  box-shadow: none;
  outline: none;
`;

export const FormButton = styled.button<{ icon: string }>`
  width: 50px;
  height: 50px;
  background: transparent url(${(props) => props.icon}) no-repeat center/cover;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;

  border-radius: 25px;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;
