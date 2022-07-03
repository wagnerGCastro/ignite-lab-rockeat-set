import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
// import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo';

interface Lesson {
  id: string;
  title: string;
  teacher: {
    name: string;
  };
}

export default function Home({ data }) {
  return (
    <>
      <h1 className="text-5xl font-bold text-violet-500 underline">Hello world!</h1>

      {data?.lessons.map((lesson: Lesson) => {
        return (
          <ul key={lesson.id}>
            <li className="py-4 flex">
              <div className="ml-30">
                <h3 className="text-2xl text-zinc-100">{lesson.title}</h3>
                <p className="text-sm font-medium text-zinc-100">{lesson.teacher.name}</p>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
        teacher {
          name
        }
      }
    }
  `;

  const { data } = await client.query<{ lessons: Lesson[] }>({ query: GET_LESSONS_QUERY });

  return {
    props: { data },
  };
};
