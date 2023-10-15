import Head from "next/head";

interface Props {
  tag: string;
}

export default function Title({ tag }: Props) {
  return (
    <Head>
      <title>{tag} | Ditto Times</title>
    </Head>
  );
}
