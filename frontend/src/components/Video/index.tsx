import React from 'react';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import Image from 'next/image';

import { VimePlayer, VimeYoutube, VimeDefaultUi } from '@vime/react';

import '@vime/core/themes/default.css';

export interface VideoProps {
  lesson: {
    id: string;
    title: string;
    slug: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

export default function Video({ lesson }: VideoProps) {
  return (
    <div className="flex-1 ">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1110px] max-h-[60vh] aspect-video">
          <VimePlayer>
            <VimeYoutube videoId={lesson.videoId} />
            <VimeDefaultUi />
          </VimePlayer>
        </div>
      </div>

      <div className="p-8 max-w-[1110px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{lesson.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <Image
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={lesson.teacher.avatarURL}
                alt={lesson.teacher.name}
                width={64}
                height={64}
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">{lesson.teacher.name}</strong>
                <strong className="text-gray-200 text-sm block">{lesson.teacher.bio}</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#link-a"
              className="p-4 text-sm bg-green-500 flex items-cnter rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size="24" />
              Comunidade Discord
            </a>

            <a
              href="#link-a"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-cnter rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-500 transition-colors"
            >
              <Lightning size="24" />
              Comunidade Discord
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="#link" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size="40" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelera o seu desenvolviemno
              </p>
            </div>
            <div className="h-full p-6 flex items-center justify-center hover:bg-gray-600">
              <CaretRight size="24" />
            </div>
          </a>

          <a href="#link" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size="40" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center justify-center hover:bg-gray-600">
              <CaretRight size="24" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
