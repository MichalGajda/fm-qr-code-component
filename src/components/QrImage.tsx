const QR_IMAGE_SRC = `${import.meta.env.BASE_URL}image-qr-code.png`;

export default function QrImage() {
  return (
    <div className="imageContainer">
      <img
        className="qrImage"
        src={QR_IMAGE_SRC}
        alt="QR code linking to the referenced website"
      />
    </div>
  );
}
