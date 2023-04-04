import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogPost(date: string) {
  return <h1>{date}</h1>;
}
export const getStaticPaths: GetStaticPaths = async () => {
  // posts mais lidos
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 10,
  };
};
