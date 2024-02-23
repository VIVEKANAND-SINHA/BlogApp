import Image from "next/image";

export default function LoginImage() {
  return (
    <>
      <div className="image-container">
        <Image
          src="/login.jpg"
          alt="LoginImage"
          width={600}
          height={600}
          priority
        />
      </div>
    </>
  );
}
