import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Video from '@/components/Video';

export default function Event() {
  return (
    <>
      <Head>
        <title>Event Paltaform - Ignite Lab</title>
        <meta name="description" content="Boas-vindas ao projeto do Ignite Lab - React JS" />
      </Head>

      <Header />
      <section className="flex flex-col min-h-screen">
        <main className="flex flex-1">
          <Video />
          <Sidebar />
        </main>
      </section>
    </>
  );
}
