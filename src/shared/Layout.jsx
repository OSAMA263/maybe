import { Helmet } from "react-helmet-async";
import tw from "tailwind-styled-components";

export default function Layout(props) {
  const { description, title, children, className } = props;
  return (
    <Container className={className ?? ""}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {children}
    </Container>
  );
}

// "https://osama263.github.io/constructs/#/about-------- href
const Container = tw.div`
sm:pt-44
pt-40
pb-28
lg:space-y-40
sm:space-y-20
space-y-10
`;
