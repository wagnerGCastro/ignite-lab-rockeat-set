import React, { useState, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { gql, useMutation } from '@apollo/client';

import { LogoSVG } from '@/components/LogoSVG';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading, error }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubcribe = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        await createSubscriber({
          variables: {
            name,
            email,
          },
        });

        router.push('/event');
        // eslint-disable-next-line no-empty
      } catch (err) {}
    },
    [createSubscriber, email, name, router],
  );

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      {error && <p className="mt-4 text-red-200 leading-relaxed">Error: {error.message} </p>}

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <LogoSVG />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Contrua uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubcribe} className="flex flex-col gap-2 full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu e-mail completo"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase p-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              GARANTIR MINHA VAGA
            </button>
          </form>
        </div>
      </div>

      <Image src="/img/code-mockup.png" alt="mockup" width="1216" height="650" className="mt-10" />
    </div>
  );
}
