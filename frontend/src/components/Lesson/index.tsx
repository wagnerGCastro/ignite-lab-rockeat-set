import React from 'react';
import Link from 'next/link';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format, closestIndexTo } from 'date-fns';
import { useRouter } from 'next/router';
import cls from 'classnames';
import ptBR from 'date-fns/locale/pt-BR';

export interface LessonProps {
  id?: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {
  const router = useRouter();
  const { slug } = router.query;

  const isLessonAvaible = isPast(props.availableAt);
  const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  const isAciveLesson = slug === props.slug;

  return (
    <Link href={{ pathname: `/event/lesson/${encodeURIComponent(props.slug)}` }} passHref>
      <a href="replace">
        <span className="text-gray-300">{availableAtDateFormatted}</span>

        <div
          className={cls('rounded border border-gray-500 p-4 mt-2', {
            'bg-green-500': isAciveLesson,
          })}
        >
          <header className="flex items-center justify-between">
            {isLessonAvaible ? (
              <span
                className={cls('flex items-center text-sm font-medium gap-2', {
                  'text-white': isAciveLesson,
                  'text-blue-500': !isAciveLesson,
                })}
              >
                <CheckCircle size="20" />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="flex items-center text-sm text-orange-500 font-medium gap-2">
                <Lock size="20" />
                Em breve
              </span>
            )}

            <span
              className={cls('text-xs rounded py-[2px] px-2 text-white borderfont-bold', {
                'border-white': isAciveLesson,
                'border-green-300': !isAciveLesson,
              })}
            >
              {props.lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>
          <strong
            className={cls(' mt-5 block', {
              'text-white': isAciveLesson,
              'text-gray-200': !isAciveLesson,
            })}
          >
            {props.title}
          </strong>
        </div>
      </a>
    </Link>
  );
}
