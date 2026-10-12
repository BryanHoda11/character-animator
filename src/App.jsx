import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useProgress, Html } from "@react-three/drei";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { LuArrowLeftToLine } from "react-icons/lu";
import Avatar3D from "./components/Avatar.jsx";
import { BsPersonStanding } from "react-icons/bs";
import { RiRunLine } from "react-icons/ri";
import { BsPersonRaisedHand } from "react-icons/bs";
import { Suspense } from "react";
import { FaEdit } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { GiJumpAcross } from "react-icons/gi";
import { GiHighPunch } from "react-icons/gi";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GiHighKick } from "react-icons/gi";
import { GiPush } from "react-icons/gi";
import { IoHandRight } from "react-icons/io5";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { PiMicrophoneStageFill } from "react-icons/pi";

function App() {
  const [Category, setCategory] = useState("Animations");
  const [fullScreen, setfullScreen] = useState(false);

  const Animations = [
    {
      icon: <BsPersonStanding size={35} />,
      title: "Idle",
      animation: "mixamo.com",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <RiRunLine size={35} />,
      title: "Run",
      animation: "Run",
      rotation: [0, 0, 0],
    },
    {
      icon: <BsPersonRaisedHand size={35} />,
      title: "Wave",
      animation: "Wave",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <GiJumpAcross size={35} />,
      title: "Jump",
      animation: "Jump",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <GiHighPunch size={35} />,
      title: "Fight",
      animation: "Fight",
      rotation: [0, 0, 0],
    },
    {
      icon: <PiPersonArmsSpreadFill size={35} />,
      title: "Dance",
      animation: "Dance",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <GiHighKick size={35} />,
      title: "Kick",
      animation: "Kick",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <IoHandRight size={35} />,
      title: "Salute",
      animation: "Salute",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <GiPush size={35} />,
      title: "Push",
      animation: "Push",
      rotation: [0, -Math.PI, 0],
    },
    {
      icon: <BsPhoneVibrateFill size={35} />,
      title: "Talking",
      animation: "Talking",
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      icon: <IoGameController size={35} />,
      title: "Gaming",
      animation: "Gaming",
      rotation: [0, -Math.PI, 0],
    },
    {
      icon: <PiMicrophoneStageFill size={35} />,
      title: "Singing",
      animation: "Singing",
      rotation: [0, -Math.PI, 0],
    },
  ];
  const [selectedAnimation, setselectedAnimation] = useState(Animations[0]);

  const Characters = [
    {
      name: "Adam",
      image: '/images/Adam.png',
      model: "/models/character_idle.glb",
      // rotation: [0, 0, 0],
    },
    {
      name: "Remy",
      image: '/images/Remy.png',
      model: "/models/Remy.glb",
      // rotation: [0, 0, 0],
    },
    {
      name: "Eve",
      image: '/images/Eve.png',
    },
    {
      name: "Swat Guy",
      image: '/images/Swat_guy.png',
    },
    {
      name: "Leonard",
      image: '/images/Leonard.png',
    },
    {
      name: "Sophie",
      image: '/images/Sophie.png',
    },
  ];
  const [selectedCharacter, setSelectedCharacter] = useState(Characters[0]);


  function CharacterLoader() {
    const { progress } = useProgress();

    return (
      <Html fullscreen>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center">

            <div className="relative h-28 w-28">
              <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full border border-blue-400/20" />
              <div className="absolute inset-2 animate-[spin_2s_linear_infinite] rounded-full border-2 border-transparent border-r-blue-300 border-t-blue-400" />
              <div className="absolute inset-5 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border border-blue-400/40 border-b-blue-300" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,0.9)]" />
              <div className="absolute inset-0 animate-[spin_2s_linear_infinite]">
                <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]" />
              </div>

            </div>

            <div className="mt-8 text-center">

              <h2 className="text-lg font-medium tracking-wide text-white">
                Loading your character
                <span className="inline-flex w-8 text-left">
                  <span className="animate-pulse">...</span>
                </span>
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Preparing your 3D experience
              </p>

              <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-blue-400 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                {Math.round(progress)}%
              </p>

            </div>
          </div>
        </div>
      </Html>
    );
  }

  return (
    <>
      <div className={`main-container ${fullScreen ? "" : "justify-between"} flex h-screen w-full bg-linear-to-br from-[#1e293b] via-[#0f172a] to-[#020617] overflow-hidden`}>
        <div className={`h-screen transition-all duration-500 ease-in-out ${fullScreen ? "w-full" : "w-1/2"}`}>

          <Canvas
            camera={{
              position: [0, 1.5, 5],
              fov: 45,
            }} dpr={[1, 1.5]}>
            <ambientLight intensity={1} />
            <directionalLight  position={[3, 5, 3]} intensity={2} />

            <Suspense fallback={null}>
              <Environment preset="studio" />
            </Suspense>
            <Suspense fallback={<CharacterLoader />}>
              <Avatar3D character={selectedCharacter} selectedAnimation={selectedAnimation} />
            </Suspense>

            <OrbitControls />
          </Canvas>

        </div>

        <div onClick={() => setfullScreen(!fullScreen)} className='absolute text-gray-300 flex items-center cursor-pointer gap-1 z-50 right-5 left-3 top-4'>
          {fullScreen ? (<LuArrowLeftToLine />) : (<MdOutlineZoomOutMap />)}
          <p className='text-xs'>{fullScreen ? "Open Panel" : "Full Screen"}</p>
        </div>

        {/* Customization Panel */}
        <div className={`panel h-auto w-100 rounded-2xl p-6 shadow-xl transition-all duration-500 ease-in-out ${fullScreen ? "pointer-events-none invisible translate-x-10 opacity-0" : "visible translate-x-0 opacity-100"}`}>

          <div className="mb-2">
            <h2 className="text-center text-xl font-bold text-gray-300">
              Control Panel
            </h2>
          </div>

          <div className="categories mx-auto flex items-center justify-center gap-7 py-4">
            <button onClick={() => setCategory("Animations")} className={`relative flex cursor-pointer items-center gap-1 pb-2 transition-colors duration-200 ${Category === "Animations" ? "text-white font-semibold" : "text-gray-400"}`}>
              <BsPersonArmsUp /> Animations
              <span className={`absolute bottom-0 left-0 h-px bg-gray-400 transition-all duration-300 ${Category === "Animations" ? "w-full" : "w-0"}`} />
            </button>

            <button onClick={() => setCategory("Edit")} className={`relative flex cursor-pointer items-center gap-1 pb-2 transition-colors duration-200 ${Category === "Edit" ? "text-white font-semibold" : "text-gray-400"}`}>
              <FaEdit /> Edit Avatar
              <span className={`absolute bottom-0 left-0 h-px bg-gray-400 transition-all duration-300 ${Category === "Edit" ? "w-full" : "w-0"}`} />
            </button>
          </div>

          {Category === "Animations" && (
            <>
              <div className="animations mx-auto grid grid-cols-3 items-center gap-10 py-4">
                {Animations.map((a) => (
                  <button key={a.title} onClick={() => setselectedAnimation(a)} className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl p-3 shadow-gray-300 transition-all duration-200 ${selectedAnimation.animation === a.animation ? "text-white shadow-sm" : "text-gray-600"}`}>
                    <div className={`transition-transform duration-200 ${selectedAnimation.animation === a.animation ? "scale-110" : ""}`}>
                      {a.icon}
                    </div>

                    <p className="text-sm font-medium">
                      {a.title}
                    </p>
                  </button>
                ))}
              </div>
            </>
          )}

          {Category === "Edit" && (<div className="edit-panel py-4 h-125 overflow-y-auto custom-scrollbar">
            <h3 className="mb-4 font-semibold text-gray-500"> Select Character </h3>

            <div className="grid grid-cols-2 gap-4">
              {Characters.map((character) => (
                <button key={character.name} onClick={() => { setSelectedCharacter(character); setselectedAnimation(Animations[0]); }} className={`flex min-w-0 flex-col cursor-pointer items-center overflow-hidden rounded-xl transition-all duration-200 ${selectedCharacter.name === character.name ? "text-white " : "text-gray-600"}`}>

                  <div className="h-40 w-full overflow-hidden rounded-t-xl">
                    <img src={character.image} alt={character.name} className="h-full w-full object-contain" />
                  </div>

                  <div className="flex w-full flex-col items-center gap-2 px-2 py-3">
                    <span className={`text-sm font-semibold ${selectedCharacter.name === character.name ? "text-white" : "text-gray-400"}`}>
                      {character.name}
                    </span>

                    {selectedCharacter.name === character.name && (
                      <span className="text-xs font-medium text-green-600">
                        Selected
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>)}

        </div>

      </div>
    </>
  )
}

export default App
