interface CardProps {
  name: string;
  image: string;
  modal: () => void;
}

export const Card = ({ name, image, modal }: CardProps) => {
  return (
    <>
      {name !== "Portfólio" ? (
        <li
          className="max-w-[300px] w-max max-h-[450px] cursor-pointer hover:bg-zinc-950 text-black hover:text-zinc-50 bg-zinc-50 rounded-md p-1 flex flex-col justify-between"
          onClick={modal}
        >
          <img
            src={image}
            alt={name}
            className="w-[250px] h-[350px] object-cover rounded-md flex items-center justify-center"
          />
        </li>
      ):
      (
        <li
          className="max-w-[250px] w-max max-h-[450px] cursor-pointer hover:bg-zinc-950 text-black hover:text-zinc-50 bg-zinc-50 rounded-md p-1 flex flex-col justify-between"
          onClick={modal}
        >
          <img
            src={image}
            alt={name}
            className="w-[300px] h-[350px] object-cover rounded-md flex items-center justify-center"
          />
        </li>
      )}
    </>
  );
}