import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageTitle } from "../../components/PageTitle";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { mainColors } from "../style/GlobalStyled";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components/ErrorMessage";

const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 100px auto;
  text-align: center;
`;
const Form = styled.form``;
const User = styled.ul`
  margin-bottom: 30px;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 100px;
    height: 1px;
    background-color: white;
    margin: 0 10px;
  }
`;
const InputWrap = styled.div`
  background-color: #464646;
  width: 270px;
  height: 50px;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
`;

const Icon = styled.div`
  margin-right: 10px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  text-align: left;
`;
const LoginButton = styled.button`
  all: unset;
  width: 270px;
  height: 50px;
  background-color: ${mainColors.pointColor};
  border-radius: 10px;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "defult")};
`;
const SignupButton = styled.button`
  all: unset;
  width: 270px;
  height: 50px;
  border: 1px solid ${mainColors.pointColor};
  border-radius: 10px;
  color: ${mainColors.pointColor};
  cursor: pointer;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  li {
    width: 75px;
    height: 1px;
    background-color: white;
    margin: 0 10px;
  }
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { error, isValid },
  } = useForm({
    mode: "onChange",
  });

  const loginHandler = () => {};

  return (
    <>
      <Wrap>
        <PageTitle titleName="LOGIN" />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <User>
            <li></li>
            <FontAwesomeIcon icon={faCircleUser} />
            <li></li>
          </User>
          <InputWrap>
            <Icon>
              <FontAwesomeIcon icon={faUser} />
            </Icon>
            <Input
              {...register("username", {
                required: "아이디는 필수입니다.",
                minLength: {
                  value: 2,
                  message: "아이디는 2자리 이상 작성해주세요.",
                },
              })}
              type="text"
              placeholder="ID"
            />
            <ErrorMessage text={error?.username?.message} />
          </InputWrap>
          <InputWrap>
            <Icon>
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            <Input
              {...register("password", {
                required: "패스워드는 필수입니다.",
                minLength: {
                  value: 8,
                  message: "패스워드는 8자리 이상 작성해 주세요",
                },
              })}
              type="password"
              placeholder="PASSWORD"
            />
            <ErrorMessage text={error?.password?.message} />
          </InputWrap>
          <LoginButton $isActive={isValid}>LOGIN</LoginButton>
          <Text>
            <li></li>
            <p>계정이 없으신가요?</p>
            <li></li>
          </Text>
          <SignupButton>SIGN UP</SignupButton>
        </Form>
      </Wrap>
    </>
  );
};
