// "use client";

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// const FondoBackground: React.FC = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container: Container | undefined) => {
//     console.log("Particles container loaded", container);
//   }, []);

//   return (
//     <>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: "#232741",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#13E8E9",
//             },
//             links: {
//               color: "#13E8E9",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 6,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//       <div className="absolute top-12 left-4 text-[#13E8E9] text-sm font-bold">
//         <span>{80}</span> particles
//       </div>
//     </>
//   );
// };

// export default FondoBackground;