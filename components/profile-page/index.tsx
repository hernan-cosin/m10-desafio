import { useMe } from "lib/hooks";
import { Subtitle } from "ui/typography";
import { ProfileContainer, ProfileContent } from "./styled";
import { ProfileForm } from "./styled";

export function ProfilePage() {
  const userData = useMe()
  
  return (
    <ProfileContainer>
      <ProfileContent>
          <Subtitle className="profile-title">Perfil</Subtitle>
          <ProfileForm userData={userData}/>
      </ProfileContent> 
    </ProfileContainer>
  );
}
  