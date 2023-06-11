import { S } from "./styled";
// @ts-ignore
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
  return (
    <S.Entry>
      <S.Logo><Logo /></S.Logo>
      <S.RightSideMover />
      <S.Organization>
        <S.OrganizationAvatar>
          <img
            src={"https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"}
          />
        </S.OrganizationAvatar>
        <S.OrganizationName>Girls Crew</S.OrganizationName>
      </S.Organization>
      <S.UserAvatar>
        <img
          src={
            "https://thumbs.dreamstime.com/b/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg"
          }
        />
      </S.UserAvatar>
    </S.Entry>
  );
};

Header.S = S;
