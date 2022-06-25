import React from 'react';
import Link from 'next/link';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export interface LessonProps {
  id?: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {
  const isLessonAvaible = isPast(props.availableAt);
  const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  return (
    <Link href={{ pathname: `/event/lesson/${encodeURIComponent(props.slug)}` }} passHref>
      <a href="replace">
        <span className="text-gray-300">{availableAtDateFormatted}</span>
        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
            {isLessonAvaible ? (
              <span className="flex items-center text-sm text-blue-500 font-medium gap-2">
                <CheckCircle size="20" />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="flex items-center text-sm text-orange-500 font-medium gap-2">
                <Lock size="20" />
                Em breve
              </span>
            )}

            <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
              {props.lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>
          <strong className="text-gray-200 mt-5 block">{props.title}</strong>
        </div>
      </a>
    </Link>
  );
}
