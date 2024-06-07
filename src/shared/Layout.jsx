import tw from "tailwind-styled-components";

export default function Layout({ children, className }) {
  return <Container className={className ?? ""}>{children}</Container>;
}

const Container = tw.div`
pt-44
pb-28
lg:space-y-40
space-y-20
`;
