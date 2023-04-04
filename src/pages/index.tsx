import { GetServerSideProps, GetStaticProps } from "next";

interface dataProps {
  name: string;
}

interface IndexPageProps {
  repositories: string[];
  date: string;
}

export default function IndexPage({ repositories, date }: IndexPageProps) {
  return (
    <>
      <h1>{date}</h1>

      <ul
        style={{
          fontFamily: "sans-serif",
          listStyle: "none",
          fontWeight: "bold",
        }}
      >
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     "https://api.github.com/users/pascoalkahamba/repos"
//   );
//   const data: dataProps[] = await response.json();
//   const repositoryName = data.map((item) => item.name);

//   return {
//     props: {
//       repositories: repositoryName,
//       date: new Date().toISOString(),
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/pascoalkahamba/repos"
  );
  const data: dataProps[] = await response.json();
  const repositoryName = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryName,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4,
  };
};
