import { Container } from "../ui/Container";
import pureCleanLogo from "../../assets/brand/pureclean-logo.png";

export function LogoDivider() {
  return (
    <section className="bg-ink-50 py-6 sm:py-8">
      <Container className="flex items-center justify-center">
        <img src={pureCleanLogo} alt="PureClean" className="h-12 w-auto sm:h-14" />
      </Container>
    </section>
  );
}
