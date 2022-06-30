import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { LessonProps } from '@/components/Lesson';
import Video from '@/components/Video';

export interface GetLessonQueryResponse {
  lessons: Array<LessonProps>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        title
        slug
        availableAt
        lessonType
      }
    }
  `;

  const { data } = await client.query<{ lessons: GetLessonQueryResponse }>({
    query: GET_LESSONS_QUERY,
  });

  return {
    props: { data },
  };
};

export default function Event({ data }) {
  return (
    <>
      <Head>
        <title>Event Plataform - Ignite Lab</title>
        <meta name="description" content="Boas-vindas ao projeto do Ignite Lab - React JS" />
      </Head>

      <Header />
      <section className="flex flex-col min-h-screen">
        <main className="flex flex-1">
          <Video />
          <Sidebar data={data} />
        </main>
      </section>
    </>
  );
}
