import { useMe } from "lib/hooks";
import { useRouter } from "next/router";
import { Button } from "ui/buttons";
import { Subtitle } from "ui/typography";
import { ProfileContainer, ProfileContent, ProfileForm } from "./styled";
import { getSavedToken } from "lib/api";
import { redirectTo } from "lib/atoms";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";

export function ProfilePage() {
  const router = useRouter();
  const setRedirectTo = useSetRecoilState(redirectTo)
  const userData = useMe();
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    const inSession = getSavedToken()
    
    if (inSession) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  if (!loggedIn) {
    setRedirectTo({asPath: router.asPath})
    router.push("/signin")
  }

  function handleOrdersButton() {
    router.push("/orders");
  }

  return (
    <ProfileContainer>
      <ProfileContent>
        <Button
          className="profile-orders-button"
          onClick={handleOrdersButton}
          backgroundColor="yellow"
        >
          Ver mis ordenes
        </Button>
        <div>
          <Subtitle className="profile-title">Perfil</Subtitle>
          <ProfileForm userData={userData} />
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
}
