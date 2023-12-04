// import React, { FC } from "react";
// import { allDocs } from "contentlayer/generated";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// async function getDocsFromParams(slug: string) {
//   const doc = allDocs.find((doc) => doc.slugAsParams === slug);

//   if (!doc) notFound();

//   return doc;
// }

// const Page = async ({ params }: PageProps) => {
//   console.log("slog===", params.slug);
//   const doc = await getDocsFromParams(params.slug);
//   console.log(JSON.stringify(doc));
//   return <div>{doc.title}</div>;
// };

// export default Page;
