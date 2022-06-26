import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { client } from '@/lib/apollo';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { LessonProps } from '@/components/Lesson';
import Video, { VideoProps } from '@/components/Video';

export const VideoWrapper = styled.div`
  flex: 1;
  max-width: calc(100% - 348px);
`;

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
    props: { lessons: data },
  };
};

export default function Event({ lessons }) {
  const router = useRouter();
  const { slug } = router.query;

  const GET_LESSON_QUERY = gql`
    query GetLessonBySlug($slug: String) {
      lesson(where: { slug: $slug }) {
        id
        title
        slug
        videoId
        description
        teacher {
          bio
          avatarURL
          name
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<VideoProps>(GET_LESSON_QUERY, {
    variables: { slug },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <Head>
        <title>Event Plataform - Ignite Lab</title>
        <meta name="description" content="Boas-vindas ao projeto do Ignite Lab - React JS" />
      </Head>

      <Header />
      <section className="flex flex-col min-h-screen">
        <main className="flex flex-1">
          {slug && data?.lesson ? <Video lesson={data.lesson} /> : <VideoWrapper> </VideoWrapper>}
          <Sidebar data={lessons} />
        </main>
      </section>
    </>
  );
}
