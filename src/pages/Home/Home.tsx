import { UnderConstruction } from "@components/UnderConstruction/UnderConstruction";
import { PageWrapper } from "@components/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      Hey, there! Thanks for stopping by. I am currently programming this page, so you will find yourself in a bit of a mess. I hope you don't mind. Keep on coming back, I promisse next time there will be more fun things to do around here.
      <UnderConstruction/>
      <p>GIF by <a href="https://pixabay.com/users/avedeto-12355281/?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=12824">Avedeto</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=12824">Pixabay</a>
</p>
    </PageWrapper>
  );
}