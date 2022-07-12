import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image';
import { useMemo, useState } from 'react';
import { mockify } from '../utils';

const Home: NextPage = () => {

  const [ text, changeText ] = useState('')
  const mockified = useMemo(() => mockify(text), [text])

  const copyToClipboard = (string: string) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }

    try {
      navigator.clipboard.writeText(string);

      const c2cButton = document.getElementById('c2c-button')
      c2cButton!.innerText = 'Copied to clipboard';
      setTimeout(() => {
        c2cButton!.innerText = 'Click to copy';
      }, 1200);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  const title = 'Mockify'
  const description = 'Change any text to this mocky upper and lower case thingy'

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-[800px] m-auto text-center">
        <div className="py-10"></div>

        <h1 className="text-6xl mb-6">{title}</h1>

        <p className="mb-6">{description}</p>

        <textarea
          placeholder="Insert text here"
          value={text}
          onChange={(ev) => changeText(ev.target.value)}
          className="mb-6"
        />

        {mockified && (
          <>
            <p className="mb-6">{mockified}</p>

            <button
              type="button"
              id="c2c-button"
              onClick={() => copyToClipboard(mockified)}
              className="rounded border border-white w-fit p-1 m-auto mb-6"
            >Click to copy</button>

            <Image
              src="https://i.giphy.com/media/QUXYcgCwvCm4cKcrI3/giphy.webp"
              alt="mocky-gif"
              width="300"
              height="0"
              className="m-auto"
            />
          </>
        )}
      </main>
    </div>
  )
}

export default Home
