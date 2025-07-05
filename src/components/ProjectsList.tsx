`use client`;

const nomesDeProjetos = [
  "LumenTrack",
  "NovaSync",
  "OrbitFlow",
  "PixelNest",
  "CodePulse",
  "ZenPanel",
  "EchoBoard",
  "ClarityDesk",
  "StreamlineX",
  "NebulaDash",
  "DataRipple",
  "QuantumVault",
  "TaskForge",
  "BrightCore",
  "FusionCanvas",
];

export const ProjectsList = () => {
  return (
    <div className="text-white w-[40%] absolute right-0 h-[100vh] top-0 flex overflow-auto flex-col gap-15 hide-scroll">
      {nomesDeProjetos.map((projeto, index) => (
        <div
          className="text-4xl tracking-widest text-title self-end mr-30 mt-10 mb-10"
          key={index}
        >
          {" "}
          {projeto}
        </div>
      ))}
    </div>
  );
};
