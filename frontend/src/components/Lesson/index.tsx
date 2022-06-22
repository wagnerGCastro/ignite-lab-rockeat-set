import React from 'react';
import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date | string;
  type: 'live' | 'class';
  isLessonAvaible: boolean;
}

export default function Lesson(props: LessonProps) {
  return (
    <a href="#link" data-slug={props.slug}>
      <span className="text-gray-300">{props.availableAt?.toString()}</span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {props.isLessonAvaible ? (
            <span className="flex items-center text-sm text-blue-500 font-medium gap-2">
              <CheckCircle size="20" />
              Conteudo Liberado
            </span>
          ) : (
            <span className="flex items-center text-sm text-orange-500 font-medium gap-2">
              <Lock size="20" />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
