import { Container } from "../ui/Container";
import pureCleanLogo from "../../assets/brand/pureclean-logo.png";

export function LogoDivider() {
  return (
    <section className="bg-ink-50 py-8 sm:py-12">
      <Container className="flex items-center justify-center">
        <img src={pureCleanLogo} alt="PureClean" className="h-20 w-auto sm:h-28 lg:h-32" />
      </Container>
    </section>
  );
}
