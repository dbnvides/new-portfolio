export const Card = ({ name, image, modal }: any) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <li
      className="max-w-[300px] w-max max-h-[450px] cursor-pointer hover:bg-zinc-950 text-black hover:text-zinc-50 bg-zinc-50 rounded-md p-1 flex flex-col justify-between"
      onClick={modal}
    >
      <img
        src={image}
        alt={name}
        className="w-[250px] h-[350px] object-contain rounded-md flex items-center justify-center"
      />
      <h2 className="text-center font-dosis font-bold text-2xl">{name}</h2>
    </li>
  )
}
