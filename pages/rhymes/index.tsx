import React from 'react'
import Modal from "../components/modal";

const Rhymes = () => {
  const [open, setOpen] = React.useState(false)
  const title = 'Twinkle, Twinkle little star'
  const onClose = React.useCallback(() => {
    setOpen(false)
  }, [])
  const textHandler = React.useCallback(async () => {
    setOpen(true)
    const res = await fetch('/api/rhymes')
    const poems = await res.json()
    console.log(poems)
  }, [])
  const youTubeHandler = React.useCallback(() => {
    setOpen(true)
  }, [])
  return (
    <>
      <Modal {...{ open, onClose, title }}/>
      <div className="border-t-8 border-orange-200 bg-orange-100 p-1 px-6 text-brown">
        <h1 className="s-h1 text-2xl">Rhymes</h1>
        <h5>Home &gt; Rhymes</h5>
      </div>
      <div className="flex justify-center welcome p-2 sm:p-4">
        <ul className="border-8 border-orange-200 bg-white rounded p-2 sm:p-8 w-11/12 sm:w-3/4 bg-opacity-75">
          <li className="flex justify-between py-2 border-b border-dotted border-gray-800 w-full">
            <div className="truncate lobster text-lg sm:text-2xl w-3/5 pt-2">
              Twinkle, Twinkle little star
            </div>
            <div className="inline-flex w-2/5 justify-end">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded px-4 py-2 border-b-4 border-blue-700 hover:border-blue-500 mr-1" onClick={textHandler}>
                <i className="fa fa-book" aria-hidden="true"></i>
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded px-4 py-2 border-b-4 border-blue-700 hover:border-blue-500" onClick={youTubeHandler}>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/rhymes')
//   const poems = await res.json()
//   console.log(poems)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Rhymes;
