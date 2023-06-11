import { S } from "./styled";

// @ts-ignore
import { ReactComponent as SpotifyIcon } from "../../assets/spotify.svg";
// @ts-ignore
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
// @ts-ignore
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";

export const Campaign = () => {
  return (
    <S.Entry>
      <S.Title>Early Adopter Reward Campaign</S.Title>
      <S.DescriptionWrapper>
        <S.Description>
          This ability of qubits to exist in multiple states simultaneously is called superposition.
        </S.Description>
        <S.Date>22 Aug 2023 - 28 Aug 2023</S.Date>
      </S.DescriptionWrapper>
      <S.Content>
        <S.List>
          <S.ListHeader>Actions Required</S.ListHeader>
          <S.ListItem>
            <S.ListItemIcon>
              <SpotifyIcon />
            </S.ListItemIcon>
            <S.ListItemText>Listen to Remember</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemIcon>
              <InstagramIcon />
            </S.ListItemIcon>
            <S.ListItemText>Add #SonnyFedora hashtag</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemIcon>
              <TwitterIcon />
            </S.ListItemIcon>
            <S.ListItemText>Subscribe to SonnyFedora Twitter</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemIcon>
              <InstagramIcon />
            </S.ListItemIcon>
            <S.ListItemText>Add #SonnyFedora hashtag</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemIcon>
              <SpotifyIcon />
            </S.ListItemIcon>
            <S.ListItemText>Listen to Remember</S.ListItemText>
          </S.ListItem>
        </S.List>
        <S.List>
          <S.ListHeader>Rewards</S.ListHeader>
          <S.ListItem>
            <S.ListItemText>Raffle for VIP Ticket</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemText>Raffle for Platinum Ticket</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemText>Raffle for VIP Ticket</S.ListItemText>
          </S.ListItem>
        </S.List>
        <S.List>
          <S.ListHeader style={{ visibility: "hidden"}}>___</S.ListHeader>
          <S.ListItem>
            <S.ListItemText>1700/2500</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemText>1700/2500</S.ListItemText>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemText>1700/2500</S.ListItemText>
          </S.ListItem>
        </S.List>
      </S.Content>
    </S.Entry>
  );
};
