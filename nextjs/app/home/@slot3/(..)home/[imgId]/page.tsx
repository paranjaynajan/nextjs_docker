import Image from "next/image";
import Modal from "@/components/modal/modal";
import { data } from "../../imges";



export default function PhotoModal({
  params: { imgId },
}: {
  params: { imgId: string };
}) {
  const photo = data.find((p) => p.id === parseInt(imgId))!;

  return (
    <Modal>
      <Image
        alt={photo.title}
        src={photo.img}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold text-center">{photo.title}</h2>
     
      </div>
    </Modal>
  );
}