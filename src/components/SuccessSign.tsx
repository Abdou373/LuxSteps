export default function SuccessfulSign() {
  return (
    <div className="w-full grid place-content-center ">
      <div className="circle h-40 overflow-hidden w-40 rounded-full relative">
        <div className="mark absolute h-[calc(100%-10px)] w-[calc(100%-10px)] bg-white z-10 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  )
}