import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const ImageDisplay = ({ images }) => {
  if (images.length <= 0) {
    return (
      <div className="grid place-content-center w-full h-full">
        <h1 className="font-bold text-5xl">No images were found.</h1>
      </div>
    );
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const [preview, setPreview] = React.useState(false);

  const [previewIndex, setPreviewIndex] = React.useState(0);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closePreview() {
    setPreview(false);
  }

  function openPreview(i) {
    setPreviewIndex(i);
    setPreview(true);
  }

  return (
    <div>
      <div
        className={`grid grid-rows-${
          images.length > 4 ? "5" : images.length + 1
        } sm:grid-cols-2 sm:grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 xl:grid-cols-5 gap-5`}
      >
        {images.slice(0, 4).map((item, i) => (
          <button
            key={i}
            className="relative w-full h-56 hover:bg-gray-800/25 focus-visible:bg-gray-800/25 transition-all rounded overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            onClick={() => openPreview(i)}
          >
            <div
              style={{
                backgroundImage: `url('${item.url}')`,
              }}
              className="absolute rounded z-[-99] left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat"
            ></div>
            <span className="absolute font-bold text-lg text-slate-50 w-full h-full left-0 top-0 transition-all flex items-center justify-center translate-y-[200px] group-hover:translate-y-0 group-focus:translate-y-0">
              View
            </span>
          </button>
        ))}
        {images.length > 4 && (
          <button
            className="relative grid place-content-center font-bold text-3xl text-center cursor-pointer rounded shadow  transition-all hover:bg-pos-100 text-slate-50 sm:col-span-2 xl:col-span-1 w-full h-full group"
            onClick={openModal}
          >
            <div className="absolute rounded z-[-98] left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat group-hover:bg-gray-800/75 bg-gray-800/50"></div>
            <div
              style={{
                backgroundImage: `url('${images[images.length - 1].url}')`,
              }}
              className="absolute rounded z-[-99] left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat"
            ></div>
            <span className="z-[-97]">+{images.length - 4}</span>
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-gray-900">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-medium text-2xl">Primary</span>
                    <button
                      onClick={closeModal}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 rounded transition-all"
                    >
                      <XMarkIcon className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="grid grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                      {images.map((item, i) => (
                        <button
                          key={i}
                          className="relative w-full h-40 hover:bg-gray-800/25 focus-visible:bg-gray-800/25 transition-all rounded overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                          onClick={() => openPreview(i)}
                        >
                          <div
                            style={{
                              backgroundImage: `url('${item.url}')`,
                            }}
                            className="absolute rounded z-[-99] left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat"
                          ></div>
                          <span className="absolute font-bold text-lg text-slate-50 w-full h-full left-0 top-0 transition-all flex items-center justify-center translate-y-[100px] group-hover:translate-y-0 group-focus:translate-y-0">
                            View
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-all"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={preview} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePreview}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-gray-900">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-medium text-2xl">
                      Image {previewIndex + 1}
                    </span>
                    <div className="flex items-center">
                      <a
                        href={images[previewIndex].url}
                        target="_blank"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 rounded transition-all ml-3 text-center"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square w-8 h-8 text-2xl"></i>
                      </a>

                      <button
                        onClick={closePreview}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 rounded transition-all ml-3"
                      >
                        <XMarkIcon className="w-8 h-8" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <img
                      loading="lazy"
                      src={images[previewIndex].url}
                      className="rounded left-0 top-0 w-auto h-full max-h-screen bg-cover bg-center bg-no-repeat mx-auto"
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-all"
                      onClick={closePreview}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
