import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import { client } from '@/lib/apollo';

interface Lesson {
  id: string;
  title: string;
  teacher: {
    name: string;
  };
}

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

const Home: React.FC = () => {
  /**
   * Client Render
   */

  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }, []);

  const { data, loading, error } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }
  // console.log(data);

  return (
    <>
      <h1 className="text-5xl font-bold text-violet-500 underline">Hello world!</h1>

      {data?.lessons.map(lesson => {
        return (
          <ul key={lesson.id}>
            <li className="py-4 flex">
              <div className="ml-30">
                <h3 className="text-2xl">{lesson.title}</h3>
                <p className="text-sm font-medium text-zinc-100">{lesson.teacher.name}</p>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Home;
