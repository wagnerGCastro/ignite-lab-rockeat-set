import React from 'react';
import Lesson, { LessonProps } from '@/components/Lesson';

export default function Sidebar({ data }) {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <section className="flex flex-col gap-8">
        {data?.lessons.map((lesson: LessonProps) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              availableAt={new Date(lesson.availableAt)}
              lessonType={lesson.lessonType}
              slug={lesson.slug}
            />
          );
        })}
      </section>
    </aside>
  );
}
