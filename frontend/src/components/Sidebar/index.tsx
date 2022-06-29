import React from 'react';
import Lesson from '../Lesson';

const Siderbar: React.FC = () => {
  return (
    <aside className="w-[348] bg-gray-700 p-6 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <section className="flex flex-col gap-8">
        <Lesson
          title="Abertura do envento Ignite Labs"
          availableAt="Domingo • 20 de junho • 19h00"
          type="live"
          slug="abertura-do-nvento-ignite-labs"
          isLessonAvaible
        />
        <Lesson
          title="Abertura do envento Ignite Labs"
          availableAt="Domingo • 20 de junho • 19h00"
          type="class"
          slug="abertura-do-nvento-ignite-labs"
          isLessonAvaible={false}
        />
        <Lesson
          title="Abertura do envento Ignite Labs"
          availableAt="Domingo • 20 de junho • 19h00"
          type="live"
          slug="abertura-do-nvento-ignite-labs"
          isLessonAvaible
        />
      </section>
    </aside>
  );
};

export default Siderbar;
