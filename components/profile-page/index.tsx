import { useMe } from "lib/hooks";
import { Subtitle } from "ui/typography";
import { ProfileContainer, ProfileContent } from "./styled";
  
export function ProfilePage() {
  const userData = useMe()
  console.log(userData);
  
  return (
    <ProfileContainer>
      <ProfileContent>
          <Subtitle>Perfil</Subtitle>

      </ProfileContent>
    </ProfileContainer>
  );
}
  